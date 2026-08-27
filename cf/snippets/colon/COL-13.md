+++
id           = "colon/COL-13"
gid          = "colon"
ref          = "COL-13"
page         = 22
title        = "dMMR/MSI-H colon cancer: adjuvant treatment by pathologic stage after resection"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-8", "COL-A", "COL-B", "COL-E", "COL-F", "COL-G", "COL-H"]

[facets]
disease   = "colon"
stage     = ["0", "II", "III"]
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "pi3k"
type = "text"
[[variables]]
name = "aspirin_contraindicated"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_neoadjuvant_immunotherapy"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colon Cancer v2.2026, COL-13, p22
- Applies to dMMR/MSI-H, or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- Pathologic stage is read per Principles of Pathologic Review (COL-B)
- Adjuvant treatment is given with Principles of Imaging (COL-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MMR or MSI status ___ (mmr_msi)
- POLE/POLD1 mutation and TMB ___ (pole_pold1)
- Pathologic stage ___ (ptnm)
- Somatic PI3K pathway alterations ___ (pi3k)
- Aspirin contraindicated ___ (aspirin_contraindicated)
- Received neoadjuvant immunotherapy ___ (prior_neoadjuvant_immunotherapy)

# Molecular profiling and aspirin, stage II and III

- Molecular profiling, to include somatic PI3K pathway alterations, should be done on all stage II and III CRC tumors
- If somatic PI3K pathway alterations, start aspirin unless contraindicated
    - 100–162 mg PO daily for 3 years
    - After recovery from surgery; aspirin should not be initiated until after recovery from surgery
    - Concurrent with chemotherapy if given; for patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy
- Somatic PI3K pathway alterations include
    - Mutations in PIK3CA exon 9 and 20
    - Other PIK3CA, PIK3R1, and PTEN mutations
    - Deep deletions of PTEN

# Tis; T1–4a, N0, M0 (stage 0–IIB)

- Observation
    - Stage II risk read per Principles of Risk Assessment for Stage II Disease (COL-F)

# T4b, N0, M0 (stage IIC)

- Observation
- or Consider adjuvant systemic therapy as for low-risk stage III disease
- Stage II risk read per Principles of Risk Assessment for Stage II Disease (COL-F)

# T1–3, N1 (low-risk stage III)

- Preferred
    - FOLFOX + atezolizumab
        - Principles of Adjuvant Therapy (COL-G)
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
    - or CAPEOX + atezolizumab
        - Principles of Adjuvant Therapy (COL-G)
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
    - or CAPEOX (3 mo)
        - Principles of Adjuvant Therapy (COL-G)
    - or FOLFOX (3–6 mo)
        - Principles of Adjuvant Therapy (COL-G)

# T4, N1–2; T any, N2 (high-risk stage III)

- Preferred
    - FOLFOX + atezolizumab
        - Principles of Adjuvant Therapy (COL-G)
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
    - or CAPEOX + atezolizumab
        - Principles of Adjuvant Therapy (COL-G)
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
    - or CAPEOX (3–6 mo)
        - Principles of Adjuvant Therapy (COL-G)
        - Consider RT for T4 with penetration to a fixed structure, see Principles of Radiation and Chemoradiation Therapy (COL-E)
    - or FOLFOX (6 mo)
        - Principles of Adjuvant Therapy (COL-G)
        - Consider RT for T4 with penetration to a fixed structure, see Principles of Radiation and Chemoradiation Therapy (COL-E)

# For every pathologic stage above

- Discuss and facilitate options to achieve goal of at least 150 minutes of moderate to vigorous physical activity per week (COL-H)

# Next

- Concurrent surveillance, go to COL-8
