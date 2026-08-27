+++
id           = "esophageal/ESOPH-7"
gid          = "esophageal"
ref          = "ESOPH-7"
page         = 18
title        = "Postoperative management after resection in squamous cell carcinoma that received preoperative chemoradiation"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-6", "ESOPH-9", "ESOPH-10", "ST-1"]

[facets]
disease   = "esophageal"
histology = "squamous"
timepoint = "adjuvant"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "surgery_date"
type = "text"
[[variables]]
name = "resection_status"
type = "enum"
options = ["R0", "R1", "R2"]
[[variables]]
name = "yp_stage"
type = "text"
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-7, p18
- Applies to squamous cell carcinoma
- Applies only to patients who have received preoperative chemoradiation
- Surgical outcomes / clinical pathologic findings after resection
- See Staging (ST-1) for tumor classification
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, squamous cell carcinoma
- Preoperative chemoradiation given
- Resection performed ___ (surgery_date)
- Resection margin status ___ (resection_status)
    - R0 = no cancer at resection margins
    - R1 = microscopic residual cancer
    - R2 = macroscopic residual cancer or M1
- Pathologic findings after preoperative therapy, yp ___ (yp_stage)
    - The yp prefix is used to indicate cases in which staging is performed following preoperative therapy

# Postoperative management after R0 resection

- yp T0, N0
    - Observation
- yp T positive and/or N positive
    - Nivolumab (category 1)
    - Give per Principles of Systemic Therapy (ESOPH-F)
    - Manage toxicity per NCCN Guidelines for the Management of Immune Checkpoint Inhibitor-Related Toxicities

# Postoperative management after R1 or R2 resection

- Observation
- or Palliative Management (ESOPH-10)

# Next

- After postoperative management, go to Follow-up (ESOPH-9)
- If palliative management is chosen, go to ESOPH-10
