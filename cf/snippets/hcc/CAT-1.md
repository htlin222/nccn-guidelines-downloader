+++
id           = "hcc/CAT-1"
gid          = "hcc"
ref          = "CAT-1"
page         = 33
title        = "How to read the NCCN category of evidence and consensus, and the category of preference, marked on any recommendation in this guideline"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-28"
see_also     = ["HCC-1", "HCC-2"]

[facets]
disease = "hcc"

[[variables]]
name = "recommendation"
type = "text"
[[variables]]
name = "category_marked"
type = "enum"
options = ["1", "2A", "2B", "3", "none stated"]
[[variables]]
name = "preference_marked"
type = "enum"
options = ["preferred", "other recommended", "useful in certain circumstances", "none stated"]
+++

# Source

- NCCN Hepatocellular Carcinoma v1.2026, CAT-1, p33
- Applies to every recommendation in this guideline, as the key to its two labels
- All recommendations are category 2A unless otherwise indicated
- All recommendations are considered appropriate

# Assessment

- Recommendation being applied ___ (recommendation)
- Category of evidence and consensus marked on it ___ (category_marked)
    - If none is stated, it is category 2A
- Category of preference marked on it ___ (preference_marked)

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

# NCCN categories of preference

- Preferred
    - Interventions that are based on superior efficacy, safety, and evidence
    - And, when appropriate, affordability
- Other recommended
    - Other interventions that may be somewhat less efficacious, more toxic, or based on less mature data
    - Or significantly less affordable for similar outcomes
- Useful in certain circumstances
    - Other interventions that may be used for selected patient populations
    - The population is defined with the recommendation
