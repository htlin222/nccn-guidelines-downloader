-- 門診核對清單（issue #4）。CREATE TABLE IF NOT EXISTS，理由同 marks/notify/api：
-- build_index.sh 開頭會 DROP pages，清單不能跟著被洗掉。
--
-- 單一真相在 git 的 cf/snippets/<gid>/<ref>.md，這裡是它的可查詢副本。
-- load_snippets.sh 把檔案載進來，方向永遠是 檔案 → D1，不會反過來。

CREATE TABLE IF NOT EXISTS snippets (
  gid     TEXT    NOT NULL,
  ref     TEXT    NOT NULL,
  page    INTEGER NOT NULL,
  title   TEXT    NOT NULL,
  kind    TEXT    NOT NULL,   -- decision | principles，由 ref 尾碼決定，不問模型
  body    TEXT    NOT NULL,   -- 清單本文，不含 frontmatter
  meta    TEXT    NOT NULL,   -- frontmatter 轉成的 JSON
  version TEXT    NOT NULL,   -- 產生當下的 NCCN 版本，過期判斷靠它
  review  TEXT,               -- NULL=未審 | ok | edited | rejected
  updated TEXT    NOT NULL,
  PRIMARY KEY (gid, ref)
) WITHOUT ROWID;

-- 版本過期掃描：WHERE gid=? AND version<>?
CREATE INDEX IF NOT EXISTS snippets_version ON snippets(gid, version);

-- 一個 snippet 在同一個軸上可以有多個值（BINV-12 同時涵蓋 HER2+ 與 TNBC）。
CREATE TABLE IF NOT EXISTS snippet_facets (
  gid   TEXT NOT NULL,
  ref   TEXT NOT NULL,
  axis  TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (gid, ref, axis, value)
) WITHOUT ROWID;

CREATE INDEX IF NOT EXISTS snippet_facets_lookup ON snippet_facets(axis, value);

-- 使用者打的字 → 正規值。手寫，不是生成的：字典錯了會變成靜默的檢索失效，
-- 那是這套東西唯一無法從錯誤訊息察覺的失敗模式。
CREATE TABLE IF NOT EXISTS facet_alias (
  axis  TEXT NOT NULL,
  alias TEXT NOT NULL,   -- 一律小寫比對
  value TEXT NOT NULL,
  PRIMARY KEY (axis, alias)
);
