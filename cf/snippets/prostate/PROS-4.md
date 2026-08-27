+++
id           = "prostate/PROS-4"
gid          = "prostate"
ref          = "PROS-4"
page         = 16
title        = "Initial therapy for the favorable intermediate-risk group, by expected patient survival"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-2", "PROS-8", "PROS-9", "PROS-10"]

[facets]
disease   = "prostate"
timepoint = ["primary-treatment", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "life_expectancy"
type = "enum"
options = [">10 y", "5-10 y"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-4, p16
- Applies to the favorable intermediate-risk group
- Initial Risk Stratification and Staging Workup for Clinically Localized Disease: PROS-2
- Expected patient survival: Principles of Life Expectancy Estimation (PROS-A)
- Initial therapy: Principles of Focal/Subtotal Therapy or Whole Gland Ablative Therapy (PROS-I)
- Footnotes on PROS-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Favorable intermediate-risk group
- PSA ___ (psa)
- Expected patient survival ___ (life_expectancy)

# Initial therapy, expected patient survival >10 y

- Active surveillance
    - Actively monitoring the course of disease with the expectation to intervene with potentially curative therapy if the cancer progresses (PROS-F)
    - Confirmatory testing can be used to assess the appropriateness of active surveillance (PROS-F 2 of 5)
        - If higher grade and/or higher T stage is found during confirmatory testing, see PROS-2
    - Particular consideration to active surveillance may be appropriate in the favorable intermediate-risk group with
        - Low percentage of Gleason pattern 4 cancer
        - Low tumor volume
        - Low PSA density
        - Low genomic risk, from tissue-based molecular tumor analysis
    - Enter Active Surveillance Program (PROS-F 2 of 5)
    - Progressive disease, go to PROS-2
        - Criteria for progression are not well-defined and require physician judgment
        - A change in risk group strongly implies disease progression
- Radical prostatectomy, see Principles of Surgery (PROS-K)
- Radiation therapy, see Principles of Radiation Therapy (PROS-J)

# After radical prostatectomy

- No adverse features and no lymph node metastases
    - Monitoring for Initial Definitive Therapy (PROS-8)
- Adverse feature(s) or lymph node metastases
    - Adverse pathologic features are positive margin(s), seminal vesicle invasion, or extracapsular extension
    - Monitoring (category 1, preferred for adverse features) (PROS-8)
    - OR consider treatment (PROS-9)
- Undetectable PSA
- PSA persistence
    - PSA does not fall to undetectable levels
    - Or undetectable PSA after RP with a subsequent detectable PSA that increases on ≥2 determinations, or increases to PSA >0.1 ng/mL
    - Trials indicating noninferiority of early RT compared with adjuvant RT after RP have used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
    - Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression, based on pretreatment risk factors, pathologic parameters, timing of recurrence, and genomic classifier score
    - Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)

# After radiation therapy

- Biochemical recurrence, Radiation Therapy Recurrence (PROS-10)
    - Phoenix consensus: PSA increase by ≥2 ng/mL above the nadir PSA is the standard definition for PSA recurrence after external beam RT, with or without hormone therapy
    - A recurrence evaluation should be considered when PSA has been confirmed to be increasing after radiation even if the increase above nadir is <2 ng/mL, especially in candidates for secondary local therapy who are young and healthy
    - Rapid increase of PSA may warrant evaluation with prostate biopsy prior to meeting the Phoenix definition, especially in patients who are younger or healthier
- No biochemical recurrence
    - Monitoring for Initial Definitive Therapy (PROS-8)

# Initial therapy, expected patient survival 5-10 y

- Observation (preferred)
    - Monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms, or a change in examination or PSA that suggests symptoms are imminent (PROS-F)
    - For asymptomatic patients in low- and intermediate-risk groups with life expectancy ≤5 years, no imaging or treatment is indicated until the patient becomes symptomatic
        - At that time imaging can be performed, see Principles of Imaging (PROS-E)
        - And ADT should be given, see Principles of Androgen Deprivation Therapy (PROS-G)
- Monitoring (PROS-8)

# Next

- Active surveillance, go to Active Surveillance Program (PROS-F 2 of 5)
- Progression on active surveillance, go to PROS-2
- Post-prostatectomy monitoring, go to PROS-8
- PSA persistence or adverse features after prostatectomy, go to PROS-9
- Biochemical recurrence after radiation therapy, go to PROS-10
- Observation with expected patient survival 5-10 y, go to PROS-8
