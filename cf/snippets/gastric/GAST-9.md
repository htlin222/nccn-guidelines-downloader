+++
id           = "gastric/GAST-9"
gid          = "gastric"
ref          = "GAST-9"
page         = 20
title        = "Palliative management of unresectable locally advanced or metastatic disease, by performance status"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-10", "GAST-4", "GAST-5"]

[facets]
disease   = "gastric"
stage     = "IV"
timepoint = ["metastatic", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_extent"
type = "text"
[[variables]]
name = "kps"
type = "text"
[[variables]]
name = "ecog"
type = "text"
[[variables]]
name = "locally_unresectable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_chemoradiation"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "peritoneal_only"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "cldn18_2"
type = "text"
[[variables]]
name = "pd_l1"
type = "text"
[[variables]]
name = "msi"
type = "text"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-9, p20
- Applies to unresectable locally advanced or metastatic disease
- Palliative management is selected by performance status
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Unresectable locally advanced or metastatic disease ___ (disease_extent)
- Karnofsky performance score ___ (kps)
- ECOG performance score ___ (ecog)
- Locally unresectable ___ (locally_unresectable)
- Chemoradiation previously received ___ (prior_chemoradiation)
- Peritoneal carcinoma as only disease, including positive cytology ___ (peritoneal_only)

# Biomarker testing

- Perform HER2, CLDN18.2, PD-L1, and MSI testing, if not done previously
    - HER2 ___ (her2)
    - CLDN18.2 ___ (cldn18_2)
    - PD-L1 ___ (pd_l1)
    - MSI ___ (msi)
    - Principles of Pathologic Review and Biomarker Testing (GAST-B)
- NGS should be considered via a validated assay
    - Principles of Pathologic Review and Biomarker Testing (GAST-B)

# Palliative management, Karnofsky performance score ≥60% or ECOG performance score ≤2

- Chemoradiation
    - Only if locally unresectable
    - Only if not previously received
    - Principles of Systemic Therapy (GAST-F)
    - Principles of Radiation Therapy (GAST-G)
- or Systemic therapy
    - Principles of Systemic Therapy (GAST-F)
- or Peritoneal carcinoma as only disease, including positive cytology, go to GAST-10
- or Best supportive care
    - Principles of Palliative Care/Best Supportive Care (GAST-J)

# Palliative management, Karnofsky performance score <60% or ECOG performance score ≥3

- Best supportive care
    - Principles of Palliative Care/Best Supportive Care (GAST-J)

# Next

- Peritoneal carcinoma as only disease, including positive cytology, go to GAST-10
