+++
id           = "pancreatic/PANC-5"
gid          = "pancreatic"
ref          = "PANC-5"
page         = 17
title        = "Postoperative adjuvant treatment and surveillance after resection"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-4", "PANC-6", "PANC-11"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "resection_date"
type = "text"
[[variables]]
name = "prior_neoadjuvant"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "postop_ct"
type = "text"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-5, p17
- Applies after resection, deciding postoperative adjuvant treatment and surveillance
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, resected pancreatic adenocarcinoma
- Resection date ___ (resection_date)
- Prior neoadjuvant therapy ___ (prior_neoadjuvant)
- CA 19-9 ___ (ca19_9)
- Baseline postoperative CT ___ (postop_ct)

# Postoperative workup

- Baseline postoperative CT with contrast
    - Chest
    - Abdomen
    - Pelvis
    - Unless contraindicated
- CA 19-9
- If not previously done
    - Genetic testing for inherited mutations
    - Biopsy confirmation
    - Molecular profiling

# Adjuvant treatment, no prior neoadjuvant therapy, no evidence of recurrence or metastatic disease

- Clinical trial (preferred)
- or Chemotherapy alone
- or Chemotherapy followed by chemoradiation
    - Chemoradiation as clinically indicated
    - With or without subsequent chemotherapy

# Adjuvant treatment, prior neoadjuvant therapy, no evidence of recurrence or metastatic disease

- Consider additional chemotherapy
- and/or Consider chemoradiation, as clinically indicated

# Surveillance as appropriate

- H&P for symptom assessment
- CA 19-9 level (category 2B)
- Chest CT, and CT or MRI of abdomen and pelvis with contrast
    - Unless contraindicated

# Next

- Identification of metastatic disease, go to PANC-11
- Recurrence after resection, go to PANC-6
