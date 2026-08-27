+++
id           = "bone/CHOR-3"
gid          = "bone"
ref          = "CHOR-3"
page         = 13
title        = "Surveillance after treatment of chordoma, and treatment of local or metastatic recurrence"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-28"
see_also     = ["CHOR-1", "CHOR-2", "BONE-1"]

[facets]
disease   = "bone"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "time_since_treatment"
type = "text"
[[variables]]
name = "last_primary_imaging"
type = "text"
[[variables]]
name = "last_chest_imaging"
type = "text"
[[variables]]
name = "recurrence_status"
type = "enum"
options = ["none", "local", "metastatic"]
[[variables]]
name = "recurrence_sites"
type = "text"
+++

# Source

- NCCN Bone Cancer v1.2027, Chordoma, CHOR-3, p13
- Applies to chordoma in surveillance after treatment, and at local or metastatic recurrence
- Surgical management: Principles of Bone Cancer Management (BONE-A)
- RT details: Principles of Radiation Therapy (BONE-C)
- Systemic therapy options: Bone Cancer Systemic Therapy Agents (BONE-B)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, chordoma
- Primary site ___ (primary_site)
- Time since treatment of primary ___ (time_since_treatment)
- Last imaging of primary site ___ (last_primary_imaging)
- Last chest imaging ___ (last_chest_imaging)
- Recurrence status ___ (recurrence_status)
- Sites of recurrent disease ___ (recurrence_sites)

# Surveillance

- Physical exam
- Imaging of primary site, for up to 10 years
    - Timing and modality as clinically indicated
    - eg, x-ray
    - eg, MRI with and without contrast
    - eg, with or without CT with contrast
- Chest imaging every 6 months
    - May include CT annually for 5 years, then annually thereafter, as clinically indicated
    - Chest CT can be performed with or without contrast, as clinically indicated
    - Low-dose, non-contrast CT is recommended for restaging

# Recurrence

- Consider MGPT with a validated and/or FDA-approved assay, to determine targeted therapy opportunities
- Local recurrence
    - Surgical excision (BONE-A)
    - and/or RT (BONE-C)
    - and/or Ablation
    - and/or Systemic therapy (BONE-B)
    - or Clinical trial
- Metastatic recurrence
    - Systemic therapy (BONE-B)
        - Consider testing for TMB and MMR/MSI as determined by a validated and/or FDA-approved assay, to inform treatment options
    - and/or Surgical excision (BONE-A)
    - and/or RT (BONE-C)
    - or Clinical trial
    - and/or Best supportive care

# Next

- Surgical management, see BONE-A
- Radiation therapy, see BONE-C
- Systemic therapy agents, see BONE-B
