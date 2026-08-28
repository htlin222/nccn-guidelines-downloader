+++
id           = "neuroblastoma/NEUROB-2"
gid          = "neuroblastoma"
ref          = "NEUROB-2"
page         = 7
title        = "Assigning the COG risk group from stage, MYCN, age, and tumor biology"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-1", "NEUROB-A"]

[facets]
disease   = "neuroblastoma"
timepoint = "staging"

[[variables]]
name = "age_months"
type = "number"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["L1", "L2", "M", "MS"]
[[variables]]
name = "mycn"
type = "enum"
options = ["amplified", "not amplified", "unknown"]
[[variables]]
name = "inpc"
type = "text"
[[variables]]
name = "di"
type = "text"
[[variables]]
name = "sca"
type = "enum"
options = ["SCA+", "SCA-"]
[[variables]]
name = "resection"
type = "enum"
options = ["completely resected", "incompletely resected"]
[[variables]]
name = "symptoms"
type = "enum"
options = ["symptomatic", "asymptomatic"]
[[variables]]
name = "risk_group"
type = "enum"
options = ["Low risk", "Intermediate risk", "High risk"]
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-2, p7
- Neuroblastoma risk classification (footnote c)
- Adapted from Irwin MS, Naranjo A, Zhang FF, et al. Revised Neuroblastoma Risk Classification System: A report from the Children's Oncology Group. J Clin Oncol 2021;39:3229-3241
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age_months) months old
- Clinical stage (footnote d): ___ (clinical_stage)
    - L1 (footnote e), L2, M, or MS
- MYCN amplification: ___ (mycn)
    - Recorded as amplified, not amplified, or unknown
- INPC histology (footnote f): ___ (inpc)
    - Favorable histology (FH) or unfavorable histology (UH)
    - Undifferentiated, poorly differentiated, or differentiating per INPC
    - See Principles of Pathology (NEUROB-A)
- DNA index (DI) (footnote g): ___ (di)
    - DI = 1 or DI >1
- Segmental chromosomal aberrations: ___ (sca)
    - SCA+ or SCA-
- Extent of resection: ___ (resection)
    - Applies to stage L1 with MYCN amplification
- Clinical symptoms (footnote h): ___ (symptoms)
    - Applies to stage MS

# Stage L1

- MYCN not amplified, any age, any other features
    - Low risk
- MYCN amplified, any age, completely resected
    - Low risk
- MYCN amplified, any age, incompletely resected
    - High risk

# Stage L2

- MYCN not amplified, <18 months, any other features
    - Intermediate risk
- MYCN not amplified, 18 months to <5 years
    - Differentiating per INPC (footnote f)
        - Intermediate risk
    - Undifferentiated or poorly differentiated (footnote f)
        - High risk
- MYCN not amplified, >=5 years, any other features
    - High risk
- MYCN amplified, any age, any other features
    - High risk

# Stage M

- MYCN not amplified, <12 months, any other features
    - Intermediate risk
- MYCN not amplified, >=12 to <18 months
    - FH (footnote f), DI >1 (footnote g), and SCA-
        - Intermediate risk
    - UH (footnote f), DI = 1 (footnote g), or SCA+
        - High risk (footnote i)
- MYCN not amplified, >=18 months, any other features
    - High risk
- MYCN amplified, any age, any other features
    - High risk

# Stage MS

- MYCN not amplified, <12 months, asymptomatic, FH (footnote f), DI >1 (footnote g), and SCA-
    - Low risk
- MYCN not amplified, <12 months, symptomatic (footnote h)
    - Intermediate risk
- MYCN not amplified, <12 months, UH (footnote f), DI = 1 (footnote g), or SCA+
    - Intermediate risk
- MYCN not amplified, 12 to <18 months
    - FH (footnote f), DI >1 (footnote g), and SCA- (category 2B)
        - Intermediate risk
    - UH (footnote f), DI = 1 (footnote g), or SCA+
        - High risk (footnote i)
- MYCN amplified, any age, any other features
    - High risk

# Next

- Assigned risk group: ___ (risk_group)
- Low risk
- Intermediate risk
- High risk
