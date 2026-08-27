+++
id           = "b-cell/FOLL-1"
gid          = "b-cell"
ref          = "FOLL-1"
page         = 15
title        = "Additional diagnostic testing that separates classic follicular lymphoma from its look-alikes"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["FOLL-2", "FOLL-6", "BCEL-1", "BCEL-2"]

[facets]
disease   = "b-cell"
histology = "follicular"
biomarker = ["bcl2", "bcl6", "cd20"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "specimen"
type = "enum"
options = ["peripheral blood", "biopsy specimen", "both"]
[[variables]]
name = "fl_grade"
type = "enum"
options = ["1", "2", "3A", "3B"]
[[variables]]
name = "dlbcl_area"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "bcl2_expression"
type = "text"
[[variables]]
name = "t14_18"
type = "text"
[[variables]]
name = "cd10"
type = "text"
[[variables]]
name = "cd23"
type = "text"
[[variables]]
name = "ki67"
type = "number"
[[variables]]
name = "young_localized"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, FOLL-1, p15
- Additional diagnostic testing for follicular lymphoma (FL)
- Germinal center (GC) or follicular center cell phenotype is not equivalent to FL, and occurs in BL and some DLBCL
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Specimen available: ___ (specimen)
- FL grade ___ (fl_grade)
- Any area of DLBCL in the specimen: ___ (dlbcl_area)
- BCL2 expression ___ (bcl2_expression)
- t(14;18) ___ (t14_18)
- CD10 ___ (cd10) / CD23 ___ (cd23)
- Ki-67 proliferation fraction ___ (ki67)
- Young patient with localized disease: ___ (young_localized)

# Grading and classification

- In the 2022 WHO classification (WHO5), FL grades 1, 2, and 3A are termed classic FL (cFL)
- The International Consensus classification (ICC) has retained the grading for FL (1-2, 3A, and 3B)
- FL1-2 (ICC) are managed according to the treatment recommendations for cFL (WHO5)
- FL3B (ICC)/follicular large B-cell lymphoma (FLBCL; WHO5) is commonly treated as DLBCL (BCEL-1)
- Any area of DLBCL in FL of any grade should be diagnosed and treated as a DLBCL (BCEL-1)
- The management of FL3A (ICC) is controversial, and treatment should be individualized

# Essential testing

- Adequate immunophenotyping to establish diagnosis
    - Typical immunophenotype: CD10+, BCL2+, CD23+/-, CD43-, CD5-, CD20+, BCL6+
    - Rare cases of FL may be CD10- or BCL2-
- IHC panel
    - CD20
    - CD3
    - CD5
    - CD10
    - BCL2
        - In young patients with localized disease that lacks BCL2 expression or t(14;18), the differential diagnosis should include PTFL in adults; BCL2-R negative, CD23-positive follicle center lymphoma (ICC)/dFL (WHO5); and LBCL with IRF4/MUM1 rearrangement
    - BCL6
    - CD21, or CD23
- With or without flow cytometry, with peripheral blood and/or biopsy specimen
    - kappa/lambda
    - CD19
    - CD20
    - CD5
    - CD23
    - CD10

# Useful under certain circumstances

- Molecular analysis to detect
    - Ig gene rearrangements
    - BCL2 rearrangements
- FISH
    - t(14;18)
        - In young patients with localized disease that lacks BCL2 expression or t(14;18), the differential diagnosis should include PTFL in adults; BCL2-R negative, CD23-positive follicle center lymphoma (ICC)/dFL (WHO5); and LBCL with IRF4/MUM1 rearrangement
    - BCL6
    - 1p36
        - BCL2-R negative, CD23-positive follicle center lymphoma (ICC)/dFL (WHO5) has a predominantly diffuse pattern, pelvis/inguinal location, and common STAT6 mutations along with 1p36 deletion or TNFRSF14 mutation
    - IRF4/MUM1 rearrangements
        - LBCL with IRF4/MUM1 rearrangement are usually DLBCL, but occasionally are purely FL3B (ICC/FLBCL [WHO5]), and often DLBCL with FL3B
        - Patients typically present with Waldeyer's ring involvement, and are often children/young adults
        - Locally aggressive, but respond well to chemotherapy with or without radiation therapy (RT)
        - Do not have a BCL2 rearrangement, and should not be treated as low-grade FL
- IHC panel
    - Ki-67
        - There are reports showing that FL1-2 with a Ki-67 proliferation fraction of >30% may be associated with a more aggressive clinical behavior, but there is no evidence that this should guide treatment decisions
    - IRF4/MUM1 for FL grade 3
    - cyclin D1
- MGPT including CREBBP, EZH2, MAP2K1, TNFRSF14, and STAT6 mutation

# Next

- Classic FL (cFL; WHO5), go to workup (FOLL-2)
- BCL2-R negative, CD23-positive follicle center lymphoma (ICC)/FL with predominantly diffuse growth pattern (dFL) (WHO5), manage as cFL (FOLL-2)
    - Has a predominantly diffuse pattern, pelvis/inguinal location, and common STAT6 mutations along with 1p36 deletion or TNFRSF14 mutation
- Large B-cell lymphoma (LBCL) with IRF4/MUM1 rearrangement, go to BCEL-2
- Pediatric-type FL (PTFL) (in adults), go to FOLL-6
    - Consider in young patients with localized disease that lacks BCL2 expression or t(14;18)
- FL3B (ICC)/FLBCL (WHO5), or any area of DLBCL, treat as DLBCL (BCEL-1)
