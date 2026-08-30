+++
id           = "wilms_tumor/WILMS-9A"
gid          = "wilms_tumor"
ref          = "WILMS-9A"
page         = 25
title        = "Response-directed neoadjuvant, surgical, adjuvant chemotherapy, and radiation decisions for metastatic bilateral renal tumors on Regimen VAD"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-9"]

[facets]
disease   = "wilms_tumor"
stage     = "IV"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant", "metastatic"]

[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "metastatic_sites"
type = "text"
[[variables]]
name = "week6_response"
type = "enum"
options = ["CR of renal tumors", "partial response", "less than a partial response", "progression"]
[[variables]]
name = "resectable_by_partial_nephrectomy_at_6_weeks"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "week12_response"
type = "enum"
options = ["CR of renal tumors", "less than a CR"]
[[variables]]
name = "histology"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-9A, p25
- Applies to metastatic bilateral renal tumors, with or without a predisposing condition
- Continues the pathway on WILMS-9
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Metastatic bilateral renal tumors
- Predisposing condition ___ (predisposing_condition)
- Metastatic sites ___ (metastatic_sites)
- Response at week 6 ___ (week6_response)
- Resectable by partial nephrectomy at 6 weeks ___ (resectable_by_partial_nephrectomy_at_6_weeks)
- Response at week 12 ___ (week12_response)
- Pathology / histology ___ (histology)

# Neoadjuvant therapy

- Regimen VAD
    - Re-image at week 6
- Assess at 6 weeks
    - CR of renal tumors, go to WILMS-9
    - Resectable by partial nephrectomy at 6 weeks, go to WILMS-9
    - Not resectable by partial nephrectomy at 6 weeks, continue on this page

# Not resectable by partial nephrectomy at 6 weeks

- Partial response
    - Continue Regimen VAD
    - Re-image at week 12
- Less than a partial response in either kidney, or progression
    - Bilateral open biopsies recommended if partial nephrectomy is not feasible
    - Adjust chemotherapy based on histology
    - Re-image at week 12

# CR of renal tumors at week 12

- Adjuvant chemotherapy
    - Switch to Regimen DD4A
- Radiation therapy
    - No flank radiation
    - Whole lung for lung metastases, and/or
    - Other extrapulmonary sites (eg, LNs)

# Less than a CR at week 12

- Partial nephrectomy (one or both sides) when feasible, or total nephrectomy (after 12 weeks)
    - With regional LN sampling
- Pathology is WT

# Next

- CR of renal tumors at 6 weeks, go to WILMS-9
- Resectable by partial nephrectomy at 6 weeks, go to WILMS-9
- Less than a CR at week 12, go to WILMS-9 (surgery)
