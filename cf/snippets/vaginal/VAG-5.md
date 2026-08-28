+++
id           = "vaginal/VAG-5"
gid          = "vaginal"
ref          = "VAG-5"
page         = 11
title        = "Therapy for locoregional relapse of vaginal cancer, by central versus noncentral disease and prior radiation"
nccn_version = "2.2026"
nccn_date    = "12/04/25"
generated    = "2026-08-28"
see_also     = ["VAG-4", "VAG-6", "VAG-A", "VAG-C", "VAG-D", "VAG-E"]

[facets]
disease   = "vaginal"
stage     = "recurrent"
timepoint = "recurrence"

[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "recurrence_pattern"
type = "enum"
options = ["central", "noncentral"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["none", "intracavitary brachytherapy only", "EBRT", "EBRT plus brachytherapy"]
[[variables]]
name = "prior_field"
type = "enum"
options = ["inside previously radiated field", "outside previously radiated field", "not applicable"]
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Vaginal Cancer v2.2026, VAG-5, p11
- Therapy for relapse, locoregional recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- Site of recurrence ___ (recurrence_site)
- Central or noncentral disease ___ (recurrence_pattern)
- Prior radiation ___ (prior_rt)
- Recurrence relative to the previously radiated field ___ (prior_field)
- Cisplatin ___ (cisplatin_tolerance)

# Central disease, no prior RT or recurrence outside of previously radiated field

- EBRT
    - Radiation per Principles of Radiation Therapy (VAG-C)
    - With or without brachytherapy (VAG-C)
- or Chemoradiation
    - Radiation per Principles of Radiation Therapy (VAG-C)
    - Systemic therapy per Systemic Therapy for Vaginal Cancer (VAG-D)
    - Concurrent platinum-containing chemotherapy with EBRT uses cisplatin as a single agent
        - Carboplatin if cisplatin intolerant
    - With or without brachytherapy (VAG-C)

# Central disease, prior intracavitary brachytherapy only

- Individualized EBRT (VAG-C)
- With or without systemic therapy
    - Systemic therapy per Systemic Therapy for Vaginal Cancer (VAG-D)
    - Consider additional testing, see Principles of Pathology (VAG-A)
- With or without interstitial brachytherapy (VAG-C)
- With or without surgery for select patients
    - Surgery per Principles of Surgery (VAG-E)

# Central disease, prior EBRT with or without brachytherapy

- Pelvic exenteration
    - Surgery per Principles of Surgery (VAG-E)
    - With or without intraoperative RT (IORT) (VAG-C)
- or Consider reirradiation (VAG-C)
- or Limited (less than exenteration) excision in carefully selected patients
    - Surgery per Principles of Surgery (VAG-E)
- or Systemic therapy
    - Systemic therapy per Systemic Therapy for Vaginal Cancer (VAG-D)
    - Consider additional testing, see Principles of Pathology (VAG-A)
- or Best supportive care, see NCCN Guidelines for Palliative Care

# Noncentral disease

- Systemic therapy
    - Systemic therapy per Systemic Therapy for Vaginal Cancer (VAG-D)
    - Consider additional testing, see Principles of Pathology (VAG-A)
- or Resection
    - Surgery per Principles of Surgery (VAG-E)
    - With or without IORT (VAG-C)
- or Reirradiation (VAG-C)
- or Best supportive care, see NCCN Guidelines for Palliative Care

# Next

- Surgical candidacy and extent of resection, see Principles of Surgery (VAG-E)
- Radiation and reirradiation planning, see Principles of Radiation Therapy (VAG-C)
- Regimen selection, see Systemic Therapy for Vaginal Cancer (VAG-D)
- Additional testing before systemic therapy, see Principles of Pathology (VAG-A)
- Best supportive care, see NCCN Guidelines for Palliative Care
