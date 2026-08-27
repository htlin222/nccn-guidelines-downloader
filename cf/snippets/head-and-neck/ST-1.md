+++
id           = "head-and-neck/ST-1"
gid          = "head-and-neck"
ref          = "ST-1"
page         = 129
title        = "AJCC TNM staging classification for the oral cavity (including mucosa of lip)"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-27"
see_also     = ["OR-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "doi"
type = "text"
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_laterality"
type = "enum"
options = ["ipsilateral", "bilateral", "contralateral"]
[[variables]]
name = "ene"
type = "enum"
options = ["ENE(-)", "ENE(+)", "cannot be assessed"]
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "ul_designation"
type = "enum"
options = ["U", "L", "not recorded"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-1, p129
- Table 1, American Joint Committee on Cancer (AJCC) TNM Staging Classification for the Oral Cavity (including mucosa of lip), 8th ed., 2017
- Does not apply to nonepithelial tumors such as those of lymphoid tissue, soft tissue, bone, and cartilage
- Does not apply to mucosal melanoma
- Does not apply to cutaneous squamous cell carcinoma of the vermilion lip
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Greatest tumor dimension: ___ (tumor_size)
- Depth of invasion, DOI: ___ (doi)
    - DOI is depth of invasion and not tumor thickness
- T category: ___ (t_category)
- Largest involved node, greatest dimension: ___ (node_size)
- Nodal laterality: ___ (node_laterality)
- Extranodal extension: ___ (ene)
- N category: ___ (n_category)
- Level designation above (U) or below (L) the lower border of the cricoid: ___ (ul_designation)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- Tis, carcinoma in situ
- T1, tumor 2 cm or smaller with DOI 5 mm or less
- T2, either of
    - Tumor 2 cm or smaller, with DOI greater than 5 mm
    - Tumor greater than 2 cm and 4 cm or smaller, with DOI 10 mm or less
- T3, either of
    - Tumor greater than 2 cm and 4 cm or smaller, with DOI greater than 10 mm
    - Tumor greater than 4 cm, with DOI 10 mm or less
- T4, moderately advanced or very advanced local disease
- T4a, moderately advanced local disease, either of
    - Tumor greater than 4 cm, with DOI greater than 10 mm
    - Tumor invades adjacent structures only, eg, through cortical bone of the mandible or maxilla, or involves the maxillary sinus or skin of the face
- Superficial erosion of bone or tooth socket alone by a gingival primary is not sufficient to classify a tumor as T4
- T4b, very advanced local disease
    - Tumor invades masticator space, pterygoid plates, or skull base
    - And/or encases the internal carotid artery

# Regional lymph nodes, clinical N (cN)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, metastasis in a single ipsilateral lymph node, 3 cm or smaller in greatest dimension, and ENE(-)
- N2, any of
    - N2a, metastasis in a single ipsilateral lymph node larger than 3 cm but not larger than 6 cm in greatest dimension, and ENE(-)
    - N2b, metastases in multiple ipsilateral lymph nodes, none larger than 6 cm in greatest dimension, and ENE(-)
    - N2c, metastases in bilateral or contralateral lymph nodes, none larger than 6 cm in greatest dimension, and ENE(-)
- N3, either of
    - N3a, metastasis in a lymph node larger than 6 cm in greatest dimension, and ENE(-)
    - N3b, metastasis in any node(s) and clinically overt ENE(+)
- Record the U or L designation for any N category, to indicate metastasis above the lower border of the cricoid (U) or below the lower border of the cricoid (L)
- Record clinical and pathological ENE as ENE(-) or ENE(+)
