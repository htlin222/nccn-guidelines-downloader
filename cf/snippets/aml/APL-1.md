+++
id           = "aml/APL-1"
gid          = "aml"
ref          = "APL-1"
page         = 16
title        = "Risk classification of confirmed APL and routing to the matching induction regimen"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["APL-2", "APL-3", "APL-A"]

[facets]
disease   = "aml"
histology = "myeloid"
timepoint = ["diagnosis", "induction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "wbc"
type = "number"
[[variables]]
name = "ef"
type = "text"
[[variables]]
name = "qtcf"
type = "text"
+++

# Source

- NCCN Acute Promyelocytic Leukemia (Age >=18 years), Version 5.2026, APL-1, p16
- Applies to confirmed APL
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Confirmed APL
    - Therapy-related APL is treated the same as de novo APL
    - FLT3 inhibitors are not recommended for FLT3-positive APL
    - If being treated at a community center, collaboration with a center with expertise has been shown to reduce induction mortality
- White blood cell (WBC) count ___ (wbc) x 10^9/L
- Ejection fraction (EF) ___ (ef)
- QTcF ___ (qtcf)

# Risk classification

- Low risk, WBC count <=10 x 10^9/L
- High risk, WBC count >10 x 10^9/L

# Cardiac status

- No cardiac issues
- Cardiac issues
    - Low ejection fraction (EF)
    - QTcF prolongation, see Principles of Supportive Care for APL (APL-A)

# Next

- Low risk, go to Treatment Induction (APL-2)
- High risk, no cardiac issues, go to Treatment Induction (APL-3)
- High risk, cardiac issues, go to Treatment Induction (APL-4)
