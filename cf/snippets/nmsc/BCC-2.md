+++
id           = "nmsc/BCC-2"
gid          = "nmsc"
ref          = "BCC-2"
page         = 7
title        = "Stratification of local BCC into low-risk or high-risk to determine treatment options"
nccn_version = "2.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-27"
see_also     = ["BCC-1", "BCC-3", "BCC-4", "BCC-A"]

[facets]
disease   = "nmsc"
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "site"
type = "text"
[[variables]]
name = "diameter"
type = "number"
[[variables]]
name = "borders"
type = "enum"
options = ["well-defined", "poorly-defined"]
[[variables]]
name = "primary_or_recurrent"
type = "enum"
options = ["primary", "recurrent"]
[[variables]]
name = "immunosuppression"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "histologic_subtype"
type = "text"
[[variables]]
name = "perineural"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Basal Cell Skin Cancer v2.2026, BCC-2, p7
- Applies to local BCC being stratified by risk factors for recurrence
- Any high-risk factor places the patient in the high-risk category
- Pathology risk factors are defined in BCC-A
- All recommendations category 2A unless stated otherwise

# Assessment

- Location: ___ (site)
- Greatest diameter: ___ (diameter) cm
- Clinical borders: ___ (borders)
- Primary vs. recurrent: ___ (primary_or_recurrent)
- Immunosuppression: ___ (immunosuppression)
- Site of prior RT: ___ (prior_rt)
- Histologic subtype: ___ (histologic_subtype)
- Perineural involvement: ___ (perineural)

# Low risk, H&P

- Location/diameter: trunk, extremities <2 cm
- Clinical borders: well-defined
- Primary, not recurrent
- Immunosuppression (-)
- Site of prior RT (-)

# Low risk, pathology (BCC-A)

- Histologic subtype: nodular, superficial
    - Low-risk histologic subtypes include nodular, superficial, and other non-aggressive growth patterns such as keratotic, infundibulocystic, and fibroepithelioma of Pinkus
- Perineural involvement (-)

# High risk, H&P

- Location/diameter: trunk, extremities >=2 cm
- Location: head, neck, hands, feet, pretibial, and anogenital area (any size)
    - Narrow excision margins due to anatomic and functional constraints are associated with increased recurrence rates with standard histologic processing
    - Complete margin assessment with Mohs/PDEMA is recommended
    - For tumors <6 mm in size, without other high-risk features, other treatment modalities may be considered if at least 4-mm clinically tumor-free margins can be obtained without significant anatomic or functional distortions
- Clinical borders: poorly-defined
- Recurrent
- Immunosuppression (+)
- Site of prior RT (+)

# High risk, pathology (BCC-A)

- Histologic subtype: aggressive growth pattern
    - Basosquamous, infiltrative, sclerosing/morpheaform, micronodular, and BCC with sarcomatoid differentiation features in any portion of the tumor
    - In some cases, basosquamous tumors may be prognostically similar to squamous cell carcinoma (SCC); clinicopathologic correlation is recommended in these cases to further consider prognostic implication
- Perineural involvement (+)

# Next

- Low risk, treatment options at BCC-3
- High risk, treatment options at BCC-4
