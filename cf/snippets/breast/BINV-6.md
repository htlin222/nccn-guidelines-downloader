+++
id           = "breast/BINV-6"
gid          = "breast"
ref          = "BINV-6"
page         = 19
title        = "Systemic adjuvant treatment for HR-positive, HER2-negative disease in postmenopausal patients"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-K", "BINV-M", "BINV-N", "BINV-O", "BINV-17"]

[facets]
disease   = "breast"
histology = ["invasive-ductal", "invasive-lobular", "any"]
stage     = ["I", "II", "III"]
biomarker = ["hr-positive", "her2-negative"]
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
name = "germline_brca"
type = "text"
[[variables]]
name = "recurrence_score"
type = "text"
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-6, p19
- Systemic adjuvant treatment, HR-positive and HER2-negative disease
- Applies to postmenopausal patients with pT1–3 and pN0 or pN+ tumors
    - Definition of menopause: BINV-O
- Histologies covered: ductal/NST, lobular, mixed, micropapillary
    - Per WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
- Principles of biomarker testing: BINV-A
- Special considerations for breast cancer in males (sex assigned at birth): BINV-J
- Cancers with 1%–100% ER IHC staining are considered ER-positive and eligible for endocrine therapies
    - Data are more limited for the ER-low-positive (1%–10%) subgroup
    - That group is heterogeneous, with reported biologic behavior often similar to ER-negative cancers
    - Weigh risks versus benefits of endocrine therapy and additional adjuvant therapies individually (BINV-A)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology)
- ___ (ptnm)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- Postmenopausal, per BINV-O
- Germline BRCA1/2 ___ (germline_brca)
- 21-gene recurrence score ___ (recurrence_score)

# pT1a (≤0.5 cm) and pN0

- Consider adjuvant endocrine therapy (category 2B)
    - Adjuvant endocrine and CDK4/6 inhibitor therapy, and principles of adjuvant endocrine therapy: BINV-K

# pT1b–T3 (>0.5 cm), or pN1mi (≤2 mm axillary node metastases), or pN1 (1–3 positive nodes)

- Determine if candidate for chemotherapy
- Not a candidate for chemotherapy
    - Adjuvant endocrine therapy (BINV-K)
    - Consider adjuvant abemaciclib or ribociclib for eligible patients; eligibility criteria in BINV-K 3 of 4
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for three to five years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- Candidate for chemotherapy
    - Strongly consider 21-gene RT-PCR assay (category 1)
        - Other prognostic gene expression assays may be considered to help assess risk of recurrence, but have not been validated to predict response to chemotherapy (BINV-N)
        - T1b tumors with low-grade histology and no LVI should be treated with endocrine monotherapy, as the TAILORx trial did not include such tumors
    - Assay not done
        - Adjuvant endocrine therapy (BINV-K)
        - Consider adjuvant abemaciclib or ribociclib for eligible patients; eligibility criteria in BINV-K 3 of 4
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for three to five years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
    - Recurrence score ≥26
        - Adjuvant chemotherapy followed by endocrine therapy (category 1)
            - Regimens: BINV-M
            - Endocrine therapy: BINV-K
            - For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
        - Consider adjuvant abemaciclib or ribociclib for eligible patients; eligibility criteria in BINV-K 3 of 4
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for three to five years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
    - Recurrence score <26
        - Adjuvant endocrine therapy (category 1) (BINV-K)
        - Consider adjuvant abemaciclib or ribociclib for eligible patients; eligibility criteria in BINV-K 3 of 4
        - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for three to five years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# pN2/pN3 (≥4 ipsilateral metastases >2 mm)

- Adjuvant chemotherapy followed by endocrine therapy (category 1)
    - Regimens: BINV-M
    - Endocrine therapy: BINV-K
    - For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
    - There are few data on gene expression assays in those with ≥4 ipsilateral axillary lymph nodes; base the decision to administer adjuvant chemotherapy on clinical factors
- Select patients may be eligible for adjuvant abemaciclib or ribociclib
    - Eligibility criteria in BINV-K 2 of 4
- Select patients may be eligible for adjuvant olaparib if germline BRCA1/2 pathogenic variant (PV)
    - Eligibility criteria in BINV-M
- Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for three to five years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- Sequencing of systemic therapy and RT: BINV-I
- Follow-up (BINV-17)
