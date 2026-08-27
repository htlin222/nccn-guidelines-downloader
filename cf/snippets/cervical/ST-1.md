+++
id           = "cervical/ST-1"
gid          = "cervical"
ref          = "ST-1"
page         = 63
title        = "FIGO 2018 stage assignment for carcinoma of the cervix uteri"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-1"]

[facets]
disease   = "cervical"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "depth_of_invasion"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "vaginal_involvement"
type = "enum"
options = ["none", "upper two-thirds", "lower third"]
[[variables]]
name = "parametrial_invasion"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "pelvic_wall"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "nodes"
type = "enum"
options = ["none", "pelvic", "paraaortic", "pelvic and paraaortic"]
[[variables]]
name = "bladder_rectum_distant"
type = "enum"
options = ["none", "adjacent organs", "distant organs"]
[[variables]]
name = "notation"
type = "enum"
options = ["r (imaging)", "p (pathology)"]
[[variables]]
name = "figo_stage"
type = "text"
+++

# Source

- NCCN Cervical Cancer v2.2026, ST-1, p63
- Table 1: International Federation of Gynecology and Obstetrics (FIGO) Staging of Cancer of the Cervix Uteri (2018)
- Reprinted from Bhatla N, Berek JS, Fredes MC, et al. Revised FIGO Staging for carcinoma of the cervix uteri

# Assessment

- ___ (age) yo
- Maximum depth of stromal invasion: ___ (depth_of_invasion)
- Maximum tumor diameter, greatest dimension: ___ (tumor_size)
- Vaginal involvement: ___ (vaginal_involvement)
- Parametrial invasion: ___ (parametrial_invasion)
- Pelvic wall extension, hydronephrosis, or non-functioning kidney: ___ (pelvic_wall)
- Pelvic and/or paraaortic lymph nodes: ___ (nodes)
- Bladder or rectal mucosa involvement, or spread beyond the true pelvis: ___ (bladder_rectum_distant)
- Findings used to allocate the case: ___ (notation)
- Assigned stage: ___ (figo_stage)

# Stage I

- Carcinoma is strictly confined to the cervix
    - Extension to the corpus should be disregarded
- IA, invasive carcinoma that can be diagnosed only by microscopy, with maximum depth of invasion 5 mm or less
    - Imaging and pathology can be used, when available, to supplement clinical findings with respect to tumor size and extent, in all stages
    - Pathological findings supersede imaging and clinical findings
    - IA1, measured stromal invasion 3 mm or less in depth
    - IA2, measured stromal invasion more than 3 mm and 5 mm or less in depth
- IB, invasive carcinoma with measured deepest invasion more than 5 mm (greater than stage IA), lesion limited to the cervix uteri, with size measured by maximum tumor diameter
    - The involvement of vascular/lymphatic spaces should not change the staging
    - The lateral extent of the lesion is no longer considered
    - IB1, more than 5 mm depth of stromal invasion and 2 cm or less in greatest dimension
    - IB2, more than 2 cm and 4 cm or less in greatest dimension
    - IB3, more than 4 cm in greatest dimension

# Stage II

- The cervical carcinoma invades beyond the uterus, but has not extended onto the lower third of the vagina or to the pelvic wall
- IIA, involvement limited to the upper two-thirds of the vagina, without parametrial invasion
    - IIA1, invasive carcinoma 4 cm or less in greatest dimension
    - IIA2, invasive carcinoma more than 4 cm in greatest dimension
- IIB, with parametrial invasion, but not up to the pelvic wall

# Stage III

- The carcinoma involves the lower third of the vagina, and/or extends to the pelvic wall, and/or causes hydronephrosis or non-functioning kidney, and/or involves pelvic and/or paraaortic lymph nodes
- IIIA, carcinoma involves lower third of the vagina, with no extension to the pelvic wall
- IIIB, extension to the pelvic wall and/or hydronephrosis or non-functioning kidney
    - Unless known to be due to another cause
- IIIC, involvement of pelvic and/or paraaortic lymph nodes (including micrometastases), irrespective of tumor size and extent, with r and p notations
    - Isolated tumor cells do not change the stage, but their presence should be recorded
    - Add notation of r (imaging) or p (pathology) to indicate the findings that are used to allocate the case to Stage IIIC
        - If imaging indicates pelvic lymph node metastasis, the stage allocation would be Stage IIIC1r, and if confirmed by pathologic findings, it would be Stage IIIC1p
        - The type of imaging modality or pathology technique used should always be documented
    - IIIC1, pelvic lymph node metastasis only
    - IIIC2, paraaortic lymph node metastasis

# Stage IV

- The carcinoma has extended beyond the true pelvis, or has involved (biopsy proven) the mucosa of the bladder or rectum
    - A bullous edema, as such, does not permit a case to be allotted to stage IV
- IVA, spread of the growth to adjacent organs
- IVB, spread to distant organs
