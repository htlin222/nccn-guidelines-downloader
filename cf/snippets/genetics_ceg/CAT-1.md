+++
id           = "genetics_ceg/CAT-1"
gid          = "genetics_ceg"
ref          = "CAT-1"
page         = 140
title        = "How to read the NCCN category of evidence and consensus marked on any recommendation in this guideline"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HRS-1", "GENE-1"]

[facets]
disease = "genetics_ceg"

[[variables]]
name = "recommendation"
type = "text"
[[variables]]
name = "evidence_category"
type = "enum"
options = ["1", "2A", "2B", "3"]
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, CAT-1, p140
- Applies to every recommendation in this guideline, as the key to the category marked on it
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Recommendation being applied ___ (recommendation)
- Category of evidence and consensus marked on it ___ (evidence_category)
    - If no category is stated, it is category 2A

# NCCN categories of evidence and consensus

- Category 1
    - Based upon high-level evidence
        - 1 or more randomized phase 3 trials, or
        - High-quality, robust meta-analyses
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
