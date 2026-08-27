+++
id           = "cutaneous_lymphomas/SPTCL-2"
gid          = "cutaneous_lymphomas"
ref          = "SPTCL-2"
page         = 56
title        = "First-line therapy and response assessment for SPTCL with HLH, systemic disease, or high tumor burden"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["SPTCL-1", "SPTCL-3"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "t-cell"
timepoint = ["primary-treatment", "maintenance", "relapsed-refractory", "transplant"]

[[variables]]
name = "hlh"
type = "enum"
options = ["present", "absent", "suspected"]
[[variables]]
name = "systemic_disease"
type = "text"
[[variables]]
name = "tumor_burden"
type = "enum"
options = ["high", "low"]
[[variables]]
name = "transplant_eligible"
type = "enum"
options = ["yes", "no", "undetermined"]
[[variables]]
name = "first_line_regimen"
type = "text"
[[variables]]
name = "prior_therapies"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "PR", "inadequate response", "relapse", "refractory"]
+++

# Source

- NCCN Subcutaneous Panniculitis-Like T-Cell Lymphoma v2.2026, SPTCL-2, p56
- Applies to SPTCL with HLH, systemic disease, or high tumor burden (widespread subcutaneous disease)
- SPTCL without HLH and low tumor burden (localized or limited subcutaneous disease) is handled on SPTCL-3
- Diagnosis and workup: SPTCL-1
- All recommendations are category 2A unless otherwise indicated

# Assessment

- HLH: ___ (hlh)
- Systemic disease: ___ (systemic_disease)
- Tumor burden: ___ (tumor_burden)
- Eligible for transplant: ___ (transplant_eligible)
- First-line regimen given: ___ (first_line_regimen)
- Prior therapies: ___ (prior_therapies)
- Response: ___ (response)

# First-line therapy

- Consider ISRT for single lesion or limited disease, with or without symptoms or HLH
- Start with etoposide-based regimens to control HLH first, then move to disease-specific therapies
- Consider single agents with or without prednisone
    - Cyclosporine (≥5 mg/kg/day)
        - Oral cyclosporine is typically initiated at 3–5 mg/kg/day in divided doses
        - Higher dosage may be necessary to achieve disease control
        - Dose adjustment is based on response and tolerance
        - In patients with disease responding to first-line therapy, consider slow tapering as tolerated or cyclosporine maintenance
    - Pralatrexate
    - Romidepsin
- or Consider etoposide-based combination chemotherapy
    - Consider etoposide-based combination regimens for patients eligible for transplant
    - CHOEP
    - DA-EPOCH
    - ESHA + platinum (cisplatin or oxaliplatin)
    - ICE

# Response assessment and additional therapy: CR or PR

- Observation
- or Maintenance therapy with single agents
    - Patients with disease achieving a clinical benefit and/or those with disease responding to first-line therapy should be considered for maintenance or tapering of regimens to optimize response duration
    - Cyclosporine
    - Pralatrexate
    - Romidepsin
    - Methotrexate (PO/SC/IM)
    - Bexarotene (PO)
- or Consider allogeneic HCT in selected patients
- On relapse after CR or PR, retreat with same regimen or alternate regimen not used in first-line therapy

# Inadequate response, or relapse or refractory disease after multiple previous therapies

- Clinical trial
- or Consider allogeneic HCT in selected patients
- or Alternate regimens, see NCCN Guidelines for T-Cell Lymphomas - Initial Palliative-Intent Therapy PTCL-NOS (PTCL-B 2 of 8)

# Next

- CR or PR, observation or maintenance therapy with single agents, or consider allogeneic HCT in selected patients
- Relapse after CR or PR, retreat with same regimen or alternate regimen not used in first-line therapy
- Inadequate response, use the clinical trial / allogeneic HCT / alternate regimen options above
- Relapse or refractory disease after multiple previous therapies, use the same options above
- SPTCL without HLH and low tumor burden, go to SPTCL-3
