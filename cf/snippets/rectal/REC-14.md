+++
id           = "rectal/REC-14"
gid          = "rectal"
ref          = "REC-14"
page         = 27
title        = "Neoadjuvant/definitive immunotherapy or total neoadjuvant therapy for dMMR/MSI-H or POLE/POLD1 nonmetastatic rectal cancer"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-10", "REC-10A", "REC-15", "REC-A", "REC-C", "REC-D", "REC-E", "REC-F", "REC-H"]

[facets]
disease   = "rectal"
stage     = ["II", "III"]
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "stage_group"
type = "enum"
options = ["T3 N any", "T1-2 N1-2", "T4 N any", "locally unresectable", "medically inoperable"]
[[variables]]
name = "pathway"
type = "enum"
options = ["neoadjuvant/definitive immunotherapy (preferred)", "total neoadjuvant therapy"]
[[variables]]
name = "response"
type = "enum"
options = ["complete clinical response", "persistent disease at 6 mo"]
[[variables]]
name = "pi3k_status"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-14, p27
- Applies to dMMR/MSI-H rectal cancer
- Also applies to POLE/POLD1 mutation with ultrahypermutated phenotype, eg, TMB >50 mut/Mb
- Applies to clinical stage T3, N any; T1-2, N1-2; T4, N any; or locally unresectable or medically inoperable
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- MMR/MSI status ___ (mmr_status)
- POLE/POLD1 and TMB ___ (tmb)
- Clinical stage group on this page: ___ (stage_group)
- Molecular profiling, to include somatic PI3K pathway alterations, done: ___ (pi3k_status)
    - Molecular profiling should be done on all stage II and III CRC tumors
- Pathway selected: ___ (pathway)

# Neoadjuvant/definitive immunotherapy (preferred)

- Checkpoint inhibitor immunotherapy for up to 6 mo (REC-F 5 of 17)
- Re-evaluate disease status every 2-3 mo
- Disease status at re-evaluation: ___ (response)
- Complete clinical response
    - If consistent response, continue checkpoint inhibitor immunotherapy
    - Then surveillance (REC-10A)
- Persistent disease at 6 mo
    - Long-course chemo/RT (capecitabine or infusional fluorouracil)
        - Principles of Radiation Therapy (REC-E)
        - Principles of Perioperative Therapy (REC-D)
    - or Short-course RT
    - Then restaging and surgical decision below

# Total neoadjuvant therapy

- In select cases (eg, a patient who is not a candidate for intensive therapy), neoadjuvant therapy with chemo/RT or RT alone may be considered prior to surgery
- Long-course chemo/RT (capecitabine or infusional fluorouracil)
    - Principles of Radiation Therapy (REC-E)
    - Principles of Perioperative Therapy (REC-D)
- or Short-course RT
    - Principles of Radiation Therapy (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
- Then chemotherapy (12-16 wk)
    - FOLFOX or CAPEOX
    - Consider FOLFIRINOX

# Restaging and surgical decision

- Restaging
    - Principles of Imaging (REC-A)
- Transabdominal resection
    - Principles of Surgery and Locoregional Therapies (REC-C)
    - For select patients who may be candidates for IORT, see Principles of Radiation Therapy (REC-E)
- or if complete clinical response, consider surveillance (REC-10A)
    - In those patients who achieve a complete clinical response, a watch and wait, nonoperative management approach may be considered in centers with experienced multidisciplinary teams
    - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
    - Decisions for nonoperative management should involve a careful discussion with the patient of their risk tolerance
    - See Principles of Nonoperative Management (REC-H)
- Resection contraindicated
    - Systemic therapy (REC-F)
    - After total neoadjuvant therapy, FOLFIRINOX is not recommended in this setting

# After transabdominal resection

- After immunotherapy followed by long-course chemo/RT or short-course RT
    - Surveillance (REC-10)
    - or Consider FOLFOX or CAPEOX (12-16 wk), then surveillance (REC-10)
- After total neoadjuvant therapy
    - Surveillance (REC-10)
- For stage II and III, if somatic PI3K pathway alterations, start aspirin (unless contraindicated) 100-162 mg PO daily for 3 years after recovery from surgery
    - Somatic PI3K pathway alterations include mutations in PIK3CA exon 9 and 20; other PIK3CA, PIK3R1, and PTEN mutations; and deep deletions of PTEN
    - Aspirin should not be initiated until after recovery from surgery
    - For patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy

# Next

- Complete clinical response on checkpoint inhibitor immunotherapy, go to surveillance (REC-10A)
- Complete clinical response at restaging, consider surveillance (REC-10A)
- After transabdominal resection, go to surveillance (REC-10)
- Resection contraindicated, go to systemic therapy (REC-F)
