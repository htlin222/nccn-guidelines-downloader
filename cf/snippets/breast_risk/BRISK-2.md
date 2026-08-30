+++
id           = "breast_risk/BRISK-2"
gid          = "breast_risk"
ref          = "BRISK-2"
page         = 7
title        = "Additional familial risk assessment and whether the individual desires risk-reducing therapy"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-1", "BRISK-5", "BRISK-7", "BRISK-A", "BRISK-B", "BRISK-C"]

[facets]
disease   = "breast_risk"
timepoint = ["risk-reduction", "prevention"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "intact_breast"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "germline_result"
type = "text"
[[variables]]
name = "pedigree"
type = "text"
[[variables]]
name = "personal_history"
type = "text"
[[variables]]
name = "risk_model"
type = "text"
[[variables]]
name = "risk_estimate"
type = "text"
[[variables]]
name = "life_expectancy"
type = "number"
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-2, p7
- Additional familial risk assessment
- Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
- The use of polygenic risk scores (PRS) as part of standard of care in breast cancer risk assessment is discouraged
    - Further validation is required to understand interaction of single nucleotide polymorphisms (SNPs) with environmental or hormonal risk factors and disease subtype in diverse populations
    - Ongoing research will shed light on utility of PRS in comprehensive risk assessment models to guide personalized therapy
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- At least one intact breast ___ (intact_breast)
- Known genetic predisposition, testing result ___ (germline_result)
- Pedigree / family history ___ (pedigree)
- Personal history of atypical hyperplasia (AH) or lobular carcinoma in situ (LCIS) ___ (personal_history)
- Risk estimation model used ___ (risk_model)
- Estimated breast cancer risk ___ (risk_estimate)
- Estimated life expectancy ___ (life_expectancy) years

# Familial risk criteria, any one of

- Known genetic predisposition
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
- Pedigree suggestive of genetic predisposition
    - Individual meets one or more of the familial risk criteria (BRISK-1)
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
- Personal history of atypical hyperplasia (AH) / lobular carcinoma in situ (LCIS), or a strong family history of breast cancer
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
    - For risk models that are largely dependent on family history (eg, Tyrer-Cuzick, BRCAPro, CanRisk/BOADICEA), see Comparison of Risk Assessment Models (BRISK-C)
    - For breast cancer screening recommendations, see NCCN Guidelines for Breast Cancer Screening and Diagnosis
- Elevated risk of breast cancer based on validated risk estimation models (BRISK-C)
    - Polygenic risk scores are discouraged as part of standard of care in breast cancer risk assessment
    - A change in personal or family history should prompt re-calculation of risk
    - A diagnosis of new pathogenic germline variant or AH should be considered outside of risk models, as they may not accurately estimate breast cancer risk
        - The Gail model underestimates risk for individuals with AH
        - The Tyrer-Cuzick model overestimates risk for individuals with AH
    - Reassess any variant of uncertain significance (VUS) to determine if it has been re-classified to a pathogenic/likely pathogenic variant

# Life expectancy requirement

- Life expectancy at least 10 years
    - Applies to patients with at least one intact breast for whom risk-reducing therapy is recommended
    - See life expectancy calculator (www.eprognosis.com)
    - For a reference point, the life expectancy of the average 78-year-old patient assigned female at birth (AFAB) in the United States is 10.2 years
    - See NCCN Guidelines for Older Adult Oncology

# Next

- Individual desires risk-reducing therapy, go to BRISK-5
- Individual does not desire risk-reducing therapy
    - Counsel on healthy lifestyles and risk reduction options
        - Components of Risk/Benefit Assessment and Counseling (BRISK-A)
        - See BRISK-B for risk reduction agents and details on dosing
    - Go to BRISK-7
