+++
id           = "ped_sts/PRMS-12"
gid          = "ped_sts"
ref          = "PRMS-12"
page         = 15
title        = "Treatment of intermediate-risk RMS"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-10", "PRMS-D", "PRMS-F", "PRMS-G", "PRMS-14", "PRMS-15"]

[facets]
disease   = "ped_sts"
timepoint = "primary-treatment"

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
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk group: intermediate-risk RMS
- Clinical trial status: ___ (trial_status)
    - Clinical trial open and enrolling, and patient is eligible
    - No open trial, or patient is ineligible, or patient declines
- Evaluation for DPE: ___ (dpe_status)

# Treatment

- Treatment is per Principles of Imaging
- Clinical trial open and enrolling, and patient is eligible
    - Clinical trial preferred
        - Surgery per trial guidelines
        - RT per trial guidelines
- No open trial, or patient is ineligible or declines
    - Systemic therapy (PRMS-G)
    - RT (PRMS-F)
    - Evaluate for DPE (PRMS-D)
    - Systemic therapy as indicated for risk group (PRMS-10)

# Next

- Surveillance (PRMS-15)
- Recurrent or progressive RMS (PRMS-14)
