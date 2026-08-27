+++
id           = "esophageal/ESOPH-13"
gid          = "esophageal"
ref          = "ESOPH-13"
page         = 24
title        = "Primary treatment options for medically fit patients with cT1b–cT4b adenocarcinoma"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ESOPH-12", "ESOPH-14", "ESOPH-15", "ESOPH-16", "ESOPH-17", "ESOPH-21"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
biomarker = ["msi-h", "dmmr", "any"]
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_class"
type = "text"
[[variables]]
name = "tumor_size_cm"
type = "number"
[[variables]]
name = "differentiation"
type = "enum"
options = ["well differentiated", "poorly differentiated"]
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "msi_mmr"
type = "enum"
options = ["MSI-H/dMMR", "not MSI-H/dMMR", "unknown"]
[[variables]]
name = "surgery_preference"
type = "enum"
options = ["accepts surgery", "declines surgery"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-13, p24
- Applies to adenocarcinomas
- Primary treatment options for patients who are medically fit
- See Staging (ST-1) for tumor classification
- Footnotes on ESOPH-13A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, adenocarcinoma
- Medically fit for the options on this page
- Tumor classification ___ (tumor_class), see Staging (ST-1)
- Tumor size ___ (tumor_size_cm) cm
- Differentiation ___ (differentiation)
- Lymphovascular invasion (LVI) ___ (lvi)
- MSI/MMR status ___ (msi_mmr)
- Patient ___ (surgery_preference)

# Tumor classification

- cT1b–cT2, N0, low-risk lesions
    - Low-risk means <3 cm and well differentiated
    - Preclinical staging cannot establish the number of positive nodes
- cT2, N0, high-risk lesions
    - High-risk means LVI, or ≥3 cm, or poorly differentiated
- cT1b–cT2, N+ or cT3–cT4a, any N
    - Histologic confirmation of suspected positive node is desirable
- cT4b
    - For select patients, consider endoluminal stenting when appropriate, see Principles of Palliative/Best Supportive Care (ESOPH-H)

# cT1b–cT2, N0, low-risk lesions

- Esophagectomy
    - Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
    - Principles of Surgery (ESOPH-C)
    - Transhiatal or transthoracic, or minimally invasive; gastric reconstruction preferred
    - Feeding jejunostomy for postoperative nutritional support, generally preferred
    - Then Surgical Outcomes After Esophagectomy (ESOPH-17)

# cT2, N0 high-risk lesions, and cT1b–cT2, N+ or cT3–cT4a, any N

- Perioperative systemic therapy (category 1) (preferred)
    - Principles of Systemic Therapy (ESOPH-F)
    - Then Response Assessment (ESOPH-14)
- or preoperative chemoradiation
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - May be considered for a tumor that is borderline resectable, or a patient who is medically unfit for surgery, or who is not a candidate for the FLOT regimen
    - Postoperative checkpoint inhibitor therapy may be given as warranted after surgery (ESOPH-18)
    - For select patients, consider relieving dysphagia with induction systemic therapy, see Perioperative Systemic Therapy in Principles of Systemic Therapy (ESOPH-F 3 of 12) and Principles of Best Supportive Care (ESOPH-H)
    - Then Response Assessment (ESOPH-14)
- or consider neoadjuvant or perioperative immune checkpoint inhibitor(s) (ICI) if tumor is MSI-high (MSI-H)/MMR deficient (dMMR)
    - Principles of Systemic Therapy (ESOPH-F)
    - Perioperative immunotherapy should be considered in consultation with a multidisciplinary team
    - Radiologic and endoscopic complete responses may occur with neoadjuvant ICI in MSI-H/dMMR esophageal or EGJ adenocarcinoma
    - Current imaging and endoscopic assessment methods do not reliably predict pathologic complete response
    - Esophagectomy with appropriate lymphadenectomy remains the standard approach outside of prospective organ-preservation clinical trials
    - Multidisciplinary evaluation is recommended when considering non-operative management
    - If undergoing non-operative management, give immunotherapy for at least 1 year, counting perioperative and adjuvant settings
    - If undergoing non-operative management, surveillance is chest/abdomen/pelvis CT, with PET/CT if clinically indicated, and EGD with biopsy, with EUS as clinically indicated
        - Every 12 weeks for 2 years, then every 6 months until year 5
    - Then Response Assessment (ESOPH-14)
- or definitive chemoradiation, only for patients who decline surgery
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - Then Response Assessment (ESOPH-15)

# cT4b

- Definitive chemoradiation
    - Principles of Systemic Therapy (ESOPH-F)
    - Principles of Radiation Therapy (ESOPH-G)
    - Then response assessment (ESOPH-15 or ESOPH-16)
- or consider chemotherapy alone in the setting of invasion of trachea, great vessels, or heart
    - Principles of Systemic Therapy (ESOPH-F)
    - Then Palliative Management (ESOPH-21)

# Next

- Esophagectomy, go to Surgical Outcomes After Esophagectomy (ESOPH-17)
- Perioperative systemic therapy, preoperative chemoradiation, or neoadjuvant/perioperative ICI, go to Response Assessment (ESOPH-14)
- Definitive chemoradiation for a patient who declines surgery, go to Response Assessment (ESOPH-15)
- Definitive chemoradiation for cT4b, go to Response Assessment (ESOPH-15) or Response Assessment (ESOPH-16)
- Chemotherapy alone for invasion of trachea, great vessels, or heart, go to Palliative Management (ESOPH-21)
- Follow-up (ESOPH-20)
