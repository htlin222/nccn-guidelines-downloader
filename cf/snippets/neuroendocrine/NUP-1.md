+++
id           = "neuroendocrine/NUP-1"
gid          = "neuroendocrine"
ref          = "NUP-1"
page         = 52
title        = "Initial workup of biopsy-proven neuroendocrine neoplasm of unknown primary"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["NE-A", "NE-B", "NE-E", "CP-1", "NET-9", "PDNEC-1", "WDG3-2", "WDG3-3", "WDG3-4"]

[facets]
disease   = "neuroendocrine"
histology = "neuroendocrine"
timepoint = "workup"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "differentiation"
type = "enum"
options = ["well-differentiated", "poorly-differentiated"]
[[variables]]
name = "grade"
type = "enum"
options = ["1", "2", "3"]
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Neuroendocrine Neoplasms of Unknown Primary v1.2026, NUP-1, p52
- Applies to biopsy-proven neuroendocrine neoplasms of unknown primary
- Treat presumptively as gastroenteropancreatic (GEP) NETs if the primary is unknown
- Workup is done per Principles of Pathology (NE-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biopsy-proven neuroendocrine neoplasm, primary unknown
- Biopsy site ___ (biopsy_site)
- Differentiation ___ (differentiation)
- Grade ___ (grade)
- Symptoms and associated radiologic findings ___ (symptoms)

# Tumor-localizing studies

- Chest CT with or without contrast (NE-B)
- Multiphasic abdomen/pelvis CT or MRI (NE-B)
    - Multiphasic imaging studies are performed with IV contrast in arterial and portal venous phases
- SSTR-PET/CT or SSTR-PET/MRI (NE-B)
    - Skull vertex to mid-thigh, with multiphase IV contrast when possible
    - Data are limited on the optimal timing of scans following administration of SSAs
    - SSTR-PET tracers, eg, 68Ga-DOTATATE, 64Cu-DOTATATE, and 68Ga-DOTATOC
- Consider FDG-PET/CT with or without brain imaging (CT or MRI) with contrast
    - In poorly differentiated carcinomas only
- Consider EGD or EUS and/or colonoscopy

# Biochemical testing

- Biochemical testing as appropriate (NE-A)

# Next

- Primary found, see specific tumor type (CP-1)
- Primary not discovered
    - Consider small bowel primary tumor based on symptoms and associated radiologic findings
    - Indicate well- or poorly differentiated
    - Poorly differentiated, go to PDNEC-1
    - Well-differentiated grade 1/2, go to NET-9, management of locoregional advanced disease and/or distant metastases of the gastrointestinal tract
    - Well-differentiated grade 3
        - Locoregional disease, go to WDG3-2
        - Locally advanced/metastatic disease, favorable biology, go to WDG3-3
        - Locally advanced/metastatic disease, unfavorable biology, go to WDG3-4
