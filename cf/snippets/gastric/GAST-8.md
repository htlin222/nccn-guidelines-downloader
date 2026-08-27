+++
id           = "gastric/GAST-8"
gid          = "gastric"
ref          = "GAST-8"
page         = 19
title        = "Triage of recurrence to surgery or palliative management"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-7", "GAST-9", "GAST-B", "GAST-C"]

[facets]
disease   = "gastric"
stage     = "recurrent"
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_type"
type = "enum"
options = ["locoregional", "metastatic"]
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "isolated_local_recurrence"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "resectable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "medically_operable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-8, p19
- Applies to documented recurrence, classified as locoregional recurrence or as metastatic disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Recurrence classified as ___ (recurrence_type)
- Site of recurrence ___ (recurrence_site)
- Isolated local recurrence ___ (isolated_local_recurrence)
- Resectable ___ (resectable)
- Medically operable ___ (medically_operable)

# Locoregional recurrence

- Review whether surgery is appropriate
    - Review if surgery is appropriate for patients with isolated local recurrences
    - Surgery should be considered as an option for locoregional recurrence in patients who are medically fit
- Resectable and medically operable
    - Consider surgery
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
    - or Palliative Management (GAST-9)
- Unresectable or medically inoperable
    - Palliative Management (GAST-9)

# Metastatic disease

- Palliative Management (GAST-9)

# Next

- Locoregional recurrence, resectable and medically operable, consider surgery
- Locoregional recurrence, unresectable or medically inoperable, go to GAST-9
- Metastatic disease, go to GAST-9
