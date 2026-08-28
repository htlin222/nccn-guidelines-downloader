+++
id           = "vulvar/VULVA-9"
gid          = "vulvar"
ref          = "VULVA-9"
page         = 14
title        = "Therapy for recurrence clinically limited to the vulva"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-8", "VULVA-10", "VULVA-C", "VULVA-D", "VULVA-E"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
stage     = "recurrent"
timepoint = "recurrence"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "recurrence_extent"
type = "text"
[[variables]]
name = "previously_irradiated"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "ln_status"
type = "text"
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-9, p14
- Applies to recurrence clinically limited to the vulva, with nodes clinically negative
- The arm is chosen by whether the vulva has been previously irradiated
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Recurrence is vulva-confined, nodes clinically negative
- Extent of the vulvar recurrence ___ (recurrence_extent)
- Previously irradiated ___ (previously_irradiated)
- Resectability ___ (resectability)
    - Principles of Surgery (VULVA-C)
    - Consider pelvic exenteration for select cases
- Surgical margin status ___ (margin_status)
- LN status, surgical or clinical and radiographic ___ (ln_status)

# Vulva-confined recurrence, not previously irradiated (nodes clinically negative)

- Partial or total radical vulvectomy, ± unilateral or bilateral inguinofemoral lymphadenectomy
    - Principles of Surgery (VULVA-C)
    - Margins negative; LN(s) surgically, or clinically and radiographically, negative
        - Observe
        - or EBRT
            - Principles of Radiation Therapy (VULVA-D)
    - Margins positive; LN(s) surgically, or clinically and radiographically, negative
        - The management of positive margins for HSIL (noninvasive disease) should be individualized
        - Re-excision
            - Principles of Surgery (VULVA-C)
        - or EBRT ± brachytherapy ± concurrent chemotherapy (category 2B for concurrent chemotherapy)
            - Principles of Radiation Therapy (VULVA-D)
            - Systemic Therapy (VULVA-E)
    - Margins negative; LN(s) surgically positive
        - EBRT ± concurrent chemotherapy
            - Principles of Radiation Therapy (VULVA-D)
            - Systemic Therapy (VULVA-E)
    - Margins positive; LN(s) surgically positive
        - The management of positive margins for HSIL (noninvasive disease) should be individualized
        - EBRT ± brachytherapy ± concurrent chemotherapy ± re-excision
            - Principles of Radiation Therapy (VULVA-D)
            - Systemic Therapy (VULVA-E)
            - Principles of Surgery (VULVA-C)
- or EBRT ± brachytherapy + concurrent chemotherapy
    - Principles of Radiation Therapy (VULVA-D)
    - Systemic Therapy (VULVA-E)
    - Complete response
        - Go to surveillance (VULVA-8)
    - Gross residual vulvar tumor
        - Resection
            - Principles of Surgery (VULVA-C)
            - Consider pelvic exenteration for select cases

# Vulva-confined recurrence, previously irradiated (nodes clinically negative)

- Assess for resectability
    - Principles of Surgery (VULVA-C)
    - Consider pelvic exenteration for select cases
- Resectable
    - Resection
        - Principles of Surgery (VULVA-C)
- Unresectable
    - Systemic therapy
        - Systemic Therapy (VULVA-E)
    - or Best supportive care
        - NCCN Guidelines for Palliative Care

# Next

- After therapy for the vulva-confined recurrence, go to Surveillance (VULVA-8)
