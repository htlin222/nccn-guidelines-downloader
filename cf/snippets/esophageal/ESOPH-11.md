+++
id           = "esophageal/ESOPH-11"
gid          = "esophageal"
ref          = "ESOPH-11"
page         = 22
title        = "Additional evaluation of locoregional adenocarcinoma before deciding surgical or nonsurgical management"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-12", "ESOPH-19"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "tumor_location"
type = "text"
[[variables]]
name = "surgical_candidacy"
type = "enum"
options = ["medically fit for surgery", "medically unable to tolerate major surgery", "medically fit but declines surgery"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-11, p22
- Applies to adenocarcinoma histology
- Applies to clinical stage I–IVA, locoregional disease
    - Except T4b
    - Except unresectable N3
- See Staging (ST-1) for tumor classification
- Celiac nodal involvement in cancers of the EGJ/distal esophagus may still be considered for combined modality therapy
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, adenocarcinoma
- Clinical stage ___ (clinical_stage)
    - Locoregional disease, not T4b and not unresectable N3
- Tumor location ___ (tumor_location)
    - Record whether the tumor is at the esophagogastric junction (EGJ)
    - Record whether this is a cervical esophageal tumor
- Surgical candidacy ___ (surgical_candidacy)
    - Medically fit for surgery means medically able to tolerate major surgery
    - Nonsurgical candidate means medically unable to tolerate major surgery, or medically fit and declines surgery

# Additional evaluation, as clinically indicated

- Multidisciplinary evaluation
    - Principles of Multidisciplinary Team Approach for Esophagogastric Cancers (ESOPH-E)
- Consider enteric feeding tube for preoperative nutritional support
    - Percutaneous gastrostomy tube may be considered for patients with cervical esophageal tumors receiving definitive chemoradiation
    - Percutaneous gastrostomy tube may be considered for patients with marginally resectable disease
    - Multidisciplinary expertise is recommended prior to placement of a percutaneous gastrostomy tube
    - The approach, timing, and location of the feeding tube should be discussed with the surgeon prior to its placement
- Laparoscopy (optional)
    - Only if there is no evidence of M1 disease
    - Only if the tumor is at the esophagogastric junction (EGJ)

# Next

- Medically fit for surgery, go to ESOPH-12
- Nonsurgical candidate, go to ESOPH-19
