+++
id           = "ped_all/PEDALL-1A"
gid          = "ped_all"
ref          = "PEDALL-1A"
page         = 12
title        = "Footnotes governing who this guideline covers, the blast threshold for diagnosis, and the lineage, immunophenotypic, and genetic testing required at diagnosis"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-1", "PEDALL-2"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["bcr-abl", "any"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "setting"
type = "enum"
options = ["pediatric", "adult"]
[[variables]]
name = "lineage"
type = "enum"
options = ["b-all-ll", "t-all-ll", "mpal"]
[[variables]]
name = "marrow_blast_pct"
type = "number"
[[variables]]
name = "immunophenotype"
type = "text"
[[variables]]
name = "karyotype_fish"
type = "text"
[[variables]]
name = "bcr_abl1"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-1A, p12
- Footnotes a through k for the diagnosis, genetic characterization, and classification page
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, treated in a ___ (setting) oncology setting
- Lineage ___ (lineage)
- Marrow lymphoblasts ___ (marrow_blast_pct) percent
- Flow cytometric immunophenotype ___ (immunophenotype)
- Karyotype and FISH ___ (karyotype_fish)
- BCR::ABL1 ___ (bcr_abl1)

# Who this guideline applies to

- Pediatric means any patient aged 18 years or younger
- Certain adolescent and young adult (AYA) patients older than 18 years of age are also included
    - This guideline is intended for AYA patients treated in a pediatric oncology setting
    - That may include patients up to age 30 years
    - For AYA patients treated in an adult oncology setting, use the NCCN Guidelines for Acute Lymphoblastic Leukemia
    - Practice patterns vary from center to center as to whether ALL is treated primarily by pediatric or adult oncologists
- Burkitt leukemia/lymphoma is handled elsewhere, see the NCCN Guidelines for Pediatric Aggressive Mature B-Cell Lymphomas
- Lymphoblastic lymphoma (LL), B- or T-cell
    - These guidelines pertain primarily to patients with leukemia
    - Patients with LL would likely also benefit from ALL-like regimens
    - Treat such patients at a center that has experience with LL

# Blast threshold for the diagnosis

- Many treatment protocols use a value of >25% marrow blasts to define leukemia
- Unlike with myeloid leukemias, there is no agreed-upon lower limit for the proportion of blasts required to establish a diagnosis of ALL
- In general, avoid the diagnosis when there are <20% blasts
- Presentations of ALL with low blast counts are uncommon
    - There is no compelling evidence that not treating a patient when there are <20% marrow lymphoblasts has an adverse effect on outcome

# Lineage and subtype classification

- B-ALL/LL subtypes
    - Not otherwise specified (NOS)
    - With high hyperdiploidy
    - With hypodiploidy
    - With intrachromosomal amplification of chromosome 21 (iAMP21)
    - With commonly recurring genetic abnormalities
        - t(9;22)(q34.1;q11.2) BCR::ABL1
        - BCR::ABL1-like B-ALL
        - t(v;11q23.3) KMT2A rearrangement
        - t(12;21)(p13.2;q22.1) ETV6::RUNX1
        - ETV6::RUNX1-like features
        - t(1;19)(q23;p13.3) TCF3::PBX1
        - t(5;14)(q31.1;q32.3) IGH::IL3
        - t(17;19)(q22;p13.3) TCF3::HLF
        - t(17;18)(q22;q21.2) TCF4::HLF
    - With other defined genetic abnormalities
        - Rearrangements of DUX4, MEF2D, ZNF384, and NUTM1
        - IG::MYC fusion
        - PAX5alt, PAX5 p.P80R, IKZF1 p.N159Y, and CDX2/UBTF
        - In cases of poor response to ALL therapy for ALL with IG::MYC rearrangement, therapy for mature B-cell lymphoma may be considered
- T-cell ALL/lymphoma (T-ALL/LL) subtypes
    - T-ALL/LL, NOS
    - Early T-cell precursor (ETP) lymphoblastic leukemia/lymphoma
- Mixed phenotype acute leukemia (MPAL)
    - Classify by the WHO 2022 and ICC 2022 criteria
    - Myeloid-associated antigens such as CD13 and CD33 may be expressed in ALL
    - The presence of these myeloid markers does not exclude the diagnosis of ALL, nor is it associated with adverse prognosis
    - ALL-directed therapy can be initiated for MPAL

# Immunophenotypic findings that are particularly notable

- Dim or negative expression of CD10 correlates with KMT2A rearrangement (KMT2Ar), ZNF384 rearrangement (ZNF384r), and MEF2D rearrangement (MEF2Dr)
- NG2 positivity correlates with KMT2Ar
- ETP T-ALL typically lacks expression of CD5, CD8, and CD1a, and has expression of one or more myeloid/stem cell markers
- CD20 positivity, definition not clear
    - Most studies have used >20% of blasts expressing CD20
- CRLF2 overexpression as a surrogate for genomic alterations of the CRLF2 gene, including P2RY8::CRLF2 and IGH::CRLF2
- Flow cytometric DNA ploidy analysis could be considered for rapid identification of hyperdiploid and hypodiploid B-ALL

# FISH probes that may be useful

- Centromeric probes for chromosomes 4, 10, and 17, to detect hyperdiploidy
- Dual-color probe set to detect cryptic t(12;21)
    - Also allows detection of iAMP21, when 5 or more copies of the RUNX1 gene are detected
- Probes to detect BCR::ABL1 and KMT2A rearrangements
- Probes to detect ABL1, ABL2, and PDGFRB rearrangements
- Probes for CDKN2A at 9p21.3, to detect deletions
- Probes to detect cryptic t(X;14)(p22;q32)/t(Y;14)(p11;q32) IGH::CRLF2 rearrangements
- Probes to detect JAK2 rearrangements

# BCR::ABL1-like (Ph-like) testing

- The BCR::ABL1-like phenotype is associated with recurrent gene fusions and mutations that activate tyrosine kinase pathways
    - Gene fusions involving ABL1, ABL2, CRLF2, CSF1R, EPOR, JAK2, or PDGFRB
    - Mutations involving CRLF2, FLT3, IL7R, SH2B3, JAK1, JAK3, and JAK2
- Testing for these abnormalities at diagnosis may aid in risk stratification
- Methods used to detect a signature or cryptic rearrangements and mutations characteristic of BCR::ABL1-like ALL
    - Low-density array (LDA)
    - NGS-based assays
    - FISH
    - Multiplex RT-PCR
- The safety and efficacy of targeted agents in this population is an area of active research

# Clone characterization

- By either flow cytometric analysis, or by identification of clonal immunoglobulin or T-cell receptor (TCR) gene rearrangements
