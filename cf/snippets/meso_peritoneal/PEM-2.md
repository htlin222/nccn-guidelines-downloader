+++
id           = "meso_peritoneal/PEM-2"
gid          = "meso_peritoneal"
ref          = "PEM-2"
page         = 6
title        = "Pretreatment evaluation and treatment of peritoneal mesothelioma"
nccn_version = "2.2026"
nccn_date    = "10/03/25"
generated    = "2026-08-28"
see_also     = ["PEM-1", "PEM-B", "PEM-C", "PEM-D"]

[facets]
disease   = "meso_peritoneal"
timepoint = ["workup", "primary-treatment", "adjuvant", "surveillance"]

[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "ps"
type = "number"
[[variables]]
name = "ki67"
type = "number"
[[variables]]
name = "platelets"
type = "text"
[[variables]]
name = "nodal_status"
type = "text"
[[variables]]
name = "pci"
type = "number"
[[variables]]
name = "cc_score"
type = "number"
[[variables]]
name = "bicavitary"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "operable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cytoreduction_achievable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Mesothelioma: Peritoneal v2.2026, PEM-2, p6
- Pretreatment evaluation and treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- Histology ___ (histology)
- Performance status (PS) ___ (ps)
- Ki-67 ___ (ki67)
- Platelet count ___ (platelets)
- Nodal metastasis ___ (nodal_status)
- Bicavitary disease ___ (bicavitary)
- Peritoneal Cancer Index (PCI) ___ (pci)
- Completeness of cytoreduction (CC) score ___ (cc_score)
- Medically operable ___ (operable)
- Complete cytoreduction achievable ___ (cytoreduction_achievable)

# Risk features

- Low-risk features
    - Epithelioid histology
    - Absence of ANY high-risk features
- High-risk features, any one of
    - Biphasic/sarcomatoid histology
    - Nodal metastasis
    - Ki-67 >9%
    - Thrombocytosis
    - PS = 2
    - Bicavitary disease
    - High disease burden / incomplete cytoreduction
        - Peritoneal Cancer Index (PCI) >17
        - Completeness of cytoreduction (CC) score >1
- PS 3–4
    - Best supportive care is recommended
    - See Principles of Supportive Care and Survivorship (PEM-B)

# Treatment if medically operable and complete cytoreduction achievable, with preoperative low-risk features

- Cytoreductive surgery (CRS) + hyperthermic intraperitoneal (IP) chemotherapy (HIPEC)
    - See Principles of Surgery (PEM-C)
- Then classify by surgical/pathologic high-risk features
    - Absence of surgical/pathologic high-risk features
        - Imaging surveillance
    - Presence of ANY surgical/pathologic high-risk features
        - Adjuvant systemic therapy, see Principles of Systemic Therapy (PEM-D)
- On progression
    - Systemic therapy, see Principles of Systemic Therapy (PEM-D)
    - See Principles of Supportive Care and Survivorship (PEM-B)
    - Repeat CRS + HIPEC can be considered if >12 months from prior CRS and otherwise considered to have operable disease

# Treatment if medically inoperable, complete cytoreduction not achievable, or ANY high-risk feature present

- Systemic therapy
    - See Principles of Systemic Therapy (PEM-D)
- Then reassess
    - Medically operable and complete cytoreduction achievable
        - Consider CRS + HIPEC, see Principles of Surgery (PEM-C)
    - Medically inoperable or complete cytoreduction not achievable
        - Imaging surveillance
- On progression
    - Systemic therapy, see Principles of Systemic Therapy (PEM-D)
    - See Principles of Supportive Care and Survivorship (PEM-B)

# Imaging surveillance

- CT chest
- CT or MRI of abdomen/pelvis with contrast
- Every 3–6 months x 5 years, then yearly

# Next

- Low-risk, operable, complete cytoreduction achievable, go to CRS + HIPEC (PEM-C)
- Inoperable, cytoreduction not achievable, or ANY high-risk feature, go to systemic therapy (PEM-D)
- PS 3–4, go to best supportive care (PEM-B)
