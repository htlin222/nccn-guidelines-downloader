+++
id           = "appendiceal/APP-5A"
gid          = "appendiceal"
ref          = "APP-5A"
page         = 10
title        = "Management of biopsy-proven recurrent appendiceal disease"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-2", "APP-4", "APP-8", "APP-C", "APP-D"]

[facets]
disease   = "appendiceal"
stage     = "recurrent"
timepoint = ["recurrence", "neoadjuvant", "adjuvant", "surveillance"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "path_result"
type = "text"
[[variables]]
name = "risk_status"
type = "enum"
options = ["high-risk", "low-risk"]
[[variables]]
name = "previous_crs"
type = "enum"
options = ["no previous CRS", "previous CRS"]
[[variables]]
name = "complete_crs"
type = "enum"
options = ["complete CRS possible", "complete CRS NOT possible"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-5A, p10
- Applies to biopsy-proven recurrent disease
- Multidisciplinary team evaluation, including formal surgical evaluation
- Principles of Surgery and CRS/IPCT (APP-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Recurrence biopsy-proven, site ___ (recurrence_site)
- Pathology review results (APP-2) ___ (path_result)
- Risk status ___ (risk_status)
    - Risk status should be according to pathology of metastatic disease
    - Subsequent treatment should be based on the highest risk pathology found
    - A low-risk primary with high-risk metastatic disease should be treated as per high-risk pathways
- Prior cytoreductive surgery ___ (previous_crs)
- Resectability ___ (complete_crs)
    - Determined at multidisciplinary team evaluation, including formal surgical evaluation

# Recurrence of high-risk disease, no previous CRS, complete CRS possible

- Consider neoadjuvant systemic therapy (APP-D 2 of 11)
- CRS with or without IPCT
    - Per Principles of Surgery and CRS/IPCT (APP-C)
- Then observation, or consider adjuvant therapy
    - Preferred: FOLFOX or CAPEOX
    - Other options include: Capecitabine
    - Other options include: Fluorouracil/Leucovorin
    - This recommendation has been extrapolated from colon cancer
    - Duration of perioperative therapy should be limited to no more than 6 months
- Then surveillance (APP-8)

# Recurrence of high-risk disease, complete CRS NOT possible, or previous CRS

- Systemic therapy (APP-D 2 of 11)
- Clinical trial
- Consider palliative CRS with or without IPCT
    - Per Principles of Surgery and CRS/IPCT (APP-C)

# Recurrence of low-risk disease

- Manage as peritoneal-only disease (APP-4)

# Next

- High-risk recurrence, no previous CRS, complete CRS possible: CRS with or without IPCT, then observation or adjuvant therapy, then surveillance (APP-8)
- High-risk recurrence, complete CRS not possible, or previous CRS: systemic therapy (APP-D 2 of 11), clinical trial, or consider palliative CRS with or without IPCT
- Low-risk recurrence: go to peritoneal-only disease (APP-4)
