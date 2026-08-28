+++
id           = "ped_b-cell/PBCL-7"
gid          = "ped_b-cell"
ref          = "PBCL-7"
page         = 12
title        = "Group B (low risk) induction therapy and the response checkpoints that redirect it"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-4", "PBCL-5", "PBCL-3", "PBCL-B", "PBCL-C", "PBCL-D", "PBCL-9", "PBCL-10", "PBCL-11"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
stage     = ["I", "II", "III"]
timepoint = ["induction", "primary-treatment", "consolidation"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "risk_criterion"
type = "enum"
options = ["unresected-stage-i", "nonabdominal-stage-ii", "stage-iii-with-low-ldh"]
[[variables]]
name = "regimen"
type = "enum"
options = ["pog9219", "cog-anhl1131-regimen-b"]
[[variables]]
name = "rituximab"
type = "enum"
options = ["included", "not included"]
[[variables]]
name = "cop_response"
type = "enum"
options = ["at-least-20-percent-reduction", "less-than-20-percent-reduction"]
[[variables]]
name = "consolidation1_response"
type = "enum"
options = ["cr", "less-than-cr"]
[[variables]]
name = "eot_response"
type = "enum"
options = ["cr", "less-than-cr"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-7, p12
- Burkitt lymphoma and diffuse large B-cell lymphoma
- Applies to risk assessment Group B (low risk) only
    - See PBCL-4 for staging
    - See definitions on PBCL-5
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Group B (low risk) qualifying feature: ___ (risk_criterion)
    - Unresected stage I and nonabdominal stage II
    - Stage III with low LDH

# Induction therapy / initial treatment

- Supportive care planned alongside induction
    - Principles of Supportive Care (PBCL-D)
- Selected treatment: ___ (regimen)
    - POG9219 regimen
        - Principles of Systemic Therapy (PBCL-B)
    - COG ANHL1131 regimen B, with or without rituximab
        - Principles of Systemic Therapy (PBCL-B)
- Rituximab decision recorded: ___ (rituximab)
    - Rituximab has not been tested in clinical trials in this patient group
    - In keeping with adult practice and data on efficacy and toxicity in patients at high risk, inclusion of rituximab in treatment of this patient population is deemed appropriate
    - Rituximab is included in induction / initial treatment, and should be continued throughout therapy
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy

# Response assessment after the COP reduction phase

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Response recorded: ___ (cop_response)
    - At least 20% reduction, continue COG ANHL1131 regimen B, with or without rituximab
    - Less than 20% reduction, go to COG ANHL1131 (Arm C1 CNS negative regimen), starting with COPADM 1 + rituximab (PBCL-9)

# Response assessment after consolidation 1

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - Same FDG-PET cautions as above apply
- Response recorded: ___ (consolidation1_response)
    - Complete response (CR), continue COG ANHL1131 regimen B, with or without rituximab
    - Less than complete response (<CR), go to COG ANHL1131 (Arm C1 CNS negative regimen), starting with CYVE 1 + rituximab (PBCL-9)
        - Repeat biopsy of residual mass should be considered prior to additional therapy

# Remission assessment at the end of treatment (EOT)

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - Same FDG-PET cautions as above apply
- Grade the response against the Response Criteria (PBCL-C)
- EOT response recorded: ___ (eot_response)

# Next

- Complete response (CR), go to Surveillance (PBCL-10)
- Less than complete response (<CR), go to Relapse or Refractory Disease (PBCL-11)
    - Repeat biopsy of residual mass should be considered prior to additional therapy
