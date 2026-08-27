+++
id           = "esophageal/ESOPH-17"
gid          = "esophageal"
ref          = "ESOPH-17"
page         = 30
title        = "Postoperative management after resection of adenocarcinoma in patients who have not received preoperative therapy"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-20", "ESOPH-21"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
timepoint = "adjuvant"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_class"
type = "text"
[[variables]]
name = "node_status"
type = "enum"
options = ["node negative", "node positive"]
[[variables]]
name = "resection_status"
type = "enum"
options = ["R0 resection", "R1 resection", "R2 resection"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-17, p30
- Applies to adenocarcinomas
- Applies only to patients who have not received preoperative chemoradiation or systemic therapy
- Tumor classification, see Staging (ST-1)
- Systemic therapy, see Principles of Systemic Therapy (ESOPH-F)
- Radiation therapy, see Principles of Radiation Therapy (ESOPH-G)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, adenocarcinoma
- No preoperative chemoradiation and no preoperative systemic therapy given
- Tumor classification ___ (tumor_class), see Staging (ST-1)
- Nodal status ___ (node_status)
- Resection status ___ (resection_status)
    - R0 = No cancer at resection margins
    - R1 = Microscopic residual cancer
    - R2 = Macroscopic residual cancer or M1

# R0 resection, node negative

- pTis, pT1, and pT2
    - Observation
- pT3, pT4a
    - Chemotherapy, see ESOPH-F
    - or Chemoradiation (fluoropyrimidine-based)
        - Systemic therapy, see ESOPH-F
        - Radiation therapy, see ESOPH-G
        - Recommended for patients who have had suboptimal surgery with poor nodal harvest
        - Recommended for patients who were understaged at diagnosis
        - Smalley SR, et al. J Clin Oncol 2012;30:2327-2333, see ESOPH-F
    - or Observation

# R0 resection, node positive (Any T)

- Chemotherapy, see ESOPH-F
- or Chemoradiation (fluoropyrimidine-based)
    - Systemic therapy, see ESOPH-F
    - Radiation therapy, see ESOPH-G
    - Recommended for patients who have had suboptimal surgery with poor nodal harvest
    - Recommended for patients who were understaged at diagnosis
    - Smalley SR, et al. J Clin Oncol 2012;30:2327-2333, see ESOPH-F
- or Observation

# R1 resection

- Chemoradiation (fluoropyrimidine-based)
    - Systemic therapy, see ESOPH-F
    - Radiation therapy, see ESOPH-G

# R2 resection

- Chemoradiation (fluoropyrimidine-based)
    - Systemic therapy, see ESOPH-F
    - Radiation therapy, see ESOPH-G
- or Palliative Management (ESOPH-21)

# Next

- Follow-up (ESOPH-20)
- R2 resection managed palliatively, go to Palliative Management (ESOPH-21)
