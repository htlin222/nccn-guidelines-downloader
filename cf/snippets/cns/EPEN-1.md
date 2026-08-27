+++
id           = "cns/EPEN-1"
gid          = "cns"
ref          = "EPEN-1"
page         = 38
title        = "Radiologic presentation, surgery, and pathology for adult intracranial and spinal ependymoma, excluding subependymoma"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["EPEN-2", "EPEN-3"]

[facets]
disease   = "cns"
timepoint = ["workup", "diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "imaging_findings"
type = "text"
[[variables]]
name = "tumor_site"
type = "enum"
options = ["supratentorial", "posterior fossa", "spinal"]
[[variables]]
name = "resection_extent"
type = "enum"
options = ["gross total resection", "subtotal resection", "open biopsy", "stereotactic biopsy"]
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Adult Intracranial and Spinal Ependymoma (Excluding Subependymoma) v2.2026, EPEN-1, p38
- Applies to a radiologic presentation compatible with a primary brain tumor or spinal cord tumor
- Imaging: Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Surgery: Principles of Surgery (BRAIN-B)
- Pathology: Principles of Brain Tumor Pathology (BRAIN-E)
- Management: Principles of Brain and Spine Tumor Management (BRAIN-D)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Contrast-enhanced MRI or CT performed, per BRAIN-A
- Imaging ___ (imaging_findings), compatible with a primary brain tumor or spinal cord tumor
    - Multidisciplinary review for treatment planning, once pathology is available (BRAIN-D)
- Tumor site: ___ (tumor_site)

# Clinical impression

- Gross total resection feasible
    - If image-confirmed gross total resection is not achieved, consider multidisciplinary review and reresection
- Gross total resection not feasible

# Surgery

- Per Principles of Surgery (BRAIN-B)
- Gross total resection feasible
    - Gross total resection
- Gross total resection not feasible
    - Stereotactic biopsy, or
    - Open biopsy, or
    - Subtotal resection
- Actual procedure performed: ___ (resection_extent)

# Pathology

- Per Principles of Brain Tumor Pathology (BRAIN-E)
- ___ (pathology)
- Intracranial ependymoma
    - Supratentorial
    - Posterior fossa
- Spinal ependymoma

# Next

- Intracranial ependymoma (supratentorial, posterior fossa), adjuvant treatment, go to EPEN-2
- Spinal ependymoma, adjuvant treatment, go to EPEN-3
