+++
id           = "colorectal_screening/CSCR-5"
gid          = "colorectal_screening"
ref          = "CSCR-5"
page         = 16
title        = "Stool-based screening: modality, schedule, and what to do with the result"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-1A", "CSCR-3", "CSCR-4", "CSCR-7A"]

[facets]
disease   = "colorectal_screening"
timepoint = "screening"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "stool_test"
type = "enum"
options = ["guaiac", "fit", "mt-sdna", "mt-srna"]
[[variables]]
name = "test_date"
type = "text"
[[variables]]
name = "result"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "next_due"
type = "text"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-5, p16
- Applies to stool-based screening in individuals whose risk status is average risk (CSCR-1)
    - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas, rather than high-risk adenomas, a definition that includes multiplicity
- For details on classification, see footnote c on CSCR-1A
- For definitions of commonly used terms, see CSRC-GLOS 1 of 7
- Footnotes on CSCR-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, average risk (CSCR-1)
- Estimated life expectancy ___ (life_expectancy)
- Stool-based test used: ___ (stool_test)
- Date of test ___ (test_date)
- Result: ___ (result)
- Symptoms or signs present: ___ (symptoms)

# Eligibility and shared decision-making before ordering

- CRC screening is recommended in adults aged 45–75 years who might have a life expectancy of ≥10 years
- Age 76–85 years: individualize the decision, with a discussion of the risks and benefits based on comorbidity status and estimated life expectancy
    - Eligible individuals who have not been previously screened are most likely to benefit in this age group
- Age <50 years, average risk
    - The Panel agrees the data are stronger to support beginning screening at 50 years
    - The Panel acknowledges that lower-level evidence supports a benefit for screening earlier
- When initiating screening for all eligible individuals
    - Discuss potential harms/risks and benefits
    - Consider all recommended CRC screening options
- Screening should be individualized and include a discussion of the risks and benefits of each modality
    - See Screening Modality and Schedule (CSCR-A)

# Stool-based screening modality

- Guaiac-based testing
- Fecal immunochemical test (FIT)
    - FIT has been shown to have superior sensitivity to guaiac-based tests
    - Guaiac-based fecal occult blood test (FOBT) screening has been shown to reduce mortality from CRC
    - Both FOBT- and FIT-based stool tests can be considered as alternatives to mt-sDNA based on accessibility
- or
- Multi-target stool DNA (mt-sDNA)–based testing
- Multi-target stool RNA (mt-sRNA)–based testing

# Evaluation of screening findings

- Negative after guaiac-based testing or FIT
    - Rescreen with any modality in 1 y
    - Rescreening should be individualized and include a discussion of the risks and benefits of each modality
- Negative after mt-sDNA– or mt-sRNA–based testing
    - Rescreen with any modality in 3 y
    - Rescreening should be individualized and include a discussion of the risks and benefits of each modality
- Positive
    - Colonoscopy as soon as possible and no later than within 9 months
    - When a screening stool-based test is positive, a colonoscopy is recommended for further evaluation
    - Recommendations for an appropriate time frame for follow-up colonoscopy in this population lack a strong evidence base
        - A large observational study and a meta-analysis reported significantly higher risks for CRC and advanced-stage disease when follow-up occurred 10 months or later
        - A trend towards increased cancer risk was observed as early as 6 months after an abnormal result
    - If colonoscopy is incomplete or the preparation is suboptimal, repeat it as soon as possible and no later than 1 year after the index procedure
    - For patients who have had incomplete colonoscopy, consider CTC or balloon-assisted colonoscopy or capsule colonoscopy as alternative exams for completing the screening

# Colonoscopy negative after a positive stool test

- Patients can return to average-risk screening intervals beginning at 10 years after the colonoscopy, if all of the following hold
    - The positive test was FIT or mt-sDNA or mt-sRNA
    - The colonoscopy is negative
    - No symptoms are present
    - The colonoscopy was a high-quality examination
- This interval could be modified based on the presence of symptoms or signs, or additional CRC risk factors such as family history
- Next screening due: ___ (next_due)

# Next

- Negative stool test, rescreen with any modality at the interval above
- Positive stool test, go to colonoscopy and follow the colonoscopy pathway (CSCR-4)
