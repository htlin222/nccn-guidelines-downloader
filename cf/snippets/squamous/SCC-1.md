+++
id           = "squamous/SCC-1"
gid          = "squamous"
ref          = "SCC-1"
page         = 8
title        = "Workup and risk status of a lesion suspicious for cutaneous squamous cell cancer"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-2", "SCC-A", "SCC-B", "SCC-3", "SCC-4", "SCC-5", "SCC-6", "SCC-7"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = ["workup", "diagnosis", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "nodal_suspicion"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "extent_suspicion"
type = "enum"
options = ["none", "locally-extensive", "metastatic"]
[[variables]]
name = "risk_status"
type = "enum"
options = ["field-cancerization", "low-risk", "high-risk", "very-high-risk", "locally-advanced", "regional-nodes", "s-itm", "distant-metastatic"]
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-1, p8
- Applies to a lesion suspicious for skin cancer
- Principles of Pathology: SCC-A
- Risk Factors for Local Recurrence, Metastases, or Death: SCC-2
- Identification and Management of Patients at High Risk for Multiple Primary CSCCs: SCC-B
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, lesion at ___ (site)
- Lesion suspicious for skin cancer
- Biopsy pathology ___ (pathology)
- Suspicion of nodal disease ___ (nodal_suspicion)
- Suspicion of locally extensive or metastatic disease ___ (extent_suspicion)
- Risk status ___ (risk_status)

# Preliminary workup

- H&P
- Biopsy
    - Should extend into dermis
    - Read against Principles of Pathology (SCC-A)
    - Read against Risk Factors for Local Recurrence, Metastases, or Death (SCC-2)
    - Read against Identification and Management of Patients at High Risk for Multiple Primary CSCCs (SCC-B)

# Diagnosis

- Cutaneous squamous cell cancer (CSCC) confirmed
    - Includes CSCC in situ, showing full-thickness epidermal atypia

# Additional workup

- Complete skin exam
- Regional lymph node exam, as indicated for suspicion of nodal disease
- Imaging studies of area of interest, as indicated for suspicion of locally extensive or metastatic disease
    - Extensive disease includes deep involvement such as bone, named nerves, and deep soft tissue
    - If disease of named nerve(s) is suspected, MRI with and without contrast is preferred
    - If bone disease is suspected, CT with contrast is preferred unless contraindicated
    - MRI with and without contrast of the brain may be considered to rule out subclinical cortical involvement in cases with bone invasion
    - Imaging modality and targeted area at the discretion of the treating team, based on the suspected extent of disease (ie, local, regional, metastatic)
    - Histologic confirmation is sufficient to diagnose local recurrence, but MRI with and without contrast can be considered to assess extent of local disease
    - For nodal or distant metastases, histologic analysis and/or other imaging modalities can be used for confirmation and to gauge extent of disease
    - For rare cases that present with distant metastatic disease at diagnosis, treat per the distant metastases pathway on SCC-11

# Next

- Local disease
    - Field cancerization or confluent epidermal dysplasia, go to SCC-3
        - Field cancerization defined as ultraviolet (UV) induced confluent dysplasia, clinically manifested as diffuse actinic keratoses and superficial (in situ) SCC
    - Low-risk, go to SCC-4
        - Assign risk per SCC-2 and SCC-B
    - High-risk or very high risk, go to SCC-5 and SCC-6
        - Assign risk per SCC-2 and SCC-B
    - Locally advanced (laCSCC) disease, go to SCC-7
        - A cure is unlikely to result from surgery and/or RT, or there are concerns of significant functional impairment
        - Multidisciplinary discussion and multimodality treatment, including neoadjuvant and adjuvant therapy, merits consideration
- Clinically or radiographically concerning regional lymph nodes, go to SCC-8
- Satellitosis or in-transit metastasis (S-ITM), go to SCC-9
- Distant metastatic disease, go to SCC-11
