+++
id           = "penile/PN-7"
gid          = "penile"
ref          = "PN-7"
page         = 11
title        = "Management of enlarged pelvic lymph nodes"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-3", "PN-4", "PN-5", "PN-8", "PN-10", "PN-C", "PN-D", "PN-E"]

[facets]
disease   = "penile"
timepoint = ["staging", "neoadjuvant", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging_modality"
type = "enum"
options = ["CT", "MRI"]
[[variables]]
name = "inguinal_status"
type = "enum"
options = ["non-palpable", "palpable non-bulky", "palpable bulky"]
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "response"
type = "enum"
options = ["stable or clinical response", "disease progression or non-resectable"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["surgical candidate", "nonsurgical candidate"]
+++

# Source

- NCCN Penile Cancer v2.2026, PN-7, p11
- Applies when pelvic lymph nodes are enlarged
    - Enlarged means enlarged on CT or MRI, not pathologic stage
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pelvic lymph nodes enlarged on ___ (imaging_modality)
- Inguinal lymph node status ___ (inguinal_status)
- Percutaneous lymph node biopsy result ___ (biopsy_result)
- Response after neoadjuvant chemotherapy ___ (response)
- Candidacy for surgery ___ (surgical_candidate)

# Lymph node biopsy

- Percutaneous lymph node biopsy, if technically feasible
    - Ultrasound- or CT-guided biopsy of the most accessible node, inguinal or pelvic
    - If not technically feasible, PET/CT scan can be used to evaluate lymph nodes

# Biopsy negative

- See management depending on inguinal lymph node status
    - Non-Palpable Inguinal Lymph Nodes (PN-3)
    - Palpable Non-Bulky Inguinal Lymph Nodes (PN-4)
    - Palpable Bulky Inguinal Lymph Nodes (PN-5)

# Biopsy positive

- Neoadjuvant TIP chemotherapy
    - Principles of Systemic Therapy (PN-D)
- Imaging of chest/abdomen/pelvis
    - Imaging may include CT, MRI, PET/CT, and/or chest x-ray
    - When appropriate, imaging should be done with contrast unless contraindicated
    - Principles of Imaging (PN-E)
    - If M1 disease is identified, see Management of Metastatic Disease (PN-10)

# Stable or clinical response

- Surgical candidate
    - Consolidation surgery
        - Consists of bilateral superficial and deep ILND and unilateral/bilateral PLND
    - Consider postoperative RT or chemo/RT if pN2-3 or presence of extranodal extension (category 2B)
- Nonsurgical candidate
    - Chemo/RT
        - Principles of Radiotherapy (PN-C)
        - Principles of Systemic Therapy (PN-D)

# Next

- Biopsy negative, manage by inguinal lymph node status (PN-3), (PN-4), or (PN-5)
- After consolidation surgery, go to Surveillance (PN-8)
- After chemo/RT in a nonsurgical candidate, go to Surveillance (PN-8)
- Disease progression or non-resectable, see No Response/Disease Progression on Management of Metastatic Disease (PN-10)
