+++
id           = "rectal/REC-5"
gid          = "rectal"
ref          = "REC-5"
page         = 16
title        = "Adjuvant treatment after transabdominal resection, by pathologic findings"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-4", "REC-10", "REC-A", "REC-D", "REC-E"]

[facets]
disease   = "rectal"
stage     = ["II", "III"]
biomarker = "pik3ca"
timepoint = "adjuvant"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pstage"
type = "text"
[[variables]]
name = "differentiation"
type = "text"
[[variables]]
name = "mesorectal_invasion"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "tumor_location"
type = "text"
[[variables]]
name = "mesorectal_grade"
type = "enum"
options = ["complete", "incomplete"]
[[variables]]
name = "pi3k"
type = "enum"
options = ["present", "absent", "not-tested"]
[[variables]]
name = "aspirin_contraindication"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-5, p16
- Applies to pathologic findings after transabdominal resection for T1-2, N0
- Adjuvant treatment, up to 6 mo perioperative treatment
- Principles of Imaging (REC-A)
- Principles of Radiation Therapy (REC-E)
- Principles of Perioperative Therapy (REC-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, after transabdominal resection
- Pathologic stage ___ (pstage)
- Differentiation of the carcinoma ___ (differentiation)
- Depth of invasion into the mesorectum ___ (mesorectal_invasion)
- Lymphatic or venous vessel involvement ___ (lvi)
- Location in the rectum ___ (tumor_location)
- Mesorectal grade ___ (mesorectal_grade)
- Somatic PI3K pathway alterations ___ (pi3k)
- Contraindication to aspirin ___ (aspirin_contraindication)

# pT1-2, N0, M0

- Observe

# pT3, N0, M0

- Long-course chemo/RT, capecitabine or infusional fluorouracil (REC-E, REC-D)
    - Use of postoperative RT should be highly selective, eg, for incomplete mesorectal grade, due to severe toxicity concerns
    - With chemotherapy FOLFOX or CAPEOX (REC-D)
- FOLFOX or CAPEOX alone
- Observation, only if all of the following
    - Well-differentiated or moderately well-differentiated carcinoma
    - Invading <2 mm into the mesorectum
    - Without lymphatic or venous vessel involvement
    - Located in the upper rectum

# pT4, N0, M0

- Long-course chemo/RT, capecitabine or infusional fluorouracil (REC-E, REC-D)
    - With chemotherapy FOLFOX or CAPEOX (REC-D)
- Chemotherapy FOLFOX or CAPEOX (REC-D)
    - With long-course chemo/RT, capecitabine or infusional fluorouracil (REC-E, REC-D)

# pT1-4, N1-2

- Long-course chemo/RT, capecitabine or infusional fluorouracil (REC-E, REC-D)
    - With chemotherapy FOLFOX or CAPEOX (REC-D)
- Chemotherapy FOLFOX or CAPEOX (REC-D)
    - With long-course chemo/RT, capecitabine or infusional fluorouracil (REC-E, REC-D)
- Consider FOLFOX or CAPEOX alone, pT1-3, N1 only

# Somatic PI3K pathway alterations and aspirin

- Molecular profiling, to include somatic PI3K pathway alterations, should be done on all stage II and III CRC tumors
    - Somatic PI3K pathway alterations include mutations in PIK3CA exon 9 and 20
    - Other PIK3CA, PIK3R1, and PTEN mutations
    - Deep deletions of PTEN
- For stage II and III, if somatic PI3K pathway alterations, start aspirin 100-162 mg PO daily for 3 years
    - Unless contraindicated
    - Not initiated until after recovery from surgery
    - Concurrent with chemotherapy if given; for patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy

# ctDNA

- ctDNA is a prognostic marker
- Insufficient evidence to recommend routine use of ctDNA assays outside of a clinical trial
- De-escalation of care and treatment decision-making are not recommended based on ctDNA results
- Participation in clinical trials is encouraged

# Next

- After adjuvant treatment, go to Surveillance (REC-10)
