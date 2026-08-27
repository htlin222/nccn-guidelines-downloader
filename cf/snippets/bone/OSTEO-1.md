+++
id           = "bone/OSTEO-1"
gid          = "bone"
ref          = "OSTEO-1"
page         = 20
title        = "Osteosarcoma workup and primary treatment, sorted by grade and presentation"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["TEAM-1", "BONE-A", "BONE-B", "OSTEO-2", "OSTEO-3", "OSTEO-4"]

[facets]
disease   = "bone"
timepoint = ["workup", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["low-grade-intramedullary-or-surface", "periosteal", "high-grade-intramedullary-or-surface", "metastatic", "extraskeletal"]
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "alp"
type = "text"
+++

# Source

- NCCN Bone Cancer v1.2027, OSTEO-1, p20
- Applies to osteosarcoma at workup and primary treatment
- Manage with a multidisciplinary team (TEAM-1)
- Principles of Bone Cancer Management (BONE-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site ___ (site)
- Histologic grade ___ (grade)
- Presentation ___ (presentation)
- LDH ___ (ldh)
- Alkaline phosphatase (ALP) ___ (alp)

# Workup

- History and physical
- Contrast-enhanced MRI of primary site, with or without CT
- Chest imaging including chest CT
    - Chest CT can be performed with or without contrast as clinically indicated
    - Low-dose, non-contrast CT is recommended for restaging
- FDG-PET/CT (head-to-toe) (preferred) and/or bone scan
- MRI (with and without contrast) or CT (with contrast) of skeletal metastatic sites
    - More detailed imaging (CT or MRI) of abnormalities identified on primary imaging is required for suspected metastatic disease
- LDH
- Alkaline phosphatase (ALP)
- Fertility consultation should be offered
- Consider personal and family history for genetic consultation and testing

# Primary and adjuvant treatment

- Low-grade osteosarcoma, intramedullary + surface
    - Dedifferentiated parosteal osteosarcomas are not considered to be low-grade tumors
    - Wide excision (BONE-A)
    - Low grade, then surveillance (OSTEO-4)
    - High grade, then chemotherapy (category 1), Bone Cancer Systemic Therapy Agents (BONE-B)
        - Then surveillance (OSTEO-4)
- Periosteal osteosarcoma
    - Consider chemotherapy, Bone Cancer Systemic Therapy Agents (BONE-B)
    - Wide excision (BONE-A)
    - Then surveillance (OSTEO-4)

# Next

- Low-grade osteosarcoma, intramedullary + surface, treat on this page, then OSTEO-4
- Periosteal osteosarcoma, treat on this page, then OSTEO-4
- High-grade osteosarcoma, intramedullary + surface, go to OSTEO-2
- Metastatic disease at presentation, go to OSTEO-3
- Extraskeletal osteosarcoma, see NCCN Guidelines for Soft Tissue Sarcoma
