+++
id           = "breast_risk/BRISK-1"
gid          = "breast_risk"
ref          = "BRISK-1"
page         = 6
title        = "Familial risk assessment: does this individual meet familial/genetic risk criteria"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-2", "BRISK-3"]

[facets]
disease   = "breast_risk"
timepoint = ["genetic-testing", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "personal_history"
type = "enum"
options = ["none", "invasive breast cancer", "DCIS"]
[[variables]]
name = "germline_result"
type = "text"
[[variables]]
name = "maternal_family_history"
type = "text"
[[variables]]
name = "paternal_family_history"
type = "text"
[[variables]]
name = "meets_criteria"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-1, p6
- Familial risk assessment
- Criteria are those outlined in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal history of invasive breast cancer or ductal carcinoma in situ (DCIS): ___ (personal_history)
- Known germline pathogenic/likely pathogenic variant: ___ (germline_result)
- Family history, maternal side: ___ (maternal_family_history)
- Family history, paternal side: ___ (paternal_family_history)

# Familial/genetic factors to review

- Known germline pathogenic/likely pathogenic variants conferring elevated risk for breast cancer
    - For the full list, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Individuals identified as having a variant of uncertain significance should be treated on the basis of their family history
- Individuals with no personal history of invasive breast cancer or DCIS
    - Refer to the criteria for further genetic risk evaluation outlined in NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - The criteria for further genetic risk assessment and the criteria for genetic testing are not identical
    - When evaluating family history, include a family history of invasive breast cancer or DCIS
    - Consider the maternal and paternal sides of the family independently for familial patterns of cancer

# Decision

- Individual meets one or more of the familial/genetic risk criteria outlined in NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate: ___ (meets_criteria)

# Next

- Yes, meets one or more criteria
    - Referral to a genetic counselor or other health professional with expertise and experience in cancer genetics
        - For further details regarding the nuances of genetic counseling and testing, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
        - If not tested, treatment should be based on family history and other risk factors listed on BRISK-3
    - AND see BRISK-2
- No, does not meet criteria, go to BRISK-3
