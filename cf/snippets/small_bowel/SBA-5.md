+++
id           = "small_bowel/SBA-5"
gid          = "small_bowel"
ref          = "SBA-5"
page         = 11
title        = "Jejunum/ileum dMMR/MSI-H or ultrahypermutated SBA: findings and primary treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-7", "SBA-8", "SBA-B", "SBA-C", "SBA-D"]

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
name = "primary_site"
type = "enum"
options = ["jejunum", "ileum"]
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "obstruction"
type = "enum"
options = ["obstructed", "not obstructed"]
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-5, p11
- Clinical location: jejunum/ileum
- Applies to dMMR/MSI-H, or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site ___ (primary_site)
- ___ (clinical_stage)
- MMR/MSI ___ (mmr_msi)
- POLE/POLD1 ___ (pole_pold1)
- TMB ___ (tmb) mut/Mb
- Obstruction ___ (obstruction)
- Counsel for familial malignancies, and consider for risk assessment (all patients with SBA)
    - Lynch syndrome (HNPCC)
    - FAP
    - Other polypoid mutations
    - Refer to the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- Findings, one of
    - Resectable
    - Locally unresectable or medically inoperable
    - Distant metastatic disease

# Resectable

- Resection with en bloc removal of regional lymph nodes
    - Principles of Surgery (SBA-C)
    - Principles of Pathologic Review (SBA-B)
    - Assess for celiac disease or Crohn's disease, depending on tumor location and patient history
- or Consider neoadjuvant checkpoint inhibitor immunotherapy, for T4 or bulky primary
    - Checkpoint inhibitor therapy options: SBA-D 2 of 12

# Locally unresectable or medically inoperable

- Palliative diversion or bypass, if obstructed
- and/or systemic therapy, one of
    - Checkpoint inhibitor immunotherapy
        - Checkpoint inhibitor therapy options: SBA-D 2 of 12
    - FOLFOX
    - CAPEOX
    - FOLFIRINOX
- Reevaluate for conversion to resectable disease

# Distant metastatic disease

- Palliative diversion, if obstructed

# Next

- Resected, go to Pathologic Stage, Adjuvant Therapy, and Surveillance (SBA-7)
- Locally unresectable or medically inoperable, after reevaluation for conversion, go to Surgery or Systemic Therapy (SBA-D)
- Distant metastatic disease, go to Metastatic Adenocarcinoma (SBA-8)
