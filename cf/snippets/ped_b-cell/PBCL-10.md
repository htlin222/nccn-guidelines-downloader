+++
id           = "ped_b-cell/PBCL-10"
gid          = "ped_b-cell"
ref          = "PBCL-10"
page         = 15
title        = "Surveillance/follow-up and late effects monitoring after treatment for Burkitt lymphoma or DLBCL"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-6", "PBCL-3", "PBCL-11", "DIS-A"]

[facets]
disease   = "ped_b-cell"
histology = ["burkitt", "dlbcl"]
timepoint = "surveillance"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["burkitt-lymphoma", "diffuse-large-b-cell-lymphoma"]
[[variables]]
name = "followup_year"
type = "enum"
options = ["year-1", "year-2", "year-3", "beyond-year-3"]
[[variables]]
name = "symptomatic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "relapse_suspicion"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-10, p15
- Burkitt lymphoma and diffuse large B-cell lymphoma
- Applies after completion of therapy, on surveillance/follow-up
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Currently in follow-up ___ (followup_year)
- Symptomatic ___ (symptomatic)
- Clinical suspicion of relapse ___ (relapse_suspicion)

# History and physical (H&P)

- Burkitt lymphoma (BL)
    - Every 1–3 months for 1 year
    - Then every 3 months for year 2
    - Then every 6 months for year 3
    - Then annually
- DLBCL
    - Every 3 months for 3 years
    - Then annually
- More frequent follow-up may be needed if the patient is symptomatic

# Laboratory and imaging surveillance

- CBC with differential, as clinically indicated
- Routine surveillance imaging is not recommended
    - Reassess sites of original disease with imaging studies as indicated (PBCL-3), only if clinical suspicion of relapse

# Late effects monitoring

- Attention to cardiac function
- Attention to gonadal function
- Attention to neurocognitive function
- Attention to bone health
- Attention to risk of secondary leukemia
    - See Children's Oncology Group Survivorship Guidelines
    - See also the NCCN Guidelines for Survivorship
- Psychosocial support and counseling
    - Assess for distress
    - Refer to NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Next

- Relapse, go to Relapse or Refractory Disease (PBCL-11)
    - Pathologic confirmation of relapse is recommended before starting therapy for relapsed disease
    - Restaging workup should be completed as for initial diagnosis
