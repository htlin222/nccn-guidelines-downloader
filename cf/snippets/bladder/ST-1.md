+++
id           = "bladder/ST-1"
gid          = "bladder"
ref          = "ST-1"
page         = 64
title        = "AJCC TNM staging system and prognostic groups for bladder cancer"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-1", "BL-6", "BL-8", "BL-9", "BL-10"]

[facets]
disease   = "bladder"
stage     = ["0", "I", "II", "III", "IV"]
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

- NCCN Bladder Cancer v2.2026, ST-1, p64
- Table 1, American Joint Committee on Cancer (AJCC) TNM Staging System for Bladder Cancer, 8th ed., 2017
- Table 2, AJCC Prognostic Groups
- Table continues on the next staging page
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- T ___ (t_category)
- N ___ (n_category)
- M ___ (m_category)
- Histologic grade ___ (grade)
- AJCC prognostic group ___ (prognostic_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Ta, noninvasive papillary carcinoma
- CIS (Tis), urothelial carcinoma in situ, "flat tumor"
- T1, tumor invades lamina propria (subepithelial connective tissue)
- T2, tumor invades muscularis propria
    - pT2a, tumor invades superficial muscularis propria (inner half)
    - pT2b, tumor invades deep muscularis propria (outer half)
- T3, tumor invades perivesical tissue
    - pT3a, microscopically
    - pT3b, macroscopically (extravesical mass)
- T4, extravesical tumor directly invades any of the following
    - Prostatic stroma
    - Seminal vesicles
    - Uterus
    - Vagina
    - Pelvic wall
    - Abdominal wall
- T4a, extravesical tumor invades prostatic stroma, seminal vesicles, uterus, vagina
- T4b, extravesical tumor invades pelvic wall, abdominal wall

# Regional lymph nodes (N)

- NX, lymph nodes cannot be assessed
- N0, no lymph node metastasis
- N1, single regional lymph node metastasis in the true pelvis
    - True pelvis nodes are perivesical, obturator, internal and external iliac, or sacral
- N2, multiple regional lymph node metastasis in the true pelvis
    - True pelvis nodes are perivesical, obturator, internal and external iliac, or sacral
- N3, lymph node metastasis to the common iliac lymph nodes

# Distant metastasis (M)

- M0, no distant metastasis
- M1, distant metastasis
    - M1a, distant metastasis limited to lymph nodes beyond the common iliacs
    - M1b, non-lymph-node distant metastases

# Histologic grade (G)

- For urothelial histologies, a low- and high-grade designation is used, to match the current World Health Organization/International Society of Urological Pathology (WHO/ISUP) recommended grading system
    - LG, low-grade
    - HG, high-grade
- For squamous cell carcinoma and adenocarcinoma, the following grading schema is recommended
    - GX, grade cannot be assessed
    - G1, well differentiated
    - G2, moderately differentiated
    - G3, poorly differentiated

# AJCC prognostic groups

- Stage 0a, Ta N0 M0
- Stage 0is, CIS (Tis) N0 M0
- Stage I, T1 N0 M0
- Stage II
    - T2a N0 M0
    - T2b N0 M0
- Stage IIIA
    - T3a N0 M0
    - T3b N0 M0
    - T4a N0 M0
    - T1-T4a N1 M0
- Stage IIIB, T1-T4a N2,N3 M0
- Stage IVA
    - T4b Any N M0
    - Any T Any N M1a
- Stage IVB, Any T Any N M1b
