+++
id           = "ampullary/AMP-7"
gid          = "ampullary"
ref          = "AMP-7"
page         = 13
title        = "Subsequent therapy after disease progression, by performance status"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-6", "AMP-A", "AMP-E", "AMP-F", "AMP-G"]

[facets]
disease   = "ampullary"
histology = "adenocarcinoma"
timepoint = ["metastatic", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "ecog"
type = "number"
[[variables]]
name = "ps_group"
type = "enum"
options = ["good", "intermediate", "poor"]
[[variables]]
name = "molecular"
type = "text"
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-7, p13
- Applies to disease progression, subsequent therapy
- Principles of Diagnosis, Imaging, and Staging: AMP-A
- Serial imaging as indicated to assess disease response
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Disease progression
- Serial imaging to assess disease response: ___ (imaging)
- ECOG ___ (ecog)
- Performance status group: ___ (ps_group)
    - Good PS is ECOG 0-1, with good biliary drainage and adequate nutritional intake
    - Intermediate PS is ECOG 2
    - Poor PS is ECOG 3
- Molecular profiling result: ___ (molecular)

# Good or intermediate PS

- Clinical trial (preferred)
- or Systemic therapy
    - Principles of Systemic Therapy (AMP-E)
- or Targeted therapy based on molecular profiling, as clinically indicated
    - Principles of Systemic Therapy (AMP-E)
- or Palliative RT for severe pain refractory to analgesic therapy
    - Principles of Radiation Therapy (AMP-F)

# Poor PS

- Palliative and best supportive care
    - Principles of Palliation and Supportive Care (AMP-G)
- and Consider systemic therapy
    - Principles of Systemic Therapy (AMP-E)
- or Consider targeted therapy based on molecular profiling, as clinically indicated
    - Principles of Systemic Therapy (AMP-E)
- or Palliative RT
    - Principles of Radiation Therapy (AMP-F)

# Molecular profiling, if targeted therapy is being considered

- Tumor/somatic molecular profiling, preferably using a NGS assay, is recommended for patients with metastatic disease who are candidates for anti-cancer therapy, to identify clinically actionable and/or emerging alterations, if clinically indicated
- Alterations include, but are not limited to
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - MSI, dMMR, or TMB, using comprehensive genomic profiling via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via IHC with or without FISH
- RNA sequencing assays are preferred for detecting RNA fusions, because gene fusions are better detected by RNA-based NGS
- Testing on tumor tissue is preferred
    - Cell-free DNA testing can be considered if tumor tissue testing is not feasible

# Next

- Further disease progression, palliative and best supportive care
    - Principles of Palliation and Supportive Care (AMP-G)
- or Further disease progression, clinical trial
