+++
id           = "mlne/MLNE-8"
gid          = "mlne"
ref          = "MLNE-8"
page         = 14
title        = "Treatment options for myeloid/lymphoid neoplasm with eosinophilia and JAK2 rearrangement"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-4", "MLNE-D", "MLNE-7", "MLNE-9"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
biomarker = "jak2"
timepoint = ["primary-treatment", "induction", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "jak2_rearrangement"
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
options = ["myeloid", "lymphoid", "mixed-phenotype"]
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
name = "hct_eligible"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-8, p14
- Applies to myeloid/lymphoid neoplasms with eosinophilia and JAK2 rearrangement
- Diagnosis and staging considerations for these neoplasms: MLNE-4
- The differential diagnosis of JAK2 and ABL1 fusions with a phenotype of ALL includes Ph-like ALL
- Eosinophilia is not always present
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- JAK2 rearrangement ___ (jak2_rearrangement)
- Eosinophilia present ___ (eosinophilia)
- Phase ___ (phase)
- Blasts in BM and/or PB ___ (blast_percent)
- Lineage ___ (lineage)
- BM/PB component ___ (bm_pb_component)
- Extramedullary disease (EMD) component ___ (emd_component)
- Eligible for allogeneic HCT ___ (hct_eligible)

# Treatment considerations

- Take into consideration whether both the BM/PB and EMD components are present, and the lineage of each
- Evaluate PB and BM for response
    - Including cytogenetics/FISH
    - And, if available, RT-PCR for a JAK2 rearrangement
    - Response criteria: MLNE-D
- Clinically relevant imaging to document response in the EMD component, if present
- Allogeneic HCT is the only potentially curative option, and early referral is generally recommended

# Chronic phase

- Preferred: clinical trial
- Other recommended
    - TKI with activity against JAK2
        - Ruxolitinib
            - Ruxolitinib is most commonly used
        - Or consider other JAK inhibitors, in the case of unavailability or intolerance to ruxolitinib, according to prescribing instructions
            - Fedratinib
            - Momelotinib
            - Pacritinib
- Consider early referral to allogeneic HCT (if eligible)

# Blast phase, clinical presentation

- 20% or more blasts in BM and/or PB
    - May present as AML, ALL, or mixed phenotype acute leukemias
- And/or extramedullary myeloid sarcoma, T-cell or B-cell lymphoblastic lymphoma, or myeloid/T-cell or B-cell lymphoid mixed phenotype acute leukemias
- Blast phase may also present as an EMD with an MPN-like picture in blood and marrow

# Blast phase, treatment

- Preferred: clinical trial, and consider early referral to allogeneic HCT (if eligible)
- Other recommended, by lineage
    - Myeloid
        - TKI with activity against JAK2
            - Ruxolitinib
                - Ruxolitinib is most commonly used
            - Or consider other JAK inhibitors (fedratinib, momelotinib, or pacritinib), in the case of unavailability or intolerance to ruxolitinib, according to prescribing instructions
        - With or without AML-type induction chemotherapy, see NCCN Guidelines for Acute Myeloid Leukemia
        - Followed by consideration of allogeneic HCT (if eligible)
    - Mixed phenotype, or lymphoid
        - TKI with activity against JAK2
            - Ruxolitinib
                - Ruxolitinib is most commonly used
            - Or consider other JAK inhibitors (fedratinib, momelotinib, or pacritinib), in the case of unavailability or intolerance to ruxolitinib, according to prescribing instructions
        - With or without ALL-type induction chemotherapy, see NCCN Guidelines for Acute Lymphoblastic Leukemia
        - Followed by consideration of allogeneic HCT (if eligible)

# Next

- Evaluate PB and BM for response, including cytogenetics/FISH and, if available, RT-PCR for a JAK2 rearrangement (MLNE-D)
- Consider early referral to allogeneic HCT (if eligible)
