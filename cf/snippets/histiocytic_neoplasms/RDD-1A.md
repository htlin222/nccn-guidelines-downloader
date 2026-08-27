+++
id           = "histiocytic_neoplasms/RDD-1A"
gid          = "histiocytic_neoplasms"
ref          = "RDD-1A"
page         = 25
title        = "Tissue biopsy analysis for Rosai-Dorfman disease"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["RDD-1", "RDD-2", "HIST-H"]

[facets]
disease   = "histiocytic_neoplasms"
biomarker = ["braf", "kras", "nras", "alk", "ret", "ntrk"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "morphology"
type = "text"
[[variables]]
name = "ihc_result"
type = "text"
[[variables]]
name = "braf_ihc"
type = "enum"
options = ["positive", "negative", "equivocal", "not-available"]
[[variables]]
name = "ngs_result"
type = "text"
[[variables]]
name = "fusion_result"
type = "text"
[[variables]]
name = "germline_result"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Rosai-Dorfman Disease, RDD-1A, p25
- Tissue biopsy analysis for RDD, the biopsy step of the workup (RDD-1)
- Immunophenotype key: +/- is positive or negative, + is positive, - is negative
- All recommendations category 2A unless otherwise indicated

# Assessment

- Suspected RDD or histiocytosis, tissue biopsy from ___ (biopsy_site)
    - If biopsy is not possible because of location or risk factors, liquid biopsy for mutational analysis in the peripheral blood is an option
- Morphology ___ (morphology)
- IHC ___ (ihc_result)
- BRAF V600E (VE1) IHC ___ (braf_ihc)
- Target capture NGS ___ (ngs_result)
- RNA-based fusion testing ___ (fusion_result)
- Germline testing, familial cases ___ (germline_result)

# Morphology

- Histiocytes with round nuclei
- Central nucleoli
- Emperipolesis
- Plasmacytosis

# Immunohistochemistry (IHC)

- S100 positive
- CD68 positive
- CD163 positive
- cyclin D1 positive or negative
    - Of caution, cyclin D1 could also be positive or detected in concurrent lymphocytic or histiocytic neoplasm
- CD1a negative
- Langerin negative
- OCT2 positive
    - OCT2 IHC might be helpful, if clinically indicated, in select cases to confirm a suspected diagnosis of RDD, together with other common diagnostic markers
- BRAF V600E (VE1)
    - VE1 is the preferred antibody for BRAF V600E testing if possible

# Molecular testing

- Target capture, NGS study on tissue, including MAPK and related pathway mutations
    - Fresh or paraffin-embedded tissue is used for the NGS study
    - Peripheral blood testing may be informative in multisystem disease
    - Targeted NGS panel testing should cover the common somatic mutations involving the MAPK pathway, ie, BRAF, ARAF, NRAS, KRAS, MAP2K1/2
    - Should also cover other related pathway mutations, eg, PIK3CA, CSF1R
- RNA-based NGS to detect gene fusions
    - RNA-based molecular panel including fusion testing should cover BRAF, ALK, RET, and NTRK1 rearrangements
    - If ALK IHC is positive, the presence of a rearrangement should be confirmed molecularly, eg, by FISH or RNA sequencing
    - If clinically indicated in cases without the usual MAPK pathway mutations, FISH for BRAF, ALK, RET, or NTRK1 fusions may be performed
- Testing for somatic mutations and fusions can be performed in a stepwise manner or in parallel, depending on clinical need and institutional protocols
    - If a stepwise algorithm is chosen, the frequency of suspected molecular lesions should drive the order of testing
    - Allele-specific PCR for BRAF V600E mutations can be the first step if BRAF V600E (VE1) IHC is not available or is equivocal
- Germline mutations, familial cases
    - If a familial RDD is suspected, germline mutations in SLC29A3 should be considered
    - Another germline gene mutation involving the Fas gene TNFRSF6 is found in 40% of patients with RDD who had an autoimmune lymphoproliferative syndrome (ALPS) type Ia
- Principles of Molecular Testing (HIST-H)
