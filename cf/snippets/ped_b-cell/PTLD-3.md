+++
id           = "ped_b-cell/PTLD-3"
gid          = "ped_b-cell"
ref          = "PTLD-3"
page         = 45
title        = "First-line and second-line therapy for PTLD, chosen by PTLD subtype and initial response"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PTLD-1", "PTLD-2", "PTLD-4", "PTLD-B", "PBCL-D"]

[facets]
disease   = "ped_b-cell"
biomarker = "cd20"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ptld_subtype"
type = "enum"
options = ["hyperplastic-nd-ptld", "p-ptld", "m-ptld", "primary-cns-ptld"]
[[variables]]
name = "cd20"
type = "text"
[[variables]]
name = "ebv_pcr"
type = "text"
[[variables]]
name = "immunosuppression"
type = "text"
[[variables]]
name = "graft_function"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["cr", "pr", "persistent", "progressive", "pending"]

+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PTLD-3, p45
- Pediatric Post-Transplant Lymphoproliferative Disorders
- Treatment is chosen by PTLD subtype, then re-chosen by initial response
- Principles of Supportive Care (PBCL-D) applies to both first-line and follow-up/second-line therapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- PTLD subtype: ___ (ptld_subtype)
- CD20 expression by flow cytometry: ___ (cd20)
    - The status and pattern of CD20 expression by flow cytometry should be reported in all subtypes of PTLD
- EBV PCR: ___ (ebv_pcr)
    - EBV viral load cannot be used for response assessment in PTLD
- Current immunosuppressive therapy: ___ (immunosuppression)
- Graft organ function: ___ (graft_function)
- Initial response to first-line therapy: ___ (response)

# First-line therapy, hyperplastic ND-PTLD

- Treatment is based on the unique histology
- Reduction of immunosuppression (RIS)
    - Reduction in calcineurin inhibition (cyclosporin and tacrolimus)
    - Discontinuation of antimetabolic agents (azathioprine and mycophenolate mofetil)
    - Consider discontinuation of non-glucocorticoid immunosuppression in patients who are critically ill
    - Response to RIS is variable and patients need to be closely monitored
    - Collaboration with a graft transplant specialist is recommended to coordinate immunosuppressive medication assessment, dose modifications, and graft organ function monitoring

# First-line therapy, P-PTLD

- RIS, if possible
    - Reduction in calcineurin inhibition (cyclosporin and tacrolimus)
    - Discontinuation of antimetabolic agents (azathioprine and mycophenolate mofetil)
    - Consider discontinuation of non-glucocorticoid immunosuppression in patients who are critically ill
    - Response to RIS is variable and patients need to be closely monitored
    - Collaboration with a graft transplant specialist is recommended to coordinate immunosuppressive medication assessment, dose modifications, and graft organ function monitoring
- and/or one of the following
    - Surgery, with or without rituximab
        - Completely resected PTLD without disease elsewhere can be managed without additional therapy, with the exception of RIS
    - Rituximab
        - Rituximab can be used if CD20 is only partially or dimly expressed
        - Rituximab is not essential for CD20-negative PTLD
    - Chemoimmunotherapy
        - Suggested Treatment Regimens (PTLD-B)
- Clinical trial

# Follow-up/second-line therapy, hyperplastic ND-PTLD

- CR
    - Manage immunosuppression, and monitor EBV PCRs and graft organ function
        - Re-escalation of immunosuppressive therapy should be individualized, taking into account the extent of initial RIS and the nature of the organ allograft
        - Collaboration with a graft transplant specialist is recommended to coordinate immunosuppressive medication assessment, dose modifications, and graft organ function monitoring
- PR, persistent or progressive disease
    - Rebiopsy should be considered prior to additional therapy
    - Monitor EBV PCRs and one of the following
        - Rituximab
            - Rituximab can be used if CD20 is only partially or dimly expressed, and is not essential for CD20-negative PTLD
        - Chemoimmunotherapy
            - Suggested Treatment Regimens (PTLD-B)

# Follow-up/second-line therapy, P-PTLD

- CR
    - Monitor EBV PCRs and one of the following
        - Observation
        - Continue RIS as tolerated, and graft organ function monitoring
            - Collaboration with a graft transplant specialist is recommended to coordinate immunosuppressive medication assessment, dose modifications, and graft organ function monitoring
- PR, persistent or progressive disease
    - Rebiopsy should be considered prior to additional therapy
    - Clinical trial
    - Chemotherapy or chemoimmunotherapy, not previously used for first-line therapy
        - Suggested Treatment Regimens (PTLD-B)
    - EBV-specific cytotoxic T-cell therapy, only in the context of a clinical trial

# Next

- M-PTLD, go to PTLD-4
- Primary CNS-PTLD, go to PTLD-4
