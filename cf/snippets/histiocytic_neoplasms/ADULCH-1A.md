+++
id           = "histiocytic_neoplasms/ADULCH-1A"
gid          = "histiocytic_neoplasms"
ref          = "ADULCH-1A"
page         = 11
title        = "Tissue biopsy analysis for adult Langerhans cell histiocytosis"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["ADULCH-1", "ADULCH-2", "ADULCH-3"]

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
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Adult Langerhans Cell Histiocytosis, ADULCH-1A, p11
- Tissue biopsy analysis for LCH, the biopsy step of the workup (ADULCH-1)
- Immunophenotype key: +/- is positive or negative, + is positive, - is negative
- All recommendations category 2A unless otherwise indicated

# Assessment

- Suspected LCH or histiocytosis, tissue biopsy from ___ (biopsy_site)
    - If biopsy is not possible because of location or risk factors, mutational analysis of the peripheral blood is an option
- Morphology ___ (morphology)
- IHC ___ (ihc_result)
- BRAF V600E (VE1) IHC ___ (braf_ihc)
- Targeted NGS ___ (ngs_result)
- RNA-based fusion testing ___ (fusion_result)

# Morphology

- Histiocytes with grooved nuclei
- Eosinophilia

# Immunohistochemistry (IHC)

- CD1a positive
- Langerin (CD207) positive
- S100 positive
- cyclin D1 positive
- BRAF V600E (VE1) positive or negative

# Molecular testing

- Target capture, next-generation sequencing (NGS) study on tissue
    - Including BRAF V600E, MAPK, and related pathway mutations
    - Fresh or paraffin-embedded tissue is used for the NGS study
    - Peripheral blood may be informative in multisystem disease
- RNA-based NGS to detect gene fusions
- Testing for somatic mutations and fusions can be performed in a stepwise manner or in parallel, depending on clinical need and institutional protocols
    - If a stepwise algorithm is chosen, the frequency of suspected molecular lesions should drive the order of testing
    - Allele-specific polymerase chain reaction (PCR) for BRAF V600E mutations can be the first step if BRAF V600E (VE1) IHC is not available or is equivocal
- Targeted NGS panel testing should cover the common somatic mutations involving the MAPK pathway
    - BRAF, ARAF, NRAS, KRAS, MAP2K1/2
    - Other related pathway mutations, eg, PIK3CA, CSF1R
- RNA-based molecular panel including fusion testing should cover BRAF, ALK, RET, and NTRK1 rearrangements
    - If ALK IHC is positive, confirm the presence of a rearrangement molecularly, eg, by fluorescence in situ hybridization (FISH) or RNA sequencing
- Principles of Molecular Testing (HIST-H)
