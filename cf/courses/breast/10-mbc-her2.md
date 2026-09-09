+++
id      = "breast/mbc-her2"
track   = "breast"
order   = 10
group   = "晚期"
title   = "轉移性 HER2 陽性乳癌"
oneline = "THP 打到進展，換 T-DXd，有腦轉移就 CLIMB；換的是化療骨架，抗 HER2 不停"
refs    = ["BINV-21", "BINV-24", "BINV-25", "BINV-26", "BINV-P", "BINV-Q", "BINV-R", "BINV-A"]
figures = ["breast/mbc-her2-landscape", "breast/mbc-her2-flow", "breast/mbc-her2-trials", "breast/mbc-her2-numbers", "breast/mbc-her2-pitfalls", "breast/adc-mechanism"]
nccn    = { gid = "breast", version = "6.2026" }
+++

## 這一課回答什麼

一個 HER2 陽性、已經轉移的病人坐在你面前，**第一線給什麼、什麼時候換、換掉的是哪一半**。

- **順序幾乎是固定的**：一線 THP（category 1 的是 **docetaxel** 那一版）、二線 T-DXd、有腦轉移就 tucatinib 三合一。這三格是 [[BINV-Q]] 第 4 頁上僅有的三個 category 1 且 preferred 的位置，第四線以後 NCCN 自己都寫「最佳順序未知」。
- **換線換的是化療骨架，抗 HER2 不停**。這是 HER2 陽性跟其他 subtype 最不一樣的地方，也是最常被做錯的一步。
- **HR 狀態只改變第一線的一個選項**（可以走內分泌軌道）和第四線以後的一個選項，中間完全一樣。不要把 HR+/HER2+ 想成一種獨立的病。

---

## 治療地景

![[fig:breast/adc-mechanism]]

![[fig:breast/mbc-her2-landscape]]

這張圖是 [[BINV-Q]] 第 4 頁那張表的重排。看它的時候記三件事：

**左半邊擠、右半邊散。** 一線與二三線加起來只有六個方案（HR 陽性再多一條內分泌軌道），第四線以後有八個而且沒有排序——因為前面兩線有隨機分派試驗撐著，後面沒有。NCCN 在那一格寫的是 “the optimal sequence or true benefit of therapy is not known”，而且明說對於已經用過 pertuzumab、T-DM1、T-DXd 或 tucatinib 組合的病人，這些方案**沒有有意義的資料**。

**維持期是一線的一部分，不是另一線。** 紫杉醇打完之後 pertuzumab + trastuzumab 繼續打到進展，那還算第一線。

**HR 陽性那一列只有兩格。** 一線多一個內分泌軌道，第四線以後多一個 abemaciclib 組合（category 2B）。中間那格 NCCN 沒有專屬選項。

---

## 決策路徑

![[fig:breast/mbc-her2-flow]]

### 進門的兩件事

- 確認 HER2 真的陽性，並確認 HR 狀態——這兩個決定接下來所有分岔 [[BINV-A]]
- **有骨轉移就加骨保護**：denosumab、zoledronic acid 或 pamidronate，category 1，與全身治療併行 [[BINV-21]]
  - 三個前提：預期存活 ≥3 個月、腎功能足夠、開始前先做牙科評估
  - zoledronic acid 的最佳間隔是每 12 週，不是每 4 週
  - 同時補鈣與維生素 D
- 用 aromatase inhibitor 且有骨鬆風險者（年齡 >65、家族史、長期類固醇），先測骨密度 [[BINV-21]]

### 第一線

- **HR 陰性**：化療（含 ADC）+ 抗 HER2，打到進展或無法耐受 [[BINV-26]]
- **HR 陽性**：兩條路二選一 [[BINV-24]]
  - 化療（含 ADC）+ 抗 HER2
  - 內分泌治療 ± 抗 HER2
  - [[BINV-24]] 把兩者並列成「or」，**沒有寫**該用什麼條件在兩者之間挑——不要把「腫瘤負擔大就化療」當成指引寫過的話
  - 停經前要**先或同時**開始卵巢抑制／切除；單用 tamoxifen + 抗 HER2（不加卵巢抑制）也是選項 [[BINV-P]]
  - 一年內用過內分泌治療的，換一種不同的內分泌藥
- 具體方案看治療地景圖；`Docetaxel + Trastuzumab + Pertuzumab` 是唯一的 category 1 preferred

