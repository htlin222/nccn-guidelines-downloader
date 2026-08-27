+++
id           = "gastric/GAST-4"
gid          = "gastric"
ref          = "GAST-4"
page         = 15
title        = "Postoperative management by resection status and pathologic findings, for patients who have not received systemic therapy"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-7", "GAST-9", "ST-1"]

[facets]
disease   = "gastric"
histology = "any"
stage     = "any"
timepoint = ["adjuvant", "surveillance"]
intent    = ["curative", "palliative"]

[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["R0", "R1", "R2"]
[[variables]]
name = "dissection"
type = "enum"
options = ["D2", "less than D2"]
[[variables]]
name = "submucosal_invasion"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "neural_invasion"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "age"
type = "number"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-4, p15
- Applies to surgical outcomes and clinical pathologic findings in patients who have not received systemic therapy
- Tumor classification: see Staging (ST-1)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (ptnm)
- Resection status ___ (resection)
    - R0 = no cancer at resection margins
    - R1 = microscopic residual cancer
    - R2 = macroscopic residual cancer or M1
- Lymph node dissection ___ (dissection)
    - Principles of Surgery (GAST-C)
- Submucosal invasion, if pT1b ___ (submucosal_invasion)
    - Superficial pT1b is defined as ≤500 µm invasion of submucosa
    - Deep pT1b is defined as >500 µm invasion of submucosa
- High-risk features
    - Poorly differentiated or higher grade cancer ___ (grade)
    - Lymphovascular invasion (LVI) ___ (lvi)
    - Neural invasion ___ (neural_invasion)
    - Age ___ (age), high risk if <50 years of age
    - Did not undergo D2 lymph node dissection

# R0 resection, postoperative management by tumor classification

- pTis or pT1a, N0
    - Observation
- Superficial pT1b
    - Observation
- Deep pT1b or pT2, N0
    - Observation
    - or Fluoropyrimidine (fluorouracil or capecitabine), then fluoropyrimidine-based chemoradiation, then fluoropyrimidine (fluorouracil or capecitabine), for selected patients
        - Selected patients = those with high-risk features: poorly differentiated or higher grade cancer, lymphovascular invasion (LVI), neural invasion, or <50 years of age, or patients who did not undergo D2 lymph node dissection
        - Principles of Systemic Therapy (GAST-F)
        - Principles of Radiation Therapy (GAST-G)
        - Smalley SR, et al. J Clin Oncol 2012;30:2327-2333
- pT3, pT4, Any N or Any pT, N+
    - Fluoropyrimidine (fluorouracil or capecitabine), then fluoropyrimidine-based chemoradiation, then fluoropyrimidine (fluorouracil or capecitabine), if less than a D2 dissection (category 1)
        - Principles of Systemic Therapy (GAST-F)
        - Principles of Radiation Therapy (GAST-G)
        - Smalley SR, et al. J Clin Oncol 2012;30:2327-2333
    - or Chemotherapy for patients who have undergone primary D2 lymph node dissection (category 1)
        - Principles of Surgery (GAST-C)
        - Principles of Systemic Therapy (GAST-F)

# R1 resection, postoperative management

- Chemoradiation (fluoropyrimidine-based)
    - Principles of Systemic Therapy (GAST-F)
    - Principles of Radiation Therapy (GAST-G)

# R2 resection, postoperative management

- Chemoradiation (fluoropyrimidine-based)
    - Principles of Systemic Therapy (GAST-F)
    - Principles of Radiation Therapy (GAST-G)
- or Palliative Management (GAST-9), as clinically indicated

# Next

- Follow-up, go to GAST-7
- pM1, palliative management, go to GAST-9
