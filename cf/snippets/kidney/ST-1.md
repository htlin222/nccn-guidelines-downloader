+++
id           = "kidney/ST-1"
gid          = "kidney"
ref          = "ST-1"
page         = 35
title        = "AJCC TNM staging system, prognostic groups, and histologic grade for kidney cancer"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["KID-1", "KID-2", "KID-3"]

[facets]
disease   = "kidney"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

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
name = "grade"
type = "text"
[[variables]]
name = "prognostic_group"
type = "text"
+++

# Source

- NCCN Kidney Cancer v1.2027, ST-1, p35
- Table 1, American Joint Committee on Cancer (AJCC) TNM Staging System for Kidney Cancer, 8th ed., 2017
- Table 2, AJCC Prognostic Groups
- Table 3, Histologic Grade (G)
- Used with the permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- T ___ (t_category)
- N ___ (n_category)
- M ___ (m_category)
- Histologic grade ___ (grade)
- AJCC prognostic group ___ (prognostic_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor 7 cm or less in greatest dimension, limited to the kidney
    - T1a, tumor 4 cm or less in greatest dimension, limited to the kidney
    - T1b, tumor greater than 4 cm but 7 cm or less in greatest dimension, limited to the kidney
- T2, tumor greater than 7 cm in greatest dimension, limited to the kidney
    - T2a, tumor greater than 7 cm but 10 cm or less in greatest dimension, limited to the kidney
    - T2b, tumor greater than 10 cm, limited to the kidney
- T3, tumor extends into major veins or perinephric tissues, but not into the ipsilateral adrenal gland and not beyond Gerota's fascia
    - T3a, tumor extends into the renal vein or its segmental branches, or invades the pelvicalyceal system, or invades perirenal and/or renal sinus fat but not beyond Gerota's fascia
    - T3b, tumor extends into the vena cava below the diaphragm
    - T3c, tumor extends into the vena cava above the diaphragm, or invades the wall of the vena cava
- T4, tumor invades beyond Gerota's fascia, including contiguous extension into the ipsilateral adrenal gland

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in regional lymph node(s)

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis

# Histologic grade (G)

- GX, grade cannot be assessed
- G1, nucleoli absent or inconspicuous and basophilic at 400x magnification
- G2, nucleoli conspicuous and eosinophilic at 400x magnification, visible but not prominent at 100x magnification
- G3, nucleoli conspicuous and eosinophilic at 100x magnification
- G4, any of the following
    - Marked nuclear pleomorphism
    - Multinucleate giant cells
    - Rhabdoid differentiation
    - Sarcomatoid differentiation

# AJCC prognostic groups

- Stage I, T1 N0 M0
- Stage II, T2 N0 M0
- Stage III
    - T1-T2 N1 M0
    - T3 NX,N0-N1 M0
- Stage IV
    - T4 Any N M0
    - Any T Any N M1
