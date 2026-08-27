+++
id           = "mlne/MLNE-7"
gid          = "mlne"
ref          = "MLNE-7"
page         = 13
title        = "Treatment options for myeloid/lymphoid neoplasm with FGFR1 rearrangement, by phase"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-4", "MLNE-D"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
timepoint = ["primary-treatment", "induction", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "fgfr1_test"
type = "text"
[[variables]]
name = "phase"
type = "enum"
options = ["chronic", "blast"]
[[variables]]
name = "blast_percent"
type = "text"
[[variables]]
name = "lineage"
type = "enum"
options = ["myeloid", "mixed phenotype", "lymphoid"]
[[variables]]
name = "bm_pb_component"
type = "text"
[[variables]]
name = "emd_component"
type = "text"
[[variables]]
name = "eosinophilia"
type = "text"
[[variables]]
name = "hct_eligibility"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-7, p13
- Applies to myeloid/lymphoid neoplasms with FGFR1 rearrangement
- Eosinophilia is not always present
- Diagnosis and staging considerations for these neoplasms: MLNE-4
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- FGFR1 rearrangement documented by ___ (fgfr1_test)
- Phase ___ (phase)
- Blasts in BM and/or PB ___ (blast_percent)
- Lineage of the blast component ___ (lineage)
- BM/PB component ___ (bm_pb_component)
- Extramedullary disease (EMD) component ___ (emd_component)
- Eosinophilia ___ (eosinophilia)
- Candidate for allogeneic HCT ___ (hct_eligibility)

# Clinical presentation

- Chronic phase
- Blast phase
    - 20% or more blasts in BM and/or PB
        - May present as AML, ALL, or mixed phenotype acute leukemias
    - And/or extramedullary myeloid sarcoma, T-cell or B-cell lymphoblastic lymphoma, or myeloid/T-cell or B-cell lymphoid mixed phenotype acute leukemias
    - May also present as an EMD with an "MPN-like" picture in blood and marrow

# Treatment considerations

- Take into consideration whether both the BM/PB and EMD components are present, and the lineage of each
- Evaluate PB and BM for response
    - Including cytogenetics/FISH, and if available, RT-PCR for FGFR1 rearrangement
    - Response criteria: MLNE-D
- Clinically relevant imaging to document response in the EMD component, if present
- Allogeneic HCT is the only potentially curative option, and early referral is generally recommended

# Chronic phase treatment options

- Preferred: clinical trial
- Preferred: pemigatinib
    - Pemigatinib (FGFR inhibitor) is FDA-approved for the treatment of adult patients with relapsed or refractory myeloid/lymphoid neoplasms with FGFR1 rearrangement
- Other recommended: TK inhibitor (TKI) with activity against FGFR1 (eg, midostaurin or ponatinib)
- Consider early referral to allogeneic HCT (if eligible)

# Blast phase treatment options

- Preferred: clinical trial or pemigatinib, and consider early referral to allogeneic HCT (if eligible)
    - Pemigatinib (FGFR inhibitor) is FDA-approved for the treatment of adult patients with relapsed or refractory myeloid/lymphoid neoplasms with FGFR1 rearrangement
- Other recommended, by the lineage of the blast component: myeloid, mixed phenotype, or lymphoid
- Other recommended, myeloid lineage
    - TKI with activity against FGFR1 (eg, midostaurin or ponatinib) with or without AML-type induction chemotherapy, followed by consideration of allogeneic HCT (if eligible)
    - Or pemigatinib plus AML-type induction chemotherapy, followed by consideration of allogeneic HCT (if eligible)
    - AML-type induction chemotherapy: see NCCN Guidelines for Acute Myeloid Leukemia
- Other recommended, mixed phenotype or lymphoid lineage
    - TKI with activity against FGFR1 (eg, midostaurin or ponatinib) with or without ALL-type induction chemotherapy, followed by consideration of allogeneic HCT (if eligible)
    - Or pemigatinib plus ALL-type induction chemotherapy, followed by consideration of allogeneic HCT (if eligible)
    - ALL-type induction chemotherapy: see NCCN Guidelines for Acute Lymphoblastic Leukemia
