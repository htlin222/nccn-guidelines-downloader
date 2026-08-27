+++
id           = "small_bowel/SBA-4"
gid          = "small_bowel"
ref          = "SBA-4"
page         = 10
title        = "Findings and primary treatment for pMMR/MSS jejunal or ileal adenocarcinoma"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-6", "SBA-8", "SBA-B", "SBA-C", "SBA-D"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
biomarker = ["pmmr", "mss"]
timepoint = ["primary-treatment", "metastatic"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "location"
type = "enum"
options = ["jejunum", "ileum"]
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "findings"
type = "enum"
options = ["resectable", "locally unresectable or medically inoperable", "distant metastatic disease"]
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-4, p10
- Applies to clinical location jejunum/ileum, pMMR/MSS
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical location ___ (location)
- MMR/MSI status ___ (mmr_status), pMMR/MSS
- Findings ___ (findings)
- Counsel for familial malignancies, and consider for risk assessment
    - Applies to all patients with SBA
    - Lynch syndrome (HNPCC)
    - FAP
    - Other polypoid mutations
    - Refer to the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Primary treatment if resectable

- Resection with en bloc removal of regional lymph nodes
    - Principles of Surgery (SBA-C)
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed

# Primary treatment if locally unresectable or medically inoperable

- Palliative diversion or bypass, if obstructed
- And/or systemic therapy
    - FOLFOX
    - or CAPEOX
    - or Fluorouracil/leucovorin
    - or capecitabine
    - or FOLFIRINOX
- Reevaluate for conversion to resectable disease

# Primary treatment if distant metastatic disease

- Palliative diversion, if obstructed
- Surgery or Systemic Therapy (SBA-D)

# Next

- Resectable, after resection, go to Pathologic Stage, Adjuvant Therapy, and Surveillance (SBA-6)
- Locally unresectable or medically inoperable, reevaluate for conversion to resectable disease
- Distant metastatic disease, go to Metastatic Adenocarcinoma (SBA-8)
