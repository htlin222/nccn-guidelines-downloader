+++
id           = "neuroendocrine/AGT-1"
gid          = "neuroendocrine"
ref          = "AGT-1"
page         = 57
title        = "Evaluation of an adrenal gland tumor found on imaging, and the clinical diagnosis it leads to"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["AGT-2", "AGT-3", "AGT-4", "PHEO-1"]

[facets]
disease   = "neuroendocrine"
timepoint = ["workup", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_malignancy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "hounsfield_units"
type = "text"
[[variables]]
name = "imaging_done"
type = "text"
[[variables]]
name = "biochemical_results"
type = "text"
+++

# Source

- NCCN Neuroendocrine and Adrenal Tumors v1.2026, AGT-1, p57
- Applies to an adrenal gland tumor seen on imaging
- Evaluation follows Principles of Pathology (NE-E)
- Biochemical workup detail: NE-A 2 of 4
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, adrenal gland tumor on imaging
- History of prior or current malignancy ___ (prior_malignancy)
- Non-contrast CT attenuation ___ (hounsfield_units) HU
- Imaging performed ___ (imaging_done)
- Biochemical workup results ___ (biochemical_results)

# Clinical presentation

- Adrenal gland tumor on imaging
- History of prior or current malignancy with risk of or suspicion of adrenal metastasis
    - Go to Additional Evaluation (AGT-2)
- No history of prior or current malignancy
    - Proceed with morphologic evaluation and functional evaluation

# Morphologic evaluation

- Adrenal protocol CT scan
    - Non-contrast CT
        - If Hounsfield unit (HU) < +10, no further washout imaging needed on this scan
        - If HU < +10, no PCC screening is needed
        - If > +10 HU, proceed with contrast CT with washout
    - Consider additional imaging
        - Depending on HU and imaging characteristics, additional imaging and workup may be indicated
- Or MRI with and without contrast

# Functional evaluation

- Biochemical workup (NE-A 2 of 4) for:
    - Primary aldosteronism
    - Hypercortisolemia (± Cushing syndrome)
    - PCC
        - No PCC screening is needed if HU < +10
    - Androgen excess

# Next

- Primary aldosteronism, go to AGT-2
- Hypercortisolemia (± Cushing syndrome), go to AGT-3
- Suspected adrenocortical carcinoma (ACC), go to AGT-4
    - ACC can oftentimes secrete multiple hormones
- PCC, go to PHEO-1
- History of prior or current malignancy with risk of or suspicion of adrenal metastasis, go to Additional Evaluation (AGT-2)
