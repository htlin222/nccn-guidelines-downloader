# 寫一堂核心課程

讀完這一頁就能寫，不需要對話紀錄。設計背景在
[`docs/plans/2026-09-09-core-course-design.md`](../../docs/plans/2026-09-09-core-course-design.md)，
**範本是 [`breast/10-mbc-her2.md`](breast/10-mbc-her2.md)**——照著它寫，格式不會錯。

---

## 0. 兩條不能破的規則

1. **課程本文中英夾雜**（台灣醫學共筆的寫法：藥名、trial、biomarker 留英文，敘述用中文）。
   **圖裡的文字一律英文**——那些圖要貼進學會演講的投影片。同一課裡文字中文、圖英文是
   刻意的，不是漏翻。
2. **只寫素材裡有的東西**。素材是 `cf/snippets/_src/breast/<ref>.txt`（NCCN 該頁的完整
   page_text，含頁尾註腳）。編出來的藥名、劑量、族群、數字，機械檢查一個都擋不住——
   `cf/snippets/RESUME.md` 記著三類實際發生過而且全部通過檢查的錯誤：把
   `positive margins` 寫成 `margins`、把 `± pertuzumab` 寫成 `Add pertuzumab`、憑空生
   一句總結規則。

   唯一的例外是**關鍵試驗那一段**與圖裡的試驗小字：NCCN 不列試驗，那一段是策展補充。
   所以那一段一定要標「這張表是策展補充，不在 NCCN 原文頁面上」，而且**沒把握的數字
   就不要寫數字**，寫定性結論（「PFS 顯著改善」）。寫錯一個中位數比少寫一個嚴重。

---

## 1. 檔案

```
cf/courses/breast/<order>-<slug>.md      課程本文
cf/courses/figures/breast/<slug>-<kind>.html   圖，一張一個檔
```

### frontmatter

```toml
+++
id      = "breast/mbc-her2"          # track/slug，與檔名的 slug 一致
track   = "breast"
order   = 10                          # 決定 sidebar 排序，不可重複
group   = "晚期"                      # 基礎 / 早期 / 晚期 / 長期
title   = "轉移性 HER2 陽性乳癌"
oneline = "一句話講完這一課"           # 會出現在卡片與標題下方
refs    = ["BINV-21", "BINV-24"]      # 這一課涵蓋的 NCCN 節點，決定第 9 段
figures = ["breast/mbc-her2-landscape"]
nccn    = { gid = "breast", version = "6.2026" }
+++
```

`refs` 裡的每一個都必須有 `snippets/_src/breast/<ref>.txt`。寫不存在的 ref，網頁上會
出現紅色刪除線標記（不是靜靜變成純文字，那樣錯字會永遠留著）。

### 八段，段名一字不差

```
## 這一課回答什麼
## 治療地景
## 決策路徑
## 關鍵試驗
## 必背數字
## 記憶法
## 門診核對
## 常見陷阱
```

**第 9 段「原文對照」不要寫**，由 `gen_courses.sh` 從 `refs` 生成。少一段或多一段，
編譯會直接失敗並指出是哪一段。

---

## 2. 語法

| 寫法                              | 變成                                                 |
| --------------------------------- | ---------------------------------------------------- |
| `[[BINV-24]]`                     | 連到 viewer 的那一頁                                 |
| `==57.1 個月==`                   | 遮罩，點一下才顯示（只用在「必背數字」與「記憶法」） |
| `![[fig:breast/xxx]]`             | 嵌入圖 + 引用按鈕 + 下載 PNG                         |
| `- [ ] 項目`                      | 可勾選（只在「門診核對」那一段生效）                 |
| `**粗**` `*斜*` `` `碼` ``        | 一般 markdown                                        |
| `### 小標`、表格、`> 引言`、`---` | 一般 markdown                                        |

清單縮排四格是第二層，只支援兩層。

---

## 3. 每一段寫什麼

| 段             | 內容                                                        | 長度       |
| -------------- | ----------------------------------------------------------- | ---------- |
| 這一課回答什麼 | 一句話點題 + 3 條 take-home（用 `- **粗體**：說明`）        | 150 字     |
| 治療地景       | 1–2 張圖 + 「看這張圖記三件事」                             | 300 字     |
| 決策路徑       | `###` 分階段，條列，**每條掛 `[[ref]]`**                    | 最長的一段 |
| 關鍵試驗       | 表格：試驗 / 族群 / 比較 / 結果 / 改變了什麼 + 策展補充聲明 | 表格       |
| 必背數字       | 條列，數字用 `==` 遮起來                                    | 8–10 條    |
| 記憶法         | `**口訣**` 開頭的短段落，每個口訣說明為什麼好記             | 3–5 個     |
| 門診核對       | `- [ ]`，每條掛 `[[ref]]`                                   | 10–14 條   |
| 常見陷阱       | `**陷阱**` 開頭的短段落，**引用 NCCN 原句**支撐             | 5–8 個     |

---

## 4. 圖

每張一個 `.html`，開頭是 metadata 註解，本體是 `<section class="fig">`：

