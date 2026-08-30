+++
id           = "wilms_tumor/WILMS-7"
gid          = "wilms_tumor"
ref          = "WILMS-7"
page         = 19
title        = "Neoadjuvant therapy, surgery, adjuvant chemotherapy, and radiation for a metastatic unilateral renal tumor with a predisposing condition"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-2", "WILMS-6", "WILMS-7A", "WILMS-12"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant", "metastatic"]

[[variables]]
name = "predisposing_condition"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "week6_finding"
type = "enum"
options = ["CR of renal tumors", "resectable by partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "week6_response"
type = "enum"
options = ["partial response of renal tumors", "less than a partial response of renal tumors", "progression"]
[[variables]]
name = "week12_finding"
type = "enum"
options = ["CR of renal tumors", "less than CR of renal tumors"]
[[variables]]
name = "surgery"
type = "enum"
options = ["partial nephrectomy", "total nephrectomy"]
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "histology_result"
type = "enum"
options = ["FHWT not blastemal predominant", "FHWT blastemal predominant", "WT with anaplasia"]
[[variables]]
name = "local_stage"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-7, p19
- Applies to a metastatic unilateral renal tumor with a predisposing condition
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Metastatic unilateral renal tumor
- Predisposing condition ___ (predisposing_condition)
- Sites of metastatic disease ___ (met_sites)
    - Lung metastases
    - Other extrapulmonary sites (eg, LNs)
- Finding at week 6 re-imaging ___ (week6_finding)
- Response at week 6 if not resectable ___ (week6_response)
- Finding at week 12 re-imaging ___ (week12_finding)
- Surgery performed ___ (surgery)
- Pathology ___ (pathology)
- Histology result ___ (histology_result)
- Local stage ___ (local_stage)

# Neoadjuvant therapy

- Regimen VAD
- Re-image week 6

# Findings at week 6

- CR of renal tumors
    - Switch to Regimen DD4A
    - No flank radiation
    - Whole lung for lung metastases, and/or
    - Other extrapulmonary sites (eg, LNs)
- Resectable by partial nephrectomy at 6 weeks
    - Proceed to surgery
- Not resectable by partial nephrectomy at 6 weeks
    - Partial response of renal tumors
        - Continue Regimen VAD
        - Re-image week 12
        - CR of renal tumors at week 12
    - Less than a partial response of renal tumors, or progression

# Surgery

- Partial nephrectomy, when feasible, or total nephrectomy
- Regional LN sampling
- Pathology is WT

# Histology results and adjuvant chemotherapy

- FHWT not blastemal predominant
    - Switch to Regimen DD4A
- FHWT blastemal predominant
    - Switch to Regimen I
- WT with anaplasia
    - Go to WILMS-12

# Radiation therapy after nephrectomy

- Flank or whole abdomen for local stage III
- Whole lung for lung metastases
- Other extrapulmonary sites

# Next

- WT with anaplasia on pathology, go to WILMS-12
- CR of renal tumors at week 12, follow the CR of renal tumors pathway on this page
