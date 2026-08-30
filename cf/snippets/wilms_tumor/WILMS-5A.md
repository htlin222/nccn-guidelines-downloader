+++
id           = "wilms_tumor/WILMS-5A"
gid          = "wilms_tumor"
ref          = "WILMS-5A"
page         = 15
title        = "Unilateral FHWT initially unresectable, no predisposing condition: what to do after re-imaging on Regimen DD4A"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-5", "WILMS-5B"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "week6_finding"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "results"
type = "enum"
options = ["localized", "lung-only metastases", "extrapulmonary with or without lung metastases"]
[[variables]]
name = "loh_1p_16q"
type = "enum"
options = ["combined LOH present", "no combined LOH"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-5A, p15
- Applies to unilateral FHWT, initially unresectable, with no predisposing condition
- Continued from WILMS-5
- Patient is on Regimen DD4A, re-imaged at week 6
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, unilateral FHWT, ___ (side) kidney
- Initially unresectable
- No predisposing condition
- On neoadjuvant Regimen DD4A
- Week 6 re-imaging done
- Findings at week 6: ___ (week6_finding)

# Findings at week 6 re-imaging

- Resectable
    - Nephrectomy with regional LN sampling
    - Pathology is FHWT
- Unresectable
    - Continue Regimen DD4A, re-image week 12
    - Switch to Regimen M, re-image week 12

# Biomarker / imaging results

- Result: ___ (results)
    - Localized
    - Lung-only metastases
    - Extrapulmonary with or without lung metastases

# Adjuvant chemotherapy, extrapulmonary with or without lung metastases

- Combined LOH at 1p and 16q: ___ (loh_1p_16q)
- No combined LOH at 1p and 16q
    - Continue Regimen DD4A
- Combined LOH at 1p and 16q
    - Preferred: switch to Regimen M
    - Other recommended: continue Regimen DD4A

# Radiation therapy, extrapulmonary with or without lung metastases

- Flank or whole abdomen for local stage III
- Whole lung for lung metastases
- Other extrapulmonary sites

# Next

- Localized, go to WILMS-5
- Lung-only metastases, go to WILMS-5
- Extrapulmonary with or without lung metastases, give adjuvant chemotherapy and radiation therapy as above
