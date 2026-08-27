+++
id           = "head-and-neck/ST-2"
gid          = "head-and-neck"
ref          = "ST-2"
page         = 130
title        = "AJCC pathological N, distant metastasis, grade, and prognostic stage groups for the oral cavity"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ST-1", "OR-1"]

[facets]
disease   = "head-and-neck"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_number"
type = "enum"
options = ["single", "multiple", "none"]
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
name = "m_category"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-2, p130
- Table 1 continued, American Joint Committee on Cancer (AJCC) TNM Staging Classification for the Oral Cavity (including mucosa of lip), 8th ed., 2017
- Covers pathological N (pN), distant metastasis (M), histologic grade (G), and prognostic stage groups; primary tumor (T) and clinical N are on ST-1
- Does not apply to nonepithelial tumors such as those of lymphoid tissue, soft tissue, bone, and cartilage
- Does not apply to mucosal melanoma
- Does not apply to cutaneous squamous cell carcinoma of the vermilion lip
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- T category (ST-1): ___ (t_category)
- Largest involved node, greatest dimension: ___ (node_size)
- Number of involved nodes: ___ (node_number)
- Nodal laterality: ___ (node_laterality)
- Extranodal extension: ___ (ene)
- Pathological N category: ___ (pn_category)
- Level designation above (U) or below (L) the lower border of the cricoid: ___ (ul_designation)
- Distant metastasis: ___ (m_category)
- Histologic grade: ___ (grade)
- Prognostic stage group: ___ (stage_group)

# Regional lymph nodes, pathological N (pN)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in a single ipsilateral lymph node, 3 cm or smaller in greatest dimension, and ENE(-)
- N2, any of
    - N2a, either of
        - Metastasis in a single ipsilateral node 3 cm or smaller in greatest dimension, and ENE(+)
        - A single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension, and ENE(-)
    - N2b, metastases in multiple ipsilateral node(s), none larger than 6 cm in greatest dimension, and ENE(-)
    - N2c, metastases in bilateral or contralateral lymph node(s), none larger than 6 cm in greatest dimension, and ENE(-)
- N3, either of
    - N3a, metastasis in a lymph node larger than 6 cm in greatest dimension, and ENE(-)
    - N3b, any of
        - Metastasis in a single ipsilateral node larger than 3 cm in greatest dimension, and ENE(+)
        - Multiple ipsilateral, contralateral, or bilateral nodes, any with ENE(+)
        - A single contralateral node of any size, and ENE(+)
- A designation of U or L may be used for any N category, to indicate metastasis above the lower border of the cricoid (U) or below the lower border of the cricoid (L)
- Record clinical and pathological ENE as ENE(-) or ENE(+)

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Histologic grade (G)

- GX, cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated

# Prognostic stage groups

- Stage 0, Tis N0 M0
- Stage I, T1 N0 M0
- Stage II, T2 N0 M0
- Stage III, either of
    - T1, T2 with N1 M0
    - T3 with N0, N1 M0
- Stage IVA, any of
    - T1 N2 M0
    - T2 N2 M0
    - T3 N2 M0
    - T4a with N0, N1, N2 M0
- Stage IVB, either of
    - Any T with N3 M0
    - T4b with any N M0
- Stage IVC, any T any N M1
