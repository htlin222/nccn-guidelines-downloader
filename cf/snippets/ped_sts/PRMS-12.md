+++
id           = "ped_sts/PRMS-12"
gid          = "ped_sts"
ref          = "PRMS-12"
page         = 15
title        = "Treatment of intermediate-risk RMS"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-10", "PRMS-D", "PRMS-F", "PRMS-G", "PRMS-14", "PRMS-15"]

[facets]
disease   = "ped_sts"
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "trial_status"
type = "enum"
options = ["open-and-eligible", "no-open-trial", "ineligible", "declines"]
[[variables]]
name = "dpe_status"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-12, p15
- Applies to intermediate-risk RMS
- Treatment on this page follows Principles of Imaging
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk group: intermediate-risk RMS (PRMS-10)
- Clinical trial status: ___ (trial_status)
    - Trial open and enrolling, and patient is eligible
    - No open trial, or patient is ineligible or declines
- Evaluation for DPE: ___ (dpe_status)

# Treatment

- Clinical trial open/enrolling and patient is eligible
    - Clinical trial preferred
        - Surgery and RT per trial guidelines
- No open trial, or patient is ineligible or declines
    - Systemic therapy (PRMS-G)
    - RT (PRMS-F)
    - Evaluate for DPE (PRMS-D)
    - Systemic therapy as indicated for risk group (PRMS-10)

# Next

- Surveillance (PRMS-15)
- Recurrent or progressive RMS (PRMS-14)
