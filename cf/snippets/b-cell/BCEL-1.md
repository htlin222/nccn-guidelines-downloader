+++
id           = "b-cell/BCEL-1"
gid          = "b-cell"
ref          = "BCEL-1"
page         = 62
title        = "Additional diagnostic testing and subtype assignment in diffuse large B-cell lymphoma"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["DIAG-1", "BCEL-2", "BCEL-A", "BCEL-B", "PMBL-1", "HGBL-1"]

[facets]
disease   = "b-cell"
histology = "dlbcl"
biomarker = ["myc", "bcl2", "bcl6", "cd20"]
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "specimen"
type = "text"
[[variables]]
name = "cell_of_origin"
type = "enum"
options = ["GCB", "non-GCB"]
[[variables]]
name = "myc_fish"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "bcl2_fish"
type = "text"
[[variables]]
name = "bcl6_fish"
type = "text"
[[variables]]
name = "subtype"
type = "text"
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, BCEL-1, p62
- Applies to diffuse large B-cell lymphoma: additional diagnostic testing and assignment of subtype
- For adolescent and young adult (AYA) patients with B-cell lymphomas, see Special Considerations (NHODG-B 4 of 5)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Specimen available for testing: ___ (specimen)
- Cell of origin, germinal center B-cell (GCB) versus non-GCB: ___ (cell_of_origin)
- FISH for MYC: ___ (myc_fish)
- FISH for BCL2 rearrangement: ___ (bcl2_fish)
- FISH for BCL6 rearrangement: ___ (bcl6_fish)
- Subtype assigned: ___ (subtype)

# Essential additional diagnostic testing

- Adequate immunophenotyping to establish diagnosis and germinal center B-cell (GCB) versus non-GCB origin
    - Typical immunophenotype is CD20+, CD45+, CD3-; additional markers are used for subclassification
    - IHC panel
        - CD3
        - CD20
        - CD10
        - CD21
        - BCL2
        - BCL6
        - IRF4/MUM1
        - MYC
    - With or without flow cytometry, with peripheral blood and/or biopsy specimen
        - kappa/lambda
        - CD3
        - CD5
        - CD19
        - CD10
        - CD20
        - CD45
- FISH for MYC
- FISH for BCL2 rearrangement, if MYC positive
- FISH for BCL6 rearrangement, if MYC positive

# Useful under certain circumstances

- Additional IHC studies to establish lymphoma subtype
    - cyclin D1
    - kappa/lambda
    - CD5
    - CD30
    - CD45
    - CD138
    - anaplastic lymphoma kinase (ALK)
    - human herpesvirus-8 (HHV8)
    - SOX11
    - Ki-67
- Epstein-Barr virus (EBV)-encoded RNA (EBER) in situ hybridization (EBER-ISH)
- FISH for IRF4/MUM1 rearrangements
    - LBCL with IRF4/MUM1 rearrangement is usually DLBCL, but occasionally is purely FL grade 3b (ICC)/FLBCL (WHO5), and often DLBCL with FL grade 3b
    - Patients typically present with Waldeyer's ring involvement and are often children/young adults
    - Locally aggressive but responds well to chemotherapy with or without RT
    - Does not have a BCL2 rearrangement and should not be treated as low-grade FL
- MGPT with lymphoma panel
    - For the minimal list of accepted genes that should be included in the MGPT lymphoma panel for DLBCL, see BCEL-A 1 of 3

# Subtypes

- DLBCL, not otherwise specified (DLBCL-NOS), includes germinal center (GC) and non-GC
    - GC (or follicle center) phenotype is not equivalent to FL and can occur in DLBCL and BL
    - Morphology is required to establish diagnosis
- FL3B (ICC)/FLBCL (WHO5)
- Intravascular LBCL
- DLBCL associated with chronic inflammation
- Fibrin-associated LBCL
- EBV-positive DLBCL, NOS
- T-cell/histiocyte-rich LBCL
- LBCL with IRF4/MUM1 rearrangement
- HGBL with MYC and BCL6 rearrangements (ICC)
- Primary cutaneous DLBCL, leg type
- ALK-positive LBCL
- Mediastinal gray zone lymphoma (MGZL)
- Primary mediastinal large B-cell lymphoma (PMBL)
- HGBL
- HGBL, NOS
- LBCL with 11q aberration (ICC)/HGBL with 11q aberrations (WHO5)
- DLBCL arising from FL or MZL
- Primary DLBCL of the CNS
- DLBCL arising from CLL (Richter transformation)

# Next

- Subtype-specific pathways referenced from this page
    - Workup (BCEL-2)
    - BCEL-10
    - BCEL-B 1 of 2
    - BCEL-B 2 of 2
    - PMBL-1
    - HGBL-1
    - BURK-1
    - HTBCEL-1
- Primary DLBCL of the CNS, see NCCN Guidelines for CNS
- DLBCL arising from CLL (Richter transformation), see NCCN Guidelines for CLL/SLL
