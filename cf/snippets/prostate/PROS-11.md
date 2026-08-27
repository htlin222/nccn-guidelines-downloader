+++
id           = "prostate/PROS-11"
gid          = "prostate"
ref          = "PROS-11"
page         = 27
title        = "Staging imaging for a second biochemical recurrence, and which arm it lands in"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-9", "PROS-10", "PROS-12", "PROS-13", "PROS-14", "PROS-15", "PROS-16", "PROS-17"]

[facets]
disease   = "prostate"
stage     = "recurrent"
timepoint = ["recurrence", "staging", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "staging_imaging"
type = "text"
[[variables]]
name = "castration_status"
type = "enum"
options = ["CSPC", "CRPC"]
[[variables]]
name = "n_stage"
type = "enum"
options = ["N0", "N1"]
[[variables]]
name = "m_stage"
type = "enum"
options = ["M0", "M1"]
[[variables]]
name = "metastatic_burden"
type = "enum"
options = ["oligometastatic", "polymetastatic"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-11, p27
- Applies to a second biochemical recurrence (BCR2)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Second biochemical recurrence (BCR2)
- Staging imaging performed ___ (staging_imaging)
- Castration status ___ (castration_status)
- Nodal status ___ (n_stage)
- Metastatic status ___ (m_stage)
- If M1, metastatic burden ___ (metastatic_burden)

# Workup

- Perform imaging for staging
    - Principles of Imaging (PROS-E)

# Classify the result

- N0M0 CSPC
- N1M0 CSPC
- M0 CRPC, N0 or N1
- M1 CSPC
    - Oligometastatic CSPC
        - Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - Polymetastatic CSPC
- M1 CRPC

# Next

- N0M0 CSPC, treatment and monitoring for second biochemical recurrence (N0M0), go to PROS-12
- M0 CRPC, N0 or N1, workup and treatment of M0 CRPC, go to PROS-16
- N1M0 CSPC, or M1 oligometastatic CSPC
    - Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - Workup and treatment of metachronous oligometastatic CSPC, go to PROS-13
    - Workup and treatment of low-volume M1, metachronous or synchronous, or synchronous oligometastatic CSPC, go to PROS-14
- Polymetastatic CSPC, workup and treatment of high-volume M1 CSPC, go to PROS-15
- M1 CRPC, workup and treatment of M1 CRPC, go to PROS-17
