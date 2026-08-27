+++
id           = "pancreatic/PANC-1"
gid          = "pancreatic"
ref          = "PANC-1"
page         = 10
title        = "Clinical presentation and workup of suspected pancreatic cancer, and the branch on whether metastatic disease is present"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-A", "PANC-2", "PANC-3", "PANC-9", "PANC-11"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "text"
[[variables]]
name = "axial_imaging"
type = "text"
[[variables]]
name = "duct_status"
type = "text"
[[variables]]
name = "metastatic"
type = "enum"
options = ["no metastatic disease", "metastatic disease", "not yet determined"]
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "lft"
type = "text"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-1, p10
- Applies to clinical suspicion of pancreatic cancer, or evidence of dilated pancreatic and/or bile duct (stricture)
- All recommendations are category 2A unless otherwise indicated
- This page carries footnote markers a through k; the footnote text is not present in the source extract, so it is not reproduced here

# Assessment

- ___ (age) yo
- ___ (presentation)
- Clinical suspicion of pancreatic cancer, or evidence of dilated pancreatic and/or bile duct (stricture): ___ (duct_status)
- Axial imaging result: ___ (axial_imaging)
- Metastatic disease on axial imaging: ___ (metastatic)

# Initial workup for every patient

- Axial imaging
    - Pancreatic protocol CT or MRI (abdomen) (PANC-A)
- Multidisciplinary consultation

# If no metastatic disease

- Chest and pelvis CT
- Consider endoscopic ultrasonography (EUS)
- Consider MRI as clinically indicated for indeterminate liver lesions
- Consider PET/CT or PET/MRI in patients with high-risk features
- Consider endoscopic retrograde cholangiopancreatography (ERCP) with stent placement
- Liver function test ___ (lft)
    - Draw after adequate biliary drainage
- Baseline CA 19-9 ___ (ca19_9)
    - Draw after adequate biliary drainage
- Genetic testing for inherited mutations, if diagnosis confirmed

# If metastatic disease

- Biopsy confirmation
    - From a metastatic site preferred
- Genetic testing for inherited mutations
- Molecular profiling of tumor tissue is recommended
- Complete staging with chest and pelvis CT

# Next

- No mass, or diagnosis not confirmed, refer to high-volume center for evaluation
- Resectable disease, go to PANC-2
- Borderline resectable disease, go to PANC-3
- Locally advanced disease, go to PANC-9
- Metastatic disease, go to PANC-11
