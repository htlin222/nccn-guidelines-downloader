+++
id           = "cutaneous_melanoma/ME-1"
gid          = "cutaneous_melanoma"
ref          = "ME-1"
page         = 17
title        = "Clinical presentation, pathology report, and preliminary workup of a suspicious skin lesion"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-2", "ME-3", "ME-4", "ME-5", "ME-7", "ME-9"]

[facets]
disease   = "cutaneous_melanoma"
stage     = ["0", "I", "II", "III", "IV"]
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lesion_site"
type = "text"
[[variables]]
name = "breslow"
type = "number"
[[variables]]
name = "ulceration"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "mitotic_rate"
type = "number"
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "microsatellitosis"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "clinical_stage"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-1, p17
- Applies to a suspicious skin lesion being worked up for melanoma
- Footnotes for this page are on ME-1A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Suspicious skin lesion at ___ (lesion_site)
- Assessment of melanoma-related risk factors
    - Risk factors for development of single or multiple primary melanomas (ME-A)

# Biopsy

- Biopsy, see Principles of Biopsy and Pathology (ME-B)
- If the diagnostic biopsy is inadequate for treatment decisions
    - Rebiopsy may be appropriate
    - Along with relevant/further immunohistochemistry (IHC) and potential molecular analysis, see Principles of Biomarker Testing (ME-C)
    - Repeat narrow-margin excisional biopsy is generally not indicated if the initial specimen meets criteria for sentinel lymph node biopsy (SLNB), unless the initial biopsy is inadequate for diagnosis or microstaging
    - Repeat biopsy to determine maximal Breslow thickness may assist in surgical margin planning but should not compromise SLNB performance
- If melanoma is confirmed, proceed to the pathology report

# Pathology report

- Breslow thickness ___ (breslow) mm
    - Dermal-based melanomas that lack epidermal involvement or regression of the epidermal/junctional component and histologically simulate cutaneous or in-transit metastasis warrant a thorough discussion to consider a dermal primary versus metastatic process
    - Baseline metastatic workup with imaging (CT chest/abdomen/pelvis or FDG-PET/CT) may be warranted to exclude stage III/IV disease at the outset
- Ulceration status ___ (ulceration)
- Dermal mitotic rate ___ (mitotic_rate) per mm2
    - No longer included in the determination of T1 category in the AJCC Cancer Staging Manual, Eighth Edition
    - Remains an important prognostic factor across all thickness categories and should be included in the pathology assessment of melanoma biopsies and surgical excisions
- Deep and peripheral margin status ___ (margin_status)
    - For histologically positive margins on the biopsy or wide excision specimen, note the presence of in situ or invasive melanoma at the peripheral and/or deep margins
    - For histologically negative margins on the wide excision specimen, ICCR and CAP guidelines do not require reporting of the microscopically measured distances between tumor and labeled lateral or deep margins; this measurement does not generally impact clinical decision-making
- Microsatellitosis ___ (microsatellitosis)
    - Represents microscopically identified lymphatic metastasis and confers an increased risk of recurrence
    - Microsatellites are found discontinuous from the primary tumor (adjacent or deep)
    - The AJCC Cancer Staging Manual, Eighth Edition does not define microsatellitosis according to tumor nest dimension or distance from the primary tumor
    - Cases with microsatellites, clinical satellites, or in-transit metastases are classified as N1c, N2c, or N3c based on the number of tumor-involved regional lymph nodes (0, 1, or at least 2, respectively)
    - If microsatellitosis is present in the biopsy specimen and there is no clinical evidence of nodal/distant disease, see ME-4 for further workup and treatment
    - If it is difficult to distinguish invasive melanoma within a lymphatic channel from a microsatellite, IHC using a specific lymphatic marker such as D2-40 may assist in distinction
- Pure desmoplasia, report if present
    - Pure desmoplastic melanoma is at least 90% of invasive melanoma associated with prominent stromal fibrosis
    - SLNB positivity is less common compared to mixed desmoplastic/nondesmoplastic and conventional melanoma subtypes
    - Variability across studies in the rate of SLNB positivity may be due to lack of standardized criteria for defining pure desmoplastic melanoma, histopathologic reproducibility, and/or reporting
    - In the setting of these conflicting reports, the role of SLNB in pure desmoplastic melanoma remains controversial
- Lymphovascular/angiolymphatic invasion
- Neurotropism/perineural invasion
    - Report as present, absent, or indeterminate; this may help guide clinical decision-making (ie, further excision or adjuvant radiation therapy [RT])
- Molecular analysis for BRAF or multigene panel testing (MGPT) of the primary lesion is not recommended for cutaneous melanoma
    - Unless required to guide adjuvant or other systemic therapy, or consideration of clinical trials
    - See Principles of Biomarker Testing (ME-C)

# Preliminary workup

- History and physical (H&P) with attention to locoregional area, draining lymph nodes
- Complete skin exam

# Next

- Clinical stage ___ (clinical_stage)
- Stage 0 in situ, go to ME-2
- Stage IA, Stage IB, go to ME-2
- Stage IB, Stage II, go to ME-3
- Stage III, go to ME-5 and ME-7
- Stage IV metastatic, go to ME-9
