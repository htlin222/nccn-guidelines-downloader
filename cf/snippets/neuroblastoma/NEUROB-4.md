+++
id           = "neuroblastoma/NEUROB-4"
gid          = "neuroblastoma"
ref          = "NEUROB-4"
page         = 10
title        = "Primary treatment and response assessment for intermediate-risk localized neuroblastoma"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-2", "NEUROB-D", "NEUROB-E", "NEUROB-F", "NEUROB-G"]

[facets]
disease   = "neuroblastoma"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age_days"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["FH", "UH", "unknown"]
[[variables]]
name = "di"
type = "text"
[[variables]]
name = "sca"
type = "enum"
options = ["present", "absent", "unknown"]
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-4, p10
- Applies to intermediate risk, localized tumors, per Risk Classification (NEUROB-2)
- Systemic therapy per Principles of Systemic Therapy (NEUROB-D)
- Surgery per Principles of Surgery (NEUROB-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age_days) days old
- Histology ___ (histology)
- DI ___ (di)
- SCA ___ (sca)
- Intermediate risk, localized tumor, confirmed on Risk Classification (NEUROB-2)
- Biologic group assigned
    - Favorable biologic features include FH, DI >1, no SCA
    - If SCA or histology status are not available, consider as unfavorable

# Primary treatment by biologic group

- All favorable biology
    - 2 cycles of chemotherapy (NEUROB-D)
- Any one of the following
    - <365 days with UH, DI >1, no SCA
    - <365 days with FH, DI = 1, no SCA
    - <365 days with UH, DI = 1, no SCA
    - <365 days with FH, DI >1, and SCA
    - ≥365 days with FH and SCA
    - Treat with 4 cycles of chemotherapy (NEUROB-D)
- Any one of the following
    - 365 to <547 days with UH
    - <365 days with SCA (with either UH or DI = 1)
    - Treat with 8 cycles of chemotherapy (NEUROB-D)
- Audiologic assessment obtained at diagnosis and again at end of therapy
- Echocardiogram obtained at diagnosis and again at end of therapy

# Response after 2 cycles or 4 cycles of chemotherapy

- Response historically measured by volume, see NEUROB-D 1 of 13 and Response Assessment (NEUROB-G)
- ≥Partial response (PR)
    - Surveillance (NEUROB-F)
- <PR
    - Multidisciplinary discussion of role for surgery versus additional chemotherapy
    - Then surveillance (NEUROB-F)

# Response after 8 cycles of chemotherapy

- Response historically measured by volume, see NEUROB-D 1 of 13 and Response Assessment (NEUROB-G)
- Total (or near total) reduction in tumor size
    - Surveillance (NEUROB-F)
- <Total (or near total) reduction in tumor size
    - Multidisciplinary discussion of role for surgery versus additional chemotherapy
    - Then surveillance (NEUROB-F)

# Multidisciplinary discussion of surgery versus additional chemotherapy

- Multidisciplinary discussions should be undertaken on an iterative basis
- Multidisciplinary discussion is important in decisions surrounding surgery and additional chemotherapy
- If additional chemotherapy is given, consider 2–4 additional cycles
    - Repeat primary tumor imaging after every 2 cycles
- Consider surgery if chemotherapy has led to stable disease (SD) or minimal improvement in tumor size
- Consider biopsy, as the tumor may have differentiated and additional treatment may not be required
- If 8 cycles of chemotherapy have been given and the tumor remains unresectable, consider treatment with second-line chemotherapy as per Twist CJ, et al. J Clin Oncol 2019;37:3243-3255

# Next

- Surveillance, see Disease Surveillance/Follow-up (NEUROB-F)
    - Surveillance should begin once the response or reduction in primary tumor size noted above is achieved, with chemotherapy and/or surgery
    - If the treatment endpoint has been achieved, obtain MIBG scan as part of the end of therapy evaluation
