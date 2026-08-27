+++
id           = "head-and-neck/ST-5"
gid          = "head-and-neck"
ref          = "ST-5"
page         = 133
title        = "AJCC clinical N staging for oropharynx (p16-) and hypopharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ST-1", "ORPH-1", "HYPO-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "primary_site"
type = "enum"
options = ["oropharynx p16-negative", "hypopharynx"]
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_number"
type = "text"
[[variables]]
name = "node_laterality"
type = "enum"
options = ["ipsilateral", "bilateral", "contralateral"]
[[variables]]
name = "ene"
type = "enum"
options = ["ENE(-)", "ENE(+)", "cannot be assessed"]
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "ul_designation"
type = "enum"
options = ["U", "L", "not recorded"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-5, p133
- Table 3, continued, American Joint Committee on Cancer (AJCC) TNM Staging System for the Oropharynx (p16-) and Hypopharynx, 8th ed., 2017
- Regional lymph nodes (N), clinical N (cN), only
- Does not apply to p16-positive (p16+) oropharyngeal cancers
- Does not apply to nasopharyngeal cancer
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Primary site: ___ (primary_site)
- Largest involved node, greatest dimension: ___ (node_size)
- Number of involved nodes, single or multiple: ___ (node_number)
- Nodal laterality: ___ (node_laterality)
- Extranodal extension, including whether clinically overt: ___ (ene)
- Clinical N category: ___ (n_category)
- Level designation above (U) or below (L) the lower border of the cricoid: ___ (ul_designation)

# Regional lymph nodes, clinical N (cN)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in a single ipsilateral lymph node, 3 cm or smaller in greatest dimension, and ENE(-)
- N2, any of
    - N2a, metastasis in a single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension, and ENE(-)
    - N2b, metastases in multiple ipsilateral lymph nodes, none larger than 6 cm in greatest dimension, and ENE(-)
    - N2c, metastases in bilateral or contralateral lymph nodes, none larger than 6 cm in greatest dimension, and ENE(-)
- N3, either of
    - N3a, metastasis in a lymph node larger than 6 cm in greatest dimension, and ENE(-)
    - N3b, metastasis in any node(s) and clinically overt ENE(+)
- A designation of U or L may be used for any N category, to indicate metastasis above the lower border of the cricoid (U) or below the lower border of the cricoid (L)
- Record clinical and pathological ENE as ENE(-) or ENE(+)
