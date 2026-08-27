+++
id           = "breast/BINV-7"
gid          = "breast"
ref          = "BINV-7"
page         = 20
title        = "Adjuvant systemic therapy for premenopausal HR-positive HER2-negative pT1-3 pN0 disease"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-K", "BINV-M", "BINV-N", "BINV-O", "BINV-I", "BINV-17"]

[facets]
disease   = "breast"
histology = ["invasive-ductal", "invasive-lobular", "any"]
stage     = ["I", "II"]
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
name = "grade"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "rs"
type = "text"
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-7, p20
- Systemic adjuvant treatment, HR-positive and HER2-negative disease
- Applies to premenopausal patients with pT1-3 and pN0 tumors
    - Definition of menopause: BINV-O
- Histologies covered
    - Ductal/NST
        - Per WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
    - Lobular
    - Mixed
    - Micropapillary
- Principles of Biomarker Testing: BINV-A
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth): BINV-J
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- Premenopausal confirmed (BINV-O)
- ___ (histology)
- ___ (ptnm), node-negative (pN0)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
    - Cancers with 1%-100% ER IHC staining are considered ER-positive and eligible for endocrine therapies
    - ER-low-positive (1%-10%) has more limited data, is heterogeneous, and reported biologic behavior is often similar to ER-negative cancers
    - For ER-low-positive, individualize risks versus benefits of endocrine therapy and additional adjuvant therapies in decision-making (BINV-A)
- Grade ___ (grade)
- LVI ___ (lvi)

# Tumor size branch

- pT1a (≤0.5 cm) and pN0
    - Consider adjuvant endocrine therapy (category 2B)
    - Adjuvant endocrine ± CDK4/6 inhibitor therapy and principles of adjuvant endocrine therapy: BINV-K
- pT1b-T3 (>0.5 cm) and pN0
    - Determine if candidate for chemotherapy

# If candidate for chemotherapy

- Strongly consider 21-gene RT-PCR assay (category 1)
    - Other prognostic gene expression assays may be considered to help assess risk of recurrence, but have not been validated to predict response to chemotherapy (BINV-N)
    - T1b tumors with low-grade histology and no LVI should be treated with endocrine monotherapy, as the TAILORx trial did not include patients with such tumors
- Recurrence score ___ (rs)

# Adjuvant systemic therapy by branch

- Not a candidate for chemotherapy, or 21-gene assay not done
    - Adjuvant endocrine therapy ± ovarian suppression/ablation (BINV-K)
    - Consider adjuvant ribociclib for eligible patients, eligibility criteria at BINV-K 3 of 4
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- Recurrence score ≤15
    - Adjuvant endocrine therapy ± ovarian suppression/ablation (BINV-K)
    - Consider adjuvant ribociclib for eligible patients, eligibility criteria at BINV-K 3 of 4
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
    - In premenopausal patients with recurrence score <26, adding chemotherapy to endocrine therapy was associated with a lower rate of distant recurrence than endocrine monotherapy, but it is unclear if the benefit was due to the ovarian suppression effects promoted by chemotherapy
- Recurrence score 16-25
    - Adjuvant chemotherapy (BINV-M) followed by endocrine therapy ± ovarian suppression/ablation (BINV-K)
    - Consider adjuvant ribociclib for eligible patients, eligibility criteria at BINV-K 3 of 4
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
    - In premenopausal patients with recurrence score <26, adding chemotherapy to endocrine therapy was associated with a lower rate of distant recurrence than endocrine monotherapy, but it is unclear if the benefit was due to the ovarian suppression effects promoted by chemotherapy
- Recurrence score ≥26
    - Adjuvant chemotherapy (BINV-M) followed by endocrine therapy ± ovarian suppression/ablation (category 1) (BINV-K)
    - Consider adjuvant ribociclib for eligible patients, eligibility criteria at BINV-K 3 of 4
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- See BINV-I for sequencing of systemic therapy and RT
- Follow-up (BINV-17)
