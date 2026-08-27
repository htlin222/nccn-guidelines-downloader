+++
id           = "cutaneous_lymphomas/MFSS-7"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-7"
page         = 26
title        = "Treatment and response assessment for stage IB (skin-only disease with ≥10% BSA) to stage IIA mycosis fungoides"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-4", "MFSS-6", "MFSS-8", "MFSS-9", "MFSS-12"]

[facets]
disease   = "cutaneous_lymphomas"
stage     = ["I", "II"]
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "bsa"
type = "number"
[[variables]]
name = "skin_burden"
type = "enum"
options = ["lower", "higher"]
[[variables]]
name = "lesion_type"
type = "text"
[[variables]]
name = "lct_suspected"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "previous_therapies"
type = "text"
[[variables]]
name = "response"
type = "text"
+++

# Source

- NCCN Cutaneous Lymphomas v2.2026, MFSS-7, p26
- Applies to mycosis fungoides, stage IB (skin-only disease with ≥10% BSA) - stage IIA
- Stage is assigned per MFSS-3 and MFSS-4
- Rebiopsy if LCT is suspected
    - If histologic evidence of LCT, see MFSS-12
- Principles for Mycosis Fungoides/Sézary Syndrome (MFSS/INTRO-1)
- General Considerations for the Treatment of Patients with MF and SS (MFSS-A 1 of 12)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Clinical stage ___ (clinical_stage)
- Body surface area involved ___ (bsa) %
- Skin disease burden ___ (skin_burden)
- Predominant lesion type ___ (lesion_type)
- LCT suspected ___ (lct_suspected)
- Previous therapies ___ (previous_therapies)
- Response to primary treatment ___ (response)

# Primary treatment

- Lower skin disease burden, eg, predominantly patch disease
    - See Table 2: Stage IB MF (Skin-Only Disease with ≥10% BSA) – Stage IIA MF
- Higher skin disease burden, eg, predominantly plaque disease
    - See Table 2: Stage IB MF (Skin-Only Disease with ≥10% BSA) – Stage IIA MF

# Response assessment

- Imaging, with modalities used in workup, indicated when suspicious of clinical extracutaneous disease
- Rebiopsy if LCT is suspected; if histologic evidence of LCT, see MFSS-12

# Outcomes after treatment for lower skin disease burden

- CR/PR
    - Consider maintenance or tapering of regimens to optimize response duration, for disease achieving a clinical benefit and/or disease responding to primary treatment
    - Relapse with low skin disease burden
        - Retreat with primary treatment, or treat as high skin disease burden
    - Relapse with high skin disease burden
        - Treat as high skin disease burden
- Inadequate response
    - Retreat with primary treatment, or treat as high skin disease burden
- Progression to > stage IB–IIA
    - Treatment based on clinical stage. See MFSS-4 for appropriate clinical stage

# Outcomes after treatment for higher skin disease burden

- CR/PR
    - Consider maintenance or tapering of regimens to optimize response duration, for disease achieving a clinical benefit and/or disease responding to primary treatment
    - Relapse with T1–T2 disease
    - Relapse with > stage IB–IIA disease
        - Treatment based on clinical stage. See MFSS-4 for appropriate clinical stage
- Any one of the following
    - Progression to > stage IB–IIA
    - Inadequate response
    - Refractory disease to multiple previous therapies
    - Persistent and/or symptomatic T1–T2 skin disease
- If any of the above is present, options are
    - Clinical trial
    - TSEBT, if not previously used
        - Principles of Radiation Therapy (PCLYM-A)
    - Manage as Stage IIB - Generalized Tumor Lesions (MFSS-9)

# Next

- Progression to > stage IB–IIA, or relapse with > stage IB–IIA disease, go to MFSS-4 for treatment based on clinical stage
- Histologic evidence of LCT on rebiopsy, go to MFSS-12
- Managed as Stage IIB - Generalized Tumor Lesions, go to MFSS-9
