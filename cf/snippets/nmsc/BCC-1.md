+++
id           = "nmsc/BCC-1"
gid          = "nmsc"
ref          = "BCC-1"
page         = 6
title        = "Clinical presentation, workup, risk status, and staging of basal cell skin cancer"
nccn_version = "2.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-27"
see_also     = ["BCC-2", "BCC-3", "BCC-4", "BCC-5"]

[facets]
disease   = "nmsc"
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "skin_exam"
type = "text"
[[variables]]
name = "biopsy_result"
type = "text"
[[variables]]
name = "risk_status"
type = "enum"
options = ["low", "high"]
+++

# Source

- NCCN Basal Cell Skin Cancer v2.2026, BCC-1, p6
- Applies to a lesion suspicious for skin cancer, through diagnosis of basal cell carcinoma (BCC)
- Principles of Pathology: BCC-A
- Risk Factors for Recurrence: BCC-2
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Lesion suspicious for skin cancer, site ___ (site)
- Complete skin examination ___ (skin_exam)
- Biopsy ___ (biopsy_result)
- Risk status ___ (risk_status)

# Preliminary workup

- H&P
- Complete skin examination
- Biopsy
    - Principles of Pathology: BCC-A
    - Risk Factors for Recurrence: BCC-2
    - Shave removal can be considered for clinically low-risk BCC in a low-risk site, and in situations where additional treatment would pose morbidity/hardship

# Diagnosis

- Basal cell carcinoma (BCC)

# Risk status

- Low risk
- High risk
    - Any high-risk factor places the patient in the high-risk category
    - Risk factors for recurrence: BCC-2
    - Risk status categories per Morgan FC, et al. J Am Acad Dermatol 2021;85:582-587

# Additional workup

- High risk
    - Consider imaging if clinical exam is insufficient for determining disease extent
    - Extensive disease includes deep involvement such as bone, named nerves, and deep soft tissue
        - Suspected disease of named nerve(s), MRI with and without contrast is preferred
        - Suspected bone disease, CT with contrast is preferred unless contraindicated
    - For rare cases presenting with regional or distant metastatic disease at diagnosis, treat per the nodal or metastatic pathways on BCC-5
- Locally advanced disease
    - Consider imaging to determine disease extent
- Initial presentation of regional or distant metastatic disease
    - Imaging studies of areas of interest as indicated for suspicion of extensive disease
    - Extensive disease includes deep involvement such as bone, named nerves, and deep soft tissue
        - Suspected disease of named nerve(s), MRI with and without contrast is preferred
        - Suspected bone disease, CT with contrast is preferred unless contraindicated
    - Imaging modality and targeted area at the discretion of the treating team, based on the suspected extent of disease (ie, local, regional, metastatic)
    - Histologic confirmation is sufficient to diagnose local recurrence, but MRI with and without contrast can be considered to assess extent of local disease
    - For nodal or distant metastasis, histologic analysis and/or CT imaging can be used for confirmation and to gauge extent of disease
    - For rare cases presenting with regional or distant metastatic disease at diagnosis, treat per the nodal or metastatic pathways on BCC-5

# Next

- Low risk, go to primary treatment BCC-3
- High risk, go to primary treatment BCC-3
- Locally advanced disease, go to BCC-4
- Regional or distant metastatic disease, go to BCC-5
