+++
id           = "breast-screening/BSCR-12"
gid          = "breast-screening"
ref          = "BSCR-12"
page         = 20
title        = "Follow-up evaluation of imaging findings for focal breast pain"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-11", "BSCR-1", "BSCR-15"]

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
name = "pain_location"
type = "text"
[[variables]]
name = "imaging_done"
type = "text"
[[variables]]
name = "birads"
type = "enum"
options = ["1", "2", "3", "4", "5"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-12, p20
- Imaging findings for focal breast pain, follow-up evaluation
- Assessment category definitions: BSCR-C
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Focal breast pain, location ___ (pain_location)
- Imaging already performed ___ (imaging_done)
- BI-RADS category ___ (birads) (BSCR-C)

# BI-RADS category 1

- Symptomatic management (Discussion)

# BI-RADS category 2

- If simple cyst, consider drainage for symptom relief
- If complicated cyst, consider aspiration

# BI-RADS category 3

- Physical examination + imaging to assess for changes
    - Ultrasound, or diagnostic mammogram with tomosynthesis
        - Imaging modality would depend on original imaging
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - Probably benign findings are typically monitored at 6, 12, and 24 months
    - If a return visit is uncertain or there is strong patient preference, may include biopsy
- When imaging indicates possible abscess as cause of focal pain, consider antibiotics, aspiration, and/or surgical consultation

# BI-RADS category 4

- When imaging indicates possible abscess as cause of focal pain, consider antibiotics, aspiration, and/or surgical consultation
- Core needle biopsy (BSCR-15)

# BI-RADS category 5

- Core needle biopsy (BSCR-15)

# Next

- BI-RADS category 3, stable or now definitively benign imaging characteristics, go to screening (BSCR-1)
- BI-RADS category 3, significant increase in size or suspicion, go to core needle biopsy (BSCR-15)
- BI-RADS category 4, go to core needle biopsy (BSCR-15)
- BI-RADS category 5, go to core needle biopsy (BSCR-15)
