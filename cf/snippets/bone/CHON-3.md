+++
id           = "bone/CHON-3"
gid          = "bone"
ref          = "CHON-3"
page         = 9
title        = "Primary treatment, surveillance, and recurrence for extracompartmental, axial grade I, high-grade, or clear cell chondrosarcoma"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["CHON-2", "CHON-4", "BONE-B", "BONE-C", "OSTEO-1", "EW-1"]

[facets]
disease   = "bone"
biomarker = "idh1"
timepoint = ["primary-treatment", "surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "location"
type = "enum"
options = ["appendicular", "axial"]
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "subtype"
type = "text"
[[variables]]
name = "compartment"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "borderline resectable", "unresectable"]
+++

# Source

- NCCN Chondrosarcoma v1.2027, CHON-3, p9
- Applies to low-grade extracompartmental appendicular tumors
- Applies to grade I axial tumors
- Applies to high-grade (grade II, grade III) tumors
- Applies to clear cell tumors
- Applies to extracompartmental tumors
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site ___ (site)
- Skeleton ___ (location)
- Grade ___ (grade)
- Histologic subtype ___ (subtype)
- Compartmental status ___ (compartment)
- Resectability ___ (resectability)

# Primary treatment

- Wide excision, if resectable
    - Wide excision should provide histologically negative surgical margins
    - May be achieved by either limb-sparing excision or limb amputation
- Consider radiation therapy (RT), if borderline resectable or unresectable (category 2B)
    - Principles of Radiation Therapy (BONE-C)
- There are no known standard chemotherapy options for conventional chondrosarcoma grades 1-3
    - Ivosidenib is an option for susceptible IDH1 mutations
    - Systemic Therapy Agents (BONE-B)

# Surveillance

- Physical exam
- X-rays of primary site and/or cross-sectional imaging as clinically indicated
    - CT with contrast
    - or MRI with and without contrast
- Chest imaging every 3-6 mo
    - Based on physician's concern for risk of recurrence
    - May include CT at least every 6 mo for 5 y, then annually for a minimum of 10 y, as clinically indicated
    - Chest CT can be performed with or without contrast as clinically indicated
    - Low-dose, non-contrast CT is recommended for restaging
- Reassess function at every follow-up visit

# Local recurrence

- Wide excision, if resectable
    - Wide excision should provide histologically negative surgical margins
    - May be achieved by either limb-sparing excision or limb amputation
    - Positive margins
        - Consider RT (category 2B), Principles of Radiation Therapy (BONE-C)
        - or Consider re-excision to achieve negative surgical margins
    - Negative margins
        - Observe
- RT, if unresectable (category 2B)
    - Principles of Radiation Therapy (BONE-C)

# Next

- Systemic recurrence, dedifferentiated, may consider treating as osteosarcoma (category 2B), go to OSTEO-1
- Systemic recurrence, mesenchymal, go to EW-1
- Metastatic chondrosarcoma, go to CHON-4
