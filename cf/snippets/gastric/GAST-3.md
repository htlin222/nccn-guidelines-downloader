+++
id           = "gastric/GAST-3"
gid          = "gastric"
ref          = "GAST-3"
page         = 13
title        = "Response assessment and additional management after primary systemic therapy in patients who are medically fit"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-5", "GAST-7", "GAST-9"]

[facets]
disease   = "gastric"
biomarker = ["msi-h", "dmmr", "any"]
timepoint = ["primary-treatment", "neoadjuvant", "staging"]
intent    = ["curative", "palliative"]

[[variables]]
name = "medically_fit"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "msi_dmmr"
type = "enum"
options = ["MSI-H/dMMR", "not MSI-H/dMMR", "unknown"]
[[variables]]
name = "treatment_received"
type = "text"
[[variables]]
name = "ct_result"
type = "text"
[[variables]]
name = "pet_result"
type = "text"
[[variables]]
name = "egd_result"
type = "text"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-3, p13
- Applies to primary treatment for patients who are medically fit
- Footnotes on GAST-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Medically fit for primary treatment ___ (medically_fit)
- MSI-H/dMMR status ___ (msi_dmmr)
- Primary treatment received ___ (treatment_received)
- Chest/abdomen/pelvis CT ___ (ct_result)
- FDG-PET/CT, if done ___ (pet_result)
- EGD and biopsy, if done ___ (egd_result)

# Primary treatment for patients who are medically fit

- Perioperative systemic therapy (category 1)
    - Principles of Systemic Therapy (GAST-F)
- or Neoadjuvant or perioperative ICI if tumor is microsatellite instability-high (MSI-H)/mismatch repair deficient (dMMR)
    - Principles of Systemic Therapy (GAST-F)
    - Consider perioperative immunotherapy in consultation with a multidisciplinary team
    - Radiologic and endoscopic complete responses may occur
    - Current imaging and endoscopic assessment methods do not reliably predict pathologic complete response
    - Gastrectomy with appropriate lymphadenectomy remains the standard approach outside of prospective organ-preservation clinical trials
    - Multidisciplinary evaluation is recommended when considering non-operative management
    - If undergoing non-operative management
        - Give immunotherapy for at least 1 year, counting perioperative and adjuvant settings
        - Surveillance with chest/abdomen/pelvis CT, plus PET/CT if clinically indicated
        - Surveillance with EGD and biopsy, EUS as clinically indicated
        - Surveillance every 12 weeks for 2 years, then every 6 months until year 5
        - Cercek A, et al. N Engl J Med 2025;392:2297-2308
        - Raimondi A, et al. J Clin Oncol 2025;43:3457-3467

# Response assessment after perioperative systemic therapy

- Chest/abdomen/pelvis CT with oral and IV contrast
- FDG-PET/CT as clinically indicated

# Response assessment after neoadjuvant or perioperative ICI

- Chest/abdomen CT with oral and IV contrast, not required if FDG-PET/CT is done
    - Pelvis CT if clinically indicated
    - CT with contrast should be considered if there were findings on the pre-treatment CT that merit more accurate anatomic assessment after treatment, such as small pulmonary nodules
    - CT with contrast should be considered if post-treatment PET identified new findings that merit more accurate anatomic assessment
- FDG-PET/CT as clinically indicated
- EGD and biopsy
    - See Post-Treatment Surveillance in Principles of Endoscopic Staging and Therapy (GAST-A 3 of 4)

# Outcome and additional management after perioperative systemic therapy

- Resectable disease
    - Surgery (preferred)
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
        - Surgery as primary therapy is appropriate for ≥T1b cancer or actively bleeding cancer, or when postoperative therapy is preferred
        - Then Surgical Outcomes for Patients Who Have Received Systemic Therapy (GAST-5)
    - or Palliative Management (GAST-9)
- Unresectable or metastatic disease
    - Palliative Management (GAST-9)

# Outcome and additional management after neoadjuvant or perioperative ICI

- No evidence of disease
    - Observation
        - Post-Treatment Surveillance in Principles of Endoscopic Staging and Therapy (GAST-A 3 of 4)
        - Multidisciplinary evaluation is recommended when considering non-operative management
        - Immunotherapy should be given for at least 1 year, counting perioperative and adjuvant settings
        - Surveillance with chest/abdomen/pelvis CT, plus PET/CT if clinically indicated, and EGD with biopsy, EUS as clinically indicated, every 12 weeks for 2 years, then every 6 months until year 5
        - Then Follow-up (GAST-7)
    - or Surgery
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
        - In patients at higher risk of postoperative nutritional intolerance or anastomotic complications, feeding jejunostomy may be considered
        - Then Surgical Outcomes for Patients Who Have Received Systemic Therapy (GAST-5)
- Persistent local disease
    - Surgery (preferred)
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
        - In patients at higher risk of postoperative nutritional intolerance or anastomotic complications, feeding jejunostomy may be considered
        - Then Surgical Outcomes for Patients Who Have Received Systemic Therapy (GAST-5)
    - or Palliative Management (GAST-9)
- New metastatic disease
    - Palliative Management (GAST-9)

# Next

- Surgery performed, go to Surgical Outcomes for Patients Who Have Received Systemic Therapy (GAST-5)
- No evidence of disease with observation, go to Follow-up (GAST-7)
- Unresectable, metastatic, or new metastatic disease, go to Palliative Management (GAST-9)