### 進展之後：先問是哪一條軌道進展

這是這一課的核心，NCCN 把它拆成三種情況 [[BINV-25]]：

- **內分泌軌道進展** → 換另一種內分泌 ± 抗 HER2，前提是還沒 endocrine-refractory
  - NCCN 特別提醒 ER 判讀可能偽陰性，原發灶與轉移灶也可能不一致。所以無內臟轉移、或內臟轉移但無症狀的病人，尤其是**無病期長、轉移部位少、疾病惰性、年紀較大**的，仍值得試內分泌——它的毒性低
- **扳道點**：連用 **up to 3 線**內分泌（± 抗 HER2）都沒有臨床效益，**或**出現有症狀的內臟疾病 → 轉化療 + 抗 HER2
- **化療軌道進展** → 換另一種化療，**抗 HER2 繼續**

### 什麼時候算進展

不能只憑一項 [[BINV-R]]：

- 要有**明確**的證據，來自「原有病灶惡化」或「出現新病灶」
- 可用的訊號：症狀惡化（疼痛、呼吸困難）、理學檢查變差、體能狀態下降、不明原因體重減輕、ALP/ALT/AST/bilirubin 上升、高血鈣、影像變化、功能性影像新病灶、腫瘤指標上升
- **腫瘤指標單獨上升幾乎不能拿來宣告進展**——治療有效時也可能上升
- 骨病灶在平片、斷層與骨掃描上都難判讀，所以骨為主的病人，症狀與腫瘤指標反而更有參考價值

### 終點

- 多數病人會用到多線。每一次評估都要重新衡量：繼續治療的價值、多一線的利與弊、體能狀態、病人偏好 [[BINV-25]]
- 體能狀態已經受損時，多一線的副作用可能大過任何效益 → 考慮停止抗 HER2，轉支持與安寧療護

---

## 關鍵試驗

![[fig:breast/mbc-her2-trials]]

這張表回答的是「為什麼這一格是首選」——治療地景圖只說得出位置，說不出證據。

> 整張表是策展補充，不在 NCCN 原文頁面上。NCCN 只列方案與證據等級，不列試驗。

---

## 必背數字

![[fig:breast/mbc-her2-numbers]]

- CLEOPATRA 的中位 OS：==57.1 個月==（對照組 ==40.8 個月==）——這是實體腫瘤裡少見的數字，值得記住當作 HER2 標靶治療效力的錨點
- DESTINY-Breast03 的中位 PFS：T-DXd ==28.8 個月== vs T-DM1 ==6.8 個月==
- HER2CLIMB 的顱內 PFS：==9.9 vs 4.2 個月==
- zoledronic acid 的最佳間隔：==每 12 週==
- 給骨保護的三個前提：預期存活 ==≥3 個月==、腎功能足夠、==先做牙科評估==
- 從內分泌軌道跳到化療軌道的門檻：==up to 3 線==內分泌（± 抗 HER2）無臨床效益，或出現==有症狀的內臟疾病==（symptomatic visceral disease，不是「有內臟轉移」）
- ER-low positive 的範圍：==1%–10%==（[[BINV-A]]），行為常常接近 ER 陰性、要個別權衡（[[BINV-21]] 註腳 ee）
- 骨密度基線檢查的對象：用 AI 且年齡 ==>65==、有家族史或長期使用類固醇者

---

## 記憶法

**三線口訣：THP → DXd → CLIMB。**
一線 <b>T</b>axane + <b>H</b>erceptin + <b>P</b>ertuzumab，二線 T-<b>DXd</b>，有腦轉移就 HER2<b>CLIMB</b>。三個字母都在藥名或試驗名裡，不用另外背對應。

**「換骨架，不換抗體」。**
HER2 陽性換線時，動的是化療那一半；[[BINV-25]] 與 [[BINV-26]] 都是「換另一種細胞毒性治療 + 抗 HER2，繼續打到進展」。指引上明寫的停用時機只有一個：==考慮不再給抗 HER2、轉支持與安寧==。但同一頁還有一條註腳要一起記——**長期控制良好的病人該打多久，trastuzumab 的最佳療程是未知的**，所以「打到永遠」也不是指引說過的話。

**HR 狀態只影響頭尾。**
第一線多一條內分泌軌道，第四線以後多一個 abemaciclib，中間完全一樣。所以看到 HR+/HER2+ 不要當成第四種乳癌，它是 HER2 的路加兩個岔口。

