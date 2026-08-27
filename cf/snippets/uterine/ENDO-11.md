+++
id           = "uterine/ENDO-11"
gid          = "uterine"
ref          = "ENDO-11"
page         = 22
title        = "Additional workup, primary treatment and additional treatment for serous carcinoma of the endometrium"
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
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "figo_stage"
type = "enum"
options = ["IA", "IB", "II", "III", "IV"]
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-11, p22
- Applies to biopsy findings of serous carcinoma
- All staging in guideline is based on 2009 FIGO staging (ST-1)
- Principles of Imaging (ENDO-B)
- Principles of Evaluation and Surgical Staging (ENDO-C)
- Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- Systemic Therapy for Endometrial Carcinoma (ENDO-D)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Biopsy findings: serous carcinoma
    - HER2 testing is recommended for advanced or metastatic disease, see Principles of Molecular Analysis (ENDO-A)
- Suitable for primary surgery ___ (surgical_candidate)
    - Not suitable if disease is not amenable to resection
    - Not suitable if patient is not suitable for surgery based on comorbidities
- CA-125 ___ (ca125)
- FIGO stage ___ (figo_stage)

# Additional workup

- Imaging, see Principles of Imaging (ENDO-B)
- Consider CA-125

# Primary treatment, suitable for primary surgery

- TH/BSO and surgical staging
    - MIS is the preferred approach when technically feasible (ENDO-C)
    - The degree of surgical staging to assess disease status depends on intraoperative findings (ENDO-C)
    - Multidisciplinary expertise is recommended
- Consider maximal tumor debulking for gross disease

# Primary treatment, not suitable for primary surgery

- EBRT (UN-A) ± brachytherapy (UN-A) ± systemic therapy (ENDO-D)
    - Then re-evaluate for surgical resection
- or Systemic therapy (ENDO-D)
    - Then re-evaluate for surgical resection and/or RT (UN-A) based on response

# Additional treatment after surgical staging

- No residual uterine disease and negative surgical staging
    - Observe
- Noninvasive stage IA
    - Observe
        - Washings can help determine treatment planning
    - or Systemic therapy (ENDO-D) ± vaginal brachytherapy (UN-A)
    - or Vaginal brachytherapy (UN-A)
- Invasive stage IA, or stage IB, II
    - Systemic therapy (ENDO-D) ± EBRT (UN-A) ± vaginal brachytherapy (UN-A)
    - or EBRT ± vaginal brachytherapy (UN-A)
- Stage III, IV
    - Systemic therapy (ENDO-D) ± EBRT (UN-A) ± vaginal brachytherapy (UN-A)
        - HER2 testing is recommended for advanced or metastatic disease (ENDO-A)

# Next

- After additional treatment or observation, go to Surveillance (ENDO-9)
- Treated without primary surgery, re-evaluate for surgical resection, and/or RT (UN-A) based on response
