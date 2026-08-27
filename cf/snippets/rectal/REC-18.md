+++
id           = "rectal/REC-18"
gid          = "rectal"
ref          = "REC-18"
page         = 31
title        = "dMMR/MSI-H or POLE/POLD1 ultrahypermutated rectal cancer with unresectable metastases: initial and subsequent treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-17", "REC-10A", "REC-F"]

[facets]
disease   = "rectal"
stage     = "IV"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biomarker_status"
type = "enum"
options = ["dMMR/MSI-H", "POLE mutation with ultrahypermutated phenotype", "POLD1 mutation with ultrahypermutated phenotype"]
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_immunotherapy"
type = "enum"
options = ["none", "checkpoint inhibitor monotherapy received", "other prior immunotherapy received"]
[[variables]]
name = "immunotherapy_duration"
type = "text"
[[variables]]
name = "disease_status"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-18, p31
- Applies to dMMR/MSI-H rectal cancer
- Also applies to POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- Applies to unresectable metastases
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (biomarker_status)
- TMB: ___ (tmb)
- Unresectable metastases, sites: ___ (met_sites)
- Candidate for immunotherapy: ___ (immunotherapy_candidate)
- Prior immunotherapy: ___ (prior_immunotherapy)
- Time on checkpoint inhibitor to date: ___ (immunotherapy_duration)

# Initial treatment, candidate for immunotherapy and no prior immunotherapy received

- Checkpoint inhibitor immunotherapy (REC-F 5 of 17)
    - Manage toxicity per the NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
    - If disease response, consider discontinuing checkpoint inhibitor after 2 years of treatment

# Subsequent treatment, after initial checkpoint inhibitor immunotherapy

- Re-evaluate disease status every 2–3 mo
    - Disease status at re-evaluation: ___ (disease_status)
- Then one of the following
    - Surveillance (REC-10A)
    - Surgery ± RT
    - Continue immunotherapy (REC-F 5 of 17)
        - Manage toxicity per the NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
        - If disease response, consider discontinuing checkpoint inhibitor after 2 years of treatment
    - Ipilimumab + nivolumab, only if checkpoint inhibitor monotherapy was previously received
    - Systemic therapy (REC-F)

# Initial treatment, prior immunotherapy received

- Systemic therapy (REC-F)
- Ipilimumab + nivolumab, only if checkpoint inhibitor monotherapy was previously received

# Next

- Surveillance, go to REC-10A
- Checkpoint inhibitor immunotherapy regimens, see REC-F 5 of 17
- Systemic therapy regimens, see REC-F
