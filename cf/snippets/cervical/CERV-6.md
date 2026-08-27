+++
id           = "cervical/CERV-6"
gid          = "cervical"
ref          = "CERV-6"
page         = 17
title        = "Adjuvant treatment selected by the surgical findings"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-B", "CERV-D", "CERV-E", "CERV-F", "CERV-10"]

[facets]
disease   = "cervical"
timepoint = ["adjuvant", "staging"]
intent    = "curative"

[[variables]]
name = "pelvic_nodes"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "margin"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "parametrium"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "para_aortic"
type = "enum"
options = ["not surgically staged", "negative", "positive"]
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "stromal_invasion"
type = "text"
[[variables]]
name = "lvsi"
type = "enum"
options = ["absent", "present"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-6, p17
- Applies to surgical findings after surgery, and the adjuvant treatment they select
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Pelvic nodes ___ (pelvic_nodes)
- Surgical margin ___ (margin)
- Parametrium ___ (parametrium)
- Para-aortic lymph node by surgical staging ___ (para_aortic)
- Risk factors, for the negative nodes / negative margins / negative parametrium arm
    - Primary tumor size ___ (tumor_size)
    - Stromal invasion ___ (stromal_invasion)
    - LVSI ___ (lvsi)
    - Assessed against the GOG/Sedlis criteria (CERV-E)
    - Risk factors may not be limited to the GOG/Sedlis criteria

# Negative nodes, negative margins, negative parametrium

- Observe
- Or pelvic EBRT (CERV-D), if a combination of risk factors that meet the GOG/Sedlis criteria (category 1)
    - Combination is of primary tumor size, stromal invasion, and/or LVSI
    - GOG/Sedlis Criteria (CERV-E)
    - Risk factors may not be limited to the GOG/Sedlis criteria

# Positive pelvic nodes and/or positive surgical margin and/or positive parametrium

- Imaging workup for metastatic disease
    - Principles of Imaging (CERV-B)
- Negative for distant metastases
    - EBRT (CERV-D) + concurrent platinum-containing chemotherapy (category 1)
        - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin as a single agent
        - Or carboplatin if cisplatin intolerant
        - Systemic Therapy for Cervical Cancer (CERV-F)
    - ± brachytherapy (CERV-D)
- Positive for distant metastases
    - Biopsy suspicious areas as indicated
    - Biopsy negative
        - EBRT (CERV-D) + concurrent platinum-containing chemotherapy (category 1) ± brachytherapy (CERV-D)
    - Biopsy positive
        - Systemic therapy (CERV-F) ± individualized EBRT (CERV-D)

# Para-aortic lymph node positive by surgical staging

- Imaging workup for metastatic disease
    - Principles of Imaging (CERV-B)
- Negative for distant metastases
    - Extended-field EBRT (CERV-D) + concurrent platinum-containing chemotherapy (category 1)
        - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin as a single agent
        - Or carboplatin if cisplatin intolerant
        - Systemic Therapy for Cervical Cancer (CERV-F)
    - ± brachytherapy (CERV-D)
- Positive for distant metastases
    - Biopsy suspicious areas as indicated
    - Biopsy negative
        - Extended-field EBRT (CERV-D) + concurrent platinum-containing chemotherapy (category 1) ± brachytherapy (CERV-D)
    - Biopsy positive
        - Systemic therapy (CERV-F) ± individualized EBRT (CERV-D)

# Next

- Observation, go to surveillance (CERV-10)
- After EBRT ± concurrent chemotherapy ± brachytherapy, go to surveillance (CERV-10)
- After extended-field EBRT + concurrent chemotherapy ± brachytherapy, go to surveillance (CERV-10)
- Biopsy-proven distant metastases, systemic therapy (CERV-F) ± individualized EBRT (CERV-D)
