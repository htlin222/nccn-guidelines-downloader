+++
id           = "wilms_tumor/WILMS-5"
gid          = "wilms_tumor"
ref          = "WILMS-5"
page         = 14
title        = "Unilateral FHWT, initially unresectable, no predisposing condition: week 6 findings, adjuvant chemotherapy, and radiation"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-5A", "WILMS-11"]

[facets]
disease   = "wilms_tumor"
biomarker = "gain1q"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "week6_resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "loh_1p16q"
type = "text"
[[variables]]
name = "gain_1q"
type = "text"
[[variables]]
name = "lung_response"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-5, p14
- Applies to unilateral FHWT, initially unresectable, with no predisposing condition
- Covers findings after neoadjuvant therapy, biomarker/imaging results, adjuvant chemotherapy, and radiation therapy
- All recommendations category 2A unless otherwise indicated
- Footnote texts are not printed on this page; read them on the guideline footnote page before acting on a marked item

# Assessment

- ___ (age) yo, ___ (side) kidney
- Unilateral FHWT, initially unresectable, no predisposing condition
- Neoadjuvant Regimen DD4A given
- Resectability on re-imaging at week 6 ___ (week6_resectability)
- Pathology at nephrectomy ___ (pathology)
- Local stage of the primary tumor ___ (local_stage)
- Combined LOH at 1p and 16q ___ (loh_1p16q)
- 1q gain ___ (gain_1q)
- Response of lung metastases at week 6 ___ (lung_response)

# Neoadjuvant therapy

- Regimen DD4A
- Re-image at week 6

# Resectable at week 6

- Nephrectomy with regional LN sampling
- Pathology is WT
- Classify the findings before choosing adjuvant therapy
    - FHWT localized
    - FHWT lung-only metastases
    - FHWT extrapulmonary with or without lung metastases
    - WT with anaplasia

# Unresectable at week 6

- Continue Regimen DD4A, re-image week 12
- Switch to Regimen M, re-image week 12

# FHWT localized

- No combined LOH at 1p and 16q
    - Continue Regimen DD4A
- Combined LOH at 1p and 16q
    - Preferred: switch to Regimen M
    - Other recommended: continue Regimen DD4A
- Radiation therapy
    - Flank or whole abdomen for local stage III

# FHWT lung-only metastases

- No combined LOH at 1p and 16q, no 1q gain, and CR of lung metastases at week 6
    - Continue Regimen DD4A
    - Radiation therapy
        - Flank or whole abdomen for local stage III
        - No whole lung
- No combined LOH at 1p and 16q, 1q gain positive, and CR of lung metastases at week 6
    - Continue Regimen DD4A
    - Radiation therapy
        - Flank or whole abdomen for local stage III
        - Whole lung
- Combined LOH at 1p and 16q, or SIR of lung metastases at week 6
    - Preferred: switch to Regimen M
    - Other recommended: continue Regimen DD4A
    - Radiation therapy
        - Flank or whole abdomen for local stage III
        - Whole lung

# Next

- Still unresectable at week 6, continue on WILMS-5A
- WT with anaplasia, go to WILMS-11
