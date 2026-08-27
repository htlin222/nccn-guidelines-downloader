# 門診核對清單的格式規格

一個 NCCN 決策節點一個檔：`cf/snippets/<gid>/<ref>.md`。

用途是**門診當下的小抄**——病人坐在對面，快速叫出來逐項核對，確認沒有漏東西。
不是讀物，不是教材，不是給病人看的說明。所有格式規則都是從這個用途推出來的。

單一真相是這些檔案（git 追蹤），D1 是它們的可查詢副本。方向永遠是檔案 → D1。

---

## 硬規則

| 規則 | 為什麼 |
|---|---|
| 全英文 | 病歷本文的語言 |
| 只用 `#`（h1）當區塊標題，不得出現 `##` / `###` | 系統是純文字，多層標題在純文字裡分不出階層 |
| 內容一律 list / checkbox，階層靠縮排（4 空格一層） | 縮排在純文字裡看得出來，標題看不出來 |
| **不得使用** `**粗體**` 或 `*斜體*` | 純文字裡那就是星號 |
| 要填的空一律 `___ (variable_name)` | 一眼看得出哪裡要填；名稱對應 frontmatter 的 `[[variables]]` |
| 底線要寫**字面的三個底線**，不要跳脫成 `\_\_\_` | 系統是純文字，讀者看到的就是反斜線；而且 verify 會找不到任何變數槽 |
| 條件寫進條目本身，不另開一節 | 小抄不能要求你跳著讀 |
| 散文拆成可勾的原子 | 一句話裡漏一項看不出來，少一格看得出來 |

最後兩條不是排版偏好，是這東西能不能防漏的關鍵。

反例——原文的 "Axillary assessment with exam, axillary ultrasound unless prior MRI
demonstrated negative axillary nodes, percutaneous biopsy of suspicious nodes"
照抄成一行，marker clip 就消失了，而那是漏了代價最高的一項（術中找不到那顆淋巴結）。
拆開之後它是獨立一格。

---

## 內容規則

**只寫來源頁有的東西。** 藥名、劑量、百分比、category 標註、數字閾值，全部必須在
`_src/<gid>/<ref>.txt` 裡找得到。`verify_snippets.py` 會逐一比對，對不上就 reject。
不確定的寧可不寫——漏一項的代價遠低於寫錯一項。

**註腳要讀。** NCCN 的關鍵條件常常在頁尾的 `a` `b` `tt` `uu` `vv` 註腳裡，
不在主圖上。素材檔是整頁全文，註腳都在。散文式的摘要最容易把註腳吃掉。

**不要加來源頁沒有的臨床建議。** 就算你知道那是對的、就算它是常規。這份東西的價值
在於「它就是 NCCN 這一頁」，加料會讓它變成沒人能查證的東西。

**保留 category 標註。** `(category 1)` `(category 2B)` 直接寫在條目後面。

**交叉引用寫 ref。** 該頁指向別頁時寫 `(BINV-A)`，不要展開內容——那是另一個 snippet 的事。

---

## 檔案結構

```
+++
（TOML frontmatter，見下）
+++

# Source
# Assessment
# <一到多個核對區塊，標題自己取，用該頁的實際內容命名>
# Next
```

`# Source` 和 `# Assessment` 必要，`# Next` 在該頁有出口分支時必要。
中間的區塊數量與命名依該頁內容決定，不要硬套模板。

### frontmatter

```toml
+++
id           = "<gid>/<ref>"
gid          = "<gid>"
ref          = "<REF>"
page         = <PDF 頁碼，整數>
title        = "<一句話，英文，說明這一頁在決定什麼>"
nccn_version = "<素材檔頁尾的版本，例如 6.2026>"
nccn_date    = "<素材檔頁尾的日期，例如 07/29/26>"
generated    = "<YYYY-MM-DD>"
see_also     = ["<同一次門診大概率也會用到的 ref>"]

[facets]
# 只能填 _vocab.json 的 axes 裡有的值。多值用陣列，單值用字串。
# 該頁沒有明確涉及的軸就省略，不要填 "any" 湊數。
disease   = "<gid>"
timepoint = "..."

[[variables]]
name = "..."; type = "number|text|enum"; options = [...]  # enum 才需要 options
+++
```

**`see_also` 必須寫在 `[facets]` 之前。** TOML 裡 `[facets]` 之後的每一個 key 都
屬於那個 table，寫在後面會變成一個叫 `see_also` 的 facet 軸，verify 直接 reject。

`kind`（decision / principles）不要填——由 ref 尾碼機械決定：數字結尾是 decision，
字母結尾是 principles，`COL-2A` 這種數字加字母的續頁算 decision。

---

## Golden example

`cf/snippets/breast/BINV-12.md` 是基準。動手前先讀它，特別看：

- `# Source` 怎麼寫適用條件
- `# Assessment` 的變數槽密度（一行一個臨床維度，不要一行塞三個空格）
- 巢狀怎麼把條件掛在它所屬的條目底下（marker clip 掛在 percutaneous biopsy 下面）
- `# Next` 怎麼把出口分支寫成 checkbox

---

## 驗證

寫完跑 `python3 cf/verify_snippets.py <檔案路徑>`。四關全過才算完成：

1. **格式關**——沒有 `##`、沒有 `**`、變數格式正確、frontmatter 可解析
2. **字典關**——facet 值都在 `_vocab.json` 裡
3. **來源關**——藥名、劑量、數字、category 標註都在素材檔中找得到
4. **結構關**——`# Source` / `# Assessment` 存在，frontmatter 必要欄位齊全

verify 不過就修到過，不要交出去。
