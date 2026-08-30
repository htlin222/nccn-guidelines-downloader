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

**先看懂這個數字。** `snippets_status.sh` 的分母是「已 dump 的素材」，不是全庫——
它只回答「已備素材的做完了沒」。2026-08-27 我因此誤判了三次，宣告過「355/355 全庫
完成」，而那只是當時 dump 過的 33 份指引。

真實規模看這個：

```bash
python3 - <<'EOF'
import json, os, glob
cat = [g["id"] for g in json.load(open("guidelines.json"))]
dumped = [g for g in cat if os.path.isdir("snippets/_src/" + g)]
print("catalogue      %d 份指引" % len(cat))
print("已 dump        %d 份，%d 個節點" % (len(dumped),
      sum(len(glob.glob("snippets/_src/%s/*.txt" % g)) for g in dumped)))
print("已完成         %d" % sum(len(glob.glob("snippets/%s/*.md" % g)) for g in dumped))
print("尚未 dump      %d 份" % (len(cat) - len(dumped)))
EOF
```

catalogue 是 **91 份 NCCN 指引**（另有 91 份 MD Anderson，還沒開始）。
全庫決策節點估計 950–1,000 個。

優先順序（使用者定的）：

1. **乳癌、大腸癌、肺癌** — 主要照顧的癌別。**完成**（53）
2. **消化道其餘** — **完成**（116）
3. **血液科** — 18 份指引，**完成**（194）
4. 其餘實體瘤、支持治療、兒童腫瘤 — **完成**

2026-08-30 收工時：957 份。**同日稍晚做到 1185 份**——但其中 28 份未審，
見下面「未審清單」。

## 接手第一件事（2026-08-30 傍晚暫停）

暫停時的狀態，三句話：

1. **1185 份檔案，1157 份跑完整流程，28 份只生成沒審。** 那 28 份在
   `_pending-audit.txt`，全是 survivorship 與 genetics_ceg 的收尾。
2. **D1 還停在 957 份。** 這個 session 一路 commit 但沒有跑過
   `bash load_snippets.sh`，所以檔案與 D1 差 228 份。接手先跑它。
3. **生成 workflow 已改成 Sonnet**（`_workflow-generate.js` 的 `MODEL`）。
   那 28 份是這個專案第一批 Sonnet 產出，前面 1157 份都是 Opus。

接下來的順序：

```bash
cd cf && set -a && . ../.env && set +a
bash load_snippets.sh                     # 先把 D1 補上，順便標記 unaudited
```

然後把 `_pending-audit.txt` 那 28 份丟回生成 workflow（它會重生成再審查），
跑完刪掉那些行、重新 load。再把剩下的待辦跑完：

    survivorship 還有約 62 個節點，加上 genetics_ceg/GENE-22 與
    survivorship/PH-3A（生成 agent 回報 ok 但檔案沒落地，所以算待辦）

**最後 13 份已經 dump 完，字典也補好了**（2026-08-30 晚）。剩下的就是把 295 個
節點生完：

    hct 10   smoking 7   hiv 6   older_adult 10   breast_risk 9
    prostate_detection 7   aya 17   lung_screening 20
    breast-screening 21   colorectal_screening 24
    genetics_bopp 23   genetics_ceg 51   survivorship 90

待辦清單這樣重建（狀態就是檔案系統，跑幾次都一樣）：

```bash
cd cf
for g in hct smoking hiv older_adult breast_risk prostate_detection aya \
         lung_screening breast-screening colorectal_screening \
         genetics_bopp genetics_ceg survivorship; do
  bash snippets_status.sh "$g" --todo | sed "s|^|$g/|"
done
```

輸出切成 40 個一批餵給生成 workflow。**順序刻意不是字母序**——小份的排前面，
survivorship 那 90 個排最後。撞額度中斷時，前面已經有幾份指引是完整的，
而不是十三份各做一半。

字典已經補過了（commit `982bb4f`）：biomarker +45（41 個 germline 基因，加
lynch / fap / afap / serrated-polyposis），timepoint +3（risk-reduction、
survivorship、genetic-testing）。PJS→stk11、JPS→smad4、PHTS→pten、LFS→tp53、
HDGC→cdh1、MAP→mutyh、GAPPS→apc 走別名，不另立值。**開始前不必再補字典。**

genetics_ceg 的 GENE-1..22 是一頁一個基因，那 45 個值就是為它們加的；填 facet 時
一頁只填該頁真正在講的那個基因，不要把 GENE-19 那種參考文獻頁上出現的基因全填上。

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

## 未審清單：`_pending-audit.txt`

現在是空的。它存在是因為撞額度時「生成完成、審查沒跑」的清單跟跑完整流程的
清單不是同一個東西，即使它們長得一模一樣。`load_snippets.sh` 讀這個檔，把那些
清單的 review 設成 `unaudited`，讓狀態在 D1 裡看得見，而不是只存在某個人的記憶裡。

**中斷時要做的事**：把生成完成但沒審到的 ref 一行一個寫進去，再 `load_snippets.sh`。
補跑就是把那些 ref 丟回生成 workflow（它會重新生成再審查），跑完刪掉對應的行、
重新 load。

**為什麼未審不能當已審**：四關擋得住編出來的藥名與數字，擋不住下面這些——全部
實際發生過，而且全部四關通過：

- `REC-4` 把 `positive margins` 寫成 `margins`（任何 margin 結果都變高風險）
- `hcc/ST-1` 的 T1 漏掉「≤2 cm 或 >2 cm 且無血管侵犯」（把 T2 拉進 T1）
- `BINV-5` 把 `± pertuzumab` 寫成 `Add pertuzumab`（可選變必須）
- `bone/CHON-2` 加了一個 systemic therapy 選項，而同頁的註腳明說沒有標準化療
- `CERV-2` 把註腳掛到沒有那個標記的四行上（**漏條件讀者會發現清單比較短；
  條件掛錯地方讀者不會發現任何異常**）
- `SELLAR-1` 把「無法手術處理的殘留腫瘤，考慮放療或觀察」寫成「轉介放療」


## 還沒做的事

- **人工審閱。** D1 現在 957 份全是 `review=NULL`——都跑過完整流程（生成 + 對抗性
  審查），但沒有一份有人看過。機械四關與對抗性審查都是模型，真正的臨床把關還沒
  發生。`load_snippets.sh` 刻意不覆寫人填的 `review` 值。
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
