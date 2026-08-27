+++
id           = "breast/BINV-1"
gid          = "breast"
ref          = "BINV-1"
page         = 14
title        = "Workup and clinical stage assignment for localized invasive breast cancer"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-L", "BINV-2", "BINV-3", "BINV-12", "BINV-18", "BINV-A", "BINV-B", "BINV-C"]

[facets]
disease   = "breast"
histology = "any"
stage     = ["I", "II", "III"]
biomarker = ["tnbc", "any"]
timepoint = ["workup", "staging"]
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
name = "grade"
type = "enum"
options = ["1", "2", "3"]
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "ctnm"
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
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-1, p14
- Applies to localized breast cancer: invasive, non-inflammatory, non-metastatic (M0)
- All recommendations category 2A unless otherwise indicated
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology), grade ___ (grade)
- ___ (menopausal_status)
- ___ (ctnm)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)

# Workup

- History and physical exam
- Imaging
    - Diagnostic bilateral mammogram
    - Breast ultrasound as necessary
    - Axillary ultrasound, if considering omission of surgical nodal staging
        - Omission of SLNB may be considered, based on SOUND and INSEMA trials, in patients >50 years and postmenopausal, with cT1N0 (node negative by axillary ultrasound), HR+/HER2-negative, grade 1-2 tumors, who are agreeable to receiving whole breast RT and endocrine therapy
        - Caution should be used in those with lobular histology
    - Breast MRI (optional), with special consideration for mammographically occult tumors
        - May be useful for characterizing axillary and/or internal mammary nodal disease (BINV-B)
- Pathology review
    - Report per the College of American Pathologists Protocol for pathology reporting for all invasive and noninvasive carcinomas of the breast
- Estrogen/progesterone receptor (ER/PR) status and HER2 status
    - Principles of Biomarker Testing (BINV-A)
- Genetic counseling and testing if any of the following
    - At risk for hereditary breast cancer, per NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Triple-negative breast cancer (TNBC), at any age
    - Candidate for adjuvant olaparib
- Address fertility and sexual health concerns as appropriate
    - For Fertility, Birth Control, and Sexual Health, see BINV-C
- Pregnancy test in all patients of childbearing potential
    - If pregnant, see PREG-1
- Assess for distress
    - NCCN Distress Thermometer and Problem List, which includes social determinants of health (DIS-A)
- Consider additional imaging studies only in the presence of signs and symptoms of metastatic disease, and for patients who are clinically high risk (BINV-18)
    - Routine systemic staging is not indicated for non-metastatic (M0) cancer in the absence of systemic symptoms
    - If metastatic disease is suspected, see Workup on BINV-18
- Consider baseline lymphedema screening, as per NCCN Guidelines for Survivorship

# Clinical stage

- cT0, cN+, M0
- cT1-T4, ≥cN0, M0
    - Assess criteria for preoperative systemic therapy (BINV-L)
- Inflammatory breast cancer (IBC)
- Stage IV (M1) or recurrent disease

# Next

- cT0, cN+, M0, see NCCN Guidelines for Occult Primary
- cT1-T4, ≥cN0, M0, not considering preoperative systemic therapy, locoregional treatment
    - BCS ± surgical axillary staging ± RT (BINV-2), or
    - Mastectomy + surgical axillary staging ± postmastectomy RT (PMRT) (BINV-3)
    - With a known genetic predisposition to breast cancer, risk of contralateral or ipsilateral breast cancers after breast-conservation therapy may be increased; discuss risk reduction strategies including prophylactic mastectomies
- cT1-T4, ≥cN0, M0, considering preoperative systemic therapy, go to BINV-12
- Inflammatory breast cancer, go to IBC-1
- Stage IV (M1) or recurrent disease, go to BINV-18
