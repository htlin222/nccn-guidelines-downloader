+++
id           = "bone/CHON-4"
gid          = "bone"
ref          = "CHON-4"
page         = 10
title        = "Treatment of metastatic chondrosarcoma, by subtype and by extent of metastatic disease"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["CHON-3", "EW-1", "OSTEO-1"]

[facets]
disease   = "bone"
stage     = "IV"
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subtype"
type = "enum"
options = ["dedifferentiated", "mesenchymal", "other"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "extent"
type = "enum"
options = ["oligometastatic", "widespread"]
+++

# Source

- NCCN Bone Cancer v1.2027, CHON-4, p10
- Applies to metastatic chondrosarcoma
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histologic subtype ___ (subtype)
- Sites of metastatic disease ___ (met_sites)
- Extent of metastatic disease ___ (extent)
- Consider multigene panel testing (MGPT) with a validated and/or FDA-approved assay, to determine targeted therapy opportunities

# Subtype routing

- Dedifferentiated
    - May consider treating as osteosarcoma (category 2B), go to OSTEO-1
- Mesenchymal
    - Go to EW-1
- Metastatic chondrosarcoma, treat by extent of disease below

# Oligometastatic disease

- Surgical excision of all sites if possible
- Consider radiation for unresectable sites
- Consider clinical trial

# Widespread disease

- Consider RT, surgery, and/or ablative therapies for symptomatic sites
- Consider systemic therapy (Systemic Therapy Agents, BONE-B)
    - Consider testing for tumor mutational burden (TMB) as determined by a validated and/or FDA-approved assay, to inform treatment options
    - Consider testing for mismatch repair/microsatellite instability (MMR/MSI) as determined by a validated and/or FDA-approved assay, to inform treatment options
- Consider clinical trial

# Next

- Dedifferentiated subtype, may consider treating as osteosarcoma (category 2B), go to OSTEO-1
- Mesenchymal subtype, go to EW-1
- Systemic therapy agents, see BONE-B
