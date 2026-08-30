+++
id           = "genetics_ceg/FAP-2"
gid          = "genetics_ceg"
ref          = "FAP-2"
page         = 87
title        = "Genetic testing and colonoscopic surveillance for an at-risk family member when the classical FAP pathogenic variant is known"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["FAP-1", "AFAP-1", "HRS-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["apc", "fap"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relationship_to_proband"
type = "text"
[[variables]]
name = "familial_pv"
type = "text"
[[variables]]
name = "apc_result"
type = "enum"
options = ["positive", "negative", "not tested"]
[[variables]]
name = "colonoscopy_findings"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric v1.2026, FAP-2, p87
- Applies to a family history of classical FAP with a pathogenic variant known in the family
- Applies to an asymptomatic family member at risk
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Relationship to the proband: ___ (relationship_to_proband)
    - If a first-degree relative is unavailable or unwilling to be tested, more distant relatives should be offered testing for the known PV in the family
- Known PV in the family: ___ (familial_pv)
- Asymptomatic
- APC germline testing result: ___ (apc_result)
- Colonoscopy findings: ___ (colonoscopy_findings)

# Genetic testing

- Recommend APC germline testing for the familial PV
    - FAP genetic testing in children should be done by age 10–15 y, when colon screening would be initiated
    - If there is intent to do hepatoblastoma screening, FAP genetic testing should be considered in infancy

# Surveillance if APC positive

- High-quality colonoscopy (preferred) every 12 mo beginning at age 10–15 y
    - Colonoscopy is preferred due to the possibility of missing right-sided polyps when limiting to sigmoidoscopy
    - Based on patient and family preference or clinical judgment, sigmoidoscopy may also be considered
    - Earlier initiation of screening can be considered based on family history
    - Individuals with active symptoms (eg, bleeding, anemia, persistent diarrhea) should undergo appropriate endoscopic workup regardless of age

# Surveillance if APC negative

- Follow the NCCN Guidelines for Colorectal Cancer Screening

# Surveillance if not tested

- Discuss advantages of genetic testing, including avoidance of costs, burden, and risks associated with frequent colonoscopy if the APC PV is ruled out
- If genetic testing not completed, high-quality colonoscopy every 12 mo beginning at age 10–15 y
    - Colonoscopy is preferred due to the possibility of missing right-sided polyps when limiting to sigmoidoscopy
    - Based on patient and family preference or clinical judgment, sigmoidoscopy may also be considered
    - Earlier initiation of screening can be considered based on family history
    - Individuals with active symptoms (eg, bleeding, anemia, persistent diarrhea) should undergo appropriate endoscopic workup regardless of age
- If no adenomas found, can lengthen the interval after age 15 y to every 2 y
    - If multiple surveillance exams without adenomas on follow-up, may lengthen the interval further, based on clinical judgment

# Next

- APC positive with adenomas, follow the pathway for Classical FAP Treatment and Surveillance: Personal History (FAP-1)
- Not tested and adenomas found, manage based on Classical FAP Treatment and Surveillance: Personal History (FAP-1)
- APC negative, go to the NCCN Guidelines for Colorectal Cancer Screening
