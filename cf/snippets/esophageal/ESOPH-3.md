+++
id           = "esophageal/ESOPH-3"
gid          = "esophageal"
ref          = "ESOPH-3"
page         = 13
title        = "Primary treatment options for medically fit SCC by tumor classification"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-2", "ESOPH-4", "ESOPH-6", "ESOPH-8", "ST-1"]

[facets]
disease   = "esophageal"
histology = "squamous"
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_classification"
type = "text"
[[variables]]
name = "diagnostic_er"
type = "enum"
options = ["done", "not-done"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-3, p13
- Squamous cell carcinoma (SCC)
- Applies to patients who are medically fit
- See Staging (ST-1) for tumor classification
- pTis, pT1a, superficial pT1b, and pT1b N0 classifications are defined by pathology of the diagnostic ER specimen (ESOPH-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Squamous cell carcinoma (SCC)
- Tumor classification ___ (tumor_classification)
- Diagnostic ER ___ (diagnostic_er)
- Medically fit

# pTis or pT1a

- Endoscopic therapies (preferred)
    - ER with or without ablation
        - Principles of Endoscopic Staging and Therapy (ESOPH-A)
        - For pTis and pT1a, the level of evidence for ablation of SCC after ER is low
        - Additional ablation may be needed if there is multifocal high-grade dysplasia (HGD)/carcinoma in situ
        - Ablation may not be needed if all lesions are completely excised
        - ER followed by ablation may be used to completely eliminate residual dysplasia
    - Ablation
        - Principles of Endoscopic Staging and Therapy (ESOPH-A)
    - The initial diagnostic ER procedure may prove therapeutic for some patients, but for others additional therapy may be necessary prior to the start of surveillance
    - Then Endoscopic Surveillance, ESOPH-A (6 of 8)
- or Esophagectomy
    - Indicated for patients with extensive carcinoma in situ (pTis or HGD) or pT1a, especially nodular disease that is not adequately controlled by ablation or ER followed by ablation
    - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
    - Feeding jejunostomy for postoperative nutritional support, generally preferred
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
    - Principles of Surgery (ESOPH-C)
    - Then Surgical Outcomes After Esophagectomy (ESOPH-6)

# pT1b, N0

- Endoscopic therapies (preferred)
    - ER with or without ablation
        - Principles of Endoscopic Staging and Therapy (ESOPH-A)
        - ER followed by ablation may be used to completely eliminate residual dysplasia
    - Then Endoscopic Surveillance, ESOPH-A (6 of 8)
- or Esophagectomy
    - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
    - Feeding jejunostomy for postoperative nutritional support, generally preferred
    - Definitive chemoradiation may be an appropriate option for patients who decline surgery (ESOPH-8)
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
    - Principles of Surgery (ESOPH-C)
    - Then Surgical Outcomes After Esophagectomy (ESOPH-6)

# Next

- Treated endoscopically, go to Endoscopic Surveillance, ESOPH-A (6 of 8)
- Esophagectomy performed, go to Surgical Outcomes After Esophagectomy (ESOPH-6)
- cT1b–T4a, N0–N+, go to Primary Treatment (ESOPH-4)
    - Preclinical staging cannot establish the number of positive nodes
- cT4b, go to Primary Treatment (ESOPH-4)
    - For select patients, consider endoluminal stenting when appropriate, see Principles of Palliative/Best Supportive Care (ESOPH-H)
