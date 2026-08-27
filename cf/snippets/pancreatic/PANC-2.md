+++
id           = "pancreatic/PANC-2"
gid          = "pancreatic"
ref          = "PANC-2"
page         = 12
title        = "Treatment decision and pre-treatment workup for resectable pancreatic adenocarcinoma"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-1", "PANC-4", "PANC-5", "PANC-8", "PANC-9"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["workup", "neoadjuvant", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "high_risk"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "medically_inoperable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biopsy_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "ca199"
type = "text"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-2, p12
- Applies to resectable disease
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pancreatic adenocarcinoma, resectable disease
- High-risk features ___ (high_risk)
- Medically inoperable ___ (medically_inoperable)
- EUS-guided biopsy already done ___ (biopsy_done)
- Baseline CA 19-9 ___ (ca199)

# Treatment decision

- Neoadjuvant therapy, with or without high-risk features, followed by surgery
    - Take the pre-treatment workup below
- Medically inoperable
    - Take the pre-treatment workup below
- Surgery in absence of high-risk features, without neoadjuvant therapy
    - Take the treatment below

# Pre-treatment workup, before neoadjuvant therapy or if medically inoperable

- EUS-guided biopsy, if not previously done
- Stent placement, if clinically indicated
- Consider PET
- Baseline CA 19-9
- Staging laparoscopy, as clinically indicated

# Treatment, surgery in absence of high-risk features

- Surgery
    - Laparotomy, or minimally invasive surgery
- Consider staging laparoscopy, as clinically indicated

# Next

- After pre-treatment workup, neoadjuvant therapy, go to PANC-4
- After pre-treatment workup, locally advanced disease, go to PANC-9
- Successful resection, adjuvant treatment and surveillance, go to PANC-5
- Unresectable disease at surgery, go to PANC-8
