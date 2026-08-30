+++
id           = "ped_sts/CAT-1"
gid          = "ped_sts"
ref          = "CAT-1"
page         = 50
title        = "Definitions of the NCCN categories of evidence and consensus and the categories of preference"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"

[facets]
disease = "ped_sts"

[[variables]]
name = "recommendation"
type = "text"
[[variables]]
name = "evidence_category"
type = "enum"
options = ["1", "2A", "2B", "3"]
[[variables]]
name = "preference_category"
type = "enum"
options = ["preferred", "other recommended", "useful in certain circumstances", "not stated"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, CAT-1, p50
- Definitions page, applies to every recommendation in this guideline
- All recommendations are category 2A unless otherwise indicated
- All recommendations are considered appropriate

# Assessment

- Recommendation being checked: ___ (recommendation)
- Category of evidence and consensus printed on its page: ___ (evidence_category)
- Category of preference printed on its page: ___ (preference_category)
- If no category is printed, read it as category 2A

# Categories of evidence and consensus

- Category 1
    - Based upon high-level evidence
        - At least 1 randomized phase 3 trials, or
        - High-quality, robust meta-analyses
    - Uniform NCCN consensus, meaning ≥85% support of the Panel
    - The intervention is appropriate
- Category 2A
    - Based upon lower-level evidence
    - Uniform NCCN consensus, meaning ≥85% support of the Panel
    - The intervention is appropriate
- Category 2B
    - Based upon lower-level evidence
    - NCCN consensus of ≥50%, but <85% support of the Panel
    - The intervention is appropriate
- Category 3
    - Based upon any level of evidence
    - Major NCCN disagreement that the intervention is appropriate

# Categories of preference

- Preferred
    - Interventions that are based on superior efficacy, safety, and evidence
    - And, when appropriate, affordability
- Other recommended
    - Other interventions that may be somewhat less efficacious, more toxic, or based on less mature data
    - Or significantly less affordable for similar outcomes
- Useful in certain circumstances
    - Other interventions that may be used for selected patient populations
    - The population is defined with the recommendation
