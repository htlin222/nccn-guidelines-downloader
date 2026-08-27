+++
id           = "appendiceal/APP-2"
gid          = "appendiceal"
ref          = "APP-2"
page         = 6
title        = "Pathologic type on pathology review, and the pathway each type follows"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-1", "APP-3", "APP-4", "APP-7", "APP-9"]

[facets]
disease   = "appendiceal"
histology = ["mucinous", "adenocarcinoma", "signet-ring", "neuroendocrine"]
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pathologic_type"
type = "enum"
options = ["LAMN", "HAMN", "NEN", "MiNEN", "AA", "GCA", "UC-NOS"]
[[variables]]
name = "extra_appendiceal_mucin"
type = "enum"
options = ["none", "acellular mucin", "mucin-containing neoplastic epithelium"]
[[variables]]
name = "signet_ring_percent"
type = "number"
[[variables]]
name = "mucin_percent"
type = "number"
[[variables]]
name = "disease_extent"
type = "enum"
options = ["localized (appendix only)", "peritoneal-only", "extraperitoneal"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-2, p6
- Applies once pathology review of an appendiceal neoplasm has resulted
- Primary and metastatic disease are evaluated separately (APP-B)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Pathology review result: ___ (pathologic_type)
- Extra-appendiceal mucin: ___ (extra_appendiceal_mucin)
- Signet-ring cells ___ (signet_ring_percent) % of tumor
- Mucin ___ (mucin_percent) % of tumor
- Extent of disease: ___ (disease_extent)

# Pathologic types

- Low-grade appendiceal mucinous neoplasm (LAMN)
    - Extra-appendiceal acellular mucin, considered low risk for dissemination
    - Extra-appendiceal mucin-containing neoplastic epithelium, considered high risk for recurrence or peritoneal dissemination, and the peritoneal-only disease pathway would be followed
    - Signet-ring cells ≤50%, classified as mucinous adenocarcinoma with signet-ring cells
    - Signet-ring cells >50%, classified as signet-ring cell carcinoma, associated with a high level of metastasis and worse prognosis
- High-grade appendiceal mucinous neoplasm (HAMN)
    - Extra-appendiceal acellular mucin, considered low risk for dissemination
    - Extra-appendiceal mucin-containing neoplastic epithelium, considered high risk for recurrence or peritoneal dissemination, and the peritoneal-only disease pathway would be followed
    - Signet-ring cells ≤50%, classified as mucinous adenocarcinoma with signet-ring cells
    - Signet-ring cells >50%, classified as signet-ring cell carcinoma, associated with a high level of metastasis and worse prognosis
- Neuroendocrine neoplasms (NEN)
- Mixed neuroendocrine-nonneuroendocrine neoplasms (MiNENs)
- Appendiceal adenocarcinoma (AA)
    - Mucin ≤50%, classified as non-mucinous adenocarcinoma
    - Mucin >50%, considered mucinous adenocarcinoma
    - Signet-ring cells ≤50%, classified as mucinous adenocarcinoma with signet-ring cells
    - Signet-ring cells >50%, classified as signet-ring cell carcinoma, associated with a high level of metastasis and worse prognosis
- Goblet cell adenocarcinoma (GCA)
    - Signet-ring cells ≤50%, classified as mucinous adenocarcinoma with signet-ring cells
    - Signet-ring cells >50%, classified as signet-ring cell carcinoma, associated with a high level of metastasis and worse prognosis
- Undifferentiated carcinoma (UC) not otherwise specified (NOS)
    - UCs only show epithelial marker expression if there is no histologic, immunohistochemical, or molecular indicator of the tissue of origin

# Next

- LAMN or HAMN
    - Localized disease (appendix only), see Management of Localized Disease (APP-3)
    - Peritoneal-only disease, see Metastatic LAMN/HAMN: Peritoneal-Only Disease (APP-4)
        - Primary and metastatic disease are evaluated separately (APP-B)
    - Extraperitoneal disease, see Management of Extraperitoneal Disease (APP-9)
- NEN or MiNEN
    - See NCCN Guidelines for Neuroendocrine and Adrenal Tumors
- AA, GCA, or UC-NOS
    - Localized disease (appendix only), see Management of Localized Disease (APP-3)
    - Peritoneal-only disease, see Metastatic AA/GCA/UC-NOS peritoneal-only disease (APP-7)
    - Extraperitoneal disease, see Management of Extraperitoneal Disease (APP-9), or systemic therapy (APP-D 2 of 11)
        - Biomarker testing is recommended, although there may be a higher rate of assay failure if the specimen has low cellularity (APP-B)
