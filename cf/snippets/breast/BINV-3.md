+++
id           = "breast/BINV-3"
gid          = "breast"
ref          = "BINV-3"
page         = 16
title        = "Locoregional treatment of cT1-3, cN0 or cN+, M0 disease with mastectomy, and whether PMRT is indicated"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-4", "BINV-D", "BINV-E", "BINV-F", "BINV-H", "BINV-I", "BINV-J"]

[facets]
disease   = "breast"
stage     = ["I", "II", "III"]
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "nodes_pos"
type = "number"
[[variables]]
name = "margins"
type = "enum"
options = ["negative", "positive"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-3, p16
- Locoregional treatment of cT1-3, cN0 or cN+, M0 disease: mastectomy with or without PMRT
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth) (BINV-J)
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Clinical stage ___ (ctnm), within cT1-3, cN0 or cN+, M0
- Pathologic stage after mastectomy ___ (ptnm)
- Number of positive axillary nodes ___ (nodes_pos)
- Margins ___ (margins)

# Surgery

- Nipple-sparing, skin-sparing, or total mastectomy with surgical axillary staging (category 1)
    - Considerations for Surgical Axillary Staging (BINV-D)
    - Axillary Lymph Node Staging (BINV-E)
    - Margin Status Recommendations After BCS for Invasive Cancers and DCIS (BINV-F)
- With or without reconstruction
    - Principles of Breast Reconstruction Following Surgery (BINV-H)

# Adjuvant systemic therapy

- See BINV-4 to determine whether adjuvant systemic therapy is indicated
- RT is typically given after systemic therapy
- See BINV-I for sequencing of systemic therapy and RT

# PMRT by pathologic nodal status

- Negative axillary nodes (pN0/pN0[i+]) and pT2 or smaller (5 cm or smaller) and negative margins
    - No RT
    - PMRT may be considered for patients with multiple high-risk recurrence factors, including central/medial tumors or tumors of at least 2 cm and at least one of the following: grade 3, ER-negative, young age/longevity, or LVI
- Negative axillary nodes and pT3 (larger than 5 cm)
    - Consider PMRT to chest wall, with or without comprehensive RNI (including any portion of the undissected axilla at risk)
    - In the case of pT3N0, high-risk features for considering PMRT include, but are not limited to, young age/longevity and/or LVI
- 1-3 positive axillary nodes
    - Strongly consider PMRT to chest wall plus comprehensive RNI (including any portion of the undissected axilla at risk)
    - In the case of pN1mi (a micrometastasis, greater than 0.2 to 2.0 mm), and no axillary dissection, evaluate other patient risk factors when considering RT
- 4 or more positive axillary nodes
    - PMRT to chest wall plus comprehensive RNI (including any portion of the undissected axilla at risk) (category 1)
    - Consider imaging for systemic staging, including chest/abdomen, with or without pelvis, diagnostic CT with contrast, bone scan, and optional FDG-PET/CT
- Any pT/pN with positive margins
    - Re-excision to negative margins is preferred
    - If not feasible, then strongly consider PMRT to chest wall, with or without comprehensive RNI (including any portion of the undissected axilla at risk)
- All PMRT per Principles of Radiation Therapy (BINV-I)

# Next

- Determine whether adjuvant systemic therapy is indicated, go to BINV-4
- Radiation therapy planning and sequencing with systemic therapy, see BINV-I
