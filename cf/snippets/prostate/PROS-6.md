+++
id           = "prostate/PROS-6"
gid          = "prostate"
ref          = "PROS-6"
page         = 18
title        = "Initial therapy and post-treatment branch points for the high- or very-high-risk group"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-5", "PROS-7", "PROS-8", "PROS-9", "PROS-10"]

[facets]
disease   = "prostate"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["high", "very-high"]
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["symptomatic", "asymptomatic"]
[[variables]]
name = "psa"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-6, p18
- Applies to the high- or very-high-risk group
- Footnotes on PROS-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk group ___ (risk_group)
- Expected patient survival ___ (life_expectancy), estimated per Principles of Life Expectancy Estimation (PROS-A)
- Currently ___ (symptom_status)
- PSA ___ (psa) ng/mL

# Initial therapy if expected patient survival >5 y or symptomatic

- Active surveillance of high-risk clinically localized cancer is not recommended in patients with a life expectancy >10 years (category 1)
- Initial therapy options, see Principles of Focal/Subtotal Therapy or Whole Gland Ablative Therapy (PROS-I)
- RT + androgen deprivation therapy (ADT) (12–36 mo) (category 1)
    - RT per Principles of Radiation Therapy (PROS-J)
    - For details on the use of ADT and androgen receptor pathway inhibitors (ARPIs), see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - See Principles of Survivorship in Prostate Cancer (PROS-B)
- RT + ADT (24 mo) + abiraterone
    - For very-high-risk only
    - RT per Principles of Radiation Therapy (PROS-J)
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - See Principles of Survivorship in Prostate Cancer (PROS-B)
- RP
    - Per Principles of Surgery (PROS-K)
    - RP + pelvic lymph node dissection (PLND) can be considered in patients who are younger and healthier without tumor fixation to the pelvic sidewall

# Initial therapy if expected patient survival ≤5 y and asymptomatic

- Observation
    - Observation involves monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms or a change in examination or PSA that suggests symptoms are imminent
    - See Principles of Active Surveillance and Observation (PROS-F)
- Or RT ± ADT
    - RT per Principles of Radiation Therapy (PROS-J)
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - See Principles of Survivorship in Prostate Cancer (PROS-B)

# Next after RT + ADT

- Biochemical recurrence, go to Radiation Therapy Recurrence (PROS-10)
    - RTOG-ASTRO Phoenix Consensus: PSA increase by ≥2 ng/mL above the nadir PSA is the standard definition for PSA recurrence after external beam RT (EBRT) with or without hormone therapy
    - Consider a recurrence evaluation when PSA has been confirmed to be increasing after radiation even if the increase above nadir is <2 ng/mL, especially in candidates for secondary local therapy who are young and healthy
    - Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition, especially in patients who are younger or healthier
- No biochemical recurrence, go to Monitoring for Initial Definitive Therapy (PROS-8)

# Next after RP

- PSA persistence, go to Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)
    - PSA persistence after RP is when PSA does not fall to undetectable levels
    - PSA recurrence after RP is undetectable PSA with a subsequent detectable PSA that increases on ≥2 determinations, or increases to PSA >0.1 ng/mL
    - Trials indicating noninferiority of early RT compared with adjuvant RT after RP have used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
    - Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression based on pretreatment risk factors, pathologic parameters, timing of recurrence, and genomic classifier (GC) score, among other factors
- Undetectable PSA
    - No adverse features and no lymph node metastases, go to Monitoring for Initial Definitive Therapy (PROS-8)
    - Adverse feature(s) or lymph node metastases
        - Adverse pathologic features are positive margin(s), seminal vesicle invasion, or extracapsular extension
        - Monitoring (category 1, preferred for adverse features), go to PROS-8
            - Monitoring is not preferred for patients with multiple high-risk features
        - Or consider treatment, go to PROS-9

# Next after observation or RT ± ADT

- Symptomatic progression
    - Go to Workup and Treatment of Metachronous Oligometastatic M1 CSPC (PROS-13)
    - Or Workup and Treatment of Low-Volume M1 (Metachronous or Synchronous) or Synchronous Oligometastatic CSPC (PROS-14)
    - Or Workup and Treatment of High-Volume M1 CSPC (PROS-15)
    - See Number of Metastatic Sites in the Principles of MDT (PROS-M)
