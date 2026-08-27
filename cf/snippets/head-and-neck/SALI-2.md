+++
id           = "head-and-neck/SALI-2"
gid          = "head-and-neck"
ref          = "SALI-2"
page         = 83
title        = "Primary treatment of a salivary gland tumor by cancer site and stage, and the pathology result that decides adjuvant RT"
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
name = "stage"
type = "enum"
options = ["clinically benign", "T1", "T2", "T3", "T4a", "T4b"]
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SALI-2, p83
- Applies to a salivary gland tumor presenting for primary treatment
- Branches first on cancer site and stage, then on the pathology result after complete resection
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, salivary gland tumor
- Cancer site ___ (site)
    - Parotid gland
    - Other salivary glands
- Stage ___ (stage)
- If clinically benign, confirm the characteristics of a benign tumor
    - Mobile superficial lobe
    - Slow growth
    - Painless
    - V and/or VII intact
    - No neck nodes
- Pathology result ___ (pathology)

# Clinically benign or T1, T2

- Complete resection
    - Resection of a clinically benign tumor includes no enucleation of lateral lobe
    - Resection of a clinically benign tumor includes intraoperative communication with pathologist if indicated
- If incidental N+ disease is present, go to SALI-3

# Pathology result after complete resection

- Benign
    - Follow-up as clinically indicated
- Low grade
    - If tumor spillage or perineural invasion, consider RT (SALI-A)
- Adenoid cystic
    - RT (SALI-A)
- Intermediate or high grade
    - RT (SALI-A)

# T3, T4a

- Surgical evaluation
- Treatment by cancer site (SALI-3)

# T4b

- No resection possible or resection not recommended
    - Definitive RT (SALI-A)
    - or Concurrent systemic therapy/RT (category 2B)

# Next

- After treatment of low grade, adenoid cystic, or intermediate or high grade disease
    - Follow-up (FOLL-A, 1 of 2)
    - Recurrent or persistent disease, go to SALI-4
- T3, T4a, go to SALI-3
- Incidental N+ disease, go to SALI-3
