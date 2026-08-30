+++
id           = "wilms_tumor/WILMS-9"
gid          = "wilms_tumor"
ref          = "WILMS-9"
page         = 24
title        = "Neoadjuvant therapy, resectability at 6 weeks, surgery, histology-directed adjuvant chemotherapy, and radiation for metastatic bilateral renal tumors"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-9A", "WILMS-13", "WILMS-C", "WILMS-D", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
stage     = "IV"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant", "metastatic"]

[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "upfront_biopsy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "renal_response_wk6"
type = "text"
[[variables]]
name = "resectable_wk6"
type = "enum"
options = ["resectable by partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "local_stage"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-9, p24
- Applies to metastatic bilateral renal tumors, with or without predisposing condition
- Upfront biopsy or resection is discouraged
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Predisposing condition ___ (predisposing_condition)
- Metastatic sites ___ (met_sites)
- Upfront biopsy performed ___ (upfront_biopsy)
    - If biopsied, a tumor is considered to be stage III for determination of chemotherapy regimen
    - Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation
- Renal tumor response on re-imaging at week 6 ___ (renal_response_wk6)
- Resectability at 6 weeks ___ (resectable_wk6)
    - Small nodules that are presumed to be nephrogenic rest on imaging can be observed without resection or biopsy
- Histology of the resected tumor ___ (histology)
- Local stage of the primary tumor ___ (local_stage)
    - Local stage III refers to staging of the primary tumor regardless of metastases

# Neoadjuvant therapy

- Regimen VAD
    - Principles of Chemotherapy (WILMS-G)
    - Neoadjuvant chemotherapy is not a criterion for upstaging to stage III in this population
- Re-image at week 6
    - Re-image primary and metastatic sites

# Findings at 6 weeks

- CR of renal tumors
    - Switch to Regimen DD4A
- Resectable by partial nephrectomy at 6 weeks
    - Proceed to surgery
- Not resectable by partial nephrectomy at 6 weeks
    - Go to WILMS-9A

# Surgery

- Partial nephrectomy (one or both sides) when feasible
- Total nephrectomy (after 12 weeks)
    - Total nephrectomy is indicated in patients with bilateral WT if partial nephrectomy is not feasible after 12 weeks of chemotherapy
- Regional LN sampling
- Pathology is WT
    - Principles of Pathology (WILMS-C)
    - Principles of Surgery (WILMS-D)

# Histology results and adjuvant chemotherapy

- Molecular biomarkers were not used to direct therapy in the AREN0534 trial
- FHWT not blastemal predominant
    - Switch to Regimen DD4A
- FHWT blastemal predominant
    - Switch to Regimen I
- WT with anaplasia
    - Go to WILMS-13
- Principles of Chemotherapy (WILMS-G)

# Radiation therapy

- Principles of Radiation Therapy (WILMS-H)
- After CR of renal tumors, without resection
    - No flank radiation
    - Whole lung for lung metastases and/or other extrapulmonary sites (eg, LNs)
- After partial or total nephrectomy
    - Flank or whole abdomen for local stage III
        - COG Staging of Wilms Tumor (ST-1)
        - Local stage III refers to staging of the primary tumor regardless of metastases
    - Whole lung for lung metastases
    - Other extrapulmonary sites
- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given, to minimize the degree of overlapping fields
    - There is concern for overlapping fields if the abdomen and lung are treated at different times
    - Some degree of overlap between the fields is expected in order to cover the target
- Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation

# Next

- CR of renal tumors: switch to Regimen DD4A
- Resectable by partial nephrectomy at 6 weeks: surgery, then adjuvant chemotherapy directed by histology
- Not resectable by partial nephrectomy at 6 weeks: go to WILMS-9A
- WT with anaplasia: go to WILMS-13
