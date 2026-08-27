+++
id           = "b-cell/BURK-1"
gid          = "b-cell"
ref          = "BURK-1"
page         = 93
title        = "Additional diagnostic testing and workup for Burkitt lymphoma"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["BURK-2", "HGBL-1", "HIVLYM-1", "NHODG-B"]

[facets]
disease   = "b-cell"
histology = "burkitt"
biomarker = ["myc", "bcl2", "bcl6", "cd20"]
timepoint = ["diagnosis", "workup"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "b_symptoms"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "nodal_exam"
type = "text"
[[variables]]
name = "liver_spleen"
type = "text"
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "ki67"
type = "text"
[[variables]]
name = "hiv"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "hbv"
type = "text"
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, BURK-1, p93
- Burkitt lymphoma, additional diagnostic testing and workup
- This disease is complex and curable; it is preferred that treatment occur at centers with expertise in the management of the disease
- For treatment of double- or triple-hit tumors, see HGBL-1
    - In other cases where it is not possible to distinguish between BL and high-grade lymphoma, therapy per this guideline may be appropriate
- Adolescent and young adult patients: special considerations for AYA patients with B-cell lymphomas (NHODG-B 4 of 5)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Performance status ___ (performance_status)
- B symptoms ___ (b_symptoms)
- Node-bearing areas, including Waldeyer's ring: ___ (nodal_exam)
- Liver and spleen size: ___ (liver_spleen)
- LDH ___ (ldh)
- Ki-67 ___ (ki67)
- HIV ___ (hiv)
- Hepatitis B ___ (hbv)

# Additional diagnostic testing, essential

- Adequate immunophenotyping to establish diagnosis
    - Typical immunophenotype: sIg+, CD10+, CD20+, TdT-, Ki-67+ (>=95%), BCL2-, BCL6+
    - IHC panel: CD45, CD20, CD3, CD5, CD10, Ki-67, BCL2, BCL6, TdT
    - With or without flow cytometry, on peripheral blood and/or biopsy specimen: kappa/lambda, CD45, CD20, CD3, CD5, CD19, CD10, TdT
        - If flow cytometry initially performed, IHC for selected markers (BCL2 and Ki67) can supplement the flow results
- FISH
    - t(8;14) or variants
    - MYC, BCL2
    - BCL6 rearrangement

# Additional diagnostic testing, useful under certain circumstances

- EBER-ISH
- Consider chromosomal microarray to evaluate for 11q aberrations
    - Only if it otherwise resembles BL but FISH for MYC, MYC::IGH, MYC::IGL, and MYC::IGK are negative
    - For LBCL with 11q aberration (ICC) / HGBL with 11q aberrations (WHO5)

# Workup, essential

- Physical exam
    - Attention to node-bearing areas, including Waldeyer's ring
    - Size of liver and spleen
- Performance status
- B symptoms
- CBC with differential
- LDH
- Comprehensive metabolic panel
- Uric acid
- Pretreatment imaging is essential
    - PET/CT scan preferred; initiation of therapy should not be delayed for PET/CT scan
    - Or C/A/P CT with contrast of diagnostic quality
    - If obtaining PET scan is delayed due to logistics, a C/A/P CT scan should be obtained
- Lumbar puncture
- Flow cytometry of cerebrospinal fluid
- HIV testing
    - If positive, see HIVLYM-1
- Hepatitis B testing
    - Indicated because of the risk of reactivation with immunotherapy plus chemotherapy
    - No risk factors: HBsAg and core antibody
    - Risk factors or previous history of hepatitis B: add e-antigen (NHODG-B)
    - If positive, check viral load and consider consult with gastroenterologist
- Echocardiogram or MUGA scan, if an anthracycline-based regimen is indicated
- Pregnancy testing in patients of childbearing age, if therapy planned

# Workup, useful in selected cases

- Unilateral or bilateral bone marrow biopsy with or without aspirate
- Hepatitis C testing
- Neck CT with contrast
- Brain MRI with and without contrast
- Discuss fertility preservation
    - Options include sperm banking, IVF, or ovarian tissue or oocyte cryopreservation

# Next

- Risk assessment and induction therapy, go to BURK-2
