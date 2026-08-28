+++
id           = "penile/ST-1"
gid          = "penile"
ref          = "ST-1"
page         = 26
title        = "AJCC TNM staging system and stage groups for penile cancer"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-1", "PN-2", "PN-3", "PN-4"]

[facets]
disease   = "penile"
histology = "squamous"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "site"
type = "enum"
options = ["glans", "foreskin", "shaft"]
[[variables]]
name = "lvi"
type = "text"
[[variables]]
name = "pni"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "urethra"
type = "text"
[[variables]]
name = "inguinal_nodes"
type = "text"
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
name = "stage_group"
type = "text"
+++

# Source

- NCCN Penile Cancer v2.2026, ST-1, p26
- American Joint Committee on Cancer (AJCC) TNM Staging System for Penile Cancer, 8th ed., 2017
- Table 1 defines T, N, M; Table 2 gives the AJCC anatomic stage / prognostic groups
- Regional lymph nodes have separate clinical (cN) and pathologic (pN) definitions
- Used with the permission of the American College of Surgeons; the original and primary source is the AJCC Cancer Staging Manual, Eighth Edition (2017)

# Assessment

- Primary tumor site ___ (site)
- Lymphovascular invasion ___ (lvi)
- Perineural invasion ___ (pni)
- Grade, and whether high grade (i.e., grade 3 or sarcomatoid) ___ (grade)
- Urethral invasion ___ (urethra)
- Inguinal lymph nodes on examination ___ (inguinal_nodes)
- T ___ (t) / N ___ (n) / M ___ (m)
- Stage group ___ (stage_group)

# T, primary tumor

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ (penile intraepithelial neoplasia [PeIN])
- Ta, noninvasive localized squamous cell carcinoma
- T1, by site of the primary
    - Glans, tumor invades lamina propria
    - Foreskin, tumor invades dermis, lamina propria, or dartos fascia
    - Shaft, tumor invades connective tissue between epidermis and corpora regardless of location
    - All sites, with or without lymphovascular invasion or perineural invasion, and is or is not high grade
    - T1a, tumor is without lymphovascular invasion or perineural invasion, and is not high grade (i.e., grade 3 or sarcomatoid)
    - T1b, tumor exhibits lymphovascular invasion and/or perineural invasion, or is high grade (i.e., grade 3 or sarcomatoid)
- T2, tumor invades into corpus spongiosum (either glans or ventral shaft)
    - With or without urethral invasion
- T3, tumor invades into corpora cavernosum (including tunica albuginea)
    - With or without urethral invasion
- T4, tumor invades into adjacent structures (i.e., scrotum, prostate, pubic bone)

# cN, regional lymph nodes, clinical stage definition

- cNX, regional lymph nodes cannot be assessed
- cN0, no palpable or visibly enlarged inguinal lymph nodes
- cN1, palpable mobile unilateral inguinal lymph node
- cN2, palpable mobile ≥2 unilateral inguinal nodes
    - Or bilateral inguinal lymph nodes
- cN3, palpable fixed inguinal nodal mass
    - Or pelvic lymphadenopathy, unilateral or bilateral

# pN, regional lymph nodes, pathologic stage definition

- pNX, lymph node metastasis cannot be established
- pN0, no lymph node metastasis
- pN1, ≤2 unilateral inguinal metastases, no ENE
- pN2, ≥3 unilateral inguinal metastases, no ENE
    - Or bilateral metastases, no ENE
- pN3, ENE of lymph node metastases
    - Or pelvic lymph node metastases

# M, distant metastasis

- M0, no distant metastasis
- M1, distant metastasis present

# Stage groups

- Stage 0is, Tis N0 M0
- Stage 0a, Ta N0 M0
- Stage I, T1a N0 M0
- Stage IIA, T1b N0 M0
    - Or T2 N0 M0
- Stage IIB, T3 N0 M0
- Stage IIIA, T1-3 N1 M0
- Stage IIIB, T1-3 N2 M0
- Stage IV, T4 any N M0
    - Or any T N3 M0
    - Or any T any N M1
