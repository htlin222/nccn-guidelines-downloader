+++
id           = "ped_sts/PRMS-7"
gid          = "ped_sts"
ref          = "PRMS-7"
page         = 10
title        = "Paratesticular mass: orchiectomy, radiographic staging, and nodal evaluation"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "staging", "primary-treatment"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "age_group"
type = "enum"
options = ["under 10 years", "10 years or older"]
[[variables]]
name = "rms_confirmed"
type = "text"
[[variables]]
name = "node_status"
type = "enum"
options = ["negative for lymphadenopathy", "radiographically positive", "extensive gross involvement"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-7, p10
- Applies to a paratesticular mass
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) paratesticular mass
- Age group: ___ (age_group)
- Inguinal orchiectomy confirms diagnosis of RMS: ___ (rms_confirmed)
- Lymph nodes on staging imaging: ___ (node_status)

# Surgery

- Inguinal orchiectomy confirms diagnosis of RMS (PRMS-D)
    - An inguinal approach and proximal spermatic cord control is required
    - Open biopsy or tumor spillage of any kind, as from a hydrocele, should be avoided since inguinal recurrence may follow
    - If biopsy is felt to be necessary prior to orchiectomy, then atraumatic high spermatic cord control should be performed
        - The mobilized testis and cord should be completely isolated from the field while awaiting frozen section report
    - Any unprotected spillage should be considered Clinical Group IIa

# Radiographic staging

- Thin-cut CT abdomen/pelvis with contrast
    - Per Principles of Imaging

# Lymph node evaluation

- Patients under 10 years of age, CT scan negative for lymphadenopathy
    - Lymph node biopsy not required
- Patients 10 years of age and older
    - Ipsilateral retroperitoneal lymph node (RPLN) sampling (PRMS-E)
- Radiographically positive lymph nodes (PRMS-E)
    - Biopsy of concerning nodes for pathologic confirmation
        - Per Principles of Pathologic Assessment
    - And/or ipsilateral/bilateral RPLN sampling (PRMS-E)
- Extensive gross lymph node involvement (PRMS-E)
    - Biopsy of concerning nodes for pathologic confirmation
        - Per Principles of Pathologic Assessment
    - And/or ipsilateral/bilateral RPLN sampling (PRMS-E)

# Next

- Patients under 10 years of age with CT negative for lymphadenopathy, go to systemic therapy as indicated for risk group (PRMS-10)
- Patients 10 years of age and older, after ipsilateral RPLN sampling, go to systemic therapy as indicated for risk group (PRMS-10)
- Radiographically positive lymph nodes, go to systemic therapy as indicated for risk group (PRMS-10) and RT (PRMS-F)
- Extensive gross lymph node involvement, go to systemic therapy as indicated for risk group (PRMS-10) and RT (PRMS-F)
