+++
id           = "genetics_ceg/MAP-1"
gid          = "genetics_ceg"
ref          = "MAP-1"
page         = 104
title        = "MUTYH-associated polyposis phenotype and risk status"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["MAP-2", "MAP-3"]

[facets]
disease   = "genetics_ceg"
biomarker = ["mutyh", "serrated-polyposis"]
timepoint = ["diagnosis", "genetic-testing"]

[[variables]]
name = "cumulative_adenoma_count"
type = "number"
[[variables]]
name = "age_at_crc"
type = "number"
[[variables]]
name = "mutyh_result"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "consanguinity"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "duodenal_findings"
type = "text"
[[variables]]
name = "serrated_polyps"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, MAP-1, p104
- MUTYH-associated polyposis (MAP): sorting a patient by phenotype and risk status
- Applies both to a personal history of MAP and to an asymptomatic family member at risk
- All recommendations category 2A unless otherwise indicated

# Assessment

- Cumulative adenoma count ___ (cumulative_adenoma_count)
- Age at CRC diagnosis ___ (age_at_crc)
- Germline MUTYH testing result ___ (mutyh_result)
- Family history ___ (family_history)
- Consanguinity ___ (consanguinity)
- Duodenal findings ___ (duodenal_findings)
- Serrated polyps ___ (serrated_polyps)

# MUTYH-associated polyposis phenotype

- Biallelic MUTYH PVs
- Polyposis or colon cancers consistent with autosomal recessive inheritance
    - Parents unaffected, siblings affected
- Possibility of consanguinity
- <100 adenomas, uncommonly >=100
    - Multiple serrated polyps may also be seen in patients with MAP polyposis
        - Hyperplastic polyps
        - Sessile serrated polyps
        - Traditional serrated adenomas
    - A patient with MAP may also meet criteria for SPS
- Adenomas and CRC at age older than classical FAP, median CRC age >50 y
- Duodenal cancer (5%)
- Duodenal adenomas

# Next

- Personal history of MUTYH-associated polyposis (MAP), go to Treatment and Surveillance (MAP-2)
- Asymptomatic family member at risk, family PV known, go to Genetic Testing and Surveillance (MAP-3)
