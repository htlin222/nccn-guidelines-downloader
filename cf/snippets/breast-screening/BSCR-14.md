+++
id           = "breast-screening/BSCR-14"
gid          = "breast-screening"
ref          = "BSCR-14"
page         = 22
title        = "Presentation of signs/symptoms in individuals assigned male at birth"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-6", "BSCR-7", "BSCR-9", "BSCR-15"]

[facets]
disease    = "breast-screening"
timepoint  = ["screening", "diagnosis"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "presentation"
type = "enum"
options = ["bilateral-enlargement", "asymmetric-gynecomastia", "palpable-symptom", "bloody-nipple-discharge"]
[[variables]]
name = "symptom_duration"
type = "text"
[[variables]]
name = "presumed_cause"
type = "enum"
options = ["drug-induced", "hypogonadism", "hyperthyroidism", "idiopathic"]
[[variables]]
name = "physical_findings"
type = "text"
[[variables]]
name = "birads"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-14, p22
- Applies to presentation of signs/symptoms in individuals assigned male at birth
- See NCCN Guidelines for Breast Cancer for management and special considerations for breast cancer in individuals AMAB
- Mammogram generally not performed prior to age 25 years for individuals AMAB
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Presenting sign/symptom ___ (presentation)
- Duration of symptom ___ (symptom_duration)
- Physical findings ___ (physical_findings)
- Presumed cause of gynecomastia ___ (presumed_cause)
- Age relative to 25 years, since mammogram is generally not performed prior to age 25 years for individuals AMAB

# Diagnostic evaluation

- Bilateral breast enlargement consistent with gynecomastia or pseudogynecomastia
    - Reassurance with clinical management
        - Clinical management depends on the presumed cause (drug-induced, hypogonadism, hyperthyroidism, idiopathic), age of patient, duration, and presence of symptoms
- Presumed asymmetric gynecomastia
    - Diagnostic mammogram with tomosynthesis
        - Mammogram generally not performed prior to age 25 years for individuals AMAB
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - With or without ultrasound
- Palpable symptom not explained by gynecomastia, or bloody nipple discharge
    - Diagnostic mammogram with tomosynthesis
        - Mammogram generally not performed prior to age 25 years for individuals AMAB
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - Plus ultrasound

# Follow-up evaluation after imaging

- BI-RADS category recorded ___ (birads)
- BI-RADS category 1–3 (negative/benign/probably benign)
    - Clinical management
        - Depends on the presumed cause (drug-induced, hypogonadism, hyperthyroidism, idiopathic), age of patient, duration, and presence of symptoms
        - Consider surgical referral for suspicious clinical findings
    - See BSCR-7 if BI-RADS category 3
- BI-RADS category 4–5 (suspicious/highly suggestive of malignancy)
    - Core needle biopsy

# Next

- BI-RADS category 3, go to BSCR-7
- BI-RADS category 4–5, core needle biopsy, go to BSCR-15
