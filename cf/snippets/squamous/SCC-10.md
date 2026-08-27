+++
id           = "squamous/SCC-10"
gid          = "squamous"
ref          = "SCC-10"
page         = 20
title        = "Treatment of regional lymph nodes of the head and neck"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-9", "SCC-11", "SCC-C", "SCC-D"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "nodal_distribution"
type = "enum"
options = ["solitary-ipsilateral", "multiple-ipsilateral", "bilateral", "parotid"]
[[variables]]
name = "positive_nodes"
type = "number"
[[variables]]
name = "node_size"
type = "number"
[[variables]]
name = "ene"
type = "enum"
options = ["absent", "present", "unknown"]
[[variables]]
name = "nodal_excision"
type = "enum"
options = ["complete", "incomplete"]
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-10, p20
- Applies to regional lymph nodes of the head and neck
- Treatment follows Principles of Treatment (SCC-C)
- RT follows Principles of Radiation Therapy (SCC-D)
- Determination of the appropriateness of RT should be performed together with a radiation oncologist
- Systemic therapy follows Principles of Systemic Therapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, head and neck primary at ___ (site)
- Nodal distribution ___ (nodal_distribution)
- Number of positive nodes ___ (positive_nodes)
- Largest involved node ___ (node_size) cm
- Extranodal extension (ENE) ___ (ene)
- Nodal disease excision ___ (nodal_excision)

# Surgical treatment by nodal presentation

- Solitary or multiple ipsilateral nodes
    - Excision of primary tumor
    - Ipsilateral neck dissection as indicated
- Bilateral nodes
    - Excision of primary tumor
    - Bilateral neck dissection as indicated
- Parotid nodes involved
    - Excision of primary tumor
    - Generally superficial parotidectomy
    - Ipsilateral neck dissection if clinically indicated
    - Observation is not an option when one positive node is ≤3 cm with no ENE

# Adjuvant treatment by pathologic findings

- One positive node ≤3 cm, no ENE
    - RT
    - or Observation
- ≥2 positive nodes, or one node >3 cm, no ENE
    - RT
- Any node with ENE
    - RT
    - Consider concurrent systemic therapy
        - Multidisciplinary consultation recommended

# Incompletely excised nodal disease

- RT
- Consider concurrent systemic therapy
    - Multidisciplinary consultation recommended

# Next

- Follow-up, go to SCC-11
