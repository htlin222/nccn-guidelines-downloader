+++
id           = "uterine/ST-1"
gid          = "uterine"
ref          = "ST-1"
page         = 68
title        = "AJCC TNM and FIGO primary tumor (T) definitions for endometrial cancer"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["UN-1", "ENDO-1"]

[facets]
disease   = "uterine"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "myometrial_invasion"
type = "enum"
options = ["none, endometrium only", "less than half", "one half or more"]
[[variables]]
name = "cervical_stroma"
type = "enum"
options = ["not involved", "endocervical glandular only", "stromal connective tissue involved"]
[[variables]]
name = "serosa_adnexa"
type = "text"
[[variables]]
name = "vagina_parametrium"
type = "text"
[[variables]]
name = "bladder_bowel_mucosa"
type = "text"
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "figo_stage"
type = "text"
+++

# Source

- NCCN Uterine Neoplasms v3.2026, ST-1, p68
- Staging for uterine carcinomas and carcinosarcoma
- Table 1, AJCC Tumor-Node-Metastases (TNM) and International Federation of Gynecology and Obstetrics (FIGO) surgical staging systems for endometrial cancer
- This page carries the definitions for T only; the table is marked Continued
- Used with permission of the American College of Surgeons, Chicago, Illinois
    - Original source is the AJCC Cancer Staging Manual, Eighth Edition, published by Springer International Publishing

# Assessment

- Myometrial invasion ___ (myometrial_invasion)
- Cervical involvement ___ (cervical_stroma)
- Serosa and/or adnexa ___ (serosa_adnexa)
- Vagina and/or parametrium ___ (vagina_parametrium)
- Bladder mucosa and/or bowel mucosa ___ (bladder_bowel_mucosa)
- T category ___ (t_category)
- FIGO stage ___ (figo_stage)

# Primary tumor not assessable or not evident

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor

# Tumor confined to the uterus

- T1, FIGO I, tumor confined to the corpus uteri
    - Includes endocervical glandular involvement
    - T1a, FIGO IA, tumor limited to the endometrium, or invading less than half the myometrium
    - T1b, FIGO IB, tumor invading one half or more of the myometrium
- T2, FIGO II, tumor invading the stromal connective tissue of the cervix but not extending beyond the uterus
    - Does NOT include endocervical glandular involvement

# Tumor extending beyond the uterus

- T3, FIGO III, tumor involving serosa, adnexa, vagina, or parametrium
    - T3a, FIGO IIIA, tumor involving the serosa and/or adnexa, by direct extension or metastasis
    - T3b, FIGO IIIB, vaginal involvement, by direct extension or metastasis, or parametrial involvement
- T4, FIGO IVA, tumor invading the bladder mucosa and/or bowel mucosa
    - Bullous edema is not sufficient to classify a tumor as T4

# Next

- Table 1 is continued on the following page for the N and M definitions
