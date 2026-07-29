-- 書籤（逐頁）與星號（整份收藏）。
-- 跟 sql/insights.sql 一樣刻意跟 schema.sql 分開：schema.sql 會 DROP TABLE pages，
-- 是 build_index.sh 每次重建全文索引時跑的，使用者自己收的東西不能跟著被洗掉。
-- 這支只需要在第一次部署時跑一次：
--   wrangler d1 execute nccn-search --remote --file=sql/marks.sql

-- 一頁一則：再按一次書籤鈕就是移除，所以 (gid, page) 當主鍵而不是流水號。
CREATE TABLE IF NOT EXISTS bookmarks (
  gid     TEXT    NOT NULL,
  page    INTEGER NOT NULL,
  label   TEXT,             -- 加入當下自動抓的 TOC 章節名
  note    TEXT,             -- 使用者自己打的備註
  created TEXT,
  PRIMARY KEY (gid, page)
);

CREATE TABLE IF NOT EXISTS stars (
  gid     TEXT PRIMARY KEY,
  created TEXT
);
