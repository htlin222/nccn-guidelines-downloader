+++
id           = "uterine/ENDO-14"
gid          = "uterine"
ref          = "ENDO-14"
page         = 25
title        = "Workup and treatment of biopsy-proven uterine carcinosarcoma"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ENDO-9", "ENDO-A", "ENDO-B", "ENDO-C", "ENDO-D", "UN-A", "ST-1"]

[facets]
disease   = "uterine"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "primary-treatment", "adjuvant", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging_findings"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["suitable", "not suitable"]
[[variables]]
name = "figo_stage"
type = "enum"
options = ["I", "II", "III", "IV"]
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-14, p25
- Applies to biopsy findings of carcinosarcoma
    - Also known as malignant mixed mesodermal tumor or malignant mixed Müllerian tumor
- All staging in guideline is based on 2009 FIGO staging (ST-1)
- Principles of Imaging (ENDO-B)
- Principles of Evaluation and Surgical Staging (ENDO-C)
- Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- Systemic Therapy for Endometrial Carcinoma (ENDO-D)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biopsy findings: carcinosarcoma
- Imaging findings ___ (imaging_findings)
- CA-125 ___ (ca125)
- HER2 ___ (her2)
- Suitable for primary surgery ___ (surgical_candidate)
    - Not suitable means disease is not amenable to resection, or patient is not suitable for surgery based on comorbidities
- Surgical stage ___ (figo_stage)

# Additional workup

- Imaging
    - Principles of Imaging (ENDO-B)
- Consider CA-125
- HER2 testing
    - Recommended for advanced or metastatic disease
    - Principles of Molecular Analysis (ENDO-A 2 of 4)

# Primary treatment, suitable for primary surgery

- TH/BSO and surgical staging
    - MIS is the preferred approach when technically feasible (ENDO-C)
    - The degree of surgical staging to assess disease status depends on intraoperative findings (ENDO-C)
    - Multidisciplinary expertise is recommended
- Consider maximal tumor debulking for gross disease

# Additional treatment after primary surgery

- Stage I
    - Systemic therapy (ENDO-D)
        - Initiation of chemotherapy within 3–6 weeks postoperatively should be considered
    - + vaginal brachytherapy (UN-A)
        - Vaginal brachytherapy can be interdigitated with chemotherapy starting 6 weeks postoperatively
- Stage II, III, IV
    - Systemic therapy (ENDO-D)
        - Initiation of chemotherapy within 3–6 weeks postoperatively should be considered
    - ± EBRT (UN-A)
        - Consider EBRT if both high-grade epithelial components and sarcoma are dominant (>50% of sarcoma component in uterine tumor)
    - ± vaginal brachytherapy (UN-A)
        - Vaginal brachytherapy can be interdigitated with chemotherapy starting 6 weeks postoperatively
- Then surveillance (ENDO-9)

# Primary treatment, not suitable for primary surgery

- Uterine-confined disease ± pelvic nodal involvement on imaging
    - EBRT (UN-A) ± brachytherapy (UN-A) ± systemic therapy (ENDO-D)
    - or Systemic therapy (ENDO-D)
    - Then re-evaluate for surgical resection
- Other metastatic disease
    - Systemic therapy (ENDO-D) ± EBRT
    - or Best supportive care
    - Then re-evaluate for surgical resection and/or RT (UN-A) based on response

# Next

- Suitable for primary surgery, after additional treatment, go to surveillance (ENDO-9)
- Not suitable for primary surgery, uterine-confined disease, re-evaluate for surgical resection
- Not suitable for primary surgery, other metastatic disease, re-evaluate for surgical resection and/or RT based on response
