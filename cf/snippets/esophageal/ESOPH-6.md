+++
id           = "esophageal/ESOPH-6"
gid          = "esophageal"
ref          = "ESOPH-6"
page         = 17
title        = "Postoperative management by resection status for squamous cell carcinoma resected without preoperative chemoradiation"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-9", "ESOPH-10"]

[facets]
disease   = "esophageal"
histology = "squamous"
stage     = "any"
timepoint = ["primary-treatment", "adjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "tumor_classification"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["R0", "R1", "R2"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-6, p17
- Surgical outcomes / clinical pathologic findings for squamous cell carcinoma
- Applies only to patients who have not received preoperative chemoradiation
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Squamous cell carcinoma
- No preoperative chemoradiation given
- Tumor classification ___ (tumor_classification)
    - Any T, Any N
    - See Staging (ST-1) for tumor classification
- Resection status ___ (resection)
    - R0 = No cancer at resection margins
    - R1 = Microscopic residual cancer
    - R2 = Macroscopic residual cancer or M1

# Postoperative management

- R0 resection, Any T, Any N
    - Observation
- R1 resection
    - Chemoradiation, fluoropyrimidine-based
        - Systemic therapy per Principles of Systemic Therapy (ESOPH-F)
        - Radiation per Principles of Radiation Therapy (ESOPH-G)
- R2 resection
    - Chemoradiation, fluoropyrimidine-based
        - Systemic therapy per Principles of Systemic Therapy (ESOPH-F)
        - Radiation per Principles of Radiation Therapy (ESOPH-G)
    - or Palliative Management (ESOPH-10)

# Next

- Follow-up, go to ESOPH-9
- Palliative management, go to ESOPH-10
