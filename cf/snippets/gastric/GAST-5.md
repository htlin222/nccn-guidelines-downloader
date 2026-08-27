+++
id           = "gastric/GAST-5"
gid          = "gastric"
ref          = "GAST-5"
page         = 16
title        = "Postoperative management by resection status after preoperative systemic therapy"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "GAST-7", "GAST-9"]

[facets]
disease   = "gastric"
timepoint = "adjuvant"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_systemic_therapy"
type = "text"
[[variables]]
name = "operation"
type = "text"
[[variables]]
name = "resection_status"
type = "enum"
options = ["R0", "R1", "R2"]
[[variables]]
name = "yptnm"
type = "text"
[[variables]]
name = "ypm1"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-5, p16
- Applies to surgical outcomes and clinical pathologic findings in patients who have received systemic therapy
- Tumor classification, see Staging (ST-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Systemic therapy received before surgery ___ (prior_systemic_therapy)
- Operation performed ___ (operation)
- Resection classification ___ (resection_status)
- ypTNM ___ (yptnm)
- ypM1 present ___ (ypm1)

# Tumor classification

- R0 = No cancer at resection margins
- R1 = Microscopic residual cancer
- R2 = Macroscopic residual cancer or M1
- ypM1
    - The yp prefix is used to indicate cases in which staging is performed following preoperative therapy

# Postoperative management

- R0 resection
    - Systemic therapy (category 1)
        - Principles of Systemic Therapy (GAST-F)
- R1 resection
    - Chemoradiation, fluoropyrimidine-based
        - Principles of Systemic Therapy (GAST-F)
        - Principles of Radiation Therapy (GAST-G)
    - or Consider re-resection
- R2 resection
    - Chemoradiation, fluoropyrimidine-based
        - Principles of Systemic Therapy (GAST-F)
        - Principles of Radiation Therapy (GAST-G)
    - or Palliative Management (GAST-9), as clinically indicated

# Next

- Follow-up (GAST-7)
- ypM1, palliative management (GAST-9)
