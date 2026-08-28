+++
id           = "penile/PN-5"
gid          = "penile"
ref          = "PN-5"
page         = 9
title        = "Management of palpable bulky inguinal lymph nodes"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-4", "PN-6", "PN-8", "PN-B", "PN-C", "PN-D"]

[facets]
disease   = "penile"
timepoint = ["primary-treatment", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "laterality"
type = "enum"
options = ["unilateral", "bilateral"]
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "fixation"
type = "enum"
options = ["fixed", "mobile"]
[[variables]]
name = "tip_eligible"
type = "enum"
options = ["eligible", "not eligible"]
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["positive", "negative"]
+++

# Source

- NCCN Penile Cancer v2.2026, PN-5, p9
- Applies to palpable bulky inguinal lymph node(s), defined on this page as
    - Unilateral ≥4 cm, fixed or mobile, or
    - Unilateral lymph node(s) <4 cm, fixed, or
    - Bilateral, fixed or mobile
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, palpable bulky inguinal lymph node(s)
- Laterality ___ (laterality)
- Largest diameter of contiguous inguinal lymph node(s) tissue ___ (node_size)
    - Measured on either physical examination and/or axial imaging (CT or MRI)
    - The nodal tissue measured is that suspected of harboring metastatic disease
- Fixation ___ (fixation)
- Eligibility for TIP ___ (tip_eligible)
- Percutaneous lymph node biopsy result ___ (biopsy_result)

# Node status

- Percutaneous lymph node biopsy
    - Ultrasound- or CT-guided
    - Biopsy the most accessible node, inguinal or pelvic

# Treatment if biopsy positive, unilateral lymph nodes ≥4 cm and mobile

- Neoadjuvant TIP chemotherapy followed by ILND (preferred), consider PLND
    - Principles of Systemic Therapy (PN-D)
    - Principles of Surgery (PN-B)
- ILND (preferred), consider PLND, in patients not eligible for TIP
    - Principles of Surgery (PN-B)

# Treatment if biopsy positive, unilateral lymph nodes fixed or bilateral lymph nodes fixed or mobile

- Neoadjuvant TIP chemotherapy followed by ILND (preferred), consider PLND
    - Principles of Systemic Therapy (PN-D)
    - Principles of Surgery (PN-B)
- RT
    - Principles of Radiotherapy (PN-C)
- Chemo/RT
    - Principles of Radiotherapy (PN-C)
    - Principles of Systemic Therapy (PN-D)

# Adjuvant management after ILND, by nodal pathology

- 0–1 positive nodes with viable disease
    - Surveillance (PN-8)
- ≥2 positive nodes or extranodal extension
    - Adjuvant chemotherapy, if not already given
        - Principles of Systemic Therapy (PN-D)
    - and/or if pelvic nodes positive, adjuvant RT
        - Principles of Radiotherapy (PN-C)
    - or Chemo/RT (category 2B)
        - Principles of Radiotherapy (PN-C)
        - Principles of Systemic Therapy (PN-D)

# Treatment if biopsy negative

- Excisional biopsy
    - Negative, surveillance (PN-8)
    - Positive, treatment (PN-6)

# Next

- Percutaneous biopsy negative and excisional biopsy negative, go to Surveillance (PN-8)
- Percutaneous biopsy negative and excisional biopsy positive, go to Treatment (PN-6)
- After ILND with 0–1 positive nodes with viable disease, go to Surveillance (PN-8)
