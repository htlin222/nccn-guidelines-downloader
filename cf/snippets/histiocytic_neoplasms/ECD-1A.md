+++
id           = "histiocytic_neoplasms/ECD-1A"
gid          = "histiocytic_neoplasms"
ref          = "ECD-1A"
page         = 22
title        = "Tissue biopsy analysis for Erdheim-Chester disease"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["ECD-1", "ECD-2"]

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

- NCCN Histiocytic Neoplasms v2.2026, Erdheim-Chester Disease, ECD-1A, p22
- Tissue biopsy analysis for ECD, the biopsy step of the workup (ECD-1)
- Immunophenotype key: +/- is positive or negative, + is positive, - is negative
- All recommendations category 2A unless otherwise indicated

# Assessment

- Suspected ECD or histiocytosis, tissue biopsy from ___ (biopsy_site)
    - If biopsy is not possible because of location or risk factors, mutational analysis of the peripheral blood is an option
- Morphology ___ (morphology)
- IHC ___ (ihc_result)
- BRAF V600E (VE1) IHC ___ (braf_ihc)
- Target capture NGS ___ (ngs_result)
- RNA-based fusion testing ___ (fusion_result)

# Morphology

- Foamy histiocytes
- Giant cells
- May be obscured by fibrosis
- May be obscured by lymphoplasmacytic infiltrate

# Immunohistochemistry (IHC)

- CD68 positive
- CD163 positive
- S100 positive or negative
- Factor XIIIa positive
- CD1a negative
- Langerin negative
- BRAF V600E (VE1) positive or negative

# Molecular testing

- Target capture, next-generation sequencing (NGS) study on tissue
    - Including BRAF V600E, MAPK, and related pathway mutations
    - Fresh or paraffin-embedded tissue is used for the NGS study
    - Peripheral blood testing may be informative in multisystem disease
- RNA-based NGS to detect gene fusions
- Testing for somatic mutations and fusions can be performed in a stepwise manner or in parallel, depending on clinical need and institutional protocols
    - If a stepwise algorithm is chosen, the frequency of suspected molecular lesions should drive the order of testing
    - Allele-specific polymerase chain reaction (PCR) for BRAF V600E mutations can be the first step if BRAF V600E (VE1) IHC is not available or is equivocal
- Targeted NGS panel testing should cover the common somatic mutations involving the MAPK pathway
    - BRAF, ARAF, NRAS, KRAS, MAP2K1/2
    - Other related pathway mutations, eg, PIK3CA, CSF1R
- RNA-based molecular panel including fusion testing should cover BRAF, ALK, RET, and NTRK1 rearrangements
    - If ALK IHC is positive, confirm the presence of a rearrangement molecularly, eg, by fluorescence in situ hybridization (FISH) or RNA sequencing
- If clinically indicated in cases without the usual MAPK pathway mutations, FISH for BRAF, ALK, RET, or NTRK1 fusions may be performed
- Principles of Molecular Testing (HIST-H)
