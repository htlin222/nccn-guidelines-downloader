+++
id           = "pancreatic/PANC-11"
gid          = "pancreatic"
ref          = "PANC-11"
page         = 27
title        = "First-line therapy and maintenance therapy for metastatic disease"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-12", "PANC-A", "PANC-B", "PANC-G", "PANC-H", "PANC-I", "PANC-J"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
stage     = "IV"
timepoint = ["metastatic", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ecog"
type = "enum"
options = ["0", "1", "2", "3", "4"]
[[variables]]
name = "jaundice"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "genetic_status"
type = "enum"
options = ["done", "not previously done"]
[[variables]]
name = "profiling_status"
type = "enum"
options = ["done", "not previously done"]
[[variables]]
name = "chemo_months"
type = "number"
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-11, p27
- Applies to metastatic disease, first-line therapy and maintenance therapy
- Diagnosis, imaging, and staging per Principles of Diagnosis, Imaging, and Staging (PANC-A)
- Serial imaging as indicated to assess disease response
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Metastatic pancreatic adenocarcinoma
- ECOG ___ (ecog)
- Jaundice ___ (jaundice)
- Genetic testing for inherited mutations ___ (genetic_status)
- Molecular profiling of tumor tissue ___ (profiling_status)
- Chemotherapy given so far ___ (chemo_months) months

# Before first-line therapy

- If jaundice present, placement of SEMS
    - Per Principles of Obstructive Jaundice and Tissue Acquisition Management (PANC-B)
    - Unless biliary bypass was performed at the time of laparoscopy or laparotomy
- If not previously done, genetic testing for inherited mutations
    - Recommended for any patient with confirmed pancreatic cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling for patients who test positive for a pathogenic mutation (ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, and TP53)
    - Genetic counseling for patients with a positive family history of cancer, especially pancreatic cancer, regardless of mutation status
    - See NCCN Guidelines for Genetic/Familial High Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- If not previously done, molecular profiling of tumor tissue
    - Tumor/somatic molecular profiling, preferably using a NGS assay, recommended for all patients who are candidates for anti-cancer therapy
    - Purpose is to identify clinically actionable and/or emerging alterations
    - Fusions (ALK, NRG1, NTRK, ROS1, FGFR2, and RET)
    - Mutations (BRAF, BRCA1/2, KRAS, and PALB2)
    - Amplifications (HER2)
    - MSI, dMMR, or TMB using comprehensive genomic profiling via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via IHC with or without FISH
    - RNA sequencing recommended in addition to DNA sequencing, since it is better at detecting gene fusions
    - Testing on tumor tissue is preferred
    - ctDNA testing can be considered if tumor tissue testing is not feasible
    - See Principles of Cancer Risk Assessment and Counseling (PANC-J)

# Performance status definition

- Good PS is ECOG 0 to 1, with good biliary drainage and adequate nutritional intake
- Intermediate PS is ECOG 2
- Poor PS is ECOG 3
- Patients with ECOG 4 should be exclusively supported by palliative and best supportive care

# First-line therapy, good or intermediate PS

- Clinical trial (preferred)
- or Systemic therapy, per Principles of Systemic Therapy (PANC-G)
- Serial imaging as indicated to assess disease response

# First-line therapy, poor PS

- Palliative and best supportive care, per Principles of Palliation and Supportive Care (PANC-I)
- and Consider single-agent chemotherapy, per Principles of Systemic Therapy (PANC-G)
    - or possibly targeted therapy based on molecular profiling, as clinically indicated
- or Palliative RT, per Principles of Radiation Therapy (PANC-H)

# Maintenance therapy, no disease progression

- Applies after at least 4-6 months of chemotherapy, assuming acceptable tolerance
- Systemic therapy (PANC-G), with or without metastasis-directed therapy at a high-volume center
    - In rare circumstances when patients have indolent or oligometastatic disease, refer to a high-volume center to be evaluated for possible metastasis-directed therapy
- or Clinical trial
- or Chemotherapy holiday
- Serial imaging as indicated to assess disease response

# Next

- Disease progression on first-line therapy, go to PANC-12
- Disease progression on maintenance therapy, go to PANC-12
