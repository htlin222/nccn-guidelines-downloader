+++
id           = "breast/BINV-10"
gid          = "breast"
ref          = "BINV-10"
page         = 23
title        = "Systemic adjuvant treatment for HR-negative, HER2-negative disease"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-J", "BINV-M", "BINV-L", "BINV-I", "BINV-2", "BINV-3", "BINV-17"]

[facets]
disease   = "breast"
histology = "any"
stage     = ["I", "II", "III"]
biomarker = ["hr-negative", "her2-negative", "tnbc", "brca"]
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
name = "brca"
type = "text"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-10, p23
- Applies to HR-negative, HER2-negative invasive breast cancer
- Principles of Biomarker Testing (BINV-A)
- Special considerations for breast cancer in males (sex assigned at birth) (BINV-J)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology)
    - Ductal/NST
        - Per WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
    - Lobular
    - Mixed
    - Micropapillary
    - Metaplastic
        - Rare subtypes of metaplastic carcinoma (eg, low-grade adenosquamous and low-grade fibromatosis-like carcinoma) are considered to have a favorable prognosis without adjuvant systemic therapies
- ___ (ptnm)
- ER ___ (er) / PR ___ (pr), HR-negative
- HER2 ___ (her2), HER2-negative
- Germline BRCA1/2 pathogenic variant ___ (brca)
- Menopausal status ___ (menopausal_status), natural or induced

# Systemic adjuvant therapy by stage

- pT1, pT2, or pT3; and pN0 or pN1mi (≤2 mm axillary node metastasis)
    - pT1a (≤0.5 cm), pN0
        - No adjuvant therapy
        - In select patients with high-risk features (eg, young patients with high-grade histology), adjuvant chemotherapy may be considered (category 2B), see BINV-L
    - pT1a (≤0.5 cm), pN1mi
        - Consider adjuvant chemotherapy
        - Adjuvant olaparib if germline BRCA1/2 pathogenic variant
    - pT1b (0.6–1.0 cm)
        - Consider adjuvant chemotherapy
        - Adjuvant olaparib if germline BRCA1/2 pathogenic variant
    - pT1c–pT3 (>1 cm)
        - Adjuvant chemotherapy (category 1)
        - Adjuvant olaparib if germline BRCA1/2 pathogenic variant
- pN+ (≥1 ipsilateral metastases >2 mm)
    - Adjuvant chemotherapy (category 1)
    - Adjuvant olaparib if germline BRCA1/2 pathogenic variant

# Applies to every chemotherapy decision above

- Preoperative/adjuvant therapy regimens (BINV-M)
- Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3–5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
- Olaparib should be given after completion of RT, see BINV-I

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- See BINV-I for sequencing of systemic therapy and RT
- Follow-up (BINV-17)
