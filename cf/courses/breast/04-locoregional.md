+++
id      = "breast/locoregional"
track   = "breast"
order   = 4
group   = "早期"
title   = "局部治療決策"
oneline = "能不能保乳看 BINV-G，腋下開到哪看 SLN 幾顆，放射線給到哪看 pN 幾顆——三個問題，三張表"
refs    = ["BINV-2", "BINV-3", "BINV-4", "BINV-D", "BINV-E", "BINV-F", "BINV-G", "BINV-H", "BINV-I"]
figures = ["breast/locoregional-rt", "breast/locoregional-surgery-conservation", "breast/locoregional-surgery-operation", "breast/locoregional-axilla"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 cT1–3、M0 的病人決定先開刀，**乳房要不要全切、腋下要開到哪、放射線給到哪**。

- **這是三個依序但獨立的決定，各有各的表。** 保乳與否看 [[BINV-G]] 的禁忌清單，腋下看 [[BINV-D]] 的分岔，放射線看 [[BINV-2]] 與 [[BINV-3]] 的 pN 分層。把它們當成同一個決定的三個面向，就會在錯的那張表上找答案。
- **腋下手術一路在縮小。** SLN 陰性就停（category 1）；SLN 陽性但符合那一組條件也可以停；甚至有一群人連 SLNB 都可以省略。縮小的是手術，不是分期的重要性。
- **省掉的手術通常換成更大的照野，不是什麼都不做。** 腋下不清掃，RT 就要涵蓋 “undissected axilla at risk”——這句話在 [[BINV-2]]、[[BINV-3]]、[[BINV-D]] 三頁都寫過。

---

## 治療地景

![[fig:breast/locoregional-rt]]

這張圖把 [[BINV-2]] 與 [[BINV-3]] 疊在同一個座標上。看它的時候記三件事：

**縱軸只有兩格、橫軸只有三格。** 局部治療的全部變化就是「保乳 vs 全切」×「pN0 / 1–3 顆 / ≥4 顆」。其他全部是這六格裡的但書。

**保乳那一列從第一格就有 RT，全切那一列要往右走才開始有。** BCS 的 RT 不是加上去的東西，它是「BCS + RT」這個詞的另一半；唯一能拿掉的是右邊那兩組年齡加低風險的條件（category 1），而且句子開頭寫著 “if adjuvant endocrine therapy is planned”。全切那一列反過來，第一格明寫 “No RT”。

**兩列的最右格是同一句話。** ≥4 顆陽性淋巴結時，兩邊都是 comprehensive RNI、都是 category 1。真正有分歧的是中間那格：保乳要逐條核對四個條件，全切則是 “strongly consider”——一個是清單，一個是力度副詞。

---

## 決策路徑

![[fig:breast/locoregional-surgery-conservation]]

這張圖只回答一個問題：BINV-G 的禁忌清單允不允許保乳。術式、切緣與交棒在下一張。

### 第一步：能不能保乳

- **絕對禁忌**（建議 mastectomy）[[BINV-G]]：
  - Inflammatory breast cancer，或有 extensive skin or dermal lymphatic involvement 的 invasive breast cancer
  - Diffuse suspicious or malignant-appearing microcalcifications
  - 一次以上的再切除仍無法清掉 multiple positive pathologic margins
  - Homozygous ATM mutation（常導致 ataxia-telangiectasia syndrome）（category 2B）
  - 未接受全身化療的 gestational breast cancer，且無法在 12–16 週內接受 RT
  - 任何會讓 adjuvant whole breast RT + boost 無法執行的理由
- **Multicentric disease 要加條件才是絕對禁忌**，NCCN 列了九項，任一項成立就 mandate mastectomy [[BINV-G]]：接受過 neoadjuvant chemotherapy 或 endocrine therapy、年齡 ≤40、triple-negative breast cancer、MRI 上超過 2 個病灶且跨超過 2 個象限、任一病灶 ≥5 cm、BRCA1 和／或 BRCA2 PV carrier、multicentric pure DCIS、無法達到 negative margins、cN2–N3
- **相對禁忌**（mastectomy should be considered，但保乳治療仍可能適當）[[BINV-G]]：已知的乳癌遺傳體質、TP53 PV carrier（category 2B）、侵犯皮膚的活動性結締組織疾病（如 scleroderma 或 lupus）、患側曾接受過 RT（劑量與體積的資訊很重要）
- 反過來，有兩條把人拉回保乳：
  - >40 歲、MRI 評估後有 2 個 biopsy-proven cTis–cT2 病灶（至少一個是 invasive）、且打算做 adjuvant whole breast RT + boost 者，可以考慮保乳治療 [[BINV-2]] [[BINV-G]]
  - 但有乳癌遺傳體質的人，保乳後對側或同側再發的風險較高，要討論包含 prophylactic mastectomy 在內的風險降低策略 [[BINV-2]] [[BINV-G]]

### 保乳這一條：切乾淨的定義

![[fig:breast/locoregional-surgery-operation]]

答案是「可以保乳」之後才看這張：兩種術式、兩條切緣規則，以及做完之後交給放射線與全身治療的兩個節點。

- 術式是 BCS ± surgical axillary staging（category 1）± oncoplastic reconstruction [[BINV-2]]
- Stage I 或 II invasive cancer 的 positive margin 只有一個定義：**“ink on tumor”**——任何 invasive cancer 或 DCIS 細胞碰到墨水 [[BINV-F]]
  - 這些病人 “generally require further surgery”：再切除到 negative margin，或 mastectomy
  - 技術上可行時，可以依原檢體的定位只切掉那一面，或把整個原切除腔再切一圈
  - 少數 stage III invasive 的病人也可能適合 BCS，切緣用同樣的定義評估
- 病理報告要寫的三件事 [[BINV-F]]：gross 與 microscopic 的切緣狀態；最近那一面的距離、方位與腫瘤型態（invasive 還是 DCIS）；逼近墨水的病灶範圍量化。檢體的正確定位是前提
- DCIS 的切緣才有數字 [[BINV-F]]：
  - 純 DCIS 做 BCS + whole breast RT：切緣 ≥2 mm 與較低的 IBTR 相關；常規追求 >2 mm 沒有證據支持。只有 minimal or focal 的 DCIS 逼近切緣時，用臨床判斷權衡再切一次的風險與復發風險
  - DCIS 只做切除、不做 whole breast RT：不論切緣多寬，IBTR 都明顯較高——即使是事先定義的低風險族群也一樣；最佳寬度未知，但至少要 2 mm
  - DCIS with microinvasion（DCIS-M，invasive focus ≤1 mm）套用 DCIS 的切緣定義（>2 mm），不是 invasive 的定義
- 乳房攝影偵測到、帶 microcalcifications 的 DCIS，要用切緣分析加檢體攝影記錄完整切除；不確定時可以考慮術後乳房攝影 [[BINV-F]]

### 全切這一條，與重建

- 術式是 nipple-sparing、skin-sparing 或 total mastectomy，搭配 surgical axillary staging（category 1）± reconstruction [[BINV-3]]
- Skin-sparing 或 skin- and nipple-sparing 的局部區域復發風險 “probably equivalent” 於標準 mastectomy，而且 **PMRT 的適應症不會因為做了 skin-sparing 而改變** [[BINV-H]]
- 重建的第一個分岔是 RT [[BINV-H]]：
  - 沒有 RT 病史、也不需要 adjuvant RT → implant、autologous 或 combination reconstruction
  - 有 RT 病史或需要 adjuvant RT → 走 BINV-H 的另外兩頁
  - RT 病史或是否需要 RT 未知 → 再另一頁
  - Inflammatory breast cancer → delayed reconstruction
- RT 之後才處理的三件事 [[BINV-H]]：矯正輪廓缺損的 delayed flap 要在 RT 後 ≥6 個月才做；對側縮乳或 mastopexy 求對稱；delayed fat grafting
- 保乳也有重建選項 [[BINV-H]]：腫瘤／乳房體積比小、預期變形輕微就不需要；或考慮 oncoplastic reduction 或 mastopexy 加上同時或延遲的對側對稱手術；或症狀需要時考慮雙側縮乳；或 local tissue rearrangement、regional flap（LD、partial LD、TDAP）
  - 做了 oncoplastic 的 BCS **要用夾子標記切除腔**，後續的 RT 才規劃得出來——尤其是 oncoplastic tissue rearrangement 或 reduction
  - 術前要先評估預期的美觀結果，並先告知病人有 positive margins 與二次手術（再切除，或連乳頭一起的 mastectomy）的可能
  - 切緣狀況術前就不明朗時（lobular、multifocal/centric），考慮分階段的 partial mastectomy 重建

### 腋下要開到哪

![[fig:breast/locoregional-axilla]]

- SLNB 是首選的腋下分期方式，前提是病人適合做 SLNB [[BINV-E]]
- 三種入口 [[BINV-D]]：
  - 診斷時沒有可觸摸的淋巴結、且腋下超音波陰性 → **可以考慮省略 SLNB**，或做 SLN mapping and excision
  - 診斷時沒有可觸摸的淋巴結，或影像上侵犯有限且已由針刺切片確認 ± 在最可疑的那一顆放 marker → SLN mapping and excision
  - 臨床上可觸摸的可疑淋巴結、影像上腋下負擔顯著、或正在考慮術前全身治療且診斷時理學檢查或影像有可疑淋巴結 → 建議超音波導引 FNA 或 core biopsy + 在**最可疑的那一顆**放 marker
- 省略 SLNB 的條件（SOUND 與 INSEMA）[[BINV-D]] [[BINV-E]]：>50 歲且停經後、cT1N0（腋下超音波判定淋巴結陰性）、HR+/HER2-negative、grade 1–2，且願意接受 whole breast RT 與內分泌治療。**lobular histology 要謹慎**
- SLN mapping 之後的三種結果 [[BINV-D]]：
  - **找不到 SLN** → ALND level I/II
  - **SLN 陰性** → 不再做腋下手術（category 1）
  - **SLN 陽性** → 逐條核對下面那組條件
- SLN 陽性而可以不再做腋下手術的條件，要**全中** [[BINV-D]]：cT1–T2、T3（T3 的資料有限）／cN0／沒有術前化療／pN1mic；1–2 顆陽性 SLN（≥3 顆陽性的資料有限）／已規劃 adjuvant RT。任一項不符 → ALND level I/II
  - 全切的情況下，原本 cN0、SLNB 陽性、又沒做 axillary dissection 的人，胸壁 RT 要涵蓋沒清掃到的腋下 ± RNI [[BINV-D]]
- 針刺切片陽性的那條路 [[BINV-D]]：
  - 不做術前化療 → ALND level I/II
  - 做術前化療 → 化療後仍 clinically positive → ALND level I/II；轉成 clinically node negative → SLNB
  - 術前臨床腋下陰性、化療後 SLN 卻陽性 → 考慮 completion ALND，或由多專科團隊討論「不再手術而照射腋下」是否合適
- 術前就是 N+ 的人，化療後做 SLNB 的偽陰性率 **>10%**。要壓下來需要四件事一起做：治療前標記最可疑的那顆淋巴結、手術時用 dual tracers、取 ≥3 顆 SLN、並取出被標記的那顆（Targeted Axillary Dissection，TAD）[[BINV-D]]
- ALND 的範圍 [[BINV-E]]：level III 只在 level II 和／或 III 有 gross disease 時才做到 thoracic inlet；level II 沒有 gross disease 時，清掃範圍是腋靜脈以下、外側到 latissimus dorsi、內側到 pectoralis minor 內緣（level I/II）
- 腋下分期 “may be considered optional” 的三種人 [[BINV-E]]：腫瘤特別 favorable、腋下結果不太可能改變全身治療與／或 RT 的選擇、有嚴重共病
- 技術細節 [[BINV-D]]：SLN mapping 的注射可以是 peritumoral、subareolar 或 subdermal；SLN 是否受侵犯由 multilevel node sectioning + H&E 判定，equivocal 時可用 cytokeratin IHC，但**常規用 cytokeratin IHC 判定淋巴結侵犯，不建議用在臨床決策上**
- 淋巴水腫是腋下手術的潛在副作用，早期偵測與診斷是處理的關鍵；有風險因子的人，考慮**治療前先量兩側手臂**當基準 [[BINV-E]]

### 放射線給到哪

- 保乳之後 [[BINV-2]]：
  - **pN0**：whole breast RT ± boost to tumor bed；下列情況要 consider comprehensive RNI——central/medial tumor、pT3 tumor，或 pT2 且有 grade 3／extensive LVI／HR-negative 三者之一
  - 或 consider APBI/PBI，對象是適當選擇的低風險 pN0 或 cN0 病人（category 1）；APBI/PBI 可以在化療之前給
  - 或 consider 省略乳房照射，前提是**已規劃 adjuvant endocrine therapy** 且符合下列之一（category 1）：≥70 歲、HR+、HER2-negative、cN0、pT1（≤2 cm）；或 ≥65 歲、HR+、HER2-negative、pN0、pT ≤3 cm
  - **pN1a（1–3 顆陽性）**：符合全部四項（cT1–T3, cN0／沒有術前化療／1–2 顆陽性 SLN／已規劃 whole breast RT）→ whole breast RT ± boost，是否用 comprehensive RNI、是否刻意納入腋下，由放射腫瘤科醫師決定（category 1）。不符合 → whole breast RT 涵蓋任何有風險而未清掃的腋下 ± boost to tumor bed（category 1），並 strongly consider comprehensive RNI
  - **pN2–3（≥4 顆陽性）**：whole breast RT ± boost to tumor bed（category 1）+ comprehensive RNI，包含任何有風險而未清掃的腋下（category 1）
- 全切之後 [[BINV-3]]：
  - 腋下淋巴結陰性（pN0／pN0[i+]）且 ≤pT2（≤5 cm）且切緣陰性 → **No RT**。但有多重高風險復發因子時仍可考慮 PMRT：central/medial tumor，或腫瘤 ≥2 cm 且有 grade 3／ER-negative／young age or longevity／LVI 之一
  - 腋下淋巴結陰性但 pT3（>5 cm）→ **consider** PMRT 到胸壁 ± comprehensive RNI（包含任何有風險而未清掃的腋下）。pT3N0 考慮 PMRT 的高風險特徵「包含但不限於」young age/longevity 與／或 LVI
  - **1–3 顆陽性** → **strongly consider** PMRT 到胸壁 + comprehensive RNI。若是 pN1mi（>0.2 到 ≤2.0 mm 的 micrometastasis）且沒做 axillary dissection，要一併評估其他病人風險因子
  - **≥4 顆陽性** → PMRT 到胸壁 + comprehensive RNI（category 1）；這一格也建議 consider 系統性分期影像（chest/abdomen ± pelvis 顯影 CT、bone scan、optional FDG-PET/CT）
  - **任何 pT/pN 但切緣陽性** → re-excision 到切緣陰性是首選；不可行時才 strongly consider PMRT 到胸壁 ± comprehensive RNI
- 劑量 [[BINV-I]]：
  - 全乳 hypofractionated 40–42.5 Gy／15–16 fractions；選定情況可考慮 45–50.4 Gy／25–28 fractions
  - Boost 給復發風險較高的人，可以在全乳 RT 之後 sequential（典型 10–16 Gy／4–8 fractions），或做 simultaneous integrated boost（全乳 40 Gy／15 fractions，腫瘤床 48 Gy／15 fractions）
  - Ultra-hypofractionated 有資料支持：28.5 Gy／5 次每週一次，或 26 Gy／5 次每日一次。但 boost 怎麼放進去、長期毒性如何，**都還沒確立**
  - 腫瘤腔 boost 可以用 enface electrons、photons 或 brachytherapy 給
- 技術與順序 [[BINV-I]]：3D CT-based treatment planning 是常規；DIBH、prone positioning、cardiac blocks 可用來降低心臟、肺與鄰近正常組織的劑量；至少每週影像驗證擺位，重現性不佳的個案要更頻繁；用 DVH 評估劑量、正常組織限制與 PTV。**化療有適應症時，RT 通常在化療之後**

### 局部治療做完，往哪裡走

- [[BINV-2]] 與 [[BINV-3]] 都指向同一句：“See BINV-4 to determine whether adjuvant systemic therapy is indicated”
- [[BINV-4]] 是一張分流表，只用組織型態與受體狀態分流：
  - Ductal/NST、lobular、mixed、micropapillary、metaplastic → 先看 HR，再看 HER2
    - ER-positive 和／或 PR-positive：HER2-positive → BINV-5；HER2-negative → 停經後（pT1–3 且 pN0 或 pN+）→ BINV-6；停經前 pT1–3 pN0 → BINV-7、pT1–3 pN+ → BINV-8
    - ER-negative 且 PR-negative：HER2-positive → BINV-9；HER2-negative → BINV-10
  - Favorable histologic type（pure tubular、pure mucinous、pure cribriform、conventional adenoid cystic／secretory carcinoma 與其他 salivary carcinoma、rare low-grade forms of metaplastic carcinoma、其他罕見型）→ BINV-11
- 但「favorable」有三個門檻 [[BINV-4]]：不能是 high grade、必須是 pure（**手術切除檢體 >90%，不能只靠 core biopsy 判定**）、而且 HER2 陰性。有非典型的病理或臨床特徵時，考慮當成 ductal/NST 處理

---

## 關鍵試驗

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **ACOSOG Z0011** | cT1–2 cN0、保乳 + 全乳 RT、1–2 顆陽性 SLN | ALND vs 不做 ALND | 存活與局部區域復發沒有差別 | [[BINV-D]] 那組「SLN 陽性也可以不再開腋下」條件的原型 |
| **EORTC AMAROS** | cT1–2 cN0、SLN 陽性 | ALND vs 腋下放射線 | 腋下復發率相當，淋巴水腫較少 | 「不清掃就照射」這條替代路線的依據 |
| **SENOMAC** | cN0、1–2 顆 SLN macrometastasis，**納入 mastectomy 與較大的腫瘤** | 完成 ALND vs 不完成 | 不劣於 | 把免 ALND 的適用範圍往外推 |
| **SINODAR-One／OTOASOR** | 同一主題的其他隨機試驗 | 完成 ALND vs 不完成或改照射 | 方向一致 | NCCN 與前三個並列，一起支撐同一組條件 |
| **SOUND** | cT1N0、腋下超音波陰性 | SLNB vs 完全不做腋下手術 | 不劣於 | 「連 SLNB 都可以省」的一半 |
| **INSEMA** | cT1–2 cN0、保乳 | SLNB vs 省略 SLNB | 不劣於 | 另一半；NCCN 把兩者寫成同一條註腳，條件也寫在一起 |
| **ACOSOG Z11102** | 多發性同側乳癌病灶，MRI 評估後保乳 + 全乳 RT + boost | 單臂 | 局部復發率低 | multiple ipsilateral 病灶不再自動等於 mastectomy |
| **EUROPA** | 適合省略 RT 的年長病人 | 單獨 RT vs 單獨內分泌治療 | 早期乳癌的結果沒有不良影響 | 「省 RT」與「省內分泌」是可以互換的兩個選項，不是只能省 RT |
| **IMPORT HIGH** | 早期乳癌 | dose-escalated simultaneous integrated boost vs sequential boost | 支持 SIB 的劑量寫法 | NCCN 的「全乳 40 Gy／15 fx + 腫瘤床 48 Gy／15 fx」直接引它 |
| **NRG/RTOG 1005** | high-risk early-stage | hypofractionated 全乳 + 同步 boost vs conventional 全乳 + sequential boost | 這裡不下結論——NCCN 只引它支撐劑量分割的寫法 | 與 IMPORT HIGH 並列在 [[BINV-I]] 的註腳 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 在 [[BINV-D]] 與 [[BINV-I]] 的註腳裡列了這些文獻，但沒有列族群與結果。

---

## 必背數字

- Invasive 的 positive margin 定義：==ink on tumor==——沒有距離，任何 invasive 或 DCIS 細胞碰到墨水就是 [[BINV-F]]
- DCIS 的切緣才有數字：BCS + 全乳 RT 是 ==≥2 mm==；只切除不照射是「至少 ==2 mm==，最佳寬度未知」[[BINV-F]]
- DCIS-M 的定義：invasive focus ==≤1 mm==，切緣套 DCIS 的規則（==>2 mm==）[[BINV-F]]
- 省略乳房照射的兩組條件（都是 category 1，前提是已規劃內分泌治療）：==≥70 歲==、HR+、HER2−、cN0、pT1（==≤2 cm==）；或 ==≥65 歲==、HR+、HER2−、pN0、pT ==≤3 cm== [[BINV-2]]
- 全切後可以完全不給 RT 的門檻：腋下陰性 + ==≤pT2（≤5 cm）== + 切緣陰性 [[BINV-3]]
- PMRT 從 category 1 起跳的節點：==≥4 顆==陽性腋下淋巴結；==1–3 顆==是 strongly consider，==pT3N0== 是 consider [[BINV-3]]
- 全乳 hypofractionation：==40–42.5 Gy／15–16 fractions==；ultra-hypo：==26 Gy／5 次每日==，或 ==28.5 Gy／5 次每週== [[BINV-I]]
- Boost：sequential ==10–16 Gy／4–8 fractions==；SIB 是全乳 ==40 Gy／15 fx== + 腫瘤床 ==48 Gy／15 fx== [[BINV-I]]
- 術前 N+ 者化療後做 SLNB 的偽陰性率：==>10%==；TAD 要取 ==≥3 顆== SLN 並取出被標記的那一顆 [[BINV-D]]
- 省略 SLNB 的門檻：==>50 歲==且停經後、cT1N0（超音波陰性）、HR+/HER2−、==grade 1–2==，且**願意接受 whole breast RT 與內分泌治療** [[BINV-D]]
- 懷孕期乳癌（**未接受全身化療者**）若無法在 ==12–16 週==內接受 RT，是保乳的絕對禁忌 [[BINV-G]]
- Multicentric 變成 mandate mastectomy 的幾個數字門檻：MRI 上 ==>2 個病灶跨 >2 個象限==、任一病灶 ==≥5 cm==、年齡 ==≤40== [[BINV-G]]
- RT 之後做 delayed flap 矯正輪廓缺損要等 ==≥6 個月== [[BINV-H]]

---

## 記憶法

**頁碼就是順序：2 是保乳，3 是全切，4 是往後送。**
[[BINV-2]] 講 BCS + RT，[[BINV-3]] 講 mastectomy ± PMRT，[[BINV-4]] 是把病人交給全身治療的分流表。字母那幾頁則是工具：D 是 **D**issection（腋下開到哪）、F 是**切緣**、G 是保乳禁忌、H 是重建、I 是放射線。

**0 / 1–3 / ≥4 是同一條數線，兩種讀法。**
保乳那一列：都要照，差別在 RNI 加不加；全切那一列：不照 → strongly consider → category 1 照。記住這條數線，兩頁的六格就不用分開背。

**「省手術，加照野」。**
腋下不清掃，RT 就要涵蓋 undissected axilla at risk。所以「免 ALND」從來不等於「腋下不處理」，它是把處理方式從刀換成射線。

**Ink on tumor 沒有數字，DCIS 才有。**
Invasive 的切緣定義是四個英文字；==2 mm== 是 **DCIS** 的門檻。這兩個記反了，一邊會多開刀、一邊會漏掉該再切的人。

**「最可疑的那一顆」。**
針刺切片放 marker、手術時取出、和 SLN 一起送——NCCN 每次講到 marker 都加上 only the most suspicious node，理由就寫在同一句話裡：==為了降低偽陰性率==。

---

## 門診核對

- [ ] 有沒有 [[BINV-G]] 上的絕對禁忌？（IBC 或 extensive skin／dermal lymphatic involvement、diffuse malignant-appearing microcalcifications、清不掉的 positive margins、無法執行全乳 RT + boost）
- [ ] 是 multicentric 嗎？有沒有合併那九項之一而變成 mandate mastectomy？[[BINV-G]]
- [ ] 有沒有乳癌遺傳體質？保乳後的對側／同側風險與預防性乳房切除討論過了嗎？[[BINV-G]] [[BINV-2]]
- [ ] 患側曾經照過 RT 嗎？當年的劑量與體積查得到嗎？[[BINV-G]]
- [ ] 腋下超音波做了嗎？可疑淋巴結有沒有針刺切片 + 放 marker（只放最可疑的那一顆）？[[BINV-D]]
- [ ] 這個病人符合省略 SLNB 的條件嗎？組織型態是 lobular 嗎？[[BINV-D]] [[BINV-E]]
- [ ] SLN 陽性的話，那組條件逐條對過了嗎？（cT／cN／有無術前化療／幾顆／有沒有規劃 RT）[[BINV-D]]
- [ ] 有淋巴水腫風險因子嗎？治療前兩側手臂量了沒？[[BINV-E]]
- [ ] 保乳檢體有沒有正確定位？病理報告有沒有寫距離、方位與腫瘤型態？[[BINV-F]]
- [ ] 切緣是 ink on tumor 嗎？決定是 re-excision 還是 mastectomy？[[BINV-F]]
- [ ] 做了 oncoplastic 的話，切除腔用夾子標記了嗎？放射腫瘤科拿得到位置嗎？[[BINV-H]]
- [ ] 要不要重建？RT 的病史與需求確定了嗎？（這決定走 [[BINV-H]] 的哪一頁）
- [ ] pN 幾顆？對照 [[BINV-2]]／[[BINV-3]] 的那一格，RNI 要不要加？
- [ ] 全切後切緣陽性：先安排 re-excision 了嗎？（re-excision 是首選，PMRT 是退路）[[BINV-3]]
- [ ] 全身治療的分流資料齊了嗎：組織型態、ER/PR、HER2、停經狀態、pT/pN？[[BINV-4]]

---

## 常見陷阱

**把「免 ALND」當成「腋下不用管」。**
[[BINV-D]] 的註腳寫得很明白：全切的情況下，原本 cN0、SLNB 陽性、沒做 axillary dissection 的人，胸壁 RT 要涵蓋 “undissected axilla at risk” ± RNI。[[BINV-2]] 在保乳那一列也寫了同一句。省下來的是手術，不是治療。

**把 [[BINV-2]] 的四條與 [[BINV-D]] 的五條當成同一組。**
兩頁的清單不完全一樣。[[BINV-2]] 寫的是：cT1–T3、cN0；no preoperative chemotherapy；1–2 positive SLNs；whole breast RT planned。[[BINV-D]] 寫的是：cT1–T2、T3（限「資料有限」）；cN0；no preoperative chemotherapy；pN1mic；1–2 positive SLNs；adjuvant RT planned。要引用時就引用你正在看的那一頁，不要合併成一份記憶中的清單。

**把 invasive 的切緣講成「幾 mm」。**
[[BINV-F]] 對 stage I/II invasive 只給一個定義：positive margin 是 “ink on tumor”。==2 mm== 是 DCIS 的數字。這一條寫錯，等於幫病人多安排或少安排一次手術。

**省略乳房照射時忘了前提。**
[[BINV-2]] 那兩組年齡條件不是獨立成立的，句子開頭是 “Consider omitting breast irradiation **if adjuvant endocrine therapy is planned** and the following criteria are met”。同一頁的註腳還補了反方向的選項：符合省略 RT 條件的年長病人，也可以改成只接受 RT 而不用內分泌治療。

**pT3N0 直接當成「要 PMRT」。**
[[BINV-3]] 在這一格寫的是 “**Consider** PMRT”。1–3 顆陽性才是 strongly consider，≥4 顆才是 category 1。三個不同的動詞代表三種不同的力度，抹平它們等於自己改了 guideline。

**全切後切緣陽性就直接開 PMRT。**
[[BINV-3]] 的順序是 “Re-excision to negative margins is preferred. **If not feasible**, then strongly consider PMRT”。PMRT 在這一格是退路，不是首選。

**術前 N+ 的人化療後做 SLNB，卻沒做 TAD。**
[[BINV-D]] 給的偽陰性率是 >10%。要壓下來需要四件事一起做：治療前標記最可疑的淋巴結、dual tracers、取 ≥3 顆 SLN、取出被標記的那顆。少做一件就是把 >10% 帶回來。

**Skin-sparing mastectomy 就以為 PMRT 可以放寬。**
[[BINV-H]] 明說 “Indications for PMRT following skin-sparing mastectomy should not differ from standard mastectomy.” 復發風險 probably equivalent，適應症也就一樣。

**把 cytokeratin IHC 當成腋下分期的常規。**
[[BINV-D]] 寫的是：SLN 是否受侵犯由 multilevel node sectioning + H&E 判定，equivocal 時「可以」用 cytokeratin IHC，但 “Routine cytokeratin IHC to define node involvement is not recommended in clinical decision-making.”
