+++
id           = "cutaneous_lymphomas/MFSS-6"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-6"
page         = 25
title        = "Treatment and response assessment for stage IA mycosis fungoides with limited skin involvement alone"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-7", "MFSS-12"]

[facets]
disease   = "cutaneous_lymphomas"
stage     = "I"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "bsa_pct"
type = "number"
[[variables]]
name = "lesion_sites"
type = "text"
[[variables]]
name = "unilesional"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "current_therapy"
type = "text"
[[variables]]
name = "prior_therapies"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["complete response", "partial response", "inadequate response", "relapse", "progression"]
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-6, p25
- Applies to stage IA, limited skin involvement alone, <10% BSA
- Entered from clinical staging (MFSS-3 and MFSS-4)
- Principles for Mycosis Fungoides/Sezary Syndrome (MFSS/INTRO-1)
- General Considerations for the Treatment of Patients with MF and SS (MFSS-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Skin involvement ___ (bsa_pct) % BSA, limited skin involvement alone, <10% BSA
- Lesion sites ___ (lesion_sites)
- Confirmed unilesional MF ___ (unilesional)
- Current treatment ___ (current_therapy)
- Previous therapies ___ (prior_therapies)
- Rebiopsy if large cell transformation (LCT) is suspected
    - If histologic evidence of LCT, see MFSS-12

# Treatment

- Treat per Table 1: Stage IA MF (limited skin involvement alone; <10% BSA)
- In rare cases of confirmed unilesional MF, RT has been shown to provide long-term remission

# Response assessment

- Current response ___ (response)
- Complete response / partial response (CR/PR)
    - Patients with disease achieving a clinical benefit and/or those with disease responding to primary treatment should be considered for maintenance or tapering of regimens to optimize response duration
- Inadequate response
- Relapse with T1 skin disease
- Relapse with > stage IA disease

# Next

- Relapse with > stage IA disease
    - Treatment based on clinical stage; see MFSS-4 for appropriate clinical stage
- Progression to > stage IA on skin-directed therapies, or refractory disease to multiple previous therapies, or persistent and/or symptomatic T1 skin disease
    - Manage as Stage IB–IIA MF (MFSS-7)
    - or Consider RT if not previously used, per Principles of Radiation Therapy (PCLYM-A)
    - or Clinical trial
- Histologic evidence of LCT, see MFSS-12
