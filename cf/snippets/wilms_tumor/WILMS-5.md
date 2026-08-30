+++
id           = "wilms_tumor/WILMS-5"
gid          = "wilms_tumor"
ref          = "WILMS-5"
page         = 14
title        = "Unilateral FHWT, initially unresectable with no predisposing condition: week 6 findings, adjuvant chemotherapy, and radiation therapy"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-5A", "WILMS-11"]

[facets]
disease   = "wilms_tumor"
biomarker = ["gain1q", "any"]
timepoint = ["neoadjuvant", "adjuvant"]

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
name = "met_sites"
type = "text"
[[variables]]
name = "loh_1p_16q"
type = "text"
[[variables]]
name = "gain_1q"
type = "text"
[[variables]]
name = "week6_lung_response"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-5, p14
- Applies to unilateral FHWT, initially unresectable, with no predisposing condition (footnotes n, bb)
- Covers neoadjuvant therapy, the week 6 biomarker and imaging results, adjuvant chemotherapy, and radiation therapy
- Neoadjuvant and adjuvant chemotherapy both carry footnote t; biomarker and imaging results carry footnote u
- Radiation therapy carries footnotes w and x; local stage III carries footnote o
- Footnote texts are not printed on this page — read them on the guideline footnote page before acting on a marked item
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) kidney
- Unilateral FHWT, initially unresectable
- No predisposing condition
- Neoadjuvant Regimen DD4A given
- Resectability on re-imaging at week 6 ___ (week6_resectability)
- Pathology at nephrectomy ___ (pathology)
- Local stage of the primary tumor ___ (local_stage)
- Sites of metastases ___ (met_sites)
- Combined LOH at 1p and 16q ___ (loh_1p_16q)
- 1q gain ___ (gain_1q)
- Response of lung metastases at week 6 ___ (week6_lung_response)
    - Complete response (CR)
    - Slow incomplete response (SIR)

# Neoadjuvant therapy

- Regimen DD4A (footnote t)
- Re-image at week 6 (footnote cc)
- Then classify as resectable or unresectable

# Resectable at week 6

- Nephrectomy with regional LN sampling
- Pathology is WT (footnotes m, n)
- Sort the findings before choosing adjuvant chemotherapy and radiation
    - FHWT localized
    - FHWT lung-only metastases (footnote ff)
    - FHWT extrapulmonary with or without lung metastases
    - WT with anaplasia

# Unresectable at week 6

- Continue Regimen DD4A, re-image week 12 (footnotes t, cc, dd)
- Switch to Regimen M, re-image week 12 (footnotes ee, cc, dd)

# FHWT localized, adjuvant chemotherapy

- No combined LOH at 1p and 16q
    - Continue Regimen DD4A
- Combined LOH at 1p and 16q
    - Preferred
        - Switch to Regimen M
    - Other Recommended
        - Continue Regimen DD4A

# FHWT localized, radiation therapy

- Flank or whole abdomen for local stage III (footnote o)

# FHWT lung-only metastases, adjuvant chemotherapy

- No combined LOH at 1p and 16q, no 1q gain, and CR of lung metastases at week 6
    - Continue Regimen DD4A
- No combined LOH at 1p and 16q, 1q gain positive, and CR of lung metastases at week 6
    - Continue Regimen DD4A (footnotes y, z)
- Combined LOH at 1p and 16q, or SIR of lung metastases at week 6
    - Preferred
        - Switch to Regimen M
    - Other Recommended
        - Continue Regimen DD4A

# FHWT lung-only metastases, radiation therapy

- No combined LOH at 1p and 16q, no 1q gain, and CR of lung metastases at week 6
    - Flank or whole abdomen for local stage III (footnote o)
    - No whole lung
- No combined LOH at 1p and 16q, 1q gain positive, and CR of lung metastases at week 6
    - Flank or whole abdomen for local stage III (footnote o)
    - Whole lung (footnote y)
- Combined LOH at 1p and 16q, or SIR of lung metastases at week 6
    - Flank or whole abdomen for local stage III (footnote o)
    - Whole lung (footnote y)

# Next

- FHWT extrapulmonary with or without lung metastases, go to WILMS-5A
- WT with anaplasia, go to WILMS-11
