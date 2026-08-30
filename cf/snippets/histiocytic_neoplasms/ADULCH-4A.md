+++
id           = "histiocytic_neoplasms/ADULCH-4A"
gid          = "histiocytic_neoplasms"
ref          = "ADULCH-4A"
page         = 15
title        = "Radiographic response criteria for adults with LCH"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["ADULCH-4"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = "surveillance"

[[variables]]
name = "modality"
type = "enum"
options = ["fdg-pet", "ct", "mri"]
[[variables]]
name = "baseline_findings"
type = "text"
[[variables]]
name = "current_findings"
type = "text"
[[variables]]
name = "response_category"
type = "enum"
options = ["complete-response", "partial-response", "stable-disease", "progressive-disease"]
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, ADULCH-4A, p15
- Response criteria for adults with Langerhans cell histiocytosis (LCH)
- Adapted with permission from Goyal G, et al. Blood 2022;139:2601-2621
- Referred to from the treatment response assessment on ADULCH-4
- All recommendations category 2A unless stated otherwise

# Assessment

- Imaging modality used for response assessment: ___ (modality)
- Baseline imaging findings: ___ (baseline_findings)
- Current imaging findings: ___ (current_findings)
- LCH without radiographic abnormalities (eg, skin, gastrointestinal [GI] tract)
    - Do not use radiographic criteria; use clinical criteria to assess response
        - Physical exam
        - Endoscopy
- Response category assigned: ___ (response_category)

# Complete response

- FDG-PET
    - Normalization of lesions, with FDG uptake equal to surrounding background tissue
- CT or MRI
    - Complete anatomic resolution of lesions, or
    - Resolution of abnormal imaging features (enhancement, diffusion restriction, etc)
- A radiographic complete response does not end organ-specific follow-up
    - Endocrinopathies from pituitary involvement may require ongoing hormone replacement despite attaining a radiographic complete response
    - Single-system pulmonary LCH with abnormal PFTs at baseline: undergo follow-up PFT testing to assess response

# Partial response

- FDG-PET
    - Reduction from baseline standardized uptake value (SUV) of lesions
    - But persistent uptake greater than surrounding background tissue
- CT or MRI
    - Reduction, but not complete resolution, of lesions/abnormal imaging features

# Progressive disease

- FDG-PET
    - Increased SUV value of lesions as compared with before, or
    - Appearance of new FDG avid lesions
- CT or MRI
    - Worsening of abnormal imaging features, or
    - Growth of existing lesions, or
    - Appearance of new lesions

# Stable disease

- FDG-PET
    - Does not meet other criteria
- CT or MRI
    - Does not meet other criteria
