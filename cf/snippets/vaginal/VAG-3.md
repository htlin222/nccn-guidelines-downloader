+++
id           = "vaginal/VAG-3"
gid          = "vaginal"
ref          = "VAG-3"
page         = 9
title        = "Adjuvant therapy to the primary site, chosen by postoperative risk factors"
nccn_version = "2.2026"
nccn_date    = "12/04/25"
generated    = "2026-08-28"
see_also     = ["VAG-4", "VAG-C", "VAG-D", "VAG-E"]

[facets]
disease   = "vaginal"
timepoint = "adjuvant"

[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "close", "positive"]
[[variables]]
name = "margin_pathology"
type = "enum"
options = ["invasive", "hsil", "not applicable"]
[[variables]]
name = "nodes_removed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "node_status"
type = "enum"
options = ["negative", "positive", "not removed"]
+++

# Source

- NCCN Vaginal Cancer v2.2026, VAG-3, p9
- Postoperative risk factors, and the adjuvant therapy to the primary site they select
- Principles of Radiation Therapy: VAG-C
- Principles of Systemic Therapy: VAG-D
- Principles of Surgery: VAG-E
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Margin status: ___ (margin_status)
- Margin involved by: ___ (margin_pathology)
- Lymph nodes removed: ___ (nodes_removed)
- Lymph node status: ___ (node_status)

# Adjuvant therapy to the primary site

- Negative margins and negative lymph nodes if removed
    - Observe
- Close or positive margin(s) for invasive disease, or positive lymph nodes
    - The management of positive margins for high-grade squamous intraepithelial lesion (HSIL) should be individualized
    - Adjuvant RT (VAG-C)
    - Or chemoradiation (VAG-C, VAG-D)
        - Chemoradiation may not be suitable for all patients
        - Use with caution in patients who are older, frail, and/or have multiple comorbidities
    - And/or brachytherapy (VAG-C)
        - In select patients, re-excision may be considered (VAG-E)

# Next

- Negative margins and negative lymph nodes if removed: observe, go to Follow-up/Surveillance (VAG-4)
