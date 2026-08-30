+++
id           = "ped_sts/PRMS-1"
gid          = "ped_sts"
ref          = "PRMS-1"
page         = 4
title        = "Workup of an unidentified mass for which rhabdomyosarcoma is likely"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-2", "PRMS-D", "PRMS-10"]

[facets]
disease   = "ped_sts"
timepoint = ["workup", "staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "foxo1"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "nodal_status"
type = "text"
[[variables]]
name = "metastatic"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-1, p4
- Applies to biopsy or excision of an unidentified mass for which rhabdomyosarcoma (RMS) is likely
- Site-specific considerations for the primary site: RMS Site-Specific Considerations (PRMS-2)
- Imaging on this page follows Principles of Imaging
- Pathology on this page follows Principles of Pathologic Assessment
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Primary site ___ (primary_site)
- Unidentified mass for which RMS is likely
- FOXO1 gene fusion ___ (foxo1)
- Nodal status ___ (nodal_status)
- Metastatic disease ___ (metastatic)

# Deciding whether R0 resection is attainable

- Judge whether R0 resection is attainable without significant loss of form or function
    - Significant loss of form and function is subjective, and is decided as part of the multidisciplinary discussion
    - As a general rule, all of the following should be avoided
        - Orbital exenteration
        - Major excisions of the face
        - Extremity amputation, or rendering an extremity useless
        - Major organ resection (ie, bladder/prostate resection, pneumonectomy)
        - Pelvic exenteration
        - Resection requiring permanent stool or urinary diversion
    - Craniofacial resection for anterior skull-base tumors of the nasal areas, paranasal sinuses, temporal fossa, and other such sites should be reserved for surgical teams who demonstrate expert performance in these areas

# If R0 resection is attainable without significant loss of form or function

- R0 resection (PRMS-D)
- Margins ___ (margin_status)
    - Negative margins, go directly to pathologic confirmation of RMS
    - Positive margins, consider pre-treatment re-excision (PRE) (PRMS-D)
        - Consider PRE if there is gross residual tumor
        - Consider PRE if margins are microscopically involved
        - Consider PRE if there is uncertainty as to margins or residual disease
        - PRE is advisable and should be applied wherever feasible, unless the resulting disability is considered unacceptable (ie, resulting in loss of function or an unacceptable cosmetic result)
- Pathologic confirmation of RMS, per Principles of Pathologic Assessment
    - Germline testing is recommended in selected patients based upon histology and family history

# If R0 resection is not attainable without significant loss of form or function

- Tumor biopsy, per Principles of Pathologic Assessment
- Pathologic confirmation of RMS
    - Germline testing is recommended in selected patients based upon histology and family history

# After pathologic confirmation of RMS

- Radiographic staging, per Principles of Imaging
- Lumbar puncture with cytology, when indicated
    - Recommended for patients with parameningeal RMS
- Bilateral bone marrow aspirates and biopsies, when indicated
    - Recommended for FOXO1 gene fusion-negative RMS with N1 nodal disease and/or metastatic disease
    - Recommended for all patients with FOXO1 gene fusion-positive RMS

# Next

- Therapy as indicated for risk group, go to PRMS-10
    - After induction chemotherapy, re-evaluate the primary site radiographically
    - Discuss local control with a multidisciplinary approach including oncology, surgery, and radiation oncology
    - Weigh the morbidity of a delayed primary excision (DPE), in which an R0 resection without significant loss of form and function can be performed, against the morbidity of a higher dose of local radiation therapy (RT)
