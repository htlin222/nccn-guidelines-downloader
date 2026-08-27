+++
id           = "esophageal/ESOPH-2"
gid          = "esophageal"
ref          = "ESOPH-2"
page         = 12
title        = "Additional evaluation and surgical-fitness triage for squamous cell carcinoma with locoregional disease"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-1", "ESOPH-3", "ESOPH-8", "ESOPH-E", "ST-1"]

[facets]
disease   = "esophageal"
histology = "squamous"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_location"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "surgical_fitness"
type = "enum"
options = ["medically fit for surgery", "nonsurgical candidate"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-2, p12
- Applies to squamous cell carcinoma (SCC)
- Clinical stage I–IVA, locoregional disease, except T4b or unresectable N3
- Tumor classification: see Staging (ST-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Squamous cell carcinoma (SCC)
- ___ (tumor_location)
- ___ (ctnm), classified per ST-1
- Locoregional disease confirmed
    - Not T4b
    - Not unresectable N3
    - Celiac nodal involvement in cancers of the EGJ/distal esophagus may still be considered for combined modality therapy
- ___ (surgical_fitness)

# Additional evaluation (as clinically indicated)

- Multidisciplinary evaluation
    - Principles of Multidisciplinary Team Approach for Esophagogastric Cancers (ESOPH-E)
- Consider enteric feeding tube for preoperative nutritional support
    - Percutaneous gastrostomy tube may be considered for patients with cervical esophageal tumors receiving definitive chemoradiation
    - Percutaneous gastrostomy tube may be considered for patients with marginally resectable disease
    - Multidisciplinary expertise is recommended prior to placement of percutaneous gastrostomy tube
    - Discuss the approach, timing, and location of the feeding tube with the surgeon prior to its placement

# Next

- Medically fit for surgery, that is medically able to tolerate major surgery, go to ESOPH-3
- Nonsurgical candidate, that is medically unable to tolerate major surgery, or medically fit but declines surgery, go to ESOPH-8
