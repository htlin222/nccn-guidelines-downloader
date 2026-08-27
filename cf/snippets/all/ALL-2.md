+++
id           = "all/ALL-2"
gid          = "all"
ref          = "ALL-2"
page         = 12
title        = "Cytogenetic and molecular prognostic risk stratification for B-ALL"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-1", "ALL-3"]

[facets]
disease   = "all"
histology = "lymphoblastic"
biomarker = ["bcr-abl", "tp53"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "karyotype"
type = "text"
[[variables]]
name = "chromosome_count"
type = "text"
[[variables]]
name = "trisomy_4_10_17"
type = "text"
[[variables]]
name = "rearrangement"
type = "text"
[[variables]]
name = "bcr_abl"
type = "text"
[[variables]]
name = "ikzf1"
type = "text"
[[variables]]
name = "antecedent_cml"
type = "text"
[[variables]]
name = "tp53_status"
type = "text"
[[variables]]
name = "abnormality_count"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["standard risk", "poor risk"]
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-2, p12
- Assigns a B-ALL case to standard risk or poor risk from its cytogenetic and molecular alterations
- Footnote markers h through r on this page point to the guideline Footnotes page, whose text is not on this page
- All recommendations category 2A unless otherwise indicated

# Assessment

- B-ALL
- Karyotype ___ (karyotype)
- Chromosome number ___ (chromosome_count)
- Trisomy of chromosomes 4, 10, and 17 ___ (trisomy_4_10_17)
- Rearrangement or fusion detected ___ (rearrangement)
- BCR::ABL1 ___ (bcr_abl)
- IKZF1 ___ (ikzf1)
- Antecedent chronic myeloid leukemia (CML) ___ (antecedent_cml)
- TP53 ___ (tp53_status)
- Number of chromosomal abnormalities ___ (abnormality_count)
- Risk group assigned ___ (risk_group)

# Standard risk alterations

- Hyperdiploidy (51–65 chromosomes)
    - Cases with trisomy of chromosomes 4, 10, and 17 appear to have the most favorable outcome
- t(12;21)(p13;q22): ETV6::RUNX1
- t(1;19)(q23;p13.3): TCF3::PBX1
- DUX4 rearranged
- PAX5 P80R
- t(9;22)(q34;q11.2): BCR::ABL1
    - without IKZF1 plus
    - and without antecedent chronic myeloid leukemia (CML)

# Poor risk alterations

- Hypodiploidy (<44 chromosomes)
    - Low hypodiploidy (30–39 chromosomes)
    - Near triploidy (60–78 chromosomes)
- TP53 mutation
- KMT2A rearranged (t[4;11] or others)
- IgH rearranged
- HLF rearranged
- ZNF384 rearranged
- MEF2D rearranged
- MYC rearranged
- BCR::ABL1-like (Philadelphia [Ph] chromosome-like) ALL
    - JAK-STAT
        - CRLF2, EPOR, JAK1/2/3, TYK2
        - mutations of SH2B3, IL7R, JAK1/2/3
    - ABL class
        - rearrangements of ABL1, ABL2, PDGFRA, PDGFRB, FGFR
    - Other
        - NTRK1/2/3, FLT3, LYN, PTK2B
- PAX5alt
- t(9;22)(q34;q11.2): BCR::ABL1
    - with IKZF1 plus and/or antecedent CML
- Intrachromosomal amplification of chromosome 21 (iAMP21)
- Alterations of IKZF1
- Complex karyotype (≥5 chromosomal abnormalities)

# Next

- Workup, go to ALL-3
