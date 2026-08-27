+++
id           = "uterine/ENDO-2"
gid          = "uterine"
ref          = "ENDO-2"
page         = 12
title        = "Endometrioid carcinoma with suspected or gross cervical involvement: additional workup and primary treatment"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ENDO-1", "ENDO-4", "ENDO-7", "ENDO-9", "UN-1"]

[facets]
disease   = "uterine"
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cervical_finding"
type = "text"
[[variables]]
name = "prior_pelvis_mri"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "workup_result"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "surgery_suitable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "comorbidities"
type = "text"
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-2, p12
- Applies to initial clinical findings of suspected or gross cervical involvement, endometrioid histology
- See (UN-1) for classification of uterine neoplasms
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Endometrioid histology
- Cervical involvement: ___ (cervical_finding), suspected or gross
- Pelvis MRI previously done: ___ (prior_pelvis_mri)
- Comorbidities: ___ (comorbidities)
- Suitable for primary surgery: ___ (surgery_suitable)
    - Not suitable means disease is not amenable to resection, or patient is not suitable for surgery based on comorbidities
- Result of additional workup: ___ (workup_result)
    - Positive result means clear demonstration of cervical stromal involvement

# Additional workup

- Cervical biopsy
- or pelvis MRI
    - Principles of Imaging (ENDO-B)
- Either one only if not previously done

# Primary treatment, negative result

- TH/BSO and surgical staging
    - Principles of Pathology and Molecular Analysis (ENDO-A)
    - The degree of surgical staging to assess disease status depends on preoperative and intraoperative findings
    - Multidisciplinary expertise is recommended
    - Principles of Evaluation and Surgical Staging (ENDO-C)

# Primary treatment, positive result, suitable for primary surgery

- TH (preferred) or radical hysterectomy (RH) and BSO, and surgical staging
    - Principles of Pathology and Molecular Analysis (ENDO-A)
    - The degree of surgical staging to assess disease status depends on preoperative and intraoperative findings
    - Multidisciplinary expertise is recommended
    - Principles of Evaluation and Surgical Staging (ENDO-C)
- or EBRT with or without brachytherapy (category 2B)
    - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - Then TH/BSO and surgical staging 4–12 weeks post RT

# Primary treatment, positive result, not suitable for primary surgery

- EBRT with or without brachytherapy
    - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - Then surgical resection, if rendered operable, 4–12 weeks post RT
    - or definitive RT if inoperable
- or systemic therapy (category 2B)
    - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
    - Then surgical resection if rendered operable
    - or EBRT plus brachytherapy if inoperable

# Next

- After surgical staging, adjuvant treatment for surgically staged
    - Stage I, go to (ENDO-4)
    - Stage II, go to (ENDO-5)
    - Stage III–IV, go to (ENDO-6)
- Incompletely staged, go to (ENDO-7)
- After definitive RT, surveillance (ENDO-9)
