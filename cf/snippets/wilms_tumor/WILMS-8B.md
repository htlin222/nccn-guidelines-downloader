+++
id           = "wilms_tumor/WILMS-8B"
gid          = "wilms_tumor"
ref          = "WILMS-8B"
page         = 23
title        = "Footnotes for the localized bilateral renal tumor pathway: biopsy, staging, resection timing, and regimen adjustment"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-8", "WILMS-8A", "WILMS-10"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment"]

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
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-8B, p23
- Footnotes for the localized bilateral renal tumor pathway
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Small nodules presumed to be nephrogenic rest on imaging: ___ (small_nodules)
- Biopsy performed: ___ (biopsy_done)
- Week 6 biopsy result: ___ (week6_biopsy)
- Weeks of chemotherapy completed: ___ (chemo_weeks)
- Partial nephrectomy feasible: ___ (partial_nephrectomy_feasible)

# Imaging nodules and upfront tissue sampling

- Small nodules that are presumed to be nephrogenic rest on imaging can be observed without resection or biopsy
    - Sandberg JK, et al. AJR AM J Roentgenol 2020;214:987-994
- Upfront biopsy or resection is discouraged
- Pathology is per Principles of Pathology (WILMS-C)

# Staging consequences of biopsy and of neoadjuvant chemotherapy

- If biopsied, a tumor is considered to be stage III for determination of chemotherapy regimen
    - Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation
- Neoadjuvant chemotherapy is not a criterion for upstaging to stage III in this population

# Chemotherapy and the week 6 biopsy

- Chemotherapy is per Principles of Chemotherapy (WILMS-G)
- If 6-week biopsy reveals blastemal predominant (all stages)
    - Use Regimen I
    - Re-evaluate at 12 weeks
- Otherwise
    - Continue Regimen VAD for 6 weeks
    - Re-evaluate at 12 weeks
- Molecular biomarkers were not used to direct therapy in the AREN0534 trial

# Surgery and resection timing

- Surgery is per Principles of Surgery (WILMS-D)
- Tumors should be resected by week 12 at the latest, partial or total nephrectomy
    - Continued significant tumor shrinkage was not seen after that point in treatment
- Total nephrectomy is indicated in patients with bilateral WT if partial nephrectomy is not feasible after 12 weeks of chemotherapy

# Next

- Week 6 biopsy shows anaplasia, revised Regimen UH-2, go to WILMS-10
