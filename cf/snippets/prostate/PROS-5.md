+++
id           = "prostate/PROS-5"
gid          = "prostate"
ref          = "PROS-5"
page         = 17
title        = "Initial therapy for the unfavorable intermediate-risk group, by expected patient survival"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-7A", "PROS-8", "PROS-9", "PROS-10", "PROS-F"]

[facets]
disease   = "prostate"
timepoint = ["primary-treatment", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "life_expectancy"
type = "enum"
options = ["5-10 y", ">10 y"]
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "initial_therapy"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-5, p17
- Applies to the unfavorable intermediate-risk group
- Initial therapy is chosen by expected patient survival, estimated per Principles of Life Expectancy Estimation (PROS-A)
- Initial therapy options also covered by Principles of Focal/Subtotal Therapy or Whole Gland Ablative Therapy (PROS-I)
- Footnotes on PROS-7A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, unfavorable intermediate-risk prostate cancer
- Expected patient survival ___ (life_expectancy)
- PSA ___ (psa)
- Initial therapy chosen ___ (initial_therapy)

# Expected patient survival greater than 10 y

- Active surveillance of unfavorable intermediate-risk clinically localized cancer is not recommended with life expectancy >10 y (category 1)
- RP, per Principles of Surgery (PROS-K)
- RT, per Principles of Radiation Therapy (PROS-J), plus ADT (4-6 mo)
    - For details on the use of ADT and androgen receptor pathway inhibitors (ARPIs), see Principles of Androgen Deprivation Therapy (PROS-G)
    - See also Principles of Survivorship in Prostate Cancer (PROS-B)

# After RP

- Undetectable PSA
    - No adverse features and no lymph node metastases
        - Go to Monitoring for Initial Definitive Therapy (PROS-8)
    - Adverse feature(s) or lymph node metastases
        - Adverse pathologic features are positive margin(s), seminal vesicle invasion, or extracapsular extension
        - Monitoring (category 1, preferred for adverse features) (PROS-8)
        - OR consider treatment (PROS-9)
- PSA persistence
    - PSA persistence after RP is PSA not falling to undetectable levels
    - PSA recurrence after RP is undetectable PSA with a subsequent detectable PSA that increases on 2 or more determinations, or increases to PSA >0.1 ng/mL
    - Trials showing noninferiority of early RT compared with adjuvant RT after RP used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
    - Imaging and treatment at lower PSA levels may be appropriate at high risk for progression, based on pretreatment risk factors, pathologic parameters, timing of recurrence, and genomic classifier (GC) score, among other factors
    - Go to Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)

# After RT plus ADT

- Biochemical recurrence
    - Phoenix consensus: PSA increase by 2 ng/mL or more above the nadir PSA is the standard definition of PSA recurrence after external beam RT (EBRT) with or without hormone therapy
    - Consider a recurrence evaluation once PSA is confirmed to be increasing after radiation even if the increase above nadir is under 2 ng/mL, especially in candidates for secondary local therapy who are young and healthy
    - Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition, especially in patients who are younger or healthier
    - Go to Radiation Therapy Recurrence (PROS-10)
- No biochemical recurrence
    - Go to Monitoring for Initial Definitive Therapy (PROS-8)

# Expected patient survival 5-10 y

- Observation
    - Observation involves monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms, or a change in examination or PSA that suggests symptoms are imminent
    - See Principles of Active Surveillance and Observation (PROS-F)
    - If asymptomatic with life expectancy 5 y or less, no imaging or treatment is indicated until the patient becomes symptomatic
        - At that time imaging can be performed, per Principles of Imaging (PROS-E)
        - ADT should be given, per Principles of Androgen Deprivation Therapy (PROS-G)
    - Go to Monitoring (PROS-8)

# Next

- Monitoring for Initial Definitive Therapy, go to PROS-8
- Consider treatment for adverse feature(s) or lymph node metastases after RP, go to PROS-9
- Radical Prostatectomy PSA Persistence/Recurrence, go to PROS-9
- Radiation Therapy Recurrence, go to PROS-10
