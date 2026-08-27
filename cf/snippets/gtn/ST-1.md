+++
id           = "gtn/ST-1"
gid          = "gtn"
ref          = "ST-1"
page         = 27
title        = "FIGO staging system for gestational trophoblastic neoplasia"
nccn_version = "2.2026"
nccn_date    = "11/21/25"
generated    = "2026-08-28"
see_also     = ["GTN-1"]

[facets]
disease   = "gtn"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "uterine_disease"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "genital_extension"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "lung_metastasis"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "other_distant_metastasis"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "figo_stage"
type = "enum"
options = ["I", "II", "III", "IV"]
+++

# Source

- NCCN Gestational Trophoblastic Neoplasia v2.2026, ST-1, p27
- FIGO staging system for GTN
- Table used with permission of the American College of Surgeons, Chicago, Illinois
    - The original source for this information is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Tumor confined to uterus ___ (uterine_disease)
- Tumor extends to other genital structures ___ (genital_extension)
- Lung metastasis ___ (lung_metastasis)
- Other distant metastases ___ (other_distant_metastasis)
- FIGO stage ___ (figo_stage)

# Stage criteria

- Stage I
    - Tumor confined to uterus
- Stage II
    - Tumor extends to other genital structures, by metastasis or by direct extension
        - Ovary
        - Tube
        - Vagina
        - Broad ligaments
- Stage III
    - Lung metastasis
- Stage IV
    - All other distant metastases
