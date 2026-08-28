+++
id           = "uveal/UM-4"
gid          = "uveal"
ref          = "UM-4"
page         = 11
title        = "Risk of distant metastasis and systemic imaging based on risk stratification after treatment of uveal melanoma"
nccn_version = "2.2026"
nccn_date    = "03/18/26"
generated    = "2026-08-28"
see_also     = ["UM-5", "ST-1", "ST-2"]

[facets]
disease   = "uveal"
biomarker = "sf3b1"
timepoint = "surveillance"

[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "biopsy_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "gep_class"
type = "enum"
options = ["1A", "1B", "2", "not done"]
[[variables]]
name = "prame"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "chromosome_3"
type = "enum"
options = ["disomy", "monosomy", "not done"]
[[variables]]
name = "chromosome_8q"
type = "enum"
options = ["gain", "no gain", "not done"]
[[variables]]
name = "mutation"
type = "text"
[[variables]]
name = "ajcc_t"
type = "enum"
options = ["T1", "T2", "T3", "T4"]
[[variables]]
name = "extra_risk_factors"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "medium", "high"]
+++

# Source

- NCCN Melanoma: Uveal v2.2026, UM-4, p11
- Applies to surveillance after treatment of the affected eye, and to risk of distant metastasis
- Risk stratification to determine the frequency of follow-up should be based on the highest risk factor present
- If biopsy is not performed, follow the medium- or high-risk pathway depending on whether any high-risk features are present
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (side) eye, treated uveal melanoma
- Prognostic biopsy performed: ___ (biopsy_done)
- 15-GEP class: ___ (gep_class)
- PRAME: ___ (prame)
    - PRAME expression is a risk modifier to the 15-GEP signal
    - May be associated with an increased risk of metastasis in both Class 1 and Class 2 uveal melanoma tumors
- Chromosome 3: ___ (chromosome_3)
- Chromosome 8q: ___ (chromosome_8q)
- Mutation status, EIF1AX / SF3B1 / BAP1 somatic: ___ (mutation)
- T category (AJCC), see ST-1 and ST-2: ___ (ajcc_t)
- Additional risk factors for recurrence, juxtapapillary location and ciliary body involvement: ___ (extra_risk_factors)
- Risk group, taken from the highest risk factor present: ___ (risk_group)

# Low risk

- Any of the following
    - Class 1A, or Class 1 with PRAME negative
    - Disomy 3
    - Gain of chromosome 6p
    - EIF1AX mutation
    - T1 (AJCC) (ST-1 and ST-2)
- Imaging to evaluate signs or symptoms as clinically indicated
- Consider surveillance imaging every 12 months for 5 years, or as clinically indicated

# Medium risk

- Any of the following
    - Class 1B, or Class 1 with PRAME positive
    - SF3B1 mutation
    - T2 and T3 (AJCC) (ST-1 and ST-2)
- Follow this pathway if biopsy was not performed and no high-risk features are present
- Imaging to evaluate signs or symptoms
- Consider surveillance imaging every 6–12 months for 10 years, then as clinically indicated

# High risk

- Any of the following
    - Class 2
    - Monosomy 3
    - Gain of chromosome 8q
        - 8q gain, especially when numerous copies are found, portends greater risk for metastasis
    - BAP1 somatic mutation
    - T4 (AJCC) (ST-1 and ST-2)
- Follow this pathway if biopsy was not performed and high-risk features are present
- Imaging to evaluate signs or symptoms
- Consider surveillance imaging every 3–6 months for 5 years, then every 6–12 months for years 6–10, then as clinically indicated

# Surveillance imaging

- The most frequent site of metastasis is the liver
    - Other sites include lungs, skin/soft tissue, and bones
- Options for patients who elect to have surveillance imaging
    - Contrast-enhanced MRI (preferred)
    - CT abdomen ± pelvis
    - Abdominal ultrasound
    - Modality preference determined by expertise at the treating institution
- Chest imaging can be done with CT chest without contrast, or chest x-ray

# Standard follow-up for the affected eye

- Color fundus photography and ultrasonography every 3–6 months for 3–5 years, then every 6–12 months thereafter if stable
    - Frequency of follow-up should depend on the size and location of the tumor at presentation (eg, juxtapapillary location, ciliary body involvement)
    - Serial orbital MRI may be used as clinically indicated
    - Radiation-related retinopathy and other treatment-related complications may occur at any time following treatment
- Contralateral eye is not at increased risk of uveal melanoma
    - Follow with routine ophthalmologic care
    - Routine eye protection for the remaining eye (eg, polycarbonate glasses)
- Liver function tests (LFTs) may be considered as part of follow-up
    - Some studies showed poor sensitivity for early detection of liver metastases

# Next

- Recurrence, go to UM-5
