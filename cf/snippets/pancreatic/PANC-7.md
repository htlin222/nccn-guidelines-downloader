+++
id           = "pancreatic/PANC-7"
gid          = "pancreatic"
ref          = "PANC-7"
page         = 21
title        = "Recurrence therapy for metastatic recurrent disease following surgery, split by time from completion of primary therapy"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-5", "PANC-6", "PANC-11", "PANC-12"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
stage     = ["IV", "recurrent"]
biomarker = ["brca", "kras", "braf", "ntrk", "ret", "alk", "ros1", "nrg1", "msi-h", "dmmr", "tmb-high", "her2-amplified"]
timepoint = ["recurrence", "metastatic"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ps"
type = "text"
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "interval_months"
type = "number"
[[variables]]
name = "prior_regimen"
type = "text"
[[variables]]
name = "prior_backbone"
type = "enum"
options = ["fluoropyrimidine-based", "gemcitabine-based", "neither", "unknown"]
[[variables]]
name = "genetic_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "profiling_done"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-7, p21
- Applies to recurrent metastatic disease, with or without local recurrence, after resection
- Recurrence therapy is best reserved for patients who maintain a good performance status (PS)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pancreatic adenocarcinoma, recurrent metastatic disease with or without local recurrence, after resection
- Sites of recurrence ___ (sites)
- Performance status ___ (ps)
- Time from completion of primary therapy ___ (interval_months) months
- Systemic therapy previously administered ___ (prior_regimen)
    - Backbone previously used ___ (prior_backbone)
- Genetic testing for inherited mutations already done ___ (genetic_done)
- Molecular profiling of tumor tissue already done ___ (profiling_done)

# Testing, if not previously done

- Genetic testing for inherited mutations
    - Recommended for any patient with confirmed pancreatic cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling if the patient tests positive for a pathogenic mutation (ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, TP53)
    - Genetic counseling also for a positive family history of cancer, especially pancreatic cancer, regardless of mutation status
    - See NCCN Guidelines for Genetic/Familial High Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Molecular profiling of tumor tissue, if clinically indicated
    - Recommended for all patients who are candidates for anti-cancer therapy, to identify clinically actionable and/or emerging alterations
    - Preferably a next-generation sequencing (NGS) assay
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - MSI, dMMR, or TMB by comprehensive genomic profiling, via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via IHC with or without FISH
    - RNA sequencing in addition to DNA sequencing, since it is better at detecting gene fusions
    - Testing on tumor tissue is preferred; ctDNA testing can be considered if tumor tissue testing is not feasible
    - Principles of Cancer Risk Assessment and Counseling (PANC-J)

# Recurrence therapy, ≥6 months from completion of primary therapy

- Clinical trial (preferred)
- Repeat systemic therapy previously administered
    - Principles of Systemic Therapy (PANC-G)
- Alternate systemic therapy, not previously used
    - Principles of Systemic Therapy (PANC-G)
- Palliative and best supportive care
    - Principles of Palliation and Supportive Care (PANC-I)

# Recurrence therapy, <6 months from completion of primary therapy

- Clinical trial (preferred)
- Switch to gemcitabine-based systemic chemotherapy, if fluoropyrimidine-based therapy was previously used
    - Principles of Systemic Therapy (PANC-G)
- Switch to fluoropyrimidine-based systemic chemotherapy, if gemcitabine-based therapy was previously used
    - Principles of Systemic Therapy (PANC-G)
- Alternate systemic therapy, not previously used
    - Principles of Systemic Therapy (PANC-G)
- Palliative and best supportive care
    - Principles of Palliation and Supportive Care (PANC-I)

# Site-specific considerations

- Indolent or oligometastatic disease, in rare circumstances
    - Refer to a high-volume center to be evaluated for possible metastasis-directed therapy
- Isolated pulmonary metastases
    - See Discussion for more information about treatment
