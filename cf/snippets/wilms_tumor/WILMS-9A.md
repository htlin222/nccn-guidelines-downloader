+++
id           = "wilms_tumor/WILMS-9A"
gid          = "wilms_tumor"
ref          = "WILMS-9A"
page         = 25
title        = "Metastatic bilateral renal tumors not resectable by partial nephrectomy at 6 weeks: continued neoadjuvant therapy, week 12 response, surgery, adjuvant chemotherapy, and radiation"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
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
name = "met_sites"
type = "text"
[[variables]]
name = "renal_response_wk6"
type = "text"
[[variables]]
name = "resectable_wk6"
type = "enum"
options = ["resectable by partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "renal_response_wk12"
type = "enum"
options = ["CR of renal tumors", "less than a CR"]
[[variables]]
name = "histology"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-9A, p25
- Applies to metastatic bilateral renal tumors, with or without predisposing condition
- Continuation of the pathway on WILMS-9
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Predisposing condition ___ (predisposing_condition)
- Metastatic sites ___ (met_sites)
- Renal tumor response at week 6 re-imaging ___ (renal_response_wk6)
- Resectability by partial nephrectomy at 6 weeks ___ (resectable_wk6)
- Renal tumor response at week 12 re-imaging ___ (renal_response_wk12)
- Histology ___ (histology)

# Neoadjuvant therapy

- Regimen VAD
    - Re-image week 6
- CR of renal tumors at week 6
    - Go to WILMS-9
- Resectable by partial nephrectomy at 6 weeks
    - Go to WILMS-9
- Not resectable by partial nephrectomy at 6 weeks
    - Continue on this page

# Not resectable by partial nephrectomy at 6 weeks

- Partial response
    - Continue Regimen VAD
    - Re-image week 12
- Less than a partial response in either kidney, or progression
    - Bilateral open biopsies recommended if partial nephrectomy not feasible
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

- Partial nephrectomy (one or both sides) when feasible
- Or total nephrectomy (after 12 weeks)
- With regional LN sampling
- Pathology is WT

# Next

- CR of renal tumors at week 6, go to WILMS-9
- Resectable by partial nephrectomy at 6 weeks, go to WILMS-9
- Less than a CR at week 12, go to WILMS-9 (surgery)
