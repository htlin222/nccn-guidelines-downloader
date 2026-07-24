DROP TABLE IF EXISTS pages;
CREATE VIRTUAL TABLE pages USING fts5(
  gid UNINDEXED,
  page UNINDEXED,
  name UNINDEXED,
  cat UNINDEXED,
  body,
  tokenize = 'porter unicode61'
);
