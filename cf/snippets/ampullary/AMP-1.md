+++
id           = "ampullary/AMP-1"
gid          = "ampullary"
ref          = "AMP-1"
page         = 7
title        = "Workup of a clinically suspected ampullary neoplasm, and the branch it sets"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-A", "AMP-2", "AMP-3"]

[facets]
disease   = "ampullary"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "text"
[[variables]]
name = "prior_colonoscopy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "biopsy_result"
type = "text"
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-1, p7
- Applies to clinical suspicion of ampullary neoplasm
- Principles of Diagnosis, Imaging, and Staging: AMP-A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (presentation)
- Clinical suspicion of ampullary neoplasm
- Colonoscopy previously performed according to established guidelines: ___ (prior_colonoscopy)
- Family history of cancer: ___ (family_history)
- ___ (biopsy_result)

# Workup

- Pancreatic protocol CT
    - Abdomen and pelvis
    - Per Principles of Diagnosis, Imaging, and Staging (AMP-A)
- Esophagogastroduodenoscopy (EGD)
    - With a side-viewing endoscope
    - With or without endoscopic ultrasound (EUS) with biopsy
- Colonoscopy, if not previously performed according to established guidelines

# If adenocarcinoma is confirmed

- Genetic testing for inherited mutations is recommended
    - For any patient with confirmed ampullary adenocarcinoma
    - For any patient with a positive family history of cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
- Genetic counseling is recommended
    - For patients who test positive for a pathogenic mutation in ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, or TP53
    - For patients with a positive family history of cancer, regardless of mutation status

# Next

- Benign
- Ampullary adenoma, go to AMP-2
- High-grade dysplasia
- Adenocarcinoma is confirmed, go to AMP-3
