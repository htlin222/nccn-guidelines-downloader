+++
id           = "penile/PN-4"
gid          = "penile"
ref          = "PN-4"
page         = 8
title        = "Management of palpable non-bulky inguinal lymph nodes"
nccn_version = "2.2026"
nccn_date    = "06/05/26"
generated    = "2026-08-28"
see_also     = ["PN-1", "PN-2", "PN-5", "PN-7", "PN-8", "PN-B", "PN-C", "PN-D", "PN-E"]

[facets]
disease   = "penile"
timepoint = ["staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "node_side"
type = "enum"
options = ["unilateral", "bilateral"]
[[variables]]
name = "node_size"
type = "number"
[[variables]]
name = "node_fixation"
type = "enum"
options = ["mobile", "fixed"]
[[variables]]
name = "lesion_risk"
type = "enum"
options = ["low-risk", "high-risk"]
[[variables]]
name = "pelvic_nodes"
type = "enum"
options = ["not enlarged", "enlarged"]
+++

# Source

- NCCN Penile Cancer v2.2026, PN-4, p8
- Applies to palpable inguinal lymph nodes
- Treatment options follow Principles of Surgery (PN-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, palpable inguinal lymph nodes
- Laterality ___ (node_side)
- Largest diameter of contiguous inguinal lymph node(s) tissue ___ (node_size) cm
    - Measured on either physical examination and/or axial imaging (CT or MRI), and suspected of harboring metastatic disease
- Node ___ (node_fixation)
- Primary lesion ___ (lesion_risk)
    - High-risk primary lesion: T1, high-grade, lymphovascular invasion, perineural invasion, >50% poorly undifferentiated
- Pelvic lymph nodes on imaging ___ (pelvic_nodes)

# Imaging

- Imaging of chest/abdomen/pelvis
    - May include CT, MRI, PET/CT, and/or chest x-ray
    - When appropriate, imaging should be done with contrast unless contraindicated
    - Principles of Imaging (PN-E)
- CT/MRI of pelvis with contrast for nodal evaluation, if difficult to assess on physical examination
- If M1 disease is identified, see Management of Metastatic Disease (PN-10)

# Risk stratification based on physical/imaging findings

- Unilateral lymph node(s) <4 cm (mobile), continue on this page
- Unilateral lymph node(s) ≥4 cm (fixed or mobile), go to PN-5
- Unilateral lymph node(s) <4 cm (fixed), go to PN-5
- Bilateral lymph nodes (fixed or mobile), go to PN-5
- Enlarged pelvic lymph nodes, go to Management of Enlarged Pelvic Lymph Nodes (PN-7)

# Nodal status, unilateral lymph node(s) <4 cm (mobile)

- Low-risk primary lesion
    - Percutaneous lymph node biopsy
        - Ultrasound- or CT-guided biopsy of the most accessible node, inguinal or pelvic
    - Biopsy negative
        - Excisional biopsy, or
        - Surveillance
        - If then negative, go to Surveillance (PN-8)
        - If then positive, treat as node-positive below
    - Biopsy positive, treat as node-positive below
- High-risk primary lesion, treat as node-positive below, without percutaneous lymph node biopsy

# Treatment of node-positive disease

- Bilateral ILND
- Consider neoadjuvant TIP (Paclitaxel, Ifosfamide, Cisplatin) chemotherapy followed by ILND
    - Principles of Systemic Therapy (PN-D)

# Pathologic nodal status after ILND

- pN1, go to Surveillance (PN-8)
- pN2–3, choose one of the following
    - Pelvic lymph node dissection (PLND), with or without the following
        - If pelvic nodes positive, adjuvant RT (PN-C), or
        - If pelvic nodes positive, chemotherapy (category 2B) (PN-D), or
        - If pelvic nodes positive, chemo/RT (category 2B) (PN-C, PN-D)
    - Chemo/RT (category 2B) (PN-C, PN-D)
    - Chemotherapy (category 2B) (PN-D)

# Next

- Negative excisional biopsy, go to Surveillance (PN-8)
- pN1 after ILND, go to Surveillance (PN-8)
- Bulky nodes, go to Management of Palpable Bulky Inguinal Lymph Nodes (PN-5)
- Enlarged pelvic lymph nodes, go to Management of Enlarged Pelvic Lymph Nodes (PN-7)
- If M1 disease is identified, see Management of Metastatic Disease (PN-10)
