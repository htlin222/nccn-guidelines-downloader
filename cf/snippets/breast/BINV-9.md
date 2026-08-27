+++
id           = "breast/BINV-9"
gid          = "breast"
ref          = "BINV-9"
page         = 22
title        = "Adjuvant systemic therapy for HR-negative, HER2-positive disease, by pT and pN"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-J", "BINV-M", "BINV-I", "BINV-2", "BINV-3", "BINV-17"]

[facets]
disease   = "breast"
histology = ["invasive-ductal", "invasive-lobular", "any"]
biomarker = ["hr-negative", "her2-positive"]
timepoint = "adjuvant"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "er"
type = "text"
[[variables]]
name = "pr"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "menopause"
type = "enum"
options = ["premenopausal", "postmenopausal"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-9, p22
- Systemic adjuvant treatment: HR-negative, HER2-positive disease
- Biomarker status per Principles of Biomarker Testing (BINV-A)
- If male (sex assigned at birth), see Special Considerations for Breast Cancer in Males (BINV-J)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- ___ (ptnm)
- Histology ___ (histology), one of the four covered by this page
    - Ductal/NST
        - According to WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
    - Lobular
    - Mixed
    - Micropapillary
- Menopausal status ___ (menopause), natural or induced

# Applies to all chemotherapy options below

- Regimen per Preoperative/Adjuvant Therapy Regimens (BINV-M)
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology

# pT1, pT2, or pT3; and pN0 or pN1mi (≤2 mm axillary node metastasis)

- pT1a (≤0.5 cm) and pN0
    - Consider adjuvant chemotherapy with trastuzumab (category 2B)
        - The benefit of HER2-targeted therapy is uncertain in HER2-positive breast cancer with pT1a-b, N0 tumors, a population not studied in randomized trials
        - The decision for use of trastuzumab therapy in this cohort must balance with the known toxicities
- pT1a (≤0.5 cm) and pN1mi
    - Consider adjuvant chemotherapy with trastuzumab
        - The benefit of HER2-targeted therapy is uncertain in HER2-positive breast cancer with pT1a-b, N0 tumors, a population not studied in randomized trials
        - The decision for use of trastuzumab therapy in this cohort must balance with the known toxicities
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- pT1b (0.6–1.0 cm)
    - Consider adjuvant chemotherapy with trastuzumab
        - The benefit of HER2-targeted therapy is uncertain in HER2-positive breast cancer with pT1a-b, N0 tumors, a population not studied in randomized trials
        - The decision for use of trastuzumab therapy in this cohort must balance with the known toxicities
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- pT1c–T3 (>1 cm)
    - Adjuvant chemotherapy with trastuzumab (category 1)
        - With or without pertuzumab for pT2–T3
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# pN+ (≥1 ipsilateral metastases >2 mm)

- Adjuvant chemotherapy with pertuzumab + trastuzumab (category 1, preferred)
    - Updated results from the adjuvant APHINITY trial in HER2-positive early breast cancer, with a median follow-up of 11.3 years, have confirmed the benefit of adding pertuzumab to trastuzumab plus chemotherapy in preventing recurrences
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- or Adjuvant chemotherapy with trastuzumab (category 1)
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- See BINV-I for sequencing of systemic therapy and RT
- Follow-up (BINV-17)
