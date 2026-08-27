+++
id           = "breast/BINV-16"
gid          = "breast"
ref          = "BINV-16"
page         = 29
title        = "Adjuvant systemic therapy after preoperative systemic therapy, by response and subtype"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-17", "BINV-K", "BINV-M", "BINV-J"]

[facets]
disease   = "breast"
biomarker = ["hr-positive", "hr-negative", "her2-positive", "her2-negative", "brca"]
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
name = "hr"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "preop_regimen"
type = "text"
[[variables]]
name = "yp_stage"
type = "text"
[[variables]]
name = "initial_node_status"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "germline_brca"
type = "enum"
options = ["positive", "negative", "not tested"]
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-16, p29
- Applies after preoperative systemic therapy, choosing adjuvant therapy by response/pathologic stage and by receptor subtype
- Adjuvant endocrine and CDK4/6 inhibitor therapy, and principles of adjuvant endocrine therapy: BINV-K
- Preoperative/adjuvant therapy regimens: BINV-M
- Special considerations for breast cancer in males (sex assigned at birth): BINV-J
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- HR ___ (hr) / HER2 ___ (her2)
- Preoperative regimen given: ___ (preop_regimen)
- Response/pathologic stage after preoperative therapy: ___ (yp_stage)
- Node status at initial staging: ___ (initial_node_status)
- Germline BRCA1/2 pathogenic variant: ___ (germline_brca)
- Menopausal status: ___ (menopausal_status)

# HR-positive / HER2-negative

- ypT0N0 or pCR
    - Adjuvant endocrine therapy (category 1)
    - Consider ribociclib for eligible patients, see BINV-K 2 of 4 for eligibility criteria
- ypT1-4,N0 or ypN>=1
    - Adjuvant endocrine therapy (category 1)
    - Adjuvant olaparib if germline BRCA1/2 PV (category 1)
    - Consider adjuvant abemaciclib or ribociclib for eligible patients, see BINV-K 2 of 4 for eligibility criteria

# HR-negative / HER2-positive

- ypT0N0 or pCR
    - Complete up to 1 year of HER2-targeted therapy with trastuzumab (category 1), with or without pertuzumab
    - If node positive at initial staging, pertuzumab + trastuzumab (category 1)

# HR-positive / HER2-positive

- ypT0N0 or pCR
    - Endocrine therapy (category 1)
    - Complete up to 1 year of HER2-directed therapy with trastuzumab (category 1), with or without pertuzumab
    - If node positive at initial staging, pertuzumab + trastuzumab (category 1)

# HER2-positive, ypT1-4,N0 or ypN>=1

- Fam-trastuzumab deruxtecan-nxki (category 1) for those with high risk of recurrence
- Or ado-trastuzumab emtansine (category 1)
    - Does not apply to residual DCIS (ypTis)
    - If ado-trastuzumab emtansine discontinued for toxicity, then complete up to 1 year of HER2-directed therapy with trastuzumab (category 1), with or without pertuzumab
    - If node positive at initial staging, pertuzumab + trastuzumab (category 1)
        - Updated APHINITY results at a median follow-up of 11.3 years confirmed the benefit of adding pertuzumab to trastuzumab plus chemotherapy in preventing recurrences
- And if HR-positive, adjuvant endocrine therapy (category 1)
    - Consider extended adjuvant neratinib following adjuvant trastuzumab-containing therapy for HR-positive, HER2-positive disease with a perceived high risk of recurrence
    - Benefit or toxicities of extended neratinib after pertuzumab or ado-trastuzumab emtansine is unknown

# HR-negative / HER2-negative

- ypT0N0 or pCR
    - For high risk: adjuvant pembrolizumab, if a pembrolizumab-containing regimen was given preoperatively
- ypT1-4,N0 or ypN>=1
    - Adjuvant pembrolizumab, if a pembrolizumab-containing regimen was given preoperatively (category 1)
    - And/or adjuvant capecitabine (6-8 cycles)
        - Does not apply to residual DCIS (ypTis)
    - And/or adjuvant olaparib for 1 year if germline BRCA1/2 PV (category 1)
    - No data on sequencing or combining adjuvant pembrolizumab with capecitabine or olaparib in patients meeting criteria for more than one; sequential/combined use may be considered given high risk of recurrence with residual disease

# Consider for all subtypes

- Consider adjuvant bisphosphonate therapy for risk reduction of distant metastasis for 3-5 years, in postmenopausal patients (natural or induced) with high-risk node-negative or node-positive tumors

# Next

- Follow-up, go to BINV-17
