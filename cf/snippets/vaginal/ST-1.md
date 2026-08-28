+++
id           = "vaginal/ST-1"
gid          = "vaginal"
ref          = "ST-1"
page         = 28
title        = "AJCC TNM and FIGO surgical staging for carcinoma of the vagina"
nccn_version = "2.2026"
nccn_date    = "12/04/25"
generated    = "2026-08-28"
see_also     = ["VAG-1"]

[facets]
disease   = "vaginal"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "vagina_confined"
type = "enum"
options = ["confined to the vagina", "beyond the vagina"]
[[variables]]
name = "paravaginal"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "pelvic_sidewall"
type = "enum"
options = ["absent", "present", "hydronephrosis", "nonfunctioning kidney"]
[[variables]]
name = "bladder_rectum"
type = "enum"
options = ["absent", "bladder mucosa", "rectal mucosa", "beyond the true pelvis"]
[[variables]]
name = "nodes"
type = "enum"
options = ["cannot be assessed", "none", "isolated tumor cells", "pelvic", "inguinal"]
[[variables]]
name = "distant"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "grade"
type = "enum"
options = ["cannot be assessed", "well differentiated", "moderately differentiated", "poorly differentiated"]
[[variables]]
name = "tnm"
type = "text"
[[variables]]
name = "figo_stage"
type = "text"
+++

# Source

- NCCN Vaginal Cancer v2.2026, ST-1, p28
- Table 1: AJCC Tumor, Node, Metastasis (TNM) and International Federation of Gynecology and Obstetrics (FIGO) Surgical Staging Systems for Carcinoma of the Vagina
- AJCC Cancer Staging Manual, Eighth Edition, and the FIGO Committee on Gynecologic Oncology current FIGO staging for cancer of the vagina

# Assessment

- ___ (age) yo
- Tumor confined to the vagina: ___ (vagina_confined)
- Tumor size, greatest dimension: ___ (tumor_size)
- Invasion of paravaginal tissues: ___ (paravaginal)
- Extension to the pelvic sidewall, hydronephrosis, or nonfunctioning kidney: ___ (pelvic_sidewall)
- Invasion of bladder or rectal mucosa, or extension beyond the true pelvis: ___ (bladder_rectum)
- Regional lymph nodes: ___ (nodes)
- Distant metastasis: ___ (distant)
- Histologic grade: ___ (grade)
- Assigned T, N, M: ___ (tnm)
- Assigned FIGO stage: ___ (figo_stage)

# Primary tumor, T

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor confined to the vagina, FIGO I
    - T1a, tumor confined to the vagina, measuring 2.0 cm or less, FIGO I
    - T1b, tumor confined to the vagina, measuring more than 2.0 cm, FIGO I
- T2, tumor invading paravaginal tissues but not to pelvic sidewall, FIGO II
    - T2a, tumor invading paravaginal tissues but not to pelvic wall, measuring 2.0 cm or less, FIGO II
    - T2b, tumor invading paravaginal tissues but not to pelvic wall, measuring more than 2.0 cm, FIGO II
- T3, tumor extending to the pelvic sidewall and/or causing hydronephrosis or nonfunctioning kidney, FIGO III
    - Pelvic sidewall is defined as the muscle, fascia, neurovascular structures, or skeletal portions of the bony pelvis
    - On rectal examination, there is no cancer-free space between the tumor and pelvic sidewall
- T4, tumor invading the mucosa of the bladder or rectum and/or extending beyond the true pelvis, FIGO IVA
    - Bullous edema is not sufficient evidence to classify a tumor as T4

# Regional lymph nodes, N

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N0(i+), isolated tumor cells in regional lymph node(s) no greater than 0.2 mm
- N1, pelvic or inguinal lymph node metastasis, FIGO III

# Distant metastasis, M

- M0, no distant metastasis
- M1, distant metastasis, FIGO IVB

# Histologic grade, G

- GX, grade cannot be assessed
- G1, well differentiated
- G2, moderately differentiated
- G3, poorly differentiated
