# 從斷點接手

這份工作是逐頁把 NCCN 的決策節點寫成門診核對清單（issue #4），量大到跨 session。
這一頁是給下一個 session 讀的：**讀完這一頁就能接著做，不需要讀對話紀錄。**

沒有進度檔，也沒有游標。狀態就是檔案系統本身——`snippets/<gid>/<ref>.md` 存在
就是做完了。所以中斷不會留下要收拾的東西，重跑一次就從斷點接上。

---

## 現在做到哪裡

```bash
cd cf && bash snippets_status.sh
```

優先順序（使用者定的，照這個順序做）：

1. **乳癌、大腸癌、肺癌** — 主要照顧的癌別。**已完成 53 份。**
2. **消化道其餘** — rectal、gastric、pancreatic、esophageal、btc、hcc、
   appendiceal、small_bowel、ampullary、gist、anal。**已完成 116 份。**
3. **血液科** — 18 份指引，素材全部已 dump。已完成 98 份，剩下是零散的小指引：
   castleman 6、histiocytic_neoplasms 22、cutaneous_lymphomas 22、mlne 9、
   mastocytosis 5、amyloidosis 4、hairy_cell 2。
   （`waldenstroms` dump 出 0 個節點——TOC 裡沒有 algorithm 條目，還沒查是
   那份指引真的沒有，還是 build_toc 漏了它。）

`prostate` 的素材已備好（18 份）但不在優先序上，先不做。

2026-08-27 收工時：**267/355（75%）**。

---

## 一輪的完整步驟

```bash
cd cf && set -a && . ../.env && set +a

# 1. 素材（新的指引才需要；素材不進版控，是 page_text 的衍生檔）
#    它會自動把 TOC 沒列、但主頁引用到的註腳頁（AML-4A、GAST-2A…）整頁附在後面。
#    NCCN 很愛把整頁註腳拆出去，而註腳正是它藏限定條件最多的地方。
bash dump_snippet_src.sh <gid>

# 2. 待辦清單。輸出直接餵給下一步
bash snippets_status.sh <gid> --todo

# 3. 生成 + 對抗性審查（見下）

# 4. 驗證、載入、commit
python3 verify_snippets.py
bash load_snippets.sh
```

### 第 3 步：跑生成 workflow

腳本是 `snippets/_workflow-generate.js`，args 是 `["<gid>/<REF>", ...]`，
一次可以跨多份指引：

```
Workflow({
  scriptPath: "<repo>/cf/snippets/_workflow-generate.js",
  args: ["gastric/GAST-1", "gastric/GAST-2", ...]
})
```

它對每個 ref 跑兩個 agent：先生成，再用另一個 agent 對著素材做對抗性審查。
**兩階段都不能省。** 機械四關擋得住編出來的藥名與數字，擋不住這三類：

- 把限定條件丟掉——`REC-4` 的 "positive margins" 寫成 "margins"，於是任何 margin
  結果都讀成高風險；`hcc/ST-1` 的 T1 漏掉「≤2 cm 或 >2 cm 且無血管侵犯」，會把
  T2 拉進 T1
- 把可選寫成必須——`BINV-5` 的 `± pertuzumab` 變成 `Add pertuzumab`
- 憑空生成「總結句」——`REC-18` 寫「治療分組只由兩件事決定」，來源從未這樣斷言。
  這類最危險，因為它們讀起來像好文件，卻把讀者從「照著核對」推向「照著推論」

一個 ref 大約 115k tokens（生成加審查）。一次 30–40 個是舒服的批量。

### 規模參考

實測每批 40 個 ref 約 17 分鐘、80 個 agent、4.7M subagent tokens。

---

## 字典（`_vocab.json`）

facet 值是受控詞彙，模型只能選不能造，`verify_snippets.py` 會 reject 字典外的值。

**新癌別開始之前先看一眼字典夠不夠。** 這是踩過的坑：頭兩批做完才發現字典只有
乳癌的值，於是大腸癌與肺癌的 biomarker 軸幾乎全空——「大腸癌 MSI-H」這種檢索
完全叫不出東西，而且不會報錯。補字典之後要回填：

```
Workflow({ scriptPath: "<repo>/cf/snippets/_workflow-backfill-facets.js",
           args: ["<gid>", ...] })
```

血液科的值已經補過了（biomarker 65、histology 36、timepoint 17、stage 12，
別名 260）。**下一個新科別開始前，一樣先看一眼夠不夠**——這件事做在事前是十分鐘，
做在事後是一整輪回填。

回填的原則是**寧可留空也不要填一個該頁其實沒有分支的值**。填錯的代價不是漏掉，
是讓清單出現在不該出現的搜尋結果裡，而一個點開發現不適用的清單會讓人不信任整套。

---

## 先做這件事：補跑 21 份的對抗性審查

`snippets/_pending-audit.txt` 列著 21 份「生成完成、但審查沒跑成」的清單
（2026-08-27 撞到 session limit）。它們四關全過，在 D1 裡 `review='unaudited'`。

**未審與已審不是同一個東西，即使它們長得一模一樣。** 四關擋得住編出來的藥名與
數字，擋不住這三類——全部實際發生過，而且全部四關通過：

- 把 `positive margins` 寫成 `margins`（任何 margin 結果都變成高風險）
- 把 `± pertuzumab` 寫成 `Add pertuzumab`（可選變必須）
- 憑空生成一句總結規則（讀起來像好文件，把人從核對推向推論）

補法就是把那 21 個 ref 丟回生成 workflow 跑一遍（會重新生成再審查一次）：

```
Workflow({ scriptPath: "<repo>/cf/snippets/_workflow-generate.js",
           args: ["hodgkins/HODG-6", "mds/MDS-3", ...] })
```

跑完把 `_pending-audit.txt` 裡對應的行刪掉，重新 `bash load_snippets.sh`——
它會把 `unaudited` 清掉。

## 還沒做的事

- **人工審閱。** D1 現在是 246 份 `review=NULL`（跑過完整流程）與 21 份
  `review='unaudited'`。兩者都還沒有人看過——機械四關與對抗性審查都是模型，
  真正的臨床把關還沒發生。`load_snippets.sh` 刻意不覆寫人填的 `review` 值。
- **參考附錄（principles）。** `BINV-A` 這類字母結尾的 ref 是查閱資料不是門診情境，
  目前不生成，只以 `see_also` 出現。確認真的需要再說。
- **取用端點。** `/api/v1/snippet/...` 還沒寫。issue #4 記了傾向：預設只回
  `# Source` 以下的 body，要 frontmatter 的加 `?meta=1`。

---

## 相關檔案

| 檔案 | 是什麼 |
|---|---|
| `snippets/SPEC.md` | 格式與內容規格，動手前必讀 |
| `snippets/breast/BINV-12.md` | golden example |
| `snippets/_vocab.json` | facet 受控詞彙與中英別名 |
| `verify_snippets.py` | 四關驗證 |
| `load_snippets.sh` | 檔案 → D1，冪等 |
| `snippets_status.sh` | 進度與待辦，狀態不落地 |
| `.github/workflows/snippets.yml` | CI：驗證、同步 D1、報版本過期 |
