+++
id           = "ped_all/PEDALL-10"
gid          = "ped_all"
ref          = "PEDALL-10"
page         = 24
title        = "T-ALL first relapse disease: treatment, response, and consolidation therapy"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-8", "PEDALL-11", "PEDALL-G", "PEDALL-C", "PEDALL-K"]

[facets]
disease   = "ped_all"
histology = ["lymphoblastic", "t-cell"]
stage     = "recurrent"
timepoint = ["relapsed-refractory", "consolidation", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relapse_site"
type = "enum"
options = ["bone marrow", "isolated CNS", "isolated testicular", "combined"]
[[variables]]
name = "time_from_diagnosis"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "less than CR"]
[[variables]]
name = "mrd_status"
type = "enum"
options = ["MRD negative", "MRD positive", "not assessed"]
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-10, p24
- Applies to T-ALL first relapse disease
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, T-ALL, first relapse
- Site of relapse ___ (relapse_site)
- Time from initial diagnosis to relapse ___ (time_from_diagnosis)
- Response to relapse treatment ___ (response)
- MRD status ___ (mrd_status)

# Treatment

- Clinical trial (preferred)
- Systemic therapy, see Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - If relapse is >3 months from initial diagnosis, consider treatment with the same induction regimen
    - For T-ALL, see PEDALL-G (2 of 13)
- Isolated extramedullary relapse, both CNS and testicular, requires systemic therapy to prevent relapse in marrow
- Supportive care throughout, see Principles of Supportive Care (PEDALL-C)
- See NCCN Guidelines for Palliative Care

# Response

- CR, go to consolidation therapy
- Less than CR, go to Multiple Relapsed/Refractory Disease (PEDALL-11)

# Consolidation therapy, if CR

- Clinical trial (preferred)
- Chemotherapy, see Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
- HCT, see Principles of Hematopoietic Cell Transplant (PEDALL-K)
    - For MRD-positive second CR, an additional 1-2 courses of therapy to achieve an MRD-negative result prior to allogeneic HCT is recommended
    - Some patients may not be able to achieve MRD negativity, and proceeding to allogeneic HCT should be considered

# Next

- Less than CR, go to Multiple Relapsed/Refractory Disease (PEDALL-11)
