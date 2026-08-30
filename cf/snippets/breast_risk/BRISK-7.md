+++
id           = "breast_risk/BRISK-7"
gid          = "breast_risk"
ref          = "BRISK-7"
page         = 12
title        = "Risk-reducing therapy not desired: which risk assessment applies and where screening/follow-up is directed"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-1", "BRISK-6", "BRISK-C"]

[facets]
disease   = "breast_risk"
timepoint = ["risk-reduction", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "declines_risk_reducing_therapy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "intact_breast"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pedigree_or_known_predisposition"
type = "text"
[[variables]]
name = "ah_lcis"
type = "enum"
options = ["none", "AH", "LCIS"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "prior_thoracic_rt"
type = "text"
[[variables]]
name = "five_year_risk"
type = "number"
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-7, p12
- Applies when the individual does not desire risk-reducing therapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Individual does not desire risk-reducing therapy: ___ (declines_risk_reducing_therapy)
- At least one intact breast: ___ (intact_breast)
    - The risk categories below apply to patients with at least one intact breast for whom risk-reducing therapy is recommended
- Pedigree suggestive of, or known, genetic predisposition: ___ (pedigree_or_known_predisposition)
- Personal history of AH/LCIS: ___ (ah_lcis)
- Family history of breast cancer: ___ (family_history)
- Life expectancy: ___ (life_expectancy)
- Prior thoracic RT at 10-30 y of age: ___ (prior_thoracic_rt)
- 5-y breast cancer risk: ___ (five_year_risk) %

# Risk assessment

- Pedigree suggestive of, or known, genetic predisposition
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
- Personal history of AH/LCIS, or a strong family history of breast cancer
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
    - Strong family history means the individual meets one or more of the familial risk criteria (BRISK-1)
    - Individuals with AH have an 86% reduction in risk with an endocrine agent
    - LCIS has a >50% reduction in risk with an endocrine agent
    - Risk-reducing endocrine agents should be strongly recommended for individuals with AH and LCIS
        - For risk-reducing endocrine therapy agent options, see BRISK-6
- AH/LCIS and life expectancy 10 y or more
    - See life expectancy calculator (www.eprognosis.com)
    - For a reference point, the life expectancy of the average 78-year-old patient AFAB in the United States is 10.2 years
    - See NCCN Guidelines for Older Adult Oncology
- Prior thoracic RT at 10-30 y of age
- 5-y breast cancer risk 1.7% or more
    - Risk as defined by the National Surgical Adjuvant Breast and Bowel Project Breast Cancer Prevention Trial (NSABP BCPT)
    - See Valero MG, et al. Ann Surg Oncol 2020;27:736-740
    - For risk models that are largely dependent on family history (eg, Tyrer-Cuzick, BRCAPro, CanRisk/BOADICEA), see Comparison of Risk Assessment Models (BRISK-C)

# Next

- Pedigree suggestive of, or known, genetic predisposition
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - AND see NCCN Guidelines for Breast Cancer Screening and Diagnosis
- Personal history of AH/LCIS, or a strong family history of breast cancer
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - AND see NCCN Guidelines for Breast Cancer Screening and Diagnosis
- AH/LCIS and life expectancy 10 y or more
    - See NCCN Guidelines for Breast Cancer Screening and Diagnosis
- Prior thoracic RT at 10-30 y of age
    - See NCCN Guidelines for Breast Cancer Screening and Diagnosis
- 5-y breast cancer risk 1.7% or more
    - See NCCN Guidelines for Breast Cancer Screening and Diagnosis
