+++
id           = "small_bowel/SBA-3"
gid          = "small_bowel"
ref          = "SBA-3"
page         = 9
title        = "Duodenal adenocarcinoma that is dMMR/MSI-H or POLE/POLD1 ultra-hypermutated: findings and primary treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-2", "SBA-7", "SBA-8", "SBA-B", "SBA-C", "SBA-D", "SBA-E"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["primary-treatment", "neoadjuvant", "metastatic"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_status"
type = "enum"
options = ["dMMR/MSI-H", "POLE mutation", "POLD1 mutation"]
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "findings"
type = "enum"
options = ["resectable", "locally unresectable or medically inoperable", "distant metastatic disease"]
[[variables]]
name = "obstruction"
type = "enum"
options = ["obstructed", "not obstructed"]
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-3, p9
- Clinical location: duodenum
- Applies to dMMR/MSI-H, or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb)
- All patients with SBA should be counseled for familial malignancies and considered for risk assessment
    - Includes Lynch syndrome (HNPCC), FAP, and other polypoid mutations
    - Refer to the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Duodenal adenocarcinoma
- ___ (ctnm)
- MMR/MSI ___ (mmr_status)
- TMB ___ (tmb) mut/Mb
- Findings ___ (findings)
- Obstruction ___ (obstruction)

# Resectable

- Resection with en bloc removal of regional lymph nodes
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed
    - Principles of Surgery (SBA-C)
- or consider neoadjuvant checkpoint inhibitor immunotherapy, for T4 or bulky primary
    - See SBA-D 2 of 12 for checkpoint inhibitor therapy options

# Locally unresectable or medically inoperable

- Palliative diversion or stent, if obstructed
- and/or one of the following
    - Checkpoint inhibitor immunotherapy
        - See SBA-D 2 of 12 for checkpoint inhibitor therapy options
    - or FOLFOX
    - or CAPEOX
    - or FOLFIRINOX
    - or chemo/RT with capecitabine or infusional fluorouracil
        - Principles of Radiation Therapy (SBA-E)
        - Preoperative chemo/RT should be considered in patients who remain unresectable following a course of induction chemotherapy
- Reevaluate for conversion to resectable disease

# Distant metastatic disease

- Palliative diversion or stent, if obstructed
- Metastatic Adenocarcinoma (SBA-8)

# Next

- Resectable, after resection go to Pathologic Stage, Adjuvant Therapy, and Surveillance (SBA-7)
- Locally unresectable or medically inoperable, after reevaluation for conversion go to Surgery or Systemic Therapy (SBA-D)
- Distant metastatic disease, go to Metastatic Adenocarcinoma (SBA-8)
