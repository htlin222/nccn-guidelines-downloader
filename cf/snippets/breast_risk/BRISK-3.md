+++
id           = "breast_risk/BRISK-3"
gid          = "breast_risk"
ref          = "BRISK-3"
page         = 8
title        = "Elements that increase or decrease breast cancer risk in an individual without familial risk criteria"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-4"]

[facets]
disease   = "breast_risk"
timepoint = ["prevention", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "ethnicity"
type = "text"
[[variables]]
name = "bmi"
type = "number"
[[variables]]
name = "alcohol"
type = "text"
[[variables]]
name = "hormone_agents"
type = "text"
[[variables]]
name = "age_menarche"
type = "number"
[[variables]]
name = "parity"
type = "text"
[[variables]]
name = "age_first_birth"
type = "number"
[[variables]]
name = "menopause_age"
type = "number"
[[variables]]
name = "lcis_ah"
type = "text"
[[variables]]
name = "prior_biopsies"
type = "number"
[[variables]]
name = "breast_density"
type = "text"
[[variables]]
name = "thoracic_rt"
type = "text"
[[variables]]
name = "prior_agent"
type = "text"
[[variables]]
name = "exercise"
type = "text"
[[variables]]
name = "breastfeeding"
type = "text"
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-3, p8
- Applies to an individual who does not meet any of the familial risk criteria, or who tests negative for a genetic predisposition
- Management of DCIS and invasive breast cancer is not covered here, see the NCCN Guidelines for Breast Cancer
- Elements of risk reference: Table 2 in Nattinger AB, et al. Breast Cancer Screening and Prevention. Ann Intern Med 2016;164:ITC81-TTC96
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Does not meet any of the familial risk criteria, or tests negative for a genetic predisposition

# Elements that increase risk

- Family history ___ (family_history)
- Increasing age
- Ethnicity/race ___ (ethnicity)
    - There are differences in risk associated with race and ethnicity
    - Further studies are needed for social determinants of health and existing health care disparities to better understand this relationship
- Lifestyle factors
    - Increased body mass index (BMI) ___ (bmi)
    - Alcohol consumption ___ (alcohol)
    - Current or prior combined estrogen and progesterone hormone agents ___ (hormone_agents)
        - Based on observational data, hormonal intrauterine devices (IUDs) have very low systemic absorption and very low associated breast cancer risk
        - There are insufficient data regarding the use of testosterone, through any route of administration, and its impact on breast cancer risk at this time
- Reproductive history
    - Younger age at menarche ___ (age_menarche)
    - Nulliparity/lower parity ___ (parity)
    - Older age at first live birth ___ (age_first_birth)
    - Older age at menopause ___ (menopause_age)
- Other
    - History of LCIS; AH (ductal and/or lobular) ___ (lcis_ah)
    - Number of prior breast biopsies ___ (prior_biopsies)
        - Count a procedure done with the intent to diagnose cancer
        - Multiple biopsies (needle/excision) of the same lesion are scored as one biopsy
    - Mammographic breast density, heterogeneously and/or extremely dense breasts ___ (breast_density)
    - Prior thoracic radiation therapy (RT) 10–30 y of age ___ (thoracic_rt)

# Elements that decrease risk

- Menopause before age 45 y
- Prior risk-reducing agent ___ (prior_agent)
- Exercise ___ (exercise)
- Breastfeeding ___ (breastfeeding)

# Next

- For breast cancer risk assessment and management, go to BRISK-4
