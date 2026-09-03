-- 綁 email 的 /api/v1 金鑰（issue #11）。跟 api.sql 的 api_keys 並存，不取代它：
-- 已經裝在別人機器上的舊 .skill 不該因為這次改動安靜地死掉。
--
-- 這張表**刻意沒有 key 欄位**。金鑰是純函式的產物：
--
--   key = "nccn_" + b64url(HMAC-SHA256(API_KEY_SECRET, `${email}:${key_version}`))
--
-- 鑄造端與驗證端各自重算得到同一個答案，所以兩邊都不需要存。沒存下來的東西不會
-- 外洩，也不需要為它想輪替以外的保護。
--
-- 撤銷 = key_version + 1。只影響那一個 email，其他人不受影響；換掉
-- API_KEY_SECRET 才是「一次撤銷所有人」。
--
-- key_version 從 1 起跳是刻意的：驗證時遇到查無此人的 email，一律拿 version 0
-- 去算 HMAC 再比對，讓「這個 email 不存在」與「金鑰錯」走完全一樣的路徑、回完全
-- 一樣的東西。/api/v1 是 Access Bypass 的公開路徑，回應有差別就等於送出成員名單。
--
-- 這支只需要在第一次部署時跑一次：
--   wrangler d1 execute nccn-search --remote --file=sql/apiuser.sql

CREATE TABLE IF NOT EXISTS api_users (
  email       TEXT PRIMARY KEY,   -- 一律小寫、去空白後存
  key_version INTEGER NOT NULL DEFAULT 1,
  created     TEXT,
  updated     TEXT,               -- 上次輪替的時間
  last_used   TEXT,
  calls       INTEGER NOT NULL DEFAULT 0
);
