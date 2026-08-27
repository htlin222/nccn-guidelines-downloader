+++
id           = "bone/OSTEO-4"
gid          = "bone"
ref          = "OSTEO-4"
page         = 23
title        = "Surveillance after treatment of osteosarcoma, and management of relapse"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["OSTEO-1", "OSTEO-2", "OSTEO-3", "BONE-A", "BONE-B", "BONE-C"]

[facets]
disease   = "bone"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "followup_year"
type = "number"
[[variables]]
name = "function"
type = "text"
[[variables]]
name = "status"
type = "enum"
options = ["no-relapse", "relapse", "relapse-or-progression"]
+++

# Source

- NCCN Bone Cancer v1.2027, OSTEO-4, p23
- Applies to osteosarcoma after completion of treatment
- Covers the surveillance schedule, treatment of relapse, and relapse or progression after that treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, osteosarcoma
- Primary site ___ (primary_site)
- Year of follow-up since completion of treatment ___ (followup_year)
- Function ___ (function)
- Current status ___ (status)

# Surveillance

- Physical exam
- Imaging of primary site and chest
    - Use the same imaging technique that was performed in the initial workup
- Follow-up schedule, orthopedic and oncologic
    - Every 3 months for years 1 and 2
    - Every 4 months for year 3
    - Every 6 months for years 4 and 5
    - Annually thereafter, as clinically indicated
- CBC and other laboratory studies as clinically indicated
- Consider FDG-PET/CT (head-to-toe) and/or bone scan (category 2B)
- Reassess function every visit

# Relapse

- Chemotherapy and/or excision if possible
    - Chemotherapy agents: Bone Cancer Systemic Therapy Agents (BONE-B)
    - Excision: Principles of Bone Cancer Management (BONE-A)
- Imaging to assess response
    - X-rays of primary site
    - Contrast-enhanced CT, with or without MRI, of local sites
    - Chest CT
        - Can be performed with or without contrast as clinically indicated
        - Low-dose, non-contrast CT is recommended for restaging

# Relapse or progression

- Excision, if possible (Principles of Bone Cancer Management, BONE-A)
- or Clinical trial
- or RT (Principles of Radiation Therapy, BONE-C)
    - May include radiopharmaceuticals, including radium-223
- or Embolization/ablation
- or Best supportive care

# Next

- Response to treatment for relapse, resume the surveillance schedule above
- Relapse or progression after treatment for relapse, choose from the options above
- Principles of bone cancer management, see BONE-A
- Systemic therapy agents, see BONE-B
- Principles of radiation therapy, see BONE-C
