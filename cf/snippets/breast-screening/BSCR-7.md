+++
id           = "breast-screening/BSCR-7"
gid          = "breast-screening"
ref          = "BSCR-7"
page         = 15
title        = "Follow-up after imaging for a palpable symptom with BI-RADS category 1, 2, or 3 findings"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-6", "BSCR-1", "BSCR-15", "BSCR-16", "BSCR-17", "BSCR-C"]

[facets]
disease   = "breast-screening"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "palpable_symptom"
type = "text"
[[variables]]
name = "finding_location"
type = "text"
[[variables]]
name = "distance_from_nipple"
type = "text"
[[variables]]
name = "imaging_done"
type = "text"
[[variables]]
name = "birads"
type = "enum"
options = ["1", "2", "3"]
[[variables]]
name = "clinical_suspicion"
type = "enum"
options = ["clinically suspicious", "low clinical suspicion"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-7, p15
- Applies to imaging findings corresponding to a palpable symptom
- Palpable symptom includes mass, new-onset asymmetric thickening/nodularity, asymmetric breast enlargement, or change in shape/contour
    - Change in shape/contour may be due to implant rupture
    - See https://www.fda.gov/media/131885/download and BSCR-6
- Covers BI-RADS category 1, category 2, and category 3 findings only
- Assessment Category Definitions (BSCR-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Palpable symptom ___ (palpable_symptom)
- Location of the physical finding from CBE documented as clock/quadrant location ___ (finding_location)
    - Distance from nipple ___ (distance_from_nipple)
    - Documentation is critical to facilitate geographic correlation with imaging findings
- Imaging performed ___ (imaging_done)
- BI-RADS category ___ (birads)
- Level of clinical suspicion ___ (clinical_suspicion)

# BI-RADS category 1 (negative)

- If clinically suspicious
    - Appropriate clinical management
- If low clinical suspicion
    - Physical examination at 3–6 mo
        - Instruct the patient to monitor for and report any changes
    - Significant increase in size or clinical suspicion
        - Appropriate clinical management
    - Stable or decrease in size
        - Screening

# BI-RADS category 2 (benign)

- Aspiration may be considered for symptomatic relief or possible abscess
- If clinically suspicious
    - Appropriate clinical management
- If low clinical suspicion, eg, simple cyst
    - Instruct the patient to monitor for and report any changes
    - Screening

# BI-RADS category 3 (probably benign)

- If clinically suspicious
    - Core needle biopsy
- If low clinical suspicion
    - Instruct the patient to monitor for and report any changes
    - Physical examination + imaging to assess for changes
        - Ultrasound, or diagnostic mammogram with tomosynthesis
            - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
        - Imaging modality would depend on original imaging
        - Probably benign findings are typically monitored at 6, 12, and 24 months
        - If a return visit is uncertain or there is strong patient preference, may include biopsy
    - Stable or decrease in size, or now definitively benign imaging characteristics
        - Screening
    - Significant increase in size or clinical suspicion
        - Core needle biopsy

# Next

- Appropriate clinical management, go to BSCR-16
    - Referral to a breast specialist, supplemental imaging, and/or tissue sampling
- Screening, go to BSCR-1
    - Continue regular screening with age-appropriate imaging modality
- Core needle biopsy, go to BSCR-15
    - Core needle biopsy preferred; in some circumstances needle aspiration may be sufficient
- Aspiration considered for symptomatic relief or possible abscess, go to BSCR-17
