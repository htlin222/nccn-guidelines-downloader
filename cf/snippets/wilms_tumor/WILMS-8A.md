+++
id           = "wilms_tumor/WILMS-8A"
gid          = "wilms_tumor"
ref          = "WILMS-8A"
page         = 22
title        = "Localized bilateral renal tumors: neoadjuvant Regimen VAD and what to do at the week 6 and week 12 re-imaging"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-8"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "week6_response"
type = "enum"
options = ["CR", "partial response", "less than a partial response in either kidney or progression"]
[[variables]]
name = "week6_resectability"
type = "enum"
options = ["resectable by bilateral partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "week12_response"
type = "enum"
options = ["CR", "less than a CR"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-8A, p22
- Applies to localized bilateral renal tumors, with or without a predisposing condition
- Continued from WILMS-8
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, localized bilateral renal tumors
- Predisposing condition: ___ (predisposing_condition)
- On neoadjuvant Regimen VAD
- Response at week 6 re-imaging: ___ (week6_response)
- Resectability at 6 weeks: ___ (week6_resectability)
- Response at week 12 re-imaging: ___ (week12_response)

# Neoadjuvant therapy

- Regimen VAD
    - Re-image at week 6

# Findings at week 6 re-imaging

- CR
    - Go to WILMS-8
- Partial response
    - Resectable by bilateral partial nephrectomy at 6 weeks
        - Go to WILMS-8
    - Not resectable by partial nephrectomy at 6 weeks
        - Continue Regimen VAD
        - Re-image at week 12
- Less than a partial response in either kidney, or progression
    - Bilateral open biopsies recommended if partial nephrectomy is not feasible
    - Adjust chemotherapy based on histology
    - Re-image at week 12

# Findings at week 12 re-imaging

- CR at week 12
    - Switch to Regimen DD4A
- Less than a CR
    - Partial nephrectomy (one or both sides) when feasible, or total nephrectomy (after 12 weeks)
        - With regional LN sampling
    - Pathology is WT

# Next

- CR at week 6, go to WILMS-8
- Partial response that is resectable by bilateral partial nephrectomy at 6 weeks, go to WILMS-8
- CR at week 12, switch to Regimen DD4A
- Less than a CR at week 12, go to WILMS-8 for surgery
