+++
id           = "neuroendocrine/NET-8"
gid          = "neuroendocrine"
ref          = "NET-8"
page         = 26
title        = "Post-resection surveillance of GI tract, lung, and thymic NETs, and entry into management of recurrent disease"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["NET-1", "NET-9"]

[facets]
disease   = "neuroendocrine"
histology = "neuroendocrine"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "enum"
options = ["gi-tract", "lung", "thymus"]
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "resection_date"
type = "text"
[[variables]]
name = "interval_since_resection"
type = "text"
[[variables]]
name = "functional"
type = "enum"
options = ["functional", "nonfunctional"]
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Neuroendocrine Tumors of the Gastrointestinal Tract (Well-Differentiated Grade 1/2), Lung, and Thymus v1.2026, NET-8, p26
- Applies to surveillance after resection of a GI tract, lung, or thymic NET
- Survivorship care, see NCCN Guidelines for Survivorship
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, primary ___ (primary_site) NET
- Well-differentiated, grade ___ (grade)
- Resected ___ (resection_date)
- ___ (interval_since_resection) post-resection
- ___ (functional) tumor
- Symptoms since last visit: ___ (symptoms)

# Surveillance 12 wk-12 mo post-resection

- History and physical (H&P)
    - Do it earlier, if symptoms
- For functional tumors, follow-up with biochemical markers as clinically indicated (NE-A)
- Primary GI NETs
    - Multiphasic abdomen with or without pelvis CT or MRI (NE-B)
        - Multiphasic imaging studies are performed with IV contrast in arterial and portal venous phases
    - Chest CT with or without contrast, as clinically indicated
- Primary lung or thymic NETs
    - Chest CT, plus multiphasic CT or MRI abdomen with contrast
        - Multiphasic imaging studies are performed with IV contrast in arterial and portal venous phases
    - Pelvis CT or MRI with contrast, as clinically indicated (NE-B)
- If initial scans are negative, the frequency of follow-up scans may decrease

# Surveillance >1 y post-resection to 10 y

- Every 12-24 mo
    - History and physical (H&P)
        - Do it earlier, if symptoms
    - For functional tumors, follow-up with biochemical markers as clinically indicated (NE-A)
    - Primary GI NETs
        - Multiphasic abdomen with or without pelvis CT or MRI (NE-B)
        - Chest CT with or without contrast, as clinically indicated
    - Primary lung or thymic NETs
        - Chest CT, plus multiphasic CT or MRI abdomen with contrast
        - Pelvis CT or MRI with contrast, as clinically indicated (NE-B)
- If initial scans are negative, the frequency of follow-up scans may decrease

# Surveillance >10 y

- Consider surveillance as clinically indicated (NE-B)
    - Per Singh S, et al. JAMA Oncol 2018;4:1597-1604

# Not recommended for routine surveillance

- SSTR-based imaging
- Fluorodeoxyglucose (FDG)-PET/CT scan

# Next

- Disease recurrence
    - In select cases, resection may be considered
    - Management of recurrent disease follows Principles of Surgical Management of Neuroendocrine Tumors (NE-D)
    - GI tract, go to NET-9
    - Lung or thymus, locoregional unresectable, go to NET-11
    - Lung or thymus, distant metastases, go to NET-12
    - Carcinoid syndrome, go to NET-14
