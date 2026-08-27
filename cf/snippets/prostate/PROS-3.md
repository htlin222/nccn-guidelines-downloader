+++
id           = "prostate/PROS-3"
gid          = "prostate"
ref          = "PROS-3"
page         = 15
title        = "Initial therapy for the low-risk group, by expected patient survival"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-2", "PROS-F", "PROS-8", "PROS-9", "PROS-10"]

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
options = ["10 y or more", "less than 10 y"]
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "psa_density"
type = "text"
[[variables]]
name = "positive_cores"
type = "number"
[[variables]]
name = "genomic_risk"
type = "text"
[[variables]]
name = "brca2"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-3, p15
- Applies to the low-risk group, after initial risk stratification and staging workup for clinically localized disease (PROS-2)
- Branch point is expected patient survival, estimated per Principles of Life Expectancy Estimation (PROS-A)
- Initial therapy options follow Principles of Focal/Subtotal Therapy or Whole Gland Ablative Therapy (PROS-I)
- Footnotes on PROS-7A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, low-risk group
- Expected patient survival ___ (life_expectancy) (PROS-A)
- PSA ___ (psa)
- PSA density ___ (psa_density)
- Number of positive cores ___ (positive_cores)
- Genomic risk from tissue-based molecular tumor analysis ___ (genomic_risk)
- Known BRCA2 germline mutation ___ (brca2)

# Heterogeneity within the low-risk group

- The Panel recognizes heterogeneity across the low-risk group, and that some factors may be associated with an increased probability of near-term grade reclassification
    - High PSA density
    - High number of positive cores (eg, 3 or more)
    - High genomic risk, from tissue-based molecular tumor analysis
    - Known BRCA2 germline mutation
- In some of these cases, upfront treatment with RP or prostate RT may be preferred, based on shared decision-making with the patient (PROS-F)

# Initial therapy, expected patient survival 10 y or more

- Active surveillance, preferred for most patients
    - Actively monitoring the course of disease, with the expectation to intervene with potentially curative therapy if the cancer progresses (PROS-F)
    - Enrol in an Active Surveillance Program (PROS-F 2 of 5)
    - Confirmatory testing can be used to assess the appropriateness of active surveillance (PROS-F 2 of 5)
        - If higher grade and/or higher T stage is found during confirmatory testing, go to PROS-2
    - Progressive disease, go to PROS-2
        - Criteria for progression are not well-defined and require physician judgment
        - A change in risk group strongly implies disease progression
- Radiation therapy (RT), per Principles of Radiation Therapy (PROS-J)
    - No biochemical recurrence, go to Monitoring (PROS-8)
    - Biochemical recurrence, go to Radiation Therapy Recurrence (PROS-10)
        - RTOG-ASTRO Phoenix Consensus: PSA increase by 2 ng/mL or more above the nadir PSA is the standard definition for PSA recurrence after external beam RT (EBRT), with or without hormone therapy
        - Consider a recurrence evaluation when PSA has been confirmed to be increasing after radiation even if the increase above nadir is less than 2 ng/mL, especially in candidates for secondary local therapy who are young and healthy
        - Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition, especially in patients who are younger or healthier
- Radical prostatectomy (RP), per Principles of Surgery (PROS-K)
    - Undetectable PSA
        - No adverse features and no lymph node metastases, go to Monitoring (PROS-8)
        - Adverse feature(s) or lymph node metastases
            - Adverse pathologic features are positive margin(s), seminal vesicle invasion, or extracapsular extension
            - Monitoring (category 1, preferred for adverse features) (PROS-8)
            - OR consider treatment (PROS-9)
    - PSA persistence, go to Radical Prostatectomy PSA Persistence/Recurrence (PROS-9)
        - PSA persistence after RP is when PSA does not fall to undetectable levels
        - PSA recurrence after RP is undetectable PSA with a subsequent detectable PSA that increases on 2 or more determinations, or increases to PSA above 0.1 ng/mL
        - Trials indicating noninferiority of early RT compared with adjuvant RT after RP used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
        - Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression, based on pretreatment risk factors, pathologic parameters, timing of recurrence, and genomic classifier (GC) score, among other factors

# Initial therapy, expected patient survival less than 10 y

- Observation
    - Monitoring the course of disease, with the expectation to deliver definitive or palliative therapy for the development of symptoms, or a change in examination or PSA that suggests symptoms are imminent (PROS-F)
    - Go to Monitoring for Initial Definitive Therapy (PROS-8)
    - If asymptomatic with life expectancy 5 years or less, no imaging or treatment is indicated until the patient becomes symptomatic
        - At that time imaging can be performed, per Principles of Imaging (PROS-E)
        - ADT should be given, per Principles of Androgen Deprivation Therapy (PROS-G)

# Next

- Progressive disease on active surveillance, or higher grade / higher T stage on confirmatory testing, go to PROS-2
- Monitoring after RT without biochemical recurrence, after RP with undetectable PSA, or on observation, go to PROS-8
- Adverse feature(s) or lymph node metastases after RP, consider treatment, go to PROS-9
- PSA persistence or recurrence after RP, go to PROS-9
- Biochemical recurrence after RT, go to PROS-10
