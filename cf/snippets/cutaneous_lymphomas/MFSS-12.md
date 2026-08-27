+++
id           = "cutaneous_lymphomas/MFSS-12"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-12"
page         = 31
title        = "Treatment and response assessment for mycosis fungoides with large cell transformation, split by limited versus generalized or extracutaneous lesions"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-6", "MFSS-7", "MFSS-8", "MFSS-10", "MFSS-11"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "large-cell"
timepoint = ["primary-treatment", "relapsed-refractory", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "lct_extent"
type = "enum"
options = ["limited cutaneous lesions with LCT", "generalized cutaneous lesions with LCT", "extracutaneous lesions with LCT"]
[[variables]]
name = "coexisting_disease"
type = "text"
[[variables]]
name = "current_therapy"
type = "text"
[[variables]]
name = "prior_therapies"
type = "text"
[[variables]]
name = "imaging_modalities"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["complete response", "partial response", "inadequate response", "relapse", "refractory disease", "persistent disease"]
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-12, p31
- Applies to MF with large cell transformation (LCT), entered from clinical stage (MFSS-3 and MFSS-4)
- Principles for Mycosis Fungoides/Sezary Syndrome (MFSS/INTRO-1)
- General Considerations for the Treatment of Patients with MF and SS (MFSS-A 1 of 12)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage ___ (clinical_stage), per MFSS-3 and MFSS-4
- Large cell transformation, LCT, present
- Extent of LCT ___ (lct_extent)
    - Limited cutaneous lesions with LCT
    - Generalized cutaneous or extracutaneous lesions with LCT
- Co-existing disease to be managed concurrently based on clinical stage ___ (coexisting_disease)
- Current treatment ___ (current_therapy)
- Previous therapies ___ (prior_therapies)
- Imaging, with modalities used in workup, indicated when suspicious of clinical extracutaneous disease
    - Modalities used in workup ___ (imaging_modalities)

# Treatment, limited cutaneous lesions with LCT

- Consider RT to lesions with LCT
    - Per Principles of Radiation Therapy (PCLYM-A)
- and Concurrent management of co-existing disease based on clinical stage

# Treatment, generalized cutaneous or extracutaneous lesions with LCT

- Table 6 - Suggested Regimens for MF with Large-Cell Transformation (LCT)

# Response assessment

- Repeat imaging with modalities used in workup, frequency as clinically indicated
    - Imaging indicated when suspicious of clinical extracutaneous disease
- Current response ___ (response)
- CR/PR
    - Patients with disease achieving a clinical benefit and/or those with disease responding to primary treatment should be considered for maintenance or tapering of regimens to optimize response duration
- Inadequate response
- Relapse
- Refractory disease to multiple previous therapies, or persistent disease

# Next

- Inadequate response
    - Table 6 - Suggested Regimens for MF with Large-Cell Transformation (LCT), or Table 7 - Relapsed or Refractory Disease to Multiple Prior Therapies, and concurrent management of co-existing disease based on clinical stage (MFSS-4)
    - or Consider allogeneic HCT as appropriate
        - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
    - or Clinical trial
- Relapse
    - Retreat with primary treatment
    - or Clinical trial
    - or Consider allogeneic HCT as appropriate
        - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
- Refractory disease to multiple previous therapies, or persistent disease
    - Clinical trial
    - or Table 7 - Relapsed or Refractory Disease to Multiple Prior Therapies
    - or Consider allogeneic HCT as appropriate
        - Allogeneic HCT is associated with better outcomes in patients with disease responding to primary treatment prior to transplant
