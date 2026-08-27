+++
id           = "fatigue/FT-3"
gid          = "fatigue"
ref          = "FT-3"
page         = 7
title        = "Screening every patient for cancer-related fatigue and triaging by age-specific severity"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["FT-4", "FT-5"]

[facets]
disease   = "fatigue"
timepoint = ["screening", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "scale_used"
type = "enum"
options = ["0-10", "none-mild-moderate-severe", "1-5", "tired-or-not-tired"]
[[variables]]
name = "fatigue_score"
type = "text"
[[variables]]
name = "severity_band"
type = "enum"
options = ["none to mild", "moderate", "severe"]
+++

# Source

- NCCN Cancer-Related Fatigue v2.2026, FT-3, p7
- Screening applies to every patient with cancer
- Screening resources: see Discussion Appendix
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Scale used for this age group ___ (scale_used)
- Fatigue severity ___ (fatigue_score)
- Severity band ___ (severity_band)

# Screening

- Screen every patient for fatigue at regular intervals
- Recommended screen and re-evaluation question: How would you rate your fatigue on a scale of 0-10 over the past 7 days?
- Age >12 y
    - Severity on a 0-10 scale
        - 0 = No fatigue
        - 10 = Worst fatigue you can imagine
        - Scale reference: Butt Z, et al. J Pain Symptom Manage 2008;35:20-30
    - Or None, mild, moderate, severe
- Age 7-12 y
    - Severity on a 1-5 scale
        - 1 = Not tired
        - 5 = Worst
- Age 5-6 y
    - Use tired or not tired

# Result: none to mild

- Age >12 y: none to mild (0-3), by the recommended 0-10 screen over the past 7 days
- Age 7-12 y: (1-2)
- Age 5-6 y: (Not tired)
- Education, counseling, and general strategies for management of fatigue (FT-5), with an emphasis on continued surveillance
- Ongoing evaluation

# Result: moderate or severe

- Age >12 y: moderate (4-6) or severe (7-10), by the recommended 0-10 screen over the past 7 days
- Age 7-12 y: moderate (3) or severe (4-5)
- Age 5-6 y: (Tired)
- Education, counseling, and general strategies for management of fatigue (FT-5)

# Next

- None to mild, continue ongoing evaluation and re-screen at regular intervals
- Moderate or severe, go to Primary Evaluation (FT-4)
