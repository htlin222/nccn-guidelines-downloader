+++
id           = "cml/CML-1"
gid          = "cml"
ref          = "CML-1"
page         = 7
title        = "Workup of suspected CML and the split by Ph/BCR::ABL1 status"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-A", "CML-B", "CML-2", "CML-4"]

[facets]
disease   = "cml"
histology = "myeloid"
biomarker = ["bcr-abl", "ph-positive", "ph-negative"]
timepoint = "workup"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "spleen"
type = "text"
[[variables]]
name = "wbc"
type = "text"
[[variables]]
name = "uric_acid"
type = "text"
[[variables]]
name = "cytogenetics"
type = "text"
[[variables]]
name = "qpcr_is"
type = "text"
[[variables]]
name = "blast_lineage"
type = "text"
[[variables]]
name = "hbv"
type = "text"
[[variables]]
name = "ph_status"
type = "enum"
options = ["ph-positive", "bcr-abl1-positive-by-qpcr", "ph-negative-and-bcr-abl1-negative"]
[[variables]]
name = "phase"
type = "enum"
options = ["chronic", "advanced"]
[[variables]]
name = "risk_score"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-1, p7
- Applies to the initial workup of a patient with suspected CML
- Risk Calculation Table: CML-A
- Definitions of Advanced Phase CML: CML-B
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Spleen size by palpation only, ___ (spleen) below costal margin
- WBC ___ (wbc)
- Uric acid ___ (uric_acid)
- Cytogenetics ___ (cytogenetics)
- BCR::ABL1 by qPCR on International Scale ___ (qpcr_is)
- Cell lineage of any blasts ___ (blast_lineage)
- Hepatitis B panel ___ (hbv)
- Ph / BCR::ABL1 status ___ (ph_status)
- Phase ___ (phase)
- Risk score per CML-A ___ (risk_score)

# Workup

- H&P, including spleen size by palpation only (cm below costal margin)
- CBC with differential
    - Hydroxyurea is the preferred option, until the initiation of TKI therapy, to lower very high white blood cell (WBC) counts
    - Leukapheresis is rarely indicated, except for high-risk indications (eg, persistent priapism, shortness of breath, transient ischemic attack)
- Chemistry profile, including uric acid
- Bone marrow aspirate and biopsy for morphologic review, and cytogenetic evaluation
    - Bone marrow cytogenetics with a minimum of 20 metaphases is useful to detect chromosomal abnormalities in addition to the Ph chromosome
    - Major route additional chromosomal abnormalities (ACAs) in Ph-positive cells (trisomy 8, isochromosome 17q, second Ph, trisomy 19, and chromosome 3 abnormalities) may have a negative prognostic impact on survival in patients with accelerated phase
    - FISH on the bone marrow or peripheral blood, with a minimum of 100 interphase nuclei evaluated, can be used if bone marrow cytogenetic evaluation is not possible
- Comprehensive flow cytometry of marrow aspirate to determine cell lineage of any blasts
    - Include myeloperoxidase, CD117, CD13, CD33, TdT, cytoplasmic CD3, CD19, CD10, and CD20, to distinguish myeloid versus lymphoid blasts and to distinguish B-lymphoblasts from hematogones
- Quantitative RT-PCR (qPCR) using International Scale (IS) for BCR::ABL1 (blood)
- Hepatitis B panel
    - Hepatitis B virus reactivation has been reported in patients receiving tyrosine kinase inhibitor (TKI) therapy
    - It is not always possible to reliably estimate the frequency or establish a relationship to drug exposure, because these incidences are reported voluntarily from a population of uncertain size
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health (DIS-A)

# Clinical presentation

- Ph-positive, or BCR::ABL1 positive by qPCR
    - Evaluation for atypical BCR::ABL1 transcripts is recommended if Ph-positive by FISH and BCR::ABL1 negative by qPCR
    - Consider dual fusion FISH (D-FISH) or qualitative reverse transcription polymerase chain reaction (RT-PCR) for the detection of atypical BCR::ABL1 transcripts
    - Referral to centers with expertise in the management of rare hematologic malignancies is recommended for patients with atypical BCR::ABL1 transcripts
    - Asciminib is contraindicated in patients with CML lacking ABL1 exon 2 (eg, b2(e13)a3, b3(e14)a3 isoforms), as it has no clinical activity in these cases
- Ph-negative and BCR::ABL1 negative by qPCR
    - Evaluate for diseases other than CML (See NCCN Guidelines for Myeloproliferative Neoplasms)

# Additional evaluation if Ph-positive or BCR::ABL1 positive

- Chronic phase CML (CP-CML)
    - Determine risk score (Risk Calculation Table CML-A)
    - Myeloid mutational analysis
- Advanced phase CML, definitions on CML-B
    - Myeloid mutational analysis
    - Human leukocyte antigen (HLA) testing, if considering allogeneic hematopoietic cell transplant (HCT)

# Next

- Chronic phase CML, go to CML-2
- Advanced phase CML, go to CML-4
- Ph-negative and BCR::ABL1 negative by qPCR, evaluate for diseases other than CML (See NCCN Guidelines for Myeloproliferative Neoplasms)
