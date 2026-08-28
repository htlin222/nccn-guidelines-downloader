+++
id           = "ped_cns/PMB-1"
gid          = "ped_cns"
ref          = "PMB-1"
page         = 33
title        = "Radiologic presentation of pediatric medulloblastoma, clinical impression, and initial surgery"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PMB-A", "PMB-B", "PMB-C", "PMB-2"]

[facets]
disease   = "ped_cns"
timepoint = ["diagnosis", "workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "hydrocephalus"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "gtr_possible"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "surgical_plan"
type = "enum"
options = ["GTR", "maximal safe resection", "STR", "open biopsy", "stereotactic biopsy"]
+++

# Source

- NCCN Pediatric Medulloblastoma: Children and Adolescents v1.2026, PMB-1, p33
- Applies to a radiologic presentation compatible with a primary brain tumor
- Neuroimaging per Principles of Neuroimaging (PMB-A)
- Clinical impression per Principles of Neuropathology (PMB-B)
- Surgery per Principles of Surgery (PMB-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Contrast-enhanced MRI compatible with primary brain tumor: ___ (mri_findings)
- Hydrocephalus needing management: ___ (hydrocephalus)
- Gross total resection (GTR) possible: ___ (gtr_possible)
- Planned surgical approach: ___ (surgical_plan)

# Radiologic presentation

- Contrast-enhanced MRI (preferred) compatible with primary brain tumor
    - Preoperative MRI, with and without gadolinium, should be obtained to avoid confusion with blood byproducts or postoperative changes
    - Brain and spine MRI with and without gadolinium is the recommended imaging modality for staging and response evaluation
    - Rapid sequence MRI is not a substitute for a full brain and spine MRI when staging or assessing for response evaluation
    - CT is not recommended for staging and response evaluation unless in the very rare cases where MRI is not feasible
- Multidisciplinary input for treatment planning, if feasible
    - Consider a multidisciplinary review in treatment planning, before surgery, and once pathology is available
- Referral to pediatric brain tumor center

# Clinical impression

- Clinical impression per Principles of Neuropathology (PMB-B)
- Determine whether gross total resection (GTR) is possible
- Endoscopic third ventriculostomy (ETV) or placement of ventriculoperitoneal (VP) shunt for management of hydrocephalus is acceptable if needed

# Surgery

- Surgery per Principles of Surgery (PMB-C)
- GTR possible
    - GTR
- GTR not possible
    - Maximal safe resection, if feasible, or
    - STR, or
    - Open biopsy
        - Strongly recommend referring patient to a pediatric brain tumor center to be evaluated for possible further, more complete surgical resection
    - Stereotactic biopsy
        - Strongly recommend referring patient to a pediatric brain tumor center to be evaluated for possible further, more complete surgical resection
        - May be considered only if patient had gross leptomeningeal disease and no detectable primary site
- Extent of resection
    - Initial surgery should be performed with the goal of GTR while minimizing neurologic deficits incurred from surgery
    - Near total resection (NTR), 1.5 cm2 or less residual, is acceptable in some settings
    - Less than NTR is also acceptable after review postoperatively by a multidisciplinary team

# Next

- After surgery, go to Postoperative Staging (PMB-2)
