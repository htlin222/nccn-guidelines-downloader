+++
id           = "squamous/SCC-2"
gid          = "squamous"
ref          = "SCC-2"
page         = 9
title        = "Stratify local CSCC into low, high, or very-high risk to select treatment options"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-1", "SCC-4", "SCC-5", "SCC-6"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = ["workup", "staging"]

[[variables]]
name = "location"
type = "text"
[[variables]]
name = "diameter"
type = "number"
[[variables]]
name = "borders"
type = "enum"
options = ["well-defined", "poorly-defined"]
[[variables]]
name = "primary_recurrent"
type = "enum"
options = ["primary", "recurrent"]
[[variables]]
name = "immunosuppression"
type = "enum"
options = ["-", "+"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["-", "+"]
[[variables]]
name = "rapid_growth"
type = "enum"
options = ["-", "+"]
[[variables]]
name = "neurologic_symptoms"
type = "enum"
options = ["-", "+"]
[[variables]]
name = "differentiation"
type = "enum"
options = ["well", "moderately", "poorly"]
[[variables]]
name = "histologic_subtype"
type = "text"
[[variables]]
name = "depth"
type = "text"
[[variables]]
name = "perineural"
type = "enum"
options = ["-", "+"]
[[variables]]
name = "lvi"
type = "enum"
options = ["-", "+"]
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-2, p9
- Applies to local CSCC, stratified by risk factors for local recurrence, metastases, or death
- Risk category assignment should be based on the highest risk factor present
    - The high-risk group has elevated risk of local recurrence
    - The very-high-risk group has elevated risk of local recurrence and elevated risk of metastasis
- Pathology risk factors are read with SCC-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Location ___ (location)
- Diameter ___ (diameter) cm
- Clinical borders ___ (borders)
- Primary vs. recurrent ___ (primary_recurrent)
- Immunosuppression ___ (immunosuppression)
- Site of prior RT or chronic inflammation ___ (prior_rt)
- Rapid growth tumor ___ (rapid_growth)
- Neurologic symptoms ___ (neurologic_symptoms)
- Degree of differentiation ___ (differentiation)
- Histologic subtype ___ (histologic_subtype)
- Depth, thickness or level of invasion ___ (depth)
    - If clinical evaluation of incisional biopsy suggests that microstaging is inadequate, consider narrow margin excisional biopsy
- Perineural involvement ___ (perineural)
- Lymphatic or vascular involvement ___ (lvi)

# Low risk, all of the following

- Trunk, extremities <2 cm
- Clinical borders well-defined
- Primary
- Immunosuppression (-)
- Site of prior RT or chronic inflammation (-)
- Rapid growth tumor (-)
- Neurologic symptoms (-)
- Well or moderately differentiated
- Histologic subtype (-)
- Depth <2 mm thick and no invasion beyond subcutaneous fat
- Perineural involvement (-)
- Lymphatic or vascular involvement (-)

# High risk, any of the following

- Trunk, extremities 2 cm to ≤4 cm
- Head, neck, hands, feet, pretibia, and anogenital area (any size)
    - Narrow excision margins due to anatomic and functional constraints are associated with increased recurrence rates with standard histologic processing
    - Complete margin assessment with Mohs/PDEMA is recommended
    - For tumors <6 mm in size, without other high-risk or very-high-risk features, other treatment modalities may be considered if at least 4-mm clinically tumor-free margins can be obtained without significant anatomic or functional distortions
- Clinical borders poorly-defined
- Recurrent
- Immunosuppression (+)
- Site of prior RT or chronic inflammation (+)
- Rapid growth tumor (+)
- Neurologic symptoms (+)
- Histologic subtype (+)
    - Adenosquamous or sarcomatoid subtypes in any portion of the tumor
- Depth 2–6 mm and no invasion beyond subcutaneous fat
- Perineural involvement (+)

# Very high risk, any of the following

- >4 cm (any location)
- Poorly differentiated
- Histologic subtype (+)
    - Adenosquamous or sarcomatoid subtypes in any portion of the tumor
- Depth >6 mm or invasion beyond subcutaneous fat
    - Deep invasion is defined as invasion beyond the subcutaneous fat OR >6 mm, measured from the granular layer of adjacent normal epidermis to the base of the tumor, consistent with the AJCC Cancer Staging Manual, 8th Edition
- Perineural involvement
    - Tumor cells within the nerve sheath of a nerve lying deeper than the dermis or measuring ≥0.1 mm
- Lymphatic or vascular involvement (+)

# Next

- Low risk, go to SCC-4
- High risk, go to SCC-5
- Very high risk, go to SCC-5 and SCC-6
