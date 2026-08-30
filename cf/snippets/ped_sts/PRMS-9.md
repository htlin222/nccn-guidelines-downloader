+++
id           = "ped_sts/PRMS-9"
gid          = "ped_sts"
ref          = "PRMS-9"
page         = 12
title        = "Biliary/liver mass: biopsy only for diagnosis, then systemic therapy and RT"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-10", "PRMS-F"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "enum"
options = ["biliary", "liver"]
[[variables]]
name = "biliary_obstruction"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-9, p12
- Applies to a biliary/liver mass
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (site) mass
- Biliary obstruction: ___ (biliary_obstruction)
- Diagnosis established on biopsy: ___ (diagnosis)
- Risk group: ___ (risk_group)

# Surgery

- Biopsy only, to establish diagnosis
    - Per Principles of Pathologic Assessment
- Do not plan aggressive surgery at this site
    - Tumors at this site respond relatively well with multimodal therapy without aggressive surgery
    - The primary role of surgery is for diagnosis and staging
- Do not plan invasive surgery to establish bile drainage
    - Biliary obstruction typically improves with chemotherapy
    - Invasive surgery to establish bile drainage is typically not necessary

# Next

- Systemic therapy, as indicated for risk group (PRMS-10)
- And RT (PRMS-F)
