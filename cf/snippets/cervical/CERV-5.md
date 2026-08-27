+++
id           = "cervical/CERV-5"
gid          = "cervical"
ref          = "CERV-5"
page         = 16
title        = "Primary treatment (non-fertility-sparing) of stage IB1 not meeting conservative surgery criteria, IB2, IIA1, IB3, and IIA2"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-6", "CERV-10", "CERV-4"]

[facets]
disease   = "cervical"
stage     = ["I", "II"]
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "operable"
type = "enum"
options = ["operable", "medically inoperable"]
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-5, p16
- Non-fertility-sparing primary treatment
- Applies to stage IB1 not meeting conservative surgery criteria, stage IB2, stage IIA1, stage IB3, and stage IIA2
- Clinical stage assigned per Principles of Imaging (CERV-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage ___ (clinical_stage)
- Tumor size ___ (tumor_size)
- ___ (operable)
- Cisplatin ___ (cisplatin_tolerance)
- Fertility sparing not planned

# Stage IB1 not meeting conservative surgery criteria, stage IB2, stage IIA1

- Type C1 radical hysterectomy + pelvic lymphadenectomy (category 1)
    - Per Principles of Evaluation and Surgical Staging (CERV-C)
    - SLN mapping may be used instead of pelvic lymphadenectomy
        - Best detection rates and mapping results are in tumors <2 cm
    - With or without para-aortic lymphadenectomy (category 2B)
        - Per Principles of Evaluation and Surgical Staging (CERV-C)
- or Pelvic EBRT + brachytherapy
    - Per Principles of Radiation Therapy (CERV-D)
    - Radiation can be an option for patients who are medically inoperable
    - With or without concurrent platinum-containing chemotherapy
        - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)

# Stage IB3 and stage IIA2

- Pelvic EBRT + concurrent platinum-containing chemotherapy + brachytherapy (category 1)
    - Per Principles of Radiation Therapy (CERV-D)
    - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
    - Induction chemotherapy (carboplatin/paclitaxel) followed by single-agent cisplatin (or carboplatin) and radiation given according to the INTERLACE protocol could be considered
- or Type C1 radical hysterectomy + pelvic lymphadenectomy
    - Per Principles of Evaluation and Surgical Staging (CERV-C)
    - With or without para-aortic lymphadenectomy (category 2B)
- or Pelvic EBRT + concurrent platinum-containing chemotherapy + brachytherapy + selective completion hysterectomy (category 3 for completion hysterectomy)
    - Consider only if the tumor shows a poor response with evidence of residual disease after chemoradiation + image-guided brachytherapy (IGBT)
    - Or in patients for whom IGBT is not feasible

# Next

- After Type C1 radical hysterectomy, go to Surgical Findings (CERV-6)
- After pelvic EBRT + brachytherapy, go to Surveillance (CERV-10)
- After pelvic EBRT + concurrent chemotherapy + brachytherapy, go to Surveillance (CERV-10)
- After pelvic EBRT + concurrent chemotherapy + brachytherapy + selective completion hysterectomy, go to Surveillance (CERV-10)
