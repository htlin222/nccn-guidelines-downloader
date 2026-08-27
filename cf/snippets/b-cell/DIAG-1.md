+++
id           = "b-cell/DIAG-1"
gid          = "b-cell"
ref          = "DIAG-1"
page         = 14
title        = "Tissue diagnosis of B-cell lymphoma and routing to the subtype pathway"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["NHODG-A", "BCEL-1", "FOLL-1", "MANT-1"]

[facets]
disease   = "b-cell"
histology = "any"
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "biopsy_type"
type = "enum"
options = ["excisional", "incisional", "core needle", "FNA", "core needle plus FNA"]
[[variables]]
name = "subtype"
type = "text"
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, DIAG-1, p14
- Applies to the definitive diagnosis and histologic grading of lymphoma
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Lesion sampled: ___ (biopsy_site)
- Procedure performed: ___ (biopsy_type)
- Histologic diagnosis: ___ (subtype)

# Biopsy

- Excisional or incisional biopsy, preferred for the definitive diagnosis or histologic grading of lymphoma
- FNA biopsy is insufficient for the initial diagnosis or histologic grading of lymphoma
- Core needle biopsy, an appropriate alternative to excisional or incisional biopsy
    - Multiple biopsies preferred
    - Especially when a lymph node is not easily accessible for excisional or incisional biopsy
    - Especially if surgical biopsy would cause significant morbidity or substantial treatment delays
- Combination of core needle biopsy and FNA biopsy may be sufficient for diagnosis
    - Multiple core needle biopsies preferred
    - Only in conjunction with appropriate ancillary techniques for the differential diagnosis

# Ancillary techniques for the differential diagnosis

- Immunohistochemistry (IHC)
- Flow cytometry
- Molecular analysis to detect immunoglobulin (Ig) gene rearrangements
- FISH for major translocations
    - If a high suspicion of a clonal process remains and other techniques have not resulted in a clear identification of a clonal process, multigene panel testing (MGPT) can be used

# Hematopathology review

- Review of all slides
- At least one paraffin block representative of the lesion
- Rebiopsy if consult material is nondiagnostic
    - Preferably the most FDG-avid, accessible lymph node

# Additional diagnostic testing

- Use of Immunophenotyping/Molecular Analysis in Differential Diagnosis of Mature B-Cell and NK/T-Cell Neoplasms (NHODG-A)

# Next

- Follicular lymphoma (FL), go to FOLL-1
- Extranodal marginal zone lymphoma (EMZL) of the stomach, go to EMZLG-1
- EMZL of nongastric sites (noncutaneous), go to EMZLNG-1
- Nodal marginal zone lymphoma (NMZL), go to NMZL-1
- Splenic marginal zone lymphoma (SMZL), go to SMZL-1
- Mantle cell lymphoma (MCL), go to MANT-1
- Diffuse large B-cell lymphoma (DLBCL), go to BCEL-1
- High-grade B-cell lymphomas (HGBL), go to HGBL-1
- Burkitt lymphoma (BL), go to BURK-1
- HIV-related B-cell lymphomas, go to HIVLYM-1
- Lymphoblastic lymphoma (LL), go to BLAST-1
- Post-transplant lymphoproliferative disorders (PTLD), go to PTLD-1
