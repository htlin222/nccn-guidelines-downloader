+++
id           = "vulvar/VULVA-4"
gid          = "vulvar"
ref          = "VULVA-4"
page         = 9
title        = "Adjuvant therapy to the nodes based on nodal evaluation"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-A", "VULVA-C", "VULVA-D", "VULVA-E", "VULVA-3", "VULVA-8"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
timepoint = "adjuvant"

[[variables]]
name = "nodal_evaluation"
type = "enum"
options = ["sentinel-lymph-node-biopsy", "inguinofemoral-lymphadenectomy"]
[[variables]]
name = "nodal_result"
type = "text"
[[variables]]
name = "positive_ln_count"
type = "number"
[[variables]]
name = "largest_metastasis_size"
type = "text"
[[variables]]
name = "ene"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "contralateral_groin_exam"
type = "text"
[[variables]]
name = "lymphadenectomy_suitability"
type = "enum"
options = ["suitable", "not-suitable"]
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-4, p9
- Applies after nodal evaluation, deciding adjuvant therapy to the nodes
- Nodal evaluation is either sentinel lymph node(s) [SLN(s)] or inguinofemoral nodes
- All recommendations category 2A unless otherwise indicated

# Assessment

- Nodal evaluation performed ___ (nodal_evaluation)
    - Principles of Surgery: Inguinofemoral Sentinel Lymph Node Biopsy (VULVA-C 4 of 6)
- Nodal result ___ (nodal_result)
- Number of positive LNs ___ (positive_ln_count)
- Size of the largest nodal metastasis ___ (largest_metastasis_size)
    - The size of 2 mm is used to inform treatment selection / management
    - The 5-mm cutoff is used for staging
    - See Principles of Pathology (VULVA-A)
- Extranodal extension (ENE) ___ (ene)
- Side of positive groin ___ (side)
- Contralateral groin examination ___ (contralateral_groin_exam)
- Suitability for complete inguinofemoral lymphadenectomy ___ (lymphadenectomy_suitability)

# LNs negative, sentinel node(s) or inguinofemoral nodes

- Observe

# SLN(s) positive

- If the ipsilateral groin is positive, evaluate the contralateral groin
    - A contralateral inguinofemoral lymphadenectomy or radiation may be omitted in select cases of a single, small-volume, unilateral, positive inguinal node with a well-lateralized small primary tumor and depth of invasion 5 mm or less and with a clinically negative contralateral groin examination
- Single positive SLN, 2 mm or less metastasis
    - EBRT
    - With or without concurrent chemotherapy, Systemic Therapy (VULVA-E)
- Positive SLN, more than 2 mm metastasis, one of
    - Complete inguinofemoral lymphadenectomy (preferred)
        - Then EBRT, Principles of Radiation Therapy (VULVA-D)
            - Category 1 for radiation if 2 or more LNs positive, or ENE
        - With or without concurrent chemotherapy, Systemic Therapy (VULVA-E)
    - EBRT, Principles of Radiation Therapy (VULVA-D)
        - Selected only if the patient is not suitable for complete inguinofemoral lymphadenectomy
        - With or without concurrent chemotherapy, Systemic Therapy (VULVA-E)

# Inguinofemoral lymphadenectomy with positive LN(s)

- EBRT, Principles of Radiation Therapy (VULVA-D)
    - Category 1 for radiation if 2 or more LNs positive, or ENE
- With or without concurrent chemotherapy, Systemic Therapy (VULVA-E)

# Next

- Surveillance (VULVA-8)
