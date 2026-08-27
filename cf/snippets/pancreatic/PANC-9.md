+++
id           = "pancreatic/PANC-9"
gid          = "pancreatic"
ref          = "PANC-9"
page         = 23
title        = "Workup of locally advanced disease and what each biopsy result leads to"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-2", "PANC-8", "PANC-10", "PANC-11"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_biopsy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "jaundice"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "genetic_testing_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "molecular_profiling_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["adenocarcinoma confirmed", "other cancer confirmed", "cancer not confirmed"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-9, p23
- Applies to locally advanced disease
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Locally advanced disease
- Biopsy previously done ___ (prior_biopsy)
- Jaundice ___ (jaundice)
- Genetic testing for inherited mutations previously done ___ (genetic_testing_done)
- Molecular profiling of tumor tissue previously done ___ (molecular_profiling_done)
- Biopsy result ___ (biopsy_result)

# Workup

- Biopsy, if not previously done
- If jaundice present, consider ERCP with stent placement
- If not previously done:
    - Genetic testing for inherited mutations
    - Molecular profiling of tumor tissue

# Adenocarcinoma confirmed

- If jaundice present, placement of self-expanding metal stent (SEMS), preferably via ERCP
- Go on to treatment (PANC-10)

# Other cancer confirmed

- Treat with appropriate NCCN Guidelines

# Cancer not confirmed

- Repeat biopsy
    - Adenocarcinoma confirmed, follow the adenocarcinoma pathway above
    - Other cancer confirmed, treat with appropriate NCCN Guidelines
    - Cancer not confirmed, refer to high-volume center for evaluation

# Next

- Adenocarcinoma confirmed, go to treatment (PANC-10)
- Other cancer confirmed, treat with appropriate NCCN Guidelines
- Cancer still not confirmed after repeat biopsy, refer to high-volume center for evaluation
