+++
id           = "vulvar/VULVA-10"
gid          = "vulvar"
ref          = "VULVA-10"
page         = 15
title        = "Therapy for confirmed nodal or distant recurrence"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-8", "VULVA-9", "VULVA-C", "VULVA-D", "VULVA-E"]

[facets]
disease   = "vulvar"
histology = ["squamous", "adenocarcinoma"]
stage     = "recurrent"
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "prior_ebrt"
type = "enum"
options = ["none", "prior EBRT", "prior pelvic EBRT"]
[[variables]]
name = "enlarged_nodes"
type = "text"
[[variables]]
name = "lesion_count"
type = "number"
[[variables]]
name = "primary_controlled"
type = "enum"
options = ["yes", "no", "unknown"]
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-10, p15
- Applies to confirmed nodal or distant recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Recurrence confirmed as nodal or distant
- Site of recurrence ___ (recurrence_site)
    - Isolated inguinofemoral/pelvic LN recurrence
    - Distant metastasis
- Prior radiation ___ (prior_ebrt)
- Clinically enlarged and suspicious LN(s) ___ (enlarged_nodes)
- Number of metastatic lesions ___ (lesion_count)
- Primary has been controlled ___ (primary_controlled)

# Isolated inguinofemoral/pelvic LN recurrence, no prior EBRT

- Consider resection of clinically enlarged and suspicious LN(s)
    - Principles of Surgery (VULVA-C)
- EBRT
    - Principles of Radiation Therapy (VULVA-D)
- Concurrent chemotherapy, given with the EBRT
    - Systemic Therapy (VULVA-E)

# Distant metastasis, or prior pelvic EBRT

- Isolated inguinofemoral/pelvic LN recurrence with prior EBRT is managed on this arm
- Systemic therapy
    - Systemic Therapy (VULVA-E)
- and/or Selective EBRT if feasible
    - Principles of Radiation Therapy (VULVA-D)
- or Best supportive care
    - NCCN Guidelines for Palliative Care
- For distant metastasis, can consider ablative therapy for 1–5 metastatic lesions if the primary has been controlled

# Next

- After therapy for recurrence, go to Surveillance (VULVA-8)
