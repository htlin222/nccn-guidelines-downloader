-- AI 逐頁重點的永久快取 + Workers AI 免費額度計量。
-- 刻意跟 sql/schema.sql 分開：schema.sql 會 DROP TABLE pages，是 build_index.sh
-- 每次重建全文索引時跑的；快取不能跟著被洗掉。這支只需要在第一次部署時跑一次。
CREATE TABLE IF NOT EXISTS insights (
  gid     TEXT    NOT NULL,
  page    INTEGER NOT NULL,
  kind    TEXT    NOT NULL,   -- key | hy | phrase | sdm
  md      TEXT    NOT NULL,   -- 條列內容，一行一點
  model   TEXT,
  src     TEXT,               -- 'text' = 用 pdftotext 抽的字；'vision' = 讀 rasterize 的圖
  created TEXT,
  PRIMARY KEY (gid, page, kind)
);

CREATE TABLE IF NOT EXISTS ai_usage (
  day     TEXT PRIMARY KEY,   -- UTC YYYY-MM-DD，與 Workers AI 免費額度的重置時點一致
  neurons REAL    NOT NULL DEFAULT 0,
  calls   INTEGER NOT NULL DEFAULT 0
);

-- Antigravity（Gemini）的額度是「每模型每天 N 次」，所以逐模型記帳，
-- src/lib/gemini.js 的 LADDER 靠這張表知道哪一階今天還能用。
CREATE TABLE IF NOT EXISTS ai_calls (
  day   TEXT    NOT NULL,     -- UTC YYYY-MM-DD
  model TEXT    NOT NULL,     -- 例如 gemini-3.6-flash
  calls INTEGER NOT NULL DEFAULT 0,
  cool  TEXT,                 -- 撞到每分鐘上限後的冷卻到期時間（ISO）
  PRIMARY KEY (day, model)
);
