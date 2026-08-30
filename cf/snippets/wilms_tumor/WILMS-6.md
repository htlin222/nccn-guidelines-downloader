+++
id           = "wilms_tumor/WILMS-6"
gid          = "wilms_tumor"
ref          = "WILMS-6"
page         = 17
title        = "Neoadjuvant, surgery, and adjuvant therapy for a localized unilateral renal tumor with a predisposing condition"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-2", "WILMS-6A", "WILMS-12"]

[facets]
disease   = "wilms_tumor"
stage     = ["I", "II", "III"]
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "predisposing_condition"
type = "text"
[[variables]]
name = "week6_resectability"
type = "enum"
options = ["CR", "resectable by partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "week6_response"
type = "enum"
options = ["partial response", "less than a partial response", "progression"]
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
name = "cog_stage"
type = "text"
[[variables]]
name = "blastemal"
type = "enum"
options = ["blastemal predominant", "not blastemal predominant"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-6, p17
- Applies to a localized unilateral renal tumor with a predisposing condition
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Localized unilateral renal tumor
- Predisposing condition ___ (predisposing_condition)
- Resectability at week 6 re-imaging ___ (week6_resectability)
- Response at week 6 ___ (week6_response)
- Response at week 12 ___ (week12_response)
- Surgery performed ___ (surgery)
- Pathology ___ (pathology)
- COG stage ___ (cog_stage)
- Blastemal status ___ (blastemal)

# Neoadjuvant therapy

- Regimen EE4A
    - Re-image week 6

# Findings at week 6

- CR
    - Continue Regimen EE4A
- Resectable by partial nephrectomy week 6
- Not resectable by partial nephrectomy at 6 weeks
    - Partial response
        - Continue Regimen EE4A
        - Re-image week 12
        - CR at week 12
    - Less than a partial response or progression

# Surgery

- Partial nephrectomy, when feasible, or total nephrectomy, with regional LN sampling
- Pathology is WT

# Histology results, adjuvant chemotherapy, and radiation therapy

- Stage I, II FHWT and not blastemal predominant
    - Adjuvant chemotherapy: Continue Regimen EE4A
    - Radiation therapy: None
- Stage III FHWT and not blastemal predominant
    - Adjuvant chemotherapy: Switch to Regimen DD4A
    - Radiation therapy: Flank or whole abdomen for local stage III
- Stage I FHWT and blastemal predominant
    - Adjuvant chemotherapy: Switch to Regimen DD4A
    - Radiation therapy: None
- Stage II, III FHWT and blastemal predominant
    - Adjuvant chemotherapy: Switch to Regimen I
    - Radiation therapy: Flank or whole abdomen for local stage III

# Next

- WT with anaplasia, go to WILMS-12
