+++
id      = "breast/staging"
track   = "breast"
order   = 2
group   = "基礎"
title   = "分期與 workup"
oneline = "M0 沒有症狀就不做全身影像；T 量侵襲成分的最大徑、N 看幾顆與哪一站；美國登記要用的是 prognostic stage，不是 anatomic stage"
refs    = ["BINV-1", "BINV-12", "BINV-18", "BINV-B", "BINV-E", "ST-1", "ST-2", "ST-3", "ST-4", "ST-6", "ST-9", "ST-11"]
figures = ["breast/staging-tnm-table", "breast/staging-workup-flow", "breast/staging-trials", "breast/staging-numbers", "breast/staging-pitfalls"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個新診斷的乳癌病人，**要做哪些檢查、不要做哪些檢查，做完之後怎麼把她放進一個期別**。

- **workup 的預設是節制的**。[[BINV-1]] 只列了病史理學檢查、雙側乳房攝影、必要時超音波、病理與 biomarker；額外影像只在有轉移的症狀或臨床高風險時才做。原句是 “Routine systemic staging is not indicated for non-metastatic (M0) cancer in the absence of systemic symptoms.”
- **AJCC 有三張期別表，用途不同**。Anatomic stage group 只給「沒有常規 biomarker 檢測的地區」用；美國的癌症登記必須用 clinical 與 pathological prognostic stage [[ST-3]]。
- **Pathological prognostic stage 不適用於做過術前治療的病人** [[ST-9]]。這一條在術前治療越做越多的今天最容易被違反。

---

## 治療地景

![[fig:breast/staging-tnm-table]]

這張圖是 [[ST-1]] 到 [[ST-3]] 那張 Table 1 的重排。看它的時候記三件事：

**T 有一把尺，只有五個刻度。** 1、5、10、20、50 毫米。≤1 是 T1mi，>1–5 是 T1a，>5–10 是 T1b，>10–20 是 T1c，>20–50 是 T2，>50 是 T3。整個 T1 的三個子分類全部塞在 20 mm 以內，而 T2 一格就吃掉 30 mm——這個不對稱是刻意的，因為小腫瘤的每一毫米更會改變治療。T4 完全不看大小，看的是侵犯：胸壁（T4a）、皮膚潰瘍或衛星結節或水腫（T4b）、兩者都有（T4c）、發炎性乳癌（T4d）。

**N 一直在回答兩個問題：幾顆、哪一站。** 臨床側（cN）主要看「哪一站」與「動不動得了」——level I/II 可動是 cN1，固定或沾黏是 cN2a，只有內乳是 cN2b，鎖骨下是 cN3a，內乳加腋下是 cN3b，鎖骨上是 cN3c。病理側（pN）主要看「幾顆」——1–3 顆是 pN1a，4–9 顆是 pN2a，≥10 顆是 pN3a。兩側的邏輯不一樣，所以 cN2 與 pN2 不是同一件事。

**體積的三個門檻只有兩個數字。** 0.2 mm 與 2.0 mm。≤0.2 mm 是 isolated tumour cells，記成 pN0(i+)，仍然算 pN0；>0.2 且 ≤2.0 mm（約 200 顆細胞）是 micrometastasis，記成 pN1mi；>2.0 mm 才是一顆真正的陽性淋巴結。遠端側也用 0.2 mm 這個數字：cM0(i+) 的細胞或沉積不超過 0.2 mm，而 pM1 要求非區域淋巴結的轉移 >0.2 mm。

---

## 決策路徑

![[fig:breast/staging-workup-flow]]

### 局部乳癌（侵襲性、非發炎性、M0）的基本 workup

- 病史與理學檢查 [[BINV-1]]
- 影像：雙側診斷性乳房攝影；必要時乳房超音波 [[BINV-1]]
    - **若考慮省略手術腋下分期，要做腋下超音波** [[BINV-1]]
- 乳房 MRI 為選項，對乳房攝影看不到的腫瘤要特別考慮 [[BINV-1]] [[BINV-B]]
- 病理審閱（NCCN 背書 CAP 的病理報告協定）、ER/PR 與 HER2 狀態 [[BINV-1]]
- 有遺傳性乳癌風險、任何年齡的 TNBC、或 adjuvant olaparib 候選者 → 基因諮詢與檢測 [[BINV-1]]
- 生育與性健康的議題、育齡病人的驗孕、distress 評估 [[BINV-1]]
- **只有在有轉移的症狀徵象、或臨床高風險時，才考慮額外影像** [[BINV-1]]
- 考慮做淋巴水腫的基線量測 [[BINV-1]] [[BINV-E]]

### 分岔：這個病人往哪一頁走

- cT0、cN+、M0 → 隱匿性原發癌，走另一份指引 [[BINV-1]]
- cT1–T4、≥cN0、M0 → 依是否考慮術前全身治療分成兩條 [[BINV-1]]
- 發炎性乳癌 → 走 IBC 的頁面 [[BINV-1]]
- Stage IV（M1）或復發 → 走 [[BINV-18]] 的 workup

### 要做術前全身治療的，workup 加一層

適用對象是 c≥T2 或 cN+ 且 M0，或 cT1c、cN0 的 HER2 陽性，或 cT1c、cN0 的 TNBC [[BINV-12]]：

- 腋下評估：理學檢查；腋下超音波（除非先前 MRI 已顯示腋下淋巴結陰性）；可疑淋巴結做經皮切片 [[BINV-12]]
    - **切片時要放 marker**，好讓那顆淋巴結在正式手術時找得到、拿得掉 [[BINV-12]]
- CBC、comprehensive metabolic panel（含 LFT 與 alkaline phosphatase）[[BINV-12]]
- 依臨床需要再考慮：胸部 CT ± 顯影、腹部 ± 骨盆 CT 顯影或 MRI 顯影、骨掃描或 sodium fluoride PET/CT（category 2B）、FDG-PET/CT [[BINV-12]]
- 先前沒做過的話，乳房 MRI 仍是選項 [[BINV-12]]
- FDG-PET/CT 的定位寫得很細：對進展期（stage III）與侵襲性乳管癌最有幫助；也可用於 stage IIA（cT1cN1、cT2cN0）的特定情況——CT 加骨掃描結果模稜兩可、懷疑有未偵測到的淋巴結或遠端病灶、評估治療反應。它可以作為初始標準分期的補充或替代；反過來，若前置的 FDG-PET/CT 在 PET 與 CT 兩側都清楚一致，骨掃描或 sodium fluoride PET/CT 可能就不需要 [[BINV-12]]

### Stage IV 或復發的 workup 是另一套

- 病史理學檢查，**討論治療目標、採取共同決策、記錄治療歷程** [[BINV-18]]
- CBC、comprehensive metabolic panel（含 LFT 與 ALP）[[BINV-18]]
- 系統性分期影像：胸部 CT ± 顯影；腹部 ± 骨盆 CT 顯影或 MRI 顯影；有 CNS 症狀時腦部 MRI 顯影；有背痛或脊髓壓迫症狀時脊椎 MRI 顯影；骨掃描或 sodium fluoride PET/CT（category 2B）[[BINV-18]]
- 特定情況有用：FDG-PET/CT（ER 陽性與 lobular 組織型可考慮 FES-PET/CT）；有症狀的骨頭、以及骨掃描異常的長骨與承重骨拍 X 光 [[BINV-18]]
- Biomarker：至少第一次復發時做切片，進展時考慮再做；重評 ER/PR 與 HER2；multigene panel testing [[BINV-18]]

### 腋下分期做到什麼程度

- SLNB 是首選方法，前提是病人適合做 SLNB [[BINV-E]]
- 在沒有明確存活優勢的資料下，**腋下分期可以是選擇性的**：腫瘤特別 favorable、輔助全身治療與放射治療的選擇不太可能因此改變、或有嚴重共病的病人 [[BINV-E]]
- **可考慮省略 SLNB 的那一群寫得很具體**（依 SOUND 與 INSEMA）：>50 歲且停經後、cT1N0（腋下超音波陰性）、HR+/HER2 陰性、grade 1–2、願意接受全乳放射治療與內分泌治療。**lobular 組織型要謹慎** [[BINV-1]] [[BINV-E]]
- Level III 廓清只在 level II 或 III 有肉眼可見病灶時才做 [[BINV-E]]
- 淋巴水腫是腋下手術的可能副作用，早期偵測是關鍵；有風險因子者考慮治療前先量兩側手臂當基線 [[BINV-E]]

### MRI 什麼時候真的有用

- 分期評估：界定同側乳房的範圍、多發或多中心病灶，或初診時篩檢對側乳房（**category 2B**）[[BINV-B]]
    - 但現有資料**沒有**顯示術前 MRI 能改善 DCIS 或侵襲性乳癌接受 BCS 病人的再切除率、局部復發或存活 [[BINV-B]]
- 術前全身治療前後評估範圍、反應、能不能保乳 [[BINV-B]]
- 找出臨床上隱匿的病灶：cT0、cN+ 的病人，Paget disease，或乳房攝影／超音波／理學檢查上界定不清的 invasive lobular carcinoma [[BINV-B]]
- **偽陽性常見，手術決策不能只憑 MRI**；MRI 發現的可疑區域建議另外取檢體 [[BINV-B]]
- 追蹤：多數有乳癌病史者的 MRI 追蹤價值未定；建議每年 MRI 的只有兩種——診斷時 ≤50 歲，或乳房緻密 [[BINV-B]]
- 執行面：要有專用乳房線圈、熟悉時序的乳房影像科醫師，而且該中心要有能力做 MRI 導引的針刺取樣或定位 [[BINV-B]]

### 從 TNM 到期別：選對那張表

- **Anatomic stage group** 只該用在「biomarker 檢測不是常規可得」的地區；美國的癌症登記必須使用 clinical 與 pathological prognostic stage group [[ST-3]]
- **Clinical prognostic stage 適用於所有乳癌病人**，用的是病史、理學檢查、任何做過的影像（臨床分期不一定需要影像）與相關切片；**基因體資訊不納入**，因為那需要手術的病理資料 [[ST-6]]
- **Pathological prognostic stage 只適用於一開始就手術的病人**，它包含臨床分期的全部資訊加上手術與病理發現；**不適用於術前接受過全身或放射治療的病人** [[ST-9]]
- Grade 一律要給：Nottingham（SBR 的 Nottingham 修訂版），由 tubule formation、nuclear pleomorphism、calibrated mitotic count 三項各 1–3 分相加 [[ST-4]]
    - **DCIS 用的是 nuclear grade，不是同一套** [[ST-4]]
- 幾條容易忘的規則 [[ST-3]]：
    - T1 包含 T1mi
    - T0 與 T1 合併 N1mi 分到 stage IB；T2、T3、T4 合併 N1mi 則按 N1 處理
    - M0 包含 M0(i+)；**pM0 不是有效的標記，任何 M0 都是臨床的**
    - 術前治療前就是 M1 的，不論反應如何都維持 stage IV
    - 術後影像若在診斷後 4 個月內做、期間沒有疾病進展、而且病人沒接受術前治療，發現遠端轉移時可以改期別
    - 術前治療後的分期加 “yc” 或 “yp” 前綴；**達到 pCR 時不指定 anatomic stage group**（例如 ypT0ypN0cM0）
- 唯一被寫進病理 prognostic stage 的基因體檢測：T1N0M0 或 T2N0M0、HER2 陰性、ER 陽性，若 Oncotype DX 分數 <11，歸類為 pathological prognostic stage IA。取得基因體資訊**不是**指定病理 prognostic stage 的必要條件 [[ST-11]]

---

## 關鍵試驗

![[fig:breast/staging-trials]]

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **SOUND** | cT1N0、腋下超音波陰性 | SLNB **vs** 省略腋下手術 | 遠端無疾病存活未見劣勢 | 與 INSEMA 一起，是 [[BINV-1]] 與 [[BINV-E]] 那條「>50 歲、停經後、HR+/HER2−、grade 1–2 可考慮省略 SLNB」註腳的來源 |
| **INSEMA** | 臨床淋巴結陰性的早期乳癌 | SLNB **vs** 不做腋下手術 | 省略腋下手術未見劣勢 | 同上；NCCN 把兩個試驗並列在同一條註腳裡 |
| **ACOSOG Z0011** | cT1–2 N0、1–2 顆 SLN 陽性、接受 BCS 加全乳放射治療 | 完成腋下廓清 **vs** 不再廓清 | 存活與腋下控制未見劣勢 | 「幾顆陽性」不再自動等於「要廓清」——pN 的數字與手術範圍脫鉤 |
| **EORTC AMAROS** | SLN 陽性 | 腋下廓清 **vs** 腋下放射治療 | 腋下控制相當，淋巴水腫較少 | 讓 [[BINV-E]] 那句「淋巴水腫是腋下手術的可能副作用」有替代方案 |
| **術前 MRI 的統合分析** | 接受 BCS 的 DCIS 或侵襲性乳癌 | 有術前 MRI **vs** 無 | 再切除率、局部復發、存活都沒有改善 | 這一條不是策展——[[BINV-B]] 直接把結論寫進本文，並附上 Houssami 2017 與 Canelo-Aybar 2021 兩篇 |

> 這張表是策展補充，不在 NCCN 原文頁面上（最後一列例外，那是 [[BINV-B]] 本文就寫了的結論）。試驗名在註腳裡出現，但 NCCN 不列試驗結果；上表一律只寫定性結論，不寫數字。

---

## 必背數字

![[fig:breast/staging-numbers]]

- T 的尺標只有五個刻度：==1、5、10、20、50 mm== [[ST-1]]
- T1mi ==≤1 mm==、T1a ==>1–5 mm==、T1b ==>5–10 mm==、T1c ==>10–20 mm==、T2 ==>20–50 mm==、T3 ==>50 mm== [[ST-1]]
- 四捨五入的例外是**進位**：==1.0–1.4 mm 進位成 2 mm==，因為捨去會變成 T1mi（≤1.0 mm）[[ST-1]]
- ITC 的上限 ==0.2 mm==（記成 pN0(i+)，仍算 pN0）；micrometastasis 是 ==>0.2 且 ≤2.0 mm==、約 ==200 顆細胞== [[ST-2]]
- pN1a ==1–3 顆==、pN2a ==4–9 顆==、pN3a ==≥10 顆==，而且至少一顆沉積 >2.0 mm [[ST-2]] [[ST-3]]
- pM1 的門檻：非區域淋巴結的轉移 ==>0.2 mm==；cM0(i+) 的細胞或沉積 ==≤0.2 mm== [[ST-3]]
- Nottingham 分數：==3–5 分是 G1==、==6–7 分是 G2==、==8–9 分是 G3== [[ST-4]]
- 術後影像可以改期別的期限：診斷後 ==4 個月內==，期間無疾病進展，且未接受術前治療 [[ST-3]]
- 可考慮省略 SLNB 的族群：==>50 歲且停經後==、cT1N0（腋下超音波陰性）、HR+/HER2−、==grade 1–2==，且**願意接受全乳 RT 與內分泌治療** [[BINV-E]]
- 建議每年乳房 MRI 的兩個條件：==診斷時 ≤50 歲==，或==乳房緻密== [[BINV-B]]
- 進入病理 prognostic stage IA 的 Oncotype DX 門檻：T1–2 N0 M0、HER2 陰性、ER 陽性且分數 ==<11== [[ST-11]]

---

## 記憶法

**T 的尺：1、5、10、20、50。**
五個數字、六個格子。前四個數字全部擠在 2 公分以內，第五個一次跳 3 公分。記住「小腫瘤刻度密、大腫瘤刻度疏」，就不會把 T1b 與 T1c 記反。

**N 的兩個問法。**
==臨床看「哪一站、動不動得了」，病理看「幾顆」==。cN 的階梯是 level I/II 可動 → 固定或內乳 → 鎖骨下、內乳加腋下、鎖骨上；pN 的階梯是 1–3 → 4–9 → ≥10。同一個數字在兩邊不代表同一件事。

**0.2 與 2.0。**
淋巴結體積只有這兩個門檻，而且遠端側也借用 0.2。==≤0.2 是 ITC、0.2 到 2.0 是 micro、>2.0 才算一顆==。

**Clinical 給所有人，pathological 只給先開刀的人。**
[[ST-6]] 的第一句是 “applies to ALL patients”，[[ST-9]] 的第一句是 “applies to patients treated with surgery as the initial treatment”。做過術前治療就沒有 pathological prognostic stage——這是兩張表最實用的差別。

**y 開頭的那些，pCR 沒有期別。**
術前治療後加 yc/yp 前綴；完全病理緩解（ypT0ypN0cM0）**不指定** anatomic stage group。「治好到沒有東西可以分期」是規則寫死的，不是漏寫。

---

## 門診核對

- [ ] 這是 M0 病人嗎？有沒有轉移的症狀或臨床高風險？沒有的話不要開全身影像 [[BINV-1]]
- [ ] 雙側乳房攝影做了沒？需不需要乳房超音波？[[BINV-1]]
- [ ] 打算省略手術腋下分期嗎？那腋下超音波是必要的 [[BINV-1]]
- [ ] 這個病人符不符合 SOUND/INSEMA 那五個條件？lobular 的話要更謹慎 [[BINV-E]]
- [ ] 要開 MRI 的話，理由是什麼？是 cT0cN+、Paget、還是界定不清的 lobular？[[BINV-B]]
- [ ] MRI 上的可疑病灶有沒有另外取檢體，還是直接拿去改手術計畫？[[BINV-B]]
- [ ] 要做術前全身治療嗎？那 CBC、CMP（含 LFT 與 ALP）與腋下評估補上了沒？[[BINV-12]]
- [ ] 腋下可疑淋巴結切片時放 marker 了嗎？[[BINV-12]]
- [ ] 腋下手術前有沒有做兩側手臂的基線量測？[[BINV-E]]
- [ ] 病理報告上有 grade 嗎？是 Nottingham 三項相加，不是主觀分級 [[ST-4]]
- [ ] 這份報告用的是 anatomic 還是 prognostic stage？在美國登記要用 prognostic [[ST-3]]
- [ ] 這個病人做過術前治療嗎？做過就不能套 pathological prognostic stage [[ST-9]]
- [ ] 淋巴結報告上是 ITC、micrometastasis 還是 macrometastasis？三者期別不同 [[ST-2]]
- [ ] Stage IV 病人：治療目標談過了嗎？有沒有記錄在病歷上？[[BINV-18]]

---

## 常見陷阱

![[fig:breast/staging-pitfalls]]

**對無症狀的 M0 病人常規做全身分期影像。**
[[BINV-1]] 的註腳是一句完整的禁令：“Routine systemic staging is not indicated for non-metastatic (M0) cancer in the absence of systemic symptoms.” 本文也只說「在有轉移的症狀徵象時、以及臨床高風險的病人，才考慮額外影像」。做了不只是多花錢——偽陽性會把一個可治癒的病人拖進一連串切片。

**把 anatomic stage group 當成報告用的期別。**
[[ST-3]] 的原句：“The Anatomic Stage Group table should only be used in global regions where biomarker tests are not routinely available. Cancer registries in the U.S. must use the Clinical and Pathological Prognostic Stage Group tables for case reporting.” 兩張表對同一個 TNM 常常給出不同的期別，講課時說錯一張，整個預後的量級就錯了。

**對做過術前治療的病人套 pathological prognostic stage。**
[[ST-9]] 明文排除：“Pathological Prognostic Stage does not apply to patients treated with systemic or radiation prior to surgical resection.” 這類病人要加 yc/yp 前綴，而 pCR 連 anatomic stage group 都不給。

**只憑 MRI 決定手術範圍。**
[[BINV-B]] 的原句：“False-positive findings on breast MRI are common. Surgical decisions should not be based solely on the MRI findings.” 而且同一頁還寫了現有資料**沒有**顯示術前 MRI 改善再切除率、局部復發或存活。從 MRI 直接走到全乳切除，是這一頁最想擋的路徑。

**把 1.4 mm 四捨五入成 1 mm。**
[[ST-1]] 為這件事單獨寫了一條例外：1.0–1.4 mm 要**進位**成 2 mm，因為捨去會讓它變成 T1mi（定義是 ≤1.0 mm）。這是整份 T 定義裡唯一違反四捨五入的地方，而它違反的理由就是不想把一個 T1a 誤植成微侵襲。

[[ST-1]] 在 T1a 那一行用了另一種寫法講同一件事：“round any measurement >1.0–1.9 mm to 2 mm”。那一句涵蓋了兩段——例外的 1.0–1.4 與一般四捨五入的 1.5–1.9——所以兩種寫法**結果相同**，不是矛盾。會覺得矛盾是因為只看到其中一句。

**把胸大肌沾黏或真皮侵犯當成 T4。**
[[ST-1]] 連寫兩條否定：“invasion of the dermis alone does not qualify as T4”，以及在沒有侵犯胸壁結構的情況下 “invasion or adherence to pectoralis muscle in the absence of invasion of chest wall structures does not qualify as T4”。多判一級 T，整個治療強度都會被抬上去。

**把 micrometastasis 當成 pN0。**
[[ST-2]] 把 pN0 的邊界劃在 ITC：pN0 是「沒有轉移或只有 ITC」，而 >0.2 mm 已經是 pN1mi。這個差別會一路傳到 [[ST-6]] 與 [[ST-9]] 的期別表，也會改變輔助治療頁面走哪一格。

**腋下可疑淋巴結切片時沒放 marker。**
[[BINV-12]] 的註腳明文要求：切片最可疑的淋巴結時要放 marker，好讓它在正式手術時被辨識與移除。這一條漏掉，術前治療之後那顆最重要的淋巴結就找不回來了。

**忘了 LCIS 已經不在 TNM 裡。**
[[ST-1]] 的星號註記：LCIS 是良性實體，在 AJCC 第八版已經從 TNM 分期中移除。舊報告或舊記憶裡的「Tis (LCIS)」現在不存在。