**三個扳道點，一個共同語意。**
內分泌線進展 → 換內分泌；up to 3 線無效或有症狀的內臟疾病 → 跳化療；化療線進展 → 換化療。三句話的主詞都是「哪一條軌道在進展」，不是「第幾線」。

**腦轉移的字面記憶。**
要往上「爬」進顱內的是 tucatinib，試驗叫 **CLIMB**。T-DXd 也有顱內活性，但納入活動性腦轉移做出結果的是 HER2CLIMB。

---

## 門診核對

- [ ] HER2 與 HR 狀態確認過了嗎？轉移灶有沒有重新做？（原發與轉移可能不一致）[[BINV-A]]
- [ ] 有沒有骨轉移？有的話骨保護開了沒？[[BINV-21]]
- [ ] 骨保護的三個前提查過了嗎：預期存活 ≥3 個月、腎功能、牙科評估 [[BINV-21]]
- [ ] 有沒有補鈣與維生素 D？[[BINV-21]]
- [ ] 要用 AI 的話，骨密度基線做了沒？（>65 歲、家族史、長期類固醇）[[BINV-21]]
- [ ] 停經前病人：卵巢抑制／切除安排了沒？要在內分泌治療之前或同時開始 [[BINV-P]]
- [ ] germline BRCA1/2 送了沒？所有復發或轉移性乳癌都該送 [[BINV-Q]]
- [ ] 這一線是化療軌道還是內分泌軌道？下一次進展時要換的是哪一半？[[BINV-25]]
- [ ] 用 T-DXd：ILD／肺炎的監測與衛教做了沒？[[BINV-Q]]
- [ ] 有神經症狀嗎？要不要做腦部影像？（有腦轉移的話治療選擇會變）
- [ ] 進展的判定有沒有超過一項證據？只有腫瘤指標上升不算 [[BINV-R]]
- [ ] 這一次評估：治療還有價值嗎？體能狀態？病人自己怎麼想？[[BINV-25]]

---

## 常見陷阱

![[fig:breast/mbc-her2-pitfalls]]

**把抗 HER2 跟化療一起停掉。**
最常見的一個。換線換的是化療骨架，trastuzumab 要繼續。[[BINV-25]] 的原句是 “Continue HER2-targeted therapy until progression”，[[BINV-26]] 則寫 “Alternate cytotoxic therapy + HER2-targeted therapy until progression”——兩頁講的是同一件事。

**內分泌只用一線就跳化療。**
[[BINV-25]] 給的門檻是「**up to 3 sequential endocrine therapy regimens ± HER2-targeted therapy** 都沒有臨床效益」，或出現有症狀的內臟疾病。跳太早等於白白讓病人承受化療毒性。

**只憑腫瘤指標上升宣告進展。**
[[BINV-R]] 明確反對：“An isolated increase in tumor markers should rarely be used to declare progression of disease.” 治療有效時指標也可能上升。

**把 ER-low positive（1%–10%）當成典型的 ER 陽性。**
[[BINV-A]] 定義了這個範圍（1%–10% 的細胞核染色），[[BINV-21]] 的註腳補上臨床意義：這一群異質性高，行為常常比較像 ER 陰性，資料也有限。要個別權衡，不是自動走內分泌軌道。

**忘記停經前病人的卵巢抑制。**
[[BINV-P]] 說卵巢抑制／切除／切開加抗雌激素比單用內分泌治療有效，而且要**在內分泌治療之前或同時**開始，不是之後補。

**anthracycline 配 trastuzumab。**
[[BINV-Q]] 的註腳：trastuzumab 與 anthracycline 併用有顯著心臟毒性，trastuzumab + pertuzumab 更要避開。第四線以後選「其他化療 + trastuzumab」時要記得這條。

**忘了牙科評估就開始骨保護。**
[[BINV-21]] 明文要求開始前先做牙科檢查與預防性治療。這一條漏掉的代價是顎骨壞死。

**把第四線以後的順序當成有根據的。**
NCCN 自己寫 “the optimal sequence is not known”，而且對已經用過 pertuzumab／T-DM1／T-DXd／tucatinib 組合的病人，那些方案沒有有意義的資料。講課時把這句話講出來，比排一個假的順序誠實。
