+++
id           = "prostate/PROS-10"
gid          = "prostate"
ref          = "PROS-10"
page         = 25
title        = "Treatment for a first recurrence after radiation therapy"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-8", "PROS-9", "PROS-11", "PROS-13", "PROS-14", "PROS-15"]

[facets]
disease   = "prostate"
stage     = ["recurrent", "IV"]
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "nadir_psa"
type = "number"
[[variables]]
name = "psadt"
type = "text"
[[variables]]
name = "grade_group"
type = "text"
[[variables]]
name = "dre"
type = "text"
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "nodal_status"
type = "text"
[[variables]]
name = "life_expectancy"
type = "enum"
options = [">5 y", "≤5 y"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-10, p25
- Applies to a first recurrence after radiation therapy, defined as PSA recurrence or positive DRE
- Treatment in this setting is called secondary therapy; it has historically been referred to as salvage therapy
- Footnotes on PROS-10A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, prior radiation therapy
- PSA ___ (psa) ng/mL
- Nadir PSA ___ (nadir_psa) ng/mL
- PSADT ___ (psadt)
- Grade Group ___ (grade_group)
- DRE ___ (dre)
- Bone and soft tissue imaging ___ (imaging)
- Nodal status ___ (nodal_status)
- Life expectancy ___ (life_expectancy)

# Entry criteria, PSA recurrence or positive DRE

- PSA recurrence, RTOG-ASTRO Phoenix Consensus
    - PSA increase by ≥2 ng/mL above the nadir PSA is the standard definition for PSA recurrence after EBRT with or without hormone therapy
    - Consider a recurrence evaluation when PSA has been confirmed to be increasing after radiation even if the increase above nadir is <2 ng/mL
        - Especially in candidates for secondary local therapy who are young and healthy
    - Retaining a strict version of the ASTRO definition allows comparison with a large existing body of literature
    - Rapid increase of PSA may warrant evaluation (prostate biopsy) prior to meeting the Phoenix definition
        - Especially in patients who are younger or healthier
- Positive DRE

# Workup, no evidence of M1 and life expectancy >5 y

- Risk stratification
    - PSADT can be calculated to inform nomogram use and counseling
- PSADT
    - PSADT and Grade Group should be considered when deciding whether to begin ADT
    - Principles of Androgen Deprivation Therapy (PROS-G)
- Bone and soft tissue imaging
    - Principles of Imaging (PROS-E)
- Consider prostate/seminal vesicle biopsy

# Treatment options, no evidence of M1 and life expectancy >5 y

- Monitoring
    - Physical exam
    - PSA every 3–6 mo
    - Imaging for symptoms or increasing PSA
    - For patients with PSA progression who have not received treatment for a first BCR, continue monitoring or consider treatment for first PSA persistence/recurrence
        - PROS-9 for RP PSA persistence/recurrence
        - PROS-10 for RT recurrence
- or Local secondary therapy ± ADT
    - ± abiraterone for N1
    - Principles of Local Secondary Post-Recurrence Therapy (PROS-L)
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- or ADT based on PSADT
    - PSADT and Grade Group should be considered when deciding whether to begin ADT
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- or ADT ± abiraterone for N1
    - PSADT and Grade Group should be considered when deciding whether to begin ADT
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)

# No evidence of M1, life expectancy ≤5 y

- Observation
    - Involves monitoring the course of disease with the expectation to deliver definitive or palliative therapy for the development of symptoms or a change in examination or PSA that suggests symptoms are imminent
    - Principles of Active Surveillance and Observation (PROS-F)
- Monitoring
    - Physical exam
    - PSA every 3–6 mo
    - Imaging for symptoms or increasing PSA
- On progression
    - Document castrate levels of testosterone if clinically indicated
    - Workup for progression should include bone and soft tissue evaluation, Principles of Imaging (PROS-E)
    - Treatment for a patient with life expectancy ≤5 y whose cancer progressed on observation of localized disease is ADT, Principles of Androgen Deprivation Therapy (PROS-G)

# M1 at recurrence

- Oligometastatic
    - See Number of Metastatic Sites in the Principles of MDT (PROS-M)
- Polymetastatic

# Next

- No evidence of M1, second biochemical recurrence after secondary therapy
    - Document castrate levels of testosterone if clinically indicated
    - Workup for progression should include bone and soft tissue evaluation (PROS-E)
    - Workup for Second Biochemical Recurrence (PROS-11)
- Life expectancy ≤5 y, progression on observation, palliative therapy / best supportive care
- Oligometastatic M1, workup and treatment of metachronous oligometastatic CSPC, go to PROS-13
- Low-volume M1, metachronous or synchronous, or synchronous oligometastatic CSPC, go to PROS-14
- Polymetastatic M1, workup and treatment of high-volume M1 CSPC, go to PROS-15
