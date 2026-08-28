+++
id           = "ped_hodgkin/ST-1"
gid          = "ped_hodgkin"
ref          = "ST-1"
page         = 52
title        = "Assigning Cotswolds-modified Ann Arbor stage and sub-staging designation"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-1", "PHL-2"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV", "bulky"]
timepoint = "staging"

[[variables]]
name = "nodal_groups"
type = "text"
[[variables]]
name = "diaphragm_sides"
type = "enum"
options = ["above", "below", "both"]
[[variables]]
name = "extranodal"
type = "text"
[[variables]]
name = "spleen"
type = "enum"
options = ["involved", "not involved"]
[[variables]]
name = "symptom_designation"
type = "enum"
options = ["A", "B"]
[[variables]]
name = "bulk"
type = "text"
[[variables]]
name = "assigned_stage"
type = "text"
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, ST-1, p52
- Cotswolds-modified Ann Arbor staging system
- Lister TA, Crowther D, Sutcliffe SB, et al. Report of a committee convened to discuss the evaluation and staging of patients with Hodgkin's disease: Cotswolds meeting. J Clin Oncol 1989;7:1630-1636

# Assessment

- Nodal groups or lymphoid organs involved: ___ (nodal_groups)
- Side(s) of the diaphragm involved: ___ (diaphragm_sides)
- Extranodal or extralymphatic site involvement: ___ (extranodal)
- Spleen: ___ (spleen)
- Symptom designation: ___ (symptom_designation)
- Bulky nodal disease: ___ (bulk)
- Assigned stage: ___ (assigned_stage)

# Stage definitions

- Stage I
    - One nodal group or lymphoid organ (eg, spleen or thymus)
- Stage IE
    - Local extension from one nodal group to another site
    - This extension definition is based on Panel consensus
- Stage II
    - Two or more nodal groups, same side of the diaphragm
- Stage IIE
    - Localized extension from one nodal group to an extranodal site with stage II criteria
    - Both on the same side of the diaphragm
    - This extension definition is based on Panel consensus
- Stage III
    - Nodal groups on both sides of the diaphragm
- Stage IIIS1
    - With splenic involvement
- Stage IIIE2
    - With localized extension from one nodal group to an extranodal site
    - This extension definition is based on Panel consensus
- Stage IIISE
    - Both IIIS1 and IIIE2
- Stage IV
    - Disseminated involvement of one or more extralymphatic organs (eg, lung, bone, bone marrow, liver)
    - With or without any nodal involvement

# Additional sub-staging variables

- A, asymptomatic
- B, presence of B symptoms, any of the following
    - Unexplained recurrent fever >38°C within last month
    - Drenching night sweats
    - Weight loss >10% of body weight within 6 months of diagnosis
- X, bulky nodal disease, either of the following
    - Nodal mass >1/3 of intrathoracic diameter
    - Nodal mass 6 cm in dimension
        - In adults, 10 cm dimension is used
