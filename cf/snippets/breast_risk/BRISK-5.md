+++
id           = "breast_risk/BRISK-5"
gid          = "breast_risk"
ref          = "BRISK-5"
page         = 10
title        = "Risk-reducing therapy desired: baseline assessment before a risk-reducing agent, and the risk-reducing mastectomy discussion"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-6", "BRISK-B", "BRISK-C"]

[facets]
disease   = "breast_risk"
timepoint = ["risk-reduction", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "uterus"
type = "enum"
options = ["intact", "absent"]
[[variables]]
name = "gail_5yr_risk"
type = "text"
[[variables]]
name = "ibis_10yr_risk"
type = "text"
[[variables]]
name = "last_breast_screening"
type = "text"
[[variables]]
name = "screening_result"
type = "enum"
options = ["normal", "abnormal"]
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-5, p10
- Applies to an individual who desires risk-reducing therapy
- Risk-reducing agents and details on dosing: BRISK-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Menopausal status: ___ (menopausal_status)
- Uterus: ___ (uterus)
- 5-year risk by modified Gail model: ___ (gail_5yr_risk)
- 10-year risk by IBIS/Tyrer-Cuzick: ___ (ibis_10yr_risk)
- Individual desires risk-reducing therapy
- Breast screening in the previous year: ___ (last_breast_screening)

# Baseline assessment if considering a risk-reducing agent

- Risk thresholds for the agent discussion
    - Can be considered and should be discussed when the 5-year risk by modified Gail model is 1.7% or higher
    - Should be recommended when the 5-year risk by Gail model is at least 3%
    - Should be recommended when the 10-year risk by IBIS/Tyrer-Cuzick is at least 5%
    - For risk models that are largely dependent on family history (eg, Tyrer-Cuzick, BRCAPro, CanRisk/BOADICEA), see Comparison of Risk Assessment Models (BRISK-C)
- See BRISK-B for risk reduction agents and details on dosing
- CYP2D6 genotype testing is not recommended in individuals considering tamoxifen
- Baseline gynecologic assessment, for individuals with intact uterus
    - Purpose is to ensure no abnormal bleeding that requires evaluation before beginning treatment
- Baseline bone density evaluation, for postmenopausal individuals only
    - Guides the choice of risk-reducing endocrine agent (eg, low baseline bone density, choose raloxifene over aromatase inhibitors)

# Breast screening

- Breast screening as per NCCN Guidelines for Breast Cancer Screening and Diagnosis, if not done in previous year
- Result: ___ (screening_result)

# Risk-reducing mastectomy discussion

- Discuss the option of risk-reducing mastectomy for only those individuals meeting criteria
    - Germline pathogenic/likely pathogenic variants in high-penetrance breast cancer susceptibility genes, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Compelling family history
    - History of chest wall radiation before 30 years of age
- While risk-reducing mastectomy has previously been considered for LCIS, the currently preferred approach for LCIS is close monitoring and therapy with a risk-reducing endocrine agent
- Risk estimation is a complex and individualized process, and the NCCN Panel does not recommend a specific risk cutoff for decision-making regarding risk-reducing mastectomy
    - Individualizing management is highly encouraged

# Next

- Breast screening normal, go to BRISK-6
- Breast screening abnormal, see NCCN Guidelines for Breast Cancer Screening and Diagnosis
- Risk-reducing mastectomy under consideration, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
