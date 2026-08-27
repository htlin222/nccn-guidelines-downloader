+++
id           = "esophageal/ESOPH-4"
gid          = "esophageal"
ref          = "ESOPH-4"
page         = 14
title        = "Primary treatment options for medically fit squamous cell carcinoma, by tumor classification"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-3", "ESOPH-5", "ESOPH-6", "ESOPH-8", "ESOPH-9", "ESOPH-10", "ST-1"]

[facets]
disease   = "esophageal"
histology = "squamous"
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "location"
type = "enum"
options = ["cervical", "non-cervical"]
[[variables]]
name = "size_cm"
type = "number"
[[variables]]
name = "differentiation"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "nodes"
type = "text"
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-4, p14
- Histology: squamous cell carcinoma (SCC)
- Primary treatment options for patients who are medically fit
- Tumor classification, see Staging (ST-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Squamous cell carcinoma
- Medically fit for treatment
- Tumor classification ___ (ctnm)
- Tumor location ___ (location) esophagus
- Tumor size ___ (size_cm) cm
- Differentiation ___ (differentiation)
- Lymphovascular invasion (LVI) ___ (lvi)
- Nodal status ___ (nodes)
    - Preclinical staging cannot establish the number of positive nodes
    - Histologic confirmation of suspected positive node is desirable

# cT1b–cT2, N0 (low-risk lesions: <3 cm, well differentiated)

- Esophagectomy (for non-cervical esophagus)
    - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
    - Feeding jejunostomy for postoperative nutritional support, generally preferred
    - Principles of Surgery (ESOPH-C)
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
    - Then Surgical Outcomes After Esophagectomy (ESOPH-6)

# cT2, N0 (high-risk lesions: lymphovascular invasion [LVI], ≥3 cm, poorly differentiated), or cT1b–cT2, N+, or cT3–cT4a, Any N

- Preoperative chemoradiation (preferred)
    - For select patients, consider relieving dysphagia with induction systemic therapy (ESOPH-F 5 of 12, and Principles of Best Supportive Care ESOPH-H)
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - Then Response Assessment (ESOPH-5)
- or Definitive chemoradiation
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - Then Follow-up (ESOPH-9)

# cT4b

- For select patients, consider endoluminal stenting when appropriate (Principles of Palliative/Best Supportive Care, ESOPH-H)
- Definitive chemoradiation
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - Then Response Assessment (ESOPH-5)
- or Consider chemotherapy alone in the setting of invasion of trachea, great vessels, or heart
    - Principles of Systemic Therapy (ESOPH-F)
    - Palliative Management (ESOPH-10)

# Next

- Esophagectomy performed, go to Surgical Outcomes After Esophagectomy (ESOPH-6)
- Preoperative chemoradiation given, go to Response Assessment (ESOPH-5)
- Definitive chemoradiation given for cT4b, go to Response Assessment (ESOPH-5)
- Definitive chemoradiation given for cT2 N0 high-risk, cT1b–cT2 N+, or cT3–cT4a Any N, go to Follow-up (ESOPH-9)
- Chemotherapy alone for invasion of trachea, great vessels, or heart, go to Palliative Management (ESOPH-10)
