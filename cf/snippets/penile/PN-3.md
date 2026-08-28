+++
id           = "penile/PN-3"
gid          = "penile"
ref          = "PN-3"
page         = 7
title        = "Management of non-palpable inguinal lymph nodes, by risk of the primary lesion"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-2", "PN-8", "PN-B", "PN-E"]

[facets]
disease   = "penile"
timepoint = ["staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_lesion"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no", "declines surgery"]
+++

# Source

- NCCN Penile Cancer v2.2026, PN-3, p7
- Applies when the inguinal lymph nodes are non-palpable
- Treatment per Principles of Surgery (PN-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary lesion ___ (primary_lesion)
- Inguinal lymph nodes non-palpable
- Risk stratification based on the primary lesion ___ (risk_group)
- Surgical candidate ___ (surgical_candidate)

# Imaging

- Imaging of chest, abdomen, and pelvis
    - May include CT
    - May include MRI
    - May include PET/CT
    - May include chest x-ray
    - When appropriate, imaging should be done with contrast, unless contraindicated
    - Principles of Imaging (PN-E)

# Risk stratification based on primary lesion

- Low risk
    - PeIN
    - Ta
        - Ta verrucous carcinoma is by definition a well-differentiated tumor, therefore only surveillance of the inguinal lymph nodes is required
    - T1a
- Intermediate/high risk
    - T1b
    - Any T2 or greater

# Treatment, low risk

- Surveillance (PN-8)

# Treatment, intermediate/high risk

- Bilateral inguinal lymph node dissection (ILND)
    - Principles of Surgery (PN-B)
    - A modified/superficial inguinal dissection with intraoperative frozen section is an acceptable alternative to stage the inguinal lymph nodes
- or Bilateral dynamic sentinel node biopsy (DSNB)
    - Principles of Surgery (PN-B)
    - Recommended provided the treating physician has experience with this modality
    - If positive lymph nodes are found on DSNB, ILND is recommended
- If not a surgical candidate, or the patient declines surgical management
    - Consider prophylactic external beam radiation therapy (EBRT) to the inguinal lymph nodes (category 2B)

# Next

- Low risk (PeIN, Ta, T1a), go to Surveillance (PN-8)
- Intermediate/high risk (T1b, any T2 or greater), bilateral ILND or bilateral DSNB
- Positive lymph nodes on DSNB, ILND is recommended
