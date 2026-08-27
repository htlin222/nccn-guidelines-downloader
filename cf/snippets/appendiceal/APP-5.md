+++
id           = "appendiceal/APP-5"
gid          = "appendiceal"
ref          = "APP-5"
page         = 9
title        = "Workup for suspected recurrence of appendiceal neoplasms"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-5A", "APP-8", "APP-9", "APP-D"]

[facets]
disease   = "appendiceal"
stage     = "recurrent"
timepoint = ["recurrence", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_histology"
type = "text"
[[variables]]
name = "risk_at_diagnosis"
type = "enum"
options = ["high risk", "low risk"]
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
name = "ct_findings"
type = "enum"
options = ["negative findings", "progressive/positive findings"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-5, p9
- Applies to workup for recurrence
- Multidisciplinary team evaluation, including formal surgical evaluation
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary histology ___ (primary_histology)
- Risk of disease at initial diagnosis ___ (risk_at_diagnosis)
- What triggered this workup ___ (trigger)
- CEA ___ (cea)
- CA 19-9 ___ (ca19_9)
- CA-125 ___ (ca125)
- Surgical candidate ___ (surgical_candidate)
- Multidisciplinary team evaluation done, including formal surgical evaluation

# Disease evaluation with CT imaging

- Disease evaluation with CT imaging
- Result ___ (ct_findings)
- Do not order a ctDNA assay in this setting
    - ctDNA assays are not recommended in this setting
    - These assays have a lower sensitivity for peritoneal disease
    - False negatives are common

# Negative findings on disease evaluation

- In 3–6 mo, re-evaluate with CT C/A/P and tumor markers (CEA, CA 19-9, CA-125)
    - If CT is normal and disease is considered high risk at initial diagnosis, consider FDG-PET/CT or FDG-PET/MRI
- Consider diagnostic laparoscopy or percutaneous biopsy

# Negative findings on re-evaluation

- Observation
    - In select cases per clinical judgment
    - For low-risk disease and indolent changes, observation with continued disease assessment may be considered
- or Surveillance: in 3–6 mo, perform imaging and re-check tumor markers (CEA, CA 19-9, CA-125)
    - If initial disease was high risk, consider FDG-PET/CT or FDG-PET/MRI
- If consistently negative findings on multiple rounds of re-evaluation, interval may be lengthened to every 6–12 months

# Progressive/positive findings

- Progressive or positive findings on disease evaluation with CT imaging
- Progressive or positive findings on re-evaluation
- Radiographic progression
- Do not order a ctDNA assay in this setting
    - Lower sensitivity for peritoneal disease, false negatives are common

# Next

- Progressive/positive findings: see Biopsy-proven recurrent disease (APP-5A)
- or Progressive/positive findings: Systemic therapy (APP-D)
    - For progressive disease in a patient who is not a surgical candidate, systemic therapy may be considered without a biopsy
    - Follow the systemic therapy pathway according to the risk level of histology
- Extraperitoneal disease: see Management of Extraperitoneal Disease (APP-9)
- Negative findings: continue the re-evaluation loop above
