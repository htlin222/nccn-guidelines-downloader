+++
id           = "breast/BINV-5"
gid          = "breast"
ref          = "BINV-5"
page         = 18
title        = "Systemic adjuvant treatment for HR-positive, HER2-positive disease"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-J", "BINV-K", "BINV-M", "BINV-I", "BINV-2", "BINV-3", "BINV-17"]

[facets]
disease   = "breast"
histology = ["invasive-ductal", "invasive-lobular", "any"]
biomarker = ["hr-positive", "her2-positive"]
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
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-5, p18
- Systemic adjuvant treatment, HR-positive and HER2-positive disease
- Applies to pT1, pT2, or pT3 with pN0 or pN1mi (≤2 mm axillary node metastasis)
- Also applies to pN+ (≥1 ipsilateral metastases >2 mm)
- Histologies covered: ductal/NST, lobular, mixed, micropapillary
    - Per WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
- Principles of Biomarker Testing (BINV-A)
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth) (BINV-J)
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology)
- ___ (ptnm)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
    - ER IHC staining of 1%–100% counts as ER-positive and eligible for endocrine therapy
    - ER-low–positive (1%–10%) has more limited data and is heterogeneous, with reported biologic behavior often similar to ER-negative cancers
    - For ER-low–positive, individualize risks versus benefits of endocrine therapy and of additional adjuvant therapies (BINV-A)
- ___ (menopausal_status), natural or induced

# pT1a (≤0.5 cm), pN0

- Consider adjuvant endocrine therapy (BINV-K)
- Or consider adjuvant chemotherapy (BINV-M) with trastuzumab (category 2B) and endocrine therapy
    - Benefit of HER2-targeted therapy is uncertain in HER2-positive breast cancer with pT1a–b, N0 tumors, a population not studied in randomized trials
    - Balance the decision to use trastuzumab in this cohort against its known toxicities
    - Absolute benefit of HER2-targeted systemic therapy is negligible with HR-positive cancers and tumor size bordering on T1mic (<1 mm); endocrine therapy remains a viable option

# pN1mi (≤2 mm), or pT1b (0.6–1.0 cm)

- Adjuvant endocrine therapy
    - Benefit of HER2-targeted therapy is uncertain for pT1a–b, N0 tumors; absolute benefit is negligible with HR-positive cancers bordering on T1mic (<1 mm)
- Or adjuvant chemotherapy (BINV-M) with trastuzumab and endocrine therapy (BINV-K)
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# pT1c–pT3 (>1 cm)

- Adjuvant chemotherapy (BINV-M) with trastuzumab (category 1) and endocrine therapy (BINV-K)
    - ± pertuzumab for pT2–T3
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# pN+ (≥1 ipsilateral metastases >2 mm)

- Adjuvant chemotherapy (BINV-M) with pertuzumab + trastuzumab (category 1, preferred) and endocrine therapy
    - Updated APHINITY results at a median follow-up of 11.3 years confirmed the benefit of adding pertuzumab to trastuzumab plus chemotherapy in preventing recurrences
- Or adjuvant chemotherapy (BINV-M) with trastuzumab (category 1) and endocrine therapy
- With either option
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
    - Consider extended adjuvant neratinib following adjuvant trastuzumab-containing therapy for HR-positive, HER2-positive disease with a perceived high risk of recurrence
        - Benefit or toxicities of extended neratinib after pertuzumab or ado-trastuzumab emtansine is unknown

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- See BINV-I for sequencing of systemic therapy and RT
- Follow-up (BINV-17)
