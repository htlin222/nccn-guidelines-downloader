+++
id           = "b-cell/HTBCEL-1"
gid          = "b-cell"
ref          = "HTBCEL-1"
page         = 86
title        = "Routing histologic transformation of indolent lymphoma to DLBCL to its treatment pathway"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["MZL-1", "HTBCEL-2", "HTBCEL-3", "HGBL-1", "BCEL-C", "NHODG-D"]

[facets]
disease   = "b-cell"
histology = "dlbcl"
biomarker = ["myc", "bcl2", "bcl6"]
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "indolent_histology"
type = "text"
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "prior_lines"
type = "number"
[[variables]]
name = "myc"
type = "enum"
options = ["rearranged", "not rearranged", "not done"]
[[variables]]
name = "bcl2"
type = "enum"
options = ["rearranged", "not rearranged", "not done"]
[[variables]]
name = "bcl6"
type = "enum"
options = ["rearranged", "not rearranged", "not done"]
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, HTBCEL-1, p86
- Applies to histologic transformation of indolent lymphomas to DLBCL
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Preceding indolent lymphoma: ___ (indolent_histology)
- Histologic transformation to DLBCL documented
- Prior therapy for the indolent lymphoma: ___ (prior_therapy)
- Chemoimmunotherapy regimens given for the indolent lymphoma before transformation: ___ (prior_lines)
- MYC rearrangement: ___ (myc)
- BCL2 rearrangement: ___ (bcl2)
- BCL6 rearrangement: ___ (bcl6)

# Transformation category

- Histologic transformation after minimal or no prior therapy
    - Minimal prior therapy means ISRT alone, or one course of single-agent therapy including rituximab
    - Perform FISH for BCL2 rearrangement [t(14;18)]
    - Perform FISH for MYC rearrangements [t(8;14) or variants, t(8;22), t(2;8)]
    - MGPT may be useful for treatment selection
- HGBL with MYC and BCL2 rearrangements
    - Defined per the International Consensus Classification of Mature Lymphoid Neoplasms and the WHO Classification of Tumours, Haematolymphoid tumours
- DLBCL or HGBL with MYC and BCL6 rearrangements
    - Defined per the International Consensus Classification of Mature Lymphoid Neoplasms and the WHO Classification of Tumours, Haematolymphoid tumours
- Histologic transformation after multiple lines of prior therapies
    - Includes two or more chemoimmunotherapy regimens for indolent lymphomas given prior to histologic transformation
    - For example, prior treatment with BR and RCHOP
    - Perform FISH for BCL6 and MYC rearrangements

# Treatment after minimal or no prior therapy

- Chemoimmunotherapy
    - Anthracycline-based regimens preferred unless contraindicated
    - See BCEL-C, first-line therapy
- With or without ISRT
    - Principles of Radiation Therapy (NHODG-D)
    - Consider ISRT for localized presentations, bulky disease, and/or limited osseous disease

# Next

- After chemoimmunotherapy with or without ISRT, assess PET/CT response to therapy, go to HTBCEL-2
- HGBL with MYC and BCL2 rearrangements, treatment regimens as listed on HGBL-1
- DLBCL or HGBL with MYC and BCL6 rearrangements, treatment regimens as listed on HGBL-1
- Histologic transformation after multiple lines of prior therapies, go to HTBCEL-3
