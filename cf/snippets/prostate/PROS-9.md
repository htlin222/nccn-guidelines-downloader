+++
id           = "prostate/PROS-9"
gid          = "prostate"
ref          = "PROS-9"
page         = 23
title        = "Treatment for a first PSA persistence or recurrence after radical prostatectomy"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-9A", "PROS-10", "PROS-11", "PROS-13", "PROS-14", "PROS-15"]

[facets]
disease   = "prostate"
stage     = ["recurrent", "IV"]
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "psa_pattern"
type = "enum"
options = ["PSA persistence", "PSA recurrence"]
[[variables]]
name = "life_expectancy"
type = "enum"
options = ["greater than 5 y", "5 y or less"]
[[variables]]
name = "m1_status"
type = "enum"
options = ["no evidence of M1", "oligometastatic", "polymetastatic"]
[[variables]]
name = "risk_stratification"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-9, p23
- Applies to PSA persistence or recurrence after radical prostatectomy (RP)
    - PSA persistence is PSA not falling to undetectable levels after RP
    - PSA recurrence is undetectable PSA after RP with a subsequent detectable PSA that increases on 2 or more determinations, or increases to PSA >0.1 ng/mL
    - Trials indicating noninferiority of early RT compared with adjuvant RT after RP have used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
    - Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression, based on pretreatment risk factors, pathologic parameters, timing of recurrence, and GC score, among other factors
- May also apply to patients with undetectable PSA with multiple adverse features or lymph node metastases, if treatment is being considered
- Covers treatment for a first PSA persistence/recurrence
    - Historically referred to as 'salvage' therapy; these guidelines refer to treatment in this setting as 'secondary' therapy
- Footnotes on PROS-9A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, prostate cancer after radical prostatectomy (RP)
- PSA ___ (psa)
- Pattern ___ (psa_pattern)
- Expected life expectancy ___ (life_expectancy)
- Bone and soft tissue imaging ___ (m1_status)
- Risk stratification ___ (risk_stratification)

# No evidence of M1, life expectancy greater than 5 y

- Risk stratification, per Principles of Risk Stratification and Biomarkers (PROS-H)
- Consider bone and soft tissue imaging, per Principles of Imaging (PROS-E)
- Consider prostate bed biopsy
- EBRT (preferred), per Principles of Radiation Therapy (PROS-J)
    - With or without ADT
        - For details on the use of ADT and androgen receptor pathway inhibitors (ARPIs), see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
        - See also Principles of Survivorship in Prostate Cancer (PROS-B)
    - With or without abiraterone for N1 (category 2B)
- OR monitoring
    - Physical exam
    - PSA every 3-6 months
    - Imaging for symptoms or increasing PSA
    - For PSA progression in a patient who has not received treatment for a first biochemical recurrence (BCR), continue monitoring or consider treatment for first PSA persistence/recurrence: PROS-9 for RP PSA persistence/recurrence, PROS-10 for RT recurrence
- Second biochemical recurrence (BCR)
    - Document castrate levels of testosterone if clinically indicated
    - Workup for progression should include bone and soft tissue evaluation, per Principles of Imaging (PROS-E)
    - Go to Workup for Second Biochemical Recurrence (PROS-11)

# No evidence of M1, life expectancy 5 y or less

- Observation
    - Monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms, or a change in examination or PSA that suggests symptoms are imminent
    - See Principles of Active Surveillance and Observation (PROS-F)
- Progression on observation
    - Document castrate levels of testosterone if clinically indicated
    - Workup for progression should include bone and soft tissue evaluation, per Principles of Imaging (PROS-E)
    - Treatment for a patient with life expectancy 5 y or less whose cancer progressed on observation of localized disease is ADT, per Principles of Androgen Deprivation Therapy (PROS-G)
    - Palliative therapy / best supportive care

# M1 PSA persistence/recurrence

- Oligometastatic
    - See Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - Metachronous oligometastatic CSPC, go to Workup and Treatment of Metachronous Oligometastatic CSPC (PROS-13)
    - Low-volume M1 (metachronous or synchronous), or synchronous oligometastatic CSPC, go to PROS-14
- Polymetastatic
    - Go to Workup and Treatment of High-Volume M1 CSPC (PROS-15)

# Next

- Second biochemical recurrence, go to PROS-11
- Metachronous oligometastatic CSPC, go to PROS-13
- Low-volume M1 or synchronous oligometastatic CSPC, go to PROS-14
- High-volume M1 CSPC, go to PROS-15
- PSA progression after RT with no treatment for a first BCR, go to PROS-10
