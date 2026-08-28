+++
id           = "ped_hodgkin/PHL-5A"
gid          = "ped_hodgkin"
ref          = "PHL-5A"
page         = 19
title        = "Primary treatment and response-adapted additional treatment for stage III-IV CHL, continued from PHL-5"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-5", "PHL-5B", "PHL-8", "PHL-9", "PHL-A", "PHL-C", "PHL-E", "PHL-F", "PHL-G"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["III", "IV"]
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "cpi_status"
type = "enum"
options = ["able to receive CPI", "unable to receive or tolerate CPI"]
[[variables]]
name = "regimen"
type = "enum"
options = ["Bv-AVD", "ABVE-PC", "BrECADD", "adult regimen"]
[[variables]]
name = "response"
type = "enum"
options = ["adequate", "inadequate"]
[[variables]]
name = "early_response"
type = "enum"
options = ["RER", "SER"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-5A, p19
- Primary treatment of stage III-IV classic Hodgkin lymphoma (CHL), continued from PHL-5
- Regimens are based off of studies with pediatric data
- Systemic therapy per Principles of Systemic Therapy (PHL-E)
- For growth factor recommendations, see Select Principles of Supportive Care (PHL-G)
- Response criteria per Principles of Criteria for Response-Adapted Radiation Therapy (PHL-A)
- Footnotes on PHL-5B
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- CHL, stage ___ (stage)
- Able to receive a checkpoint inhibitor (CPI): ___ (cpi_status)
- Regimen selected: ___ (regimen)
- Response assessment result: ___ (response)
- Early response category: ___ (early_response)

# Primary treatment, useful in certain circumstances

- Bv-AVD x 6 cycles (S1826)
    - Only if unable to receive or tolerate a checkpoint inhibitor (CPI)
    - PJP prophylaxis is recommended for all Bv-containing regimens
    - This regimen has only been studied in patients aged 12 years and older with stage III-IV disease
- Or ABVE-PC x 2 cycles (category 2B) (AHOD0031)
    - Stage IIIA only
- Or consider BrECADD or additional adult regimens if aged >18 y
    - BrECADD regimen = brentuximab vedotin, etoposide, cyclophosphamide, doxorubicin, dacarbazine, and dexamethasone
    - See NCCN Guidelines for Hodgkin Lymphoma (Adult)

# Response assessment

- FDG-PET/CT or FDG-PET/MRI
- And contrast-enhanced diagnostic CT or MRI of original sites of disease
    - Only if those sites are not included with the FDG-PET
    - And only if the treatment approach includes need for assessment of anatomic sites of disease for evaluation of response
- See Principles of Imaging (PHL-C)
- Score the response per Principles of Criteria for Response-Adapted Radiation Therapy (PHL-A)

# Additional treatment after Bv-AVD x 6 cycles

- Adequate response
    - See Follow-up (PHL-8)
- Inadequate response
    - Consider RSRT to sites of inadequate response, per Principles of Radiation Therapy (PHL-F)
    - Or see Therapy for relapsed or refractory disease (PHL-9)

# Additional treatment after ABVE-PC x 2 cycles, stage IIIA only

- Adequate response, RER (rapid early response)
    - ABVE-PC x 2 cycles
    - Then end of therapy assessment, imaging as above
    - See Follow-up (PHL-8)
    - Or if less than CR, ISRT to all sites
        - ISRT can safely replace IFRT (PHL-F)
        - Per Principles of Radiation Therapy (PHL-F)
- Inadequate response, SER (slow early response)
    - ABVE-PC x 2 cycles
    - ISRT
        - ISRT can safely replace IFRT (PHL-F)
        - Per Principles of Radiation Therapy (PHL-F)
    - Then end of therapy assessment, imaging as above
    - See Follow-up (PHL-8)
    - Or if concern for persistent disease, see Therapy for relapsed or refractory disease (PHL-9)

# Next

- After Bv-AVD x 6 cycles with adequate response, see Follow-up (PHL-8)
- After Bv-AVD x 6 cycles with inadequate response, consider RSRT to sites of inadequate response, or see Therapy for relapsed or refractory disease (PHL-9)
- After ABVE-PC and end of therapy assessment, see Follow-up (PHL-8)
- If concern for persistent disease at end of therapy assessment, see Therapy for relapsed or refractory disease (PHL-9)
- If aged >18 y, consider BrECADD or additional adult regimens, see NCCN Guidelines for Hodgkin Lymphoma (Adult)
