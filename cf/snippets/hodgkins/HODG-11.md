+++
id           = "hodgkins/HODG-11"
gid          = "hodgkins"
ref          = "HODG-11"
page         = 28
title        = "Primary treatment and response assessment of nodular lymphocyte predominant Hodgkin lymphoma"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-A", "HODG-B", "HODG-C", "HODG-12", "HODG-16"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV", "bulky"]
timepoint = ["primary-treatment", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "pattern"
type = "text"
[[variables]]
name = "pet_result"
type = "enum"
options = ["negative", "positive"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age >=18 years) v2.2026, HODG-11, p28
- Clinical presentation: nodular lymphocyte predominant Hodgkin lymphoma (NLPHL)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, guideline applies to age >=18 years
- Nodular lymphocyte predominant Hodgkin lymphoma (NLPHL)
    - Per WHO 2022, NLPHL remains under the family of Hodgkin lymphoma
    - Per the ICC 2022 update, the term NLPHL was replaced with nodular lymphocyte predominant B-cell lymphoma (NLPBL)
    - NLPHL has a different natural history and response to therapy than CHL, especially stages I-II, so separate guidelines are presented for NLPHL
- Stage ___ (stage)
    - Bulky vs non-bulky
    - For stage IIA, contiguous vs noncontiguous
- ___ (symptom_status)
- Bulky disease, subdiaphragmatic disease, or splenic involvement noted
    - These patients have a high risk for initial or later transformation to large cell lymphoma
- Immunoarchitectural pattern ___ (pattern)
    - Data suggest outcomes differ for typical patterns (A/B) versus variant patterns (C/D/E/F)

# Primary treatment, stage IA or IIA (non-bulky)

- ISRT, preferred for stage IA or contiguous stage IIA
    - Principles of Radiation Therapy (HODG-C)
- or Observe
    - Observation may be an option for patients with stage IA disease with a completely excised solitary lymph node

# Primary treatment, stage IB, IIB, or stage IA-IIA (bulky)

- Chemotherapy + Rituximab + ISRT
    - Principles of Systemic Therapy (HODG-B, 3 of 8)
    - Generally, a brief course of chemotherapy (2-4 mo) would be given with RT
    - Principles of Radiation Therapy (HODG-C)
- For select patients with stage IB, ISRT alone may be an option

# Primary treatment, stage IIA (noncontiguous)

- Chemotherapy + Rituximab, with or without ISRT
    - Principles of Systemic Therapy (HODG-B, 3 of 8)
    - Generally, a brief course of chemotherapy (2-4 mo) would be given with RT
    - Principles of Radiation Therapy (HODG-C)
- or Rituximab
    - Rituximab monotherapy can be used for palliation in select cases
- For select patients with stage IIA non-contiguous disease, ISRT alone may be an option

# Primary treatment, stage III-IV

- Observe, if asymptomatic
    - Borchmann S, et al. Blood 2019
- or, based on clinical judgment, options include:
    - Chemotherapy + Rituximab, with or without ISRT
        - Principles of Systemic Therapy (HODG-B, 3 of 8)
        - Generally, a brief course of chemotherapy (2-4 mo) would be given with RT
        - Principles of Radiation Therapy (HODG-C)
    - or Rituximab
        - Rituximab monotherapy can be used for palliation in select cases
    - or Local RT, palliation of locally symptomatic disease
        - Principles of Radiation Therapy (HODG-C)

# Response

- Restage with FDG-PET/CT
    - Principles of FDG-PET/CT (HODG-A)
- FDG-PET/CT ___ (pet_result)
- Negative
    - Observe, if asymptomatic
    - Follow-up (HODG-12)
- Positive
    - Biopsy
        - Biopsy is recommended for sites of progressive disease, especially subdiaphragmatic sites, to rule out transformation
    - Observe, if asymptomatic, or ISRT (if no prior RT)
        - Principles of Radiation Therapy (HODG-C)
- Stable or progressive disease
    - Refractory Disease or Suspected Relapse (HODG-16)

# Next

- Restaging FDG-PET/CT negative, follow-up (HODG-12)
- Restaging FDG-PET/CT positive, biopsy, then observe if asymptomatic or ISRT if no prior RT
- Stable or progressive disease, go to HODG-16
