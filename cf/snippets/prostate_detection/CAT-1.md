+++
id           = "prostate_detection/CAT-1"
gid          = "prostate_detection"
ref          = "CAT-1"
page         = 14
title        = "How to read the NCCN category of evidence and consensus marked on any recommendation in this guideline"
nccn_version = "2.2026"
nccn_date    = "02/18/26"
generated    = "2026-08-30"
see_also     = ["PROSD-1", "PROSD-2"]

[facets]
disease = "prostate_detection"

[[variables]]
name = "recommendation"
type = "text"
[[variables]]
name = "category_marked"
type = "enum"
options = ["1", "2A", "2B", "3", "none stated"]
+++

# Source

- NCCN Prostate Cancer Early Detection v2.2026, CAT-1, p14
- Applies to every recommendation in this guideline, as the key to the category label carried by each one
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Recommendation being applied ___ (recommendation)
- Category of evidence and consensus marked on it ___ (category_marked)
    - If none is stated, it is category 2A

# NCCN categories of evidence and consensus

- Category 1
    - Based upon high-level evidence
        - 1 or more randomized phase 3 trials
        - Or high-quality, robust meta-analyses
    - There is uniform NCCN consensus
        - 85% or more support of the Panel
    - That the intervention is appropriate
- Category 2A
    - Based upon lower-level evidence
    - There is uniform NCCN consensus
        - 85% or more support of the Panel
    - That the intervention is appropriate
- Category 2B
    - Based upon lower-level evidence
    - There is NCCN consensus
        - 50% or more, but less than 85% support of the Panel
    - That the intervention is appropriate
- Category 3
    - Based upon any level of evidence
    - There is major NCCN disagreement that the intervention is appropriate
