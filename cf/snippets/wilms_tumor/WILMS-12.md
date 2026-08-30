+++
id           = "wilms_tumor/WILMS-12"
gid          = "wilms_tumor"
ref          = "WILMS-12"
page         = 29
title        = "Adjuvant chemotherapy and radiation therapy for unilateral WT with focal or diffuse anaplasia and a predisposing condition, after partial or total nephrectomy"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-11", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
stage     = ["I", "II", "III", "IV"]
timepoint = "adjuvant"

[[variables]]
name = "age_months"
type = "number"
[[variables]]
name = "anaplasia"
type = "enum"
options = ["focal", "diffuse"]
[[variables]]
name = "surgery"
type = "enum"
options = ["partial nephrectomy", "total nephrectomy"]
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-12, p29
- Applies to unilateral WT with a predisposing condition, post-partial or total nephrectomy
- Findings split into focal anaplasia and diffuse anaplasia
- Staging: COG Staging of Wilms Tumor (ST-1)
- Chemotherapy: Principles of Chemotherapy (WILMS-G)
- Radiation: Principles of Radiation Therapy (WILMS-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age_months) months of age
- Unilateral WT with predisposing condition
- Anaplasia ___ (anaplasia)
- Surgery already performed ___ (surgery)
- COG stage ___ (stage)
- Local stage of the primary tumor ___ (local_stage)
- Metastatic sites ___ (met_sites)

# Focal anaplasia, stage I-III

- Adjuvant chemotherapy: switch to Regimen DD4A
    - Intensification of therapy may be warranted for stage III FAWT, based on inferior outcomes of the AREN0321 study (Armstrong AE, et al. Cancer 2025;131:e35713)
- Radiation therapy
    - Flank for stage I or II
    - Flank or whole abdomen for stage III, staged per ST-1
    - RT to the primary and metastatic sites is often given 10 to 14 days after surgery

# Focal anaplasia, stage IV

- Adjuvant chemotherapy: switch to Revised Regimen UH-1
- Radiation therapy
    - Flank for local stage I or II
    - Flank or whole abdomen for local stage III, staged per ST-1
    - Whole lung for lung metastases
    - Other extrapulmonary sites
    - RT to the primary and metastatic sites is often given 10 to 14 days after surgery
    - Delay RT for patients <6 months of age treated on Revised Regimen UH-1, until they are >=6 months of age and are tolerating therapy well

# Diffuse anaplasia, stage I

- Adjuvant chemotherapy: switch to Regimen DD4A
- Radiation therapy
    - Flank radiation
    - RT to the primary and metastatic sites is often given 10 to 14 days after surgery

# Diffuse anaplasia, stage II-IV

- Adjuvant chemotherapy: switch to Revised Regimen UH-2
- Radiation therapy
    - Flank for local stage II
    - Flank or whole abdomen for local stage III, see Principles of Radiation Therapy (WILMS-H)
        - A higher dose of radiation for stage III DAWT lowers the risk of local recurrence (Daw NC, et al. J Clin Oncol 2020;38:1558-1568)
    - Whole lung for lung metastases
    - Other extrapulmonary sites
    - RT to the primary and metastatic sites is often given 10 to 14 days after surgery
    - Delay RT for patients <6 months of age treated on Revised Regimen UH-2, until they are >=6 months of age and are tolerating therapy well
