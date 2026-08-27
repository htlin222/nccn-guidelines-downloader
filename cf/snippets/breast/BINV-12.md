+++
id           = "breast/BINV-12"
gid          = "breast"
ref          = "BINV-12"
page         = 25
title        = "Workup prior to preoperative systemic therapy"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-1", "BINV-B", "BINV-L", "BINV-13", "BINV-15"]

[facets]
disease   = "breast"
histology = "any"
stage     = ["II", "III"]
biomarker = ["her2-positive", "tnbc", "any"]
timepoint = ["workup", "neoadjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "er"
type = "text"
[[variables]]
name = "pr"
type = "text"
[[variables]]
name = "her2"
type = "text"
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-12, p25
- Applies to clinical stage cT2 or higher, or cN+, and M0
- Also cT1c cN0 HER2-positive disease, and cT1c cN0 TNBC
- Preoperative systemic therapy criteria: BINV-L
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology)
- ___ (ctnm)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- Meets criteria for preoperative systemic therapy

# Additional workup

- Axillary assessment
    - Physical exam
    - Axillary ultrasound, unless prior MRI demonstrated negative axillary nodes
    - Percutaneous biopsy of suspicious nodes
        - Place a marker at the time of biopsy, to allow identification and removal at definitive surgery
- Complete blood count
- Comprehensive metabolic panel
    - Liver function tests
    - Alkaline phosphatase

# Additional tests to consider as clinically indicated

- Chest diagnostic CT, with or without contrast
- Abdomen, with or without pelvis, diagnostic CT with contrast or MRI with contrast
- Bone scan or sodium fluoride PET/CT (category 2B)
- FDG-PET/CT
    - Most beneficial and accurate for stage III and for ductal compared with lobular histology
    - May be used as an adjunct to, or in lieu of, initial standard staging
    - May be performed simultaneously with diagnostic CT
    - Bone scan or sodium fluoride PET/CT may not be needed if an upfront FDG-PET/CT clearly agrees on both PET and CT components
    - Also useful for equivocal CT and bone scan results, suspicion of undetected nodal or distant disease, and treatment response assessment
- Breast MRI, optional, if not previously done
    - Special consideration for mammographically occult tumors
    - May be useful for characterizing axillary or internal mammary nodal disease (BINV-B)

# Consider during workup

- Gene expression assay, if considering preoperative therapy and the disease is operable, ER-positive and HER2-negative
    - cN0, premenopausal or postmenopausal
    - cN1, postmenopausal
- Tools for assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology

# Next

- Operable breast cancer, go to BINV-13
- Inoperable breast cancer, go to BINV-15
