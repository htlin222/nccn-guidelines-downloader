+++
id           = "ped_sts/PRMS-4"
gid          = "ped_sts"
ref          = "PRMS-4"
page         = 7
title        = "Local management of a soft tissue mass of the extremity, and the clinical group it assigns"
nccn_version = "1.2026"
nccn_date    = "02/017/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
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
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-4, p7
- Applies to a soft tissue mass of the extremity
- Diagnosis of RMS per Principles of Pathologic Assessment
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) extremity
- Soft tissue mass, primary site ___ (site)
- RMS confirmed by ___ (diagnosis_method)
- Margins ___ (margin_status)
- FOXO1 gene fusion ___ (foxo1)
- Risk group ___ (risk_group)

# Local management of the extremity mass

- Amenable to R0, non-radical excision without impact to form or function (PRMS-D)
    - Initial primary resection is performed if there is a realistic expectation of achieving negative margins (R0 resection)
    - Initial primary resection is performed if cosmetic and functional outcomes are acceptable
    - Excision confirms RMS
        - Per Principles of Pathologic Assessment
        - Extremity tumors are often amenable to wide or radical resection while sparing the involved limb
        - Excision of an entire muscle from origin to insertion is not always required
        - Resection of the entire compartment is not always required
        - Extent of resection depends on the size and invasiveness of the specific tumor
- Complete excision not possible without impact on form, function, or morbidity
    - Biopsy confirms RMS
        - Per Principles of Pathologic Assessment
        - Adequate biopsy is required
            - Should provide sufficient tissue to establish the diagnosis
            - Should provide sufficient tissue for further molecular genetic analysis

# Regional lymph node sampling

- Regional lymph node sampling after excision confirms RMS (PRMS-E)
- Regional lymph node sampling after biopsy confirms RMS (PRMS-E)

# Margin status after excision

- Negative margins
    - Clinical Group I
- Positive or unknown margins
    - Primary re-excision if R0 resection can be accomplished without significant morbidity (PRMS-D)
        - If there is suspicion or knowledge of residual tumor after the initial resection, primary re-excision should be employed
        - Do not re-excise if this would result in loss of form or function
        - Negative margins after primary re-excision, Clinical Group I
    - Clinical Group II (R1) or III (R2) if margins cannot be cleared surgically

# Next

- Clinical Group I, FOXO1 gene fusion-positive, systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F)
- Clinical Group I, FOXO1 gene fusion-negative, systemic therapy (as indicated for risk group) (PRMS-10)
- Clinical Group II (R1) or III (R2), systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F)
- Complete excision not possible, biopsy-confirmed, systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F) and evaluate for DPE (PRMS-D)
