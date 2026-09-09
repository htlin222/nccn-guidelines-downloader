+++
id      = "breast/early-tnbc"
track   = "breast"
order   = 8
group   = "早期"
title   = "早期三陰性"
oneline = "先分岔：夠大就先做術前治療、由病理反應決定術後加什麼；夠小就直接開刀、由 pT/pN 決定要不要化療"
refs    = ["BINV-10", "BINV-11", "BINV-16", "BINV-L", "BINV-M"]
figures = ["breast/early-tnbc-landscape", "breast/early-tnbc-flow", "breast/early-tnbc-trials", "breast/early-tnbc-numbers", "breast/early-tnbc-pitfalls", "breast/early-tnbc-timeline", "breast/early-tnbc-toxicity"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 HR 陰性、HER2 陰性的早期病人，**先開刀還是先治療、化療要不要給、術後還要不要追加**。

- **第一個岔口不在術後，在術前。** [[BINV-L]] 說 TNBC 若 ≥cT2 或 ≥cN1，術前全身治療是 preferred；cT1c、cN0 是可以考慮。走了這一條，術後就改看 [[BINV-16]]，pT/pN 那張表不再適用。
- **直接開刀那一條路只有三種答案**：不治療、consider 化療、化療（category 1）。分界在 [[BINV-10]]：pT1a 且 pN0 是「No adjuvant therapy」，pT1c 以上或 pN+ 是 category 1。
- **germline BRCA1/2 從頭到尾都在。** 直接開刀這條路上，只要給化療就同時掛著 “and adjuvant olaparib if germline BRCA1/2 PV”；術前治療後有殘餘病灶那一格則是 category 1。而且 [[BINV-10]] 特別指定：**olaparib 要在放療完成之後給**。

---

## 治療地景

![[fig:breast/early-tnbc-landscape]]

這張圖把 [[BINV-10]]、[[BINV-16]] 的 HR−/HER2− 列與 [[BINV-11]] 疊成三列。看它的時候記三件事：

**上面那一列（直接開刀）是階梯，中間那一列（術前治療後）是二分。** [[BINV-10]] 依 pT/pN 分五格、三種答案；[[BINV-16]] 只問 pCR 還是有殘餘，而且兩格的內容差很多——pCR 那格只有 “For high risk: adjuvant pembrolizumab（若術前用過含 pembrolizumab 的療程）”，殘餘那格則是三種藥的 and/or。

**pembrolizumab 有一個前置條件寫在兩格裡。** 兩格都寫 “(if pembrolizumab-containing regimen was given preoperatively)”。術前沒用過，術後就沒有這個選項——這不是療效問題，是 NCCN 把它寫成一個條件句。

**最下面那一列是完全不同的病。** [[BINV-11]] 的 favorable histologies（pure tubular、pure mucinous、pure cribriform、adenoid cystic 等），ER 與 PR 都陰性、HER2 陰性者，NCCN 寫的是「可用資料有限，支持只做局部治療，僅在 pN+ 時考慮全身／標靶治療」。三陰性的長相，但不是三陰性的處置。

---

## 決策路徑

![[fig:breast/early-tnbc-timeline]]

![[fig:breast/early-tnbc-flow]]

### 第一個岔口：要不要先做術前治療（[[BINV-L]]）

- **無法手術者**一律走術前治療：IBC、bulky 或 matted cN2 腋下淋巴結、cN3、cT4
- **可手術者當中，TNBC 若 ≥cT2 或 ≥cN1，術前治療是 preferred**
  - cT1c、cN0 的 TNBC「can be considered」
  - 腫瘤相對乳房偏大而病人想保乳、或 cN+ 可能被治成 cN0 的，也是 preferred 的情境
- 為什麼在 TNBC 特別值得做：治療反應提供**個別病人層級**的重要預後資訊，並且找出有殘餘病灶的高復發風險者，好追加輔助療程——NCCN 這兩句都特別點名 “particularly in patients with TNBC or HER2-positive breast cancer”
- 附帶的好處：cN+ 變 cN0 後可能只做 SLNB、放射範圍可能縮小、有時間做基因檢測與重建規劃
- 不適合術前治療的人：原位癌範圍廣而侵襲成分界線不清、腫瘤範圍難界定、腫瘤摸不到也無法臨床評估

### 路線 A：直接開刀（[[BINV-10]]）

適用組織型：Ductal/NST、Lobular、Mixed、Micropapillary、Metaplastic。

- **pT1a（≤0.5 cm）且 pN0 → No adjuvant therapy**
  - 唯一的鬆動寫在註腳：有高風險特徵者（例如年輕、高惡性度組織）**可以考慮**輔助化療（**category 2B**）
- **pT1a 且 pN1mi（≤2 mm），或 pT1b（0.6–1.0 cm）→ consider adjuvant chemotherapy**，並在有 germline BRCA1/2 PV 時加 adjuvant olaparib
- **pT1c–pT3（>1 cm）且 pN0 或 pN1mi，或 pN+（≥1 顆同側 >2 mm）→ adjuvant chemotherapy（category 1）**，並在有 germline BRCA1/2 PV 時加 adjuvant olaparib
- **olaparib 的時序是寫死的**：“Olaparib should be given after completion of RT”
- 罕見的低惡性度 metaplastic 亞型（如 low-grade adenosquamous、low-grade fibromatosis-like carcinoma）“considered to have a favorable prognosis **without** adjuvant systemic therapies”——原句講的是**不給輔助治療預後也好**，不是「不要給」。它是預後陳述，不是治療建議 [[BINV-10]]

### 路線 B：術前治療之後（[[BINV-16]]）

- **ypT0N0 或 pCR** → For high risk：adjuvant pembrolizumab（**若術前給過含 pembrolizumab 的療程**）
- **ypT1–4,N0 或 ypN≥1（有殘餘病灶）** → 下列可 and/or 併用
  - adjuvant pembrolizumab（**若術前給過含 pembrolizumab 的療程**）（**category 1**）
  - adjuvant capecitabine（**6–8 個療程**）
  - adjuvant olaparib **一年**，若有 germline BRCA1/2 PV（**category 1**）
- NCCN 對這個 and/or 講得很誠實：這三者要怎麼排序或怎麼合併，**沒有資料**；但考慮到有殘餘病灶者復發風險高，依序或合併使用「may be considered」[[BINV-16]]
- 這一段同樣不適用於殘餘 DCIS（ypTis）[[BINV-16]]

### 路線 C：favorable histologies（[[BINV-11]]）

先確認它真的算：這個組織型**不可以是高惡性度**、必須是 pure（手術切除檢體 >90%，不能只靠 core biopsy 判定）、而且必須 HER2 陰性。有非典型的病理或臨床特徵時，當成 ductal/NST 處理 [[BINV-11]]。

- **ER 陰性且 PR 陰性、HER2 陰性**（也就是長得像三陰性的那一群）
  - pT1–T3 且 pN0 或 pN1mi → 可用資料有限，支持只做局部治療
  - pN+（≥1 顆同側 >2 mm）→ 才考慮全身／標靶治療
- 對照組：同一頁的 ER 陽性和／或 PR 陽性列，是依大小給不同強度的內分泌治療（<1 cm 考慮用於風險降低、1–2.9 cm 考慮、≥3 cm 給、pN+ 給並 ± 化療）

### 給藥時的實務（[[BINV-M]]）

- **免疫檢查點抑制劑**：要篩檢並處理免疫相關毒性與內分泌功能障礙（如甲狀腺低下、腎上腺功能不全）
- pembrolizumab and berahyaluronidase alfa-pmph 皮下注射可以取代靜脈 pembrolizumab，但劑量與給法不同
- **順序**：化療與內分泌治療依序給，內分泌在化療之後；**adjuvant olaparib 則可以與內分泌治療併行**
- taxane 周邊神經病變高風險者（例如非裔、糖尿病）可考慮以 docetaxel 為優先的 taxane；可考慮手足冷療與手套壓迫
- 可考慮頭皮冷療降低落髮，含 anthracycline 的療程效果可能較差
- 用 anthracycline 者建議規則心臟監測
- FDA 核准的生物相似藥可以取代指引中任何建議的生物製劑

---

## 關鍵試驗

![[fig:breast/early-tnbc-trials]]

| 試驗                        | 族群                                                       | 比較                                             | 結果                                    | 改變了什麼                                                                                                                                         |
| --------------------------- | ---------------------------------------------------------- | ------------------------------------------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **KEYNOTE-522**             | stage II–III TNBC，術前                                    | 化療 **± pembrolizumab**，術後續用 pembrolizumab | pCR 率提高，EFS 顯著改善                | [[BINV-16]] 兩格的 pembrolizumab，以及那句條件 “if pembrolizumab-containing regimen was given preoperatively”                                      |
| **CREATE-X**                | 術前治療後**有殘餘病灶**（HER2 陰性，TNBC 次群獲益最明顯） | 觀察 **vs capecitabine**                         | 無病存活與整體存活改善                  | [[BINV-16]] 的 adjuvant capecitabine（6–8 個療程）                                                                                                 |
| **OlympiA**                 | germline BRCA1/2 PV、HER2 陰性高風險早期                   | 術後 olaparib 1 年 **vs** 安慰劑                 | IDFS 與 OS 皆改善                       | 兩條路上的 olaparib——直接開刀那條的「if germline BRCA1/2 PV」，與 [[BINV-16]] 殘餘病灶那格的 category 1                                            |
| **CTNeoBC 匯總分析**        | 術前治療的各亞型                                           | pCR **vs** 有殘餘病灶                            | pCR 與較佳長期結果相關，TNBC 的關聯最強 | [[BINV-L]] 那句「treatment response provides important prognostic information at an individual patient level, particularly in patients with TNBC」 |
| **BrighTNess / GeparSixto** | TNBC，術前                                                 | 標準化療 **± carboplatin**                       | pCR 率提高                              | 為什麼術前療程裡常看到鉑類。**注意**：[[BINV-M]] 這一頁沒有列出任何具體療程，鉑類的位置要回去看 NCCN 的療程頁                                      |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗。

---

## 必背數字

![[fig:breast/early-tnbc-numbers]]

- 直接開刀那條路的三個答案，分界只有兩處：pT1a 且 pN0 是==不治療==；pT1c（==>1 cm==）以上或 pN+ 是==化療 category 1==；中間那一段是 ==consider==
- pT1a ==≤0.5 cm==、pT1b ==0.6–1.0 cm==、pT1c ==>1 cm==；pN1mi ==≤2 mm==、pN+ 是 ≥1 顆同側 >2 mm
- adjuvant capecitabine 的療程數：==6–8 個== [[BINV-16]]
- adjuvant olaparib 的療程長度：==一年== [[BINV-16]]
- olaparib 的時序：==放療完成之後==（[[BINV-10]] 明文指定）
- 術前治療在 TNBC 是 preferred 的門檻：==≥cT2 或 ≥cN1==；cT1c/cN0 是 can be considered [[BINV-L]]
- pT1a 且 pN0 仍可考慮化療的等級：==category 2B==，且限「高風險特徵（例如年輕、高惡性度組織）」[[BINV-10]]
- favorable histology 要算數的三個條件：==非高惡性度==、==pure（手術檢體 >90%）==、==HER2 陰性== [[BINV-11]]
- 判定 pure 不能只靠 ==core biopsy==，要看手術切除檢體 [[BINV-11]]

---

## 記憶法

**先問「大不大」，再問「開完之後看什麼」。**
TNBC 的第一個決定不是化療給不給，是走哪一條路。==≥cT2 或 ≥cN1 → 術前治療 preferred==（[[BINV-L]]），走了就改看 yp 分期（[[BINV-16]]）；沒走就看 pT/pN（[[BINV-10]]）。兩張表不能混用。

**「不治療、考慮、一定」三個字對三格。**
[[BINV-10]] 的五個分層只生出三種答案。pT1a 且 pN0 是**不**；pT1a 帶 pN1mi、或 pT1b 是**考慮**；pT1c 以上或 pN+ 是**一定**（category 1）。中間那一段就是所有猶豫發生的地方。

**pembrolizumab 是「續用」不是「新開」。**
[[BINV-16]] 兩格都掛同一個括號：“if pembrolizumab-containing regimen was given preoperatively”。所以術後這一格的 pembrolizumab 是把術前開始的療程接完，不是看到殘餘病灶才新加一個免疫治療。

**殘餘病灶那一格是 and/or，不是三選一。**
pembrolizumab、capecitabine、olaparib 之間 NCCN 用的是 and/or，而且承認「There are no data on sequencing or combining」。記法：==這一格是三個獨立的加號，不是一張排序表==——講課時把「沒有資料」這句話講出來，比排一個假的順序誠實。

**olaparib 排在放療後面。**
[[BINV-10]] 在兩個格子裡都重複寫 “Olaparib should be given after completion of RT”。重複兩次，代表這是實務上真的會排錯的一件事。

---

## 門診核對

- [ ] ER、PR、HER2 三個都看過原始報告了嗎？這一課的病人是三個都陰性 [[BINV-10]]
- [ ] 組織型是 favorable histology 嗎？是的話走 [[BINV-11]]，不是 [[BINV-10]]
- [ ] 若判為 favorable histology：非高惡性度、pure（手術檢體 >90%）、HER2 陰性——三個條件都成立嗎？[[BINV-11]]
- [ ] **在排手術之前**：≥cT2 或 ≥cN1 嗎？那術前治療是 preferred [[BINV-L]]
- [ ] cT1c、cN0 的病人：術前治療「可以考慮」這件事跟病人討論過了嗎？[[BINV-L]]
- [ ] germline BRCA1/2 送了嗎？兩條路上 olaparib 都掛在這個結果上 [[BINV-10]] [[BINV-16]]
- [ ] 直接開刀：pT1a 且 pN0 → 預設是 **No adjuvant therapy**，你有理由偏離嗎（年輕、高惡性度是 category 2B）？[[BINV-10]]
- [ ] 要給 olaparib 的話，放療排完了嗎？順序是放療在前 [[BINV-10]]
- [ ] 術前治療後的病理：ypT0N0/pCR 還是 ypT1–4,N0 或 ypN≥1？[[BINV-16]]
- [ ] 殘餘只有 DCIS（ypTis）嗎？那 [[BINV-16]] 這一段不適用
- [ ] **術前有沒有用過含 pembrolizumab 的療程**？沒有的話術後就沒有這個選項 [[BINV-16]]
- [ ] 有殘餘病灶：pembrolizumab／capecitabine／olaparib 這三個的取捨，跟病人講過「沒有排序資料」了嗎？[[BINV-16]]
- [ ] 用 pembrolizumab：免疫相關毒性與內分泌功能（甲狀腺、腎上腺）的篩檢與衛教做了嗎？[[BINV-M]]
- [ ] 用 anthracycline 的心臟監測排了嗎？taxane 神經病變的高風險族群（非裔、糖尿病）冷療討論了嗎？[[BINV-M]]

---

## 常見陷阱

![[fig:breast/early-tnbc-pitfalls]]

![[fig:breast/early-tnbc-toxicity]]

**把「術前治療 preferred」當成「術前治療 required」，或反過來只在無法手術時才想到它。**
[[BINV-L]] 把兩件事分開寫：**無法手術**者（IBC、bulky/matted cN2、cN3、cT4）是候選人；**可手術**者當中，TNBC 若 ≥cT2 或 ≥cN1，術前治療是 “preferred”。cT1c、cN0 則是 “can be considered”。三種強度，三個不同的句子。

**pT1a、pN0 的三陰性也開化療。**
[[BINV-10]] 這一格寫的是 “**No adjuvant therapy**”。要偏離的話 NCCN 給的是註腳裡的一句話：“In select patients with high-risk features (eg, young patients with high-grade histology), adjuvant chemotherapy may be considered (**category 2B**)”。是 select、是 may、是 2B——三個限定詞疊在一起。

**把 [[BINV-16]] 殘餘病灶那格的三種藥當成排好序的方案。**
原文是 “and/or”，而且註腳直說 “There are no data on sequencing or combining adjuvant pembrolizumab with capecitabine or olaparib”。它接著說的是 “their sequential/combined use **may be considered** given high risk of recurrence”——是可以考慮，不是建議這樣做。

**術後才想到要加 pembrolizumab。**
[[BINV-16]] 兩格都是 “(if pembrolizumab-containing regimen was given preoperatively)”。這是一個條件句，不是療效聲明。術前沒給，術後這一格就是空的。

**把 olaparib 跟放療同時排。**
[[BINV-10]] 兩處都寫 “Olaparib should be given after completion of RT, see BINV-I”。順序是寫死的。

**看到 pure tubular／mucinous／cribriform 就照 favorable histology 減治療。**
[[BINV-11]] 的門檻很嚴：不可高惡性度、必須 pure（手術切除檢體 >90%，**不能只靠 core biopsy**）、必須 HER2 陰性。「If atypical pathologic or clinical features are present, consider treating as ductal/NST.」在 core biopsy 上看到 pure tubular 就減量，是把診斷做在還沒完成的檢體上。

**把 metaplastic 一律當成高風險。**
[[BINV-10]] 的註腳留了一個例外：罕見的低惡性度 metaplastic 亞型（low-grade adenosquamous、low-grade fibromatosis-like carcinoma）“considered to have a favorable prognosis without adjuvant systemic therapies”。

反過來也是個陷阱：**把這句讀成「不要給輔助治療」**。原句是預後陳述——不給也好——不是一條 recommendation。NCCN 在這一頁沒有替這群人寫治療欄。

**以為 [[BINV-M]] 這一頁會告訴你化療要用什麼。**
它不會。這一頁是「給藥時的注意事項」——生物相似藥、免疫毒性篩檢、心臟監測、taxane 替換與劑量上限、順序、冷療。具體療程在 [[BINV-M]] 的後續頁面上，這一頁一個療程名稱都沒有。
