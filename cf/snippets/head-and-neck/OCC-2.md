+++
id           = "head-and-neck/OCC-2"
gid          = "head-and-neck"
ref          = "OCC-2"
page         = 77
title        = "Workup and definitive treatment of an occult primary by neck node pathology and node level"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["OCC-1", "OCC-3", "OCC-4", "IMG-A", "SURG-A", "FOLL-A"]

[facets]
disease   = "head-and-neck"
histology = ["adenocarcinoma", "squamous"]
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "node_pathology"
type = "text"
[[variables]]
name = "node_levels"
type = "text"
[[variables]]
name = "thyroglobulin"
type = "enum"
options = ["negative", "positive", "pending", "not-done"]
[[variables]]
name = "calcitonin"
type = "enum"
options = ["negative", "positive", "pending", "not-done"]
[[variables]]
name = "hpv"
type = "enum"
options = ["positive", "negative", "pending", "not-done"]
[[variables]]
name = "ebv"
type = "enum"
options = ["positive", "negative", "pending", "not-done"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, Occult Primary, OCC-2, p77
- Applies once the pathologic finding on the neck node is known
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Neck node pathology ___ (node_pathology)
- Involved node levels ___ (node_levels)
- Thyroglobulin ___ (thyroglobulin)
- Calcitonin ___ (calcitonin)
- HPV ___ (hpv)
- EBV ___ (ebv)

# Pathologic findings

- Adenocarcinoma of neck node
    - Thyroglobulin negative
    - Calcitonin negative
- Poorly differentiated or nonkeratinizing squamous cell of neck node
- Not otherwise specified (NOS)
- Anaplastic (not thyroid) of neck node
- Squamous cell carcinoma of neck node
    - HPV and EBV testing are suggested if not yet done
    - If HPV positive, see ORPH-1
    - If EBV positive, see NASO-1

# Workup, for poorly differentiated or nonkeratinizing squamous cell, NOS, anaplastic (not thyroid), or squamous cell carcinoma of neck node

- Levels I–III
    - EUA
    - Palpation and inspection
    - Biopsy of areas of clinical concern and tonsillectomy ± lingual tonsillectomy (only for squamous cell carcinoma [SCC])
        - Image-guided (US or CT) needle biopsy of cystic neck nodes may offer better diagnostic yield than FNA by palpation alone for initial diagnosis in this setting
        - For unresectable or metastatic disease where there is a plan for systemic therapy, a core biopsy would allow for ancillary biomarker testing
    - Direct laryngoscopy and nasopharynx survey
- Levels IV, V
    - EUA including direct laryngoscopy, esophagoscopy, bronchoscopy
    - Chest/abdomen/pelvis CT with contrast, or FDG-PET/CT if not previously performed
        - Principles of Imaging (IMG-A)

# Definitive treatment, for adenocarcinoma of neck node with thyroglobulin negative and calcitonin negative

- Node level I, II, III, upper V
    - Neck dissection + parotidectomy, if indicated
        - Principles of Surgery (SURG-A)
    - RT to neck ± parotid bed
        - Principles of Radiation Therapy (OCC-A)
- Node level IV, lower V
    - Evaluate for infraclavicular primary
    - Neck dissection, if indicated
        - Principles of Surgery (SURG-A)
    - ± adjuvant treatment if indicated (OCC-4)

# Next

- Primary found, treat as appropriate (NCCN Guidelines Index)
- Primary not found, Definitive Treatment (OCC-3)
- Unresectable nodal disease or unfit for surgery, go to ADV-1
- M1 disease at initial presentation, go to ADV-2
- Follow-up (FOLL-A, 1 of 2)
- Post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
