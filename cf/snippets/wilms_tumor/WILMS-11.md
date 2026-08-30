+++
id           = "wilms_tumor/WILMS-11"
gid          = "wilms_tumor"
ref          = "WILMS-11"
page         = 28
title        = "Neoadjuvant, surgical, adjuvant chemotherapy and radiation decisions for unilateral Wilms tumor with diffuse anaplasia, initially unresectable, no predisposing condition"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-10", "WILMS-G", "WILMS-H", "WILMS-I"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "anaplasia_basis"
type = "enum"
options = ["biopsy", "resection specimen"]
[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["none", "present"]
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "lung_mets"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "other_sites"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "progression"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-11, p28
- Applies to unilateral WT with diffuse anaplasia, initially unresectable, no predisposing condition
- Principles of Chemotherapy (WILMS-G)
- Principles of Radiation Therapy (WILMS-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Diffuse anaplasia established on ___ (anaplasia_basis)
- Predisposing condition ___ (predisposing_condition)
- Local stage ___ (local_stage)
- Lung metastases ___ (lung_mets)
- Other extrapulmonary metastatic sites ___ (other_sites)
- Status at re-imaging ___ (resectability)

# Findings that define this pathway

- Unilateral WT with diffuse anaplasia
    - Anaplasia noted on a biopsy is considered to be diffuse
    - Initial biopsy is not recommended for children with imaging findings of bilateral renal tumors, or unilateral tumor and known predisposing condition
        - Biopsy should be considered for children in those categories who also are >10 years of age, or with concern for pathology other than WT
- Initially unresectable
- No predisposing condition
    - Conditions that predispose to WT include genetic disorders such as Denys-Drash, WAGR, Beckwith-Wiedemann, Frasier, and Perlman syndromes, and contralateral nephrogenic rests in children <12 months
    - Ten percent to 33% of WT occurs in children with predisposing conditions
    - Children with known predisposing conditions should be screened for WT with PE and abdominal US every 3 months until 7 years of age (ie, all of year 6)
    - Principles of Cancer Risk Assessment and Counseling (WILMS-I)

# Neoadjuvant therapy

- Revised Regimen UH-2
    - Principles of Chemotherapy (WILMS-G)
- Re-image at week 6

# Re-imaging at week 6

- Resectable
    - Nephrectomy with regional LN sampling
- Unresectable
    - Continue Revised Regimen UH-2
    - Re-image at week 12
    - If imaging shows tumor progression (increase in size), nephrectomy OR rebiopsy (to evaluate for rhabdomyomatous changes) should be performed

# Adjuvant chemotherapy after nephrectomy

- Continue Revised Regimen UH-2
    - Principles of Chemotherapy (WILMS-G)

# Radiation therapy after nephrectomy

- Principles of Radiation Therapy (WILMS-H)
- RT to the primary and metastatic sites is often given 10 to 14 days after surgery
- RT should be delayed for patients <6 months of age treated on Revised Regimens UH-1 and UH-2 until they are 6 months of age or older and are tolerating therapy well
- Flank or whole abdomen
    - A higher dose of radiation for stage III DAWT lowers the risk of local recurrence (Daw NC, et al. J Clin Oncol 2020;38:1558-1568)
- Whole lung for lung metastases
- Other extrapulmonary sites

# Next

- Resectable at week 6: nephrectomy with regional LN sampling, then continue Revised Regimen UH-2 and give radiation therapy
- Unresectable at week 6: continue Revised Regimen UH-2 and re-image at week 12
