+++
id           = "growthfactors/CAT-1"
gid          = "growthfactors"
ref          = "CAT-1"
page         = 45
title        = "How to read the NCCN category of evidence and consensus, and the category of preference, attached to a recommendation"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"

[facets]
disease   = "growthfactors"

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

- NCCN Hematopoietic Growth Factors v3.2026, CAT-1, p45
- Applies to every recommendation in this guideline
- Defines what the category and preference labels on a recommendation mean
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Recommendation being applied ___ (recommendation)
- Category of evidence and consensus marked on it ___ (category_marked)
    - If none is stated, it is category 2A
- Category of preference marked on it ___ (preference_marked)

# NCCN categories of evidence and consensus

- Category 1
    - Based upon high-level evidence
        - 1 or more randomized phase 3 trials
        - or high-quality, robust meta-analyses
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
- All recommendations are considered appropriate
