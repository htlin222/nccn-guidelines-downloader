+++
id           = "breast/IBC-1"
gid          = "breast"
ref          = "IBC-1"
page         = 113
title        = "Workup of a clinical pathologic diagnosis of inflammatory breast cancer"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["IBC-2", "BINV-A", "BINV-C", "BINV-L", "DIS-A"]

[facets]
disease   = "breast"
histology = "inflammatory"
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "onset_months"
type = "number"
[[variables]]
name = "skin_extent"
type = "text"
[[variables]]
name = "palpable_mass"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "dermal_lymphatic"
type = "enum"
options = ["seen", "not seen", "not assessed"]
[[variables]]
name = "pathology"
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
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
+++

# Source

- NCCN Breast Cancer v6.2026, IBC-1, p113
- Applies to a clinical pathologic diagnosis of inflammatory breast cancer
- IBC is characterized by
    - Rapid onset (≤6 months) of erythema, edema, peau d'orange occupying ≥1/3 of the breast, with or without a palpable mass
    - Pathologic confirmation of invasive breast cancer
    - Dermal lymphatic involvement may be seen but is not required for the diagnosis
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Onset of erythema, edema, peau d'orange over ___ (onset_months) months
- Proportion of the breast occupied ___ (skin_extent)
- Palpable mass ___ (palpable_mass)
- Dermal lymphatic involvement ___ (dermal_lymphatic)
- Pathologic confirmation of invasive breast cancer ___ (pathology)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- Menopausal status ___ (menopausal_status)

# Workup

- History and physical exam by multidisciplinary team
- Obtain medical photography
- CBC
- Comprehensive metabolic panel, including LFTs and alkaline phosphatase
- Pathology review
    - The Panel endorses the College of American Pathologists Protocol for pathology reporting for all invasive and noninvasive carcinomas of the breast, http://www.cap.org
- Determination of tumor ER/PR status and HER2 status
    - Principles of Biomarker Testing (BINV-A)
- Fertility counseling if premenopausal
    - Fertility, Birth Control, and Sexual Health (BINV-C)
- Genetic counseling if patient is at risk for hereditary breast cancer
    - For risk criteria, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Assess for distress
    - Refer to the NCCN Guidelines for Distress Management (DIS-A) for the NCCN Distress Thermometer and Problem List, which includes social determinants of health

# Imaging

- Bilateral diagnostic mammogram
- Ultrasound as necessary
- Chest diagnostic CT, with or without contrast
- Abdomen, with or without pelvis, diagnostic CT with contrast or MRI with contrast
- Bone scan or FDG-PET/CT
    - Bone scan or sodium fluoride PET/CT may not be needed if FDG-PET/CT is performed and clearly indicates bone metastasis on both the PET and CT component
    - FDG-PET/CT can be performed at the same time as diagnostic CT
    - FDG-PET/CT is most helpful in situations where standard staging studies are equivocal or suspicious
    - FDG-PET/CT may also be helpful in identifying unsuspected regional nodal disease and/or distant metastases when used in addition to standard staging studies
- Breast MRI (optional)

# Next

- Preoperative/Adjuvant Therapy Regimens (BINV-L)
    - A pertuzumab-containing regimen may be administered preoperatively to patients with HER2-positive IBC
- Go to IBC-2
