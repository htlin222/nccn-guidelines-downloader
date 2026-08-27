+++
id           = "cervical/CERV-8"
gid          = "cervical"
ref          = "CERV-8"
page         = 19
title        = "Treatment of invasive carcinoma found incidentally after simple/total hysterectomy"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-6", "CERV-10", "CERV-B", "CERV-D", "CERV-F"]

[facets]
disease   = "cervical"
histology = ["squamous", "adenocarcinoma"]
stage     = "I"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "hysterectomy_type"
type = "enum"
options = ["simple", "total"]
[[variables]]
name = "path_stage"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "lvsi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "depth_of_invasion"
type = "number"
[[variables]]
name = "imaging_result"
type = "text"
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-8, p19
- Applies to an incidental finding of invasive squamous cell or usual type adenocarcinoma after simple/total hysterectomy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, invasive carcinoma found incidentally on ___ (hysterectomy_type) hysterectomy specimen
- Pathologic stage ___ (path_stage)
- Histology and grade ___ (histology)
- Margins for cancer ___ (margin_status)
- LVSI ___ (lvsi)
- Tumor size ___ (tumor_size) cm
- Depth of invasion ___ (depth_of_invasion) mm
- Imaging for metastatic disease ___ (imaging_result)

# Pathologic stage IA1

- No LVSI, negative margins
    - Surveillance (CERV-10)
- Stage IA1 with LVSI and negative margins, choose one
    - Pelvic lymphadenectomy (preferred)
        - If negative node(s), surveillance (CERV-10)
        - If positive node(s), adjuvant treatment (CERV-6)
    - Pelvic EBRT ± brachytherapy ± concurrent platinum-containing chemotherapy, when specimen integrity unknown
        - Radiation per Principles of Radiation Therapy (CERV-D)
        - Concurrent platinum-containing chemotherapy with EBRT uses cisplatin as a single agent, or carboplatin if cisplatin intolerant (CERV-F)
        - Then surveillance (CERV-10)

# Stage IA2-IB1 cervical carcinoma, based on total hysterectomy and all conservative surgery criteria met

- Confirm every criterion before using this arm
    - Negative margins for cancer
    - No LVSI (preferred)
    - Squamous cell (any grade), or usual type adenocarcinoma (grade 1 or 2) (preferred)
    - Tumor size ≤2 cm
    - Depth of invasion <10 mm
    - Negative imaging for metastatic disease, MRI recommended
- Treatment, choose one
    - Pelvic lymphadenectomy (preferred)
        - If negative node(s), surveillance (CERV-10)
        - If positive node(s), adjuvant treatment (CERV-6)
    - Pelvic EBRT ± brachytherapy ± concurrent platinum-containing chemotherapy, when specimen integrity unknown
        - Radiation per Principles of Radiation Therapy (CERV-D)
        - Concurrent platinum-containing chemotherapy with EBRT uses cisplatin as a single agent, or carboplatin if cisplatin intolerant (CERV-F)
        - Then surveillance (CERV-10)

# Any hysterectomy with a positive margin for cancer

- Positive margin here means invasive cancer at the surgical margin
- Imaging workup for metastatic disease, per Principles of Imaging (CERV-B)
    - Negative for distant metastases
        - Pelvic EBRT + concurrent platinum-containing chemotherapy + brachytherapy (CERV-D)
        - Concurrent platinum-containing chemotherapy uses cisplatin as a single agent, or carboplatin if cisplatin intolerant (CERV-F)
        - Then surveillance (CERV-10)
    - Positive for distant metastases
        - Adjuvant treatment (CERV-6)

# Next

- Negative node(s) after pelvic lymphadenectomy, go to Surveillance (CERV-10)
- Positive node(s) after pelvic lymphadenectomy, go to Adjuvant Treatment (CERV-6)
- Completed pelvic EBRT arm, go to Surveillance (CERV-10)
- No LVSI with negative margins, stage IA1, go to Surveillance (CERV-10)
- Positive for distant metastases on the positive-margin arm, go to Adjuvant Treatment (CERV-6)
