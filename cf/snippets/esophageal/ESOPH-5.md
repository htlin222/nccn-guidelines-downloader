+++
id           = "esophageal/ESOPH-5"
gid          = "esophageal"
ref          = "ESOPH-5"
page         = 15
title        = "Response assessment after chemoradiation in medically fit squamous cell carcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-7", "ESOPH-9", "ESOPH-10"]

[facets]
disease   = "esophageal"
histology = "squamous"
timepoint = ["primary-treatment", "neoadjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "medically_fit"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "chemoradiation_type"
type = "enum"
options = ["preoperative", "definitive"]
[[variables]]
name = "pet_ct"
type = "text"
[[variables]]
name = "chest_abdomen_ct"
type = "text"
[[variables]]
name = "egd_biopsy"
type = "text"
[[variables]]
name = "outcome"
type = "enum"
options = ["no evidence of disease", "persistent local disease", "unresectable disease", "metastatic disease"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-5, p15
- Primary treatment for patients who are medically fit with squamous cell carcinoma
- Covers response assessment after preoperative chemoradiation and after definitive chemoradiation
- Footnotes c, d, u, v, y, z, aa, bb, cc, dd, ee, ff for this page are on ESOPH-5A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, squamous cell carcinoma
- Medically fit ___ (medically_fit)
- Chemoradiation given ___ (chemoradiation_type)
- FDG-PET/CT ___ (pet_ct)
- Chest/abdomen CT ___ (chest_abdomen_ct)
- EGD and biopsy ___ (egd_biopsy)
- Outcome ___ (outcome)

# Response assessment after preoperative chemoradiation

- FDG-PET/CT
- Chest/abdomen CT with oral and IV contrast
    - Not required if FDG-PET/CT is done
- EGD and biopsy
    - Optional if surgery is planned

# Additional management after preoperative chemoradiation

- No evidence of disease
    - Esophagectomy
        - Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Observation (category 2B)
        - Follow-up (ESOPH-9)
- Persistent local disease
    - Esophagectomy (preferred)
        - Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Palliative Management (ESOPH-10)
- Unresectable or metastatic disease
    - Palliative Management (ESOPH-10)

# Response assessment after definitive chemoradiation

- FDG-PET/CT
- Chest/abdomen CT with oral and IV contrast
    - Not required if FDG-PET/CT is done
- EGD and biopsy

# Additional management after definitive chemoradiation

- No evidence of disease
    - Observation
    - or Esophagectomy
        - Surgical Outcomes After Esophagectomy (ESOPH-7)
- Persistent local disease
    - Esophagectomy (preferred)
        - Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Palliative Management (ESOPH-10)
- New metastatic disease
    - Palliative Management (ESOPH-10)

# Next

- Esophagectomy performed, go to Surgical Outcomes After Esophagectomy (ESOPH-7)
- Observation, go to Follow-up (ESOPH-9)
- Palliative Management (ESOPH-10)
