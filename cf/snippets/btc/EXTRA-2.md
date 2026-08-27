+++
id           = "btc/EXTRA-2"
gid          = "btc"
ref          = "EXTRA-2"
page         = 24
title        = "Post-surgical treatment by resection status in extrahepatic cholangiocarcinoma, and surveillance"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["EXTRA-1", "BIL-A", "BIL-C", "BIL-D"]

[facets]
disease   = "btc"
timepoint = ["adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "resection_status"
type = "enum"
options = ["R0", "R1", "R2"]
[[variables]]
name = "margin"
type = "text"
[[variables]]
name = "regional_nodes"
type = "text"
[[variables]]
name = "surgery_date"
type = "text"
+++

# Source

- NCCN Extrahepatic Cholangiocarcinoma v1.2026, EXTRA-2, p24
- Applies after resection of extrahepatic cholangiocarcinoma
- Adjuvant chemotherapy or chemoradiation has been associated with survival benefit in patients with BTC, especially in patients with lymph node-positive disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, extrahepatic cholangiocarcinoma, resected
- Date of resection ___ (surgery_date)
- Post resection status ___ (resection_status)
- Margin ___ (margin)
- Regional nodes ___ (regional_nodes)

# Resected, negative margin (R0) with negative regional nodes, or carcinoma in situ at margin

- Options, order does not indicate preference
    - The choice of treatment modality may depend on extent/location of disease and institutional capabilities
- Systemic therapy (preferred)
    - Principles of Systemic Therapy (BIL-C)
- Clinical trial (preferred)
- Chemoradiation
    - Principles of Systemic Therapy (BIL-C)
    - Principles of Radiation Therapy (BIL-D)
    - Limited clinical trial data to define a standard regimen or definitive benefit, clinical trial participation is encouraged
- Observe

# Resected, positive margin (R1), or positive regional nodes

- Management of disease in patients with R1 or R2 resections should be evaluated by a multidisciplinary team
- Options, order does not indicate preference
    - The choice of treatment modality may depend on extent/location of disease and institutional capabilities
- Systemic therapy (preferred)
    - Principles of Systemic Therapy (BIL-C)
- Clinical trial (preferred)
- Combination of chemotherapy and chemoradiation
    - Principles of Systemic Therapy (BIL-C)
    - Principles of Radiation Therapy (BIL-D)
    - Limited clinical trial data to define a standard regimen or definitive benefit, clinical trial participation is encouraged
    - For gemcitabine-based regimens and fluoropyrimidine-based regimens to be used before or after chemoradiation, see Adjuvant Chemotherapy (BIL-C, 1 of 5)
- Chemoradiation
    - Principles of Systemic Therapy (BIL-C)
    - Principles of Radiation Therapy (BIL-D)
    - Limited clinical trial data to define a standard regimen or definitive benefit, clinical trial participation is encouraged

# Gross residual disease (R2)

- Management of disease in patients with R1 or R2 resections should be evaluated by a multidisciplinary team
- See unresectable disease (EXTRA-1)

# Surveillance

- There are no data to support a specific surveillance schedule or tests for monitoring
    - Discuss appropriate follow-up schedules/imaging with the patient
- Consider imaging every 3–6 mo for 2 y, then every 6–12 mo for up to 5 y, or as clinically indicated
    - Based on the surveillance schedule used in the phase III BILCAP trial
    - Multiphasic abdomen/pelvis CT/MRI with IV contrast, Principles of Imaging (BIL-A)
    - Chest CT with or without contrast, Principles of Imaging (BIL-A)

# Next

- R0 with negative nodes, or carcinoma in situ at margin, choose from the options above, then surveillance
- R1, or positive regional nodes, choose from the options above, then surveillance
- R2 (gross residual disease), go to unresectable disease (EXTRA-1)