```html
<!doctype html>
<!-- fig
id:    breast/early-hr-decision
title: Adjuvant systemic therapy for early HR-positive, HER2-negative disease
kind:  matrix          # matrix | flow | framework | table
tags:  [breast, hr, early]
cite:  [{ gid: "breast", refs: ["BINV-6", "BINV-7"], page: 19 }]
-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>…</title>
    <link rel="stylesheet" href="../figure.css" />
    <style>
      body {
        margin: 0;
        background: #fff;
      }
    </style>
  </head>
  <body>
    <section class="fig">…</section>
  </body>
</html>
```

畫布固定 **1600×800（2:1）**，白底，只有兩個顏色：黑 `#111` 與 `#3d6869`。

**字級不准覆寫。** `--fig-fs-node: 22px` 等變數是簡報可讀性的底線：貼進 16:9 投影片、
佔九成寬時，1600px 畫布放大約 1.08 倍，所以 22px ≈ 13pt、16px 的圖例 ≈ 9.5pt。一般
會議建議圖表最小 14pt，所以這已經是密集參考圖的邊界。縮字級能讓任何內容塞得下，代價
是這張圖在演講裡失去作用——而它**在網頁上看起來仍然很好**，所以你不會發現。
所有 class 都來自 [`figure.css`](figures/figure.css)——**不要自己發明顏色**，變數全部
帶 `--fig-` 前綴（沒有前綴的話會被課程頁面的 `:root` 蓋掉，實心節點會在網頁上消失
而 PNG 正常）。

常用零件：

| class                          | 用途                                                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `.fig-head`                    | 頂端欄標籤                                                                                                                                    |
| `.fig-side`                    | 左緣列標籤（112px 寬，橫排）                                                                                                                  |
| `.fig-node`                    | 白底節點；`.solid` 首選（實心主色）、`.ink` 起終點（實心黑）、`.key` 分層條件（粗邊框）、`.wash` 補充、`.dashed` 可選、`.sm` 小、`.left` 靠左 |
| `.fig-node.stack` + `.fig-sub` | 節點內第二行小字（放試驗名）                                                                                                                  |
| `.fig-tag`                     | 節點內角標（`cat 1 · preferred`）                                                                                                             |
| `.fig-group` + `.fig-glabel`   | 群組框；`.dashed` / `.plain`                                                                                                                  |
| `.fig-arrow` `.long`           | 細箭頭                                                                                                                                        |
| `.fig-legend` + `<i>`          | 右下圖例                                                                                                                                      |
| `.fig-col.fill`                | 欄內節點平分高度（矩陣用）；`.keep` 排除某一格                                                                                                |

**版面的四個經驗**：

- 矩陣圖用 `.fill` 平分欄高才填得滿；流程圖不要平分，節點自然高度、整列
  `align-items:center` 成團置中，留白對稱落在上下。
- 內容不夠撐滿 1600×800 時，**加有價值的資訊**（試驗名、貫穿全程的橫帶），不要放大
  盒子——放大只會得到一堆 300px 高的空框。
- **內容太多而溢出時的順序是固定的**：① 加 `dense` → ② 加 `tight` → ③ 減內容
  （把次要的小字移到課程本文，那裡沒有 800px 的限制）→ ④ **拆成兩張圖**。
  **不要自己在 file-local `<style>` 裡調 gap、padding 或字級**：那會跟 `dense` 打架
  （specificity 較高的 `dense` 會蓋掉你更緊的值，圖反而變高），而且第 30 張圖會有
  30 套不同的密度。
- **拆圖的切法**：矩陣沿「治療線」或「分層」切（例如「一線與二三線」與「四線以後」
  各一張），流程沿「階段」切。拆出來的新圖要有自己的 `<!-- fig -->` metadata 與
  `id`，並且**同時**加進課程 frontmatter 的 `figures` 與本文的 `![[fig:…]]`——只加一邊
  的話，圖要嘛從文章裡消失、要嘛在圖庫裡變成沒人引用的孤兒（`verify` 只會 warn）。
  切完之後兩張都要能獨立看懂：各自的欄標籤、圖例、註腳都要完整，因為它們會被分別
  貼到兩張投影片上。
- `.fig-col.fill > *` 的 `flex:1` 會讓內容較高的節點靜靜溢出邊框（PNG 上看得到文字掉出
  白框）。`.keep` 是逃生口，給補充說明那種不該被拉高的格子用。

### 分支 `.fig-branch` / `.fig-fan`

決策樹、分岔點用它，不要用一堆 `.fig-col` 手排——手排的線對不齊，而且分支數改變時
要重算每一條。

```html
<div class="fig-branch">
  <div class="fig-stem fig-node ask">Recurrent or stage IV</div>
  <div class="fig-fan fill" style="--fig-fan-half:64px">   <!-- .fill 讓分支平分高度 -->
    <div class="fig-node stack left" style="align-items:flex-start">
      <span class="fig-when">ER+ · HER2−</span>            <!-- 條件，節點的第一行 -->
      <div>Endocrine track — go to BINV-22</div>
      <div class="fig-sub strong">…</div>
    </div>
  </div>
</div>
```

