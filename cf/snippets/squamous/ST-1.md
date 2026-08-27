+++
id           = "squamous/ST-1"
gid          = "squamous"
ref          = "ST-1"
page         = 40
title        = "AJCC clinical T and N staging for cutaneous carcinoma of the head and neck"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-1", "SCC-2", "SCC-8"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "deep_invasion"
type = "enum"
options = ["yes", "no", "not-assessed"]
[[variables]]
name = "perineural_invasion"
type = "enum"
options = ["yes", "no", "not-assessed"]
[[variables]]
name = "bone_involvement"
type = "enum"
options = ["none", "minor-bone-erosion", "gross-cortical-bone-marrow", "skull-base"]
[[variables]]
name = "ct"
type = "text"
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_pattern"
type = "text"
[[variables]]
name = "ene"
type = "enum"
options = ["ENE-negative", "ENE-positive", "not-assessed"]
[[variables]]
name = "ul"
type = "enum"
options = ["U", "L", "not-recorded"]
[[variables]]
name = "cn"
type = "text"
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, ST-1, p40
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Cutaneous Carcinoma of the Head and Neck (8th ed., 2017)
- Table 1. Definitions for T, N, M
- Applies to cutaneous squamous cell carcinoma, cutaneous carcinoma, basal cell carcinoma of the head and neck, and all other nonmelanoma skin carcinomas of the head and neck
    - Merkel cell carcinoma is excluded
    - Anatomic site of external vermilion lip is included, because it has a more similar embryologic origin to skin, and its etiology, which is often based on ultraviolet exposure, is more similar to other nonmelanoma skin cancers
    - The AJCC Staging Manual, Eighth Edition does not include staging for cutaneous carcinoma outside the head and neck
- Original source is the AJCC Cancer Staging System, used with the permission of the American College of Surgeons

# Assessment

- ___ (age) yo, cutaneous carcinoma of the head and neck at ___ (site)
- Greatest tumor dimension ___ (tumor_size)
- Deep invasion ___ (deep_invasion)
- Perineural invasion ___ (perineural_invasion)
- Bone involvement ___ (bone_involvement)
- Clinical T category ___ (ct)
- Greatest dimension of the largest involved node ___ (node_size)
- Number and laterality of involved nodes ___ (node_pattern)
- Extranodal extension ___ (ene)
- U or L designation ___ (ul)
- Clinical N (cN) category ___ (cn)

# T primary tumor

- TX, primary tumor cannot be assessed
- Tis, carcinoma in situ
- T1, tumor smaller than or equal to 2 cm in greatest dimension
- T2, tumor larger than 2 cm, but smaller than or equal to 4 cm in greatest dimension
- T3, tumor larger than 4 cm in maximum dimension
    - or minor bone erosion
    - or perineural invasion
        - For T3 classification, perineural invasion is defined as tumor cells within the nerve sheath of a nerve lying deeper than the dermis
        - or a nerve measuring 0.1 mm or larger in caliber
        - or clinical or radiographic involvement of named nerves without skull base invasion or transgression
    - or deep invasion
        - Deep invasion is defined as invasion beyond the subcutaneous fat
        - or greater than 6 mm, as measured from the granular layer of adjacent normal epidermis to the base of the tumor
- T4, tumor with gross cortical bone/marrow, skull base invasion and/or skull base foramen invasion
    - T4a, tumor with gross cortical bone/marrow invasion
    - T4b, tumor with skull base invasion and/or skull base foramen involvement

# Clinical N (cN) regional lymph nodes

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in a single ipsilateral lymph node, 3 cm or smaller in greatest dimension and ENE(−)
- N2, metastasis in a single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension and ENE(−)
    - or metastases in multiple ipsilateral lymph nodes, none larger than 6 cm in greatest dimension and ENE(−)
    - or metastases in bilateral or contralateral lymph nodes, none larger than 6 cm in greatest dimension and ENE(−)
    - N2a, metastasis in a single ipsilateral node larger than 3 cm but not larger than 6 cm in greatest dimension and ENE(−)
    - N2b, metastases in multiple ipsilateral nodes, none larger than 6 cm in greatest dimension and ENE(−)
    - N2c, metastases in bilateral or contralateral lymph nodes, none larger than 6 cm in greatest dimension and ENE(−)
- N3, metastasis in a lymph node larger than 6 cm in greatest dimension and ENE(−)
    - or metastasis in any node(s) and clinically overt ENE, ENE(+)
    - N3a, metastasis in a lymph node larger than 6 cm in greatest dimension and ENE(−)
    - N3b, metastasis in any node(s) and ENE(+)

# Recording conventions

- A designation of U or L may be used for any N category
    - U indicates metastasis above the lower border of the cricoid
    - L indicates metastasis below the lower border of the cricoid
- Clinical and pathological extranodal extension (ENE) should be recorded as ENE(−) or ENE(+)

# Next

- Staging tables continued on the following page
