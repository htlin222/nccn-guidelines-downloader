+++
id           = "ped_sts/PRMS-3"
gid          = "ped_sts"
ref          = "PRMS-3"
page         = 6
title        = "Biopsy, local management, and nodal assessment of a head or neck mass"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "site_category"
type = "enum"
options = ["parameningeal", "other head or neck", "orbital"]
[[variables]]
name = "node_status"
type = "enum"
options = ["suspicious nodes", "no concerning nodes"]
[[variables]]
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-3, p6
- Applies to a head or neck mass
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Head or neck mass, primary site ___ (site)
- Site category ___ (site_category)
- Lymph nodes on clinical assessment or imaging ___ (node_status)
- Risk group ___ (risk_group)

# Parameningeal

- Biopsy, per Principles of Pathologic Assessment
    - Adequate biopsy is required
        - Sufficient tissue to establish the diagnosis
        - Sufficient tissue for further molecular genetic analysis
    - Lumbar puncture with cytology after diagnosis is confirmed

# Other head or neck, or orbital

- Other head or neck site, per Raney RB, et al. Pediatr Blood Cancer 2008;50:958-964
- Orbital site
    - RMS of the orbit should not undergo exenteration, but biopsy is needed for diagnosis
    - Oberlin O, et al. J Clin Oncol 2001;19:197-204
- R0 if feasible without impact to form or function (PRMS-D)
    - Narrow resection margins (<1 mm) are acceptable because of anatomical restrictions
    - Cosmetic and functional factors should always be considered
- Biopsy only if R0 would result in functional impairment, per Principles of Pathologic Assessment
    - Adequate biopsy is required
        - Sufficient tissue to establish the diagnosis
        - Sufficient tissue for further molecular genetic analysis

# Regional lymph nodes

- Suspicious lymph nodes on clinical assessment or imaging
    - Biopsy of concerning nodes (PRMS-E), per Principles of Pathologic Assessment
- No concerning lymph nodes on clinical assessment or imaging
    - Lymph node biopsy not required (PRMS-E)

# Next

- Systemic therapy, as indicated for risk group (PRMS-10)
- and Radiation therapy (RT) (PRMS-F)
- and Evaluate for delayed primary excision (DPE) (PRMS-D)
    - There are situations in which some may benefit from DPE
    - See Principles of Surgery
