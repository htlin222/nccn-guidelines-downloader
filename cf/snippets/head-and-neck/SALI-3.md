+++
id           = "head-and-neck/SALI-3"
gid          = "head-and-neck"
ref          = "SALI-3"
page         = 84
title        = "Surgical treatment of salivary gland cancer by site and clinical nodal status, and what follows resection"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SALI-2", "SALI-4", "SALI-A", "SURG-A", "FOLL-A"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "gland"
type = "enum"
options = ["parotid", "submandibular", "sublingual", "minor salivary gland"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "cn"
type = "enum"
options = ["N0", "N+"]
[[variables]]
name = "resection_status"
type = "enum"
options = ["completely resected", "incompletely resected, gross residual disease"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SALI-3, p84
- Salivary gland tumors, treatment by cancer site and clinical nodal status
- Principles of Surgery (SURG-A)
- Principles of Radiation Therapy (SALI-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, salivary gland tumor
- Gland ___ (gland)
- Histology ___ (histology)
- Grade ___ (grade)
- ___ (ctnm)
- Clinical nodal status ___ (cn)
- Resection status ___ (resection_status)

# Treatment, major salivary gland (parotid, submandibular, sublingual)

- Clinical N0
    - Surgery with complete resection of tumor
    - ± neck dissection (SURG-A) for high-grade and/or T3-4 tumors
- Clinical N+
    - Surgery + neck dissection (SURG-A)
- The facial nerve should be preserved if possible
- Strongly consider referral to a specialized center with reconstructive expertise
- For submandibular and sublingual gland tumors, complete gland and tumor resection is recommended

# Treatment, minor salivary gland

- Clinical N0
    - Complete tumor resection (SURG-A)
- Clinical N+
    - Complete tumor resection and lymph node dissection (SURG-A)

# Completely resected

- No adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- Adenoid cystic
    - RT (SALI-A)
- Adverse pathologic features present
    - Adjuvant RT (SALI-A) (preferred)
    - or Systemic therapy/RT (category 2B)
- Adverse pathologic features are any of
    - Intermediate or high grade
    - Close or positive margins
    - Neural/perineural invasion
    - Lymph node metastases
    - Lymphatic/vascular invasion
    - High-grade T3-4a tumors

# Incompletely resected, gross residual disease

- Resection (SURG-A), if possible
- No further resection possible
    - Definitive RT (SALI-A)
    - or Systemic therapy/RT (category 2B)

# Next

- Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease (SALI-4)
