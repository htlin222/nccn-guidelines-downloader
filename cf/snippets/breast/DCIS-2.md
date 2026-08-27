+++
id           = "breast/DCIS-2"
gid          = "breast"
ref          = "DCIS-2"
page         = 13
title        = "Postsurgical risk reduction therapy and surveillance after treatment of DCIS"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["DCIS-1"]

[facets]
disease   = "breast"
histology = "dcis"
stage     = "0"
biomarker = ["hr-positive", "any"]
timepoint = ["adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "er"
type = "text"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "surgery"
type = "enum"
options = ["bcs", "excision-alone", "mastectomy"]
[[variables]]
name = "rt"
type = "enum"
options = ["given", "not-given"]
+++

# Source

- NCCN Breast Cancer v6.2026, DCIS-2, p13
- Applies to DCIS after surgical treatment
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) breast
- DCIS, ER ___ (er)
- ___ (menopausal_status)
- Surgery performed: ___ (surgery)
- Radiation therapy: ___ (rt)

# Risk reduction therapy for ipsilateral breast

- Consider endocrine therapy for 5 years for patients with ER-positive DCIS, if:
    - Treated with BCS and RT (category 1)
    - Treated with excision alone
        - Available data suggest endocrine therapy provides risk reduction in the ipsilateral breast treated with breast conservation, and in the contralateral breast in patients with mastectomy or breast conservation, with ER-positive primary tumors
        - A survival advantage has not been demonstrated, so individual consideration of risks and benefits is important
- Choice of endocrine therapy
    - Tamoxifen for premenopausal patients
    - Tamoxifen or aromatase inhibitor for postmenopausal patients
        - Some advantage for aromatase inhibitor therapy in patients <60 years
        - Some advantage for aromatase inhibitor therapy in patients with concerns for thromboembolism
    - CYP2D6 genotype testing is not recommended for patients considering tamoxifen
    - Low-dose tamoxifen (5 mg per day, or 10 mg every other day, for 3-5 years) is an option
        - If patient is symptomatic on the 20-mg dose
        - If patient is unwilling or unable to take standard-dose 20 mg per day tamoxifen
        - Use 10 mg every other day, since the 5-mg dose is not available in the United States
        - This low dosage needs further investigation in premenopausal individuals
- Bone health, for postmenopausal (natural or induced) patients receiving adjuvant aromatase inhibitor therapy
    - A bisphosphonate (PO/IV) or denosumab is acceptable to maintain or improve bone mineral density (BMD) and reduce risk of fractures
    - Optimal duration of either therapy has not been established
        - Benefit from duration beyond 3 years, and the optimal duration beyond 3 years, is not known
        - Factors to consider for duration: BMD, response to therapy, risk factors for continued bone loss or fracture
    - There are case reports of spontaneous fractures after denosumab discontinuation
    - Patients treated with a bisphosphonate or denosumab should undergo a dental examination with preventive dentistry prior to the initiation of therapy
    - Patients treated with a bisphosphonate or denosumab should take supplemental calcium and vitamin D

# Risk reduction therapy for contralateral breast

- Counseling regarding risk reduction

# Surveillance and follow-up

- Interval history and physical exam every 6-12 mo for 5 y, then annually
- First mammogram at 6-12 mo
    - After the end of RT, if RT was given
    - After BCS if no RT is given (category 2B)
    - Annually thereafter
