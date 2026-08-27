+++
id           = "esophageal/ESOPH-18"
gid          = "esophageal"
ref          = "ESOPH-18"
page         = 31
title        = "Postoperative management of adenocarcinoma after resection following preoperative chemoradiation or systemic therapy"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-17", "ESOPH-20", "ESOPH-21", "ST-1"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
timepoint = "adjuvant"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "preop_therapy"
type = "enum"
options = ["preoperative chemoradiation", "preoperative systemic therapy"]
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

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-18, p31
- Applies to adenocarcinomas
- Applies only to patients who have received preoperative chemoradiation or preoperative systemic therapy
- Surgical outcomes / clinical pathologic findings after resection
- See Staging (ST-1) for tumor classification
- Systemic therapy given per Principles of Systemic Therapy (ESOPH-F)
- Radiation therapy given per Principles of Radiation Therapy (ESOPH-G)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, adenocarcinoma
- Preoperative therapy received ___ (preop_therapy)
- Whether systemic therapy was received perioperatively
- Resection performed ___ (surgery_date)
- Resection margin status ___ (resection_status)
    - R0 = no cancer at resection margins
    - R1 = microscopic residual cancer
    - R2 = macroscopic residual cancer or M1
- Pathologic findings after preoperative therapy, yp ___ (yp_stage)
    - The yp prefix is used to indicate cases in which staging is performed following preoperative therapy

# Postoperative management after R0 resection

- yp T0, N0
    - Systemic therapy, if received perioperatively (category 1)
        - Give per Principles of Systemic Therapy (ESOPH-F)
        - Supporting reference: Al-Batran SE, et al. Lancet 2019;393:1948-1957
    - or Observation, if patient not a candidate for further systemic therapy
- yp T positive and/or N positive
    - Based on current data, adjuvant chemoradiation is not recommended for patients who are at high risk
    - Systemic therapy, if received perioperatively (category 1)
        - Give per Principles of Systemic Therapy (ESOPH-F)
        - Supporting reference: Al-Batran SE, et al. Lancet 2019;393:1948-1957
    - or Nivolumab, if preoperative chemoradiation received (category 1)
        - Give per Principles of Systemic Therapy (ESOPH-F)
        - Manage toxicity per NCCN Guidelines for the Management of Immune Checkpoint Inhibitor-Related Toxicities
    - or Observation, if patient not a candidate for further systemic therapy

# Postoperative management after R1 resection

- Chemoradiation (fluoropyrimidine-based), only if RT not received preoperatively
    - Systemic therapy component per Principles of Systemic Therapy (ESOPH-F)
    - Radiation component per Principles of Radiation Therapy (ESOPH-G)
- or Observation
- or Consider re-resection

# Postoperative management after R2 resection

- Chemoradiation (fluoropyrimidine-based), only if RT not received preoperatively
    - Systemic therapy component per Principles of Systemic Therapy (ESOPH-F)
    - Radiation component per Principles of Radiation Therapy (ESOPH-G)
- or Palliative Management (ESOPH-21)

# Next

- After postoperative management, go to Follow-up (ESOPH-20)
- If palliative management is chosen, go to Palliative Management (ESOPH-21)
