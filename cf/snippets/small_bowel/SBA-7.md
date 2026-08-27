+++
id           = "small_bowel/SBA-7"
gid          = "small_bowel"
ref          = "SBA-7"
page         = 13
title        = "Adjuvant treatment and surveillance after resection of dMMR/MSI-H or POLE/POLD1 ultra-hypermutated small bowel adenocarcinoma"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-3", "SBA-8", "SBA-B", "SBA-D", "SBA-E", "SBA-F"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "location"
type = "enum"
options = ["duodenum", "jejunum", "ileum"]
[[variables]]
name = "mmr_status"
type = "enum"
options = ["dMMR/MSI-H", "POLE mutation", "POLD1 mutation"]
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "prior_neoadjuvant_io"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-7, p13
- Location: duodenum, or jejunum/ileum
- Applies to dMMR/MSI-H, or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Location ___ (location)
- MMR/MSI ___ (mmr_status)
- TMB ___ (tmb) mut/Mb
- Pathologic stage ___ (ptnm)
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed
- Margin ___ (margin)
- Received neoadjuvant immunotherapy ___ (prior_neoadjuvant_io)

# Adjuvant treatment

- Enrollment in a clinical trial is encouraged
- Principles of Systemic Therapy (SBA-D 4 of 12)
- T1-3, N0, M0
    - Observation
- T4, N0, M0
    - Observation
    - or FOLFOX + atezolizumab
    - or CAPEOX + atezolizumab
    - or FOLFOX
    - or CAPEOX
- T Any, N1-2
    - FOLFOX + atezolizumab
    - or CAPEOX + atezolizumab
    - or FOLFOX
    - or CAPEOX
- If atezolizumab is used
    - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
- Duration of chemotherapy 3-6 mo
    - No patients with SBA were included in the IDEA pooled analysis of adjuvant colon cancer trials
    - In the absence of any direct data regarding SBA, the finding of noninferior 3-year disease-free survival with 3 months of CAPEOX compared to 6 months of CAPEOX in colon cancer may be extrapolated
- For duodenal cancers, if positive margin, consider sequential chemo/RT with capecitabine or infusional fluorouracil
    - Principles of Radiation Therapy (SBA-E)

# Surveillance

- No studies have been performed to assess ideal surveillance intervals for SBA; the data in colorectal cancer surveillance is currently accepted as appropriate for SBA
- History and physical examination every 3-6 mo for 2 y, then every 6 mo for a total of 5 y
- CEA and CA 19-9 every 3-6 mo for 2 y, then every 6 mo for a total of 5 y
- Chest/abdomen/pelvis CT every 6-12 mo for 2 y, then every 12 mo for y 3-5
- FDG-PET/CT is not indicated
- Routine capsule endoscopy is not indicated
- Principles of Survivorship (SBA-F)

# Next

- Recurrence, go to SBA-8
