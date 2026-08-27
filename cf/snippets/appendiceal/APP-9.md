+++
id           = "appendiceal/APP-9"
gid          = "appendiceal"
ref          = "APP-9"
page         = 14
title        = "Management of extraperitoneal disease identified on imaging"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-7", "APP-B", "APP-C", "APP-D"]

[facets]
disease   = "appendiceal"
stage     = "IV"
timepoint = "metastatic"
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_histology"
type = "enum"
options = ["LAMN", "HAMN", "AA", "GCA", "UC-NOS"]
[[variables]]
name = "imaging"
type = "enum"
options = ["CT", "MRI of abdomen"]
[[variables]]
name = "disease_site"
type = "text"
[[variables]]
name = "liver_finding"
type = "enum"
options = ["within liver parenchyma", "scalloping along the liver edge"]
[[variables]]
name = "symptomatic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "path_confirmation"
type = "enum"
options = ["done", "not done"]
[[variables]]
name = "biomarker_result"
type = "text"
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, APP-9, p14
- Applies to extraperitoneal disease identified on imaging
- Management of extraperitoneal disease requires multidisciplinary team evaluation, including formal surgical evaluation
- Two arms on this page: LAMN/HAMN, and AA/GCA/UC-NOS
- Systemic therapy regimens: APP-D 1 of 11 for LAMN/HAMN, APP-D 2 of 11 for AA/GCA/UC-NOS
- CRS and IPCT: Principles of Surgery and CRS/IPCT (APP-C)
- Biomarker testing: Principles of Pathology and Molecular Review (APP-B)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary histology ___ (primary_histology)
- Extraperitoneal disease identified on ___ (imaging)
    - If CT is not feasible, consider MRI of abdomen to differentiate between liver and extrahepatic disease
- Site of extraperitoneal disease ___ (disease_site)
- Liver lesion is ___ (liver_finding)
    - Specify whether the metastasis is within the liver parenchyma, which is extraperitoneal metastasis
    - Or scalloping along the liver edge, which is still intraperitoneal metastasis
- Symptomatic ___ (symptomatic)
- Pathologic confirmation to rule out high-risk disease ___ (path_confirmation)
- Biomarker testing result ___ (biomarker_result)

# LAMN or HAMN with extraperitoneal disease

- Pathologic confirmation is recommended to rule out high-risk disease
    - It would be extremely unusual for low-risk disease to have extraperitoneal spread
- Consider localized/surgical options
- Palliative CRS with or without IPCT, if symptomatic
    - Principles of Surgery and CRS/IPCT (APP-C)
- Consider palliative systemic therapy (APP-D 1 of 11)
- Clinical trial
- Best supportive care

# AA, GCA, or UC-NOS with extraperitoneal disease

- Biomarker testing to identify actionable mutations
    - Biomarker testing is recommended, although there may be a higher rate of assay failure if specimen has low cellularity
    - See Principles of Pathology and Molecular Review (APP-B)
- Palliative systemic therapy (APP-D 2 of 11)
- Consider localized/surgical options
- Clinical trial
- Best supportive care

# Next

- LAMN or HAMN, pathologic confirmation first to rule out high-risk disease
- LAMN or HAMN, then localized/surgical options, palliative CRS with or without IPCT if symptomatic, palliative systemic therapy (APP-D 1 of 11), clinical trial, or best supportive care
- AA, GCA, or UC-NOS, biomarker testing to identify actionable mutations (APP-B)
- AA, GCA, or UC-NOS, then palliative systemic therapy (APP-D 2 of 11), localized/surgical options, clinical trial, or best supportive care
