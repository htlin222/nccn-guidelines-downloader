+++
id           = "mcc/MCC-3"
gid          = "mcc"
ref          = "MCC-3"
page         = 10
title        = "Primary and additional treatment of clinical N0 locally advanced MCC when curative surgery and curative RT are not feasible"
nccn_version = "2.2026"
nccn_date    = "10/24/2025"
generated    = "2026-08-27"
see_also     = ["MCC-2", "MCC-6", "MCC-B", "MCC-D"]

[facets]
disease   = "mcc"
timepoint = ["primary-treatment", "neoadjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "nonsurgical_reason"
type = "enum"
options = ["comorbidities", "tumor characteristics", "not applicable"]
[[variables]]
name = "neoadjuvant_response"
type = "enum"
options = ["adequate response", "progression", "not yet assessed"]
+++

# Source

- NCCN Merkel Cell Carcinoma v2.2026, MCC-3, p10
- Applies to clinical N0 disease, locally advanced MCC
- Applies when curative surgery and curative RT are not feasible
- Radiation therapy per Principles of Radiation Therapy (MCC-B)
- Systemic therapy per Principles of Systemic Therapy (MCC-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary site ___ (primary_site)
- Clinical N0
- Locally advanced MCC
- Curative surgery not feasible
- Curative RT not feasible
- Surgical candidate ___ (surgical_candidate)
    - If not a surgical candidate, reason is ___ (nonsurgical_reason)

# Before treatment

- Multidisciplinary consultation at center with specialized expertise

# Primary treatment

- Neoadjuvant nivolumab (MCC-D)
    - May be considered in patients who are surgical candidates
- For nonsurgical candidates, due to comorbidities or tumor characteristics
    - Discuss RT for durable local control versus systemic therapy
    - RT per Principles of Radiation Therapy (MCC-B)
    - Systemic therapy per Principles of Systemic Therapy (MCC-D)

# Additional treatment after neoadjuvant nivolumab

- Response on neoadjuvant nivolumab is ___ (neoadjuvant_response)
- Adequate response on neoadjuvant nivolumab
    - Go to Primary and Additional Treatment (MCC-2)
- Progression on neoadjuvant nivolumab
    - Discuss RT or surgery for local control versus systemic therapy
    - RT per Principles of Radiation Therapy (MCC-B)
    - Systemic therapy per Principles of Systemic Therapy (MCC-D)

# Next

- Adequate response on neoadjuvant nivolumab, go to Primary and Additional Treatment (MCC-2)
- Progression on neoadjuvant nivolumab, after RT or surgery for local control or systemic therapy, go to Follow-up (MCC-6)
- Nonsurgical candidate, after RT or systemic therapy, go to Follow-up (MCC-6)
