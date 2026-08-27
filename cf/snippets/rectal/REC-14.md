+++
id           = "rectal/REC-14"
gid          = "rectal"
ref          = "REC-14"
page         = 27
title        = "Primary treatment of dMMR/MSI-H or ultrahypermutated POLE/POLD1 rectal cancer, T3 N any, T1-2 N1-2, T4 N any, or locally unresectable"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-A", "REC-C", "REC-D", "REC-E", "REC-F", "REC-H", "REC-10", "REC-10A"]

[facets]
disease   = "rectal"
stage     = ["II", "III"]
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["neoadjuvant", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "locally unresectable", "medically inoperable"]
[[variables]]
name = "pi3k_status"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-14, p27
- Applies to dMMR/MSI-H rectal cancer
- Or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- Clinical stage T3, N any; or T1-2, N1-2; or T4, N any
- Or locally unresectable, or medically inoperable
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MMR/MSI status ___ (mmr_status), this page applies to dMMR/MSI-H
- POLE/POLD1 mutation ___ (pole_pold1), qualifies only with an ultrahypermutated phenotype
- Tumor mutational burden ___ (tmb), eg, TMB >50 mut/Mb
- ___ (ctnm)
- Resectability ___ (resectability)
- Molecular profiling, to include somatic PI3K pathway alterations, should be done on all stage II and III CRC tumors: ___ (pi3k_status)
    - Somatic PI3K pathway alterations include mutations in PIK3CA exon 9 and 20; other PIK3CA, PIK3R1, and PTEN mutations; and deep deletions of PTEN
    - For stage II and III, if somatic PI3K pathway alterations, start aspirin (unless contraindicated) 100-162 mg PO daily for 3 years after recovery from surgery, concurrent with chemotherapy if given
    - Aspirin should not be initiated until after recovery from surgery
    - For patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy

# Neoadjuvant/definitive immunotherapy, preferred

- Checkpoint inhibitor immunotherapy for up to 6 mo (REC-F 5 of 17)
- Re-evaluate disease status every 2-3 mo
- Complete clinical response
    - If consistent response, continue checkpoint inhibitor immunotherapy
    - Then surveillance (REC-10A)
- Persistent disease at 6 mo
    - Long-course chemo/RT with capecitabine or infusional fluorouracil (REC-E, REC-D)
    - Or short-course RT
    - Then restaging (REC-A)

# After restaging, persistent disease pathway

- Transabdominal resection (REC-C)
    - For select patients who may be candidates for IORT, see REC-E
    - Then surveillance (REC-10)
    - Or consider FOLFOX or CAPEOX (12-16 wk), then surveillance (REC-10)
- Or if complete clinical response, consider surveillance (REC-10A)
    - In those patients who achieve a complete clinical response, a "watch and wait," nonoperative management approach may be considered in centers with experienced multidisciplinary teams
    - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
    - Decisions for NOM should involve a careful discussion with the patient of their risk tolerance, see REC-H
- Resection contraindicated, systemic therapy (REC-F)

# Total neoadjuvant therapy

- In select cases (eg, a patient who is not a candidate for intensive therapy) neoadjuvant therapy with chemo/RT or RT alone may be considered prior to surgery
- Long-course chemo/RT with capecitabine or infusional fluorouracil (REC-E, REC-D)
- Or short-course RT (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
- Chemotherapy (12-16 wk)
    - FOLFOX or CAPEOX
    - Consider FOLFIRINOX
- Then restaging (REC-A)
    - Transabdominal resection (REC-C), then surveillance (REC-10)
        - For select patients who may be candidates for IORT, see REC-E
    - Or if complete clinical response, consider surveillance (REC-10A)
        - In those patients who achieve a complete clinical response, a "watch and wait," nonoperative management approach may be considered in centers with experienced multidisciplinary teams
        - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
        - Decisions for NOM should involve a careful discussion with the patient of their risk tolerance, see REC-H
    - Resection contraindicated, systemic therapy (REC-F)
        - FOLFIRINOX is not recommended in this setting

# Next

- Complete clinical response on immunotherapy, or complete clinical response after restaging, go to surveillance (REC-10A)
- After transabdominal resection, go to surveillance (REC-10)
- Resection contraindicated, go to systemic therapy (REC-F)
