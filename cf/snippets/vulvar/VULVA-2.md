+++
id           = "vulvar/VULVA-2"
gid          = "vulvar"
ref          = "VULVA-2"
page         = 7
title        = "Primary treatment of early stage (Stage I and select Stage II) vulvar cancer, by pathologic findings"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-1", "VULVA-3", "VULVA-4", "VULVA-C"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
stage     = ["I", "II"]
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "depth_of_invasion"
type = "number"
[[variables]]
name = "lesion_location"
type = "enum"
options = ["lateral", "near-midline", "midline"]
[[variables]]
name = "distance_from_midline"
type = "number"
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-2, p7
- Applies to early stage disease: Stage I and select Stage II
- Primary treatment is chosen from the biopsy pathologic findings
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage ___ (clinical_stage)
- Early stage: Stage I or select Stage II
- Biopsy done, pathologic findings available
- Depth of invasion ___ (depth_of_invasion) mm
- Lesion location ___ (lesion_location)
- Distance from vulvar midline ___ (distance_from_midline) cm

# Stage IA (≤1 mm invasion)

- Simple partial vulvectomy (preferred)
    - Principles of Surgery (VULVA-C)
    - If partial superficial vulvectomy pathology reveals tumor in aggregate of ≥1 mm invasion, then additional surgery may be warranted
- Observe if negative margins
- If positive margins, go to VULVA-3

# Stage IB (>1 mm invasion) or select Stage II

- Lateral lesion (≥2 cm from vulvar midline)
    - Radical partial vulvectomy and ipsilateral inguinofemoral lymph node (LN) evaluation
        - Principles of Surgery (VULVA-C)
    - Sentinel lymph node biopsy (SLNB), or ipsilateral inguinofemoral lymphadenectomy
        - Inguinofemoral lymphadenectomy is required on side(s) where sentinel nodes are not detected
- Near midline or midline lesions (anterior or posterior)
    - Principles of Surgery: SLNB Management (VULVA-C 5 of 6)
    - Radical partial vulvectomy and bilateral inguinofemoral LN evaluation
        - Principles of Surgery (VULVA-C)
    - SLNB, or bilateral inguinofemoral lymphadenectomy
        - Inguinofemoral lymphadenectomy is required on side(s) where sentinel nodes are not detected

# Surgical pathology

- Assessment of primary tumor and nodal surgical pathology
    - Principles of Surgery: Tumor Margin Status (VULVA-C 1 of 6)

# Next

- Stage IA with negative margins, observe
- Stage IA with positive margins, go to VULVA-3
- After Stage IB or select Stage II surgery, go to Adjuvant Therapy based on Primary Tumor Risk Factors (VULVA-3) and Nodal Evaluation (VULVA-4)
