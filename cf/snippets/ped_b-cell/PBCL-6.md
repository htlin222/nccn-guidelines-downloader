+++
id           = "ped_b-cell/PBCL-6"
gid          = "ped_b-cell"
ref          = "PBCL-6"
page         = 11
title        = "Group A Burkitt lymphoma / DLBCL: induction therapy and end-of-treatment response"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-5", "PBCL-3", "PBCL-B", "PBCL-C", "PBCL-D", "PBCL-10", "PBCL-11"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
timepoint = ["induction", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "regimen"
type = "enum"
options = ["clinical-trial", "pog9219", "fab-lmb96-regimen-a"]
[[variables]]
name = "eot_response"
type = "enum"
options = ["cr", "less-than-cr"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-6, p11
- Burkitt lymphoma and diffuse large B-cell lymphoma
- Applies to risk assessment Group A only (definitions on PBCL-5)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Risk assessment confirmed as Group A, per definitions on PBCL-5

# Induction therapy / initial treatment

- Selected treatment: ___ (regimen)
    - Clinical trial
    - POG9219 regimen
        - Principles of Systemic Therapy (PBCL-B)
    - FAB/LMB96 regimen A
        - Principles of Systemic Therapy (PBCL-B)
- Supportive care planned alongside induction
    - Principles of Supportive Care (PBCL-D)

# Response assessment at the end of treatment (EOT)

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Grade the response against the Response Criteria (PBCL-C)
- EOT response recorded: ___ (eot_response)

# Next

- Complete response (CR), go to Surveillance (PBCL-10)
- Less than complete response (<CR), go to Relapse or Refractory Disease (PBCL-11)
    - Repeat biopsy of residual mass should be considered prior to additional therapy
