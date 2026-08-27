+++
id           = "cutaneous_lymphomas/MFSS-11"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-11"
page         = 30
title        = "Treatment and response assessment for stage IV mycosis fungoides / Sezary syndrome"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-10", "MFSS-12"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "t-cell"
stage     = "IV"
timepoint = ["primary-treatment", "relapsed-refractory", "transplant"]

[[variables]]
name = "stage_iv_type"
type = "enum"
options = ["Sezary syndrome (stage IVA1 or IVA2)", "non-Sezary (stage IVA2)", "visceral (stage IVB)"]
[[variables]]
name = "current_treatment"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "PR", "inadequate response", "persistent disease", "relapse", "refractory to multiple previous therapies"]
[[variables]]
name = "lct"
type = "text"
[[variables]]
name = "imaging"
type = "text"
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-11, p30
- Applies to stage IV disease, entered from staging on MFSS-3 and MFSS-4
- Principles for Mycosis Fungoides/Sezary Syndrome (MFSS/INTRO-1) and General Considerations for the Treatment of Patients with MF and SS (MFSS-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Stage IV category: ___ (stage_iv_type)
- Current or most recent treatment: ___ (current_treatment)
- Response to primary treatment: ___ (response)
- Large cell transformation (LCT) status: ___ (lct)
- Imaging modalities used in workup: ___ (imaging)

# Before committing to a stage IV pathway

- Rebiopsy if LCT is suspected
    - If histologic evidence of LCT, see MFSS-12 instead of this page
- Confirm which stage IV group the patient falls into
    - Sezary syndrome, stage IVA1 or IVA2
    - Non-Sezary, stage IVA2, or visceral (solid organ), stage IVB

# Primary treatment

- Sezary syndrome (stage IVA1 or IVA2)
    - Table 5: Sezary Syndrome (Stage IVA1 or IVA2)
- Non-Sezary (stage IVA2) or visceral (stage IVB) disease (solid organ)
    - Table 6: Suggested Regimens for Non-Sezary (Stage IVA2) or Visceral/Solid Organ (Stage IVB) Disease
    - Repeat imaging with modalities used in workup, frequency as clinically indicated

# Response assessment

- Image only if disease is in LNs and/or viscera, or there is suspicion of disease progression
    - Use the modalities used in workup
    - As clinically indicated based on distribution of disease
- Classify the response as one of
    - CR/PR
    - Inadequate response
    - Relapse
    - Persistent disease
    - Refractory disease to multiple previous therapies

# If CR/PR

- Consider maintenance or tapering of regimens to optimize response duration
    - Applies to patients with disease achieving a clinical benefit and/or disease responding to primary treatment
- On relapse, choose one of
    - Retreat with primary treatment
    - Clinical trial
    - Consider allogeneic HCT as appropriate
        - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
        - See Discussion for further details

# If inadequate response, persistent disease, or refractory disease to multiple previous therapies

- Choose one of
    - Clinical trial
    - Table 7: Relapsed or Refractory Disease to Multiple Prior Therapies
    - Consider allogeneic HCT as appropriate
        - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
        - See Discussion for further details

# Next

- Histologic evidence of large cell transformation, go to MFSS-12
- Staging reference for stage IV assignment, see MFSS-3 and MFSS-4
- General considerations for treatment of MF and SS, see MFSS-A
