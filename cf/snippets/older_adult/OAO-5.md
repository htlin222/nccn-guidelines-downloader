+++
id           = "older_adult/OAO-5"
gid          = "older_adult"
ref          = "OAO-5"
page         = 12
title        = "Considerations for older adults undergoing radiation therapy or chemotherapy"
nccn_version = "1.2026"
nccn_date    = "02/11/26"
generated    = "2026-08-30"
see_also     = ["OAO-2"]

[facets]
disease    = "older_adult"
population = "older-adult"
timepoint  = ["primary-treatment", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_type"
type = "text"
[[variables]]
name = "planned_modality"
type = "enum"
options = ["rt", "chemotherapy", "chemoradiation"]
[[variables]]
name = "rt_site"
type = "text"
[[variables]]
name = "rt_dose_fractionation"
type = "text"
[[variables]]
name = "frailty_mobility"
type = "text"
[[variables]]
name = "goals_of_care"
type = "text"
+++

# Source

- NCCN Older Adult Oncology v1.2026, OAO-5, p12
- Applies to older adults undergoing cancer-specific treatment
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- ___ (cancer_type)
- Planned treatment: ___ (planned_modality)
- Assessment of the patient's values and goals with regard to cancer diagnosis, completed prior to initiation of cancer-specific treatment
    - ___ (goals_of_care)
- Supportive and palliative care assessment, recommended for any older adult with cancer (OAO-2)

# Radiation therapy (RT)

- Anatomic site being radiated: ___ (rt_site)
- Dose/fractionation chosen: ___ (rt_dose_fractionation)
- Improvements in RT techniques have improved the tolerability and therapeutic ratio of RT in older adults
    - Intensity-modulated RT (IMRT)
    - Image-guided RT (IGRT)
    - Stereotactic ablative radiotherapy (SABR)
- Considerations of older patients undergoing RT should be informed by the benefits versus risks, based on the anatomic site being radiated and the dose/fractionation chosen
    - Chronologic age by itself should not exclude patients from evaluation for curative RT
- Use caution with concurrent chemoradiation therapy
    - Dose or sequence modification of chemotherapy or chemoradiation may be necessary
    - Additional supportive services may be necessary
    - More frequent monitoring may be necessary
    - See disease-specific NCCN Guidelines for Treatment by Cancer Type
- Hypofractionation and SABR may be considered to decrease the number of treatments
    - Especially in patients who are frail and/or less mobile: ___ (frailty_mobility)
- Local ablative RT should be considered as an adjunct or alternative therapy in older adults

# Chemotherapy

- Consider use of chemotherapy toxicity risk calculators where validated, to estimate toxicity and determine
    - Dose adjustments
    - Additional supportive services
    - More frequent monitoring
    - Geriatric assessment as necessary
- Cancer and Aging Research Group (CARG) Chemo Toxicity Calculator
    - http://www.mycarg.org/Chemo_Toxicity_Calculator
- Chemotherapy Risk Assessment Scale for High-Age Patients (CRASH) score
    - https://www.mdcalc.com/calc/10425/chemotherapy-risk-assessment-scale-high-age-patients-crash-score
- Cancer and Aging Research Group-Breast Cancer (CARG-BC) score for older adults
    - For adjuvant/neoadjuvant therapy only
    - https://www.cancercalc.com/carg_bc.php
