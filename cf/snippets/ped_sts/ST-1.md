+++
id           = "ped_sts/ST-1"
gid          = "ped_sts"
ref          = "ST-1"
page         = 48
title        = "Assign the modified TNM stage and the clinical group for rhabdomyosarcoma"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-10"]

[facets]
disease   = "ped_sts"
stage     = "any"
timepoint = "staging"

[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "node_status"
type = "enum"
options = ["N0", "N1", "Nx"]
[[variables]]
name = "met_status"
type = "enum"
options = ["M0", "M1"]
[[variables]]
name = "resection"
type = "text"
[[variables]]
name = "assigned_stage"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "assigned_group"
type = "enum"
options = ["I", "II", "III", "IV"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, ST-1, p48
- Rhabdomyosarcoma staging and clinical group tables
- Table adapted with permission from Crane JN, Xue W, Qumseya A, et al. Clinical group and modified TNM stage for rhabdomyosarcoma: A review from the Children's Oncology Group. Pediatr Blood Cancer. 2022;69:e29644
- Table adapted with permission from Haduong JH, Heske CM, Allen-Rhoades W, et al. An update on rhabdomyosarcoma risk stratification and the rationale for current and future Children's Oncology Group clinical trials. Pediatr Blood Cancer. 2022;69:e29511
- All recommendations category 2A unless otherwise indicated

# Assessment

- Primary site ___ (primary_site)
- Tumor size ___ (tumor_size) cm
- Regional nodes ___ (node_status)
- Distant metastases ___ (met_status)
- Extent of resection and residual disease ___ (resection)
- Stage assigned ___ (assigned_stage)
- Clinical group assigned ___ (assigned_group)

# Tumor size (S)

- a: 5 cm or less in diameter
- b: greater than 5 cm in diameter

# Regional nodes (N)

- N0: Regional nodes not clinically involved
- N1: Regional nodes clinically involved
    - Defined as 1 cm or more measured in short axis on CT or MRI
- Nx: Clinical status of regional nodes unknown
    - Especially sites that preclude lymph node evaluation

# Metastases (M)

- M0: No distant metastases
- M1: Distant metastases present
- Considered evidence of metastasis
    - Positive cytology in pleural fluid, abdominal fluid, or CSF
    - Implants on pleural or peritoneal surfaces

# Stage

- Stage 1
    - Sites
        - Orbit
        - Head and neck, excluding parameningeal
        - GU: non-bladder, non-prostate
    - Size a or b
    - N0, N1, or Nx
    - M0
- Stage 2
    - Sites
        - Parameningeal
        - Bladder/prostate
        - Extremity
        - Other, including trunk and retroperitoneum
    - Size a
    - N0 or Nx
    - M0
- Stage 3
    - Sites
        - Parameningeal
        - Bladder/prostate
        - Extremity
        - Other, including trunk and retroperitoneum
    - Size a, with N1, M0
    - Size b, with N0, N1, or Nx, M0
- Stage 4
    - All sites
    - Size a or b
    - N0, N1, or Nx
    - M1

# Clinical group

- Group I: Localized disease, completely resected
    - Gross inspection and microscopic confirmation of complete resection is required
    - Regional nodes cannot be involved
- Group II
    - Localized disease, grossly resected with microscopic residual disease, or
    - Regional disease, grossly resected with or without microscopic residual disease
    - a. Localized disease, grossly resected tumor with microscopic residual disease, regional nodes not involved
    - b. Regional disease with involved nodes, completely resected with no microscopic residual, including most distal node is histologically negative
    - c. Regional disease with involved nodes, grossly resected with evidence of microscopic residual and/or histologic involvement of the most distal regional node in the dissection
- Group III: Localized or regional disease, biopsy only or incomplete resection with gross residual disease
- Group IV: Distant metastatic disease present at onset
    - Although not limited to these, the following are considered evidence of metastatic disease
        - Positive cytology in CSF
        - Positive cytology in pleural or abdominal fluids
        - Implants on pleural or peritoneal surfaces
    - Regional lymph node involvement and adjacent organ infiltration are not considered metastatic disease
    - A pleural effusion or ascites without positive cytologic evaluation is not considered evidence of metastatic disease
