+++
id           = "ped_cns/PMB-3"
gid          = "ped_cns"
ref          = "PMB-3"
page         = 36
title        = "Adjuvant/maintenance treatment of combined Group 3 and Group 4 medulloblastoma, by risk for recurrence"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PMB-4", "PMB-D", "PMB-E"]

[facets]
disease   = "ped_cns"
histology = "large-cell"
biomarker = "myc"
timepoint = ["adjuvant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "m_stage"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["GTR", "NTR", "STR"]
[[variables]]
name = "myc_status"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["average", "high", "very high"]
+++

# Source

- NCCN Pediatric Medulloblastoma: Children and Adolescents v1.2026, PMB-3, p36
- Molecular findings: Combined, includes Groups 3 and 4
    - Groups 3 and 4 have been combined and collectively referred to as "Non-WNT/non-SHH" medulloblastoma
- Risk stratification in medulloblastoma is critical to treatment strategy
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histology ___ (histology)
- Metastatic status ___ (m_stage)
- Extent of resection ___ (resection)
- MYC amplification ___ (myc_status)
- Risk for recurrence ___ (risk_group)

# Risk for recurrence

- Average risk, must meet all criteria
    - M0 disease
    - Classic histology
    - GTR or NTR
- High risk
    - M+
    - or STR
    - or Large cell/anaplastic histology
        - It is unclear whether large cell/anaplastic histology alone is a high-risk factor for recurrence
- Very high risk
    - MYC amplification

# Adjuvant/maintenance treatment, applicability of radiation

- Radiation is not recommended for patients <3 years of age
- Radiation-avoiding strategies may be used for patients >3 years of age, per the treating physician's discretion
- This Guideline is for children receiving "radiation inclusive" treatment strategies

# Adjuvant/maintenance treatment, average risk

- 23.4 Gy CSI with involved field boost to 54 Gy, per Principles of Radiation Therapy (PMB-D)
- and Adjuvant/maintenance systemic therapy, per Principles of Systemic Therapy (PMB-E)

# Adjuvant/maintenance treatment, high risk

- High-dose CSI 36 Gy with involved field boost to 54-55.8 Gy (PMB-D)
- and Adjuvant/maintenance systemic therapy (PMB-E)

# Adjuvant/maintenance treatment, very high risk

- High-dose CSI 36 Gy with involved field boost to 54-55.8 Gy (PMB-D)
    - Carboplatin prior to each RT fraction, for Group 3 tumors only
- and Adjuvant/maintenance systemic therapy (PMB-E)

# Next

- Follow-up, go to PMB-4
