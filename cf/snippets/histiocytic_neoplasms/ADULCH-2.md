+++
id           = "histiocytic_neoplasms/ADULCH-2"
gid          = "histiocytic_neoplasms"
ref          = "ADULCH-2"
page         = 12
title        = "Treatment of unifocal LCH not involving critical organs, by site and symptom status"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["ADULCH-1", "ADULCH-1A", "ADULCH-3", "ADULCH-4"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "enum"
options = ["isolated bone", "isolated skin", "other single-system"]
[[variables]]
name = "lesion_detail"
type = "text"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["symptomatic", "asymptomatic"]
+++

# Source

- NCCN Adult Langerhans Cell Histiocytosis v2.2026, ADULCH-2, p12
- Applies to unifocal LCH not involving critical organs (ie, CNS, liver, spleen)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Unifocal LCH, critical organs not involved
    - CNS not involved
    - Liver not involved
    - Spleen not involved
- Presentation site: ___ (site)
- Lesion: ___ (lesion_detail)
- ___ (symptom_status)

# Isolated bone involvement

- Symptomatic
    - Bisphosphonate (HIST-D)
        - For bone lesions not amenable to local therapies due to size and location
    - Corticosteroid injections
        - Triamcinolone injection or equivalent corticosteroid
    - Limited curettage
    - Radiation therapy (RT)
        - Principles of Radiation Therapy (HIST-G)
- Asymptomatic
    - Observation
        - If patient becomes symptomatic, refer to symptomatic pathway for treatment recommendations

# Isolated skin disease

- Symptomatic
    - Corticosteroid topical or injection
        - Triamcinolone injection or equivalent corticosteroid
    - Mechlorethamine topical, with or without topical steroids
    - Psoralen plus UVA
    - Narrowband UVB
    - RT
        - Principles of Radiation Therapy (HIST-G)
- Asymptomatic
    - Observation
        - If patient becomes symptomatic, refer to symptomatic pathway for treatment recommendations

# Other single-system LCH

- Symptomatic
    - Local therapy
        - RT
            - Principles of Radiation Therapy (HIST-G)
        - Surgical excision
- Asymptomatic
    - Observation
        - If patient becomes symptomatic, refer to symptomatic pathway for treatment recommendations

# Next

- After treatment or observation, go to Follow-up (ADULCH-4)
