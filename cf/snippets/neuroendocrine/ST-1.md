+++
id           = "neuroendocrine/ST-1"
gid          = "neuroendocrine"
ref          = "ST-1"
page         = 125
title        = "AJCC TNM staging of well-differentiated neuroendocrine tumors of the jejunum and ileum"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["NET-13"]

[facets]
disease   = "neuroendocrine"
histology = "neuroendocrine"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "enum"
options = ["jejunum", "ileum"]
[[variables]]
name = "grade"
type = "enum"
options = ["G1", "G2", "G3"]
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "deepest_invasion"
type = "text"
[[variables]]
name = "tumor_number"
type = "text"
[[variables]]
name = "nodes_involved"
type = "text"
[[variables]]
name = "mesenteric_mass"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
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

- NCCN Neuroendocrine and Adrenal Tumors v1.2026, ST-1, p125
- American Joint Committee on Cancer (AJCC) TNM Staging System, Version 9, 2023
- Applies to well-differentiated neuroendocrine tumors of the jejunum and ileum
- Applies to NET G1, G2, and G3
- Table continued on the following page

# Assessment

- ___ (age) yo, neuroendocrine tumor of the ___ (primary_site)
- Well-differentiated, grade ___ (grade)
- Greatest dimension ___ (tumor_size)
- Deepest layer invaded ___ (deepest_invasion)
- Number of tumors ___ (tumor_number)
- Regional lymph nodes involved ___ (nodes_involved)
- Mesenteric mass size ___ (mesenteric_mass)
- Sites of distant metastasis ___ (met_sites)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor invades mucosa or submucosa, and ≤1 cm in greatest dimension
- T2, tumor invades muscularis propria or >1 cm in greatest dimension
- T3, tumor invades through the muscularis propria into subserosal tissue without penetration of overlying serosa
- T4, tumor invades visceral peritoneum (serosal) or other organs or adjacent structures
- Multiple tumors should be designated as such
    - Use the largest tumor to assign the T category
    - Use T(#), e.g., pT3(4) N0 M0
    - Or use the m suffix, T(m), e.g., pT3(m) N0 M0

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no tumor involvement of regional lymph node(s)
- N1, tumor involvement or less than 12 regional lymph node(s)
- N2, tumor involvement of large mesenteric masses (>2 cm) and/or extensive nodal deposits (12 or greater)
    - Especially those that encase the superior mesenteric vessels
- Mesenteric masses ≤2 cm
    - State in the pathology report as being present
    - Collected by registrars, but do not affect stage

# Distant metastasis (M)

- cM0, no distant metastasis
- cM1, distant metastasis
    - cM1a, metastasis confined to liver
    - cM1b, metastases in at least one extrahepatic site, e.g., lung, ovary, nonregional lymph node, peritoneum, bone
    - cM1c, both hepatic and extrahepatic metastases
- pM1, microscopic confirmation of distant metastasis
    - pM1a, microscopic confirmation of metastasis confined to liver
    - pM1b, microscopic confirmation of metastases in at least one extrahepatic site, e.g., lung, ovary, nonregional lymph node, peritoneum, bone
    - pM1c, microscopic confirmation of both hepatic and extrahepatic metastases

# AJCC prognostic stage groups

- Stage I, T1 N0 M0
- Stage II, T2 or T3, N0 M0
- Stage III
    - T4 N0 M0
    - Any T, N1 or N2, M0
- Stage IV, Any T, Any N, M1

# Assigned stage

- T ___ (t_category)
- N ___ (n_category)
- M ___ (m_category)
- Stage group ___ (stage_group)
