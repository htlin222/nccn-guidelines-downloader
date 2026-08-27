+++
id           = "occult/OCC-3"
gid          = "occult"
ref          = "OCC-3"
page         = 10
title        = "Additional workup for adenocarcinoma or carcinoma not otherwise specified, by nodal presentation"
nccn_version = "2.2026"
nccn_date    = "05/04/26"
generated    = "2026-08-28"
see_also     = ["OCC-2", "OCC-7", "OCC-A"]

[facets]
disease   = "occult"
histology = "adenocarcinoma"
timepoint = "workup"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histologic_diagnosis"
type = "enum"
options = ["adenocarcinoma", "carcinoma not otherwise specified"]
[[variables]]
name = "node_site"
type = "enum"
options = ["cervical", "supraclavicular", "axillary"]
+++

# Source

- NCCN Occult Primary v2.2026, OCC-3, p10
- Applies to a histologic diagnosis of adenocarcinoma, or carcinoma not otherwise specified
- Additional workup is chosen by clinical presentation, not by histology alone
- Symptom-directed endoscopy can be considered for individual patients based on clinical findings and IHC markers
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histologic diagnosis: ___ (histologic_diagnosis)
- Clinical presentation, nodes involved: ___ (node_site)
- Intact breast tissue, including gynecomastia, present or absent
- Prostate present, or post-prostatectomy

# Additional workup, supraclavicular nodes

- Neck/chest/abdomen/pelvis CT, if not done
    - CT performed with contrast, unless contraindicated
    - MRI performed with and without IV contrast, unless contraindicated
    - FDG-PET/CT is an alternative in patients with a contraindication to contrast enhancement
- Endoscopy, if clinically indicated
    - Symptom-directed, based on clinical findings and IHC markers
- Appropriate IHC
    - An expanded panel of IHC markers may be used as appropriate (OCC-A)
- Mammogram, in those with intact breast tissue including gynecomastia
    - If nondiagnostic and there is histopathologic evidence for breast cancer, breast MRI and/or breast ultrasound is indicated
        - Breast MRI performed with and without IV contrast, unless contraindicated
- Prostate-specific antigen (PSA), if age >40 y
    - Only in those with a prostate, or post-prostatectomy

# Additional workup, axillary nodes

- Neck/chest/abdomen/pelvis CT, if not done
    - CT performed with contrast, unless contraindicated
    - MRI performed with and without IV contrast, unless contraindicated
    - FDG-PET/CT is an alternative in patients with a contraindication to contrast enhancement
- Appropriate IHC
    - An expanded panel of IHC markers may be used as appropriate (OCC-A)
- Mammogram, in those with intact breast tissue including gynecomastia
    - If nondiagnostic and there is histopathologic evidence for breast cancer, breast MRI and/or breast ultrasound is indicated
        - Breast MRI performed with and without IV contrast, unless contraindicated
- PSA, if age >40 y
    - Only in those with a prostate, or post-prostatectomy

# Next

- Predominant and isolated cervical nodes, see NCCN Guidelines for Head and Neck Cancers
- Supraclavicular or axillary nodes, after workup, management based on workup findings, go to OCC-7
