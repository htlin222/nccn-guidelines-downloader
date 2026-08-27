+++
id           = "cervical/CERV-4"
gid          = "cervical"
ref          = "CERV-4"
page         = 15
title        = "Primary treatment of stage IA2-IB1 disease meeting all conservative surgery criteria, non-fertility sparing"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-3", "CERV-6", "CERV-B", "CERV-C"]

[facets]
disease   = "cervical"
histology = ["squamous", "adenocarcinoma"]
stage     = "I"
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "depth_of_invasion"
type = "number"
[[variables]]
name = "lvsi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "cone_margin"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "stromal_invasion"
type = "text"
[[variables]]
name = "imaging"
type = "text"
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-4, p15
- Applies to stage IA2-IB1 cervical carcinoma, non-fertility sparing
- Applies only when all conservative surgery criteria below are met
- Clinical stage is assigned per Principles of Imaging (CERV-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage ___ (clinical_stage)
- ___ (histology)
- Grade ___ (grade)
- Tumor size ___ (tumor_size) cm
- Depth of invasion on cone ___ (depth_of_invasion) mm
- Cervical stromal invasion on MRI ___ (stromal_invasion), if no conization
- LVSI ___ (lvsi)
- Cone margins ___ (cone_margin)
- Imaging for metastatic disease ___ (imaging)
- Fertility preservation not desired

# Conservative surgery criteria, all must be met

- Cone biopsy (preferred)
    - CKC is the preferred method of diagnostic excision
    - LEEP is acceptable, provided adequate margins and proper orientation are obtained
    - ECC above the excision should be added, except in pregnancy
- No LVSI (preferred)
- Negative cone margins for cancer (preferred)
- Squamous cell, any grade (preferred)
    - Or usual type adenocarcinoma, grade 1 or 2 (preferred)
- Tumor size 2 cm or less
- Depth of invasion less than 10 mm on cone
    - Cone assessed by CKC (preferred) or LEEP, as above
    - If no conization, MRI must show less than 50% cervical stromal invasion (CERV-B)
- Negative imaging for metastatic disease
    - MRI recommended

# Primary treatment, non-fertility sparing

- Type A hysterectomy
- Plus SLN mapping or pelvic lymphadenectomy
    - Per Principles of Evaluation and Surgical Staging (CERV-C)

# Next

- Go to Surgical Findings (CERV-6)
