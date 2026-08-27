+++
id           = "Myeloma/MYEL-5"
gid          = "Myeloma"
ref          = "MYEL-5"
page         = 13
title        = "Response after primary therapy in symptomatic multiple myeloma, and follow-up surveillance"
nccn_version = "5.2026"
nccn_date    = "01/09/26"
generated    = "2026-08-27"
see_also     = ["MYEL-4", "MYEL-6"]

[facets]
disease   = "Myeloma"
histology = "plasma-cell"
timepoint = ["transplant", "maintenance", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_regimen"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["response", "stable-disease", "relapse", "progression"]
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "progression_risk"
type = "enum"
options = ["standard", "high"]
+++

# Source

- NCCN Multiple Myeloma v5.2026, MYEL-5, p13
- Applies to multiple myeloma (symptomatic), response after primary therapy
- Response criteria for multiple myeloma, see MYEL-E
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary therapy given ___ (primary_regimen)
- Response after primary therapy ___ (response), assessed by the response criteria (MYEL-E)
- Candidate for autologous HCT ___ (hct_candidate)
    - Patients with stable disease can be considered for autologous HCT
    - Renal dysfunction and advanced age are not contraindications to transplant
- Risk of progression/relapse ___ (progression_risk)

# Options after primary therapy

- Autologous HCT (category 1)
    - Category 1 evidence supports proceeding directly after primary therapy to high-dose therapy and HCT
    - Collecting stem cells and delaying HCT is also an option
    - Whole-body FDG-PET/CT is recommended around day 100 after autologous HCT
    - Follow up with the tests listed on MYEL-4 under Follow-up/Surveillance
- Continuous myeloma therapy or maintenance therapy
    - Myeloma therapy, see MYEL-G
    - See MYEL-F for considerations for myeloma therapy and for specific populations (eg, Black/African American individuals)
    - The length of therapy should be balanced with toxicity and depth of response and disease status
    - Follow up with the tests listed on MYEL-4 under Follow-up/Surveillance
- Useful in certain circumstances, for patients with high risk of progression/relapse
    - Tandem autologous or allogeneic HCT
    - Follow up with the tests listed on MYEL-4 under Follow-up/Surveillance
    - Whole-body FDG-PET/CT is recommended around day 100 after autologous HCT

# Follow-up / surveillance

- Follow up with the tests listed on MYEL-4 under Follow-up/Surveillance
- Response or stable disease after autologous HCT
    - Maintenance therapy (category 1)
- Response or stable disease after continuous myeloma therapy or maintenance therapy
    - Maintenance therapy (category 1)
- Maintenance therapy
    - Myeloma therapy, see MYEL-G
    - See MYEL-F for considerations for myeloma therapy and for specific populations (eg, Black/African American individuals)
    - The length of therapy should be balanced with toxicity and depth of response and disease status
- Relapse or progression, assessed by the response criteria (MYEL-E)

# Next

- Response or stable disease, go to maintenance therapy (category 1)
- Relapse or progression, go to MYEL-6
