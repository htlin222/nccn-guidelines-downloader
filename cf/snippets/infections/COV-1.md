+++
id           = "infections/COV-1"
gid          = "infections"
ref          = "COV-1"
page         = 54
title        = "Cancer-directed therapy for a patient with significant exposure to SARS-CoV-2"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["COV-A"]

[facets]
disease   = "infections"
timepoint = "supportive"

[[variables]]
name = "exposure_date"
type = "text"
[[variables]]
name = "days_since_exposure"
type = "number"
[[variables]]
name = "contact_type"
type = "text"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "malignancy_status"
type = "text"
[[variables]]
name = "planned_therapy"
type = "text"
+++

# Source

- NCCN Guidelines Version 1.2026, COV-1, p54
- Table 1: considerations for cancer-directed therapy in patients with significant exposure to SARS-CoV-2
- Table 1 references: COV-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Date of significant exposure to SARS-CoV-2: ___ (exposure_date)
- Days since exposure: ___ (days_since_exposure)
- Type of contact: ___ (contact_type)
- Symptoms: ___ (symptom_status)
- Type and status of malignancy: ___ (malignancy_status)
- Cancer-directed therapy planned: ___ (planned_therapy)

# Risk of transmission after significant exposure

- The exact risk of viral transmission after significant exposure to SARS-CoV-2 is unknown
- Risk depends upon many variables
    - Symptoms of the infected person
    - Duration of contact
    - Proximity of contact
    - Room ventilation
    - Host susceptibility
    - Viral variant
- Household contacts pose the highest risk of SARS-CoV-2 transmission
- If viral transmission occurs to the patient, the upper bound of the COVID-19 incubation period is 14 days

# Duration of delay of cancer-directed therapy

- The duration of the delay depends on
    - Type of malignancy
    - Status of malignancy
    - Risk of cancer relapse and progression as a result of delaying therapy

# Next

- Asymptomatic patient after significant exposure to SARS-CoV-2: delay cancer-directed therapy for 14 days since exposure, if possible
- Cancer-directed therapy urgently required due to uncontrolled cancer: administer at the judgment of the oncologist
