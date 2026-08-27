+++
id           = "appendiceal/APP-5"
gid          = "appendiceal"
ref          = "APP-5"
page         = 9
title        = "Workup for suspected recurrence of appendiceal neoplasm"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-5A", "APP-9", "APP-D"]

[facets]
disease   = "appendiceal"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "trigger"
type = "enum"
options = ["serial tumor marker elevation", "radiographic progression"]
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "initial_risk"
type = "enum"
options = ["high risk", "low risk", "not high risk"]
[[variables]]
name = "ct_findings"
type = "text"
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-5, p9
- Workup for recurrence
- Multidisciplinary team evaluation, including formal surgical evaluation
- All recommendations category 2A unless otherwise indicated

# Assessment

- Trigger for this workup: ___ (trigger)
- CEA ___ (cea)
- CA 19-9 ___ (ca19_9)
- CA-125 ___ (ca125)
- Disease considered at initial diagnosis: ___ (initial_risk)
- Surgical candidate: ___ (surgical_candidate)

# Disease evaluation

- Disease evaluation with CT imaging
    - CT findings: ___ (ct_findings)
- ctDNA assays are not recommended in this setting
    - These assays have a lower sensitivity for peritoneal disease and false negatives are common

# Negative findings on disease evaluation

- In 3–6 mo, re-evaluate with CT C/A/P and tumor markers (CEA, CA 19-9, CA-125)
    - If CT is normal and disease is considered high risk at initial diagnosis, consider FDG-PET/CT or FDG-PET/MRI
- Consider diagnostic laparoscopy or percutaneous biopsy

# Negative findings on re-evaluation

- Surveillance: in 3–6 mo, perform imaging and re-check tumor markers (CEA, CA 19-9, CA-125)
    - If initial disease was high risk, consider FDG-PET/CT or FDG-PET/MRI
    - If consistently negative findings on multiple rounds of re-evaluation, interval may be lengthened to every 6–12 months

# Next

- Progressive/positive findings
    - See Biopsy-proven recurrent disease (APP-5A)
    - Or systemic therapy (APP-D)
        - For progressive disease in a patient who is not a surgical candidate, systemic therapy may be considered without a biopsy
        - Follow the systemic therapy pathway according to the risk level of histology
    - Or observation
        - In select cases per clinical judgment
        - For low-risk disease and indolent changes, observation with continued disease assessment may be considered
- See Management of Extraperitoneal Disease (APP-9)
