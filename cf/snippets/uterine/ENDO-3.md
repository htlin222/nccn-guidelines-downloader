+++
id           = "uterine/ENDO-3"
gid          = "uterine"
ref          = "ENDO-3"
page         = 13
title        = "Additional workup and primary treatment when extrauterine disease is suspected"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["UN-1", "UN-A", "ENDO-1", "ENDO-6", "ENDO-9", "ENDO-A", "ENDO-B", "ENDO-C", "ENDO-D"]

[facets]
disease   = "uterine"
stage     = ["III", "IV"]
timepoint = ["workup", "primary-treatment", "neoadjuvant", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "surgical_candidacy"
type = "enum"
options = ["suitable for primary surgery", "not suitable for primary surgery"]
[[variables]]
name = "disease_extent"
type = "enum"
options = ["no evidence of extrauterine disease", "abdominal/pelvic-confined disease", "locoregional disease", "distant metastases"]
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-3, p13
- Applies to initial clinical findings with endometrioid histology
- Classification of uterine neoplasms: UN-1
- Applies when extrauterine disease is suspected
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Endometrioid histology
- Suspected extrauterine disease
- ___ (surgical_candidacy)
    - Not suitable if disease is not amenable to resection
    - Not suitable if patient is not suitable for surgery based on comorbidities
- ___ (disease_extent)
- ___ (imaging)
- CA-125 ___ (ca125)

# Additional workup

- Imaging
    - Principles of Imaging (ENDO-B)
- Consider CA-125

# Primary treatment, suitable for primary surgery

- No evidence of extrauterine disease
    - Primary Treatment (Disease limited to the uterus) (ENDO-1)
- Abdominal/pelvic-confined disease
    - TH/BSO + surgical staging/debulking
        - Principles of Pathology and Molecular Analysis (ENDO-A)
        - The degree of surgical staging to assess disease status depends on preoperative and intraoperative findings
        - Multidisciplinary expertise is recommended
        - Principles of Evaluation and Surgical Staging (ENDO-C)
        - The surgical goal is to have no measurable residual disease
    - or Preoperative systemic therapy
        - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
- Distant metastases
    - Systemic therapy (ENDO-D)
    - Plus or minus EBRT
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - Plus or minus stereotactic body RT (SBRT)
        - Consider ablation for 1–5 metastatic lesions if hysterectomy is performed
    - Plus or minus TH/BSO (ENDO-A)

# Primary treatment, not suitable for primary surgery

- Locoregional disease
    - EBRT (UN-A)
    - Plus or minus brachytherapy (UN-A)
    - Plus or minus systemic therapy (ENDO-D)
    - or Systemic therapy (ENDO-D)
- Distant metastases
    - Systemic therapy (ENDO-D)

# Next

- After TH/BSO + surgical staging, adjuvant treatment for surgically staged disease
    - Stage III–IV (ENDO-6)
- Re-evaluate for surgical resection 4–12 weeks post RT
- Re-evaluate for surgical resection and/or RT (UN-A) based on response
- Surveillance (ENDO-9)
