+++
id           = "vulvar/VULVA-6"
gid          = "vulvar"
ref          = "VULVA-6"
page         = 11
title        = "Evaluation of response to EBRT plus concurrent chemotherapy, and the additional treatment it selects"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-5", "VULVA-8", "VULVA-B", "VULVA-C", "VULVA-D", "VULVA-E"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
timepoint = ["primary-treatment", "surveillance"]
intent    = ["curative", "palliative"]

[[variables]]
name = "months_since_treatment"
type = "number"
[[variables]]
name = "primary_site_status"
type = "text"
[[variables]]
name = "node_status"
type = "text"
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["negative", "positive", "not done"]
[[variables]]
name = "operability"
type = "enum"
options = ["operable", "unresectable", "not assessed"]
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive for invasive disease", "not applicable"]
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-6, p11
- Applies to patients who have completed EBRT + concurrent chemotherapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- EBRT + concurrent chemotherapy completed ___ (months_since_treatment) months ago
- Primary site on clinical examination ___ (primary_site_status)
- Nodes on clinical examination ___ (node_status)
- Biopsy ___ (biopsy_result)
- Deemed operable ___ (operability)
- Margins ___ (margin_status)

# Evaluation of response to EBRT + concurrent chemotherapy

- Clinically negative for residual tumor at primary site and nodes
- Clinically suspicious for residual tumor at primary site and/or nodes
    - Only at least 3 months after completion of treatment
    - Consider biopsy
        - Principles of Imaging (VULVA-B)
    - Biopsy negative
    - Biopsy positive

# Additional treatment if biopsy positive

- Resect if deemed operable
    - Principles of Surgery (VULVA-C)
    - Negative margins
    - Positive margins for invasive disease
        - Consider additional surgery
            - Principles of Surgery (VULVA-C)
            - Consider pelvic exenteration for select cases
        - and/or additional EBRT
            - Principles of Radiation Therapy (VULVA-D)
        - and/or Systemic therapy
            - Systemic Therapy (VULVA-E)
        - or Best supportive care
            - NCCN Guidelines for Palliative Care
- Unresectable
    - Consider additional EBRT
        - Principles of Radiation Therapy (VULVA-D)
    - and/or Systemic therapy
        - Systemic Therapy (VULVA-E)
    - or Best supportive care
        - NCCN Guidelines for Palliative Care

# Next

- Clinically negative for residual tumor at primary site and nodes, go to Surveillance (VULVA-8)
- Biopsy negative, go to Surveillance (VULVA-8)
- Resected with negative margins, go to Surveillance (VULVA-8)
