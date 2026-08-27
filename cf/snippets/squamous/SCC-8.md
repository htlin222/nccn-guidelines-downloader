+++
id           = "squamous/SCC-8"
gid          = "squamous"
ref          = "SCC-8"
page         = 18
title        = "Clinical staging and preoperative assessment of regional nodes, and primary treatment"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-10", "SCC-11", "SCC-B", "SCC-C", "SCC-D"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = ["staging", "primary-treatment"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "enum"
options = ["head and neck", "trunk", "extremities"]
[[variables]]
name = "nodal_basin"
type = "text"
[[variables]]
name = "node_findings"
type = "text"
[[variables]]
name = "immune_status"
type = "text"
[[variables]]
name = "bone_invasion"
type = "text"
[[variables]]
name = "biopsy_result"
type = "text"
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-8, p18
- Applies to palpable regional lymph node(s), or abnormal lymph nodes identified by imaging studies
- Primary treatment follows Principles of Treatment (SCC-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary tumor site ___ (primary_site)
- Nodal basin ___ (nodal_basin)
- Palpable regional lymph node(s), or abnormal lymph nodes identified by imaging studies ___ (node_findings)
    - If the patient is immunosuppressed, consider modification or reduction of immunosuppression as appropriate
    - Identification and Management of Patients at High Risk for Multiple Primary CSCCs (SCC-B)
- Immunosuppression ___ (immune_status)
- Bone invasion ___ (bone_invasion)

# Nodal biopsy

- Fine needle aspiration (FNA) or core biopsy
    - Ultrasound-guided biopsy by a center or physician with expertise is recommended
    - Core biopsy may be preferred over FNA in cases where primary tumor histology is uncertain
    - Core biopsy may be preferred over FNA if a larger tissue sample is required for further genetic or other testing
- Biopsy result ___ (biopsy_result)

# If the biopsy is negative

- Consider re-evaluation
    - Clinical exam
    - CT with contrast of the nodal basin
    - Repeat fine needle aspiration (FNA), core biopsy, or excisional biopsy
        - An excisional biopsy may be considered to confirm a negative initial FNA or core lymph node biopsy if clinical suspicion remains high
- Re-evaluation negative, go to Follow-up (SCC-11)
- Re-evaluation positive, follow the positive-node path below

# If the biopsy is positive

- Head and neck primary, go to Regional Lymph Nodes (SCC-10)
- Trunk and extremities primary, complete imaging
    - CT with contrast of the nodal basin, to determine size, number, and location of nodes
    - Chest/abdomen/pelvis CT with contrast, or FDG-PET/CT, as clinically indicated to rule out distant disease
    - MRI with and without contrast of the brain may be considered to rule out subclinical cortical involvement in cases with bone invasion
- Surgical and clinical trial evaluation
    - Regional lymph node dissection is preferred unless the patient is not a surgical candidate
    - Cemiplimab-rwlc, in one study of 79 patients with CSCC, showed a 51% complete histologic response in the neoadjuvant setting
    - Cemiplimab-rwlc may therefore be considered in patients who are considered borderline resectable, unresectable, or for whom surgery may carry a high morbidity

# Primary treatment, operable disease

- Excision of primary tumor and regional lymph node dissection
- Consider RT, especially if multiple involved nodes or extranodal extension (ENE) is present
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist

# Primary treatment, unresectable, inoperable, or incompletely resected disease

- Multidisciplinary consultation to discuss options
- Option: RT with or without systemic therapy
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
    - Consider palliative RT/surgery for symptomatic sites
    - Stereotactic body RT (SBRT) may also be considered in select patients
    - Systemic therapy per Principles of Systemic Therapy
- Option: systemic therapy if curative RT is not feasible
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
    - Systemic therapy per Principles of Systemic Therapy

# Next

- Nodal biopsy negative and re-evaluation negative, go to Follow-up (SCC-11)
- Head and neck primary with positive nodes, go to Regional Lymph Nodes (SCC-10)
- Operable disease, after excision and regional lymph node dissection, go to Follow-up (SCC-11)
- Unresectable, inoperable, or incompletely resected disease, after multidisciplinary consultation, go to Follow-up (SCC-11)
