+++
id           = "ped_b-cell/PBCL-8"
gid          = "ped_b-cell"
ref          = "PBCL-8"
page         = 13
title        = "Group B (high risk): induction therapy and the two response checkpoints that decide whether to escalate"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-5", "PBCL-3", "PBCL-9", "PBCL-10", "PBCL-B", "PBCL-C", "PBCL-D"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
timepoint = ["induction", "consolidation"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "marrow_initial"
type = "enum"
options = ["involved", "not-involved"]
[[variables]]
name = "cop_response"
type = "enum"
options = ["less-than-20-percent-reduction", "at-least-20-percent-reduction"]
[[variables]]
name = "consolidation_response"
type = "enum"
options = ["cr", "less-than-cr"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-8, p13
- Burkitt lymphoma and diffuse large B-cell lymphoma
- Applies to risk assessment Group B (high risk) only (see definitions on PBCL-5)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Risk assessment confirmed as Group B (high risk), per definitions on PBCL-5
- Bone marrow at diagnosis ___ (marrow_initial)

# Induction therapy / initial treatment

- COG ANHL1131 regimen B + rituximab (category 1)
    - Principles of Systemic Therapy (PBCL-B)
    - The addition of rituximab is a category 1 recommendation for patients with high-risk Group B and Group C disease
        - Minard-Colin V, et al. N Engl J Med 2020;382:2207-2219
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- Supportive care alongside induction
    - Principles of Supportive Care (PBCL-D)

# Response assessment after the COP reduction phase

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- Bone marrow studies should also be performed if bone marrow was initially involved
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Grade the response against the Response Criteria (PBCL-C)
- COP reduction recorded: ___ (cop_response)
- Less than 20% reduction
    - COG ANHL1131 (Arm C1 CNS negative regimen), starting with COPADM 1 + rituximab (category 1)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- 20% reduction or greater
    - Continue COG ANHL1131 regimen B, starting with COPADM 1 + rituximab (category 1)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines

# Response assessment after consolidation 1

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- Bone marrow studies should also be performed if bone marrow was initially involved
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Grade the response against the Response Criteria (PBCL-C)
- Response recorded: ___ (consolidation_response)
- Complete response (CR)
    - Continue COG ANHL1131 regimen B + rituximab (category 1)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- Less than complete response (<CR)
    - Repeat biopsy of residual mass should be considered prior to additional therapy
    - COG ANHL1131 (Arm C1 CNS negative regimen), starting with CYVE 1 + rituximab (category 1)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines

# Next

- Less than 20% reduction after the COP reduction phase, go to PBCL-9
- 20% reduction or greater after the COP reduction phase, continue regimen B through consolidation 1
- CR after consolidation 1, continue regimen B + rituximab, then Surveillance (PBCL-10)
- Less than CR after consolidation 1, go to PBCL-9
