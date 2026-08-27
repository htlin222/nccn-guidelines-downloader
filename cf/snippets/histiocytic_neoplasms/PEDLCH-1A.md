+++
id           = "histiocytic_neoplasms/PEDLCH-1A"
gid          = "histiocytic_neoplasms"
ref          = "PEDLCH-1A"
page         = 17
title        = "Tissue biopsy analysis for LCH: morphology, IHC, and molecular testing"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["PEDLCH-1", "PEDLCH-2"]

[facets]
disease   = "histiocytic_neoplasms"
biomarker = ["braf", "kras", "nras", "alk", "ret", "ntrk", "pik3ca"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "biopsy_possible"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "morphology"
type = "text"
[[variables]]
name = "ihc_panel"
type = "text"
[[variables]]
name = "ve1_ihc"
type = "enum"
options = ["positive", "negative", "equivocal", "not available"]
[[variables]]
name = "molecular_result"
type = "text"
+++

# Source

- NCCN Pediatric Langerhans Cell Histiocytosis v2.2026, PEDLCH-1A, p17
- Tissue biopsy analysis for LCH
- Principles of Molecular Testing (HIST-H)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Biopsy site: ___ (biopsy_site)
- Biopsy possible at that site: ___ (biopsy_possible)
    - If biopsy is not possible because of location or risk factors, in a patient with suspected LCH or histiocytosis, mutational analysis of the peripheral blood is an option
- Morphology reported: ___ (morphology)
- IHC panel reported: ___ (ihc_panel)
- BRAF V600E (VE1) IHC: ___ (ve1_ihc)
- Molecular testing result: ___ (molecular_result)

# Morphology

- Histiocytes with grooved nuclei
- Eosinophilia

# IHC

- CD1a positive
- Langerin (CD207) positive
- S100 positive
- Cyclin D1 positive
- BRAF V600E (VE1) positive or negative

# Molecular testing

- Target capture, NGS study on tissue
    - Include BRAF V600E
    - Include MAPK and related pathway mutations
    - Fresh or paraffin-embedded tissue is used for NGS study
    - Peripheral blood may be informative in multisystem disease
- RNA-based NGS to detect gene fusions
- Testing for somatic mutations and fusions can be performed in a stepwise manner or in parallel, depending on clinical need and institutional protocols
    - If a stepwise algorithm is chosen, the frequency of suspected molecular lesions should drive the order of testing
    - Allele-specific PCR for BRAF V600E mutations can be the first step if BRAF V600E (VE1) IHC is not available or is equivocal
- Targeted NGS panel testing should cover
    - Common somatic mutations involving the MAPK pathway: BRAF, ARAF, NRAS, KRAS, MAP2K1/2
    - Other related pathway mutations, eg, PIK3CA, CSF1R
- RNA-based molecular panel including fusion testing should cover
    - BRAF rearrangements
    - ALK rearrangements
    - RET rearrangements
    - NTRK1 rearrangements
- If ALK IHC is positive, confirm the presence of a rearrangement molecularly, eg, by FISH or RNA sequencing
