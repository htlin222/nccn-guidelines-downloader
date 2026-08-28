+++
id           = "testicular/NSEM-5"
gid          = "testicular"
ref          = "NSEM-5"
page         = 20
title        = "Postsurgical management of nonseminoma after primary nerve-sparing RPLND, by pathologic nodal stage"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-2", "TEST-B", "TEST-E"]

[facets]
disease   = "testicular"
stage     = ["I", "II"]
timepoint = ["adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["IA", "IB", "IIA", "IIB"]
[[variables]]
name = "risk_factors"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "pn_stage"
type = "enum"
options = ["pN0", "pN1", "pN2", "pN3"]
[[variables]]
name = "pure_teratoma"
type = "enum"
options = ["present", "absent"]
+++

# Source

- NCCN Testicular Cancer - Nonseminoma v2.2026, NSEM-5, p20
- Applies to stage IA, IB with and without risk factors, IIA, and IIB treated with primary nerve-sparing RPLND
- Risk factors for recurrence include lymphovascular invasion, or invasion of spermatic cord or scrotum
    - Some centers consider predominance of embryonal carcinoma as an additional risk factor for relapse
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, nonseminoma
- Clinical stage before surgery ___ (clinical_stage)
- Risk factors for recurrence ___ (risk_factors)
- Treated with primary nerve-sparing RPLND
- Pathologic nodal stage ___ (pn_stage)
- Pure teratoma in the resected nodes ___ (pure_teratoma)

# pN0

- Surveillance
- Then follow-up for nonseminoma, Table 9 (TEST-B 2 of 3)

# pN1

- Surveillance (preferred)
- or Chemotherapy: EP for 2 cycles
    - EP = etoposide/cisplatin
    - First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
- Then follow-up for nonseminoma, Table 9 (TEST-B 2 of 3) or Table 12 (TEST-B 3 of 3)

# pN2

- Surveillance is preferred for patients who have pure teratoma
- Chemotherapy: EP for 2 cycles
    - EP = etoposide/cisplatin
    - First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
- or Surveillance
- Then follow-up for nonseminoma, Table 11 (TEST-B 3 of 3)

# pN3

- Surveillance is preferred for patients who have pure teratoma
- Chemotherapy
    - First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
    - This is a rare circumstance
    - Due to the limited available data, the Panel could not reach a consensus as to the optimal regimen
    - BEP for 2–3 cycles or EP for 2–4 cycles can be considered
- or Surveillance
    - CT or MRI of abdomen/pelvis, or chest x-ray, 2–3 months after surgery
- Then follow-up for nonseminoma, Table 12 (TEST-B 3 of 3)

# Next

- pN0, go to follow-up for nonseminoma, Table 9 (TEST-B 2 of 3)
- pN1, go to follow-up for nonseminoma, Table 9 (TEST-B 2 of 3) or Table 12 (TEST-B 3 of 3)
- pN2, go to follow-up for nonseminoma, Table 11 (TEST-B 3 of 3)
- pN3, go to follow-up for nonseminoma, Table 12 (TEST-B 3 of 3)
