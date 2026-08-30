+++
id           = "ped_sts/PRMS-8"
gid          = "ped_sts"
ref          = "PRMS-8"
page         = 11
title        = "Bladder or prostate mass: biopsy, upfront resection, and what follows"
nccn_version = "1.2026"
nccn_date    = "02/017/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-10", "PRMS-D", "PRMS-F"]

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
options = ["yes", "no"]
[[variables]]
name = "foxo1"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "nodes"
type = "enum"
options = ["involved", "not involved"]
[[variables]]
name = "r0_upfront"
type = "enum"
options = ["feasible", "not feasible without impact to form or function"]
[[variables]]
name = "risk_group"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-8, p11
- Applies to a bladder or prostate mass
- Bladder preservation is a major goal of therapy for patients with tumors arising in the bladder and/or prostate
- It is uncommon that the primary tumor can be completely removed at presentation with preservation of bladder and urethral function
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Mass arising in ___ (site)
- Tumor confined to dome of bladder: ___ (dome_confined)
- FOXO1 gene fusion: ___ (foxo1)
- Lymph node involvement: ___ (nodes)
- Upfront R0 excision: ___ (r0_upfront)
- Risk group: ___ (risk_group)

# Local management of the primary

- Tumor confined to dome of bladder
    - May consider partial cystectomy (PRMS-D)
        - Either upfront or as a DPE
        - Only if complete resection is feasible while maintaining a functional bladder
- All others
    - Biopsy, see Principles of Pathologic Assessment
    - The initial operative procedure usually consists of a biopsy
        - Can be performed endoscopically, perineally, suprapubically, or through percutaneous core needle biopsy
        - In rare cases may be by laparotomy or laparoscopy

# Biopsy options

- Ultrasound (US) or other image-guided core needle biopsy, see Principles of Imaging
- Cystoscopic biopsy
- Transanal biopsy
- Open procedures

# Next

- R0 excision feasible
    - FOXO1 gene-fusion negative without lymph node involvement
        - Systemic therapy (as indicated for risk group) (PRMS-10)
    - FOXO1 gene-fusion positive and/or lymph node involvement
        - Systemic therapy (as indicated for risk group) (PRMS-10)
        - RT (PRMS-F)
- Upfront R0 excision not feasible without impact to form or function
    - FOXO1 gene-fusion negative without lymph node involvement
        - Systemic therapy (as indicated for risk group) (PRMS-10)
        - RT (PRMS-F)
        - Evaluate for DPE (PRMS-D)
    - FOXO1 gene-fusion positive and/or lymph node involvement
        - Systemic therapy (as indicated for risk group) (PRMS-10)
        - RT (PRMS-F)
        - Evaluate for DPE (PRMS-D)
