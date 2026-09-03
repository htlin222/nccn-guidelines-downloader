-- Raw page extraction (issue #9): 讀圖只做一次，存這裡；insights 表的四種格式改
-- 從這裡的文字轉出來，不再各自碰圖。刻意跟 insights.sql 分開——這是新加的一層
-- 快取，不是既有 insights 表的欄位異動，schema.sql 重建全文索引時不該碰到它。
CREATE TABLE IF NOT EXISTS page_raw (
  gid     TEXT    NOT NULL,
  page    INTEGER NOT NULL,
  body    TEXT    NOT NULL,   -- 這一頁的完整轉寫（不是摘要），下游四種格式的唯一資料來源
  model   TEXT,               -- 產生這份轉寫的模型（Gemini ladder 的某一階，或 CF 掉線時的 fallback）
  created TEXT,
  sha     TEXT,               -- sha256(cleanPageText(page_text.body))：頁面改版時讓這份轉寫失效，見 insights_raw_sha.sql
  PRIMARY KEY (gid, page)
);

-- Groq 免費層是 RPD／TPD（次數／token 每日上限），不是 Gemini 那種逐模型計量，
-- 所以只需要一天一列。gen_insights.sh 用這張表在打下一次呼叫前先確認今天還有
-- 額度，撞到上限就正常停手、記住做到哪，下次 rebuild 接著做（見 issue #9）。
CREATE TABLE IF NOT EXISTS groq_usage (
  day      TEXT PRIMARY KEY,  -- UTC YYYY-MM-DD
  requests INTEGER NOT NULL DEFAULT 0,
  tokens   INTEGER NOT NULL DEFAULT 0
);
