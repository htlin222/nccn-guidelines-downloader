+++
id           = "sclc/SCL-8"
gid          = "sclc"
ref          = "SCL-8"
page         = 14
title        = "Progressive disease: subsequent therapy and palliative therapy by performance status"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-5", "SCL-6", "SCL-D", "SCL-E", "SCL-F", "SCL-G"]

[facets]
disease   = "sclc"
histology = "small-cell"
stage     = ["recurrent", "refractory"]
timepoint = ["recurrence", "relapsed-refractory", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "progression"
type = "text"
[[variables]]
name = "ps"
type = "enum"
options = ["0-2", "3-4"]
[[variables]]
name = "biomarker_testing"
type = "enum"
options = ["previously done", "not previously done"]
[[variables]]
name = "response"
type = "enum"
options = ["response", "no response", "unacceptable toxicity"]
+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, SCL-8, p14
- Applies to relapse or primary progressive disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Small cell lung cancer
- Relapse or primary progressive disease, sites ___ (progression)
- Performance status ___ (ps)
- Biomarker testing ___ (biomarker_testing)
- Response to systemic therapy ___ (response)

# Relapse or primary progressive disease

- Consider biomarker testing, if not previously done, to determine clinical trial eligibility
- PS 0–2
    - Subsequent systemic therapy
        - Principles of Systemic Therapy (SCL-E)
        - Principles of Imaging (SCL-G)
- PS 3–4
    - Palliative symptom management
        - Principles of Supportive Care (SCL-D)
        - NCCN Guidelines for Palliative Care
        - Including localized RT to symptomatic sites, Principles of Radiation Therapy (SCL-F)

# After subsequent systemic therapy

- Response
    - Continue until progression or development of unacceptable toxicity
    - For central nervous system (CNS) progression only, continue systemic therapy and treat the brain metastases with RT, Principles of Radiation Therapy (SCL-F)
- No response or unacceptable toxicity
    - PS 0–2
        - Consider subsequent systemic therapy
            - Principles of Systemic Therapy (SCL-E)
            - Principles of Imaging (SCL-G)
        - Palliative symptom management
            - Principles of Supportive Care (SCL-D)
            - NCCN Guidelines for Palliative Care
            - Including localized RT to symptomatic sites, Principles of Radiation Therapy (SCL-F)
    - PS 3–4
        - Palliative symptom management
            - Principles of Supportive Care (SCL-D)
            - NCCN Guidelines for Palliative Care
            - Including localized RT to symptomatic sites, Principles of Radiation Therapy (SCL-F)

# Next

- Response, continue subsequent systemic therapy until progression or development of unacceptable toxicity
- CNS progression only, continue systemic therapy and treat brain metastases with RT (SCL-F)
- No response or unacceptable toxicity and PS 0–2, consider subsequent systemic therapy (SCL-E) plus palliative symptom management (SCL-D)
- No response or unacceptable toxicity and PS 3–4, palliative symptom management (SCL-D)
