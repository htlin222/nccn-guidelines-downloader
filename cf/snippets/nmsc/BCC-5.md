+++
id           = "nmsc/BCC-5"
gid          = "nmsc"
ref          = "BCC-5"
page         = 11
title        = "Primary treatment of advanced basal cell carcinoma"
nccn_version = "2.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-27"
see_also     = ["BCC-2", "BCC-A", "BCC-B", "BCC-C", "BCC-D", "BCC-6"]

[facets]
disease   = "nmsc"
timepoint = ["primary-treatment", "metastatic"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "advanced_category"
type = "enum"
options = ["locally-advanced", "nodal", "metastatic"]
[[variables]]
name = "prior_treatment"
type = "text"
[[variables]]
name = "surgery_feasible"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "rt_feasible"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mohs_pdema_available"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Basal Cell Skin Cancer v2.2026, BCC-5, p11
- Applies to advanced BCC
    - Multidisciplinary discussion and multimodality treatment merit consideration
    - Principles of Pathology (BCC-A)
    - Risk Factors for Recurrence (BCC-2)
    - Any high-risk factor places the patient in the high-risk category
- Principles of Treatment (BCC-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Site of disease ___ (site)
- Category of advanced disease ___ (advanced_category)
    - Locally advanced BCC (laBCC) is primary or recurrent extensive disease where surgery and/or RT may not result in a cure, or would possibly produce a significant functional limitation
- Prior treatment ___ (prior_treatment)
- Surgery feasible ___ (surgery_feasible)
- RT feasible ___ (rt_feasible)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
- Mohs or PDEMA available ___ (mohs_pdema_available)
- Multidisciplinary discussion held

# Locally advanced BCC (laBCC)

- Surgery
    - Consider neoadjuvant systemic therapy (BCC-D)
    - Mohs
        - Should be performed by dermatologic surgeons who have specialized training and experience in this procedure
        - As per other appropriate use criteria
    - or other forms of PDEMA
        - PDEMA with permanent section analysis or intraoperative frozen section analysis is an alternative to Mohs
        - See Principles of PDEMA Technique (SCC-G) within the NCCN Guidelines for Squamous Cell Skin Cancer
    - Standard excision with vertical histologic sectioning, if Mohs or PDEMA are not available
- or RT
    - Principles of Radiation Therapy (BCC-C)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
    - In certain circumstances, RT can be combined with vismodegib
- or if surgery and/or RT are not feasible, then systemic therapy (BCC-D)

# Nodal disease

- Surgery
    - With or without adjuvant RT
        - Principles of Radiation Therapy (BCC-C)
        - Determination of the appropriateness of RT should be performed together with a radiation oncologist
- or if surgery is not feasible, then RT
    - or systemic therapy (BCC-D)
- or clinical trial

# Metastatic disease

- Systemic therapy (BCC-D)
- or RT
    - Principles of Radiation Therapy (BCC-C)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
- or surgery for limited metastatic disease
    - Under highly selective circumstances, in the context of multidisciplinary consultation, resection of limited metastases can be considered
- or palliation and best supportive care

# Next

- Follow-up (BCC-6)
