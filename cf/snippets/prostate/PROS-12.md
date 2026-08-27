+++
id           = "prostate/PROS-12"
gid          = "prostate"
ref          = "PROS-12"
page         = 28
title        = "Treatment and monitoring for second biochemical recurrence (N0M0)"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-11", "PROS-13", "PROS-15", "PROS-17"]

[facets]
disease   = "prostate"
stage     = "recurrent"
timepoint = ["recurrence", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_therapy"
type = "enum"
options = ["RP", "RT", "RP with postoperative RT", "prior adjuvant or secondary RT"]
[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "nadir_psa"
type = "number"
[[variables]]
name = "psadt"
type = "number"
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "pelvic_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "rt_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-12, p28
- Applies to N0M0 second biochemical recurrence (M0)
- Risk stratification into low-risk BCR or high-risk BCR drives everything on this page
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- N0M0, second biochemical recurrence
- Prior therapy ___ (prior_therapy)
- PSA ___ (psa) ng/mL
- Nadir PSA ___ (nadir_psa) ng/mL
- PSADT ___ (psadt) months
- Imaging ___ (imaging), for M0 by CT, MRI, or bone scan
- Considered a candidate for pelvic-directed therapy ___ (pelvic_candidate)
- Considered a candidate for RT ___ (rt_candidate)

# Risk stratification

- PSA level and PSADT should be considered when deciding whether to begin ADT for patients considered to have lower risk disease
- High-risk BCR has different definitions in different clinical trials that generally include a PSADT ≤9 months and other adverse prognostic features

# Low-risk BCR

- Monitoring (preferred)
    - Physical exam
    - PSA every 3–6 months
    - Imaging for symptoms or increasing PSA
- or ADT
    - PSA level and PSADT should be considered when deciding whether to begin ADT for patients considered to have lower risk disease
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)

# High-risk BCR

- Monitoring
    - Physical exam
    - PSA every 3–6 months
    - Imaging for symptoms or increasing PSA
- Enzalutamide ± leuprolide
    - Only for patients who have all of the following high-risk criteria
        - M0 by CT, MRI, or bone scan
        - PSADT ≤9 months
        - PSA ≥2 ng/mL above nadir after RT, or ≥1 ng/mL after RP with or without postoperative RT
        - Not considered a candidate for pelvic-directed therapy
    - If favorable PSA response, an intermittent ADT approach should be considered
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- Apalutamide + ADT (category 2B)
    - Only for patients with biochemical recurrence after RP who meet all of the following high-risk criteria
        - PSADT ≤9 months
        - PSA ≥0.5 ng/mL
        - Prior adjuvant or secondary RT, or not considered a candidate for RT
    - If favorable PSA response, an intermittent ADT approach should be considered
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- ADT
    - If favorable PSA response, an intermittent ADT approach should be considered
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)

# Monitoring on treatment

- Physical exam
- PSA every 3–6 months
- Imaging for symptoms or increasing PSA

# Progression

- Document castrate levels of testosterone if clinically indicated
- Workup for progression should include bone and soft tissue evaluation
    - Principles of Imaging (PROS-E)
- Classify as oligometastatic CSPC, polymetastatic CSPC, or M1 CRPC
    - See Number of Metastatic Sites in the Principles of MDT (PROS-M)

# Next

- Oligometastatic CSPC, workup and treatment of metachronous oligometastatic CSPC, go to PROS-13
- Low-volume M1 (metachronous or synchronous), or synchronous oligometastatic CSPC, go to PROS-14
- Polymetastatic CSPC, high-volume M1 CSPC, go to PROS-15
- M1 CRPC, workup and treatment of M1 CRPC, go to PROS-17
