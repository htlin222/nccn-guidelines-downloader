+++
id           = "appendiceal/APP-3"
gid          = "appendiceal"
ref          = "APP-3"
page         = 7
title        = "Management of localized disease for LAMN/HAMN and for AA/GCA/UC-NOS"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-2", "APP-6", "APP-8"]

[facets]
disease   = "appendiceal"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pathology"
type = "enum"
options = ["LAMN", "HAMN", "AA", "GCA", "UC-NOS"]
[[variables]]
name = "prior_appendectomy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "margins"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "nodal_disease"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "perforation"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "nodes_examined"
type = "number"
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-3, p7
- Applies to localized disease, appendix only
- Management of localized disease requires multidisciplinary team evaluation, including formal surgical evaluation
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pathology ___ (pathology)
- Localized disease, appendix only
- Prior appendectomy ___ (prior_appendectomy)
- Margins ___ (margins)
- Nodal disease ___ (nodal_disease)
- Perforation noted at the time of surgery ___ (perforation)
- Lymph nodes examined ___ (nodes_examined)

# LAMN/HAMN, localized disease (appendix only)

- Appendectomy, if not previously done
- If negative for disease at margins
    - Go to surveillance (APP-6)
- If positive for disease at margins
    - Consider cecal cuff resection

# AA/GCA/UC-NOS, localized disease (appendix only)

- Right hemicolectomy
- Consider adjuvant therapy
    - Preferred: FOLFOX
    - Preferred: CAPEOX
    - Other options include: Capecitabine
    - Other options include: Fluorouracil/Leucovorin
    - Strongly consider adjuvant chemotherapy for patients with nodal disease
    - Strongly consider adjuvant chemotherapy for perforation noted at the time of surgery
    - May be considered in other instances depending on high-risk features, extrapolating from colon cancer
        - Poorly differentiated/undifferentiated histology
        - Lymphatic/vascular invasion
        - Bowel obstruction
        - <12 lymph nodes examined
        - Perineural invasion (PNI)
        - Localized perforation
        - Close, indeterminate, positive margins
        - High-tier tumor budding
    - Circulating tumor (ctDNA) is prognostic, but not predictive

# Next

- LAMN/HAMN, negative for disease at margins, go to surveillance (APP-6)
- LAMN/HAMN, positive for disease at margins, after considering cecal cuff resection, go to surveillance (APP-6)
- AA/GCA/UC-NOS, after right hemicolectomy and the adjuvant therapy decision, go to surveillance (APP-8)
