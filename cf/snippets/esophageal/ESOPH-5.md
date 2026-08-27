+++
id           = "esophageal/ESOPH-5"
gid          = "esophageal"
ref          = "ESOPH-5"
page         = 15
title        = "Response assessment after preoperative or definitive chemoradiation in medically fit squamous cell carcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-4", "ESOPH-7", "ESOPH-9", "ESOPH-10"]

[facets]
disease   = "esophageal"
histology = "squamous"
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "prior_treatment"
type = "enum"
options = ["preoperative-chemoradiation", "definitive-chemoradiation"]
[[variables]]
name = "completion_date"
type = "text"
[[variables]]
name = "weeks_since"
type = "number"
[[variables]]
name = "petct"
type = "text"
[[variables]]
name = "ct"
type = "text"
[[variables]]
name = "egd"
type = "text"
[[variables]]
name = "outcome"
type = "text"

+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-5, p15
- Response assessment for patients who are medically fit with squamous cell carcinoma
- Applies after preoperative chemoradiation, or after definitive chemoradiation
- Footnotes for this page are on ESOPH-5A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Squamous cell carcinoma, medically fit
- Prior treatment ___ (prior_treatment)
    - Preoperative chemoradiation
        - Systemic therapy per Principles of Systemic Therapy (ESOPH-F)
        - Radiation per Principles of Radiation Therapy (ESOPH-G)
        - For select patients, consider relieving dysphagia with induction systemic therapy (ESOPH-F 5 of 12, and Principles of Best Supportive Care ESOPH-H)
    - Definitive chemoradiation
        - Systemic therapy per Principles of Systemic Therapy (ESOPH-F)
        - Radiation per Principles of Radiation Therapy (ESOPH-G)
- Chemoradiation completed ___ (completion_date)
- ___ (weeks_since) weeks since completion of preoperative therapy
    - Assessment ≥5 to 8 weeks after completion of preoperative therapy
- FDG-PET/CT ___ (petct)
- Chest/abdomen CT ___ (ct)
- EGD and biopsy ___ (egd)
- Response assessment outcome ___ (outcome)

# Response assessment after preoperative chemoradiation

- FDG-PET/CT
    - Assessment ≥5 to 8 weeks after completion of preoperative therapy
- Chest/abdomen CT with oral and IV contrast
    - Not required if FDG-PET/CT is done
    - Pelvis CT if clinically indicated
    - CT with contrast should be considered if there were findings on the pre-treatment CT that merit more accurate anatomic assessment after treatment (such as small pulmonary nodules)
    - CT with contrast should be considered if post-treatment PET identified new findings that merit more accurate anatomic assessment
- EGD and biopsy, optional if surgery is planned
    - Post-Treatment Surveillance-Principles of Endoscopic Staging and Therapy (ESOPH-A 6 of 8)

# Outcome after preoperative chemoradiation

- No evidence of disease
    - If surgery is not being considered for management, EGD and biopsy should be done
    - Esophagectomy
        - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
        - Feeding jejunostomy for postoperative nutritional support, generally preferred
        - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
        - Principles of Surgery (ESOPH-C)
        - Then Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Observation (category 2B)
        - Post-Treatment Surveillance-Principles of Endoscopic Staging and Therapy (ESOPH-A 6 of 8)
        - Then Follow-up (ESOPH-9)
- Persistent local disease
    - Esophagectomy (preferred)
        - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
        - Feeding jejunostomy for postoperative nutritional support, generally preferred
        - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
        - Principles of Surgery (ESOPH-C)
        - Then Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Palliative Management (ESOPH-10)
- Unresectable disease
    - Palliative Management (ESOPH-10)
- Metastatic disease
    - Palliative Management (ESOPH-10)

# Response assessment after definitive chemoradiation

- FDG-PET/CT
    - Assessment ≥5 to 8 weeks after completion of preoperative therapy
- Chest/abdomen CT with oral and IV contrast
    - Not required if FDG-PET/CT is done
    - Pelvis CT if clinically indicated
    - CT with contrast should be considered if there were findings on the pre-treatment CT that merit more accurate anatomic assessment after treatment (such as small pulmonary nodules)
    - CT with contrast should be considered if post-treatment PET identified new findings that merit more accurate anatomic assessment
- EGD and biopsy
    - Post-Treatment Surveillance-Principles of Endoscopic Staging and Therapy (ESOPH-A 6 of 8)

# Outcome after definitive chemoradiation

- No evidence of disease
    - If surgery is not being considered for management, EGD and biopsy should be done
    - Observation
        - If surgery is not being considered for management, EGD and biopsy should be done
        - Then Follow-up (ESOPH-9)
    - or Esophagectomy
        - Feeding jejunostomy for postoperative nutritional support, generally preferred
        - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
        - Principles of Surgery (ESOPH-C)
        - Then Surgical Outcomes After Esophagectomy (ESOPH-7)
- Persistent local disease
    - Esophagectomy (preferred)
        - Feeding jejunostomy for postoperative nutritional support, generally preferred
        - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
        - Principles of Surgery (ESOPH-C)
        - Then Surgical Outcomes After Esophagectomy (ESOPH-7)
    - or Palliative Management (ESOPH-10)
- New metastatic disease
    - Palliative Management (ESOPH-10)

# Next

- Esophagectomy performed, go to Surgical Outcomes After Esophagectomy (ESOPH-7)
- Observation chosen, go to Follow-up (ESOPH-9)
- Unresectable, metastatic, or new metastatic disease, go to Palliative Management (ESOPH-10)
- Persistent local disease not taken to surgery, go to Palliative Management (ESOPH-10)
