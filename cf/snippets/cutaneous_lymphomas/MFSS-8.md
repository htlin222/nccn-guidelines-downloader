+++
id           = "cutaneous_lymphomas/MFSS-8"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-8"
page         = 27
title        = "Treatment and response assessment for stage IIB mycosis fungoides with tumor stage disease"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-9", "MFSS-12", "MFSS-A"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "t-cell"
stage     = "II"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "t_class"
type = "text"
[[variables]]
name = "lesion_extent"
type = "enum"
options = ["limited tumor lesions", "generalized tumor lesions"]
[[variables]]
name = "lct_status"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "PR", "inadequate response", "relapse", "progression"]
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-8, p27
- Applies to stage IIB (tumor stage disease)
- Clinical stage established on MFSS-3 and MFSS-4
    - Principles for Mycosis Fungoides/Sezary Syndrome (MFSS/INTRO-1)
    - General Considerations for the Treatment of Patients with MF and SS (MFSS-A 1 of 12)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Clinical stage: ___ (clinical_stage)
- Skin classification: ___ (t_class)
- Extent of tumor lesions: ___ (lesion_extent)
- LCT status: ___ (lct_status)
- Response to treatment: ___ (response)

# Confirm the diagnosis before treating

- Rebiopsy if large cell transformation (LCT) is suspected
    - If histologic evidence of LCT, see MFSS-12

# Sort by extent of tumor lesions

- Limited tumor lesions
    - T1-2 with limited tumor lesions, treat per Table 1 or Table 2
    - T3 with limited tumor lesions, treat per Table 3: Stage IIB MF (Tumor Stage Disease)
- Generalized tumor lesions
    - Manage as Stage IIB - Generalized Tumor Lesions (MFSS-9)

# Response assessment

- Imaging with the modalities used in workup, indicated when suspicious of clinical extracutaneous disease
- CR/PR
    - Patients with disease achieving a clinical benefit and/or those with disease responding to primary treatment should be considered for maintenance or tapering of regimens to optimize response duration
- Inadequate response
- Relapse
- Relapse with disease greater than stage IIB
- Progression to disease greater than stage IIB
- Refractory disease to multiple previous therapies
- Persistent T1-T3 with limited tumor lesions

# Next

- Generalized tumor lesions, manage as Stage IIB - Generalized Tumor Lesions (MFSS-9)
- Relapse with disease greater than stage IIB, treatment based on clinical stage; see MFSS-4 for appropriate clinical stage
- Progression to disease greater than stage IIB, or refractory disease to multiple previous therapies, or persistent T1-T3 with limited tumor lesions, go to MFSS-9
- Histologic evidence of LCT, go to MFSS-12
