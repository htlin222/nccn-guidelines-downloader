+++
id           = "colon/COL-12"
gid          = "colon"
ref          = "COL-12"
page         = 21
title        = "Primary treatment of nonmetastatic dMMR/MSI-H or POLE/POLD1 ultra-hypermutated colon cancer, by clinical presentation"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-A", "COL-C", "COL-E", "COL-2", "COL-13", "COL-14", "COL-16"]

[facets]
disease   = "colon"
stage     = ["I", "II", "III"]
biomarker = ["dmmr", "msi-h", "tmb-high"]
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["resectable non-obstructing", "resectable obstructing", "clinical T4b or bulky nodal disease", "locally unresectable or medically inoperable"]
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colon Cancer v2.2026, COL-12, p21
- Applies to dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb) colon cancer (nonmetastatic)
- All patients with colon cancer should be counseled for family history and considered for risk assessment
    - For patients with suspected LS, FAP, and attenuated FAP, see the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- For tools to aid in optimal assessment and care of older adults with cancer, see the NCCN Guidelines for Older Adult Oncology
- Primary treatment on this page assumes the patient is a candidate for immunotherapy
    - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
- Principles of Imaging (COL-A) applies to primary treatment
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- MMR or MSI status ___ (mmr_msi)
- POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb) ___ (pole_pold1)
- Nonmetastatic disease
- Clinical presentation ___ (presentation)
- Candidate for immunotherapy ___ (immunotherapy_candidate)

# Resectable, non-obstructing

- Colectomy with en bloc removal of regional lymph nodes
    - Principles of Surgery and Locoregional Therapies (COL-C)
- or Consider neoadjuvant checkpoint inhibitor immunotherapy (COL-D 5 of 17)
    - For T4 or bulky primary

# Resectable, obstructing

- One-stage colectomy with en bloc removal of regional lymph nodes
    - Principles of Surgery and Locoregional Therapies (COL-C)
- or Resection with diversion
- or Diversion
- or Stent
    - In selected cases

# Clinical T4b or bulky nodal disease

- Consider neoadjuvant therapy
    - Checkpoint inhibitor immunotherapy (preferred) (COL-D 5 of 17)
    - or FOLFOX
    - or CAPEOX
- Then colectomy with en bloc removal of regional lymph nodes
    - Principles of Surgery and Locoregional Therapies (COL-C)

# Locally unresectable or medically inoperable

- Checkpoint inhibitor immunotherapy (preferred) (COL-D 5 of 17)
- and Consider RT prior to surgery
    - With or without infusional fluorouracil or capecitabine
    - Principles of Radiation and Chemoradiation Therapy (COL-E)
- Evaluate for complete response or conversion to resectability
    - Surgery, with or without IORT
        - Principles of Radiation and Chemoradiation Therapy (COL-E)
    - or Systemic therapy (COL-16)
    - or Observation

# Next

- After colectomy, go to Pathologic Stage, Adjuvant Treatment, and Surveillance (COL-13)
- After surgery for locally unresectable or medically inoperable disease, go to Adjuvant therapy (COL-14)
- Without surgery, systemic therapy (COL-16) or observation
