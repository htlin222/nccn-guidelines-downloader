+++
id           = "esophageal/ST-1"
gid          = "esophageal"
ref          = "ST-1"
page         = 84
title        = "AJCC 8th edition T, N, M, grade, and squamous location definitions for esophagus and esophagogastric junction carcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-1"]

[facets]
disease   = "esophageal"
histology = ["squamous", "adenocarcinoma"]
timepoint = "staging"

[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "nodes_positive"
type = "number"
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "m_category"
type = "enum"
options = ["M0", "M1"]
[[variables]]
name = "grade"
type = "enum"
options = ["GX", "G1", "G2", "G3"]
[[variables]]
name = "scc_location"
type = "enum"
options = ["X", "Upper", "Middle", "Lower"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ST-1, p84
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Carcinoma of the Esophagus and Esophagogastric Junction, 8th edition, 2017
- Table 1, definitions for T, N, M
- Applies to both squamous cell carcinoma and adenocarcinoma
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- T category ___ (t_category)
- Regional lymph nodes with metastasis ___ (nodes_positive)
- N category ___ (n_category)
- M category ___ (m_category)
- Histologic grade ___ (grade)
- Squamous cell carcinoma location ___ (scc_location)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, high-grade dysplasia
    - Defined as malignant cells confined to the epithelium by the basement membrane
- T1, tumor invades the lamina propria, muscularis mucosae, or submucosa
    - T1a, tumor invades the lamina propria or muscularis mucosae
    - T1b, tumor invades the submucosa
- T2, tumor invades the muscularis propria
- T3, tumor invades adventitia
- T4, tumor invades adjacent structures
    - T4a, tumor invades the pleura, pericardium, azygos vein, diaphragm, or peritoneum
    - T4b, tumor invades other adjacent structures, such as the aorta, vertebral body, or airway

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in one or two regional lymph nodes
- N2, metastasis in three to six regional lymph nodes
- N3, metastasis in seven or more regional lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Histologic grade (G)

- GX, grade cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated, undifferentiated

# Squamous cell carcinoma location

- Location is defined by the position of the epicenter of the tumor in the esophagus
- X, location unknown
- Upper, cervical esophagus to lower border of azygos vein
- Middle, lower border of azygos vein to lower border of inferior pulmonary vein
- Lower, lower border of inferior pulmonary vein to stomach, including gastroesophageal junction

# Next

- Definitions table is continued on the following staging page
