+++
id           = "breast-screening/BSCR-11"
gid          = "breast-screening"
ref          = "BSCR-11"
page         = 19
title        = "Follow-up evaluation of persistent or severe breast pain"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-5", "BSCR-6", "BSCR-9", "BSCR-10", "BSCR-12"]

[facets]
disease   = "breast-screening"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "pain_duration"
type = "text"
[[variables]]
name = "pain_pattern"
type = "enum"
options = ["cyclic-diffuse-non-focal", "focal"]
[[variables]]
name = "physical_findings"
type = "text"
[[variables]]
name = "other_symptoms"
type = "text"
[[variables]]
name = "last_mammogram"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-11, p19
- Applies to persistent or severe breast pain as the presenting sign/symptom
- Persistent or severe is defined as a minimum of 4–6 weeks duration
    - Prior to that, symptomatic management, unless the patient reports other symptoms also present such as associated redness or mass
    - If other symptoms are present, physical examination should be done at that time
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Duration of breast pain ___ (pain_duration)
- Other symptoms present, such as associated redness or mass ___ (other_symptoms)
- History and physical done
- Physical findings ___ (physical_findings)
- Pain pattern ___ (pain_pattern)
- Date and result of most recent mammogram ___ (last_mammogram)

# No physical findings, cyclic, diffuse, non-focal pain (larger than quadrant)

- Reassurance
- Ensure that mammographic screening is up-to-date
- Symptomatic treatment of breast related pain if needed/desired
    - Patients with non-breast related pain may be referred back to the initial provider for management
    - See Discussion for further details on symptomatic management of breast pain

# No physical findings, focal pain

- Age ≥30 y
    - Diagnostic mammogram with tomosynthesis
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
        - There are some clinical circumstances such as a suspected painful simple cyst in which ultrasound would be preferred as the first imaging modality, and may suffice for individuals aged 30–39 years
        - Mammogram may not be necessary if performed and results were negative within the past 6 months
        - See Discussion
    - Plus ultrasound
- Age <30 y
    - Ultrasound
        - If high suspicion for malignancy by ultrasound, obtain diagnostic mammogram

# Next

- Palpable symptoms, go to BSCR-6
- Nipple discharge, go to BSCR-9
- Skin changes, go to BSCR-10
- Focal pain after imaging, go to BSCR-12
