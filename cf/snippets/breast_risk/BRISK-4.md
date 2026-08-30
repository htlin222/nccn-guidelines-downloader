+++
id           = "breast_risk/BRISK-4"
gid          = "breast_risk"
ref          = "BRISK-4"
page         = 9
title        = "Non-familial risk assessment and the risk management branch it selects"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-5", "BRISK-6", "BRISK-7", "BRISK-A", "BRISK-B", "BRISK-C"]

[facets]
disease   = "breast_risk"
timepoint = ["prevention", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_factor"
type = "enum"
options = ["atypical hyperplasia", "history of LCIS", "prior thoracic RT", "elevated risk by validated model", "none"]
[[variables]]
name = "intact_breast"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "risk_model"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-4, p9
- Non-familial risk assessment, and the risk management it leads to
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Non-familial risk factor: ___ (risk_factor)
- At least one intact breast: ___ (intact_breast)
- Validated risk estimation model used, and the estimate: ___ (risk_model)
- Life expectancy: ___ (life_expectancy)

# Non-familial risk categories

- Atypical hyperplasia, or history of LCIS
    - and life expectancy at least 10 years
- Prior thoracic RT at 10–30 years of age
    - and life expectancy at least 10 years
    - These individuals are at a significantly elevated risk for breast cancer, and risk reduction options should be strongly considered
- Elevated risk of breast cancer based on validated risk estimation models (BRISK-C)
    - and life expectancy at least 10 years
    - The use of PRS as part of standard of care in breast cancer risk assessment is discouraged
        - Further validation is required to understand interaction of SNPs with environmental or hormonal risk factors and disease subtype in diverse populations
- Any of the assessed familial and non-familial risks, but life expectancy under 10 years
- The life expectancy criteria apply to patients with at least one intact breast for whom risk-reducing therapy is recommended
- Life expectancy: see the life expectancy calculator (www.eprognosis.com)
    - Reference point: the life expectancy of the average 78-year-old patient AFAB in the United States is 10.2 years
    - See NCCN Guidelines for Older Adult Oncology

# Risk management: atypical hyperplasia or history of LCIS

- Risk-reducing agent is strongly recommended (BRISK-6 and BRISK-B)
    - Individuals with AH have an 86% reduction in risk with an endocrine agent
    - LCIS has a >50% reduction in risk with an endocrine agent
    - Risk-reducing endocrine agents should be strongly recommended for individuals with AH and LCIS
    - For risk-reducing endocrine therapy agent options, see BRISK-6
- If the individual does not desire risk-reducing therapy, see BRISK-7 for surveillance recommendations
- Counsel on healthy lifestyles (BRISK-A)
    - Components of Risk/Benefit Assessment and Counseling are on BRISK-A

# Risk management: prior thoracic RT, or elevated risk by validated model

- Individual desires risk-reducing therapy (BRISK-5)
- Individual does not desire risk-reducing therapy (BRISK-7)
- Counsel regarding healthy lifestyles (BRISK-A)

# Risk management: life expectancy under 10 years

- Applies to any of the assessed familial and non-familial risks
- Counsel individuals on healthy lifestyles and risk reduction options (BRISK-A)
    - Components of Risk/Benefit Assessment and Counseling are on BRISK-A
    - See BRISK-B for risk reduction agents and details on dosing

# Next

- Individual desires risk-reducing therapy, go to BRISK-5
- Individual does not desire risk-reducing therapy, go to BRISK-7 for surveillance recommendations
- Risk-reducing agents and dosing, go to BRISK-6 and BRISK-B
- Risk/benefit assessment and counseling components, go to BRISK-A
- Validated risk estimation models, go to BRISK-C
