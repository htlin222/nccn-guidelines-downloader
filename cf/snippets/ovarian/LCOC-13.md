+++
id           = "ovarian/LCOC-13"
gid          = "ovarian"
ref          = "LCOC-13"
page         = 29
title        = "Malignant germ cell tumors: initial or completion surgery, and the observation option for the incompletely staged"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-14", "LCOC-B", "OV-A", "OV-B"]

[facets]
disease    = "ovarian"
timepoint  = ["diagnosis", "staging", "primary-treatment"]
population = "fertility"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "prior_surgery"
type = "enum"
options = ["none", "prior surgery done"]
[[variables]]
name = "staging_status"
type = "enum"
options = ["completely staged", "incompletely staged"]
[[variables]]
name = "fertility_desired"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "imaging_result"
type = "text"
[[variables]]
name = "tumor_markers"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, Less Common Ovarian Cancers, LCOC-13, p29
- Applies to malignant germ cell tumors
- Standard recommendation includes a patient evaluation by a gynecologic oncologist
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Malignant germ cell tumor, histology ___ (histology)
- Prior surgery for this tumor: ___ (prior_surgery)
- Staging status: ___ (staging_status)
- Fertility desired: ___ (fertility_desired)
- Imaging: ___ (imaging_result)
- Tumor markers: ___ (tumor_markers)

# Initial surgery, no prior surgery

- Surgical principles for pediatric/young adult patients may differ from those for adult patients, see Principles of Surgery (OV-B)
- Fertility desired
    - Fertility-sparing surgery and comprehensive staging (OV-B)
    - Then Treatment (LCOC-14)
- Fertility not desired
    - Complete staging surgery (OV-B)
    - Then Treatment (LCOC-14)

# Prior surgery, completely staged

- Surgical principles for pediatric/young adult patients may differ from those for adult patients, see Principles of Surgery (OV-B)
- Treatment (LCOC-14)

# Prior surgery, incompletely staged

- Surgical principles for pediatric/young adult patients may differ from those for adult patients, see Principles of Surgery (OV-B)
- Imaging studies if not previously done
    - See Principles of Imaging (OV-A)
- Then take the histology-specific pathway below

# Incompletely staged, dysgerminoma or grade 1 immature teratoma

- Negative imaging and positive tumor markers
    - Consider observation (category 2B) with close monitoring of tumor markers until normalization (LCOC-B)
    - Repeat imaging if tumor markers plateau at significant abnormal level or rise
    - If that imaging is positive, follow the positive imaging and positive tumor markers pathway below
- Negative imaging and negative tumor markers
    - Consider observation (category 2B) (LCOC-B)
- Positive imaging and positive tumor markers
    - Fertility desired, then fertility-sparing surgery and comprehensive staging (OV-B)
    - Fertility not desired, then completion staging surgery with possible tumor reductive surgery (OV-B)
    - or Chemotherapy (LCOC-14)

# Incompletely staged, embryonal, endodermal sinus tumor (yolk sac tumor), grade 2-3 immature teratoma, nongestational choriocarcinoma, or mixed histology

- Negative imaging and positive or negative tumor markers
    - Fertility desired, then fertility-sparing surgery and comprehensive staging (OV-B)
    - Fertility not desired, then completion staging surgery (OV-B)
    - Then Treatment (LCOC-14)
- Positive imaging and positive tumor markers
    - Treatment (LCOC-14)

# Next

- Treatment (LCOC-14)
- Observation and monitoring of tumor markers (LCOC-B)
