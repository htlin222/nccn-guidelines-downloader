+++
id           = "nscl/NSCL-13"
gid          = "nscl"
ref          = "NSCL-13"
page         = 39
title        = "Clinical pretreatment evaluation and initial treatment of stage IIIB (T1-2, N3) and stage IIIC (T3, N3)"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-8", "NSCL-15", "NSCL-17", "NSCL-18", "NSCL-C", "NSCL-F"]

[facets]
disease   = "nscl"
stage     = "III"
biomarker = "egfr"
timepoint = ["workup", "staging", "primary-treatment"]

[[variables]]
name = "clinical_tnm"
type = "text"
[[variables]]
name = "egfr"
type = "text"
[[variables]]
name = "other_biomarkers"
type = "text"
[[variables]]
name = "pft"
type = "text"
[[variables]]
name = "pet_findings"
type = "text"
[[variables]]
name = "brain_imaging"
type = "text"
[[variables]]
name = "n3_pathology"
type = "enum"
options = ["not-yet-done", "negative", "positive"]
[[variables]]
name = "n3_method"
type = "text"
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-13, p39
- Applies to stage IIIB (T1-2, N3) and stage IIIC (T3, N3)
- This page is the clinical pretreatment evaluation, and the initial treatment that follows from it
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (clinical_tnm)
- EGFR ___ (egfr)
- Other biomarker results ___ (other_biomarkers)
- PFTs ___ (pft)
- FDG-PET/CT ___ (pet_findings)
- Brain imaging ___ (brain_imaging)
- Pathologic confirmation of N3 ___ (n3_pathology), by ___ (n3_method)

# Clinical pretreatment evaluation

- Biomarker testing including EGFR
- PFTs, if not previously done
- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If positive in the mediastinum, lymph node status needs pathologic confirmation
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast
- Pathologic confirmation of N3 disease, by one of:
    - Mediastinoscopy
    - Supraclavicular lymph node biopsy
    - Thoracoscopy
    - Needle biopsy
    - Mediastinotomy
    - EUS biopsy
    - EBUS biopsy

# Initial treatment if N3 positive

- Definitive concurrent chemoradiation (category 1)
    - Principles of Radiation Therapy (NSCL-C)
    - Concurrent Chemoradiation Regimens (NSCL-F)
- Then, after the chemoradiation, one of:
    - Durvalumab, if no EGFR exon 19 deletion or L858R mutation (category 1)
    - Osimertinib, if EGFR exon 19 deletion or L858R mutation (category 1)
    - Both follow Concurrent Chemoradiation Regimens (NSCL-F)
    - For patients who have received sequential chemoradiation, durvalumab can be considered as consolidation immunotherapy or, if EGFR exon 19 deletion or L858R mutation, osimertinib is recommended
- Then surveillance (NSCL-17)

# Next

- N3 negative, go to initial treatment for stage I-IIIA (NSCL-8)
- N3 positive, definitive concurrent chemoradiation on this page, then surveillance (NSCL-17)
- Metastatic disease, limited sites, go to NSCL-15
- Metastatic disease, distant disease, go to NSCL-18
