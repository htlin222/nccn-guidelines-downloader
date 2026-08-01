-- 通知中心。跟 sql/marks.sql、sql/insights.sql 一樣刻意跟 schema.sql 分開：
-- schema.sql 會 DROP TABLE pages，是 build_index.sh 每次重建全文索引時跑的，
-- 通知歷史（尤其是還沒讀的警告）不能跟著被洗掉。
-- 這支只需要在第一次部署時跑一次：
--   wrangler d1 execute nccn-search --remote --file=sql/notify.sql

CREATE TABLE IF NOT EXISTS notifications (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  kind    TEXT NOT NULL,   -- cron | version | cookie | ci
  level   TEXT NOT NULL,   -- info | warn | error
  title   TEXT NOT NULL,
  body    TEXT,            -- JSON：ids、errors、舊新版本號…
  created TEXT NOT NULL,   -- ISO8601
  read_at TEXT             -- NULL = 未讀
);

-- 清單一律照時間倒序取前 N 筆。
CREATE INDEX IF NOT EXISTS notif_created ON notifications(created DESC);
-- 未讀數是每次開首頁都要算的，別讓它掃全表。
CREATE INDEX IF NOT EXISTS notif_unread ON notifications(read_at, created DESC);
-- 同一則還沒讀的警告重複發生時是「更新時間」而不是「再插一筆」（見 lib/notify.js
-- 的 notify()），那條 UPDATE 靠這個索引定位。
CREATE INDEX IF NOT EXISTS notif_dedup ON notifications(kind, title, read_at);
