+++
id           = "cutaneous_melanoma/ME-2"
gid          = "cutaneous_melanoma"
ref          = "ME-2"
page         = 19
title        = "Workup and primary treatment for clinical stage 0 (in situ), IA, and IB melanoma"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-1", "ME-2A", "ME-5", "ME-10", "ME-C", "ME-D"]

[facets]
disease   = "cutaneous_melanoma"
stage     = ["0", "I"]
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["0", "IA", "IB"]
[[variables]]
name = "breslow"
type = "number"
[[variables]]
name = "ulceration"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "mitotic_rate"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "subtype"
type = "text"
[[variables]]
name = "node_exam"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-2, p19
- Applies to clinical stage 0 (in situ), stage IA (T1a), and stage IB (T1b)
- Additional footnotes on ME-2A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary lesion site ___ (site)
- Clinical stage ___ (clinical_stage)
- Breslow depth ___ (breslow) mm
- Ulceration ___ (ulceration)
- Mitotic rate ___ (mitotic_rate)
- Lymphovascular invasion ___ (lvi)
- Histologic subtype ___ (subtype)
- Regional lymph node physical exam ___ (node_exam)

# Workup, all of stage 0, IA, and IB

- H&P
- Routine imaging/lab tests not recommended
- Imaging only to evaluate specific signs or symptoms, see Principles of Imaging-Workup (ME-D)
    - Nodal basin ultrasound (US) is not a substitute for SLNB
    - Consider nodal basin US prior to SLNB if the regional lymph node physical exam is equivocal
    - Confirm abnormal or suspicious nodal basin US findings histologically whenever possible
    - A negative nodal basin US is not a substitute for biopsy of clinically suspicious lymph nodes
- Molecular analysis for BRAF or MGPT of the primary lesion is not recommended
    - Unless required to guide adjuvant or other systemic therapy, or consideration of clinical trials
    - See Principles of Biomarker Testing (ME-C)
- Do not incorporate commercially available prognostic gene expression profiling (GEP) tests into melanoma care
    - GEP must not guide clinical decision-making in stage IA, where there is a low probability of metastasis and a high proportion of false-positive results
    - Routine use of GEP to predict outcome by AJCC-8 stage, before or after SLNB, requires further prospective investigation
- Predictive GEP tests must not replace surgical oncology discussion of pathologic staging with SLNB in eligible patients
    - CP-GEP testing may be used in select patients with T1b with or without T2a melanoma to support shared decision-making, when the patient or provider would decide against SLNB if the true risk was <10%
    - A high-risk result in that scenario portends a 3 times higher risk of SLN involvement
    - Alternative GEP tests for SLNB risk prediction are not recommended outside a clinical study or trial

# Stage 0 in situ, primary treatment

- Wide excision (preferred)
- Or, in select patients with lentigo maligna (LM)
    - Topical imiquimod
    - Radiation therapy (RT)

# Stage IA (T1a), primary treatment

- T1a is <0.8 mm thick, no ulceration
- Wide excision (category 1 for stage IA)
- SLNB is not recommended when the risk of a positive sentinel lymph node (SLN) is <5%
    - This includes stage IA, T1a melanoma (Breslow depth <0.8 mm, nonulcerated) without other adverse features
    - Exception: significant uncertainty about the adequacy of microstaging, due to positive deep margins or limited sampling of a larger lesion

# Stage IB (T1b), primary treatment

- T1b is <0.8 mm thick with ulceration, or 0.8-1.0 mm thick with or without ulceration
- Discuss and consider sentinel lymph node biopsy (SLNB), the recommendation when the risk of a positive SLNB is 5%-10%
    - The same 5%-10% band covers T1a lesions with Breslow depth >0.5 mm plus other adverse features
        - Age ≤42 years
        - Head/neck location
        - Lymphovascular invasion
        - Mitotic rate ≥2/mm2
        - Risk is additive when multiple adverse features are present
    - SLNB is an important staging tool; a positive SLNB upstages to stage III and is associated with significantly decreased melanoma-specific survival (MSS)
    - SLNB has not been proven to improve relapse-free survival (RFS) or overall survival (OS), but is associated with improved control of regional nodal disease
    - SLNB status may aid adjuvant therapy decisions in clinically node-negative patients
    - Decision not to perform SLNB may be based on significant patient comorbidities, patient preference, or other factors such as advanced age and/or poor functional status
    - Role of SLNB in pure desmoplastic melanoma (≥90% of invasive melanoma associated with prominent stromal fibrosis) remains controversial, as SLNB positivity is less common than in mixed desmoplastic/nondesmoplastic and conventional melanoma
    - Multivariable nomograms/risk calculators may also inform the likelihood of a positive SLNB (melanomarisk.org.au/snlland; mskcc.org/nomograms/melanoma/sentinel_lymph_node_metastasis)
        - Some validation studies suggest nomograms underestimate SLN-positivity risk at probabilities ≤10%
        - No current model offers clinical utility at risk thresholds ≤8%
        - Merlin Assay CP-GEP negative predictive value (NPV) 92.9% overall, 94.8% for T1b and 91.9% for T2a melanoma
- Wide excision (category 1)
- Or wide excision (category 1) with SLNB

# Next

- After primary treatment, follow-up (ME-10)
- Sentinel node negative, follow-up (ME-10)
- Sentinel node positive, go to Stage III Workup and Primary Treatment (ME-5)
