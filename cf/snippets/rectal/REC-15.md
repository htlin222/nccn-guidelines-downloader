+++
id           = "rectal/REC-15"
gid          = "rectal"
ref          = "REC-15"
page         = 28
title        = "dMMR/MSI-H or POLE/POLD1 metastatic synchronous rectal adenocarcinoma: routing by site of metastases and obstruction"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-14", "REC-16", "REC-18", "REC-C"]

[facets]
disease   = "rectal"
histology = "adenocarcinoma"
stage     = "IV"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "tmb"
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
options = ["resectable", "unresectable"]
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["candidate", "not a candidate"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-15, p28
- Applies to dMMR/MSI-H rectal cancer
- Also applies to POLE/POLD1 mutation with ultrahypermutated phenotype, eg, TMB >50 mut/Mb
- Applies to suspected or proven metastatic synchronous adenocarcinoma (T any, N any, M1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- MMR/MSI status ___ (mmr_status)
- POLE/POLD1 and TMB ___ (tmb)
- Sites of metastatic disease: ___ (met_sites)
- Metastatic pattern: ___ (met_pattern)
- Obstruction status of the primary: ___ (obstruction)
- Resectability of metastatic disease: ___ (resectability)
- Candidate for immunotherapy ___ (immunotherapy_candidate)
    - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease

# Synchronous liver only and/or lung only metastases

- Resectable
    - Primary treatment (REC-16)

# Synchronous abdominal/peritoneal metastases

- Nonobstructing
    - REC-18
- Obstructed or imminent obstruction
    - Resection, per Principles of Surgery and Locoregional Therapies (REC-C)
        - Consider resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms
    - or Diverting ostomy
    - or Bowel bypass of impending obstruction
    - or Stenting, for upper rectal lesions only
    - Then REC-18

# Synchronous unresectable metastases

- REC-18
- Consider resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms
- Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities

# Next

- Resectable liver only and/or lung only metastases, go to primary treatment (REC-16)
- Abdominal/peritoneal metastases, nonobstructing, go to REC-18
- Abdominal/peritoneal metastases, obstructed or imminent obstruction, locoregional management then REC-18
- Synchronous unresectable metastases, go to REC-18
