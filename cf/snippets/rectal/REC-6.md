+++
id           = "rectal/REC-6"
gid          = "rectal"
ref          = "REC-6"
page         = 17
title        = "Total neoadjuvant therapy and primary treatment for pMMR/MSS T3 N any, T1-2 N1-2, T4 N any, or locally unresectable/medically inoperable rectal cancer"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-A", "REC-C", "REC-D", "REC-E", "REC-F", "REC-H", "REC-10", "REC-10A"]

[facets]
disease   = "rectal"
stage     = ["II", "III"]
biomarker = ["pmmr", "mss", "pik3ca"]
timepoint = ["neoadjuvant", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "locally unresectable", "medically inoperable"]
[[variables]]
name = "sphincter_sparing"
type = "enum"
options = ["eligible", "not eligible"]
[[variables]]
name = "pi3k"
type = "enum"
options = ["present", "absent", "not-tested"]
[[variables]]
name = "regression"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-6, p17
- Applies to pMMR/MSS rectal cancer, clinical stage T3, N any; T1-2, N1-2; T4, N any
- Also applies if locally unresectable or medically inoperable
- Principles of Surgery and Locoregional Therapies (REC-C)
- Principles of Imaging (REC-A)
- Principles of Radiation Therapy (REC-E)
- Principles of Perioperative Therapy (REC-D)
- Principles of Nonoperative Management (REC-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- MMR/MSI ___ (mmr_msi), pMMR/MSS
- Resectability ___ (resectability)
- Sphincter-sparing surgery ___ (sphincter_sparing)
- Somatic PI3K pathway alterations ___ (pi3k)

# Total neoadjuvant therapy, one of

- Long-course chemo/RT (capecitabine or infusional fluorouracil), then chemotherapy (12-16 wk)
    - Principles of Radiation Therapy (REC-E)
    - Principles of Perioperative Therapy (REC-D)
    - Chemotherapy: FOLFOX or CAPEOX
    - Consider FOLFIRINOX
- Short-course RT, then chemotherapy (12-16 wk)
    - Principles of Radiation Therapy (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
    - While short-course RT can be considered for preoperative radiation, for high-risk rectal cancer the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
        - High-risk: clinical tumor stage cT4a or cT4b
        - High-risk: EMVI
        - High-risk: clinical nodal stage cN2
        - High-risk: involved MRF
        - High-risk: enlarged lateral lymph nodes considered to be metastatic
    - Chemotherapy: FOLFOX or CAPEOX
    - Consider FOLFIRINOX
- Chemotherapy (12-16 wk), then long-course chemo/RT (capecitabine or infusional fluorouracil) or short-course RT
    - Chemotherapy: FOLFOX or CAPEOX
    - Consider FOLFIRINOX
    - Principles of Radiation Therapy (REC-E)
    - Principles of Perioperative Therapy (REC-D)
- Chemotherapy (12-16 wk) for non-T4 disease eligible for sphincter-sparing surgery
    - FOLFOX or CAPEOX
    - Principles of Surgery and Locoregional Therapies (REC-C)
- In select cases (eg, a patient who is not a candidate for intensive therapy) neoadjuvant therapy with chemo/RT or RT alone may be considered prior to surgery

# Restaging

- Principles of Imaging (REC-A)
- Restage with sigmoidoscopy, with or without MRI

# Primary treatment after restaging

- Transabdominal resection
    - Principles of Surgery and Locoregional Therapies (REC-C)
    - For select patients who may be candidates for IORT, see Principles of Radiation Therapy (REC-E)
- or if complete clinical response, consider surveillance (REC-10A)
    - A "watch and wait," nonoperative management approach may be considered in centers with experienced multidisciplinary teams
    - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
    - Decisions for NOM should involve a careful discussion with the patient of their risk tolerance
    - See Principles of Nonoperative Management (REC-H)
- or resection contraindicated, systemic therapy (REC-F)
    - FOLFIRINOX is not recommended in this setting

# By tumor regression at restaging

- Tumor regression ___ (regression)
- Tumor regression >20%
    - Surgery
    - Principles of Surgery and Locoregional Therapies (REC-C)
- Tumor regression <=20%, or high-risk features remain
    - High-risk features: clinical tumor stage cT4a or cT4b, EMVI, clinical nodal stage cN2, involved MRF, or enlarged lateral lymph nodes considered to be metastatic
    - Consider long-course chemo/RT (capecitabine or infusional fluorouracil)
        - Principles of Radiation Therapy (REC-E)
        - Principles of Perioperative Therapy (REC-D)
    - or consider short-course RT
        - Principles of Radiation Therapy (REC-E)
        - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
        - While short-course RT can be considered for preoperative radiation, for high-risk rectal cancer the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
    - Then surgery
        - Principles of Surgery and Locoregional Therapies (REC-C)

# Stage II and III: molecular profiling and aspirin

- Molecular profiling, to include somatic PI3K pathway alterations, should be done on all stage II and III CRC tumors
- For stage II and III, if somatic PI3K pathway alterations, start aspirin (unless contraindicated) 100-162 mg PO daily for 3 years after recovery from surgery
    - Somatic PI3K pathway alterations include mutations in PIK3CA exon 9 and 20
    - Somatic PI3K pathway alterations include other PIK3CA, PIK3R1, and PTEN mutations
    - Somatic PI3K pathway alterations include deep deletions of PTEN
    - Aspirin should not be initiated until after recovery from surgery
    - For patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy

# Next

- After transabdominal resection, go to Surveillance (REC-10)
- If complete clinical response and nonoperative management, go to Surveillance following nonoperative management (REC-10A)
- If resection contraindicated, go to Systemic therapy (REC-F)
- Tumor regression >20%, after surgery, go to Surveillance (REC-10)
- Tumor regression <=20% or high-risk features remain, after further RT and surgery, go to Surveillance (REC-10)
