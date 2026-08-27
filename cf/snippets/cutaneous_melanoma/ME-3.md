+++
id           = "cutaneous_melanoma/ME-3"
gid          = "cutaneous_melanoma"
ref          = "ME-3"
page         = 22
title        = "Workup and primary treatment of clinical stage IB or II cutaneous melanoma"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-2", "ME-5", "ME-9", "ME-12"]

[facets]
disease   = "cutaneous_melanoma"
stage     = ["I", "II"]
timepoint = ["workup", "primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "signs_symptoms"
type = "text"
[[variables]]
name = "sln_result"
type = "enum"
options = ["negative", "positive", "not done"]
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-3, p22
- Applies to clinical stage IB (T2a) or stage II (T2b or higher)
- Additional footnotes for this page are on ME-3A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Primary melanoma site: ___ (site)
- Clinical stage: ___ (clinical_stage)
    - Stage IB (T2a)
    - Stage II (T2b or higher)
- Specific signs or symptoms present: ___ (signs_symptoms)

# Workup

- History and physical
- Baseline imaging and lab tests
    - Not recommended, unless needed for surgical planning
    - Not recommended, unless needed prior to discussion or initiation of systemic treatment
    - For patients with stage IIB or IIC disease being considered for adjuvant therapy, baseline/pretreatment imaging is appropriate
    - Decisions for baseline imaging of asymptomatic patients with high-risk primary melanomas or clinically occult nodal disease can be informed by nomogram data presented in Boutros CS, et al. J Natl Cancer Inst 2025;117:180-187
- Imaging to evaluate specific signs or symptoms

# Primary treatment

- Wide excision (category 1)
- Discuss and offer sentinel lymph node biopsy (SLNB)
- Wide excision (category 1) with sentinel node biopsy
- Sentinel node result: ___ (sln_result)

# Adjuvant treatment, sentinel node negative

- The choice of adjuvant systemic treatment versus observation should take into consideration the patient's risk of melanoma recurrence and the risk of treatment toxicity
    - See Adjuvant Systemic Therapy Considerations (ADJSYS-2 of 2)
- Observation (ME-11)
- Or, for pathologic stage IIB or IIC
    - Systemic therapy
        - Principles of Adjuvant Systemic Therapy (ADJSYS-1 of 2)
    - And/or primary tumor site RT to reduce local recurrence (category 2B)

# Next

- Sentinel node negative, after adjuvant treatment decision, follow-up (ME-10 and ME-11)
- Sentinel node positive, go to Stage III workup and primary treatment (ME-5)
