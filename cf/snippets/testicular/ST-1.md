+++
id           = "testicular/ST-1"
gid          = "testicular"
ref          = "ST-1"
page         = 47
title        = "AJCC 8th edition definitions of clinical T and pathological T for testis cancer"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["TEST-1", "SEM-1", "NSEM-1"]

[facets]
disease   = "testicular"
timepoint = "staging"

[[variables]]
name = "basis_of_t"
type = "enum"
options = ["radical orchiectomy", "biopsy", "clinical only"]
[[variables]]
name = "ct"
type = "text"
[[variables]]
name = "pt"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent", "not assessed"]
[[variables]]
name = "pure_seminoma"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Testicular Cancer v2.2026, ST-1, p47
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Testis Cancer, 8th ed., 2017
- Table 1. Definitions for T, N, M
- This page carries the T definitions only, clinical T and pathological T; the table is marked Continued

# Assessment

- T category assigned from ___ (basis_of_t)
- Clinical T ___ (ct)
- Pathological T ___ (pt)
- Tumor size ___ (tumor_size) cm
- Lymphovascular invasion ___ (lvi)
- Pure seminoma ___ (pure_seminoma)

# Clinical T, primary tumor

- cTX, primary tumor cannot be assessed
- cT0, no evidence of primary tumor
- cTis, germ cell neoplasia in situ
- cT4, tumor invades scrotum with or without vascular/lymphatic invasion
- Except for Tis confirmed by biopsy and T4, the extent of the primary tumor is classified by radical orchiectomy
- TX may be used for other categories for clinical staging

# Pathological T, primary tumor

- pTX, primary tumor cannot be assessed
- pT0, no evidence of primary tumor
- pTis, germ cell neoplasia in situ
- pT1, tumor limited to testis (including rete testis invasion) without lymphovascular invasion
    - pT1a, tumor smaller than 3 cm in size
    - pT1b, tumor 3 cm or larger in size
    - Subclassification of pT1 into pT1a and pT1b applies to only pure seminoma
- pT2, either of
    - Tumor limited to testis (including rete testis invasion) with lymphovascular invasion
    - Tumor invading hilar soft tissue or epididymis, with or without lymphovascular invasion
    - Tumor penetrating visceral mesothelial layer covering the external surface of tunica albuginea, with or without lymphovascular invasion
- pT3, tumor directly invades spermatic cord soft tissue with or without lymphovascular invasion
- pT4, tumor invades scrotum with or without lymphovascular invasion
