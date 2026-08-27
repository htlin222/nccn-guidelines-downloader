+++
id           = "head-and-neck/ADV-2"
gid          = "head-and-neck"
ref          = "ADV-2"
page         = 71
title        = "Treatment of very advanced head and neck cancer with distant metastases, by performance status"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ADV-1", "ADV-3", "ADV-A", "SYST-A", "SURG-A"]

[facets]
disease   = "head-and-neck"
stage     = "IV"
timepoint = ["metastatic", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "ps"
type = "enum"
options = ["0", "1", "2", "3", "4"]
[[variables]]
name = "disease_phase"
type = "enum"
options = ["initial presentation", "persistent disease or progression"]
[[variables]]
name = "limited_metastases"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ADV-2, p71
- Applies to distant metastases, including metastatic (M1) disease at initial presentation
- Branch point is performance status (PS)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, very advanced head and neck cancer
- Primary site ___ (primary_site)
- Distant metastases ___ (met_sites)
- Performance status (PS) ___ (ps)
- Disease phase ___ (disease_phase)
- Limited metastases ___ (limited_metastases)

# All patients

- Clinical trial preferred
- Metastatic (M1) disease at initial presentation
    - Consider locoregional treatment based on primary site algorithms (Table of Contents)

# Treatment, PS 0-1

- Combination systemic therapy
    - Per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- or Single-agent systemic therapy (SYST-A)
- or, for selected patients with limited metastases
    - Surgery
        - Per Principles of Surgery (SURG-A)
    - or RT
        - Per Principles of Radiation Therapy (ADV-A)
    - or systemic therapy/RT (SYST-A, ADV-A)
- or Best supportive care

# Treatment, PS 2-3

- Systemic therapy (SYST-A), clinical trial preferred
- or Palliative RT (ADV-A)
- or Best supportive care

# Treatment, PS 4

- Best supportive care
    - With or without palliative RT (ADV-A)

# Persistent disease or progression after PS 0-1 treatment

- Combination systemic therapy, for PS 2 only (SYST-A)
- or Single-agent systemic therapy (SYST-A)
- or Best supportive care
    - With or without palliative RT (ADV-A)
- or Palliative surgery

# Persistent disease or progression after PS 2-3 treatment

- Best supportive care
- or Alternate single-agent systemic therapy (SYST-A)
- or Palliative RT (ADV-A)

# Next

- Metastatic (M1) disease at initial presentation, consider locoregional treatment based on primary site algorithms (Table of Contents)
- Persistent disease or progression, treat by the PS arm the patient was on
- Best supportive care
