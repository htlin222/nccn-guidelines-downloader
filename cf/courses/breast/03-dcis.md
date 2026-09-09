+++
id      = "breast/dcis"
track   = "breast"
order   = 3
group   = "早期"
title   = "DCIS"
oneline = "只驗 ER，不動腋下；放射治療把同側復發砍掉一半以上，而復發裡有一半是侵襲癌——這就是所有決策的分母"
refs    = ["DCIS-1", "DCIS-2", "BINV-F", "BINV-G", "BINV-B", "ST-4"]
figures = ["breast/dcis-options-matrix", "breast/dcis-flow"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 Tis、N0、M0 的病人，**要驗什麼、要不要動腋下、要不要放射治療、術後要不要吃藥**。

- **DCIS 的 workup 短得驚人**。[[DCIS-1]] 只有六項：病史理學檢查、雙側診斷性乳房攝影、病理審閱、**ER 狀態**、有風險者的基因諮詢、必要時 MRI，加上 distress 評估。沒有 PR、沒有 HER2、沒有全身影像。
- **腋下預設不動**。原句是 “Surgical axillary staging should not be performed for preoperative (biopsy-determined) pure DCIS unless there is some clinical-radiographic-pathologic suggestion of invasion or axillary metastasis”——除了這個 unless，另外還有三種可以考慮 SLNB 的情況。而全乳切除是另一回事，那一格 NCCN 直接把 SLNB 寫進去了。
- **所有的取捨都繞著同一個數字轉**：全乳放射治療讓同側乳房腫瘤復發降低 50%–70%，而復發之中**約一半是侵襲癌**。省略放射治療、放寬 margin、不吃內分泌藥，都是在動這個分母。

---

## 治療地景

![[fig:breast/dcis-options-matrix]]

這張圖把 [[DCIS-1]] 的四個治療選項、[[BINV-F]] 的 margin 要求與 [[DCIS-2]] 的術後 risk reduction 疊在同一張矩陣上。看它的時候記三件事：

**四個選項不是平等的四格。** BCS 加全乳放射治療是唯一標到 category 1 的；APBI/PBI 是同一列的替代；**完全不做放射治療是 category 2B**，而且 [[DCIS-1]] 額外要求 RTOG 9804 的四個條件全部成立才「可以考慮」——screen-detected、grade 1–2、≤2.5 cm、margins ≥3 mm。第四個選項全乳切除，NCCN 是連著 SLNB 一起寫的。

**margin 的目標值會隨要不要放射治療而變，但變的方式跟直覺相反。** BCS 加全乳放射治療時，[[BINV-F]] 說至少 2 mm 與更低的 IBTR 相關，而常規追求 >2 mm 沒有證據支持。單做切除不做放射治療時，**不論 margin 多寬，IBTR 都明顯較高**——即使在事先定義的低風險族群也一樣；最佳寬度未知，但也是至少 2 mm，有些證據支持更寬。所以「不放射就把 margin 切寬一點來補」這件事，指引沒有背書。

**內分泌治療在這裡的名字叫 risk reduction，不叫 adjuvant therapy。** [[DCIS-2]] 把它分成同側與對側兩件事：同側是 ER 陽性 DCIS 接受 BCS 加放射治療（category 1）或單做切除者，考慮五年內分泌治療；對側則是「衛教與諮詢」。而且 NCCN 明講**存活優勢尚未被證實**，所以是個別權衡利弊，不是預設要開。

---

## 決策路徑

![[fig:breast/dcis-flow]]

### 診斷與 workup

- 適用對象：DCIS（Tis, N0, M0），以及 encapsulated 或 solid papillary carcinoma [[DCIS-1]]
    - encapsulated papillary carcinoma 沒有合併傳統侵襲時，依 AJCC 分為 pTis，因為行為類似 DCIS
    - solid papillary carcinoma 要依 WHO 標準指明是原位還是侵襲，但兩種型式預後都好
- 病史與理學檢查、雙側診斷性乳房攝影 [[DCIS-1]]
- 病理審閱（NCCN 背書 CAP 的報告協定）[[DCIS-1]]
- **決定腫瘤的 ER 狀態**——workup 裡唯一的 biomarker [[DCIS-1]]
- 有遺傳性乳癌風險者做基因諮詢 [[DCIS-1]]
- 有指徵時做乳房 MRI [[DCIS-1]] [[BINV-B]]
    - 但 [[DCIS-1]] 的註腳先把期待壓下來：MRI **沒有**被證實能提高陰性 margin 的機會或降低轉為全乳切除的比率，長期預後改善的資料也付之闕如
- Distress 評估 [[DCIS-1]]
- Grade 用的是 **nuclear grade**，不是侵襲癌那套 Nottingham 三項相加 [[ST-4]]

### 局部治療：兩條路

- **乳房保留手術，不做淋巴結手術** [[DCIS-1]]，接著三選一：
    - 全乳放射治療（**category 1**）± 對腫瘤床加強
    - 加速部分乳房照射／部分乳房照射（APBI/PBI）
    - 不做放射治療（**category 2B**）
- **全乳切除加 SLNB ± 重建** [[DCIS-1]]
- 保乳要拿到陰性 margin 可以再切；**再切仍拿不到適當 margin 的病人應該做全乳切除** [[DCIS-1]] [[BINV-F]]
- 全乳切除或再切除時發現侵襲病灶 → 改按 clinical stage I 或 II 處理 [[DCIS-1]]
- 有這些情況就不能保乳 [[BINV-G]]：
    - **瀰漫性可疑或惡性外觀的微鈣化**（絕對禁忌）
    - 一次或多次再切除後仍無法清除多處陽性病理 margin（絕對禁忌）
    - **多中心的 pure DCIS**——列在「mandate mastectomy」那一組條件裡
    - 任何導致無法給予輔助全乳放射治療加 boost 的理由

### 腋下：預設不動，但要分清楚是哪一種手術

- 術前（切片判定）的 pure DCIS **不做**手術腋下分期，除非臨床、影像或病理上有侵襲或腋下轉移的跡象 [[DCIS-1]]
- 三種可以考慮做 SLNB 的情況 [[DCIS-1]]：
    - 擔心 margin 持續陽性
    - 切除的解剖位置會影響日後執行 SLNB
    - 做 oncoplastic 的乳房保留手術
- **全乳切除那一格，NCCN 是把 SLNB 寫進治療名稱裡的**——因為切掉之後就沒有機會再做 [[DCIS-1]]
- 全乳切除時可考慮省略 SLNB 的族群很窄：>50 歲、**non-palpable、low-grade、ER 陽性**的 DCIS、腋下無異常發現；以及以病人意願為主要理由而做全乳切除者 [[DCIS-1]]

### Margin 要多寬

- 所有 BCS 檢體都要評估 margin，而且需要正確定位標記 [[BINV-F]]
- 病理報告要寫：肉眼與顯微 margin 狀態；最近 margin 的距離、方位與腫瘤型別（侵襲或 DCIS）；靠近墨線的病灶範圍量化 [[BINV-F]]
- 乳房攝影偵測到、帶微鈣化的 DCIS：完整切除要以 margin 分析加檢體攝影來記錄；不確定時可考慮術後乳房攝影 [[BINV-F]]
- **BCS 加全乳放射治療**：至少 2 mm 與較低的 IBTR 相關；常規追求 >2 mm 以求更好的結果**沒有證據支持**。只有極少或局灶性 DCIS 接近 margin 時，要用臨床判斷權衡再切與復發風險 [[BINV-F]]
- **單做切除不做全乳放射治療**：不論 margin 寬度，IBTR 都比切除加放射治療高出許多，即使在事先定義的低風險族群亦然。最佳寬度未知，但應至少 2 mm，有證據顯示更寬更好 [[BINV-F]]
- **DCIS 合併微侵襲（DCIS-M，侵襲病灶 ≤1 mm）沿用 DCIS 的 margin 定義（>2 mm）**，理由是它大部分成分仍是 DCIS，而且全身治療的使用型態也比較接近 DCIS [[BINV-F]]

### 術後：risk reduction 與追蹤

- **同側乳房**：ER 陽性 DCIS，符合下列任一情況可考慮五年內分泌治療 [[DCIS-2]]
    - 接受 BCS 加放射治療（**category 1**）
    - 單做切除
- 藥怎麼選 [[DCIS-2]]：
    - 停經前：tamoxifen
    - 停經後：tamoxifen 或 aromatase inhibitor；**<60 歲或有血栓栓塞疑慮者，AI 有一些優勢**
    - 低劑量 tamoxifen（5 mg/日，或 10 mg 隔日，共 3–5 年）是選項，適用於 20 mg 有症狀、或不願意／無法服用標準劑量者；這個劑量在停經前族群還需要更多研究
    - **不建議做 CYP2D6 基因型檢測**
- 用 AI 的話，bisphosphonate（口服或靜脈）或 denosumab 可用來維持骨密度、降低骨折風險 [[DCIS-2]]
    - **開始前要做牙科檢查與預防性牙科治療**，並補充鈣與維生素 D
    - 最佳療程未定；超過三年的效益未知
    - denosumab 停藥後有自發性骨折的個案報告
- **對側乳房**：做 risk reduction 的諮詢 [[DCIS-2]]
- 追蹤 [[DCIS-2]]：
    - 病史與理學檢查每 6–12 個月，持續 5 年，之後每年一次
    - 第一次乳房攝影：放射治療結束後 6–12 個月；若沒做放射治療，則是 BCS 後 6–12 個月（**category 2B**），之後每年
- 存活優勢尚未被證實，所以個別權衡利弊很重要——這是 [[DCIS-2]] 自己寫的 [[DCIS-2]]

---

## 關鍵試驗

| 試驗 | 族群 | 比較 | 結果 | 改變了什麼 |
|---|---|---|---|---|
| **NSABP B-17** | DCIS，腫瘤切除後 | 觀察 **vs** 全乳放射治療 | 同側乳房腫瘤復發顯著降低，侵襲性與非侵襲性復發都減少 | 「BCS 之後給放射治療」成為標準；[[DCIS-1]] 註腳那句 50%–70% 的量級就是從這一類試驗來的 |
| **NSABP B-24** | DCIS，腫瘤切除加放射治療後 | 安慰劑 **vs** tamoxifen | 同側與對側的乳房事件都減少 | 與 [[DCIS-2]] 那條 category 1 的建議一致；也是「同側與對側要分開講」的由來 |
| **RTOG 9804** | good-risk DCIS：screen-detected、grade 1–2、≤2.5 cm、margins ≥3 mm | 放射治療 **vs** 不放射（可用內分泌治療） | 放射治療進一步降低同側復發，但兩組的絕對復發率都低 | 這是 NCCN 唯一點名的 DCIS 試驗——[[DCIS-1]] 把它的四個條件原封不動搬成「可以考慮省略放射治療」的門檻 |
| **NSABP B-35** | 停經後、ER 陽性 DCIS，腫瘤切除加放射治療後 | tamoxifen **vs** anastrozole | anastrozole 的乳癌無病間期較佳，效益主要見於較年輕的一群 | [[DCIS-2]] 那句「<60 歲有一些優勢」的依據 |
| **IBIS-II DCIS** | 停經後、ER 陽性 DCIS | tamoxifen **vs** anastrozole | 復發率相當，副作用型態不同 | 與 B-35 併看，說明選藥時真正在權衡的是毒性而不是效力 |
| **低劑量 tamoxifen（DeCensi 2019）** | 乳房上皮內腫瘤，含 DCIS | 安慰劑 **vs** tamoxifen 5 mg/日 | 復發事件減少 | [[DCIS-2]] 直接引用了這篇（J Clin Oncol 2019;37:1629-1637），是低劑量選項的出處 |

> 這張表是策展補充，不在 NCCN 原文頁面上。RTOG 9804 的四個條件與 DeCensi 那篇引用是 [[DCIS-1]] 與 [[DCIS-2]] 本文就有的；其餘只寫定性結論，不寫數字。

---

## 必背數字

- 全乳放射治療讓 IBTR 降低 ==50%–70%==，而復發之中約 ==一半是侵襲癌== [[DCIS-1]]
- RTOG 9804 的四個條件，**要全中**才考慮省略放射治療：==screen-detected==、==grade 1–2==、==≤2.5 cm==、==margins ≥3 mm== [[DCIS-1]]
- 局部復發風險上升的六個因子：==較大的 DCIS==、==可觸摸的腫塊==、==grade III==、==margins ≤2 mm==、==ER 陰性==、==年齡 <50== [[DCIS-1]]
- BCS 加全乳放射治療的 margin：==至少 2 mm==；常規追求 >2 mm ==沒有證據支持== [[BINV-F]]
- 單做切除不做放射治療的 margin：也是==至少 2 mm==，但最佳寬度==未知==，而且不論多寬 IBTR 都比較高 [[BINV-F]]
- DCIS-M 的定義：侵襲病灶 ==≤1 mm==，margin 比照 DCIS 的 ==>2 mm== [[BINV-F]]
- 內分泌 risk reduction 的年限：==5 年== [[DCIS-2]]
- 低劑量 tamoxifen：==5 mg/日==，或 ==10 mg 隔日==，共 ==3–5 年== [[DCIS-2]]
- AI 有優勢的族群：停經後且 ==<60 歲==，或有==血栓栓塞疑慮==者 [[DCIS-2]]
- 全乳切除可考慮省略 SLNB 的族群：==>50 歲==、==non-palpable、low-grade、ER 陽性==的 DCIS、腋下無異常 [[DCIS-1]]
- 追蹤節奏：H&P ==每 6–12 個月共 5 年==，之後每年；第一次乳房攝影是放射治療結束後 ==6–12 個月== [[DCIS-2]]

---

## 記憶法

**DCIS 只驗一個 receptor。**
[[DCIS-1]] 的 workup 裡 biomarker 只有 ER 一項——沒有 PR、沒有 HER2。理由從下一頁倒推就記得住：[[DCIS-2]] 的術後段落只寫了一種藥，就是內分泌治療，而決定要不要開它的只有 ER。==兩頁連起來看，ER 是唯一會改變處置的那一格==。

**不動腋下，除非要把乳房整個拿掉。**
Pure DCIS 不做手術腋下分期；但一旦決定全乳切除，SLNB 就跟著寫在同一格裡，因為切完就沒得做了。一句話：==腋下手術跟著乳房走，不跟著 DCIS 走==。

**2 跟 3。**
==2 mm 是 margin 的門檻，3 mm 是省略放射治療的門檻==。兩個數字在不同頁上（[[BINV-F]] 與 [[DCIS-1]]），但常常同時出現在同一個病人身上，記在一起才不會互相污染。

**一半一半。**
放射治療砍掉一半以上的復發，而剩下的復發裡又有一半是侵襲癌。前一個一半講的是效益，後一個一半講的是代價——==「這只是原位癌」這句話就是被後面那個一半推翻的==。

**Tis 也可能不是 Tis。**
全乳切除或再切除時驗出侵襲，整個病人就改按 stage I 或 II 走 [[DCIS-1]]。所以術前談話要先埋這個伏筆，不要等病理回來才第一次提。

---

## 門診核對

- [ ] ER 狀態驗了沒？這是 DCIS workup 裡唯一的 biomarker [[DCIS-1]]
- [ ] 是不是 pure DCIS？有沒有臨床、影像或病理上懷疑侵襲的跡象？[[DCIS-1]]
- [ ] 決定不做腋下手術了嗎？有沒有落在那三個「可考慮 SLNB」的例外裡？[[DCIS-1]]
- [ ] 如果要做全乳切除：SLNB 安排了沒？病人符不符合可省略的那一群？[[DCIS-1]]
- [ ] 微鈣化型的 DCIS：檢體攝影做了沒？margin 有沒有量化描述？[[BINV-F]]
- [ ] Margin 距離幾 mm？有沒有到 2 mm？[[BINV-F]]
- [ ] 有沒有為了追求 >2 mm 而安排一次沒有必要的再切除？[[BINV-F]]
- [ ] 有沒有絕對禁忌保乳的情況：瀰漫性可疑微鈣化、多次再切仍陽性 margin、多中心 pure DCIS？[[BINV-G]]
- [ ] 打算省略放射治療的話，RTOG 9804 四個條件全中了嗎？[[DCIS-1]]
- [ ] ER 陽性嗎？五年內分泌 risk reduction 談過了嗎？（存活優勢未被證實，要一起權衡）[[DCIS-2]]
- [ ] 停經狀態確認了嗎？停經後、<60 歲或有血栓栓塞疑慮者可以偏向 AI [[DCIS-2]]
- [ ] 標準劑量 tamoxifen 有症狀嗎？低劑量是選項 [[DCIS-2]]
- [ ] 要用 AI 加骨質保護的話，牙科評估、鈣與維生素 D 都安排了嗎？[[DCIS-2]]
- [ ] 對側乳房的 risk reduction 諮詢做了沒？[[DCIS-2]]
- [ ] 第一次追蹤乳房攝影排在什麼時候？放射治療結束後 6–12 個月 [[DCIS-2]]

---

## 常見陷阱

**對 pure DCIS 做腋下分期。**
[[DCIS-1]] 的註腳是完整的禁令：“Surgical axillary staging should not be performed for preoperative (biopsy-determined) pure DCIS unless there is some clinical-radiographic-pathologic suggestion of invasion or axillary metastasis.” 那三個「可考慮 SLNB」的例外，講的都是**日後做不到**的技術問題，不是分期需求。

**反過來，全乳切除時把 SLNB 省掉。**
同一頁把 SLNB 直接寫進「Total mastectomy with sentinel lymph node biopsy」這個治療名稱裡。可以省略的族群窄得很具體：>50 歲、non-palpable、low-grade、ER 陽性、腋下無異常，或以病人意願為主要理由的全乳切除。切完才發現有侵襲，那顆前哨淋巴結已經沒有了。

**用 MRI 決定要不要改做全乳切除。**
[[DCIS-1]] 的註腳：MRI **沒有**被證實能提高陰性 margin 的機會或減少轉為全乳切除，長期預後的支持資料也不足。[[BINV-B]] 講得更硬：偽陽性常見，手術決策不能只憑 MRI，可疑處要另外取檢體。

**把「不做放射治療」當成一般選項。**
它是 **category 2B**，而且 [[DCIS-1]] 只在 RTOG 9804 四個條件**全部**成立時才說可以考慮——而且是「省略放射治療並改用內分泌治療」，不是什麼都不做。四個條件裡最容易被忽略的是 screen-detected：可觸摸的腫塊本身就在復發風險上升的名單上。

**為了省略放射治療而把 margin 切寬來補。**
[[BINV-F]] 沒有給這條路背書。原句是：單做切除者「不論 margin 寬度，IBTR 都比切除加全乳放射治療高出許多，即使在事先定義的低風險族群亦然」。寬 margin 換不到一次放射治療。

**對 ER 陰性的 DCIS 開內分泌治療。**
[[DCIS-2]] 的條件寫得很清楚，是 “patients with ER-positive DCIS”。這也是為什麼 ER 是 workup 裡唯一那個 biomarker——它決定的就是這一步。

**把 DCIS 的內分泌治療說成「輔助治療、會延命」。**
[[DCIS-2]] 的註腳：“Since a survival advantage has not been demonstrated, individual consideration of risks and benefits is important.” 它降低的是同側與對側的乳房事件。把它講成延命，病人五年後的不良反應就沒有辦法被重新談判。

**開始 AI 加骨質保護前忘了牙科評估。**
[[DCIS-2]] 明文要求：用 bisphosphonate 或 denosumab 的病人，開始治療前要做牙科檢查與預防性牙科治療，並補充鈣與維生素 D。同一條註腳還提醒 denosumab 停藥後有自發性骨折的個案報告——所以停藥也要有計畫，不是想停就停。

**用侵襲癌的 Nottingham grade 去讀 DCIS 的報告。**
[[ST-4]] 把兩套分開寫：侵襲癌用 Nottingham（三項各 1–3 分相加），DCIS 用的是 **nuclear grade**。而 grade III 是 [[DCIS-1]] 復發風險名單上的一項，讀錯那一格會直接影響要不要省略放射治療的判斷。
