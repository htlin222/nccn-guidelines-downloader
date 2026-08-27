+++
id           = "esophageal/ESOPH-19"
gid          = "esophageal"
ref          = "ESOPH-19"
page         = 32
title        = "Management of disease for nonsurgical candidates, adenocarcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-11", "ESOPH-20"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
timepoint = ["primary-treatment", "surveillance"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_class"
type = "text"
[[variables]]
name = "nonsurgical_reason"
type = "enum"
options = ["medically unable to tolerate major surgery", "medically fit, declines surgery"]
[[variables]]
name = "chemoradiation_tolerance"
type = "enum"
options = ["able to tolerate chemoradiation", "unable to tolerate chemoradiation"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-19, p32
- Applies to adenocarcinomas
- Applies to nonsurgical candidates only
    - Patients who are medically unable to tolerate major surgery
    - Patients who are medically fit who decline surgery
- Tumor classification, see Staging (ST-1)
- Endoscopic resection (ER) and ablation, see Principles of Endoscopic Staging and Therapy (ESOPH-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, adenocarcinoma
- Tumor classification ___ (tumor_class)
    - pTis, pT1a, superficial pT1b, and pT1b, N0 classifications are defined by pathology of the diagnostic ER specimen (ESOPH-A)
    - For cT1b–T4a, N0–N+, preclinical staging cannot establish the number of positive nodes
- Nonsurgical candidate because ___ (nonsurgical_reason)
- ___ (chemoradiation_tolerance)

# pTis

- ER with or without ablation (ESOPH-A)
    - ER followed by ablation may be used to completely eliminate residual dysplasia or Barrett epithelium
- or ablation alone (ESOPH-A)
- The initial diagnostic ER procedure may prove therapeutic for some patients, but for others additional therapy may be necessary prior to the start of surveillance
- Then endoscopic surveillance, ESOPH-A (6 of 8)

# pT1a

- ER with or without ablation (ESOPH-A)
    - ER followed by ablation may be used to completely eliminate residual dysplasia or Barrett epithelium
- The initial diagnostic ER procedure may prove therapeutic for some patients, but for others additional therapy may be necessary prior to the start of surveillance
- Then endoscopic surveillance, ESOPH-A (6 of 8)

# pT1b, N0

- ER with or without ablation (ESOPH-A)
    - ER followed by ablation may be used to completely eliminate residual dysplasia or Barrett epithelium
- Then endoscopic surveillance, ESOPH-A (6 of 8)
- or consider definitive chemoradiation for tumors with poor prognostic features
    - Poor prognostic features, any of
        - LVI
        - Poorly differentiated histology
        - Submucosal invasion greater than 500 µm
        - Positive margin(s)
        - Maximum tumor diameter 2 cm or more
    - Systemic therapy, see Principles of Systemic Therapy (ESOPH-F)
    - Radiation therapy, see Principles of Radiation Therapy (ESOPH-G)

# cT1b–T4a, N0–N+ or cT4b (unresectable)

- Nonsurgical candidate able to tolerate chemoradiation
    - Definitive chemoradiation
        - Systemic therapy, see Principles of Systemic Therapy (ESOPH-F)
        - Radiation therapy, see Principles of Radiation Therapy (ESOPH-G)
- Nonsurgical candidate unable to tolerate chemoradiation
    - Palliative RT, see Principles of Radiation Therapy (ESOPH-G)
    - or palliative/best supportive care, see Principles of Palliative/Best Supportive Care (ESOPH-H)

# Next

- After endoscopic therapy, endoscopic surveillance ESOPH-A (6 of 8)
- After definitive chemoradiation, go to Follow-up (ESOPH-20)
