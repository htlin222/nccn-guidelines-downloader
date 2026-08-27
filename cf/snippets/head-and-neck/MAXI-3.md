+++
id           = "head-and-neck/MAXI-3"
gid          = "head-and-neck"
ref          = "MAXI-3"
page         = 68
title        = "Primary and adjuvant treatment of maxillary sinus tumors by stage"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["MAXI-1", "MAXI-2", "MAXI-A", "SURG-A", "SYST-A", "SALI-1", "SALI-A", "FOLL-A", "ADV-1", "ADV-3"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "t_stage"
type = "text"
[[variables]]
name = "n_stage"
type = "text"
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "ene"
type = "enum"
options = ["present", "absent", "not assessed"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, MAXI-3, p68
- Maxillary sinus tumors, staging groups T3–T4a N0, T1–T4a N+, and T4b N0–3
- Applies to primary treatment and to adjuvant treatment
- For SNUC with neuroendocrine features, small cell, high-grade olfactory esthesioneuroblastoma, or SNEC histologies, systemic therapy should be a part of the overall treatment
    - Consider a clinical trial
    - Consider referral to a major medical center that specializes in these diseases
    - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- Adverse pathologic features: positive margins, close margins, or extranodal extension (Discussion)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) maxillary sinus tumor
- Histology ___ (histology)
- T stage ___ (t_stage)
- N stage ___ (n_stage)
- Margins on resection ___ (margin_status)
- Extranodal extension ___ (ene)

# Primary treatment, T3–T4a N0

- Complete resection
    - Principles of Surgery (SURG-A)
    - See the salivary gland algorithm for management after resection (SALI-1)

# Adjuvant treatment, T3–T4a N0

- If adverse pathologic features, ie, positive margins, close margins, or extranodal extension
    - RT (MAXI-A)
    - or Consider systemic therapy/RT to primary and neck (category 2B)
        - Principles of Radiation Therapy (MAXI-A)
        - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- If no adverse pathologic features
    - RT to primary and neck (category 2B for neck for squamous cell carcinoma and undifferentiated tumors)
        - Principles of Radiation Therapy (MAXI-A)
        - For adenoid cystic tumors and minor salivary gland tumors, see SALI-A

# Primary treatment, T1–T4a N+

- Resection + neck dissection
    - Principles of Surgery (SURG-A)
    - See the salivary gland algorithm for management after resection (SALI-1)

# Adjuvant treatment, T1–T4a N+

- If adverse pathologic features, ie, positive margins, close margins, or extranodal extension
    - RT
        - Principles of Radiation Therapy (MAXI-A)
        - For adenoid cystic tumors and minor salivary gland tumors, see SALI-A
    - or Consider systemic therapy/RT to primary and neck (category 2B)
        - Principles of Radiation Therapy (MAXI-A)
        - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- If no adverse pathologic features
    - RT to primary + neck
        - Principles of Radiation Therapy (MAXI-A)
        - For adenoid cystic tumors and minor salivary gland tumors, see SALI-A

# Primary treatment, T4b N0–3

- Treatment of very advanced head and neck cancer (ADV-1)

# Next

- Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease (ADV-3)
- Treatment of very advanced head and neck cancer (ADV-1)
