+++
id           = "pancreatic/PANC-6"
gid          = "pancreatic"
ref          = "PANC-6"
page         = 19
title        = "Recurrence therapy after resection: local recurrence versus metastatic disease"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-5", "PANC-7", "PANC-8", "PANC-9"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
stage     = "recurrent"
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_site"
type = "enum"
options = ["local", "metastatic", "local-and-metastatic"]
[[variables]]
name = "biopsy_confirmed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "genetic_testing_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "molecular_profiling_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_systemic_therapy"
type = "text"
[[variables]]
name = "prior_chemoradiation"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_sbrt"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-6, p19
- Applies to recurrence after resection
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pancreatic adenocarcinoma, recurrence after resection
- Site of recurrence ___ (recurrence_site)
- Recurrence confirmed by biopsy ___ (biopsy_confirmed)
- Genetic testing for inherited mutations previously done ___ (genetic_testing_done)
- Molecular profiling of tumor tissue previously done ___ (molecular_profiling_done)
- Prior systemic therapy ___ (prior_systemic_therapy)
- Prior chemoradiation ___ (prior_chemoradiation)
- Prior SBRT ___ (prior_sbrt)

# Local recurrence, workup

- Consider biopsy for confirmation (category 2B)
- If not previously done
    - Genetic testing for inherited mutations
    - Molecular profiling of tumor tissue

# Local recurrence, therapy options

- Clinical trial (preferred)
- Systemic therapy
    - Systemic therapy options: PANC-G 8 of 13, PANC-G 9 of 13, PANC-G 10 of 13
    - With or without chemoradiation, if not previously done
    - Or with or without SBRT, if not previously done
- SBRT
- Surgical consultation and multidisciplinary review, for select patients
    - Principles of Surgical Techniques: PANC-E 2 of 3
- Palliative and best supportive care

# Next

- Metastatic disease, with or without local recurrence, go to PANC-7
