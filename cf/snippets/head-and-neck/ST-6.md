+++
id           = "head-and-neck/ST-6"
gid          = "head-and-neck"
ref          = "ST-6"
page         = 134
title        = "AJCC pathological N, M, histologic grade, and prognostic stage groups for oropharynx (p16-) and hypopharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ST-4", "ST-5"]

[facets]
disease   = "head-and-neck"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "site"
type = "enum"
options = ["oropharynx p16-negative", "hypopharynx"]
[[variables]]
name = "node_count"
type = "text"
[[variables]]
name = "node_size"
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
name = "pn_category"
type = "text"
[[variables]]
name = "ul_designation"
type = "enum"
options = ["U", "L", "not recorded"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "m_category"
type = "enum"
options = ["M0", "M1"]
[[variables]]
name = "grade"
type = "enum"
options = ["GX", "G1", "G2", "G3", "G4"]
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-6, p134
- Table 3 continued, American Joint Committee on Cancer (AJCC) TNM Staging System for the Oropharynx (p16-) and Hypopharynx, 8th ed., 2017
- Not included: p16-positive (p16+) oropharyngeal cancers
- Not included: nasopharyngeal cancer
- Pathological N (pN) applies to the oropharynx (p16-) and hypopharynx
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Site: ___ (site)
- Number of involved nodes: ___ (node_count)
- Largest involved node, greatest dimension: ___ (node_size)
- Nodal laterality: ___ (node_laterality)
- Extranodal extension: ___ (ene)
    - Record clinical and pathological ENE as ENE(-) or ENE(+)
- pN category: ___ (pn_category)
- Designation above (U) or below (L) the lower border of the cricoid: ___ (ul_designation)
    - May be used for any N category
- T category: ___ (t_category)
- M category: ___ (m_category)
- Histologic grade: ___ (grade)
- Prognostic stage group: ___ (stage_group)

# Regional lymph nodes, pathological N (pN)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in a single ipsilateral lymph node, 3 cm or smaller in greatest dimension, and ENE(-)
- N2, any of
    - N2a, either of
        - Metastasis in a single ipsilateral node, 3 cm or smaller in greatest dimension, and ENE(+)
        - Metastasis in a single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension, and ENE(-)
    - N2b, metastases in multiple ipsilateral nodes, none larger than 6 cm in greatest dimension, and ENE(-)
    - N2c, metastases in bilateral or contralateral lymph node(s), none larger than 6 cm in greatest dimension, and ENE(-)
- N3, either of
    - N3a, metastasis in a lymph node larger than 6 cm in greatest dimension, and ENE(-)
    - N3b, any of
        - Metastasis in a single ipsilateral node larger than 3 cm in greatest dimension, and ENE(+)
        - Metastases in multiple ipsilateral, contralateral, or bilateral nodes, any with ENE(+)
        - A single contralateral node of any size, and ENE(+)

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Histologic grade (G)

- GX, grade cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated
- G4, undifferentiated

# Prognostic stage groups

- Stage 0, Tis N0 M0
- Stage I, T1 N0 M0
- Stage II, T2 N0 M0
- Stage III, any of
    - T3 N0 M0
    - T1 N1 M0
    - T2 N1 M0
    - T3 N1 M0
- Stage IVA, any of
    - T1 N2 M0
    - T2 N2 M0
    - T3 N2 M0
    - T4a N0 M0, T4a N1 M0, or T4a N2 M0
- Stage IVB, either of
    - T4b any N M0
    - Any T N3 M0
- Stage IVC, any T any N M1
