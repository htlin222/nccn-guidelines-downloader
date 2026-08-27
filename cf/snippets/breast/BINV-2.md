+++
id           = "breast/BINV-2"
gid          = "breast"
ref          = "BINV-2"
page         = 15
title        = "Locoregional treatment of cT1-3, cN0 or cN+, M0 disease by breast-conserving surgery and RT"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-4", "BINV-D", "BINV-E", "BINV-F", "BINV-G", "BINV-I", "BINV-J", "BINV-K"]

[facets]
disease   = "breast"
histology = "any"
stage     = ["I", "II", "III"]
biomarker = ["hr-positive", "hr-negative", "her2-negative"]
timepoint = ["primary-treatment", "adjuvant"]
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
name = "ctnm"
type = "text"
[[variables]]
name = "hr"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "pt"
type = "text"
[[variables]]
name = "pn"
type = "text"
[[variables]]
name = "positive_slns"
type = "number"
[[variables]]
name = "preop_chemo"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-2, p15
- Locoregional treatment of cT1-3, cN0 or cN+, M0 disease: breast-conserving surgery (BCS) with or without RT
- Special Considerations for Breast Cancer in Males (Sex Assigned at Birth): BINV-J
- For tools to aid optimal assessment and comprehensive care of older adults, see NCCN Guidelines for Older Adult Oncology
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- ___ (histology)
- ___ (ctnm)
- HR ___ (hr) / HER2 ___ (her2)
- Grade ___ (grade)
- ___ (menopausal_status)
- pT ___ (pt)
- Pathologic nodal status pN ___ (pn)
- Positive sentinel lymph nodes ___ (positive_slns)
- Preoperative chemotherapy given ___ (preop_chemo)

# Surgery

- BCS
    - Contraindications to Breast-Conserving Approaches Requiring RT (BINV-G)
    - Patients with a known genetic predisposition to breast cancer may have an increased risk of contralateral or ipsilateral breast cancers after breast-conservation therapy
        - Discuss risk reduction strategies including prophylactic mastectomies, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - For patients >40 years of age with 2 biopsy-proven cTis-cT2 lesions (with at least one invasive site) after MRI evaluation, intending on adjuvant whole breast radiation plus boost, breast-conservation therapy may be considered (BINV-G)
- Surgical axillary staging, optional (category 1)
    - Considerations for Surgical Axillary Staging (BINV-D)
    - Axillary Lymph Node Staging (BINV-E) and Margin Status Recommendations After BCS for Invasive Cancers and DCIS (BINV-F)
    - Omission of SLNB may be considered, based on SOUND and INSEMA trials, in patients >50 years and postmenopausal with cT1N0 (node negative by axillary ultrasound), HR+/HER2-negative, grade 1-2 tumors who are agreeable to receiving whole breast RT and endocrine therapy
        - Caution should be used in those with lobular histology
- Oncoplastic reconstruction, optional
    - Includes techniques such as local tissue rearrangement, local flaps, regional flaps, breast reduction, and mastopexy, to allow for greater volumes of resection while optimizing aesthetic outcomes in patients undergoing BCS

# RT if pN0

- Whole breast RT with or without boost to tumor bed (BINV-I)
    - Consider comprehensive regional nodal irradiation (RNI) in patients with central/medial tumors, pT3 tumors, or pT2 tumors and one of the following high-risk features
        - Grade 3
        - Extensive lymphovascular invasion (LVI)
        - Hormone-receptor (HR)-negative, for definition of HR-positive see Principles of Endocrine Therapy (BINV-K)
- or consider APBI/PBI for appropriately selected patients who are low risk pN0 or cN0 (category 1)
    - Nodal status determined by surgery, clinical findings, or radiographic imaging
    - Principles of Radiation Therapy (BINV-I)
    - APBI/PBI may be administered prior to chemotherapy
- or consider omitting breast irradiation if adjuvant endocrine therapy is planned and the following criteria are met (category 1)
    - Age 70 y or older, HR+, HER2-negative, cN0, pT1 (2 cm or less)
        - For definition of HR-positive, see Principles of Endocrine Therapy (BINV-K)
        - Based on data from the Europa trial, older patients eligible for omission of RT may choose to receive RT alone instead of endocrine therapy with no adverse effects on early breast cancer outcomes
    - Age 65 y or older, HR+, HER2-negative, pN0, pT 3 cm or less
        - For definition of HR-positive, see Principles of Endocrine Therapy (BINV-K)

# RT if pN1a (1-3 positive nodes)

- Meets ALL of the following criteria
    - cT1-T3, cN0 (category 1)
    - No preoperative chemotherapy
    - 1-2 positive sentinel lymph nodes (SLNs)
    - Whole breast RT planned
- Yes to all criteria: whole breast RT with or without boost
    - Use of comprehensive RNI with or without intentional inclusion of axilla at the discretion of the radiation oncologist
- No: whole breast RT with inclusion of any portion of the undissected axilla at risk, with or without boost to tumor bed (category 1)
    - Strongly consider comprehensive RNI
    - Principles of Radiation Therapy (BINV-I)

# RT if pN2-3 (4 or more positive axillary nodes)

- Whole breast RT with or without boost to tumor bed (category 1) (BINV-I)
- Comprehensive RNI, including any portion of the undissected axilla at risk (category 1)
- Consider imaging for systemic staging
    - Chest/abdomen with or without pelvis diagnostic CT with contrast
    - Bone scan
    - FDG-PET/CT, optional

# Next

- See BINV-4 to determine whether adjuvant systemic therapy is indicated
- RT is typically given after systemic therapy
- See BINV-I for sequencing of systemic therapy and RT
