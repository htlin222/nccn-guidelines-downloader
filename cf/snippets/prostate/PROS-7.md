+++
id           = "prostate/PROS-7"
gid          = "prostate"
ref          = "PROS-7"
page         = 19
title        = "Initial therapy for regional prostate cancer (any T, N1, M0)"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-8", "PROS-9", "PROS-10", "PROS-G", "PROS-J", "PROS-K"]

[facets]
disease   = "prostate"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "symptoms"
type = "enum"
options = ["symptomatic", "asymptomatic"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-7, p19
- Applies to regional prostate cancer: any T, N1, M0
- Footnotes on PROS-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- PSA ___ (psa)
- Expected patient survival ___ (life_expectancy)
    - Estimate by Principles of Life Expectancy Estimation (PROS-A)
- ___ (symptoms)
- Branch point: expected survival >5 y or symptomatic, versus ≤5 y and asymptomatic

# Initial therapy, expected survival >5 y or symptomatic

- RT + ADT (24 mo) + abiraterone, preferred
    - RT per Principles of Radiation Therapy (PROS-J)
    - ADT and androgen receptor pathway inhibitors (ARPIs) per Principles of Androgen Deprivation Therapy (PROS-G)
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- RT + ADT (24–36 mo)
    - RT per Principles of Radiation Therapy (PROS-J)
    - ADT and ARPIs per Principles of Androgen Deprivation Therapy (PROS-G)
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- ADT ± abiraterone
    - ADT and ARPIs per Principles of Androgen Deprivation Therapy (PROS-G)
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- RP in select patients
    - Surgery per Principles of Surgery (PROS-K)
    - Limited evidence that RP + pelvic lymph node dissection (PLND) is beneficial in node-positive disease
    - Limit this approach to patients with >10-year life expectancy and resectable disease
    - Use in the context of a clinical trial or planned multimodality approach

# Follow-up after RT + ADT

- Assess for biochemical recurrence
    - PSA increase by ≥2 ng/mL above the nadir PSA is the standard definition after external beam RT (EBRT) with or without hormone therapy
    - Consider a recurrence evaluation when PSA has been confirmed to be increasing after radiation even if the increase above nadir is <2 ng/mL, especially in candidates for secondary local therapy who are young and healthy
    - Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition, especially in patients who are younger or healthier
- Biochemical recurrence present, go to Radiation Therapy Recurrence (PROS-10)
- No biochemical recurrence, go to Monitoring for Initial Definitive Therapy (PROS-8)

# Follow-up after radical prostatectomy

- Undetectable PSA
    - No adverse features and no lymph node metastases, go to Monitoring (PROS-8)
    - Adverse feature(s) or lymph node metastases, go to Monitoring (PROS-8) or Consider treatment (PROS-9)
    - Adverse pathologic features are positive margin(s), seminal vesicle invasion, or extracapsular extension
- PSA persistence, go to Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)
    - PSA persistence is PSA that does not fall to undetectable levels after RP
    - PSA recurrence is undetectable PSA after RP with a subsequent detectable PSA that increases on ≥2 determinations, or increases to PSA >0.1 ng/mL
    - Trials indicating noninferiority of early RT compared with adjuvant RT after RP have used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
    - Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression based on pretreatment risk factors, pathologic parameters, timing of recurrence, and genomic classifier (GC) score, among other factors

# Initial therapy, expected survival ≤5 y and asymptomatic

- Observation
    - Observation involves monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms or a change in examination or PSA that suggests symptoms are imminent
    - See Principles of Active Surveillance and Observation (PROS-F)
- RT
    - RT per Principles of Radiation Therapy (PROS-J)
- ADT ± RT
    - ADT and ARPIs per Principles of Androgen Deprivation Therapy (PROS-G)
    - Principles of Survivorship in Prostate Cancer (PROS-B)

# Next

- Biochemical recurrence after RT, go to Radiation Therapy Recurrence (PROS-10)
- No biochemical recurrence after RT, go to Monitoring for Initial Definitive Therapy (PROS-8)
- Undetectable PSA after RP without adverse features and without lymph node metastases, go to Monitoring (PROS-8)
- Undetectable PSA after RP with adverse feature(s) or lymph node metastases, go to Monitoring (PROS-8) or Consider treatment (PROS-9)
- PSA persistence after RP, go to Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)
- Symptomatic progression, go to the matching M1 pathway
    - Number of metastatic sites per Principles of MDT (PROS-M)
    - Workup and Treatment of Metachronous Oligometastatic M1 CSPC (PROS-13)
    - Workup and Treatment of Low-Volume M1 (Metachronous or Synchronous) or Synchronous Oligometastatic CSPC (PROS-14)
    - Workup and Treatment of High-Volume M1 CSPC (PROS-15)
    - Workup and Treatment of M1 CRPC (PROS-17)
