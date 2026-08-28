+++
id           = "ped_all/PEDALL-1"
gid          = "ped_all"
ref          = "PEDALL-1"
page         = 11
title        = "Diagnosis, genetic characterization, and classification of pediatric ALL"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-1A", "PEDALL-2", "PEDALL-A", "PEDALL-B", "PEDALL-J"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["bcr-abl", "any"]
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "specimen"
type = "enum"
options = ["bone marrow", "peripheral blood"]
[[variables]]
name = "marrow_blast_pct"
type = "number"
[[variables]]
name = "blood_blast_count"
type = "number"
[[variables]]
name = "immunophenotype"
type = "text"
[[variables]]
name = "karyotype"
type = "text"
[[variables]]
name = "bcr_abl"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-1, p11
- Applies to pediatric acute lymphoblastic leukemia (ALL)
- The Panel considers pediatric to include any patient aged 18 years or younger, and certain adolescent and young adult (AYA) patients older than 18 years
    - Practice patterns vary from center to center as to whether patients with ALL are treated primarily by pediatric or adult oncologists
    - This guideline is intended for AYA patients treated in a pediatric oncology setting, which may include patients up to age 30 years
    - For AYA patients treated in an adult oncology setting, see the NCCN Guidelines for Acute Lymphoblastic Leukemia
- For Burkitt leukemia/lymphoma, see the NCCN Guidelines for Pediatric Aggressive Mature B-Cell Lymphomas
- These guidelines pertain primarily to patients with leukemia
    - Patients with lymphoblastic lymphoma (LL), B-cell or T-cell, would likely also benefit from ALL-like regimens
    - Such patients should be treated at a center that has experience with LL
- Patients should undergo evaluation and treatment at specialized centers
- Footnotes on PEDALL-1A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Specimen reviewed: ___ (specimen)
- Bone marrow lymphoblasts ___ (marrow_blast_pct) percent
- Circulating lymphoblasts ___ (blood_blast_count) per microliter
- Immunophenotype: ___ (immunophenotype)
- Karyotype: ___ (karyotype)
- BCR::ABL1: ___ (bcr_abl)

# Diagnosis

- Diagnosis of ALL generally requires demonstration of ≥20% bone marrow lymphoblasts on hematopathology review of bone marrow aspirate and biopsy materials
    - Peripheral blood can be substituted for bone marrow if there are sufficient numbers of circulating lymphoblasts, at least 1000 per microliter as a general guideline, and the clinical situation precludes bone marrow aspirate and biopsy
    - In many treatment protocols, a value of >25% marrow blasts is used to define leukemia
    - Unlike with myeloid leukemias, there is no agreed-upon lower limit for the proportion of blasts required to establish a diagnosis of ALL
    - In general, avoid the diagnosis when there are <20% blasts
    - Presentations of ALL with low blast counts are uncommon; there is no compelling evidence that not treating a patient with <20% marrow lymphoblasts has an adverse effect on outcome
- Morphologic assessment
    - Wright-Giemsa-stained bone marrow aspirate smears
    - Hematoxylin and eosin (H&E)-stained core biopsy and clot sections
- Comprehensive flow cytometric immunophenotyping
    - Dim/negative expression of CD10 correlates with KMT2A rearrangement (KMT2Ar), ZNF384 rearrangement (ZNF384r), and MEF2D rearrangement (MEF2Dr)
    - NG2 positivity correlates with KMT2Ar
    - ETP T-ALL typically lacks expression of CD5, CD8, and CD1a and has expression of one or more myeloid/stem cell markers
    - CD20 positivity: definition not clear, most studies have used >20% of blasts expressing CD20
    - CRLF2 overexpression as a surrogate for genomic alterations of the CRLF2 gene, including P2RY8::CRLF2 and IGH::CRLF2
    - Flow cytometric DNA ploidy analysis could be considered for rapid identification of hyperdiploid and hypodiploid B-ALL
- Baseline flow cytometric and/or molecular characterization of leukemic clone to facilitate subsequent minimal residual disease (MRD) analysis (PEDALL-J)
    - By either flow cytometric analysis, or by identification of clonal immunoglobulin or T-cell receptor (TCR) gene rearrangements

# Genetic characterization

- Optimal risk stratification and treatment planning require testing marrow or peripheral blood lymphoblasts for specific recurrent genetic abnormalities
- Karyotyping of G-banded metaphase chromosomes
- Interphase fluorescence in situ hybridization (FISH) testing, including probes capable of detecting the major recurrent genetic abnormalities
    - Centromeric probes for chromosomes 4, 10, and 17 to detect hyperdiploidy
    - Dual-color probe set to detect cryptic t(12;21), which will also allow detection of iAMP21 when ≥5 copies of the RUNX1 gene are detected
    - Probes to detect BCR::ABL1 and KMT2A rearrangements
    - Probes to detect ABL1, ABL2, and PDGFRB rearrangements
    - Probes for CDKN2A at 9p21.3 to detect deletions
    - Probes to detect cryptic t(X;14)(p22;q32)/t(Y;14)(p11;q32) IGH::CRLF2 rearrangements
    - Probes to detect JAK2 rearrangements
- Reverse transcriptase-polymerase chain reaction (RT-PCR) testing for BCR::ABL1 in B-cell acute lymphoblastic leukemia (B-ALL), quantitative or qualitative
    - Include determination of transcript size (ie, p190 vs. p210)
    - If BCR::ABL1 negative, encourage testing for gene fusions and mutations associated with BCR::ABL1-like (Ph-like) ALL
        - The phenotype is associated with recurrent gene fusions and mutations that activate tyrosine kinase pathways
        - Gene fusions involving ABL1, ABL2, CRLF2, CSF1R, EPOR, JAK2, or PDGFRB
        - Mutations involving CRLF2, FLT3, IL7R, SH2B3, JAK1, JAK3, and JAK2
        - Testing for these abnormalities at diagnosis may aid in risk stratification
        - Low-density array (LDA), NGS-based assays, FISH, and multiplex RT-PCR are used to detect a signature or cryptic rearrangements and mutations characteristic of BCR::ABL1-like ALL
        - The safety and efficacy of targeted agents in this population is an area of active research
- Assessment of various potentially actionable or prognostic mutations and gene fusions via next-generation sequencing (NGS) or alternative methods (Genetic Risk Groups for B-ALL, PEDALL-B)

# Additional optional tests

- Additional assessment (eg, microarray comparative genomic hybridization [CGH] and/or NGS) in cases of aneuploidy or inadequate karyotype
- Whole transcriptome sequencing to identify B-ALL/LL subtypes defined by gene expression profile (ie, ETV6::RUNX1-like, PAX5alt, MYCr)

# Classification

- Together, these studies allow determination of the World Health Organization (WHO) and International Consensus Criteria (ICC) ALL subtypes and genetic risk groups
    - ALL Subtypes (PEDALL-A)
    - Genetic Risk Groups for B-ALL (PEDALL-B)
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
- Mixed phenotype acute leukemia (MPAL) classification should be based on the WHO 2022 and ICC 2022 criteria
    - In ALL, myeloid-associated antigens such as CD13 and CD33 may be expressed
    - Presence of these myeloid markers does not exclude the diagnosis of ALL, nor is it associated with adverse prognosis
    - ALL-directed therapy can be initiated for MPAL

# Next

- Workup, go to PEDALL-2
