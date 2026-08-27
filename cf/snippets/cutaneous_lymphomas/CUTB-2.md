+++
id           = "cutaneous_lymphomas/CUTB-2"
gid          = "cutaneous_lymphomas"
ref          = "CUTB-2"
page         = 11
title        = "Stage-based initial therapy and response for primary cutaneous marginal zone or follicle center lymphoma"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["CUTB-1", "CUTB-3", "CUTB-A", "CUTB-B", "PCLYM-A"]

[facets]
disease   = "cutaneous_lymphomas"
histology = ["marginal-zone", "follicular"]
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subtype"
type = "enum"
options = ["PCMZL", "PCFCL"]
[[variables]]
name = "t_stage"
type = "text"
[[variables]]
name = "lesion_sites"
type = "text"
[[variables]]
name = "extracutaneous"
type = "text"
[[variables]]
name = "disease_status"
type = "text"
+++

# Source

- NCCN Primary Cutaneous B-Cell Lymphomas v2.2026, CUTB-2, p11
- Applies to primary cutaneous marginal zone lymphoma (PCMZL) or follicle center lymphoma (PCFCL)
- Stage by TNM Classification of Cutaneous Lymphoma Other Than MF/SS (CUTB-A)
- Treatment references (CUTB-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Subtype ___ (subtype)
- Stage ___ (t_stage)
- Lesion distribution ___ (lesion_sites)
- Extracutaneous disease ___ (extracutaneous)
- Disease status at this visit ___ (disease_status)

# Initial therapy, solitary or regional disease, T1-2

- Local ISRT (preferred)
    - Preferred initial treatment, but not necessarily the preferred treatment for relapse
    - See Principles of Radiation Therapy (PCLYM-A)
- In selected cases, instead of local ISRT
    - Observation, when ISRT or surgical treatment is neither feasible nor desired
    - Excision
        - Small lesions may be excised with minimal non-disfiguring surgery
    - Skin-directed therapies
        - There are case reports showing efficacy
        - Topical steroids
        - Imiquimod
        - Nitrogen mustard
        - Bexarotene, useful in pediatric patients
    - Intralesional steroids

# Response and additional therapy, solitary or regional disease, T1-2

- Response, observe
- Refractory disease, treat as generalized disease (skin only), T3 (CUTB-3)
- Relapsed or progressive disease, treat as generalized disease (skin only), T3 (CUTB-3)
- Imaging when assessing any of these states
    - Additional imaging studies during the course of treatment are not needed
    - FDG-PET/CT or C/A/P CT with contrast at the end of treatment may be needed to assess response, or if there is clinical suspicion of progressive disease

# Next

- Generalized disease (skin only), T3, go to CUTB-3
- Extracutaneous disease
    - PCFCL, manage as Follicular Lymphoma in the NCCN Guidelines for B-Cell Lymphomas (FOLL-4)
    - PCMZL, manage as Nodal Marginal Zone Lymphoma in the NCCN Guidelines for B-Cell Lymphomas (NMZL-2)
