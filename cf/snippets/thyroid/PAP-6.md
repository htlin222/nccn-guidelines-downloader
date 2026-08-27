+++
id           = "thyroid/PAP-6"
gid          = "thyroid"
ref          = "PAP-6"
page         = 20
title        = "Known or suspected distant metastatic papillary carcinoma after thyroidectomy: imaging, pretreatment radioiodine scan, and RAI therapy"
nccn_version = "2.2026"
nccn_date    = "06/02/2026"
generated    = "2026-08-27"
see_also     = ["PAP-4", "PAP-5", "PAP-7"]

[facets]
disease   = "thyroid"
stage     = "IV"
timepoint = ["workup", "metastatic", "adjuvant"]

[[variables]]
name = "weeks_post_thyroidectomy"
type = "number"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "tg"
type = "text"
[[variables]]
name = "suspected_pulmonary_met"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "scan_result"
type = "enum"
options = ["radioiodine-avid", "remnant-uptake-only", "no-uptake", "not-performed"]
+++

# Source

- NCCN Thyroid Carcinoma v2.2026, PAP-6, p20
- Applies to papillary carcinoma with known or suspected distant metastases at presentation, or elevated Tg (PAP-4)
- Principles of Radiation and RAI Therapy: THYR-C
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (weeks_post_thyroidectomy) weeks postthyroidectomy
- Known or suspected metastatic foci: ___ (met_sites)
- Postoperative Tg ___ (tg)
- Suspicion of pulmonary metastasis: ___ (suspected_pulmonary_met)
- Pretreatment radioiodine diagnostic imaging result: ___ (scan_result)

# Imaging and surgery, 6-12 weeks postthyroidectomy

- Appropriate imaging of known metastatic foci
    - CT or MRI with contrast
    - If suspicion of pulmonary metastasis, chest CT can be done without contrast
    - Done to evaluate macroscopic metastatic foci for potential alternative therapies (eg, surgical resection, EBRT)
    - Aimed at preventing invasion or compression of vital structures, or pathologic fracture, as a result of disease progression or of TSH stimulation
- Resect clinically significant structural disease if possible

# Pretreatment radioiodine diagnostic imaging, at least 4-8 weeks following imaging

- Consider 24-hour urine iodine before proceeding
- Consider pretreatment radioiodine diagnostic imaging with TSH stimulation
    - Iodine-123 or iodine-131
    - Pre-ablation diagnostic scans in this setting are commonly done at NCCN Member Institutions, but the Panel recommends selective use
    - Base that selection on pathology, postoperative Tg, intraoperative findings, and available imaging studies
    - Consider dosimetry studies in patients at high risk of having RAI-avid distant metastasis
    - Empiric RAI doses may exceed maximum tolerable activity levels in patients with decreased GFR
    - Patients on dialysis require special handling
    - Principles of Radiation and RAI Therapy (THYR-C)

# Therapy by scan result

- Confirmed radioiodine-avid tumor, or thyroid remnant uptake only
    - RAI therapy (THYR-C)
    - Consider other local therapies (EBRT, etc.) as primary therapy or postoperative for structural metastatic disease
- No uptake, or diagnostic imaging not performed
    - Consider RAI adjuvant therapy (THYR-C)
    - Consider other local therapies (EBRT, etc.) as primary therapy or postoperative for structural metastatic disease

# Next

- Disease Monitoring and Management, go to PAP-7
- Levothyroxine to appropriate TSH target (THYR-A)
