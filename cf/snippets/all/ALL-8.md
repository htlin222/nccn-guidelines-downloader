+++
id           = "all/ALL-8"
gid          = "all"
ref          = "ALL-8"
page         = 20
title        = "Treatment of relapsed/refractory ALL, by subtype"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-1", "ALL-4", "ALL-5", "ALL-6", "ALL-7"]

[facets]
disease   = "all"
histology = "lymphoblastic"
stage     = ["recurrent", "refractory"]
biomarker = ["ph-positive", "ph-negative"]
timepoint = ["relapsed-refractory", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subtype"
type = "enum"
options = ["Ph+ B-ALL", "Ph- B-ALL", "T-ALL"]
[[variables]]
name = "time_from_diagnosis"
type = "text"
[[variables]]
name = "relapse_site"
type = "text"
[[variables]]
name = "prior_hct"
type = "text"
[[variables]]
name = "prior_cellular_therapy"
type = "text"
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-8, p20
- Applies to relapsed/refractory ALL
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ALL subtype ___ (subtype)
- Time from initial diagnosis ___ (time_from_diagnosis)
- Site of relapse, marrow and/or extramedullary ___ (relapse_site)
- Prior allogeneic HCT ___ (prior_hct)
- Prior cellular therapy ___ (prior_cellular_therapy)

# Ph+ B-ALL

- ABL1 kinase domain molecular testing
    - Testing may be less sensitive in the setting of minimal disease burden
    - See Mutation Profile Principles (ALL-D 2 of 29) for treatment options based on BCR::ABL1 mutation profile
- Clinical trial
- Relapsed/refractory regimens (ALL-D 24 of 29)

# Ph- B-ALL

- Molecular analysis and MRD assessment, if not previously done (ALL-1) (ALL-F)
- Clinical trial
- Relapsed/refractory regimens (ALL-D 26 of 29)
    - For patients in late relapse, more than 3 years from initial diagnosis, consider treatment with the same regimen used at initial diagnosis
    - For Ph-negative B-ALL, see ALL-D 10 of 29

# T-ALL

- Clinical trial (preferred)
- Relapsed/refractory regimens (ALL-D 28 of 29)
    - For patients in late relapse, more than 3 years from initial diagnosis, consider treatment with the same regimen used at initial diagnosis
    - For T-ALL, see ALL-D 17 of 29

# Extramedullary relapse and CNS prophylaxis

- Isolated extramedullary relapse, including CNS and testicular, requires systemic therapy to prevent relapse in marrow
- Consider CNS prophylaxis for relapsed/refractory disease
    - The role of CNS prophylaxis in the setting of cellular therapy is still being studied

# Supportive care

- NCCN Guidelines for Palliative Care

# Next

- Consider HCT, see Principles of Allogeneic Hematopoietic Cell Transplant (ALL-G)
    - If second remission is achieved prior to HCT and patient has not had a prior HCT, consolidative HCT is recommended
    - The role of allogeneic HCT following cellular therapy is unclear
    - For patients with relapsed disease after allogeneic HCT, a second allogeneic HCT and/or donor lymphocyte infusion (DLI) can be considered
