+++
id           = "ped_b-cell/PTLD-1"
gid          = "ped_b-cell"
ref          = "PTLD-1"
page         = 43
title        = "Additional diagnostic testing to establish and subclassify post-transplant lymphoproliferative disorders (PTLD)"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PTLD-A", "PTLD-2"]

[facets]
disease   = "ped_b-cell"
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "specimen"
type = "text"
[[variables]]
name = "morphology"
type = "text"
[[variables]]
name = "ptld_type"
type = "enum"
options = ["hyperplastic-nd-ptld", "polymorphic", "monomorphic", "pending"]
[[variables]]
name = "cd20"
type = "text"
[[variables]]
name = "eber"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "clonality"
type = "text"

+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PTLD-1, p43
- Additional diagnostic testing for PTLD, read together with Clinical Presentation and Diagnostic Pathology (PTLD-A)
- Testing panel is chosen by which PTLD category the morphology points to
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Specimen submitted: ___ (specimen)
- Morphology (PTLD-A): ___ (morphology)
- PTLD category: ___ (ptld_type)
- CD20 expression on B-cells: ___ (cd20)
- EBER-ISH: ___ (eber)
- Clonality: ___ (clonality)

# Essential

- Adequate immunophenotyping to establish diagnosis
    - Interpretation of the flow cytometry utilizes the standard approach of pattern recognition
    - It is clinically important to report CD20 expression on B-cells in all subtypes of PTLD
        - Report positive vs negative
        - If positive, report the pattern of expression
- Hyperplastic non-destructive PTLD (hyperplastic ND-PTLD)
    - Lesions included in this category
        - Florid follicular hyperplasia
        - Plasmacytic hyperplasia
        - Infectious mononucleosis-like hyperplasia
    - Morphology (PTLD-A)
    - Flow cytometry
        - CD3, CD5, CD10, CD19, CD20, CD45
        - Surface kappa/lambda
    - IHC/ISH panel
        - CD3, CD19, CD20, PAX5, CD138, MUM1
        - Kappa (ISH), lambda (ISH)
        - EBER-ISH
- Polymorphic and monomorphic PTLD (P-PTLD and M-PTLD)
    - For these categories, see the relevant sections in the NCCN Guidelines for B-Cell Lymphomas, T-Cell Lymphomas, Multiple Myeloma, and Hodgkin Lymphoma
    - Morphology (PTLD-A)
    - Flow cytometry
        - CD2, CD3, CD5, CD7, CD10, CD19, CD20, CD22, CD23, CD38, CD45, CD56
        - Surface kappa/lambda
    - IHC/ISH panel
        - CD3, CD5, CD10, CD19, CD20, PAX5, CD30, CD45
        - BCL2, BCL6, CD138, MUM1
        - Kappa (ISH), lambda (ISH)
        - EBER-ISH

# Useful under certain circumstances

- Additional immunophenotypic studies may be needed for further assessment, including subclassification of M-PTLD
    - For subclassification, see the relevant sections in the NCCN Guidelines for B-Cell Lymphomas, T-Cell Lymphomas, Multiple Myeloma, and Hodgkin Lymphoma
- Molecular analysis to assess clonality (PTLD-A)
- Additional cytogenetics/FISH and mutational analysis, when a specific type of M-PTLD is suspected or considered
    - For the suspected type, see the relevant sections in the NCCN Guidelines for B-Cell Lymphomas, T-Cell Lymphomas, Multiple Myeloma, and Hodgkin Lymphoma

# Next

- Workup (PTLD-2)
