+++
id           = "bone/OSTEO-2"
gid          = "bone"
ref          = "OSTEO-2"
page         = 21
title        = "Neoadjuvant and adjuvant treatment of high-grade osteosarcoma, with restaging before local therapy"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["OSTEO-1", "OSTEO-3", "OSTEO-4", "BONE-A", "BONE-B", "BONE-C"]

[facets]
disease   = "bone"
timepoint = ["neoadjuvant", "staging", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "subtype"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "margins"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "response"
type = "enum"
options = ["good response", "poor response"]
+++

# Source

- NCCN Osteosarcoma v1.2027, OSTEO-2, p21
- Applies to high-grade osteosarcoma, intramedullary and surface
    - Other high-grade non-osteosarcoma variants such as undifferentiated pleomorphic sarcoma (UPS) of bone could also be treated using this algorithm
- Principles of Bone Cancer Management (BONE-A)
- Bone Cancer Systemic Therapy Agents (BONE-B)
- Principles of Radiation Therapy (BONE-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site ___ (site)
- Histologic subtype ___ (subtype)
- Resectability at restaging ___ (resectability)
- Surgical margins ___ (margins)
- Histologic response ___ (response)
    - Response is defined by pathologic mapping per institutional guidelines
    - Good response: viable tumor reported as <10% of the tumor area
    - Poor response: viable tumor reported as 10% or more of the tumor area

# Neoadjuvant treatment

- Perioperative chemotherapy (category 1), preoperative preferred
    - Bone Cancer Systemic Therapy Agents (BONE-B)
    - Selected older patients may benefit from immediate surgery
    - There does not appear to be a survival benefit for individuals who have received neoadjuvant chemotherapy compared to adjuvant chemotherapy
    - Histologic response to neoadjuvant chemotherapy may provide prognostic information, but does not affect outcome
    - Bernthal NM, et al. Cancer 2012;118:5888-5893; Provisor AJ, et al. J Clin Oncol 1997;15:76-84

# Restage

- Reassess as appropriate
- Restage with pretreatment imaging modalities
    - Chest CT
        - Can be performed with or without contrast as clinically indicated
        - Low-dose, non-contrast CT is recommended for restaging
    - Contrast-enhanced MRI, with or without CT, of primary site
    - X-rays of primary site
    - Consider FDG-PET/CT (head-to-toe) or bone scan

# Adjuvant treatment, unresectable tumor

- RT
    - Principles of Radiation Therapy (BONE-C)
- Chemotherapy
    - Bone Cancer Systemic Therapy Agents (BONE-B)

# Adjuvant treatment, resectable tumor

- Wide excision
    - Principles of Bone Cancer Management (BONE-A)
- Positive margins
    - Good response
        - Chemotherapy
        - Consider additional local therapy (surgical excision with or without RT)
            - Principles of Bone Cancer Management (BONE-A)
            - Principles of Radiation Therapy (BONE-C)
    - Poor response
        - Consider additional local therapy (surgical excision with or without RT)
            - Principles of Bone Cancer Management (BONE-A)
            - Principles of Radiation Therapy (BONE-C)
        - Continue with preoperative regimen
        - or Consider changing chemotherapy (category 3)
            - See Discussion for further information
- Negative margins
    - Good response
        - Chemotherapy
    - Poor response
        - Continue with preoperative regimen
        - or Consider changing chemotherapy (category 3)
            - See Discussion for further information

# Next

- Unresectable tumor after adjuvant treatment, surveillance, go to OSTEO-4
- Resectable tumor after adjuvant treatment, surveillance, go to OSTEO-4
