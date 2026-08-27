+++
id           = "breast/BINV-8"
gid          = "breast"
ref          = "BINV-8"
page         = 21
title        = "Systemic adjuvant treatment for premenopausal patients with HR-positive, HER2-negative, pT1-3, pN+ disease"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-A", "BINV-K", "BINV-M", "BINV-N", "BINV-O", "BINV-I", "BINV-17"]

[facets]
disease   = "breast"
histology = ["invasive-ductal", "invasive-lobular", "any"]
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
name = "nodes_positive"
type = "number"
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
name = "gbrca"
type = "text"
[[variables]]
name = "recurrence_score"
type = "number"
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-8, p21
- Systemic adjuvant treatment, HR-positive and HER2-negative disease
- Applies to premenopausal patients with pT1-3 and pN+ tumors
- Principles of Biomarker Testing (BINV-A)
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth) (BINV-J)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Premenopausal, by the definition of menopause (BINV-O)
- ___ (histology)
    - Ductal/NST
        - According to WHO, carcinoma of NST encompasses multiple patterns including medullary pattern, cancers with neuroendocrine expression, and other rare patterns
    - Lobular
    - Mixed
    - Micropapillary
- ___ (ptnm), pT1-3 and pN+
- ___ (nodes_positive) positive axillary nodes
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
    - ER IHC staining of 1%-100% is ER-positive and eligible for endocrine therapy
    - Data are more limited for the ER-low-positive (1%-10%) subgroup, which is heterogeneous with reported biologic behavior often similar to ER-negative cancers
    - For ER-low-positive, incorporate individualized consideration of risks versus benefits of endocrine therapy and additional adjuvant therapies into decision-making (BINV-A)
- Germline BRCA1/2 ___ (gbrca)

# pN1mi (2 mm or smaller axillary node metastasis) or pN1 (1-3 positive nodes)

- Determine if candidate for chemotherapy
- If candidate for chemotherapy, consider gene expression assay to assess prognosis (BINV-N)
    - Recurrence score ___ (recurrence_score)
    - In premenopausal patients with recurrence score <26, the addition of chemotherapy to endocrine therapy was associated with a lower rate of distant recurrence compared with endocrine monotherapy
    - It is unclear if that benefit was due to the ovarian suppression effects promoted by chemotherapy
- Not a candidate for chemotherapy
    - Adjuvant endocrine therapy with or without ovarian suppression/ablation (BINV-K)
- Candidate for chemotherapy, either
    - Adjuvant chemotherapy (BINV-M) followed by endocrine therapy with or without ovarian suppression/ablation (BINV-K)
    - or adjuvant endocrine therapy plus ovarian suppression/ablation (BINV-K)
- With any of the above
    - Consider adjuvant abemaciclib or ribociclib for eligible patients, see BINV-K 3 of 4 for eligibility criteria
    - Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# pN2/pN3 (4 or more ipsilateral metastases larger than 2 mm)

- Adjuvant chemotherapy (BINV-M) followed by endocrine therapy with or without ovarian suppression/ablation (BINV-K) (category 1)
- Consider adjuvant abemaciclib or ribociclib for eligible patients, see BINV-K 3 of 4 for eligibility criteria
- Consider adjuvant olaparib if germline BRCA1/2 PV, for eligible patients, see BINV-K 3 of 4 and BINV-M for eligibility criteria
- Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors
- There are few data regarding the role of gene expression assays in those with 4 or more ipsilateral axillary lymph nodes
    - Base the decision to administer adjuvant chemotherapy for this group on clinical factors

# Next

- Adjuvant whole breast RT (BINV-2) or PMRT (BINV-3) as indicated
- See BINV-I for sequencing of systemic therapy and RT
- Follow-up (BINV-17)
