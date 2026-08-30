+++
id           = "lung_screening/LCS-1"
gid          = "lung_screening"
ref          = "LCS-1"
page         = 6
title        = "Risk assessment to decide whether to offer low-dose CT lung cancer screening"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1A", "LCS-2"]

[facets]
disease   = "lung_screening"
timepoint = "screening"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "smoking_status"
type = "enum"
options = ["currently smokes", "previously smoked", "never smoked"]
[[variables]]
name = "pack_years"
type = "number"
[[variables]]
name = "years_smoked"
type = "number"
[[variables]]
name = "time_since_cessation"
type = "text"
[[variables]]
name = "radon"
type = "text"
[[variables]]
name = "occupational"
type = "text"
[[variables]]
name = "cancer_history"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "lung_disease"
type = "text"
[[variables]]
name = "second_hand_smoke"
type = "text"
[[variables]]
name = "risk_calculator"
type = "text"
[[variables]]
name = "functional_status"
type = "text"
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-1, p6
- Risk assessment, and the decision whether to screen with low-dose CT
- Screening with LDCT is appropriate to consider for individuals at higher risk for cancer who are potential candidates for curative-intent treatment
    - Chest x-ray is not recommended for lung cancer screening
- Institutions performing lung cancer screening should use a multidisciplinary approach for nodule management
    - Thoracic radiology, pulmonary medicine, and thoracic surgery
    - Some institutions also include medical oncology, radiation oncology, and/or pathology
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)
- Footnotes on LCS-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Cigarette smoking history: ___ (smoking_status)
    - ___ (pack_years) pack-years, being the number of packs smoked every day multiplied by the number of years
    - ___ (years_smoked) years of smoking cigarettes
    - Time since smoking cessation in individuals who previously smoked: ___ (time_since_cessation)
    - All individuals who currently use tobacco should be offered support and resources to help them reduce or quit smoking
    - Individuals who have previously used tobacco should be recognized for their commitment and offered continued support to remain tobacco-free (https://www.smokefree.gov)
- Radon exposure: ___ (radon)
    - Documented sustained and substantially elevated radon exposure increases the risk for lung cancer
    - Many state websites have information more specific to local areas, including areas of known elevated radon
- Occupational exposure: ___ (occupational)
    - Agents identified specifically as carcinogens targeting the lungs: arsenic, asbestos, beryllium, cadmium, chromium, coal smoke, diesel fumes, nickel, silica, soot, and uranium
- Cancer history: ___ (cancer_history)
    - Increased risk of developing new primary lung cancer among survivors of lymphoma, breast cancer, head and neck cancer, or other smoking tobacco-related cancers
    - Also increased in those who have received radiation treatment to the chest
- Family history of lung cancer in first-degree relatives: ___ (family_history)
- Disease history, chronic obstructive pulmonary disease (COPD) or pulmonary fibrosis: ___ (lung_disease)
- Cigarette smoking exposure, second-hand smoke: ___ (second_hand_smoke)
    - Exposure to the carcinogens is highly variable, with varying evidence for increased risk
    - Second-hand smoke is not independently considered a risk factor sufficient for recommending lung cancer screening
- Risk calculator to enhance determination of risk status: ___ (risk_calculator)
    - NCCN encourages providers to consider using risk calculators, if possible, because additional candidates at higher risk for lung cancer may be identified for lung screening
    - See PLCOm2012 Lung Cancer Risk Calculator (https://www.evidencio.com/models/show/992)
    - Reasonable to consider the Tammemagi lung cancer risk calculator to assist in quantifying risk in this group, taking a 1.3% threshold of lung cancer risk over a 6-year timeframe as similar to that of the USPSTF
    - Use of risk models may identify individuals with a lower risk or higher risk within the current recommendations
- Functional status and comorbidity: ___ (functional_status)

# Higher risk

- Age ≥50 y (category 1), and
- ≥20 pack-year history of smoking cigarettes (category 1), or
- ≥20-year history of smoking cigarettes (category 2B)
- Randomized trial evidence supports screening up to age 77 years, and there is uncertainty about the upper age limit to initiate or continue screening
    - One can consider screening beyond age 77 years as long as individual functional status and comorbidity allow consideration for curative intent therapy
- Black and African American individuals with less cigarette smoking exposure have a similar risk for lung cancer as white individuals with more cigarette smoking exposure
    - This increased risk should be considered in shared decision-making and risk assessment

# Lower risk

- Age <50 y, and/or
- <20 pack-year history of smoking cigarettes, or <20-year history of smoking cigarettes (category 2B)

# Not eligible for lung cancer screening

- Symptoms of lung cancer, see NCCN Guidelines for Non-Small Cell Lung Cancer
- Previous lung cancer, see Surveillance in the NCCN Guidelines for Non-Small Cell Lung Cancer
- Functional status and/or comorbidity that would prohibit curative intent treatment
    - Curative intent treatment includes surgery and stereotactic ablative radiotherapy (SABR), also known as stereotactic body radiation therapy (SBRT)
    - Image-guided thermal ablation (IGTA) techniques, such as radiofrequency ablation, microwave ablation, and cryoablation, are additional alternatives for curative intent treatment
    - SABR or IGTA may be used for individuals with advanced age and individuals with cardiac disease or severe COPD who are unable to have surgery, and these factors themselves do not preclude eligibility for screening
    - See Principles of Surgery and Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer
- Likely near-future competing cause of death

# Screening

- In candidates for screening, a discussion of benefits/risks is recommended
    - Although age and smoking history are used for risk assessment, other potential risk factors for lung cancer may be considered during the discussion of benefits and risks
    - Occupational exposure, radon exposure, cancer history, family history, lung disease history
    - Shared decision-making aids may assist in counseling individuals about the risks and benefits of screening
    - Examples of decision-making aids: http://www.shouldiscreen.com/benefits-and-harms-screening
- Low-dose CT (LDCT) (category 1)
    - All screening and follow-up chest CT scans should use a CT dose index volume (CTDIvol) threshold of ≤3 mGy for an individual of average size
    - Standard-dose CT with IV contrast might be appropriate when evaluating mediastinal abnormalities or lymph nodes (LCS-A)
    - Parameters should be adjusted for individuals of smaller or larger size
    - There should be a systematic process for appropriate follow-up
    - Use of a tracking tool, in addition to a navigation process, is recommended to systematically ensure that individuals with screen-detected lung nodules complete guideline-concordant nodule management, and that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# Next

- Higher risk, and a candidate for screening, LDCT performed, go to Screening Findings (LCS-2)
- Lower risk, lung cancer screening not recommended
