+++
id           = "sclc/SCL-5"
gid          = "sclc"
ref          = "SCL-5"
page         = 10
title        = "Primary treatment of extensive-stage small cell lung cancer, by performance status and symptomatic sites"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-1", "SCL-6", "SCL-D", "SCL-E", "SCL-F", "SCL-G", "ST-1"]

[facets]
disease   = "sclc"
histology = "small-cell"
timepoint = ["primary-treatment", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ps"
type = "number"
[[variables]]
name = "ps_cause"
type = "enum"
options = ["due to SCLC", "not due to SCLC"]
[[variables]]
name = "symptomatic_sites"
type = "text"
[[variables]]
name = "brain_mets"
type = "enum"
options = ["none", "asymptomatic", "symptomatic"]
+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, SCL-5, p10
- Applies to extensive stage (see ST-1 for TNM Classification)
- For transformation to SCLC from NSCLC, consider referral to a center with expertise (SCL-E 4 of 6)
- Systemic therapy per Principles of Systemic Therapy (SCL-E)
- Radiation therapy (RT) per Principles of Radiation Therapy (SCL-F)
- Supportive care per Principles of Supportive Care (SCL-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, extensive stage
- Performance status (PS) ___ (ps)
- If poor PS, cause is ___ (ps_cause)
- Localized symptomatic sites: ___ (symptomatic_sites)
- Brain metastases: ___ (brain_mets)

# Without localized symptomatic sites or brain metastases

- Good PS (0–2)
    - Systemic therapy (SCL-E), including supportive care (SCL-D)
- Poor PS (3–4) due to SCLC
    - Systemic therapy (SCL-E), including supportive care (SCL-D)
    - See NCCN Guidelines for Palliative Care
- Poor PS (3–4) not due to SCLC
    - Individualized therapy, including supportive care (SCL-D)
    - See NCCN Guidelines for Palliative Care

# Localized symptomatic sites

- Systemic therapy (SCL-E) ± RT (SCL-F) to symptomatic sites, for
    - Superior vena cava (SVC) syndrome
    - Lobar obstruction
    - Bone metastases
        - If high risk of fracture due to osseous structural impairment, consider orthopedic stabilization and palliative external beam RT (EBRT) (SCL-F)
- Spinal cord compression
    - Initiate steroids
        - For patients with symptomatic neurologic disease
        - Eg, dexamethasone 10 mg loading dose followed by 4–6 mg maintenance dose (IV or PO every 4–6 hours, or as appropriate)
    - Systemic therapy (SCL-E) + RT (SCL-F), typically sequential
        - With neurologic symptoms, RT is preferred before systemic therapy
        - Systemic therapy may start first if RT cannot be started expeditiously, or if controlling systemic symptoms is more urgent
    - See NCCN Guidelines for Central Nervous System Cancers

# With brain metastases

- Asymptomatic
    - Administer systemic therapy (SCL-E) before initiating brain RT (SCL-F)
    - If brain metastases progress while on systemic therapy, it is recommended that brain RT is initiated before completion of systemic therapy
- Symptomatic
    - Brain RT (SCL-F) before systemic therapy, unless immediate systemic therapy is indicated
        - With neurologic symptoms, RT is preferred before systemic therapy
        - Systemic therapy may start first if RT cannot be started expeditiously, or if controlling systemic symptoms is more urgent
    - Initiate steroids
        - For patients with symptomatic neurologic disease
        - Eg, dexamethasone 10 mg loading dose followed by 4–6 mg maintenance dose (IV or PO every 4–6 hours, or as appropriate)

# Next

- Response Assessment Following Primary Treatment (SCL-6), with imaging per Principles of Imaging (SCL-G)
