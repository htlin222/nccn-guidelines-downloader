+++
id           = "btc/ST-1"
gid          = "btc"
ref          = "ST-1"
page         = 42
title        = "AJCC 8th edition TNM staging and prognostic groups for gallbladder carcinoma"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["GALL-1", "GALL-2", "GALL-3"]

[facets]
disease   = "btc"
stage     = "any"
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "t_category"
type = "text"
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

- NCCN Biliary Tract Cancers v1.2026, ST-1, p42
- American Joint Committee on Cancer (AJCC) TNM Staging for Gallbladder Carcinoma, 8th ed., 2017
- Table 3, definitions for T, N, M; Table 4, AJCC prognostic groups
- Used with permission of the American College of Surgeons, Chicago, Illinois
- Original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing
- Table is continued on the following page

# Assessment

- ___ (age) yo, gallbladder carcinoma
- T ___ (t_category)
- N ___ (n_category)
    - Regional lymph nodes with metastasis ___ (positive_nodes)
- M ___ (m_category)
- Histologic grade ___ (grade)
- AJCC prognostic group ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ
- T1, tumor invades lamina propria or muscular layer
    - T1a, tumor invades lamina propria
    - T1b, tumor invades muscle layer
- T2, tumor invades the perimuscular connective tissue
    - T2a, on the peritoneal side, without involvement of the serosa (visceral peritoneum)
    - T2b, on the hepatic side, with no extension into the liver
- T3, tumor perforates the serosa (visceral peritoneum)
    - And/or directly invades the liver
    - And/or directly invades one other adjacent organ or structure
        - Such as the stomach, duodenum, colon, pancreas, omentum, or extrahepatic bile ducts
- T4, tumor invades main portal vein or hepatic artery
    - Or invades two or more extrahepatic organs or structures

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastases to one to three regional lymph nodes
- N2, metastases to four or more regional lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# AJCC prognostic groups

- Stage 0, Tis N0 M0
- Stage I, T1 N0 M0
- Stage IIA, T2a N0 M0
- Stage IIB, T2b N0 M0
- Stage IIIA, T3 N0 M0
- Stage IIIB, T1-3 N1 M0
- Stage IVA, T4 N0-1 M0
- Stage IVB, any T N2 M0
- Stage IVB, any T any N M1

# Histologic grade (G)

- GX, grade cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated
