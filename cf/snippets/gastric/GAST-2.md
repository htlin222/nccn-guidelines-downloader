+++
id           = "gastric/GAST-2"
gid          = "gastric"
ref          = "GAST-2"
page         = 11
title        = "Primary treatment after multidisciplinary review, by final stage, medical fitness, and resectability"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-1", "GAST-3", "GAST-4", "GAST-6", "GAST-9"]

[facets]
disease   = "gastric"
stage     = "any"
biomarker = ["msi-h", "dmmr"]
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "final_stage"
type = "enum"
options = ["locoregional-cM0", "metastatic-cM1"]
[[variables]]
name = "medically_fit"
type = "enum"
options = ["medically-fit", "nonsurgical-candidate"]
[[variables]]
name = "resectability"
type = "enum"
options = ["potentially-resectable", "surgically-unresectable"]
[[variables]]
name = "t1b_depth"
type = "enum"
options = ["superficial", "deep", "not-applicable"]
[[variables]]
name = "msi_mmr"
type = "text"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-2, p11
- Applies once the multidisciplinary review has reached its conclusions
- Final stage sets the branch: locoregional disease (cM0, Any N), or metastatic disease (cM1)
- All recommendations are category 2A unless otherwise indicated
- Footnotes for this page are on GAST-2A

# Assessment

- ___ (age) yo
- ___ (ctnm)
- Final stage: ___ (final_stage)
- Medical fitness: ___ (medically_fit)
- Resectability: ___ (resectability)
- If cT1b, depth: ___ (t1b_depth)
- MSI / MMR status: ___ (msi_mmr)

# Locoregional disease (cM0, Any N), medically fit, potentially resectable

- cTis or cT1a, or superficial cT1b
    - Nonsurgical candidate
        - ER
    - Medically fit
        - ER
        - or Surgery
- Deep cT1b
    - Surgery
- cT2 or higher, Any N
    - Surgery
    - or Perioperative systemic therapy (category 1)
    - or Consider neoadjuvant or perioperative immune checkpoint inhibitor(s) (ICI), if tumor is MSI-H/dMMR

# Locoregional disease (cM0, Any N), medically fit, surgically unresectable

- Chemoradiation
- or Systemic therapy

# Locoregional disease (cM0, Any N), nonsurgical candidate

- Palliative Management (GAST-9)

# Metastatic disease (cM1)

- Palliative Management (GAST-9)

# Next

- After ER, go to Endoscopic surveillance
- After surgery, go to Surgical Outcomes for Patients Who Have Not Received Systemic Therapy (GAST-4)
- After perioperative systemic therapy, or neoadjuvant or perioperative ICI, go to Response Assessment (GAST-3)
- After chemoradiation or systemic therapy for surgically unresectable disease, go to Post-Treatment Assessment/Additional Management (GAST-6)
- Nonsurgical candidate, or metastatic disease (cM1), go to Palliative Management (GAST-9)
