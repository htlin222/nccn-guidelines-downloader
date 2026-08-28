+++
id           = "vulvar/VULVA-5"
gid          = "vulvar"
ref          = "VULVA-5"
page         = 10
title        = "Primary treatment of locally advanced vulvar cancer and of unresectable nodes"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-1", "VULVA-A", "VULVA-B", "VULVA-C", "VULVA-D", "VULVA-E", "VULVA-6"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
stage     = "any"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "primary_resectability"
type = "enum"
options = ["resectable", "unresectable-without-removing-proximal-urethra-bladder-anus"]
[[variables]]
name = "radiographic_nodes"
type = "enum"
options = ["negative", "suspicious", "unresectable"]
[[variables]]
name = "lymphadenectomy"
type = "enum"
options = ["performed", "not-performed"]
[[variables]]
name = "pathologic_ln"
type = "enum"
options = ["positive", "negative", "not-assessed"]
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-5, p10
- Primary treatment for locally advanced disease, unresectable without removing proximal urethra / bladder / anus
- Also covers unresectable nodes regardless of clinical stage
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Clinical stage ___ (clinical_stage)
- Primary tumor ___ (primary_resectability)
    - Locally advanced means unresectable without removing proximal urethra / bladder / anus
- Nodes on radiologic imaging ___ (radiographic_nodes)
- Inguinofemoral lymphadenectomy ___ (lymphadenectomy)
- Pathologic LN status ___ (pathologic_ln)

# Workup for locally advanced disease

- Radiologic imaging workup
    - Principles of Imaging (VULVA-B)

# Radiographically negative nodes

- Inguinofemoral lymphadenectomy
    - Principles of Surgery (VULVA-C)
    - Positive LNs
        - EBRT to primary tumor / inguinofemoral LNs / pelvic nodes
            - Principles of Radiation Therapy (VULVA-D)
        - Concurrent chemotherapy
            - Systemic Therapy (VULVA-E)
    - Negative LNs
        - EBRT to primary tumor
            - Principles of Radiation Therapy (VULVA-D)
            - With or without selective inguinofemoral LN coverage
            - With or without selective pelvic LN coverage
        - Concurrent chemotherapy
            - Systemic Therapy (VULVA-E)
- Inguinofemoral lymphadenectomy not performed
    - EBRT to primary tumor / inguinofemoral LNs / pelvic nodes
        - Principles of Radiation Therapy (VULVA-D)
    - Concurrent chemotherapy
        - Systemic Therapy (VULVA-E)

# Radiographically suspicious nodes

- Includes pelvic-confined M1 LN disease
- EBRT to primary tumor / inguinofemoral LNs / pelvic nodes
    - Principles of Radiation Therapy (VULVA-D)
- Concurrent chemotherapy
    - Systemic Therapy (VULVA-E)

# Unresectable nodes regardless of stage

- Radiologic imaging to assess extent of disease
    - Principles of Imaging (VULVA-B)
- Consider fine-needle aspiration (FNA) for enlarged LN
    - Principles of Pathology (VULVA-A)
- EBRT to primary tumor / inguinofemoral LNs / pelvic nodes
    - Principles of Radiation Therapy (VULVA-D)
- Concurrent chemotherapy
    - Systemic Therapy (VULVA-E)

# Next

- After primary treatment, go to Additional Treatment (VULVA-6)
