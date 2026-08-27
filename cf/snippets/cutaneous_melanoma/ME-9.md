+++
id           = "cutaneous_melanoma/ME-9"
gid          = "cutaneous_melanoma"
ref          = "ME-9"
page         = 35
title        = "Workup of stage IV metastatic melanoma"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-17", "ME-D", "ME-B", "ME-C"]

[facets]
disease   = "cutaneous_melanoma"
stage     = "IV"
biomarker = ["braf", "kit"]
timepoint = ["workup", "staging", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["initial presentation with stage IV disease", "clinical recurrence"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "signs_symptoms"
type = "text"
[[variables]]
name = "targeted_therapy_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "biopsy_technique"
type = "enum"
options = ["core", "FNA", "incisional/partial", "excisional"]
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "braf"
type = "text"
[[variables]]
name = "kit"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-9, p35
- Applies to clinical/pathologic stage IV metastatic melanoma
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary melanoma site ___ (primary_site)
- Presentation: ___ (presentation)
- Sites of metastatic disease: ___ (met_sites)
- Specific signs and symptoms to evaluate: ___ (signs_symptoms)
- Being considered for targeted therapy: ___ (targeted_therapy_candidate)

# Workup - biopsy to confirm

- Biopsy to confirm, site ___ (biopsy_site)
    - Initial presentation with stage IV disease or clinical recurrence should be confirmed pathologically whenever possible, or if clinically indicated
    - Biopsy technique used: ___ (biopsy_technique)
        - Core, preferred
        - FNA
        - Incisional/partial
        - Excisional
    - Tissue is always preferred over cytology for molecular testing
    - See Principles of Biopsy and Pathology (ME-B)

# Workup - molecular testing

- Obtain tissue to ascertain alterations in BRAF: ___ (braf)
    - And, in the appropriate clinical setting, KIT: ___ (kit)
    - From either biopsy of the metastasis, preferred, or archival material, if the patient is being considered for targeted therapy
- Consider MGPT, if the test results might guide future treatment decisions or eligibility for participation in a clinical trial
- See Principles of Biomarker Testing (ME-C)

# Workup - laboratory

- Lactate dehydrogenase (LDH): ___ (ldh)

# Workup - imaging

- Imaging for baseline staging
- Imaging to evaluate specific signs and symptoms
- See Principles of Imaging - Workup (ME-D)

# Next

- Treatment for Oligometastatic or Widely Disseminated Disease (ME-17)
