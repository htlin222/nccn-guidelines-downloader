+++
id           = "nmsc/BCC-6"
gid          = "nmsc"
ref          = "BCC-6"
page         = 12
title        = "Follow-up after treatment of basal cell skin cancer, and routing of recurrence"
nccn_version = "2.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-27"
see_also     = ["BCC-3", "BCC-4", "BCC-5"]

[facets]
disease   = "nmsc"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "interval_since_treatment"
type = "text"
[[variables]]
name = "skin_exam"
type = "text"
[[variables]]
name = "exam_sufficient"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "transplant"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "melanoma_count"
type = "number"
[[variables]]
name = "nmsc_count"
type = "number"
[[variables]]
name = "recurrence"
type = "enum"
options = ["none", "local", "locally-advanced", "nodal", "distant"]
+++

# Source

- NCCN Basal Cell Skin Cancer v2.2026, BCC-6, p12
- Applies to follow-up after treatment of basal cell skin cancer, and to recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- Time since primary treatment ___ (interval_since_treatment)
- Complete skin exam findings ___ (skin_exam)
- Clinical exam is sufficient for following the disease ___ (exam_sufficient)
- Evidence of recurrence ___ (recurrence)

# Follow-up

- H&P including complete skin exam
    - Every 6-12 mo for the first 5 years
    - Then at least annually for life
    - Follow-up with a dermatologist is strongly recommended if any of the following criteria are met
        - Past or imminent solid organ, marrow, or hematopoietic cell transplant ___ (transplant)
        - One or more cutaneous melanomas in the past 5 years ___ (melanoma_count)
        - Four or more non-melanoma skin cancers in the past 5 years ___ (nmsc_count)
- Consider imaging if clinical exam is insufficient for following the disease
    - Imaging modality and targeted area should be at the discretion of the treating team, based on the suspected extent of disease (ie, local, regional, metastatic)
    - Histologic confirmation is sufficient to diagnose local recurrence
    - MRI with and without contrast can be considered to assess extent of local disease
    - For nodal or distant metastasis, histologic analysis and/or CT imaging can be used for confirmation and to gauge extent of disease
- Patient education
    - Sun protection
    - Self-examination

# Recurrence

- Local recurrence
    - Histologic confirmation is sufficient to diagnose it
    - Follow the primary treatment pathway for high-risk disease (BCC-4)
- Advanced disease
    - Locally advanced
    - Nodal metastases
    - Distant metastases
    - Follow the primary treatment pathways for advanced BCC (BCC-5)

# Next

- No recurrence, continue follow-up on this page
- Local recurrence, go to BCC-4
- Locally advanced, nodal metastases, or distant metastases, go to BCC-5
