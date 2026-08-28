+++
id           = "ped_b-cell/PBCL-9"
gid          = "ped_b-cell"
ref          = "PBCL-9"
page         = 14
title        = "Group C induction therapy / initial treatment and response assessment"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-5", "PBCL-3", "PBCL-B", "PBCL-C", "PBCL-D", "PBCL-10", "PBCL-11"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
timepoint = ["induction", "consolidation", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "cns_status"
type = "enum"
options = ["cns-positive-csf-positive", "cns-positive-csf-negative", "cns-negative"]
[[variables]]
name = "regimen"
type = "enum"
options = ["arm-c1-cns-positive", "arm-c3", "arm-c1-cns-negative"]
[[variables]]
name = "cop_response"
type = "text"
[[variables]]
name = "consolidation_response"
type = "enum"
options = ["cr", "less-than-cr"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-9, p14
- Burkitt lymphoma and diffuse large B-cell lymphoma
- Applies to risk assessment Group C only (definitions on PBCL-5)
- The addition of rituximab is a category 1 recommendation for patients with high-risk Group B and Group C disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Risk assessment confirmed as Group C, per definitions on PBCL-5
- CNS / CSF status: ___ (cns_status)
    - CNS positive means lymphomatous CNS or parameningeal disease
    - CSF positive means lymphoma cells in the CSF

# Induction therapy / initial treatment

- Supportive care planned alongside induction
    - Principles of Supportive Care (PBCL-D)
- Regimen selected: ___ (regimen)
- CNS positive, CSF positive
    - COG ANHL1131 (Arm C1 CNS positive regimen) + rituximab (category 1)
    - or COG ANHL1131 (Arm C3 regimen) + rituximab (category 1)
    - COG protocol ANHL1131 treated patients with CSF positive disease on arm C3
    - The relative efficacy of the arm C1 and arm C3 regimens has not been evaluated, so either regimen is an acceptable choice for CSF positive patients
- CNS positive, CSF negative
    - COG ANHL1131 (Arm C1 CNS positive regimen) + rituximab (category 1)
- CNS negative
    - COG ANHL1131 (Arm C1 CNS negative regimen) + rituximab (category 1)
- Rituximab per Principles of Systemic Therapy (PBCL-B)
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy

# Response assessment after COP reduction phase

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
    - Bone marrow and CSF studies should also be performed if bone marrow or CSF were initially involved
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Reduction following COP recorded: ___ (cop_response)
- Continue same chemotherapy regimen
- If <20% reduction following COP, consider changing to regimen C3

# Response assessment after second consolidation cycle

- Grade the response against the Response Criteria (PBCL-C)
- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
    - Bone marrow and CSF studies should also be performed if bone marrow or CSF were initially involved
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Response recorded: ___ (consolidation_response)

# Next

- Complete response (CR), give two maintenance cycles, then go to Surveillance (PBCL-10)
- Less than complete response (<CR), go to Relapse or Refractory Disease (PBCL-11)
    - Repeat biopsy of residual mass should be considered prior to additional therapy
