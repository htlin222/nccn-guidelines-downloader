+++
id           = "wilms_tumor/WILMS-7"
gid          = "wilms_tumor"
ref          = "WILMS-7"
page         = 19
title        = "Neoadjuvant, surgical, adjuvant chemotherapy, and radiation decisions for metastatic unilateral renal tumor with a predisposing condition"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-2", "WILMS-6", "WILMS-7A", "WILMS-12"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant", "metastatic"]

[[variables]]
name = "age"
type = "text"
[[variables]]
name = "predisposing_condition"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "week6_status"
type = "enum"
options = ["CR of renal tumors", "resectable by partial nephrectomy", "partial response, not resectable", "less than partial response or progression"]
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
- Applies to metastatic unilateral renal tumor with a predisposing condition
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) old
- Metastatic unilateral renal tumor
- Predisposing condition ___ (predisposing_condition)
- Metastatic sites ___ (met_sites)
    - Lung metastases
    - Other extrapulmonary sites (eg, LNs)

# Neoadjuvant therapy

- Regimen VAD
- Re-image at week 6
- Status at week 6 ___ (week6_status)

# CR of renal tumors

- Switch to Regimen DD4A
- Radiation therapy
    - No flank radiation
    - Whole lung for lung metastases, and/or
    - Other extrapulmonary sites (eg, LNs)

# Renal tumor not resectable by partial nephrectomy at 6 weeks

- Partial response of renal tumors
    - Continue Regimen VAD
    - Re-image at week 12
    - CR of renal tumors at week 12
- Less than a partial response of renal tumors, or progression

# Surgery, when resectable by partial nephrectomy at 6 weeks

- Partial nephrectomy, when feasible, or total nephrectomy
- Regional LN sampling
- Pathology is WT ___ (pathology)

# Histology results and adjuvant chemotherapy

- Histology result ___ (histology_result)
    - FHWT not blastemal predominant, switch to Regimen DD4A
    - FHWT blastemal predominant, switch to Regimen I
    - WT with anaplasia, go to WILMS-12

# Radiation therapy after nephrectomy

- Local stage ___ (local_stage)
    - Flank or whole abdomen for local stage III
- Whole lung for lung metastases
- Other extrapulmonary sites

# Next

- WT with anaplasia on post-nephrectomy pathology, go to WILMS-12
- CR of renal tumors at week 12, follow the CR of renal tumors pathway on this page
