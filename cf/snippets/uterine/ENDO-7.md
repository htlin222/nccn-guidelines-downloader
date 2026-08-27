+++
id           = "uterine/ENDO-7"
gid          = "uterine"
ref          = "ENDO-7"
page         = 17
title        = "Management after simple/total hysterectomy and BSO performed without surgical staging"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["UN-1", "ENDO-1", "ENDO-4", "ENDO-5", "ENDO-6", "ENDO-9"]

[facets]
disease   = "uterine"
stage     = ["I", "II", "III", "IV"]
timepoint = ["staging", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "myometrial_invasion"
type = "text"
[[variables]]
name = "lvsi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "imaging_result"
type = "enum"
options = ["negative", "suspicious", "positive"]
+++

# Source

- NCCN Uterine Neoplasms v3.2026, ENDO-7, p17
- Applies after simple/total hysterectomy and BSO, incompletely surgically staged, clinical stage I
- Clinical intrauterine findings, endometrioid histology
    - See UN-1 for classification of uterine neoplasms
- All staging in this guideline is based on 2009 FIGO staging (ST-1)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Post TH + BSO, but incompletely surgically staged
- Clinical stage I
- Endometrioid histology
- Grade ___ (grade)
- Myometrial invasion ___ (myometrial_invasion)
- LVSI ___ (lvsi)

# Clinical intrauterine findings

- Stage IA, G1–2 with myometrial invasion and no LVSI
    - No imaging step; go to adjuvant or additional treatment (ENDO-4)
- Stage IA, G3, no LVSI
    - Imaging
- Stage IB, any grade
    - Imaging
- Any myometrial invasive carcinoma with LVSI
    - Imaging

# Imaging

- Imaging, biopsy as indicated
    - Principles of Imaging (ENDO-B)
- Result ___ (imaging_result)

# Imaging negative

- Consider surgical restaging
    - The degree of surgical staging to assess disease status depends on preoperative and intraoperative findings
    - Multidisciplinary expertise is recommended
    - Principles of Evaluation and Surgical Staging (ENDO-C)
- Surgically restaged
    - Adjuvant treatment for surgically staged disease
        - Stage I (ENDO-4)
        - Stage II (ENDO-5)
        - Stage III–IV (ENDO-6)
- Surgically not restaged
    - RT, EBRT (preferred) and/or vaginal brachytherapy
        - Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
    - ± systemic therapy (category 2B for systemic therapy)
        - Systemic Therapy for Endometrial Carcinoma (ENDO-D)

# Imaging suspicious or positive, at least stage II

- Surgically resectable
    - Surgery
        - Degree of surgical staging depends on preoperative and intraoperative findings; multidisciplinary expertise is recommended (ENDO-C)
    - Adjuvant treatment for surgically staged disease
        - Stage I (ENDO-4)
        - Stage II (ENDO-5)
        - Stage III–IV (ENDO-6)
- Not suitable for surgery
    - Interventional radiologic biopsy
    - Additional or adjuvant treatment
        - Stage II (ENDO-5)
        - Stage III–IV (ENDO-6)

# Next

- Stage IA, G1–2 with myometrial invasion and no LVSI, go to ENDO-4
- After restaging or surgery, adjuvant treatment for surgically staged disease
    - Stage I, go to ENDO-4
    - Stage II, go to ENDO-5
    - Stage III–IV, go to ENDO-6
- Not suitable for surgery, after interventional radiologic biopsy
    - Stage II, go to ENDO-5
    - Stage III–IV, go to ENDO-6
- Surgically not restaged and treated with RT ± systemic therapy, go to surveillance (ENDO-9)
