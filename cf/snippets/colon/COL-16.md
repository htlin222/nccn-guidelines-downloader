+++
id           = "colon/COL-16"
gid          = "colon"
ref          = "COL-16"
page         = 25
title        = "Initial and subsequent treatment of unresectable metastases in dMMR/MSI-H or POLE/POLD1 ultrahypermutated disease"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-9", "COL-15", "COL-8", "COL-D"]

[facets]
disease   = "colon"
stage     = ["IV", "recurrent"]
timepoint = "metastatic"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_immunotherapy"
type = "enum"
options = ["none", "checkpoint inhibitor monotherapy", "other"]
[[variables]]
name = "disease_status"
type = "text"
+++

# Source

- NCCN Colon Cancer v2.2026, COL-16, p25
- Applies to unresectable metastases with dMMR/MSI-H, or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Unresectable metastases
- MMR or MSI status ___ (mmr_msi)
- POLE/POLD1 status ___ (pole_pold1)
- TMB ___ (tmb) mut/Mb
- Candidate for immunotherapy ___ (immunotherapy_candidate)
- Prior immunotherapy received ___ (prior_immunotherapy)
- Current disease status ___ (disease_status)

# Initial treatment, if candidate for immunotherapy and no prior immunotherapy received

- Checkpoint inhibitor immunotherapy (COL-D 5 of 17)
    - For immune checkpoint inhibitor-related toxicity, see NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
    - If disease response, consider discontinuing checkpoint inhibitor after 2 years of treatment
- Re-evaluate disease status every 2-3 mo

# Subsequent treatment, after initial checkpoint inhibitor immunotherapy

- Surveillance (COL-8)
- Surgery with or without RT
- Continue immunotherapy (COL-D 5 of 17)
- Ipilimumab + nivolumab, only if checkpoint inhibitor monotherapy was previously received
- Systemic therapy (COL-D)

# Treatment if prior immunotherapy already received

- Systemic therapy (COL-D)
- Ipilimumab + nivolumab, only if checkpoint inhibitor monotherapy was previously received

# Next

- Surveillance, go to COL-8
- Continued or subsequent systemic therapy, see COL-D
