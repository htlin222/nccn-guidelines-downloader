+++
id           = "ped_sts/PRMS-8"
gid          = "ped_sts"
ref          = "PRMS-8"
page         = 11
title        = "Bladder or prostate mass: local management and what follows it"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-30"
see_also     = ["PRMS-D", "PRMS-F", "PRMS-10"]

[facets]
disease   = "ped_sts"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "site"
type = "enum"
options = ["bladder", "prostate", "bladder and prostate"]
[[variables]]
name = "dome_confined"
type = "enum"
options = ["confined to dome of bladder", "all others"]
[[variables]]
name = "r0_upfront"
type = "enum"
options = ["R0 excision feasible", "upfront R0 excision not feasible without impact to form or function"]
[[variables]]
name = "foxo1"
type = "enum"
options = ["gene-fusion positive", "gene-fusion negative"]
[[variables]]
name = "nodes"
type = "enum"
options = ["lymph node involvement", "without lymph node involvement"]
[[variables]]
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-8, p11
- Applies to a bladder or prostate mass
- Bladder preservation is a major goal of therapy for patients with tumors arising in the bladder and/or prostate
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Mass arising in ___ (site)
- Extent within the bladder: ___ (dome_confined)
- Upfront resection: ___ (r0_upfront)
- FOXO1 ___ (foxo1)
- Nodal status: ___ (nodes)
- Risk group: ___ (risk_group)

# Local management of the primary

- Tumor confined to dome of bladder
    - May consider partial cystectomy (PRMS-D)
        - Either upfront or as a DPE
        - Only if complete resection is feasible while maintaining a functional bladder
- All others
    - Biopsy, per Principles of Pathologic Assessment
    - It is uncommon that the primary tumor can be completely removed at presentation with preservation of bladder and urethral function
    - The initial operative procedure usually consists of a biopsy
        - Can be performed endoscopically, perineally, suprapubically, or through percutaneous core needle biopsy
        - In rare cases may be by laparotomy or laparoscopy

# Biopsy options

- Ultrasound (US) or other image-guided core needle biopsy
    - Per Principles of Imaging
- Cystoscopic biopsy
- Transanal biopsy
- Open procedures

# Next

- R0 excision feasible
    - FOXO1 gene-fusion negative without lymph node involvement
        - Systemic therapy as indicated for risk group (PRMS-10)
    - FOXO1 gene-fusion positive and/or lymph node involvement
        - Systemic therapy as indicated for risk group (PRMS-10)
        - And RT (PRMS-F)
- Upfront R0 excision not feasible without impact to form or function
    - FOXO1 gene-fusion negative without lymph node involvement
        - Systemic therapy as indicated for risk group (PRMS-10)
        - And RT (PRMS-F)
        - And evaluate for DPE (PRMS-D)
    - FOXO1 gene-fusion positive and/or lymph node involvement
        - Systemic therapy as indicated for risk group (PRMS-10)
        - And RT (PRMS-F)
        - And evaluate for DPE (PRMS-D)
