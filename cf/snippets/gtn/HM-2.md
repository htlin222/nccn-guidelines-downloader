+++
id           = "gtn/HM-2"
gid          = "gtn"
ref          = "HM-2"
page         = 8
title        = "Staging, treatment, and monitoring of persistent postmolar GTN"
nccn_version = "2.2026"
nccn_date    = "11/21/25"
generated    = "2026-08-28"
see_also     = ["HM-1", "HM-A", "GTN-1", "GTN-2", "GTN-3", "GTN-4", "GTN-A", "ST-1", "ST-2"]

[facets]
disease   = "gtn"
timepoint = ["diagnosis", "staging", "primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "hcg_values"
type = "text"
[[variables]]
name = "hcg_interval"
type = "number"
[[variables]]
name = "pelvic_exam"
type = "text"
[[variables]]
name = "imaging_findings"
type = "text"
[[variables]]
name = "extrauterine_disease"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "histopathology"
type = "text"
[[variables]]
name = "figo_stage"
type = "text"
[[variables]]
name = "prognostic_score"
type = "number"
+++

# Source

- NCCN Guidelines Version 2.2026, Hydatidiform Mole, HM-2, p8
- Applies to a patient under post-molar hCG monitoring whose findings indicate persistent postmolar GTN
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, on post-molar hCG monitoring
- Serial hCG values ___ (hcg_values)
- Interval covered ___ (hcg_interval) weeks
- Pelvic exam ___ (pelvic_exam)
- Imaging ___ (imaging_findings)
- Extrauterine disease ___ (extrauterine_disease)
- Histopathology ___ (histopathology)
- FIGO stage ___ (figo_stage), prognostic score ___ (prognostic_score)

# Findings indicating persistent postmolar GTN

- One or more of the following
    - hCG levels plateau for 4 consecutive values over 3 weeks
    - hCG levels rise ≥10% for 3 values over 2 weeks

# Staging

- H&P, including pelvic exam
- Imaging
    - See Principles of Imaging (HM-A)
- Determine FIGO stage and prognostic score
    - See FIGO Staging System for GTN (ST-1)
    - See Prognostic Scoring Index for GTN (ST-2)

# Treatment, no extrauterine disease

- Consider repeat D&C
    - WHO ≤4
- or Single-agent systemic therapy as in GTN-2
- or Hysterectomy with salpingectomy

# Monitoring

- hCG levels normalize
    - hCG assay every 2 weeks until 3 consecutive normal assays
    - Followed by monthly for 6–12 months
- Persistent hCG elevation (plateau or rise)

# Next

- Persistent hCG elevation (plateau or rise), chemotherapy as in GTN-3
- Extrauterine disease
    - Low-risk GTN (<7 prognostic score), go to GTN-2
        - Prognostic score per ST-1 and ST-2
    - High-risk GTN (≥7 prognostic score) or Stage IV, go to GTN-4
        - Prognostic score per ST-1 and ST-2
- Histopathologic diagnosis of choriocarcinoma, placental site trophoblastic tumor (PSTT)/epithelioid trophoblastic tumor (ETT), and/or presence of metastatic disease, go to GTN-1
    - See Principles of Pathology (GTN-A)
