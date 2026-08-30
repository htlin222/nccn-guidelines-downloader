+++
id           = "genetics_ceg/AFAP-2"
gid          = "genetics_ceg"
ref          = "AFAP-2"
page         = 103
title        = "Attenuated FAP genetic testing and surveillance for an at-risk family member when the familial APC pathogenic variant is known"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["AFAP-1", "FAP-2"]

[facets]
disease   = "genetics_ceg"
biomarker = ["apc", "afap"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relationship_to_proband"
type = "text"
[[variables]]
name = "familial_apc_pv"
type = "text"
[[variables]]
name = "apc_testing_status"
type = "enum"
options = ["positive", "negative", "not tested"]
[[variables]]
name = "last_colonoscopy"
type = "text"
[[variables]]
name = "adenoma_findings"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, AFAP-2, p103
- Attenuated FAP genetic testing and surveillance: family history of attenuated FAP, pathogenic variant known
- Applies to an asymptomatic family member at risk, with the family PV known
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, asymptomatic family member at risk
- Relationship to the affected proband ___ (relationship_to_proband)
- Known familial APC PV ___ (familial_apc_pv)
- APC germline testing status ___ (apc_testing_status)
- Last colonoscopy ___ (last_colonoscopy)
- Adenomas found ___ (adenoma_findings)

# Genetic testing

- Recommend APC germline testing for the familial PV
    - If a first-degree relative is unavailable or unwilling to be tested, more distant relatives should be offered testing for the known PV in the family

# If APC positive

- High-quality colonoscopy beginning in late teens, then every 1–2 y
    - If adenomas, follow pathway for AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)

# If APC negative

- Follow NCCN Guidelines for Colorectal Cancer Screening

# If not tested

- Discuss advantages of genetic testing
    - Including avoidance of costs, burden, and risks associated with frequent colonoscopy if an APC PV is ruled out
- If genetic testing not completed, high-quality colonoscopy beginning in late teens, then every 2 y
    - If adenomas found, manage based on AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)
    - If no adenomas found, continue surveillance colonoscopy every 2 y
        - If multiple surveillance exams without adenomas on follow-up, may lengthen interval further based on clinical judgment

# Next

- APC positive with adenomas found on surveillance, go to AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)
- Not tested with adenomas found on surveillance, manage based on AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)
- APC negative, go to NCCN Guidelines for Colorectal Cancer Screening
