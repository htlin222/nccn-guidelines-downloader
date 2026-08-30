+++
id           = "wilms_tumor/WILMS-9B"
gid          = "wilms_tumor"
ref          = "WILMS-9B"
page         = 26
title        = "Footnote conditions on nephrogenic rests, biopsy, staging, resection timing, radiation planning, and regimen adjustment for the bilateral renal tumor pathway"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-9", "WILMS-9A", "WILMS-10", "WILMS-C", "WILMS-D", "WILMS-G", "WILMS-H"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "small_nodules"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "biopsy_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "week6_biopsy"
type = "enum"
options = ["blastemal predominant", "anaplasia", "neither", "not done"]
[[variables]]
name = "chemo_weeks"
type = "number"
[[variables]]
name = "partial_nephrectomy_feasible"
type = "enum"
options = ["yes", "no", "undecided"]
[[variables]]
name = "local_stage_iii"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "days_since_surgery"
type = "number"
[[variables]]
name = "reimaging_done"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-9B, p26
- Footnotes for the bilateral renal tumor pathway
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Small nodules presumed to be nephrogenic rest on imaging ___ (small_nodules)
- Biopsy performed ___ (biopsy_done)
- Result of the 6-week biopsy ___ (week6_biopsy)
- Weeks of chemotherapy completed ___ (chemo_weeks)
- Partial nephrectomy feasible ___ (partial_nephrectomy_feasible)
- Local stage III of the primary tumor ___ (local_stage_iii)
- Days since surgery ___ (days_since_surgery)
- Primary and metastatic sites re-imaged ___ (reimaging_done)

# Imaging findings and biopsy

- Small nodules that are presumed to be nephrogenic rest on imaging can be observed without resection or biopsy
    - Sandberg JK, et al. AJR AM J Roentgenol 2020;214:987-994
- Upfront biopsy or resection is discouraged
- Re-image primary and metastatic sites
- Principles of Pathology (WILMS-C)

# Staging consequences of biopsy and neoadjuvant therapy

- If biopsied, a tumor is considered to be stage III for determination of chemotherapy regimen
    - Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation
- Neoadjuvant chemotherapy is not a criterion for upstaging to stage III in this population
- Local stage III refers to staging of the primary tumor regardless of metastases

# Chemotherapy and reassessment after the 6-week biopsy

- Principles of Chemotherapy (WILMS-G)
- If 6-week biopsy reveals blastemal predominant (all stages), then use Regimen I and re-evaluate at 12 weeks
- Otherwise continue Regimen VAD for 6 weeks and re-evaluate at 12 weeks

# Surgery and timing

- Principles of Surgery (WILMS-D)
- Tumors should be resected by week 12 at the latest (partial or total nephrectomy)
    - Continued significant tumor shrinkage was not seen after that point in treatment
- Total nephrectomy is indicated in patients with bilateral WT if partial nephrectomy is not feasible after 12 weeks of chemotherapy

# Radiation therapy

- Principles of Radiation Therapy (WILMS-H)
- RT to the primary site is often given 10 to 14 days after surgery
- Concern for overlapping fields if the abdomen and lung are treated at different times
    - Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given
    - Planning this way minimizes the degree of overlapping fields
    - Some degree of overlap between the fields is expected in order to cover the target

# Molecular biomarkers

- Molecular biomarkers were not used to direct therapy in the AREN0534 trial

# Next

- Week 6 biopsy shows anaplasia: revised Regimen UH-2, go to WILMS-10
