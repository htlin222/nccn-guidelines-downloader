+++
id           = "mlne/MLNE-9"
gid          = "mlne"
ref          = "MLNE-9"
page         = 15
title        = "Treatment of myeloid/lymphoid neoplasm with eosinophilia and ABL1 or FLT3 rearrangement, by phase"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-4", "MLNE-D"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
biomarker = "flt3"
timepoint = ["primary-treatment", "induction", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "fusion"
type = "enum"
options = ["ABL1", "FLT3"]
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
options = ["myeloid", "lymphoid", "mixed phenotype"]
[[variables]]
name = "emd"
type = "text"
[[variables]]
name = "hct_eligible"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-9, p15
- Applies to myeloid/lymphoid neoplasms with eosinophilia and ABL1 or FLT3 rearrangement
- Eosinophilia is not always present
- Diagnosis and staging considerations in myeloid/lymphoid neoplasms with eosinophilia and tyrosine kinase gene fusions: MLNE-4
- The differential diagnosis of JAK2 and ABL1 fusions with a phenotype of ALL includes Ph-like ALL
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Rearrangement ___ (fusion)
- Clinical presentation ___ (phase) phase
- Blasts in BM and/or PB ___ (blast_percent)
- Lineage ___ (lineage)
- EMD component present ___ (emd)
- Eligible for allogeneic HCT ___ (hct_eligible)

# Clinical presentation

- Chronic phase
- Blast phase
    - 20% or more blasts in BM and/or PB
        - May present as AML, ALL, or mixed phenotype acute leukemias
    - And/or extramedullary myeloid sarcoma
    - And/or T-cell or B-cell lymphoblastic lymphoma
    - And/or myeloid/T-cell or B-cell lymphoid mixed phenotype acute leukemias
    - May also present as an EMD with an "MPN-like" picture in blood and marrow

# Treatment considerations

- Treatment options need to take into consideration whether both the BM/PB and EMD components are present, and the lineage of each
- Evaluate PB and BM for response, response criteria see MLNE-D
    - Cytogenetics/FISH
    - RT-PCR for an ABL1 or FLT3 rearrangement, if available
- Clinically relevant imaging to document response in the EMD component, if present
- Allogeneic HCT is the only potentially curative option
    - Early referral is generally recommended

# Chronic phase treatment options

- TKI with activity against ABL1
    - Preferred
        - Clinical trial
        - Dasatinib, per Schwaab J, et al. Am J Hematol 2020;95:824-833
        - Nilotinib, per Schwaab J, et al. Am J Hematol 2020;95:824-833
    - Other recommended
        - Asciminib
        - Bosutinib
        - Imatinib
        - Ponatinib
- TKI with activity against FLT3
    - Preferred
        - Clinical trial
    - Other recommended
        - Gilteritinib
        - Midostaurin
        - Quizartinib
        - Sorafenib
        - Sunitinib
- Consider early referral to allogeneic HCT (if eligible)

# Blast phase treatment options

- Preferred
    - Clinical trial, and
    - Consider early referral to allogeneic HCT (if eligible)
- Other recommended, myeloid or mixed phenotype
    - TKI with activity against ABL1 or FLT3
    - With or without AML-type induction chemotherapy, see NCCN Guidelines for Acute Myeloid Leukemia
    - Followed by consideration of allogeneic HCT (if eligible)
- Other recommended, lymphoid or mixed phenotype
    - TKI with activity against ABL1 or FLT3
    - With or without ALL-type induction chemotherapy, see NCCN Guidelines for Acute Lymphoblastic Leukemia
    - Followed by consideration of allogeneic HCT (if eligible)

# Next

- Response assessment of PB, BM, and the EMD component, see MLNE-D
- Diagnosis and staging considerations, see MLNE-4
