+++
id           = "pancreatic/PANC-8"
gid          = "pancreatic"
ref          = "PANC-8"
page         = 22
title        = "Palliative management when disease is found unresectable at surgery"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-2", "PANC-9", "PANC-11", "PANC-A", "PANC-B", "PANC-C", "PANC-I"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["primary-treatment", "supportive"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "jaundice"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "pain"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "biliary_bypass_at_surgery"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biopsy_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "genetic_testing_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "molecular_profiling_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "disease_extent"
type = "enum"
options = ["locally-advanced", "metastatic"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-8, p22
- Applies to disease found unresectable at surgery
- Resectability status defined in Criteria Defining Resectability Status at Diagnosis (PANC-C)
- Principles of Diagnosis, Imaging, and Staging (PANC-A)
- Principles of Surgical Technique (PANC-E), and Pathologic Analysis: Specimen Orientation, Histologic Sections, and Reporting (PANC-F)
- Principles of Palliation and Supportive Care (PANC-I)
- Refer to a tertiary cancer center for second opinion about unresectability
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pancreatic adenocarcinoma, unresectable disease at surgery
- Jaundice ___ (jaundice)
- Pain ___ (pain)
- Biliary bypass already performed at the time of laparoscopy or laparotomy ___ (biliary_bypass_at_surgery)
- Biopsy confirmation of diagnosis already done ___ (biopsy_done)
- Genetic testing for inherited mutations already done ___ (genetic_testing_done)
- Molecular profiling of tumor tissue already done ___ (molecular_profiling_done)
- Disease extent ___ (disease_extent)

# Treatment, no jaundice

- Consider gastrojejunostomy, if clinically indicated
- With or without celiac plexus neurolysis if pain (category 2B if no pain)

# Treatment, jaundice present

- Consider biliary bypass or SEMS
    - Unless biliary bypass was performed at the time of laparoscopy or laparotomy
    - Principles of Obstructive Jaundice and Tissue Acquisition Management (PANC-B)
- With or without gastrojejunostomy, if clinically indicated
- With or without celiac plexus neurolysis if pain (category 2B if no pain)

# If not previously done

- Biopsy confirmation of diagnosis
    - Core biopsy is recommended, if possible, to obtain adequate tissue for molecular profiling or other ancillary studies
- Genetic testing for inherited mutations
    - Recommended for any patient with confirmed pancreatic cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling if the patient tests positive for a pathogenic mutation in ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, or TP53
    - Genetic counseling if positive family history of cancer, especially pancreatic cancer, regardless of mutation status
    - See NCCN Guidelines for Genetic/Familial High Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Molecular profiling of tumor tissue, if clinically indicated
    - Tumor/somatic molecular profiling for all patients who are candidates for anti-cancer therapy, to identify clinically actionable and/or emerging alterations
    - Preferably a next-generation sequencing (NGS) assay, FDA-approved and/or validated
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - MSI, dMMR, or TMB by comprehensive genomic profiling
    - HER2 overexpression by IHC with or without FISH
    - RNA sequencing in addition to DNA sequencing, since it is better at detecting gene fusions
    - Tumor tissue testing is preferred; ctDNA testing can be considered if tumor tissue testing is not feasible
    - Principles of Cancer Risk Assessment and Counseling (PANC-J)

# Next

- Locally advanced disease, go to PANC-9
- Metastatic disease, go to PANC-11
