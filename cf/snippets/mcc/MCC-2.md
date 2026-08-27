+++
id           = "mcc/MCC-2"
gid          = "mcc"
ref          = "MCC-2"
page         = 8
title        = "Primary and additional treatment of clinical N0, local MCC only, surgically resectable disease"
nccn_version = "2.2026"
nccn_date    = "10/24/2025"
generated    = "2026-08-27"
see_also     = ["MCC-1", "MCC-A", "MCC-B", "MCC-C", "MCC-6"]

[facets]
disease   = "mcc"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "slnb_result"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "margin_status"
type = "enum"
options = ["clear", "microscopically positive"]
+++

# Source

- NCCN Merkel Cell Carcinoma v2.2026, MCC-2, p8
- Applies to clinical N0 disease, local MCC only, surgically resectable
- Criteria for local MCC only: disease limited to the primary tumor, with no evidence of in-transit, nodal, or distant disease
- Multidisciplinary consultation recommended at center with specialized expertise
- Footnotes on MCC-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary site ___ (primary_site)
- Primary tumor ___ (tumor_size) cm
- Clinical N0: no in-transit, nodal, or distant disease
- Surgically resectable
- SLNB ___ (slnb_result)
- Margins ___ (margin_status)
- Adverse risk factors for local recurrence
    - Lymphovascular invasion (LVI)
    - Immunosuppression
    - Primary tumor >1 cm
    - Close or pathologically positive margins
    - Positive SLNB
    - Head/neck site

# Primary treatment

- Sentinel lymph node biopsy (SLNB) with appropriate immunopanel (MCC-A)
    - SLNB is an important staging tool
    - This procedure and subsequent treatment impacts regional control for patients with positive SLNs
    - Regardless of surgical approach, make every effort to coordinate surgical management such that SLNB is performed prior to or at the time of definitive excision (MCC-C)
- and excision of the primary
    - Excision with 1- to 2-cm margins
    - or Mohs or other forms of peripheral and deep en face margin assessment (PDEMA) in certain circumstances
        - Mohs or other forms of PDEMA may be appropriate
        - See NCCN Guidelines for Squamous Cell Skin Cancer, Principles of PDEMA Technique, for description of PDEMA
    - Surgical margins should be balanced with morbidity of surgery, with surgical goal of primary tissue closure to avoid undue delay to adjuvant RT (MCC-C)
        - If needed, adjuvant RT should be performed as soon as wound healing permits, as delay has been associated with worse outcomes
    - If adverse risk factors present and adjuvant RT is planned, consider narrower clinical margins
        - With the goal of clear or microscopically positive margins versus grossly positive margins

# Additional treatment, SLN positive

- Baseline imaging if studies not already performed
    - Whole-body FDG-PET/CT, preferred at initial workup
    - or CT with contrast of chest, abdomen, pelvis, and neck if primary on head/neck
    - and MRI of the brain with and without contrast if clinical suspicion of brain metastases or direct extension
- Node dissection
    - Observation
    - or adjuvant RT for multiple involved nodes and/or the presence of extranodal extension (ENE)
- or RT to the nodal basin (MCC-B)
- Appropriateness of RT should be determined together with a radiation oncologist

# Additional treatment, SLN negative

- Nodal basin
    - Observation of the nodal basin (preferred)
    - May consider RT to the nodal basin for certain high-risk clinical scenarios (MCC-B)
        - Consider empiric RT when the accuracy or reliability of SLNB may have been compromised, eg, prior surgery, extensive chronic lymphocytic leukemia (CLL) within the nodes, history of prior LN excision
        - or when the risk of false-negative SLNB is high due to aberrant LN drainage and presence of multiple SLN basins, such as in head/neck or midline trunk MCC
        - or when the patient presents with profound immunosuppression
    - Appropriateness of RT should be determined together with a radiation oncologist
- Primary site, clear margins
    - No adverse risk factors: consider observation
    - At least 1 adverse risk factor: adjuvant RT
- Primary site, microscopically positive margins
    - Adjuvant RT (preferred) and/or re-excision

# Next

- Follow-up (MCC-6)
