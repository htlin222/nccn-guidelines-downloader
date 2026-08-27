+++
id           = "ovarian/ST-1"
gid          = "ovarian"
ref          = "ST-1"
page         = 69
title        = "AJCC TNM and FIGO primary tumor (T) categories for ovarian, fallopian tube, and primary peritoneal cancer"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-1"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "enum"
options = ["ovary", "fallopian tube", "primary peritoneal"]
[[variables]]
name = "laterality"
type = "enum"
options = ["one ovary or fallopian tube", "both ovaries or fallopian tubes"]
[[variables]]
name = "capsule"
type = "enum"
options = ["intact", "ruptured before surgery", "surgical spill"]
[[variables]]
name = "surface_involvement"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "washings"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "pelvic_extension"
type = "enum"
options = ["absent", "uterus and/or fallopian tubes and/or ovaries", "other pelvic tissues"]
[[variables]]
name = "peritoneal_metastasis"
type = "enum"
options = ["absent", "microscopic extrapelvic", "macroscopic 2 cm or less", "macroscopic more than 2 cm"]
[[variables]]
name = "retroperitoneal_nodes"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "figo_stage"
type = "text"
+++

# Source

- NCCN Ovarian Cancer / Fallopian Tube Cancer / Primary Peritoneal Cancer v4.2026, ST-1, p69
- Staging Table 1: American Joint Committee on Cancer (AJCC) TNM and FIGO Staging System for Ovarian, Fallopian Tube, and Primary Peritoneal Cancer (8th ed., 2017)
- This page carries the Primary Tumor (T) categories only; the table is continued
- Used with the permission of the American College of Surgeons, Chicago, Illinois
    - The original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site: ___ (primary_site)
- Ovaries or fallopian tubes involved: ___ (laterality)
- Capsule status: ___ (capsule)
- Tumor on ovarian or fallopian tube surface: ___ (surface_involvement)
- Malignant cells in ascites or peritoneal washings: ___ (washings)
- Pelvic extension below the pelvic brim: ___ (pelvic_extension)
- Peritoneal metastasis outside the pelvis: ___ (peritoneal_metastasis)
- Retroperitoneal (pelvic and/or para-aortic) lymph nodes: ___ (retroperitoneal_nodes)
- Assigned T category: ___ (t_category)
- Assigned FIGO stage: ___ (figo_stage)

# TX and T0

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor

# T1, FIGO I

- Tumor limited to ovaries (one or both) or fallopian tube(s)
- T1a, FIGO IA
    - Tumor limited to one ovary (capsule intact) or fallopian tube
    - No tumor on ovarian or fallopian tube surface
    - No malignant cells in ascites or peritoneal washings
- T1b, FIGO IB
    - Tumor limited to both ovaries (capsules intact) or fallopian tubes
    - No tumor on ovarian or fallopian tube surface
    - No malignant cells in ascites or peritoneal washings
- T1c, FIGO IC
    - Tumor limited to one or both ovaries or fallopian tubes, with any of the following
    - T1c1, FIGO IC1, surgical spill
    - T1c2, FIGO IC2, capsule ruptured before surgery, or tumor on ovarian or fallopian tube surface
    - T1c3, FIGO IC3, malignant cells in ascites or peritoneal washings

# T2, FIGO II

- Tumor involves one or both ovaries or fallopian tubes with pelvic extension below pelvic brim, or primary peritoneal cancer
- T2a, FIGO IIA
    - Extension and/or implants on the uterus and/or fallopian tube(s) and/or ovaries
- T2b, FIGO IIB
    - Extension to and/or implants on other pelvic tissues

# T3, FIGO III

- Tumor involves one or both ovaries or fallopian tubes, or primary peritoneal cancer, with microscopically confirmed peritoneal metastasis outside the pelvis and/or metastasis to the retroperitoneal (pelvic and/or para-aortic) lymph nodes
- T3a, FIGO IIIA2
    - Microscopic extrapelvic (above the pelvic brim) peritoneal involvement
    - With or without positive retroperitoneal lymph nodes
- T3b, FIGO IIIB
    - Macroscopic peritoneal metastasis beyond pelvis 2 cm or less in greatest dimension
    - With or without metastasis to the retroperitoneal lymph nodes
- T3c, FIGO IIIC
    - Macroscopic peritoneal metastasis beyond the pelvis more than 2 cm in greatest dimension
    - With or without metastasis to the retroperitoneal lymph nodes
    - Includes extension of tumor to capsule of liver and spleen without parenchymal involvement of either organ
