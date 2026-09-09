+++
id      = "breast/special"
track   = "breast"
order   = 12
group   = "晚期"
title   = "特殊情境"
oneline = "五種情境五條紅線：IBC 不保皮不保乳、Paget 要全層皮膚切片、phyllodes 邊緣陽性不放療、懷孕第一孕期不化療且全程不放療、男性不單用 AI"
refs    = ["IBC-1", "IBC-2", "PAGET-1", "PAGET-2", "PHYLL-1", "PREG-1", "PREG-2", "BINV-J"]
figures = ["breast/special-matrix-presentations", "breast/special-matrix-populations", "breast/special-preg-flow"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

門診遇到 inflammatory breast cancer、Paget disease、phyllodes tumor、懷孕期乳癌、男性乳癌時，**哪些地方可以照一般乳癌走，哪些地方一走就錯**。

- **這五種情境彼此不相干，共同點只有一個**：大部分的治療原則其實回到一般 invasive breast cancer，真正要背的是每一種各自的一兩條紅線。所以這一課的地景圖是情境的對照矩陣，不是治療線矩陣——五種情境分成兩張，欄位相同。
- **只有兩種情境把「時間」寫進了治療順序**：IBC 一律先術前全身治療再手術，懷孕期則由**孕期**決定什麼時候能給什麼。其他三種是診斷路徑或細節不同。
- **Phyllodes 是唯一會離開乳癌指引的**：borderline 或 malignant 直接轉到 NCCN Soft Tissue Sarcoma，benign 只是臨床追蹤 3 年、不放療。

---

## 治療地景

![[fig:breast/special-matrix-presentations]]

![[fig:breast/special-matrix-populations]]

兩張圖是同一張表拆開的，欄位完全一樣（workup、局部治療、全身治療、紅線）：第一張是三種特殊「表現」——IBC、Paget、phyllodes，第二張是兩種特殊「族群」——懷孕與男性。看它們的時候記三件事：

**兩張圖最右邊那一欄才是要背的。** 前三欄多半可以推回一般路徑——[[BINV-J]] 就直說男性乳癌「management of breast cancer in males is similar overall to management of breast cancer in females」，[[PAGET-2]] 最後也是「See NCCN Guidelines for DCIS or Invasive Breast Cancer」。真正會被扣分的是紅線那一欄。

**IBC 那一列的局部治療欄格外滿。** [[IBC-2]] 對手術與放療的規定比任何一頁都具體：total mastectomy（**skin-sparing 與 nipple-sparing 都是禁忌**）+ level I/II axillary dissection + 胸壁放療與完整區域淋巴照射，而且要涵蓋「any portion of the undissected axilla at risk」。重建只能是 delayed。

**懷孕那一列的全身治療欄是一串禁令。** [[PREG-2]] 列出的禁用藥橫跨六類：anti-HER2、CDK4/6 抑制劑、ADC、內分泌治療、PARP 抑制劑與免疫檢查點抑制劑。能用的只有 anthracycline、cyclophosphamide 與 taxane，而且只在第二、三孕期。

---

## 決策路徑

### Inflammatory breast cancer

診斷是臨床加病理，不是靠某一項檢查 [[IBC-1]]：

- 三個要件：**≤6 個月**內出現的 erythema、edema、peau d'orange 佔**≥1/3 乳房**，有沒有可觸摸腫塊都算；加上病理確認為侵襲性乳癌
- **Dermal lymphatic involvement 可能看得到，但診斷不需要它**——沒有它不能排除 IBC
- Workup 比一般乳癌多兩件事：多專科團隊的病史理學檢查要**留醫療攝影**，而且分期影像是全套（胸部 CT ± 顯影、腹部 ± 骨盆 CT with contrast 或 MRI with contrast、bone scan 或 FDG-PET/CT），乳房 MRI 為選項
- 其餘同一般：CBC、CMP 含 LFT 與 ALP、病理複閱、ER/PR 與 HER2、停經前的生育諮詢、有風險者的遺傳諮詢、distress 評估

治療順序是固定的：**先術前全身治療** [[IBC-1]]，HER2 陽性者可以在術前用含 pertuzumab 的方案，然後看反應 [[IBC-2]]：

- **有反應** → total mastectomy（skin-sparing 與 nipple-sparing 為禁忌）+ level I/II axillary dissection + 胸壁放療與完整 RNI（涵蓋任何未廓清而有風險的腋窩部分）± **delayed** 乳房重建
- **無反應** → 考慮追加細胞毒性治療和／或術前放療；之後有反應就回到上面那條路，仍無反應則個別化治療
- 術後把該做完的做完：術前沒打完的細胞毒性療程補完，ER 陽性和／或 PR 陽性者再接內分泌治療（**化療完再接內分泌，不是併用**）；HER2 陽性者完成**最多一年**的抗 HER2 治療（category 1），可與放療併行，有指徵時也可與內分泌治療併行
- 反應的判定本身就難：要用理學檢查加上**初次分期時就異常**的那些影像；MRI 判斷治療反應比 mammography 準確
- 復發的 IBC 走復發／第四期的路徑（BINV-19）

### Paget disease

分岔點只有一個：**乳房裡找不找得到病灶** [[PAGET-1]]。

- 什麼時候要懷疑：乳頭或乳暈的**濕疹、潰瘍、出血或搔癢**
- Workup：臨床乳房檢查、雙側診斷性乳房攝影（必要時超音波）、distress 評估

接著兩條路 [[PAGET-2]]：

- **理學檢查或影像 BI-RADS 4/5**：乳房病灶做 core biopsy，**加上**受影響 NAC 的**全層皮膚切片**
  - 乳房 DCIS + NAC Paget、乳房侵襲癌 + NAC Paget、乳房陰性但 NAC Paget——三種結果都進入下面的治療
  - 兩邊切片都陰性 → 臨床追蹤，**不癒合就再切一次**
- **理學檢查與影像都找不到乳房病灶**：直接做受影響 NAC 的全層皮膚切片
  - NAC 陽性 → **考慮乳房 MRI**，有指徵時取組織
  - NAC 陰性 → 臨床追蹤，不癒合就再切一次

治療兩選一 [[PAGET-2]]：

- Central lumpectomy **包含 NAC** ± SLNB，加上全乳放療
- Total mastectomy **包含 NAC** ± SLNB，可做可不做乳房重建
- **Mastectomy 對任何形式的 Paget disease 永遠是一個選項**
- 若合併 DCIS 或侵襲癌，全身輔助治療照 DCIS 或 invasive breast cancer 的指引走

### Phyllodes tumor

這一頁的重心在**「什麼時候不能相信 core biopsy」** [[PHYLL-1]]。

- 什麼時候要懷疑：可觸摸腫塊、**快速生長**、**大小 >3 cm**、超音波看起來像 fibroadenoma 但大小和／或生長史不像
- Workup：病史理學檢查、超音波、**≥30 歲**加做乳房攝影、distress 評估
- 先做 core needle biopsy，但要知道它的極限：FNA 與 core biopsy 都**不一定**能把 fibroadenoma 跟 phyllodes 分開；core biopsy 的敏感度高於 FNA，但兩者都不保證。**臨床高度懷疑時，可能需要切除才能定性**

Core biopsy 結果的三條路：

- **Indeterminate 或 suspicious for benign phyllodes** → excisional biopsy（完整切除腫塊，但**不以取得手術邊緣為目的**），然後看病理
  - Fibroadenoma 或 fibroepithelial lesion → 觀察
  - Benign phyllodes → **臨床追蹤 3 年，不放療**
  - Borderline 或 malignant phyllodes → 轉 NCCN Soft Tissue Sarcoma（PHYLLSARC-1）
- **Suspicious for borderline/malignant phyllodes** → 直接轉 NCCN Soft Tissue Sarcoma（PHYLLSARC-1）
- **Invasive 或 in situ cancer** → 轉 DCIS-1 或 BINV-1

兩條容易忘的：**邊緣陽性不是放療的適應症**；有遺傳性癌症症候群風險者（特別是乳癌、卵巢癌、胰臟癌）要做遺傳諮詢與檢測。

### 懷孕期乳癌

![[fig:breast/special-preg-flow]]

進入這條路徑的前提是：**懷孕、乳癌已確診、分期沒有遠端轉移** [[PREG-1]]。

分期檢查本身就受限：

- 有指徵時可做——胸部 X 光（**腹部遮蔽**）、腹部超音波評估肝轉移、必要時考慮**不打顯影劑**的脊椎 MRI 評估骨轉移
- **CT、核醫（bone scan 或 PET/CT）與打顯影劑的 MRI 在懷孕期是禁忌**

局部治療與化療的時機由孕期決定 [[PREG-1]]：

- **第一孕期**：先討論終止妊娠（非治療性）。決定繼續 → mastectomy + 腋窩分期，輔助化療**從第二孕期開始**，放療與內分泌治療都留到產後
  - 若是接近末段的第一孕期，可以考慮把術前化療放到第二孕期
  - 註腳說明了為什麼偏好 mastectomy：保乳與 mastectomy 的存活結果在懷孕與非懷孕相關乳癌都相當，但懷孕期一般要避免治療性放療，**太早做 BCS 會讓放療來不及在合理時間內給**
- **第二孕期／早期第三孕期**：mastectomy 或 BCS + 腋窩分期，**或**先給術前化療再手術；放療與內分泌治療產後
- **晚期第三孕期**：mastectomy 或 BCS + 腋窩分期，之後輔助化療 ± 產後放療 ± 產後內分泌治療
- 治療模式之間（手術、放療、化療）間隔 **12–16 週**一般被認為可接受

全身治療的規則寫在 [[PREG-2]]：

- **兩條絕對的**：化療**不得在第一孕期**給；放療**任何孕期都不給**
- 局部與全身治療的「選擇」與非懷孕相關乳癌相似，不同的是**選擇與時機**
- 第一孕期的 BCS **可以考慮**——條件是這個人本來就需要輔助化療，而且輔助放療可以延到產後
- 開始全身治療前做**胎兒超音波**排除既有異常
- 化療用**實際體重**算標準劑量。Anthracycline、cyclophosphamide 與 taxane 在第二、三孕期看起來安全；**doxorubicin/cyclophosphamide 每 3 週為首選**，dd AC 加 G-CSF 的有限資料看起來安全；**weekly paclitaxel 為首選**
- **35 週後避免化療**，讓母體骨髓在生產前恢復
- 禁用清單（六類）：anti-HER2（trastuzumab、pertuzumab、T-DM1、T-DXd、neratinib、lapatinib、tucatinib）、CDK4/6 抑制劑（無安全性資料）、ADC（T-DXd、datopotamab deruxtecan、sacituzumab govitecan）、內分泌治療（tamoxifen、AI、GnRH agonist/antagonist）、PARP 抑制劑、免疫檢查點抑制劑
- 支持治療也要換藥：止吐用 **ondansetron 與 metoclopramide**（視為安全），**NK1 抑制劑避免使用**（缺人體資料）；類固醇用 **methylprednisolone、prednisolone 或 hydrocortisone**，盡量避開 dexamethasone 與 betamethasone；G-CSF **謹慎使用**（資料不足但看起來安全）
- 產後化療的考量與非懷孕相關乳癌相同；腫瘤科與產科要協同排時程

### 男性乳癌

前提先講清楚：**很少男性被納入乳癌試驗，所以建議多半是從女性的試驗外推的** [[BINV-J]]。整體管理與女性相似，以下是特別的地方：

- **遺傳**：建議**所有**男性乳癌病人都考慮基因檢測
- **乳房手術**：歷史上男性做 mastectomy 多於 BCS，但保乳的資料逐漸顯示結果與 mastectomy 相當、安全可行。**保乳與否的判斷標準與女性相同**
- **腋窩手術**：臨床腋窩陰性者做 SLNB，同女性
- **放療**：術後放療的適應症與女性相同
- **分子檢測**：資料有限；現有資料顯示 21-gene assay recurrence score 在男性有預後價值
- **術前／輔助全身治療**：化療 ± 抗 HER2 照女性的指引
- **輔助內分泌治療**：tamoxifen **5–10 年**；tamoxifen 禁忌時用 **GnRH analog + AI**。**單用 AI 在男性的結果比單用 tamoxifen 差**（可能因為雌二醇壓不夠），**不建議**
- **早期病人的追蹤**：男性乳癌篩檢的資料很少；接受輔助 GnRH analog 者，**骨密度要在基線做、之後每 2 年做**
- **晚期疾病**：與女性相似，但用 AI 時**建議同時給 GnRH analog**；單用 fulvestrant 的效果與女性相似。CDK4/6 抑制劑（配 AI 或 fulvestrant）、mTOR 抑制劑、PIK3CA 抑制劑都沒有在男性做過系統性的試驗評估，但真實世界資料顯示療效與安全性相當，**基於外推推薦是合理的**

---

## 關鍵試驗

特殊情境幾乎都沒有大型隨機試驗——這本身就是要講出來的重點，而不是硬湊幾個試驗名。所以這一段列的是**每種情境的證據型態**：

| 情境                           | 證據型態                                                                                                                                             | 目前的結論                                                              | NCCN 怎麼反映它                                                                                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inflammatory breast cancer** | 沒有定義三段式治療（術前全身治療 → mastectomy → 放療）的隨機試驗；來源是機構系列與登錄資料                                                           | 三段都做的族群結果較好，缺一段就變差                                    | [[IBC-2]] 把手術與放療的細節寫死（禁 skin/nipple-sparing、要 level I/II ALND、RNI 要涵蓋未廓清的高風險腋窩），而不是留給臨床判斷                                                      |
| **Paget disease**              | 主要為回溯性系列；歐洲曾做過單臂 phase II 檢驗保乳路徑                                                                                               | Central lumpectomy 含 NAC 加全乳放療是可行的保乳選項                    | [[PAGET-2]] 把 central lumpectomy 與 total mastectomy 並列，並註明 mastectomy 永遠是選項                                                                                              |
| **Phyllodes tumor**            | 沒有隨機試驗；以手術系列為主                                                                                                                         | Benign 切乾淨就好，borderline/malignant 的行為接近軟組織肉瘤            | [[PHYLL-1]] 把 borderline/malignant 整個轉到 Soft Tissue Sarcoma 指引，並明說邊緣陽性不是放療適應症                                                                                   |
| **懷孕期乳癌**                 | 前瞻登錄與系列研究；NCCN 這一頁直接引三篇綜論（Kesireddy 2025 JCO Oncol Pract、Poggio 2020 Cancers、Boere 2022 Best Pract Res Clin Obstet Gynaecol） | 第二、三孕期給 anthracycline／cyclophosphamide／taxane 的胎兒結果可接受 | [[PREG-2]] 用「appear to be safe」這種限定語氣，而不是 category 分級                                                                                                                  |
| **男性乳癌**                   | 極少納入試驗；有真實世界資料與登錄分析                                                                                                               | 外推自女性資料是合理的，但內分泌治療是例外                              | [[BINV-J]] 開宗明義寫「recommendations … are generally extrapolated from findings of clinical trials focusing on breast cancer in females」，然後單獨標出「單用 AI 結果較差、不建議」 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗，也不評論證據型態；表中三篇文獻是 [[PREG-2]] 頁尾自己列的參考文獻。

---

## 必背數字

- IBC 的診斷三要件：==≤6 個月==內出現、佔==≥1/3 乳房==、病理確認為侵襲癌；dermal lymphatic involvement ==不是必要條件==
- IBC 術後的抗 HER2 療程：完成==最多一年==（category 1）
- Phyllodes 的臨床懷疑門檻之一：大小 ==>3 cm==
- Phyllodes 做乳房攝影的年齡：==≥30 歲==
- Benign phyllodes 的追蹤：==臨床追蹤 3 年==，==不放療==
- 懷孕期的兩條絕對禁令：==第一孕期不給化療==、==任何孕期都不給放療==
- 懷孕期化療的停止點：==35 週==後避免，讓母體骨髓恢復
- 懷孕期治療模式之間可接受的間隔：==12–16 週==
- 懷孕期首選的兩個化療節奏：doxorubicin/cyclophosphamide ==每 3 週==、paclitaxel ==每週==
- 男性輔助 tamoxifen 的年限：==5–10 年==
- 男性用 GnRH analog 者的骨密度：==基線 + 每 2 年==

---

## 記憶法

**IBC 的「三個一」。**
==≤6 個月==、==≥1/3 乳房==、==最多 1 年==的抗 HER2。前兩個是診斷，第三個是治療的終點。三個數字撐起整條 IBC 路徑。

**IBC 的手術口訣：「全切、全清、全照，重建等一等」。**
Total mastectomy（不保皮不保乳頭）、level I/II axillary dissection、胸壁加完整區域淋巴照射，重建只能是 delayed。四個「全」對上四個容易被打折的地方——臨床上被打折的通常就是這四個。

**Paget 的分岔只有一句話：「乳房裡有沒有東西」。**
有 → core biopsy **加**全層皮膚切片；沒有 → 只做全層皮膚切片，陽性再考慮 MRI。兩條路最後都可能通向同一組治療，但**皮膚切片是全層的**這件事兩條路都不能省。

**Phyllodes 的三個「不」。**
Core biopsy **不**一定分得出來、excisional biopsy **不**以取邊緣為目的、邊緣陽性**不**給放療。三個「不」都是反直覺的，所以才值得背。

**懷孕期記「時鐘」不記藥。**
第一孕期不化療、任何孕期不放療、==35 週==後不化療。三個時間點卡住之後，剩下的只是「能用的只有 anthracycline、cyclophosphamide、taxane」這一句。禁用清單太長，反過來記能用的那三類比較快。

**男性乳癌的唯一例外是內分泌。**
其他都「同女性」，只有一句不同：**單用 AI 不行**，要嘛 tamoxifen，要嘛 GnRH analog + AI。記「男生的 AI 要有伴」。

---

## 門診核對

- [ ] 這個紅腫的乳房，時間是不是 ≤6 個月、範圍是不是 ≥1/3？有沒有病理確認？[[IBC-1]]
- [ ] IBC 的醫療攝影拍了沒？分期影像（胸部 CT、腹部 ± 骨盆 CT 或 MRI、bone scan 或 FDG-PET/CT）排全了沒？[[IBC-1]]
- [ ] IBC 要開刀了：手術單上寫的是 total mastectomy 還是 skin-sparing？後者是禁忌 [[IBC-2]]
- [ ] IBC 的放療範圍有沒有涵蓋未廓清而有風險的腋窩？[[IBC-2]]
- [ ] IBC、HER2 陽性：抗 HER2 有沒有打滿最多一年？[[IBC-2]]
- [ ] 乳頭濕疹／潰瘍／出血／搔癢，切片做的是**全層**皮膚切片嗎？[[PAGET-1]] [[PAGET-2]]
- [ ] Paget 而乳房影像陰性：考慮乳房 MRI 了嗎？切片沒癒合有沒有安排再切？[[PAGET-2]]
- [ ] 保乳的 Paget：切除範圍有沒有包含 NAC？全乳放療排了沒？[[PAGET-2]]
- [ ] 快速生長、>3 cm 的腫塊：core biopsy 陰性能不能相信？要不要 excisional biopsy？[[PHYLL-1]]
- [ ] Benign phyllodes：追蹤 3 年、不放療——有沒有人「順手」加了放療？[[PHYLL-1]]
- [ ] 懷孕病人：分期影像有沒有誤開 CT／PET／顯影 MRI？[[PREG-1]]
- [ ] 懷孕病人：現在第幾週？下一次化療會不會落在 35 週之後？[[PREG-2]]
- [ ] 懷孕病人：開始全身治療前的胎兒超音波做了沒？產科聯絡了沒？[[PREG-2]]
- [ ] 懷孕病人的處方：有沒有混進 anti-HER2、CDK4/6、ADC、內分泌、PARP 或 ICI？止吐與類固醇換成安全的了嗎？[[PREG-2]]
- [ ] 男性乳癌：基因檢測轉介了沒？內分泌處方是 tamoxifen 還是單用 AI？[[BINV-J]]
- [ ] 男性、正在用 GnRH analog：骨密度基線做了沒？下一次是兩年後嗎？[[BINV-J]]

---

## 常見陷阱

**IBC 做 skin-sparing 或 nipple-sparing mastectomy。**
[[IBC-2]] 寫得很直白：“Total mastectomy (skin-sparing and nipple-sparing mastectomy are contraindicated)”。同一句還規定 level I/II axillary dissection——用 SLNB 取代腋窩廓清在這裡也不是選項。重建只能是 delayed。

**把 dermal lymphatic invasion 當成 IBC 的必要條件。**
[[IBC-1]] 的註腳說 “Dermal lymphatic involvement may be seen but is not required for the diagnosis.” 皮膚切片沒看到 tumour emboli 不能拿來排除 IBC——診斷是臨床加病理，紅腫的時間與範圍才是要件。

**Paget 只切乳頭表面，不做全層。**
[[PAGET-2]] 兩條路寫的都是 “full-thickness skin biopsy of involved NAC”。而且乳房影像陰性、NAC 陽性的那一格接的是 “Consider breast MRI and tissue sampling, if indicated”——影像陰性不等於乳房裡沒有東西。切片沒癒合還要 re-biopsy。

**Phyllodes 邊緣陽性就補放療。**
[[PHYLL-1]] 的註腳只有一句：“Adjuvant RT is not indicated for positive margins.” 這是外科最直覺想做、而指引明確反對的一件事。

**用 core biopsy 陰性排除 phyllodes。**
[[PHYLL-1]] 說 “neither core biopsy nor FNA biopsy can always differentiate phyllodes tumors from fibroadenomas”，臨床懷疑時要靠切除才能定性。而 excisional biopsy 的定義是「完整切除腫塊，但不以取得手術邊緣為目的」——它是診斷手術，不是治療手術，不要把它當成已經做完根除。

**懷孕期把 mastectomy 當成第一孕期的唯一選項。**
[[PREG-1]] 的流程圖在第一孕期確實走 mastectomy，理由是「早期做 BCS 會讓放療來不及」；但 [[PREG-2]] 補了一個條件式的例外：“BCS during the first trimester of pregnancy can be considered in those who will require adjuvant chemotherapy and can have adjuvant RT delayed until after delivery.” 是 **can be considered**、而且**帶兩個前提**，不是一般選項。反過來把它讀成「懷孕期隨時可以保乳」也一樣錯。

**懷孕期只記得停化療，忘了停標靶與內分泌。**
[[PREG-2]] 的禁用清單有六類，anti-HER2、CDK4/6、ADC、內分泌治療、PARP 抑制劑、免疫檢查點抑制劑全都在內。連支持治療都要換：NK1 抑制劑避免，dexamethasone 與 betamethasone 盡量避開。

**男性乳癌單用 aromatase inhibitor。**
[[BINV-J]]：“single-agent adjuvant treatment with an aromatase inhibitor has been associated with inferior outcomes compared to tamoxifen alone … and is not recommended”。晚期疾病用 AI 時也「preferred that … a GnRH analog should be given concurrently」。這是整頁唯一一條「男性與女性不同」的用藥規則，其他都是外推。

**預設男性乳癌只能全切。**
[[BINV-J]] 說保乳在男性的資料顯示結果與 mastectomy 相當、安全可行，而且「decisions about breast conservation versus mastectomy in males should be made according to similar criteria as for females」。歷史上做得少，不等於現在不能做。
