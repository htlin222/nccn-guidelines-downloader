+++
id           = "waldenstroms/AL-1"
gid          = "waldenstroms"
ref          = "AL-1"
page         = 16
title        = "Therapy for WM-related systemic light chain amyloidosis, primary and previously treated"
nccn_version = "1.2027"
nccn_date    = "08/11/26"
generated    = "2026-08-27"
see_also     = ["LPL-3", "AL-2"]

[facets]
disease   = "waldenstroms"
biomarker = "amyloid"
timepoint = ["primary-treatment", "relapsed-refractory", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "line"
type = "enum"
options = ["primary", "previously-treated"]
[[variables]]
name = "igm"
type = "text"
[[variables]]
name = "neuropathy"
type = "enum"
options = ["none", "significant"]
[[variables]]
name = "cardiac"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "prior_zanubrutinib"
type = "enum"
options = ["none", "intolerant", "progressed"]
+++

# Source

- NCCN Waldenstrom Macroglobulinemia/Lymphoplasmacytic Lymphoma v1.2027, AL-1, p16
- Applies to WM-related systemic light chain amyloidosis (SLCA)
- Covers two settings: primary therapy, and therapy for previously treated disease
- For General Considerations for Systemic Therapy for SLCA, see NCCN Guidelines for Systemic Light Chain Amyloidosis
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, WM-related systemic light chain amyloidosis (SLCA)
- Treatment setting ___ (line)
- IgM ___ (igm) mg/dL
- Significant neuropathy ___ (neuropathy)
- Cardiac amyloidosis ___ (cardiac)
- Prior zanubrutinib ___ (prior_zanubrutinib)

# Primary therapy for WM-related SLCA

- Hold rituximab for the initial cycle(s) of treatment if IgM is ≥4000 mg/dL
- Bendamustine + Rituximab
- Cyclophosphamide/Dexamethasone + Rituximab
- For patients with no significant neuropathy
    - Bortezomib/Cyclophosphamide/Dexamethasone + Rituximab
    - Bortezomib/Dexamethasone + Rituximab
    - Ixazomib/Dexamethasone + Rituximab
    - Dose reduce or discontinue bortezomib or ixazomib if significant neuropathy
    - Subcutaneous, weekly bortezomib is preferred

# Therapy for previously treated WM-related SLCA

- Consider repeat bone marrow biopsy to verify the underlying clonal disease in those with relapsed/refractory disease
    - Refer to NCCN Guidelines for Systemic Light Chain Amyloidosis if a plasma cell clone is identified
- Preferred
    - Bortezomib/Dexamethasone + Rituximab
        - Dose reduce or discontinue bortezomib if significant neuropathy
        - Subcutaneous, weekly bortezomib is preferred
    - Bortezomib/Cyclophosphamide/Dexamethasone + Rituximab
        - Dose reduce or discontinue bortezomib if significant neuropathy
        - Subcutaneous, weekly bortezomib is preferred
    - Cyclophosphamide/Dexamethasone + Rituximab
    - Ixazomib/Dexamethasone + Rituximab
        - Dose reduce or discontinue ixazomib if significant neuropathy
    - Bendamustine + Rituximab
    - Venetoclax
- Useful in certain circumstances
    - Refer to systemic therapy for WM/LPL for additional treatment options for WM-related SLCA
    - Zanubrutinib
        - Limited data are available to support the use of BTKis in amyloidosis, but their use could be considered in those with limited treatment options
        - Use with caution, especially in those with cardiac amyloidosis
    - Pirtobrutinib
        - Limited data are available to support the use of BTKis in amyloidosis, but their use could be considered in those with limited treatment options
        - Use with caution, especially in those with cardiac amyloidosis
        - Limit use to patients who are unable to tolerate, or whose disease progressed on, zanubrutinib
    - Autologous HCT
        - For autologous HCT, see NCCN Guidelines for Systemic Light Chain Amyloidosis
        - Consider melphalan or BEAM (carmustine/etoposide/cytarabine/melphalan) as conditioning regimen

# Next

- Plasma cell clone identified on repeat bone marrow biopsy, refer to NCCN Guidelines for Systemic Light Chain Amyloidosis
- Additional treatment options needed, see systemic therapy for WM/LPL
