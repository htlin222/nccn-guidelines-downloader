+++
id           = "head-and-neck/ST-7"
gid          = "head-and-neck"
ref          = "ST-7"
page         = 135
title        = "AJCC TNM staging system for HPV-mediated (p16+) oropharyngeal cancer"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ORPHPV-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "p16_status"
type = "enum"
options = ["p16+", "p16-"]
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "epiglottis_extension"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_laterality"
type = "enum"
options = ["ipsilateral", "contralateral", "bilateral"]
[[variables]]
name = "positive_nodes"
type = "number"
[[variables]]
name = "cn_category"
type = "text"
[[variables]]
name = "pn_category"
type = "text"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-7, p135
- Table 4, American Joint Committee on Cancer (AJCC) TNM Staging System for HPV-Mediated (p16+) Oropharyngeal Cancer, 8th ed., 2017
- Not including p16-negative (p16-) cancers of the oropharynx
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- p16 status: ___ (p16_status)
- Greatest tumor dimension: ___ (tumor_size)
- Extension to lingual surface of epiglottis: ___ (epiglottis_extension)
- T category: ___ (t_category)
- Largest involved node, greatest dimension: ___ (node_size)
- Nodal laterality: ___ (node_laterality)
- Number of lymph nodes with metastasis on pathology: ___ (positive_nodes)
- Clinical N category: ___ (cn_category)
- Pathological N category: ___ (pn_category)
- M category: ___ (m_category)
- Prognostic stage group: ___ (stage_group)

# Primary tumor (T)

- T0, no primary identified
- T1, tumor 2 cm or smaller in greatest dimension
- T2, tumor larger than 2 cm but not larger than 4 cm in greatest dimension
- T3, either of
    - Tumor larger than 4 cm in greatest dimension
    - Extension to lingual surface of epiglottis
- T4, moderately advanced local disease
    - Tumor invades the larynx, extrinsic muscle of tongue, medial pterygoid, hard palate, or mandible or beyond
    - Mucosal extension to lingual surface of epiglottis from primary tumors of the base of the tongue and vallecula does not constitute invasion of the larynx

# Regional lymph nodes, clinical N (cN)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, one or more ipsilateral lymph nodes, none larger than 6 cm
- N2, contralateral or bilateral lymph nodes, none larger than 6 cm
- N3, lymph node(s) larger than 6 cm

# Regional lymph nodes, pathological N (pN)

- NX, regional lymph nodes cannot be assessed
- pN0, no regional lymph node metastasis
- pN1, metastasis in 4 or fewer lymph nodes
- pN2, metastasis in more than 4 lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Histologic grade (G)

- No grading system exists for HPV-mediated oropharyngeal tumors

# Clinical prognostic stage groups

- Stage I, T0, T1, T2 with N0, N1 and M0
- Stage II, either of
    - T0, T1, T2 with N2 and M0
    - T3 with N0, N1, N2 and M0
- Stage III, either of
    - T0, T1, T2, T3 with N3 and M0
    - T4 with N0, N1, N2, N3 and M0
- Stage IV, any T, any N and M1

# Pathological prognostic stage groups

- Stage I, T0, T1, T2 with N0, N1 and M0
- Stage II, either of
    - T0, T1, T2 with N2 and M0
    - T3, T4 with N0, N1 and M0
- Stage III, T3, T4 with N2 and M0
- Stage IV, any T, any N and M1
