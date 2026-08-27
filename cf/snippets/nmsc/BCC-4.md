+++
id           = "nmsc/BCC-4"
gid          = "nmsc"
ref          = "BCC-4"
page         = 10
title        = "Primary and additional treatment for high-risk basal cell carcinoma"
nccn_version = "2.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-27"
see_also     = ["BCC-2", "BCC-3", "BCC-5", "BCC-6"]

[facets]
disease   = "nmsc"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "site"
type = "text"
[[variables]]
name = "subtype"
type = "text"
[[variables]]
name = "risk_factors"
type = "text"
[[variables]]
name = "nerve_involvement"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["positive", "negative"]
+++

# Source

- NCCN Basal Cell Skin Cancer v2.2026, BCC-4, p10
- Applies to high-risk BCC
- Any high-risk factor places the patient in the high-risk category
- Risk factors for recurrence: BCC-2
- Principles of pathology: BCC-A
- Principles of treatment: BCC-B
- All recommendations category 2A unless stated otherwise

# Assessment

- Lesion site ___ (site)
- Histologic subtype ___ (subtype)
    - Aggressive histologic subtype is defined as BCC with squamous differentiation, infiltrative, micronodular, morpheaform, sclerodermiform, or sclerosing
- High-risk factors present ___ (risk_factors), see BCC-2
- Perineural or large-nerve involvement ___ (nerve_involvement)
    - If named nerve involvement is suspected, consider MRI with and without contrast of region of interest to evaluate extent and rule out base of skull involvement or intracranial extension in head and neck tumors
- Patient comorbidities affecting choice of modality ___ (comorbidities)
    - eg, thrombocytopenia, immunosuppression, bleeding diathesis, multiple primary BCCs
- Postoperative margin status ___ (margin_status)

# Multidisciplinary consultation

- Multidisciplinary consultation recommended at center with specialized expertise to discuss options

# Primary treatment

- Mohs or other forms of PDEMA, preferred for BCCs that are high risk
    - Mohs surgery should be performed by dermatologic surgeons who have specialized training and experience in this procedure
    - As per other appropriate use criteria
    - PDEMA with permanent section analysis or intraoperative frozen section analysis is an alternative to Mohs, see Principles of PDEMA Technique (SCC-G) within the NCCN Guidelines for Squamous Cell Skin Cancer
    - For clinically diagnosed non-facial BCCs <6 mm in depth on the head, neck, hands, feet, pretibial, and anogenital area that are clinically confined to the dermis, C&E or shave removal may be considered as an alternative primary treatment option if Mohs, resection with PDEMA, and standard excision are difficult to perform due to patient comorbidities, see BCC-2
- or Standard excision with wider surgical margins and postoperative margin assessment
    - Reconstruction by second intention healing, linear repair, or skin graft
    - Due to the wide variability of clinical characteristics that may define a high-risk tumor, it is not feasible to recommend a defined margin for standard excision of high-risk BCC
    - Keen awareness of the subclinical extension of BCC is advised when selecting a treatment modality without complete margin assessment for a high-risk tumor
    - These margins may need to be modified based on tumor- or patient-specific factors
- Consultation with radiation oncologist for nonsurgical candidates

# Additional treatment for positive margins

- Re-resect, if feasible
- or RT, see Principles of Radiation Therapy (BCC-C)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist

# Additional treatment for negative margins

- If extensive perineural or large-nerve involvement, consider adjuvant RT, see Principles of Radiation Therapy (BCC-C)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
    - There are conflicting data about the value of adjuvant RT following margin-negative surgical excision, particularly after Mohs
    - If named nerve involvement is suspected, consider MRI with and without contrast of region of interest

# Next

- After primary and additional treatment, go to Follow-up (BCC-6)
- If surgery and/or RT are not curative, go to Advanced BCC (BCC-5)
