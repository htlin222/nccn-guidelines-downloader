+++
id           = "rectal/REC-18"
gid          = "rectal"
ref          = "REC-18"
page         = 31
title        = "dMMR/MSI-H or POLE/POLD1 unresectable metastases: initial and subsequent treatment, split by prior immunotherapy"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-15", "REC-10A", "REC-F"]

[facets]
disease   = "rectal"
stage     = "IV"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["metastatic", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["candidate", "not a candidate"]
[[variables]]
name = "prior_immunotherapy"
type = "enum"
options = ["none", "checkpoint inhibitor monotherapy", "combination immunotherapy"]
[[variables]]
name = "last_reevaluation"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-18, p31
- Applies to dMMR/MSI-H rectal cancer
- Also applies to POLE/POLD1 mutation with ultrahypermutated phenotype, eg, TMB >50 mut/Mb
- Applies to unresectable metastases
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- MMR/MSI status ___ (mmr_status)
- POLE/POLD1 and TMB ___ (tmb)
- Sites of unresectable metastatic disease: ___ (met_sites)
- Candidate for immunotherapy: ___ (immunotherapy_candidate)
- Prior immunotherapy received: ___ (prior_immunotherapy)
    - Record whether checkpoint inhibitor monotherapy was previously received
- Date of last disease status re-evaluation: ___ (last_reevaluation)

# Initial treatment, candidate for immunotherapy and no prior immunotherapy received

- Checkpoint inhibitor immunotherapy (REC-F 5 of 17)
    - Manage toxicity per NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
    - If disease response, consider discontinuing checkpoint inhibitor after 2 years of treatment
- Re-evaluate disease status every 2-3 mo

# Subsequent treatment, after re-evaluation

- Surveillance (REC-10A)
- or Surgery, with or without RT
- or Continue immunotherapy (REC-F 5 of 17)
    - Manage toxicity per NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
    - If disease response, consider discontinuing checkpoint inhibitor after 2 years of treatment
- or Ipilimumab + nivolumab, if checkpoint inhibitor monotherapy was previously received
- or Systemic therapy (REC-F)

# Initial treatment, prior immunotherapy received

- Systemic therapy (REC-F)
- or Ipilimumab + nivolumab, if checkpoint inhibitor monotherapy was previously received

# Next

- Candidate for immunotherapy and no prior immunotherapy received, start checkpoint inhibitor immunotherapy (REC-F 5 of 17), then re-evaluate disease status every 2-3 mo
- Prior immunotherapy received, systemic therapy (REC-F), or ipilimumab + nivolumab if checkpoint inhibitor monotherapy was previously received
- After re-evaluation, if going to observation, surveillance following nonoperative management (REC-10A)
