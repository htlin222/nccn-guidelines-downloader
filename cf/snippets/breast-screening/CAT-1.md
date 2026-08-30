+++
id           = "breast-screening/CAT-1"
gid          = "breast-screening"
ref          = "CAT-1"
page         = 48
title        = "How to read the NCCN category of evidence and consensus marked on any recommendation in this guideline"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-1", "BSCR-2"]

[facets]
disease = "breast-screening"

[[variables]]
name = "recommendation"
type = "text"
[[variables]]
name = "category_marked"
type = "enum"
options = ["1", "2A", "2B", "3", "none stated"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, CAT-1, p48
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
