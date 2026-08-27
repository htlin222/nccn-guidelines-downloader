+++
id           = "aml/BPDCN-1"
gid          = "aml"
ref          = "BPDCN-1"
page         = 77
title        = "Evaluation, workup, and diagnostic criteria for blastic plasmacytoid dendritic cell neoplasm"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["BPDCN-2", "BPDCN-A", "BPDCN-B", "BPDCN-5"]

[facets]
disease   = "aml"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "skin_lesions"
type = "text"
[[variables]]
name = "peripheral_blasts"
type = "text"
[[variables]]
name = "lymphadenopathy"
type = "text"
[[variables]]
name = "extramedullary_suspicion"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pdc_markers"
type = "text"
[[variables]]
name = "cd4_cd56"
type = "text"
[[variables]]
name = "negative_markers"
type = "text"
[[variables]]
name = "cns_suspicion"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age >=18 years) v5.2026, BPDCN-1, p77
- Applies to patients age >=18 years being evaluated for blastic plasmacytoid dendritic cell neoplasm (BPDCN)
- Principles of BPDCN (BPDCN-A)
- References on BPDCN-5
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Skin lesions: ___ (skin_lesions)
- Peripheral blasts: ___ (peripheral_blasts)
- Lymphadenopathy: ___ (lymphadenopathy)
- Clinical suspicion for extramedullary disease: ___ (extramedullary_suspicion)
- pDC markers expressed: ___ (pdc_markers)
- CD4 and/or CD56: ___ (cd4_cd56)
- Expected negative markers: ___ (negative_markers)
- Clinical suspicion for CNS involvement: ___ (cns_suspicion)

# Evaluation/workup

- H&P
- CBC, platelets, differential, CMP
- Tissue and marrow analyses
    - Analysis of skin lesions
        - Collaboration with dermatology is recommended
        - Close collaboration with dermatology is recommended for guidance on classification and measurement of skin lesions, see page MFSS-3 in the NCCN Guidelines for Cutaneous Lymphomas
    - Peripheral blasts
    - BM aspirate/biopsy
    - Lymph node biopsy, if indicated
- Each of the above analyses to include
    - Dendritic cell morphology assessment
    - IHC
    - Flow cytometry
    - Cytogenetic analysis
    - Molecular analysis
        - Most common aberrations include TET2, ASXL1, ZRSR2, SRSF2, TP53, NRAS, IDH2, and ETV6
        - RUNX1 mutations are rare in this entity
- FDG-PET/CT scan of other sites, if clinical suspicion for extramedullary disease and/or lymphadenopathy
- Diagnostic LP with IT chemotherapy, required in all patients (BPDCN-B)
    - At the time of initial diagnosis
    - At disease relapse
    - At any other time when there is a clinical suspicion for CNS involvement

# Diagnosis

- Immature cells with blastoid morphology
- Stepwise immunophenotypic evaluation
    - pDC markers: CD123, TCF4, TCL1, CD303, CD304
    - Other markers: CD4, CD56
    - Expected negative markers: CD3, CD14, CD19, CD34, lysozyme, myeloperoxidase
- BPDCN confirmed if either pattern is met
    - Expression of CD4 and/or CD56, plus expression of CD123 and one other pDC marker
    - Expression of any three pDC markers and absent expression of expected negative markers
- Differential diagnoses may include certain similar entities, such as AML with plasmacytoid dendritic cell differentiation
    - Can generally be ruled out by careful adherence to established diagnostic criteria

# Next

- BPDCN confirmed, go to treatment induction (BPDCN-2)
