+++
id           = "neuroblastoma/NEUROB-7"
gid          = "neuroblastoma"
ref          = "NEUROB-7"
page         = 13
title        = "Overview of treatment for high-risk neuroblastoma, from induction through post-consolidation"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-2", "NEUROB-8", "NEUROB-9", "NEUROB-10", "NEUROB-11", "NEUROB-D", "NEUROB-G"]

[facets]
disease   = "neuroblastoma"
timepoint = ["induction", "consolidation", "transplant"]

[[variables]]
name = "risk_group"
type = "text"
[[variables]]
name = "phase"
type = "enum"
options = ["induction", "consolidation", "post-consolidation", "continuation"]
[[variables]]
name = "resection_status"
type = "text"
[[variables]]
name = "end_induction_response"
type = "text"
[[variables]]
name = "end_consolidation_response"
type = "text"
[[variables]]
name = "progression"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-7, p13
- Applies to high risk by Risk Classification (NEUROB-2)
- Overview of treatment for high-risk neuroblastoma
- INRC response criteria (NEUROB-G)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Risk classification ___ (risk_group), high risk confirmed (NEUROB-2)
- Current phase ___ (phase)
- Resection of primary tumor/locoregional disease ___ (resection_status)
- End-induction INRC response ___ (end_induction_response)
- End-consolidation INRC response ___ (end_consolidation_response)
- Disease progression ___ (progression)

# Induction therapy

- Multi-agent chemotherapy (NEUROB-8), followed by
- Resection of primary tumor/locoregional disease (NEUROB-8)
- End-induction disease evaluation
    - INRC response criteria (NEUROB-G)
    - See NEUROB-9 and NEUROB-10 for what follows
- Bridging therapy, for select patients
    - Chemoimmunotherapy or clinical trial (NEUROB-9)
- If disease progression
    - Chemoimmunotherapy or clinical trial (NEUROB-9)

# Consolidation therapy

- Standard consolidation (NEUROB-10)
    - High-dose chemotherapy with autologous stem cell rescue, followed by
    - Radiation therapy (RT)
- End-consolidation disease evaluation
    - INRC response criteria (NEUROB-G)

# Post-consolidation therapy

- Post-consolidation, if no disease progression (NEUROB-11)
    - Anti-GD2 antibody therapy with isotretinoin/sargramostim + dinutuximab
- If disease progression
    - Chemoimmunotherapy or clinical trial (NEUROB-11)
- End of post-consolidation disease evaluation (NEUROB-11)
    - INRC response criteria (NEUROB-G)

# Next

- Induction therapy, go to NEUROB-8
- End-induction evaluation and bridging therapy, go to NEUROB-9
- Consolidation therapy, go to NEUROB-10
- Post-consolidation therapy, go to NEUROB-11
- Continuation therapy (category 2B), see NEUROB-11 and Principles of Systemic Therapy (NEUROB-D), 6 of 13 and 9 of 13
