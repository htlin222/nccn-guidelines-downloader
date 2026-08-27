+++
id           = "cns/AMED-1"
gid          = "cns"
ref          = "AMED-1"
page         = 46
title        = "Adult medulloblastoma: radiologic presentation, resectability impression, and initial surgery"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["AMED-2", "BRAIN-A", "BRAIN-B", "BRAIN-D"]

[facets]
disease   = "cns"
timepoint = ["diagnosis", "primary-treatment", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["gross total resection possible", "gross total resection not possible"]
[[variables]]
name = "procedure"
type = "enum"
options = ["gross total resection", "stereotactic biopsy", "open biopsy", "partial resection"]
+++

# Source

- NCCN Adult Medulloblastoma v2.2026, AMED-1, p46
- Applies to a radiologic presentation of contrast-enhanced MRI compatible with a primary brain tumor
- Imaging: Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Surgery: Principles of Surgery (BRAIN-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Contrast-enhanced MRI ___ (mri_findings)
    - Imaging per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
    - Compatible with primary brain tumor
        - Based on multidisciplinary review for treatment planning, once pathology is available
        - See Principles of Brain and Spine Tumor Management (BRAIN-D)

# Clinical impression

- Resectability: ___ (resectability)
    - Gross total resection possible
    - Gross total resection not possible
- Placement of ventriculoperitoneal (VP) shunt for management of hydrocephalus is acceptable if needed

# Surgery

- Per Principles of Surgery (BRAIN-B)
- Gross total resection possible
    - Gross total resection
- Gross total resection not possible
    - Stereotactic biopsy
        - Strongly recommend referring patient to a brain tumor center to be evaluated for possible further, more complete surgical resection
    - or Open biopsy
    - or Partial resection
- Procedure performed: ___ (procedure)

# Next

- Postoperative staging, go to AMED-2
