+++
id           = "ampullary/AMP-6"
gid          = "ampullary"
ref          = "AMP-6"
page         = 12
title        = "Treatment of metastatic ampullary adenocarcinoma, by performance status"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-7"]

[facets]
disease   = "ampullary"
histology = "adenocarcinoma"
stage     = "IV"
timepoint = "metastatic"
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ecog"
type = "enum"
options = ["0", "1", "2", "3"]
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
name = "met_sites"
type = "text"
[[variables]]
name = "oligometastatic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "genetic_testing"
type = "enum"
options = ["done", "not done"]
[[variables]]
name = "molecular_profiling"
type = "text"
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-6, p12
- Applies to metastatic ampullary adenocarcinoma
- Principles of Systemic Therapy: AMP-E
- Principles of Radiation Therapy: AMP-F
- Principles of Palliation and Supportive Care: AMP-G
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Metastatic ampullary adenocarcinoma
- Sites of metastatic disease: ___ (met_sites)
- Oligometastatic disease: ___ (oligometastatic)
- ECOG ___ (ecog)
- Biliary drainage: ___ (biliary_drainage)
- Nutritional intake: ___ (nutritional_intake)
- Performance status group: ___ (ps_group)
    - Good PS is ECOG 0-1 with good biliary drainage and adequate nutritional intake
    - Intermediate PS is ECOG 2
    - Poor PS is ECOG 3
- Genetic testing for inherited mutations: ___ (genetic_testing)
- Molecular profiling of tumor tissue: ___ (molecular_profiling)

# Testing for every patient with metastatic disease

- Genetic testing for inherited mutations, if not previously done
    - Recommended for any patient with confirmed ampullary adenocarcinoma, or positive family history of cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling for patients who test positive for a pathogenic mutation: ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, TP53
    - Genetic counseling also for patients with a positive family history of cancer, regardless of mutation status
- Molecular profiling of tumor tissue, if not previously performed
    - For patients with metastatic disease who are candidates for anti-cancer therapy, to identify clinically actionable and/or emerging alterations, if clinically indicated
    - Preferably using an NGS assay
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - MSI, dMMR, or TMB by comprehensive genomic profiling via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via IHC with or without FISH
    - RNA sequencing assays preferred for detecting RNA fusions, because gene fusions are better detected by RNA-based NGS
    - Testing on tumor tissue is preferred
    - Cell-free DNA testing can be considered if tumor tissue testing is not feasible

# Treatment if good or intermediate PS, choose one

- Systemic therapy (AMP-E)
- Consider targeted therapy (AMP-E) based on molecular profiling, as clinically indicated
- Systemic therapy (AMP-E) followed by radiation therapy (AMP-F) for palliative indications
- Systemic therapy (AMP-E) followed by surgery or other locally directed therapies to liver or lung metastases
    - Only for select patients with oligometastatic disease
    - Only with response or stable disease to systemic therapy

# Treatment if poor PS

- Palliative and best supportive care (AMP-G)
- And one of the following
    - Consider systemic therapy (AMP-E)
    - Consider targeted therapy (AMP-E) based on molecular profiling, as clinically indicated
    - Palliative radiation therapy (AMP-F)

# Next

- Disease progression, go to AMP-7
