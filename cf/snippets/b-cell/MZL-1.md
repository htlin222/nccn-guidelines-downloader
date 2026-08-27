+++
id           = "b-cell/MZL-1"
gid          = "b-cell"
ref          = "MZL-1"
page         = 28
title        = "Routing a marginal zone lymphoma to its subtype-specific pathway"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["DIAG-1", "HTBCEL-1"]

[facets]
disease   = "b-cell"
histology = "marginal-zone"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "extranodal_sites"
type = "text"
[[variables]]
name = "nodal"
type = "enum"
options = ["involved", "not involved", "unknown"]
[[variables]]
name = "splenic"
type = "enum"
options = ["involved", "not involved", "unknown"]
[[variables]]
name = "transformation"
type = "enum"
options = ["suspected", "confirmed", "no evidence"]
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, MZL-1, p28
- Applies to marginal zone lymphomas, as the entry point to the subtype-specific pathway
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Extranodal sites involved: ___ (extranodal_sites)
- Nodal involvement: ___ (nodal)
- Splenic involvement: ___ (splenic)
- Histologic transformation to DLBCL: ___ (transformation)

# Marginal zone lymphoma subtype

- Extranodal marginal zone lymphoma (EMZL)
    - EMZL of the stomach
    - EMZL of nongastric sites (noncutaneous)
    - Cutaneous, primary cutaneous marginal zone lymphoma
- Nodal marginal zone lymphoma (NMZL)
- Splenic marginal zone lymphoma (SMZL)
- Histologic transformation to DLBCL

# Next

- EMZL of the stomach, go to Diagnosis and Workup (EMZLG-1)
- EMZL of nongastric sites (noncutaneous), go to Diagnosis and Workup (EMZLNG-1)
- Primary cutaneous marginal zone lymphoma, see NCCN Guidelines for Cutaneous Lymphomas
- Nodal marginal zone lymphoma (NMZL), go to Diagnosis and Workup (NMZL-1)
- Splenic marginal zone lymphoma (SMZL), go to Diagnosis and Workup (SMZL-1)
- Histologic transformation to DLBCL, go to HTBCEL-1
