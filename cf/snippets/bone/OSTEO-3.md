+++
id           = "bone/OSTEO-3"
gid          = "bone"
ref          = "OSTEO-3"
page         = 22
title        = "Primary treatment of osteosarcoma with metastatic disease at presentation"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["OSTEO-2", "OSTEO-4", "BONE-A", "BONE-B", "BONE-C"]

[facets]
disease   = "bone"
stage     = "IV"
timepoint = ["primary-treatment", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
+++

# Source

- NCCN Bone Cancer v1.2027, OSTEO-3, p22
- Applies to osteosarcoma with metastatic disease at presentation
- Covers primary treatment of the metastatic disease, resectable and unresectable
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, osteosarcoma, metastatic disease at presentation
- Primary site ___ (primary_site)
- Sites of metastases ___ (met_sites)
    - Pulmonary
    - Visceral
    - Skeletal
- Metastases resectable or unresectable ___ (resectability)
- Consider MGPT with a validated and/or FDA-approved assay, to determine targeted therapy opportunities

# Resectable metastases: pulmonary, visceral, or skeletal

- See OSTEO-2 for management of the primary tumor
- Chemotherapy
    - Agents: BONE-B
- Local treatment of the metastases, one of
    - Metastasectomy (BONE-A)
    - or Stereotactic RT
    - or Ablation, if pulmonary metastasectomy is not possible

# Unresectable metastases

- Chemotherapy
    - Agents: BONE-B
    - Consider testing for TMB and MMR/MSI as determined by a validated and/or FDA-approved assay, to inform treatment options
- RT (BONE-C)
- Reassess primary site as appropriate for local control

# Next

- After primary treatment for resectable metastases, go to Surveillance (OSTEO-4)
