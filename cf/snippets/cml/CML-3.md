+++
id           = "cml/CML-3"
gid          = "cml"
ref          = "CML-3"
page         = 10
title        = "Early treatment response milestones by BCR::ABL1 (IS), and what each color concern means"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-3A", "CML-5", "CML-G"]

[facets]
disease   = "cml"
biomarker = "bcr-abl"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "current_tki"
type = "text"
[[variables]]
name = "milestone"
type = "enum"
options = ["3 months", "6 months", "12 months"]
[[variables]]
name = "bcr_abl_is"
type = "number"
[[variables]]
name = "color_concern"
type = "enum"
options = ["red", "yellow", "orange", "light green", "green"]
[[variables]]
name = "treatment_goal"
type = "enum"
options = ["long-term survival", "treatment-free remission"]
[[variables]]
name = "adherence"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-3, p10
- Applies to a patient on TKI therapy reaching a 3-, 6-, or 12-month response milestone
- BCR::ABL1 reported on the International Scale (IS)
- Footnotes for this page are on CML-3A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Current TKI: ___ (current_tki)
- Milestone being assessed: ___ (milestone)
- BCR::ABL1 (IS): ___ (bcr_abl_is) %
- Color concern read off the milestone table: ___ (color_concern)
- Treatment goal: ___ (treatment_goal)
- Adherence and drug interactions reviewed: ___ (adherence)

# Early treatment response milestones

- BCR::ABL1 (IS) >10%
    - 3 months: YELLOW
    - 6 months: RED
    - 12 months: RED
- BCR::ABL1 (IS) >1%-10%
    - 3 months: GREEN
    - 6 months: ORANGE
    - 12 months: ORANGE
- BCR::ABL1 (IS) >0.1%-1%
    - 3 months: GREEN
    - 6 months: GREEN
    - 12 months: LIGHT GREEN
- BCR::ABL1 (IS) ≤0.1%
    - 3 months: GREEN
    - 6 months: GREEN
    - 12 months: GREEN

# RED, TKI-resistant disease

- Clinical considerations
    - Evaluate patient adherence and drug interactions
    - Consider BCR::ABL1 kinase domain mutational analysis
    - Consider bone marrow cytogenetic analysis to assess additional chromosomal abnormalities (ACAs)
- Recommendation
    - Switch to alternate TKI (CML-5), other than imatinib, and evaluate for allogeneic HCT

# YELLOW, possible TKI resistance

- Clinical considerations
    - Evaluate patient adherence and drug interactions
    - Consider BCR::ABL1 kinase domain mutational analysis
- Recommendation
    - Switch to alternate TKI (CML-5), or continue same TKI

# ORANGE, possible TKI resistance

- Clinical considerations
    - Evaluate patient adherence and drug interactions
    - Consider BCR::ABL1 kinase domain mutational analysis
    - Consider bone marrow cytogenetic analysis to assess for complete cytogenetic response (CCyR) at 12 months
- Recommendation
    - Consider switch to alternate TKI (CML-5), or continue the same TKI if CCyR is achieved

# LIGHT GREEN, TKI-sensitive disease

- Clinical considerations
    - Evaluate patient adherence and drug interactions
    - If the treatment goal is long-term survival, BCR::ABL1 (IS) ≤1% is optimal
    - If the treatment goal is treatment-free remission, BCR::ABL1 (IS) ≤0.1% is optimal
- Recommendation
    - If optimal, continue same TKI
    - If not optimal, shared decision-making with patient

# GREEN, TKI-sensitive disease

- Clinical considerations
    - Evaluate patient adherence and drug interactions
- Recommendation
    - Continue same TKI
    - Monitor response (CML-G)

# Next

- Switching to an alternate TKI, go to CML-5
- Continuing the same TKI, monitor response per CML-G
- TKI-resistant disease, also evaluate for allogeneic HCT
