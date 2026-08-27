+++
id           = "mlne/MLNE-3"
gid          = "mlne"
ref          = "MLNE-3"
page         = 9
title        = "Which tyrosine kinase gene fusion test to run, split by whether the karyotype is normal or abnormal"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-2", "MLNE-4", "MLNE-B", "MLNE-5", "MLNE-6", "MLNE-7", "MLNE-8", "MLNE-9"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
biomarker = ["pdgfra", "jak2", "flt3"]
timepoint = ["workup", "diagnosis"]

[[variables]]
name = "karyotype"
type = "enum"
options = ["normal", "abnormal"]
[[variables]]
name = "karyotype_result"
type = "text"
[[variables]]
name = "fip1l1_pdgfra"
type = "text"
[[variables]]
name = "pdgfra"
type = "text"
[[variables]]
name = "pdgfrb"
type = "text"
[[variables]]
name = "fgfr1"
type = "text"
[[variables]]
name = "jak2"
type = "text"
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "abl1"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-3, p9
- Applies to diagnostic testing for a tyrosine kinase gene fusion in a myeloid/lymphoid neoplasm with eosinophilia
- Diagnosis and staging considerations: MLNE-4
- Alternative diagnostic testing methods include chromosomal microarray analysis (CMA), chromosome genomic array testing (CGAT), and NGS
    - Principles of Cytogenetic and Molecular Testing: MLNE-B
- All recommendations category 2A unless stated otherwise

# Assessment

- Karyotype ___ (karyotype)
- Chromosome analysis findings ___ (karyotype_result)

# Karyotype normal

- RT-qPCR for FIP1L1::PDGFRA ___ (fip1l1_pdgfra)
    - Or FISH or reverse transcriptase polymerase chain reaction (RT-PCR) for other fusions as noted below
- If negative, consider NGS or other diagnostic techniques to identify cryptic rearrangements
    - Diagnosis and staging considerations: MLNE-4

# Karyotype abnormal

- FISH for PDGFRA ___ (pdgfra)
    - A positive result may be a rare alternative PDGFRA rearrangement
- Assess for PDGFRB rearrangement
    - FISH for PDGFRB ___ (pdgfrb)
- Assess for FGFR1 rearrangement
    - Confirmatory FISH for FGFR1 ___ (fgfr1)
- Assess for JAK2 rearrangement
    - Confirmatory FISH for JAK2 ___ (jak2)
    - The differential diagnosis of a JAK2 fusion with a phenotype of ALL includes Ph-like ALL
- Assess for FLT3 rearrangement
    - Confirmatory FISH for FLT3 ___ (flt3)
    - And partner gene if available; eg, ETV6
- Assess for ABL1 rearrangement
    - Confirmatory FISH for ABL1 ___ (abl1)
    - And partner gene if available; eg, ETV6
    - The differential diagnosis of an ABL1 fusion with a phenotype of ALL includes Ph-like ALL
- If negative, consider NGS or other diagnostic techniques to identify cryptic rearrangements
    - Diagnosis and staging considerations: MLNE-4

# Next

- FIP1L1::PDGFRA or other PDGFRA rearrangement, go to MLNE-5
- PDGFRB rearrangement, go to MLNE-6
- FGFR1 rearrangement, go to MLNE-7
- JAK2 rearrangement, go to MLNE-8
- FLT3 rearrangement, go to MLNE-9
- ABL1 rearrangement, go to MLNE-9
