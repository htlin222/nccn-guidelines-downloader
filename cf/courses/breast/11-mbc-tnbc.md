+++
id      = "breast/mbc-tnbc"
track   = "breast"
order   = 11
group   = "晚期"
title   = "轉移性三陰性乳癌"
oneline = "第一線由 PD-L1 CPS 與 germline BRCA 兩張門票決定，之後是 ADC 接力；序貫單藥為主"
refs    = ["BINV-21", "BINV-27", "BINV-Q", "BINV-R", "BINV-A"]
figures = ["breast/mbc-tnbc-landscape", "breast/mbc-tnbc-flow"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個三陰性、已經轉移的病人坐在你面前，**第一線給什麼由兩個檢驗決定，之後每一線換的都是「另一種 cytotoxic therapy」**。

- **NCCN 給 TNBC 的那一頁短得驚人。** [[BINV-27]] 只有一條線：cytotoxic therapy → 打到進展或無法耐受 → 換另一種 cytotoxic therapy → 考慮不再化療、轉支持療護。所有分層都在 [[BINV-Q]] 第 3 頁——看錯地方就會覺得 TNBC「沒有選擇」。
- **第一線靠兩張門票**：PD-L1 CPS ≥10（22C3 抗體）決定能不能加 pembrolizumab，germline BRCA1/2 PV 決定能不能用 PARPi 或 platinum。而且 **CPS ≥10 那一列寫的是 regardless of germline BRCA1/2 PV status**——兩張票同時在手時，免疫那一列優先。
- **NCCN 的 cytotoxic therapy 包含 ADC 與標靶治療**，不只是化療。所以「換另一種 cytotoxic therapy」很可能是換一個 ADC，這一課有一半的內容是 ADC 怎麼排。

---

## 治療地景

![[fig:breast/mbc-tnbc-landscape]]

這張圖是 [[BINV-Q]] 第 3 頁那張表的重排。看它的時候記三件事：

**第一線的三格切法不對稱。** 第一格是 CPS ≥10，**不看 gBRCA**；第二、三格才用 gBRCA 分開，而且都要先滿足「CPS <10，或不適合 PD-1/PD-L1 抑制劑」。所以判讀順序是固定的：先看 CPS，再看 gBRCA——反過來會把 CPS ≥10 的 gBRCA 帶因者送錯格。

**幾乎整張表都是 category 1、preferred。** TNBC 的方案不多，但第一線七個方案裡有六個標了 category 1、preferred；唯一沒有標的是「systemic chemotherapy（[[BINV-Q]] 第 5 頁）」那一格，依 NCCN 的預設就是 category 2A。這跟第四線以後只能寫 “systemic chemotherapy” 的情況是一體兩面：證據集中在前面。

**第二線以後 PD-L1 就不再分層了。** 換上場的是 gBRCA 與 **HER2 IHC**：TNBC 的「HER2 陰性」裡還藏著 IHC 1+ 與 2+/ISH− 這一群，他們在二線可以用 T-DXd。報告只寫 “HER2 negative” 而沒有分數的話，這一格永遠選不了。

---

## 決策路徑

![[fig:breast/mbc-tnbc-flow]]

### 進門要驗的三件事 [[BINV-Q]]

- **PD-L1 CPS**：用 **22C3** 抗體，陽性門檻是 **CPS ≥10**
- **germline BRCA1/2**：所有復發或轉移性乳癌都要驗，目的就是找出 PARPi 的候選人
- **HER2 IHC 分數**：IHC 0（absent membrane staining）/ 0+（faint, partial membrane staining 在 ≤10%）/ 1+ / 2+ISH− 的區分**現在會影響用藥**，病理報告要寫出染色型態 [[BINV-A]]
- 另外兩件與亞型無關的事：有骨轉移就加骨保護（denosumab、zoledronic acid 或 pamidronate，category 1）[[BINV-21]]；腦轉移的治療看 NCCN CNS guidelines [[BINV-Q]]

### 第一線：三選一 [[BINV-Q]]

- **PD-L1 CPS ≥10，不論 germline BRCA1/2 狀態**
  - chemotherapy（albumin-bound paclitaxel、carboplatin/gemcitabine 或 paclitaxel）**+ pembrolizumab**（category 1、preferred）
  - **sacituzumab govitecan + pembrolizumab**（category 1、preferred）
  - 註腳的兩句話要一起記：資料雖然來自第一線，但只要先前沒用過 PD-1/PD-L1 抑制劑，**第二線以後也可以用**；反過來，在 PD-1/PD-L1 抑制劑上進展之後，再換另一個 PD-1/PD-L1 抑制劑**沒有資料支持**
- **CPS <10，或不適合 PD-1/PD-L1 抑制劑，而且沒有 germline BRCA1/2 PV**
  - sacituzumab govitecan（category 1、preferred）
  - datopotamab deruxtecan（category 1、preferred）
  - systemic chemotherapy（[[BINV-Q]] 第 5 頁）
- **CPS <10 且有 germline BRCA1/2 PV**
  - PARPi（olaparib 或 talazoparib）（category 1、preferred）
  - platinum（carboplatin 或 cisplatin）（category 1、preferred）
- **一個例外的第一線入口**：HER2 IHC 1+ 或 2+/ISH− 的病人，若在 adjuvant 化療期間或結束後 **6 個月內**進展，**可以考慮**第一線就用 T-DXd
- 打到進展或無法耐受為止 [[BINV-27]]

### 進展之後 [[BINV-Q]]

[[BINV-27]] 只寫「換另一種 cytotoxic therapy」，實際的分層在 [[BINV-Q]] 第 3 頁：

- **有 germline BRCA1/2 PV** → PARPi（category 1、preferred），前提是第一線沒用過
- **任何人** → sacituzumab govitecan（category 1、preferred），前提是先前沒用過；或 systemic chemotherapy、標靶治療
- **沒有 gBRCA，且 HER2 IHC 1+ 或 2+/ISH−** → T-DXd（other recommended）
  - T-DXd 若二線沒用，後線仍可考慮
  - ILD／肺炎要常規監測；有 ILD／肺炎病史者，安全性與毒性管理沒有試驗資料
- **第三線以後**
  - biomarker positive（MSI-H、NTRK1/2/3 與 RET gene fusion、TMB-H）→ 標靶與 emerging biomarker 選項（[[BINV-Q]] 第 7、8 頁）
  - 其餘 → systemic chemotherapy（[[BINV-Q]] 第 5 頁）

### 化療本身怎麼挑 [[BINV-Q]]

- **序貫單藥為主**；只有高腫瘤負擔、快速進展、visceral crisis 這幾種病人才用合併化療
- Preferred 分四類：anthracyclines（doxorubicin、liposomal doxorubicin）、taxanes（paclitaxel）、anti-metabolites（capecitabine、gemcitabine）、microtubule inhibitors（eribulin、vinorelbine）
- Other recommended（全是單藥）：albumin-bound paclitaxel、cyclophosphamide、docetaxel、**epirubicin**、ixabepilone
- Useful in certain circumstances（全是合併方案）：AC、EC、CMF、capecitabine/docetaxel、GT（gemcitabine/paclitaxel）、carboplatin/gemcitabine、carboplatin + albumin-bound paclitaxel 或 paclitaxel
- 用 taxane 時的幾條實務：因醫療必要（例如過敏反應）可換另一種 taxane，但若替換每週 paclitaxel 或 docetaxel，albumin-bound paclitaxel 每週劑量不超過 125 mg/m²；**考慮**手腳冷療降低周邊神經病變風險，也可考慮手套加壓
- 用免疫檢查點抑制劑時要篩檢並處理免疫相關毒性與內分泌功能異常（例如甲狀腺低下、腎上腺功能不足）
- **考慮**頭皮冷卻降低化療引起的落髮，但用 anthracycline 時效果可能較差

### 什麼時候算進展 [[BINV-R]]

不能只憑一項：

- 要有**明確**（unequivocal）的證據，來自「原有病灶惡化」或「出現新病灶」
- 可用的訊號：症狀惡化（疼痛、呼吸困難）、理學檢查變差、體能狀態下降、不明原因體重減輕、ALP/ALT/AST/bilirubin 上升、高血鈣、影像變化、功能性影像新病灶、腫瘤指標上升
- **腫瘤指標單獨上升幾乎不能拿來宣告進展**——治療有效時也可能上升
- 骨病灶在平片、斷層與骨掃描上都難判讀，所以骨為主的病人，症狀與腫瘤指標反而更有參考價值

### 終點 [[BINV-27]]

- 多數病人會用到多線。每一次評估都要重新衡量：繼續治療的價值、多一線的利與弊、體能狀態、病人偏好，用共享決策的方式進行
- 體能狀態已經受損時，多一線的副作用可能大過任何臨床效益 → 考慮不再化療，並持續支持療護

---

## 關鍵試驗

| 試驗                 | 族群                                                      | 比較                                          | 結果                                              | 改變了什麼                                               |
| -------------------- | --------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------- |
| **KEYNOTE-355**      | 一線 mTNBC                                                | 化療 **± pembrolizumab**                      | CPS ≥10 族群 PFS 與 OS 都顯著改善；CPS <10 沒有   | CPS ≥10 那一列的來源，也是門檻為什麼訂在 10              |
| **ASCENT**           | 前治療過的 mTNBC                                          | **sacituzumab govitecan** vs 醫師選擇單藥化療 | PFS 與 OS 都顯著改善                              | SG 先進入後線，之後才往前推到第一線                      |
| **ASCENT-04**        | 一線、PD-L1 CPS ≥10                                       | SG + pembrolizumab vs 化療 + pembrolizumab    | PFS 顯著改善                                      | 「SG + pembrolizumab」成為第一線 category 1 preferred    |
| **TROPION-Breast02** | 一線、不適合 PD-1/PD-L1 抑制劑                            | **Dato-DXd** vs 醫師選擇化療                  | PFS 與 OS 都改善                                  | Dato-DXd 進入第一線 category 1 preferred                 |
| **OlympiAD**         | germline BRCA、HER2 陰性 MBC                              | **olaparib** vs 醫師選擇單藥化療              | PFS 顯著改善                                      | PARPi 在乳癌的第一個適應症                               |
| **EMBRACA**          | germline BRCA、HER2 陰性 MBC                              | **talazoparib** vs 醫師選擇單藥化療           | PFS 顯著改善                                      | 第二個 PARPi，兩者在 NCCN 並列                           |
| **TNT**              | 晚期 TNBC 一線                                            | **carboplatin** vs docetaxel                  | 全體無差別；**gBRCA 亞群** carboplatin 反應率較佳 | platinum 為什麼只出現在 gBRCA 那一格                     |
| **DESTINY-Breast04** | HER2-low（IHC 1+ 或 2+/ISH−）、化療後（含 HR 陰性小族群） | **T-DXd** vs 醫師選擇化療                     | PFS 與 OS 都改善                                  | HER2 IHC 1+／2+ISH− 的 TNBC 在二線可以用 T-DXd           |
| **KEYNOTE-119**      | 前治療過的 mTNBC                                          | pembrolizumab **單藥** vs 化療                | 整體 OS 未達顯著                                  | 免疫在 TNBC 要合併化療、而且要趁早用——單藥後線是行不通的 |

> 這張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗。

---

## 必背數字

- PD-L1 的抗體與門檻：==22C3==，==CPS ≥10== [[BINV-Q]]
- CPS ≥10 那一列的關鍵字：==regardless of== germline BRCA1/2 PV status——有 gBRCA 也走免疫那一列 [[BINV-Q]]
- PARPi 與 platinum 那一列的前提是**兩個條件**：==CPS <10== 且有 germline BRCA1/2 PV [[BINV-Q]]
- T-DXd 例外進第一線的條件：HER2 IHC ==1+ 或 2+/ISH−==，且在 adjuvant 化療期間或結束後 ==6 個月內==進展 [[BINV-Q]]
- HER2 IHC 0+ 的定義：faint, partial membrane staining 出現在 ==≤10%== 的細胞 [[BINV-A]]
- TMB-H 的門檻：==≥10 mut/Mb== [[BINV-Q]]
- 在 PD-1/PD-L1 抑制劑上進展之後，再用另一個 PD-1/PD-L1 抑制劑的資料：==沒有== [[BINV-Q]]
- 合併化療的三個時機：==高腫瘤負擔、快速進展、visceral crisis==；其餘一律==序貫單藥== [[BINV-Q]]
- 若以 albumin-bound paclitaxel 替換每週 paclitaxel 或 docetaxel，每週劑量不超過 ==125 mg/m²== [[BINV-Q]]
- 骨保護的三個前提：預期存活 ==≥3 個月==、腎功能足夠、==先做牙科評估==；zoledronic acid ==每 12 週== [[BINV-21]]
- 第三線以後值得回頭再看一次的四個標記：==MSI-H、NTRK1/2/3 fusion、RET fusion、TMB-H== [[BINV-Q]]

---

## 記憶法

**「兩張門票，順序不能反」。**
先看 PD-L1 CPS，再看 germline BRCA。因為 CPS ≥10 那一格是 ==regardless of gBRCA==——先看 BRCA 的人會把「CPS ≥10 又帶 gBRCA」的病人送去 PARPi，而 NCCN 把他放在免疫那一列。

**三陰性有三個 ADC，各自守一道門。**
<b>S</b>G 幾乎不設門（一線、二線都可以，都是 category 1 preferred）、<b>D</b>ato-DXd 守「一線但不適合免疫、又沒有 gBRCA」那一格、<b>T</b>-DXd 守 HER2 IHC 1+／2+ISH− 那一群。三個門一個比一個窄，記的順序就是 S → D → T。

**「三陰性不是完全沒有標的」。**
可以問的有六個：PD-L1、germline BRCA1/2、HER2 IHC（low）、MSI-H／dMMR、NTRK／RET fusion、TMB-H。三個「陰性」講的只是 ER、PR、HER2 amplification 這三格，不是整張生物標記表。

**NCCN 的 cytotoxic 包含 ADC 與標靶。**
[[BINV-27]] 上的每一句 “cytotoxic therapy” 都掛著同一條註腳。所以「換另一種 cytotoxic therapy」不等於「換一個化療藥」——把這條記住，[[BINV-27]] 那頁看起來的貧乏就消失了。

**免疫要「早」而且要「配」。**
KEYNOTE-355 是第一線加化療的組合，KEYNOTE-119 是後線單藥——一個成功一個失敗。而且一旦在 PD-1/PD-L1 抑制劑上進展，再換一個同類藥是**沒有資料**的。所以免疫治療在 TNBC 只有一次機會——但「一次」不等於「只有第一線」：註腳明說先前沒用過的話，第二線以後仍然可以加上去。

---

## 門診核對

- [ ] PD-L1 CPS 送了沒？用的是 22C3 嗎？結果是 ≥10 還是 <10 [[BINV-Q]]
- [ ] germline BRCA1/2 送了沒？所有復發或轉移性乳癌都該送 [[BINV-Q]]
- [ ] HER2 IHC 的**分數**拿到了嗎？報告只寫「HER2 negative」要回頭問 0 / 0+ / 1+ / 2+ISH− [[BINV-A]]
- [ ] 這個病人適合 PD-1/PD-L1 抑制劑嗎？（自體免疫疾病、器官移植、長期免疫抑制劑）[[BINV-Q]]
- [ ] 先前有沒有用過 PD-1/PD-L1 抑制劑？沒用過的話，二線以後仍可以加 [[BINV-Q]]
- [ ] 是 adjuvant 化療期間或結束後 6 個月內進展嗎？加上 HER2 IHC 1+／2+ISH− 就可以考慮第一線 T-DXd [[BINV-Q]]
- [ ] 這一線要合併化療還是序貫單藥？沒有高腫瘤負擔／快速進展／visceral crisis 就是單藥 [[BINV-Q]]
- [ ] 用 T-DXd：ILD／肺炎的監測與衛教做了沒？有沒有 ILD 病史 [[BINV-Q]]
- [ ] 用免疫檢查點抑制劑：甲狀腺、腎上腺等內分泌功能追蹤排了沒 [[BINV-Q]]
- [ ] 用 taxane：手腳冷療或手套加壓提過了嗎？頭皮冷卻要不要一起談 [[BINV-Q]]
- [ ] 有沒有骨轉移？骨保護開了沒？三個前提（存活 ≥3 個月、腎功能、牙科評估）查過了嗎 [[BINV-21]]
- [ ] 有神經症狀嗎？腦轉移的治療要看 NCCN CNS guidelines，不在這一頁 [[BINV-Q]]
- [ ] 第三線了：MSI-H、NTRK1/2/3 fusion、RET fusion、TMB-H 這四個回頭看過了嗎 [[BINV-Q]]
- [ ] 進展的判定有沒有超過一項證據？只有腫瘤指標上升不算 [[BINV-R]]
- [ ] 這一次評估：治療還有價值嗎？體能狀態？病人自己怎麼想 [[BINV-27]]

---

## 常見陷阱

**CPS ≥10 又帶 gBRCA，卻先給了 PARPi。**
[[BINV-Q]] 第一線第一列寫的是 “PD-L1 CPS ≥10 regardless of germline BRCA1/2 PV status”，而 PARPi／platinum 那一列的前提是 **CPS <10 且**有 gBRCA。兩個條件是「且」，掉一個就把病人放錯格。

**在 PD-1/PD-L1 抑制劑上進展後，再換另一個免疫檢查點抑制劑。**
[[BINV-Q]] 的註腳：“If there is disease progression while on a PD-1/PD-L1 inhibitor, there are no data to support an additional line of therapy with another PD-1/PD-L1 inhibitor.” 但同一條註腳的前半句常被一起忽略——**先前沒用過的話，第二線以後仍然可以用**。

**把「三陰性」當成「HER2 完全沒有」。**
[[BINV-A]] 要求病理報告寫出 IHC 0 的染色型態，[[BINV-Q]] 說這個區分「currently clinically relevant for therapy selection」。IHC 1+ 或 2+/ISH− 的三陰性病人，二線有 T-DXd 可用（other recommended）——報告寫得含糊就等於少一線。

**把「換另一種 cytotoxic therapy」讀成「換一個化療藥」。**
[[BINV-27]] 的註腳 ttt 明文：“Cytotoxic therapy includes chemotherapy or ADCs, or targeted therapy.” 那一頁看起來只有一條化療線，是因為分層被移到 [[BINV-Q]] 第 3 頁。

**習慣性開合併化療。**
[[BINV-Q]] 第 5 頁：“Sequential single agents are preferred, but chemotherapy combinations may be used in select patients with high tumor burden, rapidly progressing disease, and visceral crisis.” 合併方案（AC、EC、CMF、capecitabine/docetaxel、GT）在 NCCN 是 “useful in certain circumstances”，不是預設。

**把 PARPi 留到最後一線。**
[[BINV-Q]] 註腳：PARPi 可以考慮用在後線，但 “available evidence suggests it is more effective if used earlier”。前提是 germline BRCA1/2 要對**所有**復發或轉移性乳癌檢驗——沒驗就談不上時機。

**忘記 T-DXd 的 ILD 監測。**
[[BINV-Q]] 的註腳兩次提到同一件事：T-DXd 與 ILD／肺炎有關，要常規監測；而有 ILD／肺炎病史的病人，「沒有試驗資料」可以指引安全性或毒性處理。這不是「禁忌」，但也不是可以照常開的意思。

**只憑腫瘤指標上升宣告進展。**
[[BINV-R]] 明確反對：“An isolated increase in tumor markers should rarely be used to declare progression of disease.” 治療有效時指標也可能上升。骨為主的病人因為影像難判讀，症狀與指標的參考價值反而較高——差別在「單獨」兩個字。
