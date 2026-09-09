+++
id      = "breast/neoadjuvant"
track   = "breast"
order   = 5
group   = "早期"
title   = "Neoadjuvant 策略與術後升階"
oneline = "術前治療換到的是資訊；開完刀看 pCR 還是殘留，再看 subtype，八格決定要不要加藥"
refs    = ["BINV-12", "BINV-13", "BINV-14", "BINV-15", "BINV-16", "BINV-L", "BINV-M"]
figures = ["breast/neoadjuvant-escalation-her2", "breast/neoadjuvant-escalation-hr-tnbc", "breast/neoadjuvant-who", "breast/neoadjuvant-rt", "breast/neoadjuvant-trials", "breast/neoadjuvant-numbers", "breast/neoadjuvant-pitfalls", "breast/neoadjuvant-timeline"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個還沒開刀的早期乳癌病人，**該不該先做全身治療、開完刀之後要不要加藥**。

- **術前治療買到的第一件事是手術範圍，第二件事才是資訊。** NCCN 把好處列成四條：促成保乳、把不能開的變成能開、在個別病人層級提供預後資訊、找出殘留病灶這一群高復發風險的人以便追加治療——後兩條都特別註明 “particularly in patients with TNBC or HER2-positive breast cancer”。
- **術後的加藥完全由「pCR / 有殘留」×「subtype」決定。** [[BINV-16]] 整頁就是一張表，橫軸兩格、縱軸四個 subtype，八格之外沒有第九種答案。
- **殘留病灶不是治療失敗，它是下一步的處方箋。** 這是 neoadjuvant 與 adjuvant 最根本的差別：adjuvant 給完就結束，neoadjuvant 給完才開始分岔。

---

## 治療地景

![[fig:breast/neoadjuvant-escalation-her2]]

![[fig:breast/neoadjuvant-escalation-hr-tnbc]]

兩張圖是 [[BINV-16]] 那張表沿 subtype 拆開的重排：第一張是 HER2 陽性，第二張是 HR+/HER2− 與 TNBC。橫軸一樣，所以兩張可以並著看。看它們的時候記三件事：

**橫軸只有兩格。** ypT0N0 or pCR，以及 ypT1–4,N0 or ypN≥1。沒有「部分反應」這一欄——NCCN 在這一頁不區分殘留多少，只區分有沒有。

**HER2 陽性那張的 HR 陰性與 HR 陽性共用右邊那一格。** 殘留病灶時是同一組藥（T-DXd 或 T-DM1），差別只在 HR 陽性要「and 加上 adjuvant endocrine therapy」。左邊 pCR 那一欄才分家。

**每一格都掛著「術前給過什麼」的前提。** pembrolizumab 那兩格寫著 “if pembrolizumab-containing regimen was given preoperatively”；HER2 那幾格寫的是 “complete (up to) 1 year”——術前打過的算在那一年裡面。看術後處方之前，先翻術前處方。

---

## 決策路徑

![[fig:breast/neoadjuvant-timeline]]

![[fig:breast/neoadjuvant-who]]

### 誰該先做全身治療

- **不可開刀的病人**，一律是候選人 [[BINV-L]]：inflammatory breast cancer、bulky or matted cN2 腋下淋巴結、cN3 nodal disease、cT4 腫瘤
- **可開刀但 preferred 先做的三種情況** [[BINV-L]]：
  - HER2-positive disease 與 TNBC，若 ≥cT2 或 ≥cN1
  - 相對於乳房大小過大、而病人想保乳的原發腫瘤
  - 預期會由 cN+ 轉成 cN0 的 cN+ 疾病
- **可以考慮的**：cT1c、cN0 的 HER2-positive disease 與 TNBC [[BINV-L]]
- 另外還有一類：definitive surgery 可能會被延遲的病人 [[BINV-L]]
- **不適合的三種人** [[BINV-L]]：in situ 病灶廣泛而 invasive carcinoma 的範圍界定不清；腫瘤範圍界定不良；腫瘤摸不到、也無法臨床評估
- 進入這條路的臨床分期 [[BINV-12]]：c≥T2 或 cN+ 且 M0；或 cT1c, cN0 的 HER2-positive disease；或 cT1c, cN0 的 TNBC
- 好處與代價要一起講給病人聽 [[BINV-L]]：
  - **機會**：cN+ 轉 cN0 之後可能只需要 SLNB；沒反應或惡化時有機會改藥；cN+ 轉 cN0/pN0 之後放射線照野可能縮小；爭取到基因檢測的時間、規劃重建的時間、以及延後決定手術方式的時間；也是測試新療法與預測性生物標記的研究平台
  - **代價**：臨床分期高估會造成全身治療的 overtreatment；臨床分期低估會造成放射線的 undertreatment；治療期間有疾病惡化的可能

### 開始之前要做的檢查

- 一定要做的 [[BINV-12]]：
  - 腋下的理學檢查；腋下超音波（除非先前 MRI 已顯示腋下淋巴結陰性）；可疑淋巴結的經皮切片
  - 切片時**要在最可疑的那一顆放 marker**，好讓它在 definitive surgery 時被找出來、取出來
  - CBC
  - 含 LFTs 與 alkaline phosphatase 的 comprehensive metabolic panel
- 視臨床需要考慮 [[BINV-12]]：胸部診斷性 CT ± 顯影；腹部 ± 骨盆顯影 CT 或顯影 MRI；bone scan 或 sodium fluoride PET/CT（category 2B）；FDG-PET/CT；乳房 MRI（optional，尤其是乳房攝影看不到的腫瘤，若先前未做）
- FDG-PET/CT 的定位 [[BINV-12]]：對 stage III 與 invasive ductal（相對於 lobular）最有幫助；在 cT1cN1、cT2cN0 這類 stage IIA 的情況只在特定時機有用——CT 加 bone scan 結果模稜兩可、懷疑有未偵測到的淋巴結或遠端病灶、以及治療反應評估。它可以當作初始標準分期的輔助或替代，也可以與診斷性 CT 同時做；若一開始的 FDG-PET/CT 在 PET 與 CT 兩個成分上顯示一致，可能就不需要 bone scan 或 sodium fluoride PET/CT
- 考慮術前治療時，**在 workup 階段就可以考慮做 gene expression assay**：對象是可開刀的 ER-positive、HER2-negative 疾病中，cN0 的停經前與停經後病人，以及 cN1 的停經後病人 [[BINV-12]]
- 可開刀的疾病，第一劑之前還有三件事 [[BINV-13]]：
  - 乳房 core biopsy 並放置**影像可偵測的夾子或標記**來標定腫瘤床（先前沒做的話）
  - 腋下影像：超音波或 MRI（先前沒做的話）
  - 最可疑和／或臨床陽性的腋下淋巴結切片 + 放 marker；**只標記最可疑的那一顆**，手術時與 SLN 一起取出
- 分岔就在這裡 [[BINV-12]]：可開刀 → [[BINV-13]]；不可開刀 → [[BINV-15]]

### 治療當中：反應怎麼評估

- 準確評估乳房內腫瘤或區域淋巴結對術前治療的反應**很困難**。要做的是理學檢查，加上「初始腫瘤分期時就異常」的那些影像（mammogram 和／或乳房超音波 和／或乳房 MRI）；用哪一種由多專科團隊決定 [[BINV-14]] [[BINV-15]]
- **MRI 評估術前治療反應比 mammography 準** [[BINV-14]]
- 不可開刀或局部晚期（非發炎性）的路徑 [[BINV-15]]：
  - 有反應且腫瘤變成可開刀 → mastectomy + surgical axillary staging ± reconstruction（optional），或 BCS + surgical axillary staging ± oncoplastic reconstruction
  - 沒有反應和／或腫瘤仍不可開刀 → 考慮追加全身治療和／或術前放射線
    - 之後有反應且可開刀 → 回到上面那條路
    - 仍不可開刀 → individualize treatment
  - 這一群人的 adjuvant RT 是全乳或胸壁 **加上** comprehensive RNI，包含任何有風險的腋下
  - T4（非發炎性）有皮膚和／或胸壁侵犯的病人，經多專科評估局部復發風險後，仔細選擇的少數人可以保乳。除了 [[BINV-G]] 的標準禁忌之外，另有兩條排除：術前治療前就是 inflammatory（T4d），以及術前治療後皮膚侵犯沒有完全消退 [[BINV-15]]

### 手術之後：放射線

![[fig:breast/neoadjuvant-rt]]

- 保乳 + surgical axillary staging ± oncoplastic reconstruction 之後 [[BINV-14]]：
  - 任何 cN0、ypN0 → 全乳 RT ± boost to tumor bed
  - cN1 且 ypN0 → 全乳 RT ± boost to tumor bed；**comprehensive RNI is not routinely indicated**
  - cN2–3 且 ypN0 → 全乳 RT ± boost + comprehensive RNI，包含任何有風險的腋下
  - 任何 ypN+ → 全乳 RT ± boost + comprehensive RNI，包含任何有風險的腋下
- Mastectomy + surgical axillary staging ± reconstruction 之後（腋下要先由 SLNB、TAD 或 ALND 充分評估過）[[BINV-14]]：
  - cT1–T3、cN0、ypN0 → **PMRT + RNI is not routinely indicated**
  - cT1–T3、cN1、ypN0 → **PMRT + RNI is not routinely indicated**，但這一格帶著一整段但書
  - cN2–3 且 ypN0；任何 ypN+；cT4 任何 N → PMRT + comprehensive RNI，包含任何有風險的腋下
- **cN1 → ypN0 那一格的但書要念出來** [[BINV-14]]：NSABP B-51 的追蹤時間有限，且無法對這個次族群證明長期非劣性，所以要把「治療不足的潛在風險」與「PMRT + RNI 已確立的長期存活效益」放在一起討論——尤其是年輕／預期壽命長、ER-positive、乳房內有殘留病灶，或有多項傳統臨床病理高風險因子的病人
- Boost 的加碼條件 [[BINV-14]]：central/medial tumor，或腫瘤 ≥2 cm 且有 grade 3／ER-negative／LVI／**乳房內殘留癌量大**／年輕或預期壽命長之一 → strongly consider boost
- 腋下手術本身 [[BINV-14]]：術前就是 N+ 的人，化療後做 SLNB 的偽陰性率 >10%；改善方式是治療前標記最可疑的淋巴結、手術時用 dual tracers、取 ≥3 顆 SLN、並取出被標記的那顆（TAD）
- 全身治療的部分 [[BINV-14]] [[BINV-15]]：**術前沒完成的療程，術後要把它完成**，然後才進 [[BINV-16]] 的升階

### 手術之後：升階

讀法只有一步——先確定 subtype，再看是 **ypT0N0 or pCR** 還是 **ypT1–4,N0 or ypN≥1** [[BINV-16]]。

- **HR-positive／HER2-negative**
  - pCR → adjuvant endocrine therapy（category 1）；符合資格者 consider ribociclib（資格看 BINV-K）
  - 殘留 → adjuvant endocrine therapy（category 1）+ 若有 germline BRCA1/2 PV 則加 adjuvant olaparib（category 1）；符合資格者 consider adjuvant abemaciclib 或 ribociclib
- **HR-negative／HER2-positive**
  - pCR → 把 trastuzumab 的 HER2-targeted therapy 做滿 up to 1 年（category 1）± pertuzumab；**初始分期時淋巴結陽性者**，pertuzumab + trastuzumab（category 1）
  - 殘留 → 高復發風險者用 fam-trastuzumab deruxtecan-nxki（category 1），**或** ado-trastuzumab emtansine（category 1）
    - T-DM1 因毒性停掉 → 把 trastuzumab 的 HER2-directed therapy 做滿 up to 1 年（category 1）± pertuzumab；初始分期淋巴結陽性者用 pertuzumab + trastuzumab（category 1）
- **HR-positive／HER2-positive**
  - pCR → endocrine therapy（category 1）+ 把 trastuzumab 做滿 up to 1 年（category 1）± pertuzumab；初始分期淋巴結陽性者 pertuzumab + trastuzumab（category 1）
  - 殘留 → 與 HR-negative／HER2-positive 同一格，**and 加上 adjuvant endocrine therapy（category 1）**
- **HR-negative／HER2-negative（TNBC）**
  - pCR → 高風險者 adjuvant pembrolizumab，**前提是術前給的是含 pembrolizumab 的療程**
  - 殘留 → adjuvant pembrolizumab（同一個前提，category 1）和／或 adjuvant capecitabine（6–8 cycles）和／或 若有 germline BRCA1/2 PV 則 adjuvant olaparib 一年（category 1）
  - 這三者怎麼排序或合併**沒有資料**；NCCN 的說法是：殘留病灶的復發風險高，所以依序或合併使用「may be considered」
- 這一頁的三個註腳，各自掛在不同的地方 [[BINV-16]]：
  - **不適用於 residual DCIS（ypTis）**——這個註腳掛在 ado-trastuzumab emtansine 與 adjuvant capecitabine 上
  - 停經（自然或誘導）後、高風險的 node-negative 或 node-positive 病人，consider adjuvant bisphosphonate 3–5 年來降低遠端轉移風險
  - HR-positive、HER2-positive 而復發風險被判定為高的人，可以 consider 在含 trastuzumab 的 adjuvant 治療之後接 extended adjuvant neratinib；但用過 pertuzumab 或 ado-trastuzumab emtansine 的人，extended neratinib 的效益與毒性**未知**
- APHINITY 在中位追蹤 11.3 年的更新結果，確認了在 trastuzumab 加化療上再加 pertuzumab 對預防復發的效益 [[BINV-16]]
- 升階做完之後接 Follow-Up（BINV-17）[[BINV-16]]

### 給藥時的通則

- **順序** [[BINV-M]]：化療與內分泌治療要**依序**給，內分泌治療在化療之後。Adjuvant olaparib 則可以與內分泌治療同時給
- **心臟** [[BINV-M]]：用 anthracycline 或 HER2-targeted therapy 的人要規則做心臟監測；trastuzumab 治療前與治療中要評估 LVEF——最佳頻率其實未知，FDA 仿單建議開始前測一次、治療中每 3 個月一次
- **周邊神經病變** [[BINV-M]]：TIPN 風險較高的人（非裔、糖尿病）可以考慮把 docetaxel 當作首選 taxane；考慮手腳 cryotherapy，也可以考慮 glove constriction
- **落髮** [[BINV-M]]：考慮 scalp cooling，但含 anthracycline 的療程效果可能較差
- **替代** [[BINV-M]]：FDA 核准的 biosimilar 可以替代任何建議的生物製劑；albumin-bound paclitaxel／docetaxel／paclitaxel 在醫療必要時（如過敏反應）可以互換，但若取代每週的 docetaxel 或 paclitaxel，albumin-bound paclitaxel 的每週劑量**不應超過 125 mg/m²**
- **皮下劑型** [[BINV-M]]：trastuzumab and hyaluronidase-oysk 可以取代靜脈 trastuzumab，但劑量與給法不同，而且**不可以與 ado-trastuzumab emtansine 互相替代**；pertuzumab, trastuzumab, and hyaluronidase-zzxf 可以取代任何「靜脈 pertuzumab + 靜脈 trastuzumab 併用」的場合；pembrolizumab and berahyaluronidase alfa-pmph 皮下注射可以取代靜脈 pembrolizumab
- **免疫治療** [[BINV-M]]：用 immune checkpoint inhibitor 的人要篩檢並處理免疫相關毒性與內分泌功能異常（如甲狀腺低下、腎上腺功能不全）

---

## 關鍵試驗

![[fig:breast/neoadjuvant-trials]]

| 試驗                                                   | 族群                                                  | 比較                                                 | 結果                                       | 改變了什麼                                                                                                           |
| ------------------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| **KEYNOTE-522**                                        | 早期 TNBC                                             | 術前化療 **± pembrolizumab**，術後續用 pembrolizumab | pCR 提高、EFS 顯著改善                     | [[BINV-16]] 裡 TNBC 兩格 pembrolizumab 的來源，也是「術前有給才能術後給」這個前提的由來                              |
| **CREATE-X**                                           | HER2-negative、術前化療後有殘留病灶                   | 觀察 **vs capecitabine**                             | DFS 與 OS 均改善                           | TNBC 殘留病灶的 capecitabine 6–8 cycles                                                                              |
| **OlympiA**                                            | germline BRCA1/2、高風險 HER2-negative 早期乳癌       | 安慰劑 **vs olaparib 一年**                          | iDFS 與 OS 均改善                          | HR+/HER2− 與 TNBC 兩列殘留格裡的 olaparib（category 1）                                                              |
| **KATHERINE**                                          | HER2-positive、術前治療後有 residual invasive disease | trastuzumab **vs T-DM1**                             | iDFS 顯著改善                              | 「殘留就換 ADC」這個概念的原型                                                                                       |
| **DESTINY-Breast05**                                   | HER2-positive、術前治療後有殘留病灶                   | T-DM1 **vs T-DXd**                                   | iDFS 優於 T-DM1                            | NCCN 6.2026 把 T-DXd 寫在 T-DM1 前面，並限定「high risk of recurrence」                                              |
| **APHINITY**                                           | HER2-positive 早期乳癌                                | 化療 + trastuzumab **± pertuzumab**                  | 中位追蹤 11.3 年確認預防復發的效益         | 直接被引在 [[BINV-16]] 的註腳裡，支撐「初始分期淋巴結陽性者用 pertuzumab + trastuzumab」                             |
| **NSABP B-51**                                         | cN1 經術前治療轉成 ypN0                               | 加或不加 RNI／PMRT                                   | 追蹤期有限，未能對這個次族群證明長期非劣性 | [[BINV-14]] 因此寫「不常規建議」，同時要求把治療不足的風險攤開來談                                                   |
| **monarchE**（abemaciclib）、**NATALEE**（ribociclib） | HR+/HER2− 高風險早期乳癌                              | 內分泌治療 ± CDK4/6 抑制劑                           | iDFS 改善                                  | [[BINV-16]] 裡的 “consider ribociclib”（pCR 格）與 “consider abemaciclib or ribociclib”（殘留格）；資格條件在 BINV-K |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，APHINITY 與 NSABP B-51 是唯二被寫進 [[BINV-16]]／[[BINV-14]] 註腳的試驗。

---

## 必背數字

![[fig:breast/neoadjuvant-numbers]]

- 術前治療 preferred 的門檻：HER2-positive 或 TNBC 且 ==≥cT2 或 ≥cN1== [[BINV-L]]
- 可以「考慮」術前治療的最小分期：==cT1c, cN0== 的 HER2-positive disease 與 TNBC [[BINV-L]]
- 升階表的橫軸只有兩格：==ypT0N0 or pCR== 與 ==ypT1–4, N0 or ypN≥1== [[BINV-16]]
- HER2 標靶治療的總長度：==up to 1 年==——術前打過的算在裡面 [[BINV-16]]
- TNBC 殘留病灶的 capecitabine：==6–8 cycles== [[BINV-16]]
- 殘留病灶的 olaparib：==1 年==，條件是 germline BRCA1/2 PV [[BINV-16]]
- Adjuvant bisphosphonate：==3–5 年==，對象是停經（自然或誘導）後、高風險的 node-negative 或 node-positive 病人 [[BINV-16]]
- APHINITY 更新結果的中位追蹤：==11.3 年== [[BINV-16]]
- 術前 N+ 者化療後做 SLNB 的偽陰性率：==>10%==；TAD 要取 ==≥3 顆== SLN 並取出被標記的那顆 [[BINV-14]]
- LVEF 監測：開始 trastuzumab 前一次、治療中 ==每 3 個月==（FDA 仿單；NCCN 註明最佳頻率未知）[[BINV-M]]
- Albumin-bound paclitaxel 取代每週 taxane 時的上限：==125 mg/m²== 每週 [[BINV-M]]
- Boost 的加碼門檻之一：腫瘤 ==≥2 cm== 且有 grade 3／ER-negative／LVI／殘留癌量大／年輕之一 [[BINV-14]]

---

## 記憶法

**「兩欄四列」。**
[[BINV-16]] 整頁就是一張 ==2×4== 的表。任何一個問題如果放不進這八格，那它就不是這一頁在回答的問題——例如「殘留多少算多」，NCCN 在這裡不回答。

**pCR 那一欄的動詞是「做完」，殘留那一欄的動詞是「換」或「加」。**
pCR：complete up to 1 year、開始內分泌治療。殘留：換成 ADC、加 capecitabine、加 olaparib、加 pembrolizumab。記住這兩個動詞，八格只剩下藥名要背。

**「術後看術前」。**
pembrolizumab 兩格的條件是術前給過含 pembrolizumab 的療程；HER2 幾格的 “up to 1 year” 把術前的療程算進去。所以打開 [[BINV-16]] 之前，先打開病人的術前處方。

**「初始分期」決定 pertuzumab，不是 ypN。**
HER2 陽性 pCR 那幾格：==node positive at initial staging== 才把 “± pertuzumab” 變成明確的 “pertuzumab + trastuzumab (category 1)”。判準是治療前的淋巴結狀態，不是術後的病理。

**七頁各答一個問題。**
L 是「誰能做」，12 與 13 是「開始前要查什麼」，15 是「不可開刀的走哪」，14 是「開完刀的手術與放射線」，16 是「要不要加藥」，M 是「怎麼給」。先想清楚問的是哪一題，再決定翻哪一頁。

---

## 門診核對

- [ ] 這個病人屬於 [[BINV-L]] 的哪一類？（不可開刀／可開刀但 preferred／可以考慮）
- [ ] 有沒有落在 non-candidate 那三條？（in situ 廣泛而 invasive 範圍不清、腫瘤範圍界定不良、摸不到也無法臨床評估）[[BINV-L]]
- [ ] 腋下超音波做了嗎？可疑淋巴結切片 + 放 marker 了嗎（只放最可疑的那一顆）？[[BINV-12]] [[BINV-13]]
- [ ] 乳房 core biopsy 有沒有放影像可偵測的夾子來標定腫瘤床？[[BINV-13]]
- [ ] CBC 與含 LFTs、alkaline phosphatase 的代謝功能檢查做了嗎？[[BINV-12]]
- [ ] 可開刀的 ER-positive／HER2-negative 病人，要不要在 workup 階段做 gene expression assay？[[BINV-12]]
- [ ] 初始分期時哪幾項影像是異常的？術後評估反應要用同一組 [[BINV-14]]
- [ ] germline BRCA1/2 送了嗎？（olaparib 的資格取決於它）[[BINV-16]]
- [ ] 術前給的是不是含 pembrolizumab 的療程？（決定術後能不能給）[[BINV-16]]
- [ ] **初始分期**時淋巴結陽性嗎？（決定 HER2 那幾格要不要 pertuzumab + trastuzumab）[[BINV-16]]
- [ ] 病理是 ypT0N0／pCR 還是有殘留？殘留的是不是只有 DCIS（ypTis）？[[BINV-16]]
- [ ] 術前的療程完成了嗎？沒完成的部分術後要補完 [[BINV-14]]
- [ ] cN 幾、ypN 幾？對照 [[BINV-14]] 那一格決定 RNI／PMRT
- [ ] cN1 轉 ypN0 的話，NSABP B-51 的但書跟病人談過了嗎？[[BINV-14]]
- [ ] 開始 trastuzumab 前的 LVEF 做了嗎？後續每 3 個月的排程排了嗎？[[BINV-M]]

---

## 常見陷阱

![[fig:breast/neoadjuvant-pitfalls]]

**把 “consider ribociclib” 跟 “consider abemaciclib or ribociclib” 當成同一句。**
[[BINV-16]] 在 HR-positive／HER2-negative 的 **pCR** 那一格只寫 ribociclib；**殘留**那一格才寫 abemaciclib 或 ribociclib。兩格的資格條件都指向 BINV-K，但可選的藥不一樣。

**把 “± pertuzumab” 讀成「要加 pertuzumab」。**
HER2 陽性 pCR 那幾格的原文是 “complete (up to) 1 year of HER2-targeted therapy with trastuzumab (category 1) **± pertuzumab**”。只有在 “node positive at initial staging” 時，才變成明確的 “pertuzumab + trastuzumab (category 1)”。判準是初始分期，不是術後的 ypN。

**用 ypTis 去啟動殘留病灶的升階。**
[[BINV-16]] 的註腳只有一句：“Recommendations do not apply to residual DCIS (ypTis).” 只剩 DCIS 不是 residual invasive disease，那些 category 1 的加藥都不套用。

**cN1 轉 ypN0 就直接說「不用照 RNI」。**
[[BINV-14]] 確實寫 “PMRT + RNI is not routinely indicated”，但同一格掛著一整段註腳：NSABP B-51 追蹤期有限、未能對這個次族群證明長期非劣性，要把治療不足的風險與 PMRT + RNI 已確立的長期存活效益一起討論——尤其是年輕／預期壽命長、ER-positive、乳房內有殘留病灶，或有多項高風險因子的人。

**把 T-DXd 當成殘留病灶的預設。**
[[BINV-16]] 寫的是 “Fam-trastuzumab deruxtecan-nxki (category 1) **for those with high risk of recurrence** Or Ado-trastuzumab emtansine (category 1)”。T-DXd 帶著一個族群限定詞，T-DM1 沒有；兩者都是 category 1。

**以為「不可開刀」只有 IBC。**
[[BINV-L]] 的 inoperable 清單有四項：IBC、bulky or matted cN2 腋下淋巴結、cN3 nodal disease、cT4 腫瘤。而 [[BINV-15]] 那一頁是給**非發炎性**的局部晚期／不可開刀疾病用的——IBC 有自己的路徑。

**術前治療沒反應就把原訂療程打完。**
[[BINV-15]] 給的是另一條路：沒有反應和／或仍不可開刀 → 考慮追加全身治療和／或術前放射線。[[BINV-L]] 也把「沒有反應或惡化時可以修改全身治療」列為術前治療的 opportunity 之一。原訂療程不是承諾。

**化療與內分泌治療同時開始。**
[[BINV-M]]：“Chemotherapy and endocrine therapy should be given sequentially, with endocrine therapy given after chemotherapy.” 但下一句是 adjuvant olaparib **可以**與內分泌治療同時給。兩句話緊鄰，很容易讀混。

**只用 mammography 評估術前治療的反應。**
[[BINV-14]] 明說 “MRI is more accurate than mammography for assessing tumor response to preoperative therapy”，而且要用的是初始分期時就異常的那些影像——不是隨便挑一種。
