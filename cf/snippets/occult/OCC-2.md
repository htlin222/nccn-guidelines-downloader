+++
id           = "occult/OCC-2"
gid          = "occult"
ref          = "OCC-2"
page         = 9
title        = "Pathologic diagnosis and clinical presentation decide which occult primary workup pathway to follow"
nccn_version = "2.2026"
nccn_date    = "05/04/26"
generated    = "2026-08-28"
see_also     = ["OCC-1", "OCC-3", "OCC-11"]

[facets]
disease   = "occult"
histology = ["adenocarcinoma", "squamous", "neuroendocrine"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pathologic_diagnosis"
type = "enum"
options = ["adenocarcinoma", "carcinoma-not-otherwise-specified", "squamous-cell-carcinoma", "neuroendocrine-tumor"]
[[variables]]
name = "sites_involved"
type = "text"
[[variables]]
name = "predominant_site"
type = "text"
+++

# Source

- NCCN Occult Primary v2.2026, OCC-2, p9
- Applies once a pathologic diagnosis has been made on an occult primary
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Pathologic diagnosis ___ (pathologic_diagnosis)
- Anatomic distributions involved ___ (sites_involved)
- Predominately involved anatomic site ___ (predominant_site)
    - Needed only if carcinoma is present in more than one of these anatomic distributions
    - In that case, follow the workup indicated for the predominately involved anatomic site

# Pathologic diagnosis

- Adenocarcinoma or carcinoma not otherwise specified
    - Epithelial, not site specific
    - Pathway is chosen by clinical presentation
- Squamous cell carcinoma
- Neuroendocrine tumor

# Next

- Adenocarcinoma or carcinoma not otherwise specified, epithelial and not site specific, by clinical presentation
    - Predominant and isolated cervical nodes, go to OCC-3
    - Supraclavicular nodes, go to OCC-3
    - Axillary nodes, go to OCC-3
    - Mediastinum, go to OCC-4
    - Chest with multiple nodules, or pleural effusions, go to OCC-4
    - Peritoneal, go to OCC-4
    - Retroperitoneal mass, go to OCC-5
    - Inguinal nodes, go to OCC-5
    - Liver, go to OCC-5
    - Bone, go to OCC-6
    - Brain, go to OCC-6
    - Multiple sites of involvement, go to OCC-6
- Squamous cell carcinoma, go to OCC-11
- Neuroendocrine tumor, see NCCN Guidelines for Neuroendocrine and Adrenal Tumors
