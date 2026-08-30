+++
id           = "ped_sts/PRMS-5"
gid          = "ped_sts"
ref          = "PRMS-5"
page         = 8
title        = "Soft tissue mass of the trunk confirmed as RMS: surgery, margin status, nodal assessment, and the clinical group they assign"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

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
name = "diagnosis_method"
type = "enum"
options = ["excision", "biopsy"]
[[variables]]
name = "margin_status"
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
[[variables]]
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-5, p8
- Applies to a soft tissue mass of the trunk
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Soft tissue mass of the trunk, site ___ (site)
- RMS confirmed by ___ (diagnosis_method)
- Margins ___ (margin_status)
- FOXO1 gene fusion ___ (foxo1)
- Lymph nodes on clinical assessment or imaging ___ (nodes)
- Risk group ___ (risk_group)

# Choose the surgical approach

- Amenable to R0, non-radical excision without impact to form or function (PRMS-D)
    - Initial primary resection is performed if there is a realistic expectation of achieving negative margins (R0 resection)
    - and if cosmetic and functional outcomes are acceptable
    - Excision confirms RMS
        - Per Principles of Pathologic Assessment
- Complete excision not possible without impact on form, function, or morbidity
    - Biopsy confirms RMS
        - Per Principles of Pathologic Assessment
        - Adequate biopsy is required
        - Biopsy should provide sufficient tissue to establish the diagnosis
        - Biopsy should provide sufficient tissue for further molecular genetic analysis

# Margin status after excision

- Negative margins
    - Clinical Group I
- Positive or unknown margins
    - Primary re-excision if R0 resection can be accomplished without significant morbidity (PRMS-D)
        - If there is suspicion or knowledge of residual tumor after the initial resection, PRE should be employed
        - Unless this would result in loss of form or function
    - Negative margins after primary re-excision
        - Clinical Group I
    - Clinical Group II (R1) or III (R2) if margins cannot be cleared surgically

# Lymph node assessment when complete excision is not possible

- No concerning lymph nodes on clinical assessment or imaging
- Suspicious lymph nodes on clinical assessment or imaging
    - Biopsy of concerning nodes for pathologic confirmation, if feasible (PRMS-E)
        - Per Principles of Pathologic Assessment

# Next

- Clinical Group I and FOXO1 gene fusion-positive
    - Systemic therapy, as indicated for risk group (PRMS-10)
    - and RT (PRMS-F)
- Clinical Group I and FOXO1 gene fusion-negative
    - Systemic therapy, as indicated for risk group (PRMS-10)
- Clinical Group II (R1) or III (R2)
    - Systemic therapy, as indicated for risk group (PRMS-10)
    - and RT (PRMS-F)
- Complete excision not possible, RMS confirmed by biopsy
    - Systemic therapy, as indicated for risk group (PRMS-10)
    - and RT (PRMS-F)
    - and evaluate for DPE (PRMS-D)
