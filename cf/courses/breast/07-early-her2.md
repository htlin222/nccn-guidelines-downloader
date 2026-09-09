+++
id      = "breast/early-her2"
track   = "breast"
order   = 7
group   = "早期"
title   = "早期 HER2 陽性"
oneline = "腫瘤大小與淋巴結決定要不要抗 HER2、要不要加 pertuzumab；做過術前治療的人，決定權交給病理反應"
refs    = ["BINV-5", "BINV-9", "BINV-16", "BINV-L", "BINV-M", "BINV-A"]
figures = ["breast/early-her2-landscape", "breast/early-her2-postneo", "breast/early-her2-trials", "breast/early-her2-numbers", "breast/early-her2-pitfalls"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 HER2 陽性的早期病人，**抗 HER2 給不給、pertuzumab 加不加、術前做過治療的話術後接什麼**。

- **HR 狀態只加一層，不換路。** [[BINV-5]]（HR+）與 [[BINV-9]]（HR−）是同一張表：分層完全一樣，化療與抗 HER2 的骨幹也一樣，HR+ 那一頁每一格多掛一個 endocrine therapy，最小的兩格多一個「只給內分泌」的選項。**但不是純粹的字尾差異**：pT1a/pN1mi 與 pT1b 那一格，[[BINV-9]] 寫的是 “Consider adjuvant chemotherapy with trastuzumab”，[[BINV-5]] 寫的是沒有 “Consider” 的 “Adjuvant chemotherapy with trastuzumab … and endocrine therapy”。
- **`± pertuzumab` 有兩個不同的意思，位置不同。** pT1c–pT3 且 pN0/pN1mi 那一格寫的是 “trastuzumab (category 1) (**± pertuzumab for pT2–T3**)”——限定在 pT2–T3；pN+ 那一格則是 “pertuzumab + trastuzumab (category 1, **preferred**)”。前者是選項，後者是首選。
- **做過術前治療，就不再看 pT/pN，改看 yp。** [[BINV-16]] 只問一件事：pCR 還是有殘餘病灶。pCR 就把一年抗 HER2 打完；有殘餘就換成 ADC。

---

## 治療地景

![[fig:breast/early-her2-landscape]]

這張圖把 [[BINV-5]] 與 [[BINV-9]] 疊成兩列。看它的時候記三件事：

**兩列的差別幾乎只在字尾。** 上下兩列的化療與抗 HER2 骨幹一樣，HR+ 那一列每一格結尾多一句 “and endocrine therapy”。唯一的例外在 pT1a/pN1mi 與 pT1b 那一格：[[BINV-9]] 是 “Consider adjuvant chemotherapy…”，[[BINV-5]] 沒有 “Consider”。

**左邊兩欄的措辭最軟，而且掛著兩個註腳。** [[BINV-9]] 左邊三格全部是 “Consider”；[[BINV-5]] 只有最小的那一格是 “Consider”。pT1a–b、pN0 這一群，NCCN 說得很直白：“The benefit of HER2-targeted therapy is uncertain … a population not studied in randomized trials.”——這一格的決定要跟已知毒性權衡。HR+ 這一列還多一個註腳：腫瘤大小接近 T1mic（<1 mm）者，抗 HER2 的絕對效益 “negligible”，內分泌治療仍是可行的全身治療。

**右邊兩欄的 category 1 位置不同。** pT1c–pT3 是 “chemotherapy with trastuzumab (category 1)”，pertuzumab 只在 pT2–T3 是選項；pN+ 才把 “pertuzumab + trastuzumab” 標成 category 1 preferred，而 “trastuzumab 單獨” 在同一格也是 category 1，是並列的另一個選擇。

---

## 決策路徑

### 先確認 HER2 真的是陽性

- HER2 檢測要對**所有**新的原發或新診斷轉移的乳癌做，依 ASCO/CAP 的方法 [[BINV-A]]
- **有幾種組織型別驗出 HER2 陽性時要回頭重看**：grade 1（任何組織型）、pure mucinous、pure tubular、pure cribriform——這些如果報 HER2 陽性，應考慮重驗或會診 [[BINV-A]]
- 初次切片 HER2 陰性後，遇到下列情形考慮在後續手術檢體重驗：初始檢體品質不佳（侵襲成分極少、冷缺血時間或固定不理想）、預期有檢驗誤差、後續檢體含更高惡性度且形態不同的癌、要排除高惡性度腫瘤的異質性，或重驗有助於臨床決策 [[BINV-A]]
- IHC 0 要註明染色型態（0/完全無膜染色，或 0+/有膜染色）。這個區分現在有臨床意義，因為轉移期病人可能適用針對非擴增程度 HER2 表現的治療 [[BINV-A]]

### 要不要先做術前治療（[[BINV-L]]）

這一步先於下面的 pT/pN 分層——決定了走 [[BINV-5]]/[[BINV-9]] 還是走 [[BINV-16]]。

- **無法手術者**一定走術前治療：IBC、bulky 或 matted cN2 腋下淋巴結、cN3、cT4 [[BINV-L]]
- **可手術者當中，HER2 陽性若 ≥cT2 或 ≥cN1，術前治療是 preferred** [[BINV-L]]
  - cT1c、cN0 的 HER2 陽性「can be considered」——是可以考慮，不是建議
- 為什麼值得先做：可提高保乳機會、可讓不可切除變可切除、**治療反應提供個別病人層級的重要預後資訊（在 HER2 陽性與 TNBC 尤其如此）**、並且找出有殘餘病灶的高復發風險者以便追加輔助治療 [[BINV-L]]
- 代價也要講：臨床分期高估會過度治療、低估會在放療上治療不足、治療中仍可能疾病進展 [[BINV-L]]

### 直接開刀的人：HR 陰性（[[BINV-9]]）

- pT1a（≤0.5 cm）、pN0 → consider adjuvant chemotherapy with trastuzumab（**category 2B**）
- pT1a、pN1mi（≤2 mm）→ consider adjuvant chemotherapy with trastuzumab
- pT1b（0.6–1.0 cm）→ consider adjuvant chemotherapy with trastuzumab
- pT1c–T3（>1 cm）、pN0 或 pN1mi → adjuvant chemotherapy with trastuzumab（**category 1**）（**± pertuzumab for pT2–T3**）
- pN+（≥1 顆同側 >2 mm）→ 二選一
  - adjuvant chemotherapy with **pertuzumab + trastuzumab**（**category 1, preferred**）
  - adjuvant chemotherapy with trastuzumab（**category 1**）

### 直接開刀的人：HR 陽性（[[BINV-5]]）

分層與上面一模一樣，差別在每一格都帶內分泌治療，而且最小的兩格多一個「只給內分泌」的選項：

- pT1a、pN0 → consider adjuvant endocrine therapy，**或** consider adjuvant chemotherapy with trastuzumab（**category 2B**）and endocrine therapy
- pT1a、pN1mi；以及 pT1b（0.6–1.0 cm）→ adjuvant endocrine therapy，**或** adjuvant chemotherapy with trastuzumab and endocrine therapy
- pT1c–pT3（>1 cm）、pN0 或 pN1mi → adjuvant chemotherapy with trastuzumab（**category 1**）（**± pertuzumab for pT2–T3**）and endocrine therapy
- pN+（≥1 顆同側 >2 mm）→ 二選一
  - adjuvant chemotherapy with **pertuzumab + trastuzumab**（**category 1, preferred**）and endocrine therapy
  - adjuvant chemotherapy with trastuzumab（**category 1**）and endocrine therapy
- HR+/HER2+ 且**自覺復發風險高**者，可考慮在含 trastuzumab 的輔助治療之後接 extended adjuvant neratinib。但用過 pertuzumab 或 T-DM1 的人，neratinib 延長治療的效益與毒性「is unknown」[[BINV-5]]

### 術前治療之後：pCR 還是有殘餘（[[BINV-16]]）

![[fig:breast/early-her2-postneo]]

- **ypT0N0 或 pCR，HR 陰性** → 把 trastuzumab（**category 1**）± pertuzumab 補滿一年
  - 但**初始分期若為 node positive**，則是 pertuzumab + trastuzumab（**category 1**）
- **ypT0N0 或 pCR，HR 陽性** → endocrine therapy（**category 1**）＋ 把 trastuzumab（**category 1**）± pertuzumab 補滿一年；初始分期 node positive 者同樣是 pertuzumab + trastuzumab（**category 1**）
- **ypT1–4,N0 或 ypN≥1（有殘餘病灶）** → 換 ADC
  - fam-trastuzumab deruxtecan-nxki（**category 1**）給**復發風險高**者
  - **或** ado-trastuzumab emtansine（**category 1**）
  - T-DM1 若因毒性停藥 → 改以 trastuzumab（**category 1**）± pertuzumab 把一年的抗 HER2 補滿；初始分期 node positive 者用 pertuzumab + trastuzumab（**category 1**）
  - 若 HR 陽性，加 adjuvant endocrine therapy（**category 1**）
- **這一段不適用於殘餘 DCIS（ypTis）** [[BINV-16]]

### 用抗 HER2 治療時要做的事（[[BINV-M]]）

- **治療前與治療中都要評估 LVEF。** 輔助 trastuzumab 期間評估的最佳頻率並不清楚；FDA 仿單建議開始前測一次，之後每 3 個月一次
- 用 anthracycline 或抗 HER2 治療者建議規則心臟監測
- **皮下製劑不能亂換**：trastuzumab and hyaluronidase-oysk 可以取代靜脈 trastuzumab（劑量與給法不同），但**不可**與 ado-trastuzumab emtansine 互相取代
- pertuzumab, trastuzumab, and hyaluronidase-zzxf 皮下注射可以取代「靜脈 pertuzumab + 靜脈 trastuzumab」同時給的任何場合，劑量與給法不同
- FDA 核准的生物相似藥可以取代指引中任何建議的生物製劑
- **順序**：輔助療程裡化療與內分泌治療要**依序**給，內分泌治療在化療之後
- 高風險 taxane 周邊神經病變者（例如非裔、糖尿病）可考慮以 docetaxel 為優先的 taxane；用 taxane 時可考慮手足冷療，也可考慮手套壓迫
- 可考慮頭皮冷療降低落髮，但含 anthracycline 的療程效果可能較差

---

## 關鍵試驗

![[fig:breast/early-her2-trials]]

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **HERA / NSABP B-31 / NCCTG N9831** | 早期 HER2 陽性 | 化療 **± trastuzumab** 一年 | 無病存活與整體存活顯著改善 | 「一年抗 HER2」這個框架本身，也是 [[BINV-16]] 「complete up to 1 year」的由來 |
| **APHINITY** | 可手術 HER2 陽性，術後輔助 | 化療 + trastuzumab **± pertuzumab** | 中位追蹤 11.3 年確認加上 pertuzumab 可預防復發 | pN+ 那一格 “pertuzumab + trastuzumab (category 1, preferred)”。**這一條是寫在 [[BINV-5]] 與 [[BINV-9]] 註腳裡的**，不是純策展 |
| **APT** | 小的 node-negative HER2 陽性（單臂） | paclitaxel + trastuzumab | 長期結果良好 | 為什麼小腫瘤那幾格是「consider 化療 + trastuzumab」而不是完整的多藥療程 |
| **NeoSphere** | 術前，HER2 陽性 | trastuzumab **± pertuzumab** 加 docetaxel | pCR 率顯著提高 | pertuzumab 進入術前治療的起點 |
| **KATHERINE** | 術前治療後**有殘餘病灶**的 HER2 陽性 | trastuzumab **vs T-DM1** | IDFS 顯著改善 | [[BINV-16]] 殘餘病灶那一格的 T-DM1（category 1） |
| **DESTINY-Breast05** | 術前治療後有殘餘病灶、高復發風險 | T-DM1 **vs T-DXd** | IDFS 顯著改善 | 為什麼 6.2026 把 T-DXd 放在殘餘病灶那一格的第一個位置 |
| **ExteNET** | 完成 trastuzumab 輔助治療後 | 延長一年 **neratinib** vs 安慰劑 | 無侵襲性疾病存活改善，HR+ 次群獲益較明顯 | [[BINV-5]] 註腳的 extended neratinib——同一個註腳也說用過 pertuzumab 或 T-DM1 之後效益未知 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗。唯一的例外是 APHINITY：它的中位追蹤年數確實印在 [[BINV-5]] 與 [[BINV-9]] 的註腳上。

---

## 必背數字

![[fig:breast/early-her2-numbers]]

- 抗 HER2 的療程長度：==一年==（[[BINV-16]] 一律寫 “complete (up to) 1 year”）
- LVEF 監測：治療前一次，之後 ==每 3 個月==（FDA 仿單；NCCN 說最佳頻率其實未知）[[BINV-M]]
- APHINITY 的中位追蹤：==11.3 年==——這是 NCCN 註腳自己寫出來的數字 [[BINV-5]]
- `± pertuzumab` 的限定範圍：只在 ==pT2–T3== 那一句裡 [[BINV-5]] [[BINV-9]]
- pertuzumab + trastuzumab 成為 preferred 的門檻：==pN+==，即 ≥1 顆同側轉移 >2 mm
- pT 的三個門檻：pT1a ==≤0.5 cm==、pT1b ==0.6–1.0 cm==、pT1c ==>1 cm==
- 抗 HER2 效益「uncertain」的族群：==pT1a–b、N0==——隨機分派試驗沒有研究過 [[BINV-9]]
- 抗 HER2 絕對效益「negligible」的族群：HR 陽性且腫瘤大小接近 ==T1mic（<1 mm）== [[BINV-5]]
- 術前治療在 HER2 陽性是 preferred 的門檻：==≥cT2 或 ≥cN1==；cT1c/cN0 是 can be considered [[BINV-L]]
- 因醫療必要（如過敏反應）替換 taxane 時，若以 albumin-bound paclitaxel 取代每週 docetaxel 或 paclitaxel，每週劑量不得超過 ==125 mg/m2== [[BINV-M]]

---

## 記憶法

**一張表，兩列，差一個字尾——外加兩個例外。**
[[BINV-9]] 是骨幹，[[BINV-5]] 大致是同一張表每格加 “and endocrine therapy”。兩個例外要一起記：最小的兩格多一個「只給內分泌」的選項，而 pT1a/pN1mi 與 pT1b 那一格 [[BINV-5]] 沒有 “Consider”。除此之外，HR 狀態是後綴不是前綴。這跟晚期是同一個邏輯（見「轉移性 HER2 陽性乳癌」那一課：HR 狀態只多開兩個岔口）。

**“±” 在中間，“+” 在右邊。**
pT1c–pT3 那一格是 trastuzumab（category 1）**± pertuzumab for pT2–T3**；pN+ 那一格才是 **pertuzumab + trastuzumab**（category 1, preferred）。從左到右，pertuzumab 從「某些人可以加」變成「首選就是它」。

**術前之後只有兩格：pCR 補滿，殘餘換 ADC。**
[[BINV-16]] 的 HER2 陽性列只問一件事。==pCR → 把一年打完；殘餘 → T-DXd 或 T-DM1==。這一句話涵蓋 HR 陽性與陰性，因為 HR 只決定要不要再加內分泌。

**「初始分期 node positive」是一句貫穿的但書。**
[[BINV-16]] 每一次寫 “trastuzumab ± pertuzumab”，下一句都是 “If node positive at initial staging, pertuzumab + trastuzumab”。記法：**手術後看不到的東西，要回頭看術前分期**——pCR 把淋巴結洗白了，但風險分層要用洗白前的那一份。

**HER2 陽性遇到這四種組織型，先回頭重看。**
grade 1、pure mucinous、pure tubular、pure cribriform。這四個都是「本來就不該是 HER2 陽性」的長相，[[BINV-A]] 要求 “a re-review of the pathology with consideration for repeat or consultative HER2 testing”。

---

## 門診核對

- [ ] HER2 報告看過原始 IHC/ISH 了嗎？是 grade 1、pure mucinous、pure tubular 或 pure cribriform 嗎（要重看）？[[BINV-A]]
- [ ] IHC 0 的報告有沒有註明是 0/無膜染色還是 0+/有膜染色？[[BINV-A]]
- [ ] 在排手術之前：這個人 ≥cT2 或 ≥cN1 嗎？那術前治療是 preferred [[BINV-L]]
- [ ] pT 與 pN 都拿到了嗎？pT1b 與 pT1c 之間、pN1mi 與 pN+ 之間就是兩條不同的路 [[BINV-9]]
- [ ] 這一格的 pertuzumab 是「± for pT2–T3」還是「preferred」？看清楚是哪一句 [[BINV-5]] [[BINV-9]]
- [ ] pT1a–b、N0 的病人：抗 HER2 的效益不確定，這件事跟病人講了嗎？[[BINV-9]]
- [ ] HR 陽性且腫瘤接近 T1mic：內分泌治療單獨仍是可行選項，討論過了嗎？[[BINV-5]]
- [ ] 治療前 LVEF 做了嗎？之後每 3 個月的排程開好了嗎？[[BINV-M]]
- [ ] 有沒有把 trastuzumab and hyaluronidase-oysk 與 ado-trastuzumab emtansine 搞混？兩者不可互換 [[BINV-M]]
- [ ] 化療與內分泌治療的順序對嗎（內分泌在化療之後）？[[BINV-M]]
- [ ] 術前治療後的病理：是 ypT0N0/pCR 還是 ypT1–4,N0 或 ypN≥1？[[BINV-16]]
- [ ] 殘餘只有 DCIS（ypTis）嗎？那 [[BINV-16]] 這一段不適用
- [ ] **初始分期**是 node positive 嗎？是的話術後要 pertuzumab + trastuzumab，不是 trastuzumab 單獨 [[BINV-16]]
- [ ] HR 陽性且自覺高復發風險：extended neratinib 討論過了嗎？用過 pertuzumab 或 T-DM1 的話效益未知 [[BINV-5]]

---

## 常見陷阱

![[fig:breast/early-her2-pitfalls]]

**把 `± pertuzumab` 讀成「加 pertuzumab」。**
[[BINV-9]] 那一句的完整寫法是 “Adjuvant chemotherapy with trastuzumab (category 1) (**± pertuzumab for pT2–T3**)”。它同時做了兩件事：把 pertuzumab 標成可選，並且把可選的範圍限在 pT2–T3。pT1c、pN0 的病人不在這個括號裡。

**在 pN+ 那一格以為只有一個選項。**
NCCN 寫的是 “pertuzumab + trastuzumab (category 1, preferred)” **or** “trastuzumab (category 1)”。第二個也是 category 1，是並列的另一條路，不是次等品。

**對 pT1a–b、N0 的病人直接開抗 HER2。**
[[BINV-9]] 的註腳說得很清楚：“The benefit of HER2-targeted therapy is uncertain in HER2-positive breast cancer with pT1a-b, N0 tumors, **a population not studied in randomized trials**. The decision for use of trastuzumab therapy in this cohort must balance with the known toxicities.” 這一格的正確做法是把不確定性講出來，不是替病人決定。

**術前治療後只看術後病理，忘了回頭看術前分期。**
[[BINV-16]] 每一格都有 “If node positive at initial staging, pertuzumab + trastuzumab (category 1)”。pCR 的病人術後淋巴結是乾淨的，但決定要不要 pertuzumab 的是**術前**那一份分期。

**把殘餘 DCIS 當成有殘餘病灶。**
[[BINV-16]] 的註腳：“Recommendations do not apply to residual DCIS (ypTis).” 這一句一旦漏掉，就會有人被開了不該開的 ADC。

**T-DM1 因毒性停藥後就什麼都不接。**
[[BINV-16]] 有明確的接續路徑：改以 trastuzumab（category 1）± pertuzumab 把一年補滿，初始分期 node positive 者用 pertuzumab + trastuzumab。停 T-DM1 不等於結束抗 HER2。

**把 extended neratinib 當成用過 pertuzumab／T-DM1 之後的自然延續。**
[[BINV-5]] 的註腳：“The benefit or toxicities associated with extended neratinib in patients who have received pertuzumab or ado-trastuzumab emtansine is unknown.” 而 ExteNET 的族群是完成 trastuzumab 輔助治療後——不是今天大多數人走的路徑。

**皮下製劑當成同一種藥隨便換。**
[[BINV-M]]：trastuzumab and hyaluronidase-oysk 可以取代靜脈 trastuzumab，但劑量與給法不同，而且「Do not substitute trastuzumab and hyaluronidase-oysk for or with ado-trastuzumab emtansine」。名字都有 trastuzumab，是這個陷阱之所以存在的原因。

**先開內分泌再開化療。**
[[BINV-M]]：“Chemotherapy and endocrine therapy should be given sequentially, with endocrine therapy given after chemotherapy.” 順序寫死了。
