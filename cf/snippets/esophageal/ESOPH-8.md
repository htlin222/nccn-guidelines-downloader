+++
id           = "esophageal/ESOPH-8"
gid          = "esophageal"
ref          = "ESOPH-8"
page         = 19
title        = "Management of disease for nonsurgical candidates, squamous cell carcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-9"]

[facets]
disease   = "esophageal"
histology = "squamous"
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

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-8, p19
- Applies to squamous cell carcinoma
- Applies to nonsurgical candidates only
    - Patients who are medically unable to tolerate major surgery
    - Patients who are medically fit who decline surgery
- Tumor classification, see Staging (ST-1)
- Endoscopic resection (ER) and ablation, see Principles of Endoscopic Staging and Therapy (ESOPH-A)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, squamous cell carcinoma
- Tumor classification ___ (tumor_class)
    - pTis, pT1a, superficial pT1b, and pT1b N0 classifications are defined by pathology of the diagnostic ER specimen (ESOPH-A)
    - Preclinical staging cannot establish the number of positive nodes
- Nonsurgical candidate because ___ (nonsurgical_reason)
- ___ (chemoradiation_tolerance)

# pTis

- ER with or without ablation (ESOPH-A)
    - For pTis, the level of evidence for ablation of SCC after ER is low
    - Additional ablation may be needed if there is multifocal HGD/carcinoma in situ
    - Ablation may not be needed if all lesions are completely excised
    - ER followed by ablation may be used to completely eliminate residual dysplasia
- or ablation alone (ESOPH-A)
- The initial diagnostic ER procedure may prove therapeutic for some patients, but for others additional therapy may be necessary prior to the start of surveillance
- Then endoscopic surveillance, ESOPH-A (6 of 8)

# pT1a

- ER with or without ablation (ESOPH-A)
    - For pT1a, the level of evidence for ablation of SCC after ER is low
    - Additional ablation may be needed if there is multifocal HGD/carcinoma in situ
    - Ablation may not be needed if all lesions are completely excised
    - ER followed by ablation may be used to completely eliminate residual dysplasia
- The initial diagnostic ER procedure may prove therapeutic for some patients, but for others additional therapy may be necessary prior to the start of surveillance
- Then endoscopic surveillance, ESOPH-A (6 of 8)

# pT1b, N0

- ER with or without ablation (ESOPH-A)
    - ER followed by ablation may be used to completely eliminate residual dysplasia
- Then endoscopic surveillance, ESOPH-A (6 of 8)
- or consider definitive chemoradiation for tumors with poor prognostic features
    - Poor prognostic features include LVI, poorly differentiated histology, submucosal invasion of 200 µm or more, positive margin(s), and/or maximum tumor diameter of 2 cm or more
    - Systemic therapy, see ESOPH-F
    - Radiation therapy, see ESOPH-G

# cT1b–T4a, N0–N+ or cT4b (unresectable)

- Nonsurgical candidate able to tolerate chemoradiation
    - Definitive chemoradiation
        - Systemic therapy, see ESOPH-F
        - Radiation therapy, see ESOPH-G
- Nonsurgical candidate unable to tolerate chemoradiation
    - Palliative radiation therapy (RT), see ESOPH-G
    - or palliative/best supportive care, see ESOPH-H

# Next

- After endoscopic therapy, endoscopic surveillance ESOPH-A (6 of 8)
- After treatment, go to Follow-up (ESOPH-9)
