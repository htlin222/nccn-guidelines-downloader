+++
id           = "rectal/REC-7"
gid          = "rectal"
ref          = "REC-7"
page         = 18
title        = "pMMR/MSS metastatic synchronous rectal adenocarcinoma: routing by site of metastases and obstruction"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-6", "REC-8", "REC-9", "REC-C", "REC-F"]

[facets]
disease   = "rectal"
histology = "adenocarcinoma"
stage     = "IV"
biomarker = ["pmmr", "mss"]
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "met_pattern"
type = "enum"
options = ["liver only", "lung only", "liver and lung", "abdominal/peritoneal", "other sites"]
[[variables]]
name = "obstruction"
type = "enum"
options = ["nonobstructing", "obstructed", "imminent obstruction"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "medically inoperable"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-7, p18
- Applies to pMMR/MSS rectal cancer
- Applies to suspected or proven metastatic synchronous adenocarcinoma (T any, N any, M1)
- Resectability and all surgical or locoregional options here are judged by Principles of Surgery and Locoregional Therapies (REC-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- pMMR/MSS confirmed
- Sites of metastatic disease: ___ (met_sites)
- Metastatic pattern: ___ (met_pattern)
- Obstruction status of the primary: ___ (obstruction)
- Resectability of metastatic disease: ___ (resectability)

# Synchronous liver only and/or lung only metastases

- Resectable, per Principles of Surgery and Locoregional Therapies (REC-C)
    - Primary treatment (REC-8)
- Unresectable, per Principles of Surgery and Locoregional Therapies (REC-C), or medically inoperable
    - Primary treatment (REC-9)

# Synchronous abdominal/peritoneal metastases

- Nonobstructing
    - Systemic therapy (REC-F)
- Obstructed or imminent obstruction
    - Resection, per Principles of Surgery and Locoregional Therapies (REC-C)
        - Consider resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms
    - or Diverting ostomy
    - or Bowel bypass of impending obstruction
    - or Stenting, for upper rectal lesions only
    - Followed by systemic therapy (REC-F)

# Synchronous unresectable metastases of other sites

- Systemic therapy (REC-F)
- Consider resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms

# Next

- Liver only and/or lung only metastases, resectable, go to REC-8
- Liver only and/or lung only metastases, unresectable or medically inoperable, go to REC-9
- Abdominal/peritoneal metastases, nonobstructing, go to systemic therapy (REC-F)
- Abdominal/peritoneal metastases, obstructed or imminent obstruction, locoregional management then systemic therapy (REC-F)
- Unresectable metastases of other sites, go to systemic therapy (REC-F)
