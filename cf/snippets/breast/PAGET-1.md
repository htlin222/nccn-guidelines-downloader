+++
id           = "breast/PAGET-1"
gid          = "breast"
ref          = "PAGET-1"
page         = 109
title        = "Clinical presentation and workup of suspected Paget disease of the breast"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["PAGET-2"]

[facets]
disease   = "breast"
histology = "paget"
timepoint = "workup"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "presenting_sign"
type = "enum"
options = ["eczema", "ulceration", "bleeding", "itching"]
[[variables]]
name = "exam_findings"
type = "text"
[[variables]]
name = "birads"
type = "text"
+++

# Source

- NCCN Breast Cancer v6.2026, PAGET-1, p109
- Applies to clinical suspicion of Paget disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Clinical suspicion of Paget disease, presenting as ___ (presenting_sign)
    - Nipple or areolar eczema
    - Nipple or areolar ulceration
    - Nipple or areolar bleeding
    - Nipple or areolar itching

# Workup

- Clinical breast exam, findings ___ (exam_findings)
- Diagnostic bilateral mammogram, BI-RADS ___ (birads)
    - Ultrasound as necessary
- Assess for distress
    - NCCN Distress Thermometer and Problem List, see NCCN Guidelines for Distress Management (DIS-A)
    - Problem List includes social determinants of health

# Next

- Examination or Breast Imaging Reporting and Data System (BI-RADS) 4 or 5 imaging, go to PAGET-2
- Examination and imaging negative for breast lesion, go to PAGET-2
