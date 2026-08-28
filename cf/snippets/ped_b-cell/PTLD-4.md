+++
id           = "ped_b-cell/PTLD-4"
gid          = "ped_b-cell"
ref          = "PTLD-4"
page         = 46
title        = "First-line and second-line therapy for monomorphic PTLD subtypes and primary CNS PTLD"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PTLD-1", "PTLD-2", "PTLD-3", "PTLD-B", "PBCL-D"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "t-cell", "nk-cell", "plasma-cell", "hodgkin"]
biomarker = "cd20"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "graft_organ"
type = "text"
[[variables]]
name = "subtype"
type = "enum"
options = ["burkitt-type", "non-burkitt-type", "t-nk-cell-type", "plasmacytic-type", "chl-type", "primary-cns"]
[[variables]]
name = "cd20"
type = "text"
[[variables]]
name = "immunosuppression"
type = "text"
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["cr", "pr", "persistent", "progressive", "pending"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PTLD-4, p46
- First-line therapy, initial response, and follow-up/second-line therapy for monomorphic PTLD (M-PTLD) and primary CNS PTLD
- Treatment is based on the unique histology
- Principles of Supportive Care (PBCL-D)
- Suggested Treatment Regimens (PTLD-B)
- Rituximab can be used if CD20 is only partially or dimly expressed, but is not essential for CD20-negative PTLD
    - The status and pattern of CD20 expression by flow cytometry should be reported in all subtypes of PTLD
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Graft organ allograft: ___ (graft_organ)
- PTLD subtype: ___ (subtype)
- CD20 status and pattern of expression by flow cytometry: ___ (cd20)
- Current immunosuppression: ___ (immunosuppression)
- Prior PTLD therapy already given: ___ (prior_therapy)
- Initial response: ___ (response)

# Reduction in immunosuppression (RIS)

- RIS, if possible
- RIS consists of
    - Reduction in calcineurin inhibition (cyclosporin and tacrolimus)
    - Discontinuation of antimetabolic agents (azathioprine and mycophenolate mofetil)
    - Consider discontinuation of non-glucocorticoid immunosuppression in patients who are critically ill
- Response to RIS is variable and patients need to be closely monitored
- Collaboration with a graft transplant specialist is recommended, to coordinate
    - Immunosuppressive medication assessment
    - Dose modifications
    - Graft organ function monitoring

# First-line therapy by subtype

- M-PTLD (B-cell type, Burkitt lymphoma-type)
    - RIS, if possible
    - Treatment for BL (PBCL-6 through PBCL-9)
- M-PTLD (B-cell type, non-Burkitt lymphoma-type)
    - RIS, if possible
    - With or without surgery
        - Completely resected PTLD without disease elsewhere can be managed without additional therapy, with the exception of RIS
    - And/or rituximab
    - And/or chemoimmunotherapy (PTLD-B)
    - Clinical trial
- M-PTLD (T/NK-cell type or plasmacytic-type)
    - Other than reduction of RIS, there are no established treatment options
    - T/NK-cell type: HDT/ASCR may not be appropriate
        - Treatment should be individualized based on histologic subtype and the nature of the organ allograft
    - Plasmacytic PTLD: multiple myeloma type treatment can be considered for aggressive/refractory disease
- M-PTLD (CHL-type)
    - RIS, if possible
    - Treatment for CHL, see NCCN Guidelines for Pediatric Hodgkin Lymphoma
- Primary CNS PTLD (B-cell type)
    - High-dose or IT methotrexate + rituximab
        - IT rituximab can be considered in selected cases, however there are very limited data to support its use
    - Chemoimmunotherapy (PTLD-B) + high-dose or IT methotrexate
    - High-dose cytarabine, with or without high-dose methotrexate, with or without rituximab (category 2B)
    - RT for selected cases

# Initial response

- EBV viral load cannot be used for response assessment in PTLD
- CR
- PR, persistent, or progressive disease
    - Rebiopsy should be considered prior to additional therapy

# Next

- CR
    - See appropriate histologic subtype for follow-up (PBCL-10 or PMBCL-1)
    - Or RIS and graft organ function monitoring
- PR, persistent, or progressive disease
    - Clinical trial
    - If RIS with or without surgery was initial therapy, then rituximab or chemoimmunotherapy or chemotherapy (PTLD-B)
    - If RIS with or without surgery and rituximab or chemoimmunotherapy was initial therapy, then chemotherapy or chemoimmunotherapy not previously used for first-line therapy (PTLD-B)
    - EBV-specific cytotoxic T-cell therapy, only in the context of a clinical trial
