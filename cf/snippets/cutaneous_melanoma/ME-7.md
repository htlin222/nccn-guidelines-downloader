+++
id           = "cutaneous_melanoma/ME-7"
gid          = "cutaneous_melanoma"
ref          = "ME-7"
page         = 31
title        = "Stage III clinical satellite/in-transit melanoma: workup, initial treatment, response assessment and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-8", "ME-D", "ME-C", "ME-F"]

[facets]
disease   = "cutaneous_melanoma"
stage     = "III"
biomarker = "braf"
timepoint = ["workup", "neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "lesion_type"
type = "enum"
options = ["satellite", "in-transit", "both"]
[[variables]]
name = "disease_volume"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["limited-resectable", "borderline-resectable", "unresectable"]
[[variables]]
name = "braf_status"
type = "text"
[[variables]]
name = "prior_systemic_therapy"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-7, p31
- Applies to clinical stage III with satellite and/or in-transit metastases
- Additional footnotes on ME-7A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary melanoma site ___ (primary_site)
- Lymphatic metastasis type ___ (lesion_type)
    - Satellite metastases: dermal and/or subcutaneous metastases occurring within 2 cm from the primary melanoma
    - In-transit metastases: identified between 2 cm from the primary melanoma and the regional nodal basin
    - The 2-cm cutoff is consistent with AJCC staging definitions, but satellite and in-transit lymphatic metastases are biologically and prognostically similar
    - Metastases may be clinically, radiologically, or pathologically detectable
- Disease volume ___ (disease_volume)
- Resectability ___ (resectability)
- BRAF ___ (braf_status)
- Prior systemic therapy for cutaneous melanoma ___ (prior_systemic_therapy)
    - Record whether given as active treatment or as adjuvant therapy
    - Record best response and the interval since discontinuation
- If in-transit, nodal, or distant metastatic disease of unknown primary site
    - Dermatologic exam is warranted to assess for a primary cutaneous melanoma
    - Ocular and mucosal examinations are not necessary unless the patient is symptomatic

# Workup

- Biopsy
    - Core biopsy preferred, or FNA
    - If needle biopsy is not possible, excisional biopsy is acceptable
- Imaging for baseline staging and to evaluate specific signs or symptoms (ME-D)
- BRAF testing (ME-C)
    - Recommended for patients with stage III melanoma for whom future BRAF-directed therapy may be an option
    - Consider MGPT if the test results might guide further treatment decisions or eligibility for participation in a clinical trial

# Initial treatment, limited resectable disease

- Neoadjuvant systemic therapy (NEOSYS-1)
- or Complete excision to clear margins
    - There are no clinical data to support wider surgical margins for satellite/in-transit metastasis; clear histologic margins should be achieved
    - Consider sentinel node biopsy for resectable CSIT disease if it will change treatment options (category 2B) (ME-F)
- Leads to no evidence of disease (NED)

# Initial treatment, unresectable/borderline resectable disease

- Less than complete resection
- or Talimogene laherparepvec (T-VEC)/intralesional therapy
    - A course of 6 doses of T-VEC followed by surgery was compared to surgery alone in 150 patients
    - Neoadjuvant T-VEC was associated with improved RFS at 2 years (29.5% vs. 16.5%)
    - Based on modest efficacy in lymph node or distant metastatic disease, this approach is only considered in patients with in-transit disease
- or Systemic therapy (MELSYS-1)
    - When systemic therapy is given, a neoadjuvant approach is generally favored; when patients experience excellent clinical/pathologic responses, complete excision may not be necessary, particularly when clinically morbid
    - For low-volume in-transit disease, the high risk of toxicities associated with certain combination regimens (nivolumab/ipilimumab or nivolumab and relatlimab) may outweigh the benefit
- See also ME-8

# Response assessment after neoadjuvant systemic therapy

- Clinical assessment, with or without pathologic assessment, with or without imaging, to determine treatment response or progression (ME-D)
- Complete excision to clear margins, leading to no evidence of disease (NED)
- Residual resectable disease, see Initial Treatment for Limited Resectable Disease (ME-7)
- Residual/progressive unresectable disease, see Initial Treatment for Unresectable/borderline resectable disease (ME-8)

# Adjuvant treatment

- The choice of adjuvant systemic treatment versus observation should take into consideration the patient's risk of melanoma recurrence and the risk of treatment toxicity (ADJSYS-2)
- NED after complete excision to clear margins, options
    - Systemic therapy (ADJSYS-1)
    - Observation (ME-11)
- NED after local or regional therapy
    - Consider adjuvant systemic therapy (ADJSYS-1)
    - or Observation (ME-11)
- NED after systemic therapy
    - Observation (ME-11), (SYSCON-1)
- If the patient has previously received systemic therapy for cutaneous melanoma, either as active treatment or adjuvant therapy, selection of the systemic therapy regimen should be informed by response to prior systemic therapies
    - Progression during or shortly after a prior therapy, consider agents of a different class
    - Disease control (complete response [CR], partial response [PR], or stable disease [SD]) on a prior systemic therapy, no residual toxicity, but progression/relapse >3 months after treatment discontinuation, systemic therapy with the same agent or same class of agents may be considered

# Next

- NED, go to adjuvant treatment, options are systemic therapy (ADJSYS-1) or Observation (ME-11)
- Residual resectable disease, go to ME-7
- Residual/progressive unresectable disease, go to ME-8
