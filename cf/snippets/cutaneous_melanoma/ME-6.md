+++
id           = "cutaneous_melanoma/ME-6"
gid          = "cutaneous_melanoma"
ref          = "ME-6"
page         = 29
title        = "Stage III with clinically positive node(s): workup, primary treatment, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-11", "ME-16"]

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
name = "node_basin"
type = "text"
[[variables]]
name = "node_pathology"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "braf"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "borderline resectable", "unresectable"]
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-6, p29
- Applies to stage III, clinically positive node(s)
- For in-transit, nodal, or distant metastatic disease of unknown primary site, dermatologic exam is warranted to assess for a primary cutaneous melanoma
    - Ocular and mucosal examinations are not necessary unless the patient is symptomatic
- Additional footnotes on ME-6A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary tumor site ___ (primary_site)
- Clinically positive node(s), basin ___ (node_basin)
- Node biopsy result ___ (node_pathology)
- Clinical stage ___ (ctnm)
- BRAF ___ (braf)
- Nodal disease is ___ (resectability)

# Workup

- Core biopsy preferred, or fine-needle aspiration (FNA)
    - Excisional biopsy is not recommended, to allow for neoadjuvant therapy
- Imaging for baseline staging and to evaluate specific signs or symptoms (ME-D)
- BRAF testing (ME-C)
    - Recommended for patients with stage III melanoma for whom future BRAF-directed therapy may be an option
    - Consider MGPT if the test results might guide further treatment decisions or eligibility for participation in a clinical trial

# Primary treatment, resectable nodal disease

- Neoadjuvant systemic therapy (preferred), then wide excision of primary tumor (category 1) + TLND
    - Principles of Neoadjuvant Systemic Therapy (NEOSYS-1)
    - Principles of Surgical and Non-Surgical Management of Primary Melanoma (ME-E)
    - Studies are ongoing to determine whether index lymph node (ILN) removal or limited lymph node dissection (LND) could replace TLND in patients with major pathologic response (MPR) to neoadjuvant immune therapy
- or wide excision of primary tumor (category 1) + therapeutic lymph node dissection (TLND)
    - Principles of Surgical and Non-Surgical Management of Primary Melanoma (ME-E)

# Primary treatment, unresectable or borderline resectable nodal disease

- Unresectable pathway (ME-16)
- Tumors that were locally advanced and unresectable that have become resectable should be considered for surgical resection
- For patients with unresectable nodal disease, consider treatment with systemic therapy followed by resection, or treat as stage IV

# Adjuvant treatment

- The choice of adjuvant systemic treatment versus observation should take into consideration the patient's risk of melanoma recurrence and the risk of treatment toxicity (ADJSYS-2)
- Systemic therapy
    - Principles of Adjuvant Systemic Therapy (ADJSYS-1)
- and/or regional therapy option: consider RT to nodal basin in selected patients at high risk for nodal recurrence (category 2B)
    - Risk based on non-response to, or non-receipt of, neoadjuvant therapy
    - And/or extracapsular extension, location, number, and size of involved nodes
    - Adjuvant nodal basin RT is associated with reduced lymph node field recurrence but has shown no improvement in RFS or OS
    - Its benefits must be weighed against potential toxicities such as lymphedema (limb) or other complications
    - The impact of these potential toxicities should be considered in the context of available systemic adjuvant treatment options
    - Principles of Radiation Therapy (ME-H)
- or observation

# Next

- Resectable nodal disease treated, go to Follow-up (ME-11)
- Unresectable or borderline resectable, go to the unresectable pathway (ME-16)
