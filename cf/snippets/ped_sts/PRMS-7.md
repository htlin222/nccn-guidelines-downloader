+++
id           = "ped_sts/PRMS-7"
gid          = "ped_sts"
ref          = "PRMS-7"
page         = 10
title        = "Paratesticular mass: orchiectomy, radiographic staging, and regional lymph node evaluation"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

[facets]
disease    = "ped_sts"
timepoint  = ["diagnosis", "staging", "primary-treatment"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
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

- ___ (age) yo
- ___ (side) paratesticular mass
- Diagnosis of RMS confirmed by inguinal orchiectomy: ___ (rms_confirmed)
- Lymph node status on thin-cut CT abdomen/pelvis: ___ (node_status)

# Inguinal orchiectomy

- Inguinal orchiectomy confirms diagnosis of RMS (PRMS-D)
- An inguinal approach and proximal spermatic cord control is required
- Open biopsy or tumor spillage of any kind, as from a hydrocele, should be avoided
    - Inguinal recurrence may follow
- If biopsy is felt to be necessary prior to orchiectomy
    - Atraumatic high spermatic cord control should be performed
    - The mobilized testis and cord should be completely isolated from the field while awaiting frozen section report
- Any unprotected spillage should be considered Clinical Group IIa

# Radiographic staging

- Thin-cut CT abdomen/pelvis with contrast
    - See Principles of Imaging

# Regional lymph node evaluation

- Patients <10 years of age, CT scan negative for lymphadenopathy
    - Lymph node biopsy not required
- Patients ≥10 years of age
    - Ipsilateral retroperitoneal lymph node (RPLN) sampling (PRMS-E)
- Radiographically positive lymph nodes (PRMS-E)
    - Biopsy of concerning nodes for pathologic confirmation
        - See Principles of Pathologic Assessment
    - And/or ipsilateral/bilateral RPLN sampling (PRMS-E)
- Extensive gross lymph node involvement (PRMS-E)
    - Biopsy of concerning nodes for pathologic confirmation
        - See Principles of Pathologic Assessment
    - And/or ipsilateral/bilateral RPLN sampling (PRMS-E)

# Next

- Patients <10 years of age with CT negative for lymphadenopathy, no lymph node biopsy
    - Systemic therapy (as indicated for risk group) (PRMS-10)
- Patients ≥10 years of age, after ipsilateral RPLN sampling
    - Systemic therapy (as indicated for risk group) (PRMS-10)
- Radiographically positive lymph nodes
    - Systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F)
- Extensive gross lymph node involvement
    - Systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F)
