+++
id           = "ped_sts/PRMS-10"
gid          = "ped_sts"
ref          = "PRMS-10"
page         = 13
title        = "Risk stratification of RMS by stage, clinical group, age, and FOXO1 fusion status"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["ST-1", "PRMS-11", "PRMS-12", "PRMS-13"]

[facets]
disease   = "ped_sts"
stage     = ["I", "II", "III", "IV"]
timepoint = ["diagnosis", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "clinical_group"
type = "enum"
options = ["I", "II", "III", "IV"]
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "primary_site"
type = "enum"
options = ["orbital", "non-orbit"]
[[variables]]
name = "foxo1"
type = "enum"
options = ["gene-fusion negative", "gene-fusion positive"]
[[variables]]
name = "risk_group"
type = "enum"
options = ["very-low-risk", "low-risk", "intermediate-risk", "high-risk"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-10, p13
- Applies to RMS at diagnosis, to assign a risk group
- Stage and Clinical Group are taken from the Staging and Clinical Group Tables (ST-1)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Stage ___ (stage), per the Staging Table (ST-1)
- Clinical Group ___ (clinical_group), per the Clinical Group Table (ST-1)
- Tumor size ___ (tumor_size) cm
- Primary site ___ (primary_site)
- FOXO1 ___ (foxo1)
- Risk group assigned ___ (risk_group)

# Very-low-risk

- Stage 1, Group I
    - <10 y of age
    - Tumor size ≤5 cm
    - FOXO1 gene-fusion negative

# Low-risk

- Stage 1, Group I–II
    - Any age
    - FOXO1 gene-fusion negative
- Stage 1, Group III (orbital)
    - Any age
    - FOXO1 gene-fusion negative
- Stage 2, Group I–II
    - Any age
    - FOXO1 gene-fusion negative

# Intermediate-risk

- Stage 1, Group III (non-orbit)
    - Any age
    - FOXO1 gene-fusion negative
- Stage 3, Group I–II
    - Any age
    - FOXO1 gene-fusion negative
- Stage 2–3, Group III
    - Any age
    - FOXO1 gene-fusion negative
- Stage 1–3, Group I–III
    - Any age
    - FOXO1 gene-fusion positive
- Stage 4, Group IV
    - <10 y of age
    - FOXO1 gene-fusion negative

# High-risk

- Stage 4, Group IV
    - Any age
    - FOXO1 gene-fusion positive
- Stage 4, Group IV
    - ≥10 y of age
    - FOXO1 gene-fusion negative

# Next

- Very-low-risk RMS, go to PRMS-11
- Low-risk RMS, go to PRMS-11
- Intermediate-risk RMS, go to PRMS-12
- High-risk RMS, go to PRMS-13
