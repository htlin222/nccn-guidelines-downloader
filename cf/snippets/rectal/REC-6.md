+++
id           = "rectal/REC-6"
gid          = "rectal"
ref          = "REC-6"
page         = 17
title        = "Primary treatment of pMMR/MSS T3 N any, T1-2 N1-2, T4 N any, or locally unresectable rectal cancer"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-A", "REC-C", "REC-D", "REC-E", "REC-F", "REC-H", "REC-10", "REC-10A"]

[facets]
disease   = "rectal"
stage     = ["II", "III"]
biomarker = ["pmmr", "mss"]
timepoint = ["neoadjuvant", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "ctnm"
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
name = "high_risk"
type = "text"
[[variables]]
name = "intensive_therapy"
type = "enum"
options = ["candidate", "not a candidate"]
[[variables]]
name = "pi3k_status"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-6, p17
- Applies to pMMR/MSS rectal cancer
- Clinical stage T3, N any; or T1-2, N1-2; or T4, N any
- Or locally unresectable, or medically inoperable
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MMR/MSI status ___ (mmr_status), this page applies only to pMMR/MSS
- ___ (ctnm)
- Resectability ___ (resectability)
- Eligible for sphincter-sparing surgery ___ (sphincter_sparing)
- High-risk features ___ (high_risk)
    - clinical tumor stage cT4a or cT4b
    - EMVI
    - clinical nodal stage cN2
    - involved MRF
    - enlarged lateral lymph nodes considered to be metastatic
- Candidate for intensive therapy ___ (intensive_therapy)
    - In select cases (eg, a patient who is not a candidate for intensive therapy) neoadjuvant therapy with chemo/RT or RT alone may be considered prior to surgery
- Molecular profiling, to include somatic PI3K pathway alterations, should be done on all stage II and III CRC tumors: ___ (pi3k_status)
    - Somatic PI3K pathway alterations include mutations in PIK3CA exon 9 and 20; other PIK3CA, PIK3R1, and PTEN mutations; and deep deletions of PTEN
    - For stage II and III, if somatic PI3K pathway alterations, start aspirin (unless contraindicated) 100-162 mg PO daily for 3 years after recovery from surgery, concurrent with chemotherapy if given
    - Aspirin should not be initiated until after recovery from surgery
    - For patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy

# Total neoadjuvant therapy

- Sequence 1, radiation first
    - Long-course chemo/RT with capecitabine or infusional fluorouracil (REC-E, REC-D)
    - Or short-course RT (REC-E)
        - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
        - For high-risk rectal cancer, the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
    - Then chemotherapy (12-16 wk)
        - FOLFOX or CAPEOX
        - Consider FOLFIRINOX
- Sequence 2, chemotherapy first
    - Chemotherapy (12-16 wk)
        - FOLFOX or CAPEOX
        - Consider FOLFIRINOX
    - Then long-course chemo/RT with capecitabine or infusional fluorouracil (REC-E, REC-D)
    - Or then short-course RT (REC-E)
        - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
        - For high-risk rectal cancer, the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT

# Primary treatment with chemotherapy alone

- Chemotherapy (12-16 wk) for non-T4 disease eligible for sphincter-sparing surgery (REC-C)
    - FOLFOX or CAPEOX

# Restaging

- Restaging (REC-A)
- Restage with sigmoidoscopy with or without MRI

# Next

- After total neoadjuvant therapy and restaging
    - Transabdominal resection (REC-C), then surveillance (REC-10)
        - For select patients who may be candidates for IORT, see REC-E
    - Or if complete clinical response, consider surveillance (REC-10A)
        - In those patients who achieve a complete clinical response, a "watch and wait," nonoperative management approach may be considered in centers with experienced multidisciplinary teams
        - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
        - Decisions for NOM should involve a careful discussion with the patient of their risk tolerance, see REC-H
    - Resection contraindicated, systemic therapy (REC-F), then surveillance (REC-10)
        - FOLFIRINOX is not recommended in this setting
- After chemotherapy alone and restaging
    - Tumor regression >20%, surgery (REC-C), then surveillance (REC-10)
    - Tumor regression ≤20%, or high-risk features remain
        - Consider long-course chemo/RT with capecitabine or infusional fluorouracil (REC-E, REC-D)
        - Or consider short-course RT (REC-E)
            - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
            - For high-risk rectal cancer, the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