- `.fig-node.ask` 是決策節點（語意上跟 `.key` 一樣，分開命名是為了讀 HTML 時看得出
  這一格是問句）
- `--fig-fan-half` 是分支的**半高**，幹線的頭尾要停在第一個與最後一個分支的中心，
  而 CSS 算不出子項高度。用 `.fill` 讓分支等高之後，這個值就好估
- **`.fig-when` 是節點的第一行，不是浮在線上的標籤。** 第一版讓它 absolute 坐在枝線
  上方，一寬就越過節點左緣壓在內文上——節點高度不定，沒有一個 top 值能同時對得準
  枝線又不撞到文字
- **平行的處置不要畫成分支。** 骨保護是加在任何一條路上的，畫成第五個分支會被讀成
  「骨轉移的病人走另一條路」。那種東西放底部橫帶（`.fig-group.plain`）

### 寬表格 `.fig-tbl`

資料密集、需要並排比較的內容用表格，不要硬塞進矩陣的格子裡。

```html
<table class="fig-tbl fill">          <!-- .fill 讓它吃掉剩餘高度，列高跟著撐開 -->
  <caption>標題列</caption>
  <thead><tr>
    <th class="lab">Line</th>                                   <!-- .lab 靠左 -->
    <th><div>Overall</div><div class="hsub">(N=73)</div></th>    <!-- 主標 + 小字 -->
    <th class="alt">6 mg/kg</th>                                 <!-- .alt 用墨色，區隔對照欄 -->
  </tr></thead>
  <tbody>                              <!-- 一個 tbody = 一個分組 = 一條斑馬紋 -->
    <tr><th class="grp" rowspan="3">Race</th><th class="sub">White</th><td>39 (53.4)</td></tr>
    <tr><th class="sub">Asian</th><td>22 (30.1)</td></tr>
  </tbody>
</table>
```

**斑馬紋掛在 `<tbody>` 上而不是 `<tr>`**，所以顏色是按**分組**交替而不是逐列交替。
這是那種表讀起來乾淨的關鍵——逐列交替會讓「Race 的三個子項」看起來像三件不相干的事。

`td` 預設置中且 `tabular-nums`（數字才對得齊）；長敘述用 `td.left`。分組標籤 `th.grp`
靠左粗體，子項 `th.sub` **靠右**貼向它要解釋的那一排數字。

兩個表並排就是把兩個 `.fig-tbl` 放進一個 `.fig-row`。

**圖例只用來解釋資料編碼。** 表頭是什麼顏色不是資訊，替它做圖例只會佔掉版面——
第一版就犯了這個錯（「Result column ■ / Current NCCN position ■」）。

**節點內容一律包一層 `<div>`，不要放裸文字**——`.fig-node` 是 flex container，裸文字與
其中的 `<i>`/`<b>` 會各自變成 anonymous flex item，item 之間的空白被丟棄：
`A germline <i>BRCA1/2</i> PV` 會渲染成 `germlineBRCA1/2PV`。網頁與 PNG 會**一致地錯**，
所以看起來像漏字而不像版面壞掉。改 `display:grid` 更糟（每個 inline 元素各佔一列，
實測過）。這是約定，不是 CSS 能修的東西；verify 的第 4 關會抓。

---

## 5. 寫完怎麼驗

```bash
cd cf

# 這一課能不能編譯（缺段、段名打錯、frontmatter 缺欄位都會在這裡爆）
bash gen_courses.sh

# 四關。第 4 關會開瀏覽器實際量每張圖，抓兩件截圖看不出來的事：
#   · 內容溢出 1600×800（PNG 尺寸永遠是 3200×1600，超出的是被裁掉）
#   · .fig-node 裡的裸文字混 inline 標籤（字間空白被 flex 吃掉，看起來像漏字）
# --debug 會印出每張圖量到的實際尺寸。**看 exit code**，不要只 grep 訊息。
python3 verify_courses.py --debug ; echo "exit=$?"

# 圖截得出來嗎（3200×1600 PNG 進 figures-out/，不進版控）
bash gen_figures.sh breast/<slug>-<kind>

# 全套測試
npx vitest run
```

看一眼實際畫面：

```bash
npx wrangler dev --local --port 8791
# http://127.0.0.1:8791/course/breast/<slug>
```

**然後看 PNG**。圖溢出 1600×800、文字被裁掉、tag 折行，這些單元測試都看不到。

---

## 6. 機械檢查擋不住的，自己再看一遍

寫完每一課，對照素材逐條檢查這四件事：

1. **限定詞有沒有掉**：`±` 不是 `+`，`consider` 不是 `should`，`category 2B` 不是沒標
2. **族群有沒有寫寬**：試驗的 population 與 NCCN 的適應症不一定一樣
3. **有沒有憑空生出總結規則**：素材沒說的「原則」不要寫
4. **數字**：素材裡有的照抄，素材沒有的（試驗結果）沒把握就不寫數字

`review` 欄位維持 NULL——機械關與自我檢查都還是模型，臨床把關還沒發生。
