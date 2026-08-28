+++
id           = "penile/PN-9"
gid          = "penile"
ref          = "PN-9"
page         = 13
title        = "Management of recurrent disease, penile lesion or inguinal region"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-1", "PN-2", "PN-5", "PN-8", "PN-B", "PN-C", "PN-D"]

[facets]
disease   = "penile"
stage     = "recurrent"
timepoint = "recurrence"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_site"
type = "enum"
options = ["penile lesion", "inguinal region"]
[[variables]]
name = "node_character"
type = "enum"
options = ["single mobile", "fixed", "cN2/N3"]
[[variables]]
name = "node_size"
type = "number"
[[variables]]
name = "prior_ilnd_or_rt"
type = "enum"
options = ["no prior inguinal lymphadenectomy or RT", "prior inguinal lymphadenectomy", "prior RT"]
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["negative", "positive", "not done"]
[[variables]]
name = "nodal_stage"
type = "enum"
options = ["pN1", "pN2-3"]
+++

# Source

- NCCN Penile Cancer v2.2026, PN-9, p13
- Applies to recurrent disease, either recurrence of the penile lesion or local recurrence in the inguinal region
- Principles of Surgery (PN-B)
- Principles of Radiotherapy (PN-C)
- Principles of Systemic Therapy (PN-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Site of recurrence ___ (recurrence_site)
- Inguinal node character ___ (node_character)
- Largest inguinal node ___ (node_size) cm
- Prior inguinal treatment ___ (prior_ilnd_or_rt)
- Percutaneous lymph node biopsy ___ (biopsy_result)
- Nodal stage on biopsy ___ (nodal_stage)

# Recurrence of penile lesion after initial penile sparing treatment

- Treat according to recurrence stage (PN-1 and PN-2)

# Local recurrence in inguinal region, no prior inguinal lymphadenectomy or RT

- Single, mobile, <4 cm lymph node
    - Percutaneous lymph node biopsy
        - Ultrasound- or CT-guided biopsy of the most accessible node, inguinal or pelvic
    - Biopsy negative
        - Surveillance (PN-8)
    - Biopsy positive, pN1
        - ILND
            - Principles of Surgery (PN-B)
    - Biopsy positive, pN2-3
        - Chemotherapy followed by ILND
            - Chemotherapy per Principles of Systemic Therapy (PN-D)
            - ILND per Principles of Surgery (PN-B)
        - or ILND
            - Principles of Surgery (PN-B)
        - or Chemo/RT, only if no prior RT
            - Radiotherapy per Principles of Radiotherapy (PN-C)
            - Chemotherapy per Principles of Systemic Therapy (PN-D)
- Fixed node, >=4 cm node, or cN2/N3 disease
    - Treatment for Unilateral Lymph Nodes (Fixed) or Bilateral Lymph Node(s) (Fixed or Mobile) (PN-5)

# Local recurrence in inguinal region, prior inguinal lymphadenectomy or RT

- Percutaneous lymph node biopsy
    - Ultrasound- or CT-guided biopsy of the most accessible node, inguinal or pelvic
- PLND, with or without adjuvant therapy
    - PLND per Principles of Surgery (PN-B) and Principles of Radiotherapy (PN-C)
    - May add adjuvant chemotherapy, per Principles of Systemic Therapy (PN-D)
    - or may add adjuvant chemo/RT (category 2B), per Principles of Radiotherapy (PN-C) and Principles of Systemic Therapy (PN-D)
- or Chemo/RT (category 2B)
    - Principles of Radiotherapy (PN-C)
    - Principles of Systemic Therapy (PN-D)
- or Chemotherapy (category 2B)
    - Principles of Systemic Therapy (PN-D)

# Next

- Recurrent penile lesion after penile sparing treatment, treat according to recurrence stage (PN-1 and PN-2)
- Negative percutaneous lymph node biopsy, go to Surveillance (PN-8)
- Fixed node, >=4 cm node, or cN2/N3 disease, go to Treatment for Unilateral Lymph Nodes (Fixed) or Bilateral Lymph Node(s) (Fixed or Mobile) (PN-5)
- After treatment of the inguinal recurrence, Surveillance (PN-8)
