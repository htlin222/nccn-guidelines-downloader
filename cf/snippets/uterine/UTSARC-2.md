+++
id           = "uterine/UTSARC-2"
gid          = "uterine"
ref          = "UTSARC-2"
page         = 46
title        = "Additional therapy following TH with or without BSO for low-grade ESS and adenosarcoma, by sarcomatous overgrowth and stage"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-28"
see_also     = ["UTSARC-1", "UTSARC-3", "UTSARC-4", "UTSARC-A", "UTSARC-C", "UN-A"]

[facets]
disease   = "uterine"
stage     = ["I", "II", "III", "IV"]
timepoint = "adjuvant"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["low-grade ESS", "adenosarcoma without SO", "adenosarcoma with SO"]
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "prior_bso"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "residual_disease"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Uterine Sarcoma v3.2026, UTSARC-2, p46
- Applies to additional therapy following TH with or without BSO
- Pathologic findings and histologic grade per Principles of Pathology and Molecular Analysis (UTSARC-A 2 of 8)
- Systemic therapy options: Systemic Therapy (UTSARC-C)
- Radiation details: Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- TH with or without BSO already performed
- Pathologic findings and histologic grade ___ (histology)
    - Graded per Principles of Pathology and Molecular Analysis (UTSARC-A 2 of 8)
    - Low-grade ESS
    - Adenosarcoma without sarcomatous overgrowth (SO)
    - Adenosarcoma with SO
- Stage ___ (stage)
    - Stage I
    - Stage II, III, IVA, IVB
- BSO already performed at prior surgery ___ (prior_bso)
- Residual measurable disease ___ (residual_disease)

# Additional therapy, low-grade ESS or adenosarcoma without SO

- Stage I
    - BSO (preferred)
    - or Observe, if prior BSO
- Stage II, III, IVA, IVB
    - BSO
    - with or without Systemic endocrine therapy
        - Systemic Therapy (UTSARC-C)
    - with or without EBRT
        - Palliative for stage IVB
        - Category 2B for EBRT for stage II, III, IVA

# Additional therapy, adenosarcoma with SO

- Stage I
    - BSO
    - or Observe, if prior BSO
- Stage II, III, IVA, IVB
    - BSO
    - Consider systemic therapy
        - Recommended for residual measurable disease
        - Systemic Therapy (UTSARC-C)
    - with or without EBRT
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
        - Palliative for stage IVB
        - Category 2B for EBRT for stage II, III, IVA

# Next

- Stage I, after BSO or observation, surveillance (UTSARC-4)
