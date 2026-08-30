-- 門診當下對核對清單做的修改。
--
-- 為什麼是獨立一張表，而不是直接改 snippets.body：
--
-- 這整套東西的方向是「檔案 → D1」，git 裡的 snippets/<gid>/<ref>.md 才是單一
-- 真相，D1 是可查詢副本。load_snippets.sh 每次都用 INSERT OR REPLACE 重寫
-- snippets.body，所以直接改那一欄的話，下一次載入就把你的修改無聲地蓋掉——
-- 而「無聲」是最糟的部分：你不會收到任何提示，只會在某天發現改過的東西變回去了。
--
-- 所以修改存在這裡，load_snippets.sh 從不碰它，讀取時疊在生成內容之上。
-- 跟 snippets.review 同一個道理：人放進去的東西，重載不該抹掉。
--
-- 這支只需要在第一次部署時跑一次：
--   wrangler d1 execute nccn-search --remote --file=sql/edits.sql

CREATE TABLE IF NOT EXISTS snippet_edits (
  gid       TEXT NOT NULL,
  ref       TEXT NOT NULL,
  body      TEXT NOT NULL,  -- 修改後的全文，取代生成的 body
  -- 編輯當下那份生成內容的 sha256。用途是偵測「你改的是舊版」：重新生成之後
  -- base 對不上，讀取時就會標出來，而不是讓一份針對舊版寫的修改安靜地擋住新版。
  base_hash TEXT,
  editor    TEXT,           -- Cloudflare Access 的 email
  updated   TEXT,
  PRIMARY KEY (gid, ref)
);
