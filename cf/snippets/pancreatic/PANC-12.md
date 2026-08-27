+++
id           = "pancreatic/PANC-12"
gid          = "pancreatic"
ref          = "PANC-12"
page         = 28
title        = "Subsequent therapy after disease progression, by performance status"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-11", "PANC-9"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["recurrence", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ecog"
type = "enum"
options = ["0", "1", "2", "3", "4"]
[[variables]]
name = "ps_group"
type = "enum"
options = ["good", "intermediate", "poor"]
[[variables]]
name = "biliary_drainage"
type = "enum"
options = ["good", "inadequate"]
[[variables]]
name = "nutritional_intake"
type = "enum"
options = ["adequate", "inadequate"]
[[variables]]
name = "tissue_adequate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "molecular_profile"
type = "text"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-12, p28
- Applies to disease progression, subsequent therapy
- Serial imaging as indicated to assess disease response
- Diagnosis, imaging, and staging per Principles of Diagnosis, Imaging, and Staging (PANC-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, disease progression
- ECOG ___ (ecog)
- Biliary drainage ___ (biliary_drainage)
- Nutritional intake ___ (nutritional_intake)
- PS group ___ (ps_group)
    - Good PS is ECOG 0-1 with good biliary drainage and adequate nutritional intake
    - Intermediate PS is ECOG 2
    - Poor PS is ECOG 3
    - Patients with ECOG 4 should be exclusively supported by palliative and best supportive care (PANC-I)
- Adequate tissue available for molecular profiling ___ (tissue_adequate)
- Molecular profiling result ___ (molecular_profile)

# Molecular profiling and re-biopsy

- Consider re-biopsy if adequate tissue is not available for molecular profiling
    - Core biopsy is recommended, if possible, to obtain adequate tissue for molecular profiling or other ancillary studies
- Tumor/somatic molecular profiling, preferably using an NGS assay, is recommended for all patients who are candidates for anti-cancer therapy
    - Identifies clinically actionable and/or emerging alterations, including but not limited to the following
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - MSI, dMMR, or TMB using comprehensive genomic profiling via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via IHC with or without FISH
    - RNA sequencing in addition to DNA sequencing, since it is better at detecting gene fusions
    - Testing on tumor tissue is preferred; ctDNA testing can be considered if tumor tissue testing is not feasible
    - See Principles of Cancer Risk Assessment and Counseling (PANC-J)

# Good or intermediate PS

- Clinical trial (preferred)
- or Systemic therapy, per Principles of Systemic Therapy (PANC-G)
    - May include targeted therapy or immunotherapy based on molecular profiling
    - With or without metastasis-directed therapy at a high-volume center, as clinically indicated
        - In rare circumstances when patients have indolent/oligometastatic disease, they should be referred to a high-volume center to be evaluated for possible metastasis-directed therapy
- or RT for severe pain refractory to analgesic therapy

# Poor PS

- Palliative and best supportive care, per Principles of Palliation and Supportive Care (PANC-I)
- and Consider single-agent chemotherapy, per Principles of Systemic Therapy (PANC-G)
- or Targeted therapy based on molecular profiling, as clinically indicated, per Principles of Systemic Therapy (PANC-G)
- or Palliative RT, per Principles of Radiation Therapy (PANC-H)

# Next

- Palliative and best supportive care (PANC-I)
- Clinical trial
