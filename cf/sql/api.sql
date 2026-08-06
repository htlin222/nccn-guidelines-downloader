-- Token API：給 Claude Code skill 用的金鑰，以及可用主鍵取用的逐頁全文。
-- 跟 insights.sql / marks.sql / notify.sql 一樣是 CREATE TABLE IF NOT EXISTS，
-- 刻意不併進 schema.sql——那支開頭就 DROP TABLE pages，一次索引重建會把已發出去
-- 的金鑰全部洗掉。

-- 明文金鑰永不落地，只存 sha256。prefix 是明文的前 12 碼，純粹讓設定面板列出來
-- 時分得出是哪一把（撤銷前要能認人）。revoked 非 NULL 即失效。
CREATE TABLE IF NOT EXISTS api_keys (
  id INTEGER PRIMARY KEY,
  hash TEXT UNIQUE NOT NULL,
  prefix TEXT NOT NULL,
  label TEXT NOT NULL,
  created TEXT NOT NULL,
  last_used TEXT,
  calls INTEGER NOT NULL DEFAULT 0,
  revoked TEXT
);

-- pages 是 FTS5 虛擬表，gid/page 都是 UNINDEXED，所以 WHERE gid=? AND page=? 會
-- 全表掃描（實測 10,670 列 / rows_read=10670）。單頁取用打不起這個成本，因此把
-- 同一份文字再存一份到有主鍵的普通表：rows_read 從 10,670 降到 1。
-- build_index.sh 必須跟 pages 同一趟 staging→promote，兩張表要同時換版，否則會
-- 出現「搜尋是新版、單頁全文是舊版」的錯位。
CREATE TABLE IF NOT EXISTS page_text (
  gid TEXT NOT NULL,
  page INTEGER NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (gid, page)
) WITHOUT ROWID;
