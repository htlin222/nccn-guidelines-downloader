+++
id           = "hcc/ST-1"
gid          = "hcc"
ref          = "ST-1"
page         = 30
title        = "AJCC TNM staging and prognostic groups for hepatocellular cancer"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["ST-2", "HCC-1", "HCC-2"]

[facets]
disease   = "hcc"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "tumor_count"
type = "text"
[[variables]]
name = "largest_size"
type = "number"
[[variables]]
name = "vascular_invasion"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "major_vein"
type = "enum"
options = ["portal", "hepatic", "none", "unknown"]
[[variables]]
name = "adjacent_organ"
type = "enum"
options = ["present", "absent", "unknown"]
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
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "fibrosis"
type = "text"
+++

# Source

- NCCN Hepatocellular Carcinoma v1.2026, ST-1, p30
- American Joint Committee on Cancer (AJCC) TNM staging for hepatocellular cancer, 8th ed., 2017
- Table 1 defines T, N, M; Table 2 gives the prognostic groups
- Used with permission of the American College of Surgeons; original source is the AJCC Cancer Staging Manual, Eighth Edition (2017)
- Table continues on ST-2

# Assessment

- ___ (tumor_count) tumor(s)
- Largest tumor ___ (largest_size) cm
- Vascular invasion ___ (vascular_invasion)
- Major branch of portal or hepatic vein involved ___ (major_vein)
- Direct invasion of adjacent organs, or perforation of visceral peritoneum ___ (adjacent_organ)
- T ___ (t_category) / N ___ (n_category) / M ___ (m_category)
- Prognostic group ___ (stage_group)
- Histologic grade ___ (grade)
- Fibrosis score ___ (fibrosis)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, solitary tumor 2 cm or smaller, or larger than 2 cm without vascular invasion
    - T1a, solitary tumor 2 cm or smaller
    - T1b, solitary tumor larger than 2 cm without vascular invasion
- T2, solitary tumor larger than 2 cm with vascular invasion
    - Or multiple tumors, none larger than 5 cm
- T3, multiple tumors, at least one of which is larger than 5 cm
- T4, single tumor or multiple tumors of any size involving a major branch of the portal vein or hepatic vein
    - Or tumor(s) with direct invasion of adjacent organs other than the gallbladder
    - Or tumor(s) with perforation of visceral peritoneum

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, regional lymph node metastasis

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# AJCC prognostic groups

- Stage IA, T1a N0 M0
- Stage IB, T1b N0 M0
- Stage II, T2 N0 M0
- Stage IIIA, T3 N0 M0
- Stage IIIB, T4 N0 M0
- Stage IVA, any T N1 M0
- Stage IVB, any T any N M1

# Histologic grade (G)

- GX, grade cannot be accessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated
- G4, undifferentiated

# Fibrosis score (F)

- The fibrosis score as defined by Ishak is recommended because of its prognostic value in overall survival
- The scoring system uses a 0-6 scale
- F0, fibrosis score 0-4 (none to moderate fibrosis)
- F1, fibrosis score 5-6 (severe fibrosis or cirrhosis)

# Next

- Staging table continued, go to ST-2
