+++
id           = "head-and-neck/MM-4"
gid          = "head-and-neck"
ref          = "MM-4"
page         = 92
title        = "Primary therapy for occult primary melanoma presenting in a nodal basin"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["MM-1", "MM-A", "SURG-A", "OCC-1"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "nodal_basin"
type = "text"
[[variables]]
name = "node_count"
type = "number"
[[variables]]
name = "largest_node_cm"
type = "number"
[[variables]]
name = "extranodal_extension"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "prior_nodal_surgery"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, MM-4, p92
- Primary therapy for occult primary melanoma, presenting in a nodal basin
- Also see NCCN Guidelines for Occult Primary
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Occult primary melanoma, disease in a nodal basin
- Nodal basin involved ___ (nodal_basin)
- Number of involved nodes ___ (node_count)
- Largest involved node ___ (largest_node_cm) cm
- Extranodal extension ___ (extranodal_extension)
- Previous surgery to this nodal basin ___ (prior_nodal_surgery)

# Primary therapy

- Nodal dissection
    - Principles of Surgery (SURG-A)
- With or without RT to the nodal basin, for high-risk features
    - Principles of Radiation Therapy (MM-A)
    - High-risk adverse pathologic features
        - More than 2 nodes
        - Single node greater than 3 cm
        - Extranodal extension
        - Recurrence in the nodal basin after previous surgery
- With or without adjuvant systemic therapy
    - Per NCCN Guidelines for Melanoma: Cutaneous
