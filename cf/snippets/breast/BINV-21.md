+++
id           = "breast/BINV-21"
gid          = "breast"
ref          = "BINV-21"
page         = 34
title        = "Branch point for systemic treatment of recurrent unresectable or stage IV disease"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-J", "BINV-22", "BINV-24", "BINV-26", "BINV-27"]

[facets]
disease   = "breast"
stage     = ["IV", "recurrent"]
biomarker = ["hr-positive", "hr-negative", "her2-positive", "her2-negative"]
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["recurrent unresectable local", "recurrent unresectable regional", "de novo stage IV", "recurrent stage IV"]
[[variables]]
name = "er"
type = "text"
[[variables]]
name = "pr"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "bone_disease"
type = "enum"
options = ["present", "not present"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-21, p34
- Applies to recurrent unresectable (local or regional) or stage IV (M1) disease
- Principles of Biomarker Testing: BINV-A
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth): BINV-J
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- ___ (presentation)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- Sites of metastases ___ (met_sites)
- Bone disease ___ (bone_disease)

# If bone disease present

- Add denosumab, zoledronic acid, or pamidronate, in addition to systemic therapy or endocrine therapy (category 1)
    - Give all with calcium and vitamin D supplementation
    - Only if bone metastasis is present
    - Only if expected survival is 3 months or longer
    - Only if renal function is adequate
    - Dental examination with preventive dentistry before initiating this therapy
    - Optimal schedule for zoledronic acid is every 12 weeks
- If bone disease is not present, go straight to the biomarker branch below

# ER interpretation before assigning the branch

- Cancers with 1%-100% ER IHC staining are considered ER-positive and eligible for endocrine therapies
- ER-low-positive (1%-10%) results have more limited data
    - The group is heterogeneous, reported biologic behavior often similar to ER-negative cancers
    - Individualize consideration of risks versus benefits of endocrine therapy and additional adjuvant therapies
- Principles of Biomarker Testing (BINV-A)

# If an aromatase inhibitor is planned on an ER- and/or PR-positive branch

- Baseline assessment of bone density is recommended if at risk of osteoporosis
    - Age over 65
    - Family history
    - Chronic steroids

# Oligometastatic disease

- Optimal management of oligometastatic stage IV breast cancer remains uncertain
- Routine locoregional treatment of the primary tumor and ablative treatment for metastatic sites have not been demonstrated to improve survival outcomes in prospective trials
    - May reduce the risk of local progression and palliate symptoms
- De novo oligometastatic cancer has better outcomes than recurrent oligometastatic disease
    - Individualize therapeutic decisions and discuss in a multidisciplinary context
    - A large number of case series document long-term DFS for de novo oligometastatic patients who received multimodality therapy leading to NED
- Consider an aggressive multimodality approach for de novo oligometastatic disease with favorable features
    - HER2-positive or ER-positive
    - Induced NED status after receipt of optimal multi-agent systemic regimens
    - Limited sites of metastases
    - Bone-only metastases
    - Young age / longevity
    - The approach is locoregional therapy of the primary tumor, ablative treatment to all sites of metastases, and adjuvant-like systemic therapy
    - May offer improved long-term PFS

# Next

- ER- and/or PR-positive; HER2-negative, go to BINV-22
- ER- and/or PR-positive; HER2-positive, go to BINV-24
- ER- and PR-negative; HER2-positive, go to BINV-26
- ER- and PR-negative; HER2-negative, go to BINV-27
