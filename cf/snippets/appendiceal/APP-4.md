+++
id           = "appendiceal/APP-4"
gid          = "appendiceal"
ref          = "APP-4"
page         = 8
title        = "Treatment of metastatic LAMN/HAMN with peritoneal-only disease"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-6", "APP-7", "APP-C", "APP-D"]

[facets]
disease   = "appendiceal"
histology = "mucinous"
stage     = "IV"
timepoint = ["metastatic", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary"
type = "enum"
options = ["LAMN", "HAMN"]
[[variables]]
name = "appendectomy"
type = "enum"
options = ["already performed", "not performed"]
[[variables]]
name = "mucin_cellularity"
type = "enum"
options = ["acellular", "cellular", "unknown"]
[[variables]]
name = "mucin_spread"
type = "enum"
options = ["localized to periappendix area", "multiquadrant intra-abdominal"]
[[variables]]
name = "deposit_grade"
type = "enum"
options = ["low-grade", "high-grade", "unknown"]
[[variables]]
name = "crs_feasible"
type = "enum"
options = ["complete CRS possible", "complete CRS not possible"]
[[variables]]
name = "symptomatic"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-4, p8
- Applies to metastatic LAMN/HAMN with peritoneal-only disease
- Multidisciplinary team evaluation, including formal surgical evaluation
- Principles of Surgery and CRS/IPCT: APP-C
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary: ___ (primary)
- Appendectomy ___ (appendectomy)
- Mucin cellularity ___ (mucin_cellularity)
- Mucin spread ___ (mucin_spread)
- Peritoneal deposits ___ (deposit_grade)
- Diagnostic laparoscopy and/or CT scan: ___ (crs_feasible)
- Symptomatic ___ (symptomatic)
- Multidisciplinary team evaluation done, including formal surgical evaluation

# Acellular mucin localized to the periappendix area, or low-grade peritoneal deposits, or pathology of peritoneal deposits unknown

- Observation, if appendectomy already performed
- or Localized cytoreductive surgery (CRS) with or without intraperitoneal chemotherapy (IPCT)
    - Principles of Surgery and CRS/IPCT (APP-C)
- Then surveillance (APP-6)

# Acellular mucin with multiquadrant intra-abdominal spread, or cellular mucin, or cellularity of mucin unknown

- CRS with or without IPCT
    - Principles of Surgery and CRS/IPCT (APP-C)
    - Then surveillance (APP-6)
- If diagnostic laparoscopy and/or CT scan suggests complete CRS not possible
    - Observation
    - Clinical trial
    - Consider palliative CRS with or without IPCT, if symptomatic
        - Principles of Surgery and CRS/IPCT (APP-C)
    - Consider systemic therapy (APP-D 1 of 11)
        - With early discontinuation if no observed response

# High-grade peritoneal deposits

- High-grade peritoneal deposits behave clinically like high-risk disease
- Follow the high-risk treatment pathways, even if the primary is low grade
- See metastatic AA/GCA/UC-NOS peritoneal-only disease (APP-7)

# Next

- After localized CRS with or without IPCT, or after CRS with or without IPCT, go to APP-6
- High-grade peritoneal deposits, go to APP-7
- Systemic therapy options, see APP-D 1 of 11
