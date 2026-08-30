+++
id           = "ped_sts/PRMS-5"
gid          = "ped_sts"
ref          = "PRMS-5"
page         = 8
title        = "Soft tissue mass of the trunk: primary surgery, margin status, and what follows"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-4", "PRMS-6", "PRMS-10", "PRMS-D", "PRMS-E", "PRMS-F"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "margin"
type = "enum"
options = ["negative", "positive", "unknown"]
[[variables]]
name = "foxo1"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "nodes"
type = "enum"
options = ["none-concerning", "suspicious"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-5, p8
- Applies to a soft tissue mass of the trunk
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Soft tissue mass of the trunk, site ___ (site)
- RMS confirmed
- Margin status ___ (margin)
- FOXO1 gene fusion ___ (foxo1)
- Lymph nodes on clinical assessment or imaging ___ (nodes)

# Initial surgical decision

- Amenable to R0, non-radical excision without impact to form or function (PRMS-D)
    - Initial primary resection is performed if there is a realistic expectation of achieving negative margins (R0 resection)
    - and if cosmetic and functional outcomes are acceptable
    - Excision confirms RMS
        - Principles of Pathologic Assessment
- Complete excision not possible without impact on form, function, or morbidity
    - Biopsy confirms RMS
        - Principles of Pathologic Assessment
        - Adequate biopsy is required
        - Biopsy should provide sufficient tissue to establish the diagnosis
        - Biopsy should provide sufficient tissue for further molecular genetic analysis

# Excision, negative margins

- Clinical Group I
- FOXO1 gene fusion-positive
    - Systemic therapy (as indicated for risk group) (PRMS-10)
    - and RT (PRMS-F)
- FOXO1 gene fusion-negative
    - Systemic therapy (as indicated for risk group) (PRMS-10)

# Excision, positive or unknown margins

- Primary re-excision if R0 resection can be accomplished without significant morbidity (PRMS-D)
    - If there is suspicion or knowledge of residual tumor after the initial resection, primary re-excision should be employed
    - unless this would result in loss of form or function
- Negative margins after re-excision
    - Clinical Group I
    - FOXO1 gene fusion-positive
        - Systemic therapy (as indicated for risk group) (PRMS-10)
        - and RT (PRMS-F)
    - FOXO1 gene fusion-negative
        - Systemic therapy (as indicated for risk group) (PRMS-10)
- Clinical Group II (R1) or III (R2) if margins cannot be cleared surgically
    - Systemic therapy (as indicated for risk group) (PRMS-10)
    - and RT (PRMS-F)

# Complete excision not possible, lymph node assessment

- No concerning lymph nodes on clinical assessment or imaging
- Suspicious lymph nodes on clinical assessment or imaging
    - Biopsy of concerning nodes for pathologic confirmation (if feasible) (PRMS-E)
        - Principles of Pathologic Assessment

# Next

- Systemic therapy as indicated for risk group, go to PRMS-10
- RT, see PRMS-F
- After biopsy only, complete excision not possible
    - Systemic therapy (as indicated for risk group) (PRMS-10)
    - and RT (PRMS-F)
    - and Evaluate for DPE (PRMS-D)
