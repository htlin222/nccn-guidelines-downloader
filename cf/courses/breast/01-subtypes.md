+++
id      = "breast/subtypes"
track   = "breast"
order   = 1
group   = "基礎"
title   = "分子分型與 biomarker"
oneline = "兩個軸切出四格，NCCN 的輔助治療就照這四格分頁；難的不是分類，是邊界——HER2 的 0 與 0+，ER 的 1%–10%"
refs    = ["BINV-A", "BINV-N", "BINV-1", "BINV-5", "BINV-6", "BINV-7", "BINV-8", "BINV-9", "BINV-10", "BINV-11", "BINV-18"]
figures = ["breast/subtypes-her2-framework", "breast/subtypes-assay-matrix"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一張病理報告回來，**ER、PR、HER2 這三格怎麼讀，讀完會把病人送進哪一條路**。

- **兩個軸、四格，NCCN 就四組頁面**。HR 與 HER2 交叉出 HR+/HER2+ [[BINV-5]]、HR+/HER2− [[BINV-6]]、HR−/HER2+ [[BINV-9]]、HR−/HER2− [[BINV-10]]，輔助治療的整章結構就是這四格。分型不是描述，是導航。
- **會出錯的地方在邊界，不在中間**。HER2 IHC 0 現在要分成 0/absent 與 0+/with membrane staining 兩種來報 [[BINV-A]]；ER 1%–100% 都算陽性，但 1%–10% 這一段行為常常像陰性 [[BINV-6]]。這兩條是這一課真正要記的。
- **gene expression assay 不是分型工具**。它只在 HR+/HER2− 而且已經在猶豫要不要化療的時候才出場，而且 [[BINV-N]] 明說「不是分期所需」。

---

## 治療地景

![[fig:breast/subtypes-her2-framework]]

這張圖把 [[BINV-A]] 那一頁的 HER2 段落攤成一條判讀鏈。看它的時候記三件事：

**分類只有兩種，報告卻要分四層。** 治療決策上 HER2 只有陽性與陰性，但 [[BINV-A]] 要求病理報告把陰性側再分開：IHC 0/absent membrane staining、IHC 0+/with membrane staining（faint、partial、≤10%）、IHC 1+、IHC 2+/ISH negative。NCCN 給的理由寫得很直白——這個區分 “is currently clinically relevant since patients with metastatic disease may be eligible for treatment targeting non-amplified levels of HER2 expression”。所以那一層不是病理學的潔癖，是後線治療的入場券。

**這條鏈有兩個回頭箭頭。** 一個是型態不合就回頭：grade 1（任何組織型）、pure mucinous、pure tubular、pure cribriform 驗出 HER2 陽性，要 re-review pathology 並考慮重驗或送會診。另一個是檢體不夠好就回頭：初次切片 HER2 陰性，若檢體不理想、懷疑檢驗誤差、後續檢體有更高惡性度的不同型態、要排除高惡性度腫瘤的異質性，或重驗有助於臨床決策，都可以在後續手術檢體上重做。

**測試品質是寫進指引裡的一條。** [[BINV-A]] 要求實驗室必須參加 HER2 檢測的品質保證認證計畫，否則檢體應送到有認證的實驗室。這是少數 NCCN 直接規範「誰能驗」而不只是「怎麼判」的地方。

---

## 決策路徑

### 進門就要送的三件事

- 每一個新診斷的原發乳癌、以及每一個新出現的轉移性乳癌，都要驗 HER2，方法依 ASCO/CAP 的 HER2 檢測指引 [[BINV-A]]
- 初診 workup 裡並列的是 ER/PR 狀態與 HER2 狀態，不是只有其中一項 [[BINV-1]]
- 基因諮詢與檢測的三個觸發條件：有遺傳性乳癌風險、**任何年齡**的 TNBC、或是 adjuvant olaparib 的候選者 [[BINV-1]]

### HER2 這一軸怎麼讀

- IHC 0 的報告要寫出染色型態：0/absent membrane staining 還是 0+/with membrane staining，依現行 CAP Breast Cancer Biomarker Reporting Protocol [[BINV-A]]
- NCCN 鼓勵病理醫師把「IHC 0／無染色」的切片在高倍下再看一次，因為 0/absent、0+（faint、partial、≤10%）、1+、2+/ISH negative 之間的區分現在有臨床意義 [[BINV-A]]
- 原發灶與轉移灶的檢體都適用這個區分——原句寫的是 “on primary or metastatic samples” [[BINV-A]]
- **型態與分型不合就回頭**：grade 1、pure mucinous、pure tubular、pure cribriform 卻 HER2 陽性 → re-review，考慮重驗或會診 [[BINV-A]]
- **陰性不一定是定案**：初檢陰性後，符合下列任一情況可考慮在後續手術或其他檢體上重驗 [[BINV-A]]
    - 初次檢體不理想（例如侵襲成分極少、cold ischemic time 或固定不良）
    - 預期有檢驗誤差
    - 後續檢體含有比切片更高惡性度、型態不同的癌
    - 要排除高惡性度腫瘤裡的異質性
    - 或重驗會對臨床決策有幫助

### HR 這一軸怎麼讀

- ER IHC 染色 **1%–100%** 都視為 ER 陽性，都符合內分泌治療的資格 [[BINV-6]]
- 但 **ER-low positive（1%–10%）** 這一段資料有限，族群異質性高，報告出來的生物行為常常接近 ER 陰性；要個別權衡內分泌治療與其他輔助治療的利弊 [[BINV-7]] [[BINV-8]]
- 這條註腳在 HR+/HER2+ 的頁面上也一字不差地出現一次 [[BINV-5]]——它不是 HER2 陰性專屬的提醒

### 四格各自通向哪裡

- **HR+/HER2+**：pT1c–pT3 給化療 + trastuzumab（category 1，pT2–T3 可 ± pertuzumab）加內分泌治療；pN+ 有兩個並列選項，化療 + pertuzumab + trastuzumab（category 1、**preferred**）或化療 + trastuzumab（category 1），都加內分泌治療 [[BINV-5]]
- **HR−/HER2+**：分格的尺度一樣（pT1a／pT1b／pT1c–pT3／pN+），差別是每一格都沒有內分泌那一半 [[BINV-9]]
- **HR+/HER2−**：走的是「要不要化療」這個問題，答案交給 21-gene assay [[BINV-6]] [[BINV-7]] [[BINV-8]]
- **HR−/HER2−**：pT1a 且 pN0 不給輔助治療；pT1b 是 **consider** 化療；pT1c–pT3 與 pN+ 是化療（**category 1**）。germline *BRCA1/2* 致病變異者加 olaparib（要在 RT 完成後給）[[BINV-10]]
- **favorable histology 自成一格**：pure tubular、pure mucinous、pure cribriform、conventional adenoid cystic、secretory 等，走的是另一頁的尺度 [[BINV-11]]
    - 前提是「純」——>90%，以手術切除檢體判定，不能只靠 core biopsy，而且不是高惡性度、HER2 陰性
    - 有非典型的病理或臨床特徵，就當成 ductal/NST 處理

### 要不要化療：gene expression assay

![[fig:breast/subtypes-assay-matrix]]

- 這些 assay 提供的是「補充 T、N、M 與 biomarker 之外」的預後與治療預測資訊，**不是分期所需** [[BINV-N]]
- **21-gene（Oncotype Dx）是唯一被 NCCN 標為 preferred 的**，理由是它同時能做預後與預測化療效益；其他預後型 assay 能給預後，但**預測化療效益的能力未知** [[BINV-N]]
- 停經後 pT1b–T3 或 pN1mi 或 pN1（1–3 顆），若是化療候選者：strongly consider 21-gene（category 1）→ RS ≥26 化療後接內分泌（category 1）；RS <26 內分泌（category 1）[[BINV-6]]
- 停經前 pT1b–T3 且 pN0：同樣 strongly consider 21-gene（category 1），但切成 **≤15 / 16–25 / ≥26 三段** [[BINV-7]]
    - NCCN 的註腳說明了為什麼要多切一刀：停經前 RS <26 的病人，內分泌治療加上化療的遠端復發率確實比內分泌單用低，但**不確定這個效益是不是來自化療所造成的卵巢抑制**
- 停經前 pN1mi 或 pN1，若是化療候選者：consider gene expression assay **to assess prognosis**——用詞是評估預後，不是預測化療效益 [[BINV-8]]
- **pN2/pN3（≥4 顆 >2 mm）**：關於 gene expression assay 在這一群的角色資料很少，化療與否應依臨床因素決定 [[BINV-6]] [[BINV-8]]
- **T1b、低惡性度、無 LVI 的腫瘤不必算**：直接內分泌單藥，因為 TAILORx 沒有納入這類腫瘤 [[BINV-6]] [[BINV-7]]

### 復發或轉移時，整套重來一次

- **至少在第一次復發時做切片**；再進展時考慮再做一次 [[BINV-18]]
- 重新評估 ER/PR 與 HER2 [[BINV-18]]
- 加做 multigene panel testing（體細胞與生殖細胞），找標靶治療的候選者 [[BINV-18]]
    - 組織與血漿 ctDNA 各有長短：組織對某些變異的敏感度較高，ctDNA 比較能反映腫瘤異質性；一種檢體驗不到可考慮換另一種
- ER/PR 有偽陰性，原發灶與轉移灶也可能不一致；所以無內臟轉移或無症狀內臟轉移的病人，特別是**無病期長、轉移部位少、疾病惰性、年紀較大**者，仍可考慮毒性低的內分泌治療 [[BINV-18]]
- 切片取不到但臨床證據強烈支持復發時，可依原發腫瘤的 ER/PR/HER2 開始治療——但要記得 ER/PR 與 HER2 會隨治療與進展改變，若會影響處置就該在新檢體上重驗 [[BINV-18]]

---

## 關鍵試驗

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **TAILORx** | HR+/HER2−、pN0、21-gene RS 11–25 | 內分泌單用 **vs** 化療後接內分泌 | 整體族群內分泌單用不劣於加化療；≤50 歲、RS 偏高的一段仍看到化療效益 | RS 26 這一刀的來源；也是 NCCN 註明「T1b 低惡性度無 LVI 不適用」的原因——那類腫瘤不在試驗裡 |
| **RxPONDER** | HR+/HER2−、pN1（1–3 顆）、RS ≤25 | 內分泌 **± 化療** | 停經後看不到化療效益；停經前有 | 直接解釋了 [[BINV-N]] 為什麼把 pN1 的 21-gene 拆成「停經後 preferred／停經前 other」兩列 |
| **MINDACT** | 早期乳癌，臨床風險與 70-gene 基因風險不一致者 | 依臨床風險給化療 **vs** 依基因風險 | 臨床高風險／基因低風險者省略化療後，遠端無轉移存活仍高 | 70-gene 進入 NCCN 的依據；但它證的是預後，不是化療預測——這正是 [[BINV-N]] 把它的 predictive 欄寫成 Not determined 的理由 |
| **APHINITY** | HER2 陽性早期乳癌，輔助治療 | 化療 + trastuzumab **± pertuzumab** | 中位追蹤 11.3 年的更新結果確認加上 pertuzumab 可減少復發 | 這一句就寫在 [[BINV-5]] 與 [[BINV-9]] 的註腳裡，是 pN+ 那一格 category 1 preferred 的支撐 |
| **DESTINY-Breast04** | 轉移性、HER2 IHC 1+ 或 2+/ISH− | 醫師選擇的化療 **vs** T-DXd | PFS 與 OS 都顯著改善 | 「非擴增的 HER2 表現也可以是標靶」的起點——也就是 [[BINV-A]] 要求把 0 / 0+ / 1+ 分開報的真正理由 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗；上表除了 APHINITY 的追蹤年數（[[BINV-5]] 註腳）與 RxPONDER 的族群組成（[[BINV-N]] 註腳）之外，數字一律不寫，只寫定性結論。

---

## 必背數字

- ER 陽性的判定範圍：==1%–100%== 的 IHC 染色都算陽性，都符合內分泌治療資格 [[BINV-6]]
- ER-low positive 的區間：==1%–10%==，行為常常像 ER 陰性，要個別權衡 [[BINV-7]]
- HER2 IHC 0+ 的定義：==faint、partial membrane staining，≤10%== [[BINV-A]]
- 停經後 pN0/pN1 的 21-gene 切點：只有一刀，==26==；≥26 化療後接內分泌，<26 內分泌，兩邊都是 category 1 [[BINV-6]]
- 停經前 pN0 的 21-gene 切點：三段，==≤15==、==16–25==、==≥26== [[BINV-7]]
- 21-gene 在 pN1 的偏好會分停經狀態：停經後 ==preferred、category 1==，停經前 ==other、category 2A== [[BINV-N]]
- ≥4 顆陽性淋巴結：gene expression assay 資料很少，決策靠==臨床因素== [[BINV-6]]
- RxPONDER 整體研究族群裡，高惡性度佔 ==10.3%==、有 3 顆陽性淋巴結者佔 ==9.2%== [[BINV-N]]
- HR−/HER2− 不給輔助治療的唯一一格：==pT1a（≤0.5 cm）且 pN0==；但有高風險特徵者（例如年輕、高惡性度）仍可考慮化療，==category 2B== [[BINV-10]]
- favorable histology 的「純」定義：==>90%==，以手術切除檢體判定，不能只看 core biopsy [[BINV-11]]

---

## 記憶法

**兩個軸，四格，四組頁面。**
HR 與 HER2 交叉出四格，NCCN 的輔助治療章節就是這四格各一組頁：[[BINV-5]]（HR+/HER2+）、[[BINV-6]] 到 [[BINV-8]]（HR+/HER2−，再依停經狀態與 N 分頁）、[[BINV-9]]（HR−/HER2+）、[[BINV-10]]（HR−/HER2−）。==只有 HR+/HER2− 需要三頁==，因為只有它要處理「要不要化療」這個問題。

**0 不是一種，是兩種。**
HER2 IHC 0/absent 與 0+/with membrane staining。記法是把它想成「零，跟看得見的零」——CAP 要求分開寫，是因為轉移性病人可能符合針對非擴增 HER2 表現的治療。

**1 到 100 都算陽性，1 到 10 要另外想。**
ER 的兩個數字連在一起記：入場門檻是 1%，但 1%–10% 這一段要停下來個別權衡。

**21 才預測，其他只預後。**
[[BINV-N]] 那張表的 Predictive 欄，只有 21-gene（pN0 與 pN1 兩列）寫 Yes。BCI 那一格寫的不是 Yes，而是一句話——==預測延長輔助內分泌治療==的效益，不是化療；它的 Yes 在 Prognostic 欄。其餘三個（70-gene、50-gene、12-gene）的 Predictive 欄全是 Not determined。

**停經前多一刀。**
停經後 26 一刀切完；停經前 pN0 切成三段。多出來的那一刀對應的是 NCCN 自己寫的不確定：停經前 RS <26 加化療確實降低遠端復發，但不確定是不是化療造成的卵巢抑制帶來的。

---

## 門診核對

- [ ] 這是新診斷的原發癌或新出現的轉移嗎？HER2 驗了沒？[[BINV-A]]
- [ ] 報告上的 HER2 IHC 0 有沒有寫出是 0/absent 還是 0+/with membrane staining？[[BINV-A]]
- [ ] ER 的百分比是多少？落在 1%–10% 嗎？[[BINV-6]]
- [ ] 組織型態與分型合不合？grade 1、pure mucinous/tubular/cribriform 卻 HER2 陽性，要退回去重看 [[BINV-A]]
- [ ] 上一次 HER2 陰性的那個檢體品質好嗎？有沒有重驗的理由？[[BINV-A]]
- [ ] 這個病人符不符合基因諮詢：遺傳風險、任何年齡的 TNBC、或 olaparib 候選者？[[BINV-1]]
- [ ] HR+/HER2−、正在猶豫化療：21-gene 送了沒？[[BINV-6]] [[BINV-7]]
- [ ] 送 assay 之前先確認停經狀態——它會改變切點，也會改變 NCCN 的偏好等級 [[BINV-N]]
- [ ] 這個腫瘤是 T1b、低惡性度、無 LVI 嗎？是的話不必算 RS，直接內分泌單藥 [[BINV-6]]
- [ ] 有 ≥4 顆陽性淋巴結嗎？有的話不要靠 assay 決定 [[BINV-8]]
- [ ] 這是 favorable histology 嗎？「純」的定義查過了嗎（>90%、手術檢體、非高惡性度、HER2 陰性）[[BINV-11]]
- [ ] 復發或轉移：切片做了沒？ER/PR/HER2 重驗了沒？[[BINV-18]]
- [ ] 轉移病人的 multigene panel（體細胞 + 生殖細胞）送了沒？[[BINV-18]]
- [ ] 檢體取不到而沿用原發灶的分型時，有沒有記錄下來、之後會不會回頭補驗？[[BINV-18]]

---

## 常見陷阱

**把 HER2 IHC 0 當成一句話寫完。**
[[BINV-A]] 要求依 CAP 協定寫出染色型態，並且鼓勵病理醫師在高倍下重看無染色的切片。原句給的理由是這個區分 “is currently clinically relevant since patients with metastatic disease may be eligible for treatment targeting non-amplified levels of HER2 expression”。少寫那一格，病人後線可能少一個選項。

**把 ER 1% 當成典型的 ER 陽性。**
[[BINV-6]]、[[BINV-7]]、[[BINV-8]]、[[BINV-5]] 四頁都掛了同一條註腳：1%–10% 這一群異質性高，行為常常接近 ER 陰性，資料有限，要個別權衡。它符合資格，不代表它會有一樣的效益。

**型態與分型打架時不回頭。**
grade 1（任何組織型）、pure mucinous、pure tubular、pure cribriform 驗出 HER2 陽性，[[BINV-A]] 要求 re-review pathology 並考慮重驗或會診。這幾種本來就是 [[BINV-11]] 的 favorable histology，而 favorable 的前提之一就是 HER2 陰性——兩頁互相對照，衝突自己會浮出來。

**第一次 HER2 陰性就當定案。**
[[BINV-A]] 列了五種可以考慮在後續檢體重驗的情況。最常被忽略的是「侵襲成分極少」與「後續檢體含有更高惡性度、型態不同的癌」——這兩種在 core biopsy 陰性、手術檢體才看到全貌的病人身上並不罕見。

**轉移時沿用原發灶的分型。**
[[BINV-18]] 要求至少在第一次復發時做切片並重新評估 ER/PR 與 HER2，再進展時考慮再做。原句也提醒 ER/PR 有偽陰性、原發與轉移可能不一致。

**把 gene expression assay 當成分期或分型工具。**
[[BINV-N]] 的註腳寫得毫無轉圜：“Use of these assays is not required for staging.” 它補充 T、N、M 與 biomarker，不取代任何一個。

**在 ≥4 顆陽性淋巴結上用 assay 決定化療。**
[[BINV-6]] 與 [[BINV-8]] 的同一條註腳：這一群關於 gene expression assay 的資料很少，化療決策應基於臨床因素。

**把「其他 assay」與 21-gene 當成可互換。**
[[BINV-N]] 把 21-gene 的 Predictive 欄寫 Yes、其餘寫 Not determined，並在註腳裡再講一次：其他預後型 assay 可以評估復發風險，但**沒有被驗證可以預測化療反應**。拿 70-gene 的低風險去說服病人不用化療，跟拿 21-gene 說同一句話，證據強度不一樣。
