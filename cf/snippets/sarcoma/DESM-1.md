+++
id           = "sarcoma/DESM-1"
gid          = "sarcoma"
ref          = "DESM-1"
page         = 22
title        = "Workup of a desmoid tumor and triage by whether progression at that site would be morbid"
nccn_version = "5.2026"
nccn_date    = "07/23/26"
generated    = "2026-08-27"
see_also     = ["SARC-A", "SARC-B", "DESM-2", "DESM-3"]

[facets]
disease   = "sarcoma"
timepoint = ["workup", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "polyposis_history"
type = "text"
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "biopsy"
type = "text"
[[variables]]
name = "morbid"
type = "enum"
options = ["would not be morbid", "would be morbid"]
+++

# Source

- NCCN Soft Tissue Sarcoma v5.2026, DESM-1, p22
- Applies to desmoid tumors (aggressive fibromatosis)
- Workup, prior to the initiation of the treatment plan
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Desmoid tumor at ___ (site)
- Colonic polyposis, osteoma, or soft tissue tumor: ___ (polyposis_history)
- Imaging of primary site: ___ (imaging)
- Biopsy: ___ (biopsy)
- Progression at this anatomic location ___ (morbid)

# Workup

- Patient evaluated and treated by a multidisciplinary team
    - With expertise and experience in desmoid tumors
    - Done prior to the initiation of the treatment plan
- H&P
- Consider evaluation for Gardner syndrome / familial adenomatous polyposis (FAP)
    - Gardner syndrome is an autosomal dominant disorder
    - Characterized by a triad of colonic polyposis, osteoma, and soft tissue tumors
    - See NCCN Guidelines for Colorectal Cancer Screening
- Appropriate imaging of primary site as clinically indicated
    - Principles of Imaging (SARC-A)
- Biopsy
    - Principles of Pathologic Assessment of Sarcoma Specimens (SARC-B)

# Next

- Anatomic location where progression would not be morbid, go to DESM-2
- Anatomic location where progression would be morbid, go to DESM-3
