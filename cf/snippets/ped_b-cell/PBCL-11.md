+++
id           = "ped_b-cell/PBCL-11"
gid          = "ped_b-cell"
ref          = "PBCL-11"
page         = 16
title        = "Relapsed or refractory Burkitt lymphoma / DLBCL: second-line treatment, response, and consolidation"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-3", "PBCL-B", "PBCL-C", "PBCL-D"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
stage     = ["recurrent", "refractory"]
timepoint = ["relapsed-refractory", "consolidation", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["relapse", "refractory"]
[[variables]]
name = "initial_group"
type = "text"
[[variables]]
name = "prior_cyve"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "treatment"
type = "enum"
options = ["clinical-trial", "cyve-rituximab", "ice-rituximab"]
[[variables]]
name = "response"
type = "enum"
options = ["cr", "pr", "less-than-pr"]
[[variables]]
name = "consolidation"
type = "text"
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-11, p16
- Burkitt lymphoma and diffuse large B-cell lymphoma, relapse or refractory disease
- Supportive care runs alongside treatment and consolidation, Principles of Supportive Care (PBCL-D)
- It is rare for patients with Group A disease at initial diagnosis to relapse
    - There are little data and no proven established treatment option for these patients
    - Transplant is usually not considered
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Disease status ___ (disease_status)
- Risk group at initial diagnosis ___ (initial_group)
- CYVE already received as part of initial therapy ___ (prior_cyve)
- Bone marrow involved at initial diagnosis
- CSF involved at initial diagnosis

# Treatment

- Clinical trial (preferred)
- or CYVE + rituximab, if not previously received as part of initial therapy
    - Principles of Systemic Therapy (PBCL-B)
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- or ICE + rituximab
    - Principles of Systemic Therapy (PBCL-B)
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- Patients with a low risk of relapse, options that can be considered
    - Defined as patients with initial Group A disease, or patients with Group B low-risk disease (Stage I or II) treated along POG9219
    - COG ANHL 1131 (Arm C1 regimen)
    - or 2 cycles of R-CYVE without consolidative transplant
- Treatment selected ___ (treatment)

# Response assessment

- Reassess sites of original disease with imaging studies as indicated (PBCL-3)
- Bone marrow and CSF studies should also be performed if bone marrow or CSF were initially involved
- FDG-PET/CT or FDG-PET/MRI may be considered, if not obtained as part of diagnostic evaluation
    - FDG-PET should not replace imaging with contrast-enhanced diagnostic-quality CT or MRI
    - A patient's therapy should not be escalated based on FDG-PET alone
    - If a residual lesion is FDG-PET negative (Deauville 1, 2, or 3; PBCL-C 2 of 2), biopsy is not necessary
    - In the absence of clinical concern, FDG-PET does not need to be repeated once it is negative
    - False negatives are unusual
    - False positives are common
- Grade the response against the Response Criteria (PBCL-C)
- Response recorded ___ (response)

# Consolidation / additional therapy

- Complete response (CR)
    - Autologous hematopoietic cell transplant (HCT)
    - or allogeneic HCT
    - Patients with late relapse from early-stage disease after a CR to relapse-refractory therapy may not require consolidation with transplant
- Partial response (PR)
    - Clinical trial
    - or autologous HCT
    - or allogeneic HCT
    - or best supportive care
- Less than partial response (<PR)
    - Clinical trial
    - or best supportive care
- If a clinical trial is chosen
    - Second-line therapy for relapsed/refractory disease should be in a clinical trial with incorporation of an investigational agent
    - Regimens and agents used for adults with relapsed/refractory DLBCL can also be considered, see NCCN Guidelines for B-Cell Lymphomas
- If transplant is chosen
    - There are no data to support autologous versus allogeneic HCT
    - The decision regarding transplant should be based on physician preference and the availability of a suitable donor
        - HLA-matched related donor
        - HLA-matched unrelated donor
        - Cord blood or haploidentical donor
    - For conditioning therapy, institutions can use their center's choice of myeloablative regimen
        - Retrospective studies showed efficacy of many regimens, eg, busulfan-cyclophosphamide, etoposide
        - BEAM (carmustine, etoposide, cytarabine, melphalan)
        - CBVlow (low-dose cyclophosphamide, carmustine, etoposide)
- Supportive care alongside consolidation, Principles of Supportive Care (PBCL-D)
- Consolidation planned ___ (consolidation)
