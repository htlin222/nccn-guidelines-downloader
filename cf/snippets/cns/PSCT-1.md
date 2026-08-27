+++
id           = "cns/PSCT-1"
gid          = "cns"
ref          = "PSCT-1"
page         = 59
title        = "Initial imaging, radiologic and clinical presentation, and surgical decision for an intradural spinal mass"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["PSCT-2", "PSCT-3", "PSCT-4"]

[facets]
disease   = "cns"
timepoint = ["workup", "diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging_modality"
type = "enum"
options = ["spine MRI", "CT myelogram"]
[[variables]]
name = "compartment"
type = "enum"
options = ["intradural extramedullary", "intradural intramedullary"]
[[variables]]
name = "radiologic_pattern"
type = "enum"
options = ["well-defined/circumscribed", "poorly defined/infiltrative"]
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Primary Spinal Cord Tumors v2.2026, PSCT-1, p59
- Applies to an intradural mass found on spine MRI, or on CT myelogram if MRI is contraindicated
- Imaging: Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Surgery: Principles of Surgery (BRAIN-B)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Intradural mass demonstrated by ___ (imaging_modality)
    - Spine MRI is the study of record
    - CT myelogram only if MRI is contraindicated
    - Imaging performed per BRAIN-A
    - Based on multidisciplinary review for treatment planning, once pathology is available (BRAIN-D)
- Compartment: ___ (compartment)
    - Intradural extramedullary
    - Intradural intramedullary
- Clinical presentation: ___ (symptom_status)
    - ___ (symptoms)

# Radiologic presentation

- Per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- MRI well-defined/circumscribed
- MRI poorly defined/infiltrative
- Recorded pattern: ___ (radiologic_pattern)

# Surgery

- Per Principles of Surgery (BRAIN-B)
- MRI well-defined/circumscribed
    - Asymptomatic
        - Observation, or
        - Maximum safe resection
    - Symptomatic
        - Maximum safe resection
- MRI poorly defined/infiltrative
    - Asymptomatic
        - Observation, or
        - Biopsy
    - Symptomatic
        - Biopsy

# After surgery

- Resection performed
    - Postoperative spine MRI, per BRAIN-A
- Biopsy performed

# Next

- Observation, go to Follow-up (PSCT-4)
- Maximum safe resection, postoperative spine MRI, then Pathology (PSCT-2)
- Biopsy, then Pathology (PSCT-2)
- Poorly defined/infiltrative tumor after biopsy, go to PSCT-3
