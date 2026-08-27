+++
id           = "mds/MDS-3"
gid          = "mds"
ref          = "MDS-3"
page         = 9
title        = "Additional testing after initial evaluation, and classification of the result"
nccn_version = "3.2026"
nccn_date    = "01/12/26"
generated    = "2026-08-27"
see_also     = ["MDS-1", "MDS-2", "MDS-4"]

[facets]
disease   = "mds"
histology = "myelodysplastic"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "working_dx"
type = "text"
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no", "undecided"]
[[variables]]
name = "cmv_status"
type = "enum"
options = ["negative", "positive", "unknown"]
[[variables]]
name = "lgl_peripheral_blood"
type = "enum"
options = ["detected", "not-detected", "not-assessed"]
+++

# Source

- NCCN Myelodysplastic Syndromes v3.2026, MDS-3, p9
- Covers the additional testing to order, and the classification of the result as MDS, MDS/MPN overlap syndromes, or AML
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Working diagnosis after initial evaluation: ___ (working_dx)
- Hematopoietic cell transplant (HCT) candidate: ___ (hct_candidate)
- Cytomegalovirus (CMV) serostatus: ___ (cmv_status)
- Large granular lymphocytes (LGLs) in the peripheral blood: ___ (lgl_peripheral_blood)

# Additional testing

- Consider flow cytometry (FCM) for MDS as a diagnostic aid
    - See Recommendations for Flow Cytometry (MDS-F) and Discussion
- Consider FCM, T-cell receptor (TCR) polymerase chain reaction (PCR), and STAT3 mutation testing to evaluate for large granular lymphocyte (LGL)
    - Marrow or peripheral blood cell FCM may be assayed
    - T-cell gene rearrangement studies may be conducted if LGLs are detected in the peripheral blood
    - STAT3 mutations are commonly found in T-cell LGL (T-LGL) disease
- Consider FCM to evaluate for a paroxysmal nocturnal hemoglobinuria (PNH) clone
    - FCM analysis of granulocytes and monocytes from blood
    - Use FLAER (fluorescent aerolysin) and at least one glycophosphatidylinositol-anchored protein to assess the presence of a PNH clone
- Perform human leukocyte antigen (HLA) typing if hematopoietic cell transplant (HCT) candidate
    - Donors should be evaluated by high-resolution allele-level typing for HLA-A, -B, -C, -DR, and -DQ
- Consider evaluating patients with chronic myelomonocytic leukemia (CMML) for PDGFRβ gene rearrangements at 5q32
    - CMML with eosinophilia, and other myeloid and lymphoid malignancies with rearrangement of PDGFRB (locus 5q32), have constitutive activation of the tyrosine kinase receptor
    - Spleno- or hepato-megaly are common clinical features
    - Considered unique entities by WHO, and exquisitely sensitive to imatinib
    - See MDS/MPN Classification Table on MDS-A [3 of 5]

# Blood product support

- CMV-safe (CMV-negative or leukopheresed) blood products are recommended whenever possible for CMV-negative transplant candidates

# Next

- MDS, see MDS Classification Systems (MDS-A [1 of 5]) and (MDS-B)
- MDS/myeloproliferative neoplasm (MPN) overlap syndromes, see Principles, Classification System, and Management (MDS-A [2 of 5])
- Acute myeloid leukemia (AML), see NCCN Guidelines for Acute Myeloid Leukemia
- If negative for MDS/AML, see Recommendations for Flow Cytometry (MDS-F)
    - Mutation panel may be useful in this context to validate indolent myeloid hematopoietic disorders
- Consider observation to document indolent course versus marked progression of severe cytopenia or increase in blasts
