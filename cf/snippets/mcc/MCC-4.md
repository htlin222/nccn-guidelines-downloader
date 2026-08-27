+++
id           = "mcc/MCC-4"
gid          = "mcc"
ref          = "MCC-4"
page         = 11
title        = "Workup and treatment of clinical N+ regional or in-transit Merkel cell carcinoma"
nccn_version = "2.2026"
nccn_date    = "10/24/2025"
generated    = "2026-08-27"
see_also     = ["MCC-2", "MCC-3", "MCC-5", "MCC-6", "MCC-A", "MCC-B", "MCC-D"]

[facets]
disease   = "mcc"
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "nodal_basin"
type = "text"
[[variables]]
name = "intransit"
type = "text"
[[variables]]
name = "node_biopsy"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "m_status"
type = "enum"
options = ["M0", "M1"]
+++

# Source

- NCCN Merkel Cell Carcinoma v2.2026, MCC-4, p11
- Applies to clinical N+ disease, that is regional MCC or in-transit disease
- Multidisciplinary consultation recommended at center with specialized expertise
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary tumor site: ___ (primary_site)
- Clinically involved nodal basin: ___ (nodal_basin)
- In-transit disease: ___ (intransit)
- FNA or core biopsy of node: ___ (node_biopsy)
- Distant disease: ___ (m_status)

# Workup

- Management of the draining nodal basin
    - Fine-needle aspiration (FNA) or core biopsy with appropriate immunopanel, see Principles of Pathology (MCC-A)
    - Imaging studies recommended
        - Whole-body FDG-PET/CT, preferred at initial workup
        - Or CT with contrast of chest, abdomen, pelvis, and neck if primary on head/neck
        - MRI of the brain with and without contrast if clinical suspicion of brain metastases or direct extension
- And/or management of in-transit disease
    - Biopsy confirmation, see Principles of Pathology (MCC-A)
- Management of the primary tumor, see MCC-2 and MCC-3

# Clinical findings of the draining nodal basin

- Positive
    - M0, treat the nodal basin as below
    - M1, go to MCC-5
- Negative
    - Radiographic surveillance or excisional biopsy
        - An excisional biopsy may be considered to confirm a negative initial FNA or core LN biopsy if clinical suspicion remains high
    - Follow appropriate Clinical N0 pathway, MCC-2 and MCC-3

# Treatment of node-positive M0 disease

- Node dissection + RT (preferred)
    - RT per Principles of Radiation Therapy (MCC-B)
    - Appropriateness of RT should be determined together with a radiation oncologist
- Or node dissection or RT
    - RT per Principles of Radiation Therapy (MCC-B)
    - Appropriateness of RT should be determined together with a radiation oncologist

# Additional treatment after nodal treatment

- Clinical trial preferred if available
- Consider systemic therapy, see Principles of Systemic Therapy (MCC-D)

# Treatment of in-transit disease

- Clinical trial
- Surgery or RT
    - RT per Principles of Radiation Therapy (MCC-B)
    - Appropriateness of RT should be determined together with a radiation oncologist
- Systemic therapy, see Principles of Systemic Therapy (MCC-D)
- Additional local considerations if curative surgery and/or RT are not feasible
    - T-VEC, intralesional talimogene laherparepvec, useful in certain circumstances
    - Hyperthermic isolated limb infusion/perfusion, useful in certain circumstances
        - Per Thiels CA, et al. J Surg Oncol 2016;114:187-192

# Next

- M1 disease, go to MCC-5
- Node biopsy negative, follow appropriate Clinical N0 pathway, MCC-2 and MCC-3
- After treatment, follow-up, go to MCC-6
