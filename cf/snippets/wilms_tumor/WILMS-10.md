+++
id           = "wilms_tumor/WILMS-10"
gid          = "wilms_tumor"
ref          = "WILMS-10"
page         = 27
title        = "Adjuvant chemotherapy and radiation therapy for unilateral Wilms tumor with focal or diffuse anaplasia after primary nephrectomy"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["ST-1", "WILMS-8B", "WILMS-G", "WILMS-H"]

[facets]
disease   = "wilms_tumor"
stage     = ["I", "II", "III", "IV"]
timepoint = "adjuvant"

[[variables]]
name = "anaplasia"
type = "enum"
options = ["focal", "diffuse"]
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II", "III", "IV"]
[[variables]]
name = "local_stage"
type = "enum"
options = ["I", "II", "III"]
[[variables]]
name = "age_months"
type = "number"
[[variables]]
name = "lung_mets"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "extrapulmonary_sites"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-10, p27
- Applies to unilateral Wilms tumor with focal or diffuse anaplasia treated with primary nephrectomy
- Staging follows COG Staging of Wilms Tumor (ST-1)
- Chemotherapy detail: Principles of Chemotherapy (WILMS-G)
- Radiation detail: Principles of Radiation Therapy (WILMS-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Unilateral Wilms tumor, primary nephrectomy performed
- Anaplasia ___ (anaplasia)
- COG stage ___ (stage) (ST-1)
- Local stage ___ (local_stage)
- Age ___ (age_months) months
- Lung metastases ___ (lung_mets)
- Other extrapulmonary metastatic sites ___ (extrapulmonary_sites)

# Focal anaplasia, primary nephrectomy

- Stage I–III
    - Adjuvant chemotherapy: Regimen DD4A (WILMS-G)
        - Intensification of therapy may be warranted for stage III focal anaplastic WT (FAWT), based on inferior outcomes of the AREN0321 study (Armstrong AE, et al. Cancer 2025;131:e35713)
    - Radiation therapy (WILMS-H)
        - Flank for stage I or II
        - Flank or whole abdomen for stage III (ST-1)
- Stage IV
    - Adjuvant chemotherapy: Revised Regimen UH-1 (WILMS-G)
    - Radiation therapy (WILMS-H)
        - Flank for local stage I or II
        - Flank or whole abdomen for local stage III (ST-1)
        - Whole lung for lung metastases
        - Other extrapulmonary sites

# Diffuse anaplasia, primary nephrectomy

- Stage I
    - Adjuvant chemotherapy: Regimen DD4A (WILMS-G)
    - Radiation therapy: flank radiation (WILMS-H)
- Stage II–IV
    - Adjuvant chemotherapy: Revised Regimen UH-2 (WILMS-G)
    - Radiation therapy (WILMS-H)
        - Flank for local stage II
        - Flank or whole abdomen for local stage III (ST-1)
            - A higher dose of radiation for stage III DAWT lowers the risk of local recurrence (Daw NC, et al. J Clin Oncol 2020;38:1558-1568)
        - Whole lung for lung metastases
        - Other extrapulmonary sites

# Radiation therapy timing

- RT to the primary and metastatic sites is often given 10 to 14 days after surgery
- RT should be delayed for patients <6 months of age treated on Revised Regimens UH-1 and UH-2
    - Delay until they are ≥6 months of age and are tolerating therapy well
