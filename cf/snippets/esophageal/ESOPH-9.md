+++
id           = "esophageal/ESOPH-9"
gid          = "esophageal"
ref          = "ESOPH-9"
page         = 20
title        = "Follow-up/surveillance after treatment of squamous cell carcinoma, and management of recurrence"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-6", "ESOPH-7", "ESOPH-10"]

[facets]
disease   = "esophageal"
histology = "squamous"
stage     = ["recurrent", "IV"]
timepoint = ["surveillance", "recurrence", "metastatic"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_treatment"
type = "enum"
options = ["prior esophagectomy, no prior chemoradiation", "prior chemoradiation, no prior esophagectomy"]
[[variables]]
name = "treatment_end_date"
type = "text"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["no recurrence", "locoregional recurrence", "metastatic disease"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-9, p20
- Applies to squamous cell carcinoma after treatment
- Surveillance is carried out per Principles of Surveillance (ESOPH-I)
- Survivorship care is carried out per Principles of Survivorship (ESOPH-J)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, squamous cell carcinoma
- Prior treatment ___ (prior_treatment)
- Treatment completed ___ (treatment_end_date)
- Symptom status ___ (symptom_status)
- Current disease status ___ (disease_status)

# Follow-up/surveillance

- H&P
    - If asymptomatic, H&P every 3–6 mo for 1–2 y, then every 6–12 mo for 3–5 y
- Chemistry profile and CBC, as clinically indicated
- Imaging studies as clinically indicated
    - Per Principles of Surveillance (ESOPH-I)
- EGD and biopsy as clinically indicated
    - Per Post-Treatment Surveillance in Principles of Endoscopic Staging and Therapy (ESOPH-A 6 of 8)
    - Per Principles of Surveillance (ESOPH-I)
- Dilatation for anastomotic stenosis
- Nutritional assessment and counseling

# Locoregional recurrence, prior esophagectomy and no prior chemoradiation

- Concurrent chemoradiation, preferred
    - Systemic therapy per Principles of Systemic Therapy (ESOPH-F 3 of 12 for concurrent chemoradiation)
    - Radiation per Principles of Radiation Therapy (ESOPH-G)
- or Surgery
    - Pathologic review and biomarker testing per ESOPH-B
    - Per Principles of Surgery (ESOPH-C)
- or Systemic therapy
    - Per Principles of Systemic Therapy (ESOPH-F 5 of 12 for systemic therapy)
- or Palliative/best supportive care
    - Per Principles of Palliative/Best Supportive Care (ESOPH-H)
- Response assessment
    - Chest/abdomen CT with contrast, per Principles of Surveillance (ESOPH-I)

# Locoregional recurrence, prior chemoradiation and no prior esophagectomy

- Resectable and medically operable
    - Esophagectomy
        - Pathologic review and biomarker testing per ESOPH-B
        - Per Principles of Surgery (ESOPH-C)
        - Transhiatal or transthoracic, or minimally invasive
        - Gastric reconstruction preferred
        - Feeding jejunostomy for postoperative nutritional support, generally preferred
    - Response assessment
        - Chest/abdomen CT with contrast, per Principles of Surveillance (ESOPH-I)
- Unresectable or medically inoperable
    - Palliative Management (ESOPH-10)

# Metastatic disease

- Palliative Management (ESOPH-10)

# Next

- Recurrence after treatment of locoregional recurrence with prior esophagectomy and no prior chemoradiation, go to Palliative Management (ESOPH-10)
- Recurrence after esophagectomy for locoregional recurrence, go to Palliative Management (ESOPH-10)
- Unresectable or medically inoperable locoregional recurrence, go to ESOPH-10
- Metastatic disease, go to ESOPH-10
