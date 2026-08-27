+++
id           = "bone/BONE-1"
gid          = "bone"
ref          = "BONE-1"
page         = 6
title        = "Workup of a symptomatic bone lesion with an abnormal x-ray"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["TEAM-1", "BONE-A"]

[facets]
disease   = "bone"
timepoint = ["workup", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lesion"
type = "text"
[[variables]]
name = "xray"
type = "text"
[[variables]]
name = "other_lesions"
type = "enum"
options = ["none", "present"]
+++

# Source

- NCCN Bone Cancer v1.2027, BONE-1, p6
- Applies to a symptomatic bone lesion with an abnormal x-ray
- Manage through a multidisciplinary team (TEAM-1)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Symptomatic bone lesion ___ (lesion)
- Abnormal x-ray ___ (xray)
- Age branch decides the next step
    - Age <40 y, go straight to orthopedic oncology referral
    - Age ≥40 y, work up for potential bone metastasis first

# Age <40 y

- Refer to orthopedic oncologist
- Biopsy, if indicated, should be performed at treating institution (BONE-A)

# Age ≥40 y, workup for potential bone metastasis as clinically indicated

- History and physical
- Bone scan or FDG-PET/CT (category 2B)
- And/or skeletal survey, x-ray, or CT, if multiple myeloma suspected
- Chest x-ray
- Serum protein electrophoresis (SPEP)/labs
    - Complete blood count (CBC)
    - Comprehensive metabolic panel (CMP) with calcium, to assess for hypercalcemia
- Chest/abdomen/pelvis (C/A/P) CT with contrast
- Prostate-specific antigen (PSA)
- Mammogram
- Result: other lesions ___ (other_lesions)

# Next

- Age <40 y, after biopsy, see Bone Cancer Table of Contents for specific bone sarcomas
- Age ≥40 y, no other lesions, possible bone primary
    - Refer to orthopedic oncologist
    - Biopsy should be performed at treating institution (BONE-A)
    - Then see Bone Cancer Table of Contents for specific bone sarcomas
- Age ≥40 y, other lesions, non-bone primary suspected
    - Refer to appropriate NCCN Guidelines for Treatment by Cancer Type
