+++
id           = "mcc/MCC-6"
gid          = "mcc"
ref          = "MCC-6"
page         = 13
title        = "Follow-up after treatment, and treatment of recurrent disease"
nccn_version = "2.2026"
nccn_date    = "10/24/2025"
generated    = "2026-08-27"
see_also     = ["MCC-4", "MCC-5"]

[facets]
disease   = "mcc"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "time_since_treatment"
type = "text"
[[variables]]
name = "immunosuppressed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mcpyv_serostatus"
type = "enum"
options = ["seropositive", "seronegative", "not tested"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["no evidence of disease", "local", "locally advanced", "regional", "in-transit", "disseminated"]
+++

# Source

- NCCN Merkel Cell Carcinoma v2.2026, MCC-6, p13
- Covers follow-up after treatment, and treatment of recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary lesion site ___ (primary_site)
- Stage ___ (stage)
- Time since treatment ___ (time_since_treatment)
- Immunosuppressed ___ (immunosuppressed)
- MCPyV oncoprotein antibody status ___ (mcpyv_serostatus)
- Current disease status ___ (disease_status)

# Follow-up visits

- Physical exam including complete skin exam and complete LN exam
    - Every 3–6 mo for 3 y
    - Every 6–12 mo thereafter
- Minimize immunosuppressive treatments as clinically feasible, in consultation with the relevant managing physician, as immunosuppression in MCC is a risk factor for poor outcomes
- More frequent follow-up may be indicated for patients who are immunocompromised, as they are at high risk for recurrence

# Imaging and other studies as clinically indicated

- Recommend routine imaging surveillance for patients at high risk
    - Risk factors for recurrence
        - Immunosuppression
        - Advancing age
        - Advancing stage of disease (stage II–IV)
        - Non-SLN metastases
        - Merkel cell polyomavirus negative status
        - Additional factors as determined by the treating physicians
- Surveillance imaging is typically diagnostic CT of chest/abdomen/pelvis with oral and IV contrast
    - Neck CT is often included if the primary lesion was on head/neck
    - Whole-body FDG-PET/CT may be indicated to evaluate for in-transit metastases if the primary lesion is on the extremity
- Quantitation of serum MCPyV oncoprotein antibodies
    - May be considered as part of initial workup
    - Patients who test seronegative have a higher risk of recurrence
    - In patients who test seropositive, a rising titer may be an early indicator of recurrence
    - Baseline testing should be performed within 3 months of treatment, because titers are expected to decrease significantly after clinically evident disease is eliminated
    - For surveillance, this test is often obtained every 3 months
- ctDNA
    - Can assess disease burden in both virus-positive and virus-negative MCC
    - Typically becomes positive prior to or at the time of a clinically evident recurrence
    - For surveillance, this test is often obtained every 3 months

# Treatment of local, locally advanced, and/or regional recurrence

- Clinical trial preferred if available
- Or consider any of the following therapies
    - Systemic therapy, see Principles of Systemic Therapy (MCC-D)
    - RT, see Principles of Radiation Therapy (MCC-B)
        - Appropriateness of RT should be determined together with a radiation oncologist
    - Surgery
        - Under highly selective circumstances, in the context of multidisciplinary consultation, resection of limited metastases can be considered
- Or best supportive care, see NCCN Guidelines for Palliative Care

# Next

- Local, locally advanced, and/or regional recurrence, treat as above
- In-transit disease, go to MCC-4
- Disseminated recurrence, go to Treatment of M1 Disease (MCC-5)
