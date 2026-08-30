+++
id           = "breast-screening/BSCR-13"
gid          = "breast-screening"
ref          = "BSCR-13"
page         = 21
title        = "Workup and diagnostic evaluation of axillary mass(es) suspected to represent adenopathy"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-5", "BSCR-6", "BSCR-18"]

[facets]
disease   = "breast-screening"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "laterality"
type = "enum"
options = ["unilateral", "bilateral"]
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "other_adenopathy_sites"
type = "text"
[[variables]]
name = "nonbreast_etiology"
type = "text"
[[variables]]
name = "systemic_conditions"
type = "text"
[[variables]]
name = "vaccination_status"
type = "text"
[[variables]]
name = "breast_mass"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-13, p21
- Applies to axillary mass(es) suspected to represent adenopathy
- If not expected to represent adenopathy, see BSCR-5
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) axilla
- Axillary mass(es) suspected to represent adenopathy
- Adenopathy is ___ (laterality)
- Complete clinical evaluation done
    - Other sites of adenopathy assessed ___ (other_adenopathy_sites)
    - Potential non-breast etiologies of adenopathy assessed ___ (nonbreast_etiology)
- Evidence of clinical conditions known to be associated with systemic adenopathy ___ (systemic_conditions)
    - Lupus
    - Rheumatoid arthritis
    - Human immunodeficiency virus (HIV) infection
    - Others
- Recent vaccination status assessed, and managed accordingly ___ (vaccination_status)
- Breast mass present ___ (breast_mass)

# Systemic disease

- Appropriate clinical management
    - Referral to a breast specialist
    - Supplemental imaging
    - And/or tissue sampling
- Or see NCCN Guidelines for appropriate malignancy, if malignant

# No systemic disease, bilateral adenopathy

- Diagnostic mammogram
    - Mammogram is recommended in those aged 30 years and older
    - If aged <30 years, mammogram is optional unless ultrasound results are suspicious
    - With tomosynthesis
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
- Plus ultrasound
- For additional guidance based upon BI-RADS category 3 (probably benign) assessment, see BSCR-18

# No systemic disease, unilateral adenopathy

- Diagnostic mammogram
    - Mammogram is recommended in those aged 30 years and older
    - If aged <30 years, mammogram is optional unless ultrasound results are suspicious
    - With tomosynthesis
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
        - CEM may be considered if available when clinically suspicious
- Plus ultrasound
- For additional guidance based upon BI-RADS category 3 (probably benign) assessment, see BSCR-18

# Imaging result

- Negative/benign
    - Appropriate clinical management
        - Referral to a breast specialist
        - Supplemental imaging
        - And/or tissue sampling
    - For additional guidance based upon BI-RADS category 3 (probably benign) assessment, see BSCR-18
- Suspicious
    - Tissue sampling
        - If lymphoma is suspected, tissue/specimen may require special pathologic processing and/or surgical excision

# Tissue sampling result

- Benign
    - Appropriate clinical management
        - Referral to a breast specialist
        - Supplemental imaging
        - And/or tissue sampling
- Malignant axillary lymph node (breast origin) and no breast mass
    - Breast MRI
- Malignant axillary lymph node and breast cancer
    - See NCCN Guidelines for Breast Cancer
- Malignant axillary lymph node (nonbreast origin)
    - See NCCN Guidelines for appropriate malignancy

# Next

- Axillary mass not expected to represent adenopathy, go to BSCR-5
- BI-RADS category 3 (probably benign) assessment, go to BSCR-18
- Malignant axillary lymph node and breast cancer, see NCCN Guidelines for Breast Cancer
- Malignant axillary lymph node (nonbreast origin), see NCCN Guidelines for appropriate malignancy
