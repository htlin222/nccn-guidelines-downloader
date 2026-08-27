+++
id           = "rectal/REC-4"
gid          = "rectal"
ref          = "REC-4"
page         = 15
title        = "Treatment after transanal local excision of T1, N0"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-5", "REC-10", "REC-10A", "REC-A", "REC-C", "REC-D", "REC-E", "REC-H"]

[facets]
disease   = "rectal"
stage     = "I"
timepoint = ["adjuvant", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pt_stage"
type = "text"
[[variables]]
name = "margins"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "differentiation"
type = "text"
[[variables]]
name = "sm3_invasion"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "restaging_response"
type = "enum"
options = ["complete clinical response", "not complete clinical response", "not yet restaged"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-4, p15
- Applies to pathologic findings after transanal local excision for T1, N0
- Adjuvant treatment, up to 6 mo perioperative treatment
- Principles of Surgery and Locoregional Therapies (REC-C)
- Principles of Imaging (REC-A)
- Principles of Radiation Therapy (REC-E)
- Principles of Perioperative Therapy (REC-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, after transanal local excision for T1, N0
- Pathologic T stage ___ (pt_stage)
- Margins ___ (margins)
- Lymphovascular invasion ___ (lvi)
- Differentiation of the tumor ___ (differentiation)
- sm3 invasion ___ (sm3_invasion)
- Clinical response at restaging ___ (restaging_response)

# High-risk features

- Positive margins
- Lymphovascular invasion
- Poorly differentiated tumors
- sm3 invasion, submucosal invasion to the lower third of the submucosal level

# pT1, NX without high-risk features

- Observe

# pT1, NX with high-risk features, or pT2, NX

- Transabdominal resection, preferred (REC-C)
- Or long-course chemo/RT (REC-E)
    - Capecitabine or infusional fluorouracil
- Or short-course RT (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
    - Short-course RT can be considered for preoperative radiation
    - For high-risk rectal cancer, the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
        - High-risk rectal cancer here means clinical tumor stage cT4a or cT4b, EMVI, clinical nodal stage cN2, involved MRF, or enlarged lateral lymph nodes considered to be metastatic
- After long-course chemo/RT or short-course RT, consider FOLFOX or CAPEOX (REC-D)
- Then restaging (REC-A)
- After restaging
    - Transabdominal resection (REC-C)
        - For select patients who may be candidates for intraoperative RT (IORT), see Principles of Radiation Therapy (REC-E)
    - Or if complete clinical response, consider surveillance (REC-10A)

# Nonoperative management after complete clinical response

- In those patients who achieve a complete clinical response, a "watch and wait," nonoperative management approach may be considered in centers with experienced multidisciplinary teams
- The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
- Decisions for NOM should involve a careful discussion with the patient of their risk tolerance
- See Principles of Nonoperative Management (REC-H)

# ctDNA

- ctDNA is a prognostic marker
- Insufficient evidence to recommend routine use of ctDNA assays outside of a clinical trial
- De-escalation of care and treatment decision-making are not recommended based on ctDNA results
- Participation in clinical trials is encouraged

# Next

- pT1, NX without high-risk features, after observation, go to Surveillance (REC-10)
- After transabdominal resection, go to Adjuvant Treatment (REC-5)
- After transabdominal resection following chemo/RT or short-course RT, go to Surveillance (REC-10)
- Complete clinical response managed nonoperatively, go to surveillance following nonoperative management (REC-10A)
