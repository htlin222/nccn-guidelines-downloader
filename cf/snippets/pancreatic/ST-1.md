+++
id           = "pancreatic/ST-1"
gid          = "pancreatic"
ref          = "ST-1"
page         = 76
title        = "AJCC TNM staging and prognostic groups for pancreatic cancer"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-1", "PANC-2", "PANC-3", "PANC-9", "PANC-11"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "arterial_involvement"
type = "enum"
options = ["none", "celiac axis", "superior mesenteric artery", "common hepatic artery"]
[[variables]]
name = "node_count"
type = "number"
[[variables]]
name = "metastasis"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, ST-1, p76
- Table 1, definitions for T, N, M
- Table 2, AJCC prognostic groups
- American Joint Committee on Cancer (AJCC) TNM staging of pancreatic cancer, 8th ed., 2017
- Used with permission of the American College of Surgeons, Chicago, Illinois; original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Greatest tumor dimension ___ (tumor_size) cm
- Tumor involvement of celiac axis, superior mesenteric artery, and/or common hepatic artery ___ (arterial_involvement)
- Number of regional lymph nodes with metastasis ___ (node_count)
- Distant metastasis ___ (metastasis)
- T ___ (t_category)
- N ___ (n_category)
- M ___ (m_category)
- AJCC prognostic group ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ
    - Includes high-grade pancreatic intraepithelial neoplasia (PanIn-3)
    - Includes intraductal papillary mucinous neoplasm with high-grade dysplasia
    - Includes intraductal tubulopapillary neoplasm with high-grade dysplasia
    - Includes mucinous cystic neoplasm with high-grade dysplasia
- T1, tumor 2 cm or less in greatest dimension
    - T1a, tumor 0.5 cm or less in greatest dimension
    - T1b, tumor greater than 0.5 cm and less than 1 cm in greatest dimension
    - T1c, tumor 1 cm to 2 cm in greatest dimension
- T2, tumor greater than 2 cm and 4 cm or less in greatest dimension
- T3, tumor greater than 4 cm in greatest dimension
- T4, tumor involves the celiac axis, superior mesenteric artery, and/or common hepatic artery, regardless of size

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastases
- N1, metastasis in one to three regional lymph nodes
- N2, metastasis in four or more regional lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# AJCC prognostic groups

- Stage 0, Tis N0 M0
- Stage IA, T1 N0 M0
- Stage IB, T2 N0 M0
- Stage IIA, T3 N0 M0
- Stage IIB, T1, T2, or T3 with N1 M0
- Stage III
    - T1, T2, or T3 with N2 M0
    - T4 with any N, M0
- Stage IV, any T, any N, M1
