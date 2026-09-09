+++
id      = "breast/mbc-hr"
track   = "breast"
order   = 9
group   = "晚期"
title   = "轉移性 HR 陽性、HER2 陰性"
oneline = "內分泌 + CDK4/6i 是預設，只有真正的 visceral crisis 才先上化療；換線之前先問 ESR1、PIK3CA/AKT1/PTEN、BRCA"
refs    = ["BINV-21", "BINV-22", "BINV-23", "BINV-P", "BINV-Q", "BINV-R", "BINV-A"]
figures = ["breast/mbc-hr-landscape-endocrine", "breast/mbc-hr-landscape-cytotoxic", "breast/mbc-hr-flow-entry", "breast/mbc-hr-flow-progression", "breast/mbc-entry-branch"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 HR 陽性、HER2 陰性、已經轉移的病人坐在你面前，**第一線該不該直接上化療、什麼時候換、換之前要先驗什麼**。

- **預設不是化療。** [[BINV-P]] 寫得很直接：endocrine therapy + CDK4/6 inhibitor 優於化療，**即使有廣泛內臟侵犯**；只有 true visceral crisis 才建議化療。所以第一個分岔問的不是「腫瘤多大」，是「器官有沒有真的失能」。
- **第二線是 biomarker 決定的，不是順序決定的。** 進展時要看 ESR1（ctDNA 優先）、PIK3CA / AKT1 / PTEN，以及 germline BRCA1/2——這幾個標記各自對應一組方案（PIK3CA、AKT1／PTEN、germline BRCA1/2 那三組是 category 1，ESR1 那一組是 category 2A、other recommended），沒驗就只能回頭走通用化療。
- **跳到化療軌道有兩個門檻**，而且是「或」：連用 up to 3 線內分泌都沒有臨床效益，**或**出現有症狀的內臟疾病 [[BINV-23]]。

---

## 治療地景

![[fig:breast/mbc-hr-landscape-endocrine]]

![[fig:breast/mbc-hr-landscape-cytotoxic]]

兩張圖是同一張座標拆開的：上面那張是 [[BINV-P]] 第 2 頁的內分泌軌道，下面那張是 [[BINV-Q]] 第 2 頁的化療軌道。欄結構一樣（第一線／第二線／第三線以後），所以可以並著看。看它們的時候記三件事：

**兩張圖不是「輕症與重症」，是兩條由分岔點決定的軌道。** 內分泌那張適用沒有 visceral crisis 的病人，化療那張適用 visceral crisis **或** endocrine refractory——[[BINV-Q]] 第 2 頁的標題就是這兩個條件。同一個病人會從第一張開始，某一天掉到第二張，然後不會再回去（不過 [[BINV-22]] 留了一個口：以化療起始的病人在疾病穩定或有反應後，仍可以換成內分泌為主的治療）。

**內分泌那張的第二線幾乎全是 biomarker 專用格。** PIK3CA、AKT1／PTEN、ESR1、以及「沒有 PIK3CA mutation」各自對應一個方案，其中三格是 category 1。這一欄不驗基因就填不滿。

**化療那張的分層是 HER2 IHC 的細分。** 這是 HER2「陰性」裡面的層次：IHC 1+ 或 2+/ISH− 在二線用 T-DXd 是 category 1 preferred，IHC 0+ 只有 other recommended。看到報告寫「HER2 negative」而沒寫 IHC 分數，這一格就選不了。

---

## 決策路徑

![[fig:breast/mbc-hr-flow-entry]]

![[fig:breast/mbc-hr-flow-progression]]

流程也拆成兩張：第一張到第一線為止（進門、visceral crisis 的分岔、第一線怎麼選），第二張從第一次進展開始（換線的三個情境與什麼時候停）。兩張都帶著「貫穿全程的四件事」那條橫帶，因為它不屬於任何一線。

### 進門的四件事

- 確認 ER / PR 與 HER2。HER2 IHC 0 / 0+（faint, partial membrane staining 在 ≤10%）/ 1+ / 2+ISH− 的區分**現在會影響用藥**，不是病理科的細節 [[BINV-A]]
- **有骨轉移就加骨保護**：denosumab、zoledronic acid 或 pamidronate，category 1，與全身治療併行 [[BINV-21]]
  - 三個前提：預期存活 ≥3 個月、腎功能足夠、開始前先做牙科評估與預防性牙科治療
  - 同時補鈣與維生素 D；zoledronic acid 的最佳間隔是每 12 週
- **停經狀態要用抽血確認，不是問月經**：治療開始前先測 serum estradiol [[BINV-P]]
  - 停經前或近停經者，卵巢抑制／切除／切開加抗雌激素**優於**單用內分泌治療
  - OFS 要**與內分泌治療同時或更早**開始，不是之後補
- **germline BRCA1/2 要對所有復發或轉移性乳癌檢驗**，目的是找出 PARPi 的候選人 [[BINV-Q]]
- 用 aromatase inhibitor 且有骨鬆風險者（年齡 >65、家族史、長期類固醇），先做骨密度基線 [[BINV-21]]

### 第一線：先問有沒有 visceral crisis [[BINV-22]]

- **有 visceral crisis** → cytotoxic therapy（[[BINV-Q]] 第 2 頁）
  - visceral crisis 用的是 ESO-ESMO 第 5 版共識的定義：由症狀徵象、實驗室檢查與疾病快速進展判斷的**嚴重器官功能不良**；**不是「有內臟轉移」**，而是器官受損到臨床上必須用最快見效的治療
  - 註腳留了一個口：內分泌合併標靶（與 CDK4/6i 的雙藥，或與 CDK4/6i + PI3Ki 的三藥）在 visceral crisis 的**某些情況下仍可考慮**
- **沒有 visceral crisis**，再問一年內有沒有用過內分泌治療
  - **一年內沒有用過** → endocrine therapy + CDK4/6 inhibitor（停經前**考慮**卵巢抑制或切除）
  - **一年內用過** → 四條路：換一種內分泌 + CDK4/6i；或 PIK3CA activating mutation → fulvestrant/inavolisib/palbociclib；或 ESR1 mutation → ESR1 標靶治療；或 cytotoxic therapy
- 打到進展或無法耐受為止 [[BINV-R]]

### 第一線的內分泌方案怎麼挑 [[BINV-P]]

- Preferred 是 **aromatase inhibitor + CDK4/6 inhibitor**，三選一：ribociclib（**category 1**）、abemaciclib、palbociclib
  - NCCN 註腳明說：三個 CDK4/6i 之間**沒有隨機比較**，三期試驗的族群也不同，所以選哪一個「有爭議」
  - category 1 只給 ribociclib 那一格，理由寫在另一條註腳：ribociclib + 內分泌治療在三期試驗顯示一線 OS 效益
- 若是 adjuvant 內分泌治療期間進展，或結束後 12 個月內復發 → **考慮** fulvestrant + CDK4/6 inhibitor（fulvestrant + ribociclib 與 + abemaciclib 是 category 1）
- Frail 或多重共病 → 考慮**單用** aromatase inhibitor
- Other recommended 的單藥／組合：fulvestrant + AI（anastrozole 或 letrozole，category 1）、fulvestrant、anastrozole、letrozole、tamoxifen、exemestane
- 選哪一種內分泌藥，取決於**先前的輔助內分泌藥與無病期**，而且要權衡多出來的副作用
- 毒性管理（尤其治療剛開始那段）是必要的，不是加分項

### 進展之後：先問是哪一條軌道進展 [[BINV-23]]

- **內分泌軌道進展** → 若還不是 endocrine therapy refractory，**考慮**換另一種內分泌 ± 標靶（停經前考慮 OFS），或轉 cytotoxic therapy
  - NCCN 提醒 ER／PR 可能偽陰性，原發灶與轉移灶也可能不一致。所以**無內臟轉移、或內臟轉移但無症狀**的病人，尤其是無病期長、復發部位少、疾病惰性、年紀較大的，仍值得試毒性低的內分泌治療
  - 另一條可以拿來預測的線索：**初次對內分泌治療的反應持續了多久**，可以指引後線再用內分泌還有沒有效 [[BINV-P]]
- **扳道點**：連用 up to 3 線內分泌都沒有臨床效益，**或**出現有症狀的內臟疾病 → cytotoxic therapy
- **化療軌道進展** → 換另一種 cytotoxic therapy

### 第二線之前，把四組 biomarker 補齊 [[BINV-Q]]

- **ESR1 mutation**：在前線內分泌治療之後的進展時檢驗，**ctDNA 優先**；若 ESR1 陰性而 tumor fraction 低，考慮 reflex 做組織 NGS
  - 對應 elacestrant、imlunestrant、vepdegestrant，三個都是 category 2A、other recommended，各自的適用前線不同
- **PIK3CA activating mutation**（NGS 或 PCR）→ fulvestrant/inavolisib/palbociclib（category 1、preferred）、alpelisib/fulvestrant（category 1、preferred）
- **PIK3CA 或 AKT1 activating，或 PTEN inactivating mutation 與基因體變化（如 deletion）** → capivasertib/fulvestrant（category 1、preferred），用在前一線內分泌 + CDK4/6i 之後進展
  - PTEN 的 homozygous copy loss 與 TMB，**組織切片優於 ctDNA**——跟 ESR1 剛好相反
- **沒有 PIK3CA mutation**，而且已經在至少一線內分泌治療之後進展 → fulvestrant/gedatolisib ± palbociclib（category 1）[[BINV-P]]
- **germline BRCA1/2 PV** → PARPi。註腳說可以留到後線，但現有證據顯示**用得早比較有效**
- 兩條「回頭路」的警告，強度不一樣：在 PI3K inhibitor 上進展後，再用一個 PI3K 路徑抑制劑的方案「**資料很有限**」；在 everolimus 上進展後，換另一個 everolimus 方案是「**沒有資料**」[[BINV-P]]

### 走進化療軌道之後的順序 [[BINV-Q]]

適用「visceral crisis 或 endocrine refractory」的 HR+/HER2−（[[BINV-Q]] 第 2 頁）：

- **第一線**
  - 沒有 germline BRCA1/2 PV，且／或 HER2 IHC 0+、1+、2+/ISH− → systemic chemotherapy（category 1、preferred），或 T-DXd（other recommended）
    - 註腳寫得很清楚：第一線**一般偏好化療**（例如口服化療）；化療與 T-DXd 之間要依臨床特徵與病人偏好個別化
  - germline BRCA1/2 PV → PARPi（olaparib 或 talazoparib，category 1、preferred）
- **第二線**
  - HER2 IHC 1+ 或 2+/ISH− → T-DXd（category 1、preferred）
  - HER2 IHC 0+ → T-DXd（other recommended）
  - 不適合 T-DXd → sacituzumab govitecan（category 1、preferred）、systemic chemotherapy、標靶治療
  - T-DXd 的前提是**至少用過一線內分泌為主的治療**；ILD／肺炎要常規監測，有 ILD 病史者沒有安全性資料
  - SG 的前提是用過內分泌治療、CDK4/6 inhibitor，以及至少兩線化療（其中一線含 taxane，至少一線在轉移期）
- **第三線以後**
  - HER2 IHC 0、1+ 或 2+/ISH− → datopotamab deruxtecan（other recommended）——表上列在第三線以後，但註腳寫的適應症是「用過內分泌治療與化療之後的**二線或後線**」
  - systemic chemotherapy；標靶與 emerging biomarker 選項
  - biomarker positive（MSI-H、NTRK1/2/3 與 RET gene fusion、TMB-H ≥10 mut/Mb）另有對應藥物
- 化療本身的原則：**序貫單藥為主**，只有高腫瘤負擔、快速進展、visceral crisis 這幾種情況才用合併化療

### 什麼時候算進展 [[BINV-R]]

不能只憑一項：

- 要有**明確**（unequivocal）的證據，來自「原有病灶惡化」或「出現新病灶」
- 可用的訊號：症狀惡化（疼痛、呼吸困難）、理學檢查變差、體能狀態下降、不明原因體重減輕、ALP/ALT/AST/bilirubin 上升、高血鈣、影像變化、功能性影像新病灶、腫瘤指標上升
- **腫瘤指標單獨上升幾乎不能拿來宣告進展**——治療有效時也可能上升
- 骨病灶在平片、斷層與骨掃描上都難判讀，所以骨為主的病人，症狀與腫瘤指標反而更有參考價值

### 終點 [[BINV-23]]

- 多數病人會用到多線。每一次評估都要重新衡量：繼續治療的價值、多一線的利與弊、體能狀態、病人偏好，用共享決策的方式進行
- 體能狀態已經受損時，多一線的副作用可能大過任何臨床效益 → 考慮不再化療，轉支持與安寧療護

---

## 關鍵試驗

| 試驗                        | 族群                                                         | 比較                                                         | 結果                             | 改變了什麼                                                                      |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------- |
| **MONALEESA-2**             | 一線、停經後 HR+/HER2−                                       | letrozole **± ribociclib**                                   | PFS 與 OS 都顯著改善             | 一線 AI + CDK4/6i 裡唯一拿到 category 1 的那一格                                |
| **MONARCH 3**               | 一線                                                         | 非類固醇 AI **± abemaciclib**                                | PFS 顯著改善                     | AI + abemaciclib 列一線 preferred                                               |
| **PALOMA-2**                | 一線                                                         | letrozole **± palbociclib**                                  | PFS 改善；OS 未達顯著            | AI + palbociclib 同列一線 preferred，但 OS 證據弱於 ribociclib                  |
| **MONARCH 2 / MONALEESA-3** | 前線內分泌治療後（MONALEESA-3 也納入一線）                   | fulvestrant **± abemaciclib** ／ **± ribociclib**            | PFS 與 OS 都改善                 | fulvestrant + CDK4/6i 的 category 1 來源；NCCN 註腳分別標了一線與二線的 OS 效益 |
| **SOLAR-1**                 | PIK3CA mutant、AI 後進展                                     | fulvestrant **± alpelisib**                                  | PFS 顯著改善                     | 第一個 biomarker 選擇性的 PI3K 路徑方案                                         |
| **INAVO120**                | PIK3CA mutant、adjuvant 內分泌治療期間或結束後 12 個月內復發 | fulvestrant + palbociclib **± inavolisib**                   | PFS 顯著改善                     | fulvestrant/inavolisib/palbociclib 成為 PIK3CA mutant 的 category 1 preferred   |
| **CAPItello-291**           | PIK3CA / AKT1 / PTEN 有變化、AI 後進展                       | fulvestrant **± capivasertib**                               | PFS 顯著改善                     | capivasertib/fulvestrant 的 category 1                                          |
| **EMERALD**                 | 前線 AI + CDK4/6i 之後，ESR1 突變與野生型都納入              | **elacestrant** vs 標準內分泌治療                            | ESR1 突變族群 PFS 改善           | 第一個口服 SERD 進 NCCN，適應症也限在「AI + CDK4/6i 之後」                      |
| **EMBER-3**                 | 前線 AI ± CDK4/6i 之後進展                                   | imlunestrant vs **imlunestrant + abemaciclib** vs 標準內分泌 | 合併 abemaciclib 那一組 PFS 改善 | NCCN 直接在註腳提醒：對照的是 imlunestrant 單藥，**不是** ET + CDK4/6i          |
| **BOLERO-2**                | 非類固醇 AI 期間或結束後 12 個月內進展                       | exemestane **± everolimus**                                  | PFS 顯著改善                     | NCCN 直接引用它的 eligibility 來界定 everolimus + exemestane 的適用族群         |
| **DESTINY-Breast04**        | HER2-low（IHC 1+ 或 2+/ISH−）、化療後                        | **T-DXd** vs 醫師選擇化療                                    | PFS 與 OS 都改善                 | 二線 T-DXd 的 category 1                                                        |
| **TROPiCS-02**              | 內分泌 + CDK4/6i + ≥2 線化療後                               | **sacituzumab govitecan** vs 醫師選擇化療                    | PFS 與 OS 都改善                 | SG 在 HR+ 的位置                                                                |
| **TROPION-Breast01**        | 前線內分泌治療與化療之後                                     | **Dato-DXd** vs 醫師選擇化療                                 | PFS 改善，**未達 OS 終點**       | NCCN 把「沒達到 OS」寫進註腳，所以它停在 other recommended                      |
| **S0226**                   | 一線、轉移期未治療                                           | fulvestrant **± anastrozole**                                | TTP 與 OS 延長                   | 這個組合 category 1 的唯一來源；設計相似的 FACT 與 SOFEA 是陰性                 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗——例外是 EMBER-3、BOLERO-2 與 S0226，它們被寫進 [[BINV-P]] 的註腳裡。

---

## 必背數字

- 只有 ==true visceral crisis== 才建議化療；廣泛內臟侵犯**不算**，[[BINV-P]] 說內分泌 + CDK4/6i 在那種情況下仍然優於化療
- 從內分泌軌道跳化療的兩個門檻（「或」不是「且」）：==up to 3 線==內分泌無臨床效益，或==有症狀的內臟疾病== [[BINV-23]]
- 第一線分岔的時間窗：==1 年==內有沒有用過內分泌治療 [[BINV-22]]
- fulvestrant + CDK4/6i 進到第一線的條件：adjuvant 內分泌治療期間進展，或結束後 ==12 個月內==復發 [[BINV-P]]
- BOLERO-2 的 eligibility，也是 everolimus + exemestane 的族群：非類固醇 AI 治療期間或結束後 ==12 個月內==進展 [[BINV-P]]
- 一線 AI + CDK4/6i 三選一裡唯一的 category 1：==AI + ribociclib== [[BINV-P]]
- SG 在 HR+ 的使用前提：用過內分泌治療、CDK4/6 inhibitor，以及至少 ==2 線化療==（其中一線含 taxane，至少一線在轉移期）[[BINV-Q]]
- TMB-H 的門檻：==≥10 mut/Mb== [[BINV-Q]]
- ctDNA 的 tumor fraction：==<1%== 或陰性時要謹慎解讀，必要時重採或改組織 NGS [[BINV-Q]]
- HER2 IHC 0+ 的定義：faint, partial membrane staining 出現在 ==≤10%== 的細胞 [[BINV-A]]
- ER-low positive 的範圍：==1%–10%==，行為常常接近 ER 陰性，要個別權衡 [[BINV-21]]
- 骨保護的三個前提：預期存活 ==≥3 個月==、腎功能足夠、==先做牙科評估==；zoledronic acid ==每 12 週== [[BINV-21]]
- 骨密度基線的對象：用 AI 且年齡 ==>65==、有家族史或長期使用類固醇者 [[BINV-21]]
- 若因醫療必要以 albumin-bound paclitaxel 替換每週 paclitaxel 或 docetaxel，每週劑量不超過 ==125 mg/m²== [[BINV-Q]]

---

## 記憶法

**「燒起來才上化療」。**
第一線的第一個問題不是腫瘤多大，是 visceral crisis 有沒有成立。ESO-ESMO 的定義裡最該記住的一句是 ==visceral crisis is not the mere presence of visceral metastases==——有內臟轉移不等於危象，器官真的在失能才是。

**第一線只有兩個問句：燒起來了嗎？一年內用過內分泌嗎？**
[[BINV-22]] 整頁就是這兩個 yes/no 疊起來的四格。第一個 yes 送去化療，第二個 yes 送去「換一種內分泌 + CDK4/6i、或照 biomarker 走」，兩個 no 就是最單純的 AI + CDK4/6i。

**二線的四個標記：E-P-A-B。**
<b>E</b>SR1（ctDNA 優先）、<b>P</b>IK3CA、<b>A</b>KT1／PTEN、<b>B</b>RCA（germline）。四個字母各自對應一組方案，而且順序剛好是「先驗血、再看路徑、最後看遺傳」。驗不到就只剩通用化療。

**「3 線或有症狀」——跳化療的兩張票。**
兩者是「或」的關係，任一成立就換軌。這一條跟 HER2 陽性那一課的扳道點寫法幾乎一樣——[[BINV-23]] 是「up to 3 sequential endocrine therapy regimens」，HER2 那一頁只多了「± HER2-targeted therapy」。記一次，兩課共用。

**ADC 的階梯：T-DXd → SG → Dato-DXd。**
二線先看 HER2 IHC 夠不夠 low（==IHC 1+ 或 2+/ISH−== 才是 category 1），不適合 T-DXd 就 SG，表上排在第三線以後的是 Dato-DXd——三個裡唯一沒有達到 OS 終點的那一個。要注意的是**「階梯」講的是 NCCN 表上的位置，不是前置條件的寬鬆度**：SG 的前置條件（內分泌 + CDK4/6i + 至少兩線化療）其實比 T-DXd（至少一線內分泌為主的治療）嚴得多。

**「組織問 PTEN，血液問 ESR1」。**
兩個方向相反的檢體偏好很容易記反：ESR1 是 ctDNA 優先，PTEN 的 homozygous copy loss 與 TMB 是組織優先。理由也對稱——ESR1 是治療壓力下長出來的、血裡才抓得到最新的；copy loss 需要看到細胞。

---

## 門診核對

- [ ] ER / PR 百分比與 HER2 IHC 分數都拿到了嗎？報告只寫「HER2 negative」的話要回頭問分數 [[BINV-A]]
- [ ] ER 落在 1%–10% 嗎？那一群要個別權衡，不是自動走內分泌軌道 [[BINV-21]]
- [ ] germline BRCA1/2 送了沒？所有復發或轉移性乳癌都該送 [[BINV-Q]]
- [ ] 治療前的 serum estradiol 測了沒？停經狀態是抽血確認的 [[BINV-P]]
- [ ] 停經前病人：卵巢抑制／切除安排了沒？要在內分泌治療之前或同時開始 [[BINV-P]]
- [ ] 這個病人算 visceral crisis 嗎？器官功能有沒有真的失能，還是只是「有內臟轉移」[[BINV-22]]
- [ ] 過去一年內用過內分泌治療嗎？這決定第一線走哪一格 [[BINV-22]]
- [ ] 有沒有骨轉移？骨保護開了沒？三個前提（存活 ≥3 個月、腎功能、牙科評估）查過了嗎 [[BINV-21]]
- [ ] 有沒有補鈣與維生素 D？zoledronic acid 是每 12 週嗎 [[BINV-21]]
- [ ] 要用 AI 的話，骨密度基線做了沒？（>65 歲、家族史、長期類固醇）[[BINV-21]]
- [ ] 這一次進展要換線：ESR1 送了沒（ctDNA 優先）？PIK3CA / AKT1 / PTEN 呢 [[BINV-Q]]
- [ ] 這一線是內分泌軌道還是化療軌道？累積到第幾線內分泌了 [[BINV-23]]
- [ ] 用 T-DXd：至少一線內分泌為主的治療用過了嗎？ILD／肺炎的監測與衛教做了沒 [[BINV-Q]]
- [ ] 進展的判定有沒有超過一項證據？只有腫瘤指標上升不算 [[BINV-R]]
- [ ] 這一次評估：治療還有價值嗎？體能狀態？病人自己怎麼想 [[BINV-23]]

---

## 常見陷阱

**看到廣泛內臟轉移就直接上化療。**
[[BINV-P]] 的原句沒有留餘地：“Endocrine therapy + CDK4/6 inhibitor is preferred over chemotherapy, even for extensive visceral involvement. Chemotherapy recommended only if true visceral crisis.” 這是這一課最常被做錯的一步。

**把 visceral crisis 當成「有內臟轉移」。**
[[BINV-22]] 引 ESO-ESMO 的定義：“Visceral crisis is not the mere presence of visceral metastases but implies important organ compromise leading to a clinical indication for the most rapidly efficacious therapy.” 而且即使成立，註腳仍說內分泌 + CDK4/6i（或加上 PI3Ki 的三藥）在某些情況下**仍可考慮**——不是自動排除。

**以為三個 CDK4/6 inhibitor 可以互換。**
[[BINV-P]] 註腳明說沒有隨機比較、試驗族群也不同，選擇「有爭議」；而 category 1 只給了 AI + ribociclib。另一條常漏的：**在 palbociclib 上進展後改用 ribociclib，只有有限的 phase II 資料**。

**在 PI3K 路徑或 everolimus 上進展後，換同一路徑的另一個藥。**
[[BINV-P]] 的兩條註腳強度不同：PI3K 是「limited data」，everolimus 是「no data」。不要一起記成「都不行」，也不要一起記成「都可以」。

**把 Dato-DXd 當成跟 T-DXd、SG 同級。**
[[BINV-Q]] 註腳把差別寫得很白：Dato-DXd 在 TROPION-Breast01 **沒有達到 OS 終點**，而 T-DXd 與 SG 在隨機三期試驗顯示 OS 效益；而且 TROPION-Breast01 沒有納入用過 ADC 的病人，所以用過 ADC 之後再用它的效益不明。

**把 PARPi 留到最後一線。**
[[BINV-Q]] 註腳：PARPi 可以考慮用在後線，但“available evidence suggests it is more effective if used earlier”。前提是 germline BRCA1/2 要**對所有**復發或轉移性乳癌檢驗——沒驗就談不上時機。

**忘記停經前病人的卵巢抑制，或補在內分泌治療之後。**
[[BINV-P]]：OFS／ablation／resection 加抗雌激素優於單用內分泌治療，而且要 “Start OFS with or prior to initiation of endocrine therapy.” 順序寫在指引裡，不是慣例。

**只憑腫瘤指標上升宣告進展。**
[[BINV-R]] 明確反對：“An isolated increase in tumor markers should rarely be used to declare progression of disease.” 治療有效時指標也可能上升。反過來，骨為主的病人因為影像難判讀，症狀與腫瘤指標的參考價值反而較高——這兩句話不衝突，差別在「單獨」。

**把「化療起始」當成不可逆。**
[[BINV-22]] 的註腳留了回頭路：以化療起始的病人，在疾病穩定或觀察到反應之後，**可以**換成內分泌為主的治療。實務上這一格常常被忘記，病人就一路化療到底。
