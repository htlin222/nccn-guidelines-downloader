+++
id           = "head-and-neck/SALI-2"
gid          = "head-and-neck"
ref          = "SALI-2"
page         = 83
title        = "Resection by cancer site and T category, and the pathology result that directs adjuvant RT"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SALI-1", "SALI-3", "SALI-4", "SALI-A", "FOLL-A"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "enum"
options = ["parotid gland", "other salivary glands"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SALI-2, p83
- Applies to a salivary gland tumor arriving from workup (SALI-1), clinically benign or carcinoma
- Branches on cancer site and T category, then on the pathology result after resection
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, salivary gland tumor
- Cancer site ___ (site)
    - Parotid gland
    - Other salivary glands
- ___ (t_category)
- Clinically benign
    - Characteristics of a benign tumor include mobile superficial lobe
    - Slow growth
    - Painless
    - V and/or VII intact
    - No neck nodes
- Pathology result ___ (pathology)

# Clinically benign or T1, T2

- Complete resection
    - Resection of a clinically benign tumor includes no enucleation of lateral lobe
    - Intraoperative communication with pathologist if indicated
    - If incidental N+ disease is present, go to SALI-3

# Pathology result after complete resection

- Benign or low grade
    - Follow-up as clinically indicated
    - If tumor spillage or perineural invasion, consider RT (SALI-A)
- Adenoid cystic, or intermediate or high grade
    - RT (SALI-A)

# T3, T4a

- Surgical evaluation
- Cancer site treatment (SALI-3)

# T4b

- No resection possible or resection not recommended
    - Definitive RT (SALI-A)
    - or Concurrent systemic therapy/RT (category 2B)

# Next

- Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease, go to SALI-4
- T3, T4a, go to SALI-3
- Incidental N+ disease, go to SALI-3
