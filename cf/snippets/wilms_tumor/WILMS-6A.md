+++
id           = "wilms_tumor/WILMS-6A"
gid          = "wilms_tumor"
ref          = "WILMS-6A"
page         = 18
title        = "Footnote conditions on biopsy, staging, resection timing, radiation planning, and biomarker use for the unilateral renal tumor with predisposing condition pathway"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-6", "WILMS-C", "WILMS-D", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment"]

[[variables]]
name = "upfront_biopsy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "resection_week"
type = "number"
[[variables]]
name = "lung_rt"
type = "enum"
options = ["planned", "not planned", "undecided"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-6A, p18
- Footnotes for the localized unilateral renal tumor with predisposing condition pathway
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Upfront biopsy performed ___ (upfront_biopsy)
    - Upfront biopsy or resection is discouraged
- Local stage of the primary tumor ___ (local_stage)
    - Local stage III refers to staging of the primary tumor regardless of metastases
- Planned week of tumor resection ___ (resection_week)
- Lung radiation therapy anticipated ___ (lung_rt)

# Biopsy, staging, and chemotherapy regimen

- Upfront biopsy or resection is discouraged
- If biopsied, a tumor is considered to be stage III for determination of chemotherapy regimen
    - Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation
- If patient had biopsy upfront (not recommended), start with Regimen VAD
- Neoadjuvant chemotherapy is not a criterion for upstaging to stage III in this population
- Principles of Chemotherapy (WILMS-G)
- COG Staging of Wilms Tumor (ST-1)
- Principles of Pathology (WILMS-C)

# Surgery and timing

- Tumors should be resected by week 12 at the latest (partial or total nephrectomy)
    - Continued significant tumor shrinkage was not seen after that point in treatment
- Indications for complete nephrectomy for unilateral WT (with predisposing condition) are described in Principles of Surgery (WILMS-D)
- Repeat imaging of lungs before general anesthesia

# Radiation therapy

- Principles of Radiation Therapy (WILMS-H)
- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given, to minimize the degree of overlapping fields
    - There is concern for overlapping fields if the abdomen and lung are treated at different times
    - Some degree of overlap between the fields is expected in order to cover the target
- Local stage III refers to staging of the primary tumor regardless of metastases

# Molecular biomarkers

- Molecular biomarkers were not used to direct therapy in the AREN0534 trial
- Use of biomarkers from post-chemotherapy tumor has not been established to correlate with outcome, nor has it been used to direct therapy in a prospective trial
    - Outcomes of the AREN0534 study were excellent despite this
    - Regimen M was not studied in this population
- Use of prognostic biomarkers has not been validated in the COG nephron-sparing approach

# Next

- Complete response: refer to CR pathway at the top for treatment recommendations
