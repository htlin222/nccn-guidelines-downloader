+++
id           = "wilms_tumor/WILMS-6"
gid          = "wilms_tumor"
ref          = "WILMS-6"
page         = 17
title        = "Localized unilateral renal tumor with a predisposing condition: neoadjuvant therapy, week 6 and week 12 findings, surgery, adjuvant chemotherapy, and radiation"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-2", "WILMS-6A", "WILMS-12"]

[facets]
disease   = "wilms_tumor"
stage     = ["I", "II", "III"]
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "predisposing_condition"
type = "text"
[[variables]]
name = "week6_resectability"
type = "enum"
options = ["resectable by partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "week6_response"
type = "enum"
options = ["CR", "partial response", "less than a partial response", "progression"]
[[variables]]
name = "week12_response"
type = "enum"
options = ["CR", "less than CR"]
[[variables]]
name = "surgery"
type = "enum"
options = ["partial nephrectomy", "total nephrectomy"]
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "blastemal"
type = "enum"
options = ["blastemal predominant", "not blastemal predominant"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-6, p17
- Applies to a localized unilateral renal tumor with a predisposing condition
- Covers neoadjuvant therapy, findings, surgery, histology results, adjuvant chemotherapy, and radiation therapy
- All recommendations are category 2A unless otherwise indicated
- Footnote texts are not printed on this page; read them on the guideline footnote page before acting on a marked item

# Assessment

- ___ (age) yo, ___ (side) kidney
- Localized unilateral renal tumor
- Predisposing condition ___ (predisposing_condition)
- Resectability by partial nephrectomy at week 6 ___ (week6_resectability)
- Response at week 6 ___ (week6_response)
- Response at week 12 ___ (week12_response)
- Surgery performed ___ (surgery)
- Pathology ___ (pathology)
- Stage ___ (stage)
- Blastemal predominance ___ (blastemal)

# Neoadjuvant therapy

- Regimen EE4A
    - Re-image at week 6

# Findings at week 6

- CR
    - Continue Regimen EE4A
- Resectable by partial nephrectomy week 6
    - Proceed to surgery
- Not resectable by partial nephrectomy at 6 weeks
    - Partial response
        - Continue Regimen EE4A
        - Re-image at week 12
        - CR at week 12
    - Less than a partial response or progression

# Surgery

- Partial nephrectomy, when feasible
- Total nephrectomy if partial nephrectomy is not feasible
- Regional LN sampling
- Pathology is WT

# Histology results

- Stage I, II FHWT and not blastemal predominant
    - Adjuvant chemotherapy
        - Continue Regimen EE4A
    - Radiation therapy
        - None
- Stage III FHWT and not blastemal predominant
    - Adjuvant chemotherapy
        - Switch to Regimen DD4A
    - Radiation therapy
        - Flank or whole abdomen for local stage III
- Stage I FHWT and blastemal predominant
    - Adjuvant chemotherapy
        - Switch to Regimen DD4A
    - Radiation therapy
        - None
- Stage II, III FHWT and blastemal predominant
    - Adjuvant chemotherapy
        - Switch to Regimen I
    - Radiation therapy
        - Flank or whole abdomen for local stage III

# Next

- WT with anaplasia, go to WILMS-12
