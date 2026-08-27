+++
id           = "esophageal/ESOPH-10"
gid          = "esophageal"
ref          = "ESOPH-10"
page         = 21
title        = "Palliative management of unresectable locally advanced or metastatic squamous cell carcinoma, split by performance status"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-5", "ESOPH-6", "ESOPH-7"]

[facets]
disease   = "esophageal"
histology = "squamous"
stage     = ["III", "IV"]
biomarker = ["msi-h", "pd-l1"]
timepoint = ["metastatic", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_extent"
type = "enum"
options = ["unresectable locally advanced", "metastatic"]
[[variables]]
name = "karnofsky"
type = "text"
[[variables]]
name = "ecog"
type = "text"
[[variables]]
name = "msi"
type = "text"
[[variables]]
name = "pd_l1"
type = "text"
[[variables]]
name = "ngs"
type = "text"
[[variables]]
name = "prior_regimens"
type = "number"
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-10, p21
- Palliative Management for squamous cell carcinoma
- Applies to unresectable locally advanced disease or metastatic disease
- Performance status decides the branch
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, squamous cell carcinoma
- Disease extent ___ (disease_extent)
- Karnofsky performance score ___ (karnofsky)
- ECOG performance score ___ (ecog)
- MSI ___ (msi)
- PD-L1 ___ (pd_l1)
- NGS ___ (ngs)
- Prior sequential systemic therapy regimens ___ (prior_regimens)

# Karnofsky performance score ≥60% or ECOG performance score ≤2

- Perform MSI testing, if not done previously
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
- Perform PD-L1 testing, if not done previously
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
- NGS should be considered via validated assay
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
- Systemic therapy
    - Principles of Systemic Therapy (ESOPH-F)
    - Further treatment after two sequential regimens should be dependent on performance status (PS) and availability of clinical trials
- and/or Palliative/Best supportive care
    - Principles of Palliative/Best Supportive Care (ESOPH-H)

# Karnofsky performance score <60% or ECOG performance score ≥3

- Palliative/Best supportive care
    - Principles of Palliative/Best Supportive Care (ESOPH-H)

# Next

- Systemic therapy, see Principles of Systemic Therapy (ESOPH-F)
- Palliative/Best supportive care, see Principles of Palliative/Best Supportive Care (ESOPH-H)
- Biomarker results, see Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
