+++
id      = "breast/early-hr"
track   = "breast"
order   = 6
group   = "早期"
title   = "早期 HR 陽性、HER2 陰性"
oneline = "先問停經狀態，再問淋巴結，最後才問 gene assay——而 assay 只在「這個人本來就可能給化療」時才有意義"
refs    = ["BINV-6", "BINV-7", "BINV-8", "BINV-K", "BINV-N", "BINV-O", "BINV-16"]
figures = ["breast/early-hr-landscape", "breast/early-hr-assay"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個開完刀、HR 陽性 HER2 陰性的早期病人，**要不要化療、內分泌治療加什麼、gene assay 什麼時候該送**。

- **分層是三層，順序不能顛倒**：停經狀態 → 淋巴結 → gene assay。NCCN 把 HR+/HER2− 拆成三頁（[[BINV-6]] 停經後、[[BINV-7]] 停經前 pN0、[[BINV-8]] 停經前 pN+），拆的軸就是前兩層。
- **gene assay 是化療的門票查驗，不是篩檢**。三頁的流程圖都是先寫 “Determine if candidate for chemotherapy”，確定是候選人才送 assay——[[BINV-6]] 與 [[BINV-7]] 寫的是「strongly consider 21-gene RT-PCR assay（category 1）」，[[BINV-8]] 寫的是比較弱的「consider gene expression assay to assess prognosis」。不是化療候選人的話，assay 送了也不改變處置。
- **CDK4/6 抑制劑與 olaparib 都是「consider … for eligible patients」**，不是每個人都給。NCCN 每一格都把它們寫成附加句，而且把資格條件推到 [[BINV-K]]，不寫在流程圖裡。

---

## 治療地景

![[fig:breast/early-hr-landscape]]

這張圖是 [[BINV-6]]、[[BINV-7]]、[[BINV-8]] 三頁攤平成一張。看它的時候記三件事：

**左邊兩欄幾乎沒有化療，右邊兩欄幾乎一定有。** pT1a 且 pN0 只有一句「consider adjuvant endocrine therapy（category 2B）」——注意是 2B，是這三頁裡評等最低的一格。到了 pN2/pN3（≥4 顆同側 >2 mm）則直接是「化療接內分泌（category 1）」，連 assay 都不做：[[BINV-6]] 的註腳明說這一群「there are few data regarding the role of gene expression assays」，決定要不要化療「should be based on clinical factors」。

**中間兩欄才是 assay 真正在做事的地方。** 而且停經前後不一樣：停經後只有一個分界（RS 26），停經前有三段（≤15、16–25、≥26）。同一份報告、同一個分數，停經前後讀出來的處置不同。

**停經前多一個變數：卵巢抑制。** [[BINV-7]] 與 [[BINV-8]] 幾乎每一格都寫 “± ovarian suppression/ablation”，只有 [[BINV-8]] 「是化療候選人但選擇不化療」那一格寫成 **+** ovarian suppression/ablation——那一格的卵巢抑制不是可選的。

---

## 決策路徑

### 進門的三件事

- **確定停經狀態**，因為它決定你翻到哪一頁 [[BINV-O]]
  - 停經是「永久停經且卵巢雌激素合成大幅永久下降」，通常是臨床診斷：無月經 ≥12 個月。自然停經發生在 42–58 歲之間
  - **化療引起的無月經不等於停經**——卵巢功能可能仍完好，也可能日後恢復，<40 歲的人恢復機率更高。tamoxifen 也可能造成無月經而沒有引起停經
  - 所以「12 個月無月經」單獨一項，在化療後或 tamoxifen（± 卵巢抑制）的情境下**不足以**診斷停經；要靠 FSH 與 estradiol，而且要**連續**重複測
  - 正在接受卵巢功能抑制（OFS）的人，**無法**判定停經狀態
- **確定 ER／PR 判讀**，因為它決定內分泌治療的預期效益 [[BINV-K]]
  - ER 染色 1%–100% 即為 ER 陽性、可用內分泌治療；ER-low-positive（1%–10%）的療效資料有限
  - ER 表現高者較可能獲益，但即使表現低，也**應該討論**內分泌治療的潛在效益
  - ER 陰性但 PR 陽性者可考慮內分泌治療，但這一群的資料「noted to be limited」
- **確定這個人是不是化療候選人**——這是 assay 的前置條件，見下圖

### gene assay 什麼時候該送

![[fig:breast/early-hr-assay]]

- **pN0，是化療候選人** → strongly consider 21-gene RT-PCR assay（category 1）[[BINV-6]] [[BINV-7]]
  - 唯一的例外寫在註腳：**T1b、低惡性度、無 LVI 者應該用內分泌單藥治療**，因為 TAILORx 沒有納入這樣的腫瘤 [[BINV-7]]
- **pN1mi 或 pN1（1–3 顆）**——這一格停經前後的措辭不同
  - 停經後：與 pT1b–T3 pN0 併在同一條路徑，一樣 strongly consider 21-gene（category 1）[[BINV-6]]
  - 停經前：[[BINV-8]] 寫的是「consider gene expression assay to **assess prognosis**」，沒有 category 1，而且講的是**預後**不是預測化療效益。[[BINV-N]] 也對應：21-gene 用在 pN1 時，停經後是 Preferred／category 1，停經前是 Other／category 2A
- **pN2/pN3（≥4 顆同側 >2 mm）** → 不靠 assay，依臨床因素決定 [[BINV-6]] [[BINV-8]]
- **選哪一個 assay** [[BINV-N]]
  - 21-gene（Oncotype Dx）是**唯一**同時具 predictive 與 prognostic、且被列為 Preferred 的
  - 70-gene（MammaPrint）、50-gene（Prosigna）、12-gene（EndoPredict）都是 prognostic，predictive 欄位寫 “Not determined”，NCCN 分類都是 Other
  - Breast Cancer Index 是另一件事：它預測的是**延長內分泌治療**的效益
  - 註腳講得更白：其他預後型 assay 可以用來評估復發風險，但「have not been validated to predict response to chemotherapy」

### 停經後（[[BINV-6]]）

- pT1a（≤0.5 cm）且 pN0 → consider adjuvant endocrine therapy（**category 2B**）
- pT1b–T3（>0.5 cm）、或 pN1mi（≤2 mm）、或 pN1（1–3 顆）
  - 不是化療候選人，或 assay 沒做 → adjuvant endocrine therapy；consider abemaciclib 或 ribociclib（符合資格者，資格見 [[BINV-K]]）
  - Recurrence score ≥26 → adjuvant chemotherapy 接 endocrine therapy（**category 1**）；consider abemaciclib 或 ribociclib
  - Recurrence score <26 → adjuvant endocrine therapy（**category 1**）；consider abemaciclib 或 ribociclib
- pN2/pN3（≥4 顆同側 >2 mm）→ adjuvant chemotherapy 接 endocrine therapy（**category 1**）
  - 「Select patients may be eligible」：abemaciclib 或 ribociclib，**and/or** olaparib（若有 germline BRCA1/2 致病變異）

### 停經前、pN0（[[BINV-7]]）

- pT1a（≤0.5 cm）且 pN0 → consider adjuvant endocrine therapy（**category 2B**）
- pT1b–T3（>0.5 cm）且 pN0
  - 不是化療候選人，或 assay 沒做 → adjuvant endocrine therapy ± ovarian suppression/ablation；consider ribociclib
  - Recurrence score ≤15 → adjuvant endocrine therapy ± ovarian suppression/ablation；consider ribociclib
  - Recurrence score 16–25 → adjuvant chemotherapy 接 endocrine therapy ± ovarian suppression/ablation；consider ribociclib
  - Recurrence score ≥26 → adjuvant chemotherapy 接 endocrine therapy ± ovarian suppression/ablation（**category 1**）；consider ribociclib
- 這一頁只寫 ribociclib，沒有 abemaciclib——[[BINV-8]] 與 [[BINV-6]] 才兩個都寫

### 停經前、pN+（[[BINV-8]]）

- pN1mi（≤2 mm）或 pN1（1–3 顆）
  - 不是化療候選人 → adjuvant endocrine therapy ± ovarian suppression/ablation；consider abemaciclib 或 ribociclib
  - 是化療候選人 → 先 consider gene expression assay 評估**預後**，然後二選一
    - adjuvant chemotherapy 接 endocrine therapy ± ovarian suppression/ablation
    - **或** adjuvant endocrine therapy **+** ovarian suppression/ablation（這一格是 `+`，不是 `±`）
    - 兩條路都 consider abemaciclib 或 ribociclib
- pN2/pN3（≥4 顆同側 >2 mm）→ adjuvant chemotherapy 接 endocrine therapy ± ovarian suppression/ablation（**category 1**）
  - consider abemaciclib 或 ribociclib，**and/or** olaparib（若有 germline BRCA1/2 PV）

### 術前治療做過了怎麼辦（[[BINV-16]]）

HR+/HER2− 走過術前全身治療的人，術後看的是病理反應：

- **ypT0N0 或 pCR** → adjuvant endocrine therapy（**category 1**）；consider ribociclib（符合資格者）
- **ypT1–4,N0 或 ypN≥1（有殘餘病灶）** → adjuvant endocrine therapy（**category 1**）**＋** adjuvant olaparib（若有 germline BRCA1/2 PV，**category 1**）；consider abemaciclib 或 ribociclib

### 貫穿全程

- **雙磷酸鹽**：對停經後（自然或誘導）、高風險 node-negative 或 node-positive 的人，考慮用 3–5 年以降低遠端轉移風險 [[BINV-6]] [[BINV-7]] [[BINV-8]]
- **骨密度**：要用 aromatase inhibitor 且有骨鬆風險者（年齡 >65、家族史、長期類固醇），先做基線 BMD；用藥期間每 1–2 年做 DEXA，間隔看風險 [[BINV-K]]
  - 停經後（自然或誘導）病人用 AI 期間，用雙磷酸鹽（口服或靜脈）或 denosumab 來維持／改善 BMD、降低骨折風險，是可接受的
- **藥物交互作用**：fluoxetine 與 paroxetine 這類 SSRI 會減少 endoxifen 與 4-OH tamoxifen 的生成，可能影響 tamoxifen 療效，併用要謹慎；citalopram 與 venlafaxine 對 tamoxifen 代謝的影響看來很小。NCCN **不建議**做 CYP2D6 基因檢測 [[BINV-K]]

---

## 關鍵試驗

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **TAILORx** | HR+/HER2−、pN0、21-gene RS 11–25 | 化療 + 內分泌 **vs** 內分泌單獨 | 整體不劣於；≤50 歲、RS 16–25 的次群有化療效益 | 停經後 RS <26 不化療、停經前 16–25 加化療的來源。NCCN 註腳特別提醒它**沒有納入** T1b 低惡性度無 LVI 的腫瘤 |
| **RxPONDER** | HR+/HER2−、pN1（1–3 顆）、RS ≤25 | 化療 + 內分泌 **vs** 內分泌單獨 | 停經後看不到化療效益；停經前有 | 為什麼 pN1 這一格停經前後的建議不同。[[BINV-N]] 的註腳就是引 RxPONDER |
| **MINDACT** | 臨床高風險、70-gene 基因低風險 | 化療 **vs** 不化療 | 遠端無轉移存活率高 | 70-gene 拿到 category 1，但仍列 Other——它證明的是預後，不是預測化療效益 |
| **monarchE** | 高風險 node-positive、HR+/HER2− | 內分泌 **± abemaciclib** 2 年 | IDFS 顯著改善 | 「consider adjuvant abemaciclib for eligible patients」的來源 |
| **NATALEE** | stage II–III、HR+/HER2− | 內分泌 **± ribociclib** 3 年 | IDFS 顯著改善 | 為什麼 ribociclib 出現在連 pN0 的格子裡（monarchE 只做 node-positive） |
| **OlympiA** | germline BRCA1/2 PV、HER2− 高風險早期 | 術後 olaparib 1 年 **vs** 安慰劑 | IDFS 與 OS 皆改善 | 「and/or adjuvant olaparib if germline BRCA1/2 PV」的來源 |
| **SOFT / TEXT** | 停經前 HR+ | tamoxifen **vs** OFS + tamoxifen **vs** OFS + exemestane | 加卵巢抑制者結果較佳，高風險族群獲益最明顯 | 為什麼停經前每一格都掛著 “± ovarian suppression/ablation” |
| **EBCTCG 雙磷酸鹽統合分析** | 早期乳癌術後 | 雙磷酸鹽 **vs** 無 | 停經後族群骨轉移與乳癌死亡下降；停經前看不到 | 為什麼 NCCN 的雙磷酸鹽註腳把族群限定在「postmenopausal（natural or induced）」 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗。

---

## 必背數字

- 停經後只有**一個** RS 分界：==26==。<26 走內分泌（category 1），≥26 加化療（category 1）[[BINV-6]]
- 停經前有**三段**：==≤15==、==16–25==、==≥26==。中間那段是加化療的，跟停經後不一樣 [[BINV-7]]
- pN 的三個門檻：pN1mi ==≤2 mm==、pN1 ==1–3 顆==、pN2/pN3 ==≥4 顆==同側且 >2 mm
- pT 的三個門檻：pT1a ==≤0.5 cm==、pT1b ==0.6–1.0 cm==、pT1c ==>1 cm==
- ER 陽性的定義：染色 ==1%–100%==；ER-low-positive 是 ==1%–10%==（療效資料有限）[[BINV-K]]
- PR 判讀只有兩檔：陽性 ==1%–100%== 有核染色，陰性 ==<1% 或 0%== [[BINV-K]]
- 雙磷酸鹽用 ==3–5 年==，族群限**停經後**（自然或誘導）、高風險 node-negative 或 node-positive
- 用 AI 期間 DEXA 的間隔：==每 1–2 年==，依風險調整 [[BINV-K]]
- 基線 BMD 的三個觸發條件：年齡 ==>65==、家族史、長期類固醇 [[BINV-K]]
- 自然停經的年齡區間 ==42–58 歲==；臨床診斷的門檻是無月經 ==≥12 個月==（但化療後或用 tamoxifen 時這一項不夠）[[BINV-O]]

---

## 記憶法

**三個問題，一個順序：停經 → 淋巴結 → 分數。**
NCCN 把 HR+/HER2− 拆成三頁，拆的軸剛好就是前兩個問題：[[BINV-6]] 是停經後（不分 N），[[BINV-7]] 是停經前 pN0，[[BINV-8]] 是停經前 pN+。翻對頁就等於答對前兩題。分數是第三題，而且只在那一頁的中間欄出現。

**「先確定他要化療，才去問分數。」**
三頁的流程圖都寫 “Determine if candidate for chemotherapy” 在 assay 之前。反過來做——先送 assay 再想要不要化療——會得到一個對這個病人沒有意義的數字，還可能被它牽著走。

**26 是停經後的唯一分界；停經前多切一刀在 15。**
記法：停經後的卵巢已經沒有聲音了，所以只需要一個門檻；停經前卵巢還在，所以中間那段（==16–25==）才需要「化療順便把卵巢功能關掉」這個灰色地帶——[[BINV-7]] 的註腳講的正是這件事：加化療降低了遠端復發，但**不清楚**這個效益是不是來自化療造成的卵巢抑制。

**pN2/pN3 是「不必問分數」的那一格。**
≥4 顆就直接化療接內分泌（category 1）。NCCN 明講這一群 assay 的資料很少，要靠臨床因素。所以看到 ≥4 顆，可以省下一次送檢的猶豫。

**「±」跟「+」差一撇。**
[[BINV-8]] 裡「是化療候選人但選擇不化療」那一格寫的是 endocrine therapy **+** ovarian suppression/ablation，其他格子都是 ±。少了化療，卵巢抑制就不再是可選的。

---

## 門診核對

- [ ] 停經狀態確定了嗎？是靠什麼確定的——年齡、無月經 ≥12 個月、還是 FSH/E2？[[BINV-O]]
- [ ] 化療後出現無月經嗎？有沒有連續複測 FSH 與 estradiol？正在接受 OFS 的話則無法判定停經狀態 [[BINV-O]]
- [ ] ER 染色百分比看了嗎？落在 1%–10%（ER-low-positive）的話，風險與效益要個別權衡 [[BINV-K]]
- [ ] pT 與 pN 都寫清楚了嗎？pN1mi 與 pN1、pN1 與 pN2 分屬不同格子 [[BINV-6]]
- [ ] **在送 assay 之前**：這個人是化療候選人嗎？[[BINV-6]] [[BINV-7]]
- [ ] pN0 且是化療候選人 → 21-gene 送了嗎（category 1）？T1b、低惡性度、無 LVI 是例外 [[BINV-7]]
- [ ] 停經前 pN1 → 你送的 assay 是拿來評估**預後**的，不是拿來預測化療效益的 [[BINV-8]] [[BINV-N]]
- [ ] 分數讀對表了嗎？停經前後的分界不一樣 [[BINV-6]] [[BINV-7]]
- [ ] 停經前病人：卵巢抑制／切除討論了沒？[[BINV-7]] [[BINV-8]]
- [ ] 符合 abemaciclib 或 ribociclib 資格嗎？資格條件在 [[BINV-K]]，不在流程圖上
- [ ] germline BRCA1/2 送了嗎？pN2/pN3 那一格的 olaparib 寫在「consider … for eligible patients」裡、沒有標 category；術前治療後有殘餘病灶那一格才是 category 1 [[BINV-8]] [[BINV-16]]
- [ ] 要用 AI 的話，基線 BMD 做了沒？年齡 >65、家族史、長期類固醇是三個觸發條件 [[BINV-K]]
- [ ] 病人在吃 fluoxetine 或 paroxetine 嗎？要用 tamoxifen 的話這是交互作用 [[BINV-K]]
- [ ] 停經後（自然或誘導）且高風險 → 雙磷酸鹽 3–5 年討論過了嗎？[[BINV-6]]

---

## 常見陷阱

**把 gene assay 當成篩檢，人人都送。**
[[BINV-6]] 與 [[BINV-7]] 的流程都是 “Determine if candidate for chemotherapy” → “If candidate for chemotherapy: Strongly consider 21-gene RT-PCR assay”。不是化療候選人的話，分數不會改變處置。而 [[BINV-6]] 對 ≥4 顆淋巴結那一群直接說「there are few data regarding the role of gene expression assays」，決定「should be based on clinical factors」。

**用停經後的 26 去讀停經前的分數。**
停經前是三段（≤15 / 16–25 / ≥26），中間那一段要加化療。[[BINV-7]] 的註腳還加了一句誠實的但書：這個效益「it is unclear if the benefit was due to the ovarian suppression effects promoted by chemotherapy」——所以那一格的「化療」有多少是在做卵巢抑制的事，NCCN 自己也沒有把握。

**把 T1b、低惡性度、無 LVI 的病人送去做 21-gene。**
[[BINV-7]] 的註腳明說這一群「should be treated with endocrine monotherapy as the TAILORx trial did not include patients with such tumors」。送了分數也在試驗族群之外。

**把「consider abemaciclib or ribociclib」讀成常規加藥。**
NCCN 每一格都寫 “Consider … **for eligible patients**”，而且把資格推到 [[BINV-K]]。流程圖上看不到資格條件，是刻意的——不去翻那一頁就會把它當成人人都給。

**把 [[BINV-8]] 那一格的 `+` 讀成 `±`。**
「是化療候選人、但選擇不化療」的那條路寫的是 “Adjuvant endocrine therapy **+** ovarian suppression/ablation”。其他格子是 ±。這一撇就是這一格的全部重點。

**把化療後的無月經當成停經，直接開 AI。**
[[BINV-O]]：化療引起無月經的人，卵巢功能可能仍完好或日後恢復，<40 歲更常見；「Twelve months of amenorrhea alone is insufficient to diagnose menopause with chemotherapy-induced amenorrhea」。要靠 FSH 與 estradiol，而且要**連續**測。tamoxifen 還會改變 FSH，讓這件事更難判。

**ER 1%–10% 自動走完整的內分泌路線。**
[[BINV-K]]：ER-low-positive 的療效資料有限；[[BINV-6]] 的註腳說這一群異質性高、生物行為常常接近 ER 陰性。要個別權衡風險與效益，不是自動照 HR+ 的路走。

**忘記雙磷酸鹽的族群限定。**
註腳寫的是「postmenopausal patients (natural or induced)」。停經前病人不在這一句裡——而「induced」這個字提醒你，接受卵巢抑制的人可能算進來。
