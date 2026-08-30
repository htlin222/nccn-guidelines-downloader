+++
id           = "breast-screening/BSCR-17"
gid          = "breast-screening"
ref          = "BSCR-17"
page         = 25
title        = "Follow-up evaluation after aspiration of a clinically suspicious palpable BI-RADS category 2 finding"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-15", "BSCR-16", "BSCR-1"]

[facets]
disease   = "breast-screening"
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "mass_location"
type = "text"
[[variables]]
name = "mass_after_aspiration"
type = "enum"
options = ["resolved", "persists"]
[[variables]]
name = "fluid"
type = "enum"
options = ["bloody", "non-bloody", "none"]
[[variables]]
name = "cytology"
type = "enum"
options = ["not-sent", "negative", "atypical", "malignant"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-17, p25
- Follow-up evaluation after aspiration following a clinically suspicious palpable BI-RADS category 2 finding
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Palpable finding at ___ (mass_location)
- Clinically suspicious palpable finding assessed as BI-RADS category 2
- Aspiration performed
- Mass after aspiration ___ (mass_after_aspiration)
- Fluid obtained ___ (fluid)
- Cytology ___ (cytology)

# Follow-up after aspiration

- Mass persists
    - Ultrasound + image-guided core needle biopsy (BSCR-15)
        - Place marker clip and send to pathology
- Mass resolves but non-traumatic, bloody fluid obtained
    - Place marker clip and send to pathology
    - Negative cytology
        - Consider core needle biopsy (BSCR-15)
        - or short-term clinical/imaging follow-up
    - Atypical or malignant cytology
        - Surgical consultation with or without excision (BSCR-16)
        - There are some circumstances in which cytology may be sufficient
        - If cytology is concordant, core needle biopsy may not be needed
- Mass resolves and non-bloody cyst fluid obtained
    - Routine cytology is not recommended

# Next

- Mass persists, go to ultrasound + image-guided core needle biopsy (BSCR-15)
- Bloody fluid with negative cytology, consider core needle biopsy (BSCR-15) or short-term clinical/imaging follow-up
- Bloody fluid with atypical or malignant cytology, surgical consultation with or without excision (BSCR-16)
- Mass resolves and non-bloody cyst fluid obtained, return to screening (BSCR-1)
