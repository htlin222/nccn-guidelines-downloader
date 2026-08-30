+++
id           = "older_adult/OAO-3"
gid          = "older_adult"
ref          = "OAO-3"
page         = 10
title        = "Pre-treatment evaluation of the older adult, and whether a geriatric assessment is needed before cancer-specific treatment"
nccn_version = "1.2026"
nccn_date    = "02/11/26"
generated    = "2026-08-30"
see_also     = ["OAO-2", "OAO-4", "OAO-7"]

[facets]
disease    = "older_adult"
timepoint  = "workup"
population = "older-adult"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_type"
type = "text"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "values_goals"
type = "text"
[[variables]]
name = "concern_source"
type = "enum"
options = ["patient", "family", "clinician", "none"]
[[variables]]
name = "screening_tool"
type = "text"
[[variables]]
name = "screening_result"
type = "enum"
options = ["normal", "abnormal"]
+++

# Source

- NCCN Older Adult Oncology v1.2026, OAO-3, p10
- Pre-treatment evaluation, before initiation of cancer-specific treatment
- Assessment of the patient's values and goals with regard to the cancer diagnosis should be completed prior to initiation of cancer-specific treatment
- Supportive and palliative care assessment is recommended for any older adult with cancer (OAO-2)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (cancer_type)
- Performance status ___ (performance_status)
- Comorbidities ___ (comorbidities)
- Patient's values and goals with regard to the cancer diagnosis ___ (values_goals)
- Supportive and palliative care assessment completed (OAO-2)

# Concerns about the patient's ability to tolerate cancer-specific treatment

- Concern raised by ___ (concern_source)
    - Concerns can come from the patient, family, or clinician
- Concern related to the patient's performance status
- Concern related to the patient's comorbidities
- No concerns
    - Treat as recommended in disease-specific treatment guidelines (NCCN Guidelines for Treatment by Cancer Type)
- Concerns present
    - Apply geriatric screening tools (OAO-C 1 of 2)

# Geriatric screening

- Screening tool used ___ (screening_tool)
    - Multiple screening tools have been tested and validated in this setting
    - The tools listed on OAO-C 1 of 2 are those that have been used to determine if a GA would be beneficial for older patients with cancer
- Screening result ___ (screening_result)
    - Normal, treat as recommended in disease-specific treatment guidelines (NCCN Guidelines for Treatment by Cancer Type)
    - Abnormal, proceed to Geriatric Assessment (GA) and Interventions (OAO-D 1 of 10)

# Geriatric assessment findings

- Modifiable abnormalities identified
    - Treat abnormalities; see Geriatric Assessment and Interventions (OAO-D 5 of 10)
- Non-modifiable abnormalities identified
    - Ask whether there are alternate treatment options that would reduce toxicity to an acceptable level

# Next

- Treated as recommended in disease-specific treatment guidelines, see Considerations for Older Adults Undergoing Cancer-Specific Treatment (OAO-4) and Management of Common Side Effects in Older Adults Undergoing Cancer-Specific Treatment (OAO-7)
- Non-modifiable abnormalities, alternate treatment options available that reduce toxicity to an acceptable level, see Considerations for Older Adults Undergoing Cancer-Specific Treatment (OAO-4), Management of Common Side Effects in Older Adults Undergoing Cancer-Specific Treatment (OAO-7), and NCCN Guidelines for Supportive Care
- Non-modifiable abnormalities, no alternate treatment options that reduce toxicity to an acceptable level, see NCCN Guidelines for Supportive Care and NCCN Guidelines for Palliative Care
