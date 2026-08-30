+++
id           = "ped_sts/PRMS-11"
gid          = "ped_sts"
ref          = "PRMS-11"
page         = 14
title        = "Treatment of very-low-risk or low-risk RMS, and the response branch out of it"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-G", "PRMS-14", "PRMS-15"]

[facets]
disease   = "ped_sts"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["very-low-risk RMS", "low-risk RMS"]
[[variables]]
name = "treatment_choice"
type = "enum"
options = ["clinical trial", "systemic therapy"]
[[variables]]
name = "response_status"
type = "enum"
options = ["response", "progressive disease"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-11, p14
- Applies to very-low-risk RMS or low-risk RMS
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk group: ___ (risk_group)
    - Very-low-risk RMS
    - Low-risk RMS
- Treatment chosen: ___ (treatment_choice)
- Response status: ___ (response_status)

# Treatment

- Treatment on this page is carried out per Principles of Imaging
- Clinical trial preferred
- Or systemic therapy (PRMS-G)

# Response

- Response
- Progressive disease

# Next

- Response, go to surveillance (PRMS-15)
- Progressive disease, go to recurrent or progressive RMS (PRMS-14)
