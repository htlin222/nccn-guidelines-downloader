+++
id           = "prostate/PROS-8"
gid          = "prostate"
ref          = "PROS-8"
page         = 21
title        = "Monitoring after initial definitive therapy, and what counts as recurrence"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-9", "PROS-10", "PROS-13", "PROS-15", "PROS-16", "PROS-17"]

[facets]
disease   = "prostate"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_therapy"
type = "enum"
options = ["radical prostatectomy", "radiation therapy", "observation", "ADT"]
[[variables]]
name = "months_since_therapy"
type = "number"
[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "nadir_psa"
type = "number"
[[variables]]
name = "dre"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-8, p21
- Applies to monitoring after initial definitive therapy
- Also applies to N1 on ADT, and to localized disease on observation
- Footnotes on PROS-8A
- See NCCN Guidelines for Survivorship
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Initial management ___ (prior_therapy)
- ___ (months_since_therapy) mo since initial definitive therapy
- PSA ___ (psa) ng/mL
- Nadir PSA ___ (nadir_psa) ng/mL
- DRE ___ (dre)
- Life expectancy ___ (life_expectancy)

# Monitoring after initial definitive therapy

- PSA every 6–12 mo for 5 y, then every year
    - PSA as frequently as every 3 mo may be necessary to clarify disease status, especially in patients at high risk of recurrence
- Consider DRE if suspicion of recurrence

# Monitoring on N1 on ADT, or localized disease on observation

- Physical examination + PSA every 3–6 mo
- Imaging for symptoms or increasing PSA
    - Principles of Imaging (PROS-E)

# Post-RP PSA persistence/recurrence

- PSA persistence, PSA does not fall to undetectable levels after RP
- PSA recurrence, undetectable PSA after RP with a subsequent detectable PSA
    - Increases on ≥2 determinations, or
    - Increases to PSA >0.1 ng/mL
- Trials indicating non-inferiority of early RT compared with adjuvant RT after RP have used a PSA threshold of 0.1 or 0.2 ng/mL to trigger treatment
- Imaging and treatment at lower PSA levels may be appropriate in patients at high risk for progression, based on
    - Pretreatment risk factors
    - Pathologic parameters
    - Timing of recurrence
    - GC score, among other factors

# Post-RT PSA recurrence, or positive DRE

- Positive DRE
- RTOG-ASTRO Phoenix Consensus, PSA increase by ≥2 ng/mL above the nadir PSA is the standard definition for PSA recurrence after EBRT with or without hormone therapy
- Consider a recurrence evaluation when PSA has been confirmed to be increasing after radiation even if the increase above nadir is <2 ng/mL
    - Especially in candidates for secondary local therapy who are young and healthy
- Retaining a strict version of the ASTRO definition allows comparison with a large existing body of literature
- Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition
    - Especially in patients who are younger or healthier

# Radiographic evidence of metastatic disease without PSA persistence/recurrence

- Biopsy of metastatic site

# Progression on N1 ADT, or on observation for localized disease

- Document castrate levels of testosterone if clinically indicated
- Workup for progression should include bone and soft tissue evaluation
    - Principles of Imaging (PROS-E)
- Life expectancy ≤5 y and cancer progressed on observation of localized disease, treatment is ADT
    - Principles of Androgen Deprivation Therapy (PROS-G)

# Next

- Post-RP PSA persistence/recurrence, go to PROS-9
- Post-RT PSA recurrence or positive DRE, go to PROS-10
- Radiographic metastatic disease, after biopsy of metastatic site
    - Metachronous oligometastatic CSPC, go to PROS-13
        - Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - Low-volume M1, metachronous or synchronous, or synchronous oligometastatic CSPC, go to PROS-14
    - High-volume M1 CSPC, go to PROS-15
- Progression, N1 M0, systemic therapy for M0 CRPC, go to PROS-16
- Progression, M1, workup and treatment of M1 CRPC, go to PROS-17
