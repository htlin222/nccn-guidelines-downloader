+++
id           = "ped_cns/PMB-2"
gid          = "ped_cns"
ref          = "PMB-2"
page         = 34
title        = "Postoperative staging, risk for recurrence, and adjuvant/maintenance treatment of WNT and SHH medulloblastoma"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PMB-A", "PMB-D", "PMB-E", "PMB-3", "PMB-4"]

[facets]
disease   = "ped_cns"
biomarker = ["tp53", "myc"]
timepoint = ["staging", "adjuvant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subgroup"
type = "enum"
options = ["wnt", "shh", "combined"]
[[variables]]
name = "resection"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "m_stage"
type = "text"
[[variables]]
name = "myc_status"
type = "text"
[[variables]]
name = "tp53_status"
type = "text"
+++

# Source

- NCCN Pediatric Medulloblastoma: Children and Adolescents v1.2026, PMB-2, p34
- Applies to WNT and SHH medulloblastoma after surgery
- Risk stratification in medulloblastoma is critical to treatment strategy
- Radiation is not recommended for patients <3 years of age
    - Radiation-avoiding strategies may be used for patients >3 years of age per the treating physician's discretion
    - This Guideline is for children receiving "radiation inclusive" treatment strategies
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Molecular subgroup ___ (subgroup)
- Extent of resection ___ (resection)
- Histology ___ (histology)
- Metastatic status ___ (m_stage)
- MYC / MYCN amplification ___ (myc_status)
- TP53 mutation ___ (tp53_status)

# Postoperative staging

- Brain and spine MRI, per Principles of Neuroimaging (PMB-A)
    - Brain and spine MRI should be provided together to reduce anesthesia exposure
    - Diagnostic brain and spine MRI should be done for staging preoperatively
    - Postoperative imaging is required for the brain only
        - Ideally obtained within the first 24–72 hours
        - Within 24 hours preferred
    - If spine MRI is not done prior to surgery, imaging should wait 10–14 days postoperatively to get an accurate diagnostic spine MRI for staging
    - Preoperative spine MRI is strongly recommended
- Cerebrospinal fluid (CSF)
    - Lumbar puncture for CSF studies should be done at least 10 days postoperatively
    - Lumbar puncture for CSF studies should be done before adjuvant treatment
- Molecular analysis

# WNT, low risk (M0)

- Must meet all criteria
    - M0 disease, no evidence of metastasis in brain, spine, CSF
    - GTR or near total resection (NTR)
    - Classic histology
    - Non-MYC amplified
- Treatment
    - 23.4 Gy craniospinal irradiation (CSI) with involved field boost to 54 Gy, per Principles of Radiation Therapy (PMB-D)
    - Adjuvant/maintenance systemic therapy, per Principles of Systemic Therapy (PMB-E)

# WNT, high risk

- M+ disease or STR
    - It is unclear whether having an STR alone is a high-risk factor for recurrence for WNT medulloblastoma
    - These patients may be considered average risk with further evidence
- Treatment
    - High-dose CSI 36 Gy with involved field boost to 54–55.8 Gy, per Principles of Radiation Therapy (PMB-D)
    - Adjuvant/maintenance systemic therapy, per Principles of Systemic Therapy (PMB-E)

# SHH, average risk

- Criteria
    - M0 disease, no evidence of metastasis in brain, spine, CSF, and
    - Desmoplastic and nodular (D/N) histology or classic histology, and
    - GTR or NTR
- Higher risk because of molecular pathology should be treated with higher dose of RT and chemotherapy for higher risk
- Treatment
    - 23.4 Gy CSI with involved field boost to 54 Gy, per Principles of Radiation Therapy (PMB-D)
    - Adjuvant/maintenance systemic therapy, per Principles of Systemic Therapy (PMB-E)

# SHH, high risk

- Must meet any 1 of the following criteria
    - M+ disease
    - STR
    - Large cell/diffuse anaplastic histology
        - It is unclear whether large cell/anaplastic histology alone is a high-risk factor for recurrence
    - +MYCN amplification
    - TP53 mutation
- Treatment
    - High-dose CSI 36 Gy with involved field boost to 54–55.8 Gy, per Principles of Radiation Therapy (PMB-D)
    - Adjuvant/maintenance systemic therapy, per Principles of Systemic Therapy (PMB-E)

# Next

- Combined (includes Groups 3 and 4), go to PMB-3
    - Groups 3 and 4 have been combined and collectively referred to as "Non-WNT/non-SHH" medulloblastoma
- Follow-up, go to PMB-4
