+++
id           = "breast-screening/BSCR-16"
gid          = "breast-screening"
ref          = "BSCR-16"
page         = 24
title        = "Follow-up evaluation after surgical excision, by excision pathology"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-15", "BSCR-1", "BSCR-4"]

[facets]
disease   = "breast-screening"
timepoint = ["diagnosis", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "lesion_location"
type = "text"
[[variables]]
name = "excision_pathology"
type = "text"
[[variables]]
name = "imaging_correlation"
type = "enum"
options = ["concordant", "not-concordant"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-16, p24
- Follow-up evaluation after surgical excision
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Excised lesion location ___ (lesion_location)
- Surgical excision pathology ___ (excision_pathology)
- Excision results versus imaging and core needle biopsy results ___ (imaging_correlation)
    - If surgical excision results are not concordant with imaging or core needle biopsy results, clinical correlation is recommended

# Benign

- Includes lesions such as radial scar, papillomas, and FEA
- Screening (BSCR-1)

# ADH

- Screening (BSCR-4)
- See NCCN Guidelines for Breast Cancer Risk Reduction

# ALH

- Screening (BSCR-4)
- See NCCN Guidelines for Breast Cancer Risk Reduction

# Classic LCIS

- Screening (BSCR-4)
- See NCCN Guidelines for Breast Cancer Risk Reduction

# Non-classic LCIS

- Screening (BSCR-4)
- See NCCN Guidelines for Breast Cancer Risk Reduction
- Complete excision with negative margins would typically be performed for non-classic LCIS
    - Outcomes data regarding treatment of individuals with non-classic LCIS are limited
    - Due in part to a paucity of histologic categorization of variants of LCIS

# Malignant

- See NCCN Guidelines for Breast Cancer

# Next

- Benign, go to screening (BSCR-1)
- ADH, go to screening (BSCR-4) and NCCN Guidelines for Breast Cancer Risk Reduction
- ALH, go to screening (BSCR-4) and NCCN Guidelines for Breast Cancer Risk Reduction
- Classic LCIS, go to screening (BSCR-4) and NCCN Guidelines for Breast Cancer Risk Reduction
- Non-classic LCIS, go to screening (BSCR-4) and NCCN Guidelines for Breast Cancer Risk Reduction
- Malignant, go to NCCN Guidelines for Breast Cancer
