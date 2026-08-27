+++
id           = "small_bowel/ST-1"
gid          = "small_bowel"
ref          = "ST-1"
page         = 33
title        = "AJCC TNM staging classification and prognostic stage groups for small intestine adenocarcinoma"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-1", "SBA-2", "SBA-4"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "t"
type = "text"
[[variables]]
name = "n"
type = "text"
[[variables]]
name = "m"
type = "text"
[[variables]]
name = "nodes_positive"
type = "number"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, ST-1, p33
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Small Intestine Adenocarcinoma, 8th ed., 2017
- Applies to adenocarcinoma of the small intestine
- Used with the permission of the American College of Surgeons, Chicago Illinois
- The original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Primary tumor ___ (t)
- Regional lymph nodes ___ (n)
- Number of positive regional lymph nodes ___ (nodes_positive)
- Distant metastasis ___ (m)
- AJCC prognostic stage group ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, high-grade dysplasia/carcinoma in situ
- T1, tumor invades the lamina propria or submucosa
    - T1a, tumor invades the lamina propria
    - T1b, tumor invades the submucosa
- T2, tumor invades the muscularis propria
- T3, tumor invades through the muscularis propria into the subserosa, or extends into nonperitonealized perimuscular tissue without serosal penetration
    - Nonperitonealized perimuscular tissue means mesentery or retroperitoneum
- T4, tumor perforates the visceral peritoneum or directly invades other organs or structures
    - Other loops of small intestine
    - Mesentery of adjacent loops of bowel
    - Abdominal wall by way of serosa
    - For duodenum only, invasion of pancreas or bile duct

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in one or two regional lymph nodes
- N2, metastasis in three or more regional lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis present

# AJCC prognostic stage groups

- Stage 0, Tis, N0, M0
- Stage I, T1-2, N0, M0
- Stage IIA, T3, N0, M0
- Stage IIB, T4, N0, M0
- Stage IIIA, any T, N1, M0
- Stage IIIB, any T, N2, M0
- Stage IV, any T, any N, M1
