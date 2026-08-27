+++
id           = "ampullary/ST-1"
gid          = "ampullary"
ref          = "ST-1"
page         = 50
title        = "AJCC 8th edition TNM staging, prognostic groups, and histologic grade for ampulla of Vater"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-1", "AMP-3", "AMP-4", "AMP-6"]

[facets]
disease   = "ampullary"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "pancreatic_extension"
type = "number"
[[variables]]
name = "arterial_involvement"
type = "enum"
options = ["none", "celiac axis", "superior mesenteric artery", "common hepatic artery"]
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "positive_nodes"
type = "number"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "grade"
type = "enum"
options = ["GX", "G1", "G2", "G3"]
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, ST-1, p50
- American Joint Committee on Cancer (AJCC) TNM staging of ampulla of Vater, 8th ed., 2017
- Table 1, definitions for T, N, M
- Table 2, AJCC prognostic groups
- Table 3, histologic grade
- Used with permission of the American College of Surgeons, Chicago, Illinois
- Original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ampulla of Vater
- T ___ (t_category)
    - Extension into the pancreas ___ (pancreatic_extension) cm
    - Involvement of celiac axis, superior mesenteric artery, and/or common hepatic artery ___ (arterial_involvement)
- N ___ (n_category)
    - Regional lymph nodes with metastasis ___ (positive_nodes)
- M ___ (m_category)
- Histologic grade ___ (grade)
- AJCC prognostic group ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ
- T1, tumor limited to ampulla of Vater or sphincter of Oddi, or tumor invades beyond the sphincter of Oddi (perisphincteric invasion) and/or into the duodenal submucosa
    - T1a, tumor limited to ampulla of Vater or sphincter of Oddi
    - T1b, tumor invades beyond the sphincter of Oddi (perisphincteric invasion) and/or into the duodenal submucosa
- T2, tumor invades into the muscularis propria of the duodenum
- T3, tumor directly invades the pancreas (up to 0.5 cm), or tumor extends more than 0.5 cm into the pancreas, or extends into peripancreatic or periduodenal tissue or duodenal serosa, without involvement of the celiac axis or superior mesenteric artery
    - T3a, tumor directly invades pancreas (up to 0.5 cm)
    - T3b, tumor extends more than 0.5 cm into the pancreas
        - Or extends into peripancreatic tissue
        - Or extends into periduodenal tissue
        - Or extends into duodenal serosa
        - Without involvement of the celiac axis or superior mesenteric artery
- T4, tumor involves the celiac axis, superior mesenteric artery, and/or common hepatic artery, irrespective of size

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis to one to three regional lymph nodes
- N2, metastasis to four or more regional lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# AJCC prognostic groups

- Stage 0, Tis N0 M0
- Stage IA, T1a N0 M0
- Stage IB, T1b or T2, N0 M0
- Stage IIA, T3a N0 M0
- Stage IIB, T3b N0 M0
- Stage IIIA, T1a, T1b, T2, T3a, or T3b, with N1 M0
- Stage IIIB
    - T4, any N, M0
    - Any T, N2, M0
- Stage IV, any T, any N, M1

# Histologic grade (G)

- GX, grade cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated
