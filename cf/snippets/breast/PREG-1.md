+++
id           = "breast/PREG-1"
gid          = "breast"
ref          = "PREG-1"
page         = 111
title        = "Workup and primary treatment of breast cancer during pregnancy, by trimester"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["PREG-2"]

[facets]
disease    = "breast"
population = "pregnancy"
timepoint  = ["workup", "primary-treatment", "adjuvant"]
intent     = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "gestational_age"
type = "number"
[[variables]]
name = "trimester"
type = "enum"
options = ["first", "second", "early-third", "late-third"]
+++

# Source

- NCCN Breast Cancer v6.2026, PREG-1, p111
- Applies to a pregnant patient with confirmed breast cancer
- No distant metastases on staging
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pregnant, ___ (gestational_age) weeks
- Trimester at diagnosis: ___ (trimester)
- Confirmed breast cancer
- No distant metastases on staging

# Workup

- Imaging, if indicated
    - CT scans and nuclear imaging (bone scan or PET/CT) and contrast-enhanced MRI are contraindicated during pregnancy
    - Chest x-ray, with abdominal shielding
    - Abdominal ultrasound, to assess liver metastases
    - Consider noncontrast MRI of spine if indicated, to assess for bone metastases
- Assess for distress
    - NCCN Distress Thermometer and Problem List, which includes social determinants of health, see NCCN Guidelines for Distress Management (DIS-A)

# Primary treatment

- Discuss termination
    - Non-therapeutic
    - Continuing pregnancy
- Surgery, by trimester at diagnosis
    - First trimester: mastectomy + axillary staging (see PREG-2)
        - If late first trimester, may consider preoperative chemotherapy in the second trimester
        - Mastectomy may be preferred, particularly for early (first trimester) gestational diagnosis, as early BCS may preclude timely administration of RT
    - Second trimester or early third trimester: mastectomy or BCS + axillary staging (see PREG-2)
        - or preoperative chemotherapy, then mastectomy or BCS + axillary staging (see PREG-2)
    - Late third trimester: mastectomy or BCS + axillary staging (see PREG-2)
    - Weighing mastectomy against BCS
        - Survival outcomes of breast-conservation therapy are equivalent to mastectomy in both non-pregnancy and pregnancy-associated breast cancers
        - Therapeutic RT is generally avoided during pregnancy due to potential risks to the fetus
        - Generally, intervals of 12-16 weeks between treatment modalities (surgery, RT, and chemotherapy) are considered acceptable

# Adjuvant treatment

- First trimester at diagnosis
    - Begin adjuvant chemotherapy in second trimester
    - Plus or minus RT postpartum
    - Plus or minus adjuvant endocrine therapy postpartum (see PREG-2)
- Second trimester or early third trimester at diagnosis, after surgery first
    - Adjuvant chemotherapy
    - Plus or minus RT postpartum
    - Plus or minus adjuvant endocrine therapy postpartum (see PREG-2)
- Second trimester or early third trimester at diagnosis, after preoperative chemotherapy
    - Plus or minus RT postpartum
    - Plus or minus adjuvant endocrine therapy postpartum (see PREG-2)
- Late third trimester at diagnosis
    - Adjuvant chemotherapy
    - Plus or minus RT postpartum
    - Plus or minus adjuvant endocrine therapy postpartum (see PREG-2)

# Next

- Axillary staging, go to PREG-2
- Adjuvant endocrine therapy postpartum, go to PREG-2
