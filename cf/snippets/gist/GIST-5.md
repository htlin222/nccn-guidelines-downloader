+++
id           = "gist/GIST-5"
gid          = "gist"
ref          = "GIST-5"
page         = 10
title        = "Treatment for progressive disease on TKI therapy"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-4", "GIST-C", "GIST-D", "GIST-E"]

[facets]
disease   = "gist"
histology = "gist"
biomarker = "kit"
timepoint = "metastatic"
intent    = "palliative"

[[variables]]
name = "current_tki"
type = "enum"
options = ["imatinib", "avapritinib", "other"]
[[variables]]
name = "prior_standard_dose_imatinib"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "progression_extent"
type = "enum"
options = ["limited", "generalized"]
[[variables]]
name = "progression_sites"
type = "text"
[[variables]]
name = "mutation"
type = "text"
[[variables]]
name = "symptomatic_lesions"
type = "text"
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, GIST-5, p10
- Applies to disease progressing on TKI therapy
- All recommendations category 2A unless stated otherwise

# Assessment

- Current TKI ___ (current_tki)
- Previously treated with standard-dose imatinib ___ (prior_standard_dose_imatinib)
- Extent of progression ___ (progression_extent)
- Sites of progressing lesions ___ (progression_sites)
- Mutation ___ (mutation)
- Symptomatic lesions ___ (symptomatic_lesions)

# Limited progression

- Continue with the same dose of TKI, and consider the options below for lesions progressing on imatinib or avapritinib
    - Clinical experience suggests that discontinuing TKI therapy, even in the setting of progressive disease, may accelerate the pace of disease progression and worsen symptoms
- Resection, if feasible
    - General Principles of Surgery (GIST-C)
    - Consider resection or ablation/liver-directed therapy for hepatic metastatic disease
    - Resection of metastatic disease, especially if complete resection can be achieved, may be beneficial in patients on imatinib or sunitinib who have evidence of radiographic response, or limited disease progression
- Ablation or embolization, radioembolization, or chemoembolization (GIST-D)
- Palliative radiation therapy (RT) (category 2B) for symptomatic lesions

# Limited progression, if previously treated with standard-dose imatinib

- Switch to alternate TKI (GIST-E)
- Dose escalation of imatinib as tolerated
    - Only if previously treated with standard-dose imatinib
    - May be most effective for patients with KIT exon 9 mutation
- Palliative radiotherapy if surgical resection of progressive disease and/or ablation is not possible

# Limited progression, if previously treated with avapritinib

- Consider a switch to an alternate TKI (GIST-E)

# Generalized (widespread, systemic) progression

- If disease is progressing despite prior therapies, consider one of the following
    - Clinical trial
    - Other options listed in GIST-E, based on limited data
    - Repeat tumor biopsy to potentially identify uncommon mutations that may have a corresponding targeted therapy
    - Best supportive care
        - Reintroduction of imatinib can be considered for palliation of symptoms
        - Consider continuation of imatinib for palliation of symptoms as part of best supportive care
- If disease progression on imatinib or avapritinib, either
    - Switch to alternate TKI (GIST-E)
    - Dose escalation of imatinib as tolerated
        - Only if previously treated with standard-dose imatinib
        - May be most effective for patients with KIT exon 9 mutation
