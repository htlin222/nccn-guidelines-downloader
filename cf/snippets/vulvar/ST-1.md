+++
id           = "vulvar/ST-1"
gid          = "vulvar"
ref          = "ST-1"
page         = 47
title        = "FIGO (2021) staging for carcinoma of the vulva"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-1"]

[facets]
disease   = "vulvar"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "stromal_invasion"
type = "text"
[[variables]]
name = "confined"
type = "enum"
options = ["confined to the vulva and/or perineum", "extends beyond the vulva and/or perineum"]
[[variables]]
name = "lower_third"
type = "enum"
options = ["absent", "lower one-third of the urethra", "lower one-third of the vagina", "lower one-third of the anus"]
[[variables]]
name = "upper_extension"
type = "enum"
options = ["absent", "upper part of adjacent perineal structures", "upper two-thirds of the urethra", "upper two-thirds of the vagina", "bladder mucosa", "rectal mucosa"]
[[variables]]
name = "nodes"
type = "enum"
options = ["negative", "nonfixed and nonulcerated", "fixed", "ulcerated"]
[[variables]]
name = "node_size"
type = "enum"
options = ["no nodal metastases", "5 mm or less", "greater than 5 mm"]
[[variables]]
name = "extracapsular"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "bone"
type = "enum"
options = ["absent", "fixed to pelvic bone"]
[[variables]]
name = "distant"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "figo_stage"
type = "text"
+++

# Source

- NCCN Vulvar Cancer v2.2026, ST-1, p47
- Table 1: New (2021) FIGO staging for carcinoma of the vulva, International Federation of Gynecology and Obstetrics
- Regional refers to inguinal and femoral lymph nodes
- Depth of invasion is measured from the basement membrane of the deepest, adjacent, dysplastic, tumor-free rete ridge (or nearest dysplastic rete peg) to the deepest point of invasion

# Assessment

- ___ (age) yo
- Tumor confined to the vulva and/or perineum: ___ (confined)
- Tumor size, greatest dimension: ___ (tumor_size)
- Stromal invasion, measured as depth of invasion: ___ (stromal_invasion)
- Extension to lower one-third of the urethra, vagina, or anus: ___ (lower_third)
- Extension to upper adjacent perineal structures, urethra, vagina, bladder mucosa, or rectal mucosa: ___ (upper_extension)
- Regional lymph nodes, fixation and ulceration: ___ (nodes)
- Largest regional lymph node metastasis: ___ (node_size)
- Extracapsular spread in regional lymph nodes: ___ (extracapsular)
- Tumor fixed to bone: ___ (bone)
- Distant metastases: ___ (distant)
- Assigned FIGO stage: ___ (figo_stage)

# Stage I

- Tumor confined to the vulva and/or perineum
- IA, tumor size ≤2 cm and stromal invasion ≤1 mm
    - Depth of invasion is measured from the basement membrane of the deepest, adjacent, dysplastic, tumor-free rete ridge (or nearest dysplastic rete peg) to the deepest point of invasion
- IB, tumor size >2 cm or stromal invasion >1 mm
    - Depth of invasion is measured from the basement membrane of the deepest, adjacent, dysplastic, tumor-free rete ridge (or nearest dysplastic rete peg) to the deepest point of invasion

# Stage II

- Tumor of any size with extension to lower one-third of the urethra, lower one-third of the vagina, or lower one-third of the anus, with negative nodes

# Stage III

- Tumor of any size with extension to upper part of adjacent perineal structures, or with any number of nonfixed, nonulcerated lymph node
- IIIA, tumor of any size with disease extension to upper two-thirds of the urethra, upper two-thirds of the vagina, bladder mucosa, rectal mucosa, or regional lymph node metastases ≤5 mm
- IIIB, regional lymph node metastases >5 mm
    - Regional refers to inguinal and femoral lymph nodes
- IIIC, regional lymph node metastases with extracapsular spread
    - Regional refers to inguinal and femoral lymph nodes

# Stage IV

- Tumor of any size fixed to bone, or fixed, ulcerated lymph node metastases, or distant metastases
- IVA, disease fixed to pelvic bone, or fixed or ulcerated regional lymph node metastases
    - Regional refers to inguinal and femoral lymph nodes
- IVB, distant metastases
