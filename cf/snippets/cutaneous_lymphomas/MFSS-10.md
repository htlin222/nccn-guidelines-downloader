+++
id           = "cutaneous_lymphomas/MFSS-10"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-10"
page         = 29
title        = "Treatment and response assessment for stage III (erythrodermic) mycosis fungoides"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-11", "MFSS-12", "MFSS-A"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "t-cell"
stage     = "III"
timepoint = ["primary-treatment", "relapsed-refractory", "transplant"]

[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "current_treatment"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "PR", "inadequate response", "persistent disease", "relapse", "progression"]
[[variables]]
name = "prior_therapies"
type = "text"
[[variables]]
name = "lct_suspected"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "extracutaneous"
type = "text"
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-10, p29
- Applies to stage III (erythrodermic disease)
- Stage as defined on MFSS-3 and MFSS-4
- Principles for Mycosis Fungoides/Sezary Syndrome (MFSS/INTRO-1)
- General Considerations for the Treatment of Patients with MF and SS (MFSS-A 1 of 12)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Clinical stage: ___ (clinical_stage)
- Erythrodermic disease documented
- Current treatment: ___ (current_treatment)
- Prior therapies: ___ (prior_therapies)
- Response to current treatment: ___ (response)
- LCT suspected clinically: ___ (lct_suspected)
- Suspicion of clinical extracutaneous disease: ___ (extracutaneous)

# Stage III (erythrodermic disease)

- Rebiopsy if LCT is suspected
    - If histologic evidence of LCT, see MFSS-12
- Treat per Table 4: Stage III MF (Erythrodermic Disease)

# Response assessment

- Imaging, with the modalities used in workup, indicated when suspicious of clinical extracutaneous disease
- CR/PR
    - Disease achieving a clinical benefit and/or responding to primary treatment should be considered for maintenance or tapering of regimens to optimize response duration
- Relapse
- Relapse with > stage III
- Progression with > stage III
- Inadequate response
- Refractory disease to multiple previous therapies
- Persistent disease

# Options for inadequate response, refractory disease to multiple previous therapies, or persistent disease

- Clinical trial
- Table 6 - Suggested Regimens for MF with Large-Cell Transformation (LCT)
- Table 7 - Relapsed or Refractory Disease to Multiple Prior Therapies
- Consider allogeneic HCT as appropriate
    - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
    - See Discussion for further details

# Next

- Histologic evidence of LCT on rebiopsy, go to MFSS-12
- Relapse with > stage III, go to MFSS-11
- Progression with > stage III, go to MFSS-11
- Inadequate response, refractory disease to multiple previous therapies, or persistent disease, use the options above
