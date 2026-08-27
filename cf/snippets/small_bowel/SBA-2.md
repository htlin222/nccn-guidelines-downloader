+++
id           = "small_bowel/SBA-2"
gid          = "small_bowel"
ref          = "SBA-2"
page         = 8
title        = "Duodenal adenocarcinoma, pMMR/MSS: findings and primary treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-6", "SBA-8", "SBA-B", "SBA-C", "SBA-D", "SBA-E"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
biomarker = ["pmmr", "mss"]
timepoint = "primary-treatment"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_location"
type = "text"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "obstruction"
type = "enum"
options = ["obstructed", "not obstructed"]
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-2, p8
- Clinical location: duodenum, pMMR/MSS
- Principles of Pathologic Review: SBA-B
- Principles of Surgery: SBA-C
- Principles of Radiation Therapy: SBA-E
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Small bowel adenocarcinoma, duodenum
- Tumor location ___ (tumor_location)
- MMR/MSI ___ (mmr_status), this page applies to pMMR/MSS
- ___ (stage)
- Obstruction ___ (obstruction)

# All patients with SBA

- Counseled for familial malignancies
- Considered for risk assessment
    - Lynch syndrome (HNPCC)
    - FAP
    - Other polypoid mutations
    - Refer to the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Findings: resectable

- Resection with en bloc removal of regional lymph nodes
    - Principles of Surgery (SBA-C)
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed

# Findings: locally unresectable or medically inoperable

- Palliative diversion or stent, if obstructed
- And/or systemic therapy, one of
    - FOLFOX
    - CAPEOX
    - Fluorouracil/leucovorin
    - Capecitabine
    - FOLFIRINOX
- Or chemo/RT with capecitabine or infusional fluorouracil
    - Principles of Radiation Therapy (SBA-E)
    - Preoperative chemo/RT should be considered in patients who remain unresectable following a course of induction chemotherapy
- Reevaluate for conversion to resectable disease

# Findings: distant metastatic disease

- Palliative diversion or stent, if obstructed

# Next

- Resectable, after resection, go to pathologic stage, adjuvant therapy, and surveillance (SBA-6)
- Locally unresectable or medically inoperable, after reevaluation for conversion to resectable disease, go to surgery or systemic therapy (SBA-D)
- Distant metastatic disease, go to metastatic adenocarcinoma (SBA-8)
