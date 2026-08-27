+++
id           = "uterine/ENDO-12"
gid          = "uterine"
ref          = "ENDO-12"
page         = 23
title        = "Clear cell carcinoma: additional workup, primary treatment, and additional treatment"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ENDO-A", "ENDO-B", "ENDO-C", "ENDO-D", "UN-A", "ENDO-9", "ST-1"]

[facets]
disease   = "uterine"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "surgery_suitable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "figo_stage"
type = "enum"
options = ["IA", "IB", "II", "III", "IV"]
[[variables]]
name = "myoinvasion"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "residual_disease"
type = "enum"
options = ["present", "absent"]
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-12, p23
- Applies to biopsy findings of clear cell carcinoma
    - Principles of Molecular Analysis (ENDO-A 2 of 4)
- All staging in guideline is based on 2009 FIGO staging (ST-1)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biopsy findings: clear cell carcinoma
- Suitable for primary surgery: ___ (surgery_suitable)
    - Not suitable means disease is not amenable to resection, or patient is not suitable for surgery based on comorbidities
- Comorbidities: ___ (comorbidities)
- CA-125: ___ (ca125)
- Surgical stage: ___ (figo_stage)
- Myoinvasion: ___ (myoinvasion)
- Residual uterine disease: ___ (residual_disease)

# Additional workup

- Imaging
    - Principles of Imaging (ENDO-B)
- Consider CA-125

# Primary treatment, suitable for primary surgery

- TH/BSO and surgical staging
    - MIS is the preferred approach when technically feasible
    - The degree of surgical staging to assess disease status depends on intraoperative findings
    - Multidisciplinary expertise is recommended
    - Principles of Evaluation and Surgical Staging (ENDO-C)
- Consider maximal tumor debulking for gross disease

# Primary treatment, not suitable for primary surgery

- Systemic therapy ± EBRT ± vaginal brachytherapy
    - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
    - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - Then re-evaluate for surgical resection
- or Systemic therapy
    - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
    - Then re-evaluate for surgical resection and/or RT based on response
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)

# Additional treatment after surgical staging

- No residual uterine disease and negative surgical staging
    - Observe
- Noninvasive stage IA
    - Observe
        - Washings can help determine treatment planning
    - or Systemic therapy ± vaginal brachytherapy
        - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - or Vaginal brachytherapy
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- Invasive stage IA, or stage IB, II
    - Systemic therapy ± EBRT ± vaginal brachytherapy
        - Systemic Therapy for Endometrial Carcinoma (ENDO-D)
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - or EBRT ± vaginal brachytherapy
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- Stage III, IV
    - EBRT ± brachytherapy ± systemic therapy
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
        - Systemic Therapy for Endometrial Carcinoma (ENDO-D)

# Next

- Surveillance (ENDO-9)
