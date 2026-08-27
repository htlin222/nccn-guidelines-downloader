+++
id           = "gist/ST-1"
gid          = "gist"
ref          = "ST-1"
page         = 23
title        = "AJCC 8th edition TNM definitions and stage groups for gastrointestinal stromal tumor"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-1"]

[facets]
disease   = "gist"
histology = "gist"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "mitotic_rate"
type = "enum"
options = ["low", "high"]
[[variables]]
name = "node_status"
type = "enum"
options = ["N0", "N1"]
[[variables]]
name = "met_status"
type = "enum"
options = ["M0", "M1"]
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, ST-1, p23
- American Joint Committee on Cancer (AJCC) Staging System for Gastrointestinal Stromal Tumor (8th ed, 2017)
- Two separate stage group tables, chosen by primary site
- Grading for GIST is dependent on mitotic rate

# Assessment

- Primary site ___ (primary_site)
- Greatest dimension ___ (tumor_size) cm
- Mitotic rate ___ (mitotic_rate)
- Regional lymph nodes ___ (node_status)
- Distant metastasis ___ (met_status)
- Stage group ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor 2 cm or less
- T2, tumor more than 2 cm but not more than 5 cm
- T3, tumor more than 5 cm but not more than 10 cm
- T4, tumor more than 10 cm in greatest dimension

# Regional lymph nodes (N)

- N0, no regional lymph node metastasis or unknown lymph node status
- N1, regional lymph node metastasis

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Mitotic rate

- Low, 5 or fewer mitoses per 5 mm2, or per 50 HPF
- High, over 5 mitoses per 5 mm2, or per 50 HPF

# Stage groups, gastric GIST

- This table is also to be used for omentum
- Stage IA
    - T1 or T2, N0, M0, low mitotic rate
- Stage IB
    - T3, N0, M0, low mitotic rate
- Stage II
    - T1, N0, M0, high mitotic rate
    - T2, N0, M0, high mitotic rate
    - T4, N0, M0, low mitotic rate
- Stage IIIA
    - T3, N0, M0, high mitotic rate
- Stage IIIB
    - T4, N0, M0, high mitotic rate
- Stage IV
    - Any T, N1, M0, any mitotic rate
    - Any T, any N, M1, any mitotic rate

# Stage groups, small intestinal GIST

- This table is also to be used for esophagus, colorectal, mesenteric, and peritoneal
- Stage I
    - T1 or T2, N0, M0, low mitotic rate
- Stage II
    - T3, N0, M0, low mitotic rate
- Stage IIIA
    - T1, N0, M0, high mitotic rate
    - T4, N0, M0, low mitotic rate
- Stage IIIB
    - T2, N0, M0, high mitotic rate
    - T3, N0, M0, high mitotic rate
    - T4, N0, M0, high mitotic rate
- Stage IV
    - Any T, N1, M0, any mitotic rate
    - Any T, any N, M1, any mitotic rate
