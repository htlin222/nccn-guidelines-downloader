+++
id           = "rectal/REC-4"
gid          = "rectal"
ref          = "REC-4"
page         = 15
title        = "Treatment after transanal local excision of T1, N0 rectal cancer"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-5", "REC-10", "REC-10A"]

[facets]
disease   = "rectal"
stage     = "I"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pt_stage"
type = "enum"
options = ["pT1", "pT2"]
[[variables]]
name = "n_status"
type = "text"
[[variables]]
name = "margin"
type = "text"
[[variables]]
name = "lvi"
type = "text"
[[variables]]
name = "grade"
type = "text"
[[variables]]
name = "sm_level"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-4, p15
- Applies to pathologic findings after transanal local excision for T1, N0
- Adjuvant treatment, up to 6 months of perioperative treatment
- Principles of Perioperative Therapy (REC-D)
- Principles of Surgery and Locoregional Therapies (REC-C)
- Principles of Imaging (REC-A)
- Principles of Radiation Therapy (REC-E)
- Circulating tumor DNA (ctDNA) is a prognostic marker; there is currently insufficient evidence to recommend routine use of ctDNA assays outside of a clinical trial
    - De-escalation of care and treatment decision-making are not recommended based on ctDNA results
    - Participation in clinical trials is encouraged
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, after transanal local excision for T1, N0
- Pathologic T stage ___ (pt_stage)
- Nodal status ___ (n_status)
- High-risk features
    - Positive margins ___ (margin)
    - Lymphovascular invasion ___ (lvi)
    - Differentiation, poorly differentiated tumor ___ (grade)
    - sm3 invasion, submucosal invasion to the lower third of the submucosal level ___ (sm_level)

# pT1, NX without high-risk features

- Observe
- Then surveillance (REC-10)

# pT1, NX with high-risk features, or pT2, NX

- Transabdominal resection (REC-C), preferred
    - Then adjuvant treatment (REC-5)
- Or long-course chemo/RT (REC-E)
    - Capecitabine
    - Or infusional fluorouracil
- Or short-course RT (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting
        - Discuss the need for downstaging
        - Discuss the possibility of long-term toxicity
    - Short-course RT can be considered for preoperative radiation, but for high-risk rectal cancer the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
        - Clinical tumor stage cT4a or cT4b
        - EMVI
        - Clinical nodal stage cN2
        - Involved MRF
        - Enlarged lateral lymph nodes considered to be metastatic
- After long-course chemo/RT or short-course RT
    - Consider FOLFOX or CAPEOX
    - Then restaging (REC-A)

# Next

- pT1, NX without high-risk features, observed, go to surveillance (REC-10)
- After transabdominal resection, go to adjuvant treatment (REC-5)
- After restaging, transabdominal resection (REC-C), then surveillance (REC-10)
    - For select patients who may be candidates for intraoperative RT (IORT), see Principles of Radiation Therapy (REC-E)
- After restaging, if complete clinical response, consider surveillance (REC-10A)
    - In those patients who achieve a complete clinical response, a watch and wait, nonoperative management approach may be considered in centers with experienced multidisciplinary teams
    - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
    - Decisions for nonoperative management should involve a careful discussion with the patient of their risk tolerance
    - See Principles of Nonoperative Management (REC-H)
