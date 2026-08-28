+++
id           = "neuroblastoma/NEUROB-9"
gid          = "neuroblastoma"
ref          = "NEUROB-9"
page         = 15
title        = "End-induction response assessment in high-risk disease, and the treatment it selects after standard induction"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-7", "NEUROB-8", "NEUROB-10", "NEUROB-D", "NEUROB-G"]

[facets]
disease   = "neuroblastoma"
timepoint = ["induction", "consolidation", "transplant"]

[[variables]]
name = "end_induction_response"
type = "enum"
options = ["CR", "PR", "MR", "SD", "PD"]
[[variables]]
name = "degree_of_response"
type = "text"
[[variables]]
name = "bridging_response"
type = "text"
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-9, p15
- Applies to high-risk disease after standard induction
- Response is scored at the end-induction disease evaluation, by INRC response criteria (NEUROB-G)
- Systemic therapy options are defined in Principles of Systemic Therapy (NEUROB-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- End-induction disease evaluation completed
- INRC response criteria applied (NEUROB-G)
- End-induction response ___ (end_induction_response)
- Degree of response, for the bridging therapy decision ___ (degree_of_response)

# Complete response (CR)

- Standard consolidation
    - High-dose chemotherapy with autologous stem cell rescue (NEUROB-10)
    - See Principles of Systemic Therapy (NEUROB-D)

# Partial response (PR)

- Bridging therapy may be appropriate depending upon degree of response
    - See Principles of Systemic Therapy (NEUROB-D 4 of 13)
- Standard consolidation
    - High-dose chemotherapy with autologous stem cell rescue (NEUROB-10)
    - See Principles of Systemic Therapy (NEUROB-D)

# Minor response (MR) or stable disease (SD)

- Bridging therapy may be appropriate depending upon degree of response
    - See Principles of Systemic Therapy (NEUROB-D 4 of 13)
- Bridging therapy options
    - Chemoimmunotherapy, see Principles of Systemic Therapy (NEUROB-D)
    - Clinical trial
- Reassess after bridging therapy ___ (bridging_response)
    - Favorable response: consider options for consolidation therapy

# Progressive disease (PD)

- Chemoimmunotherapy, see Principles of Systemic Therapy (NEUROB-D)
- Clinical trial

# Next

- CR, go to standard consolidation at NEUROB-10
- PR, go to standard consolidation at NEUROB-10
- MR or SD, bridging therapy, then consider options for consolidation therapy if favorable response
- PD, chemoimmunotherapy or clinical trial
