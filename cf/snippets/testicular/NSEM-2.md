+++
id           = "testicular/NSEM-2"
gid          = "testicular"
ref          = "NSEM-2"
page         = 17
title        = "Primary treatment for nonseminoma clinical stage I with and without risk factors, and stage IS"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-1", "NSEM-5", "NSEM-6", "TEST-B", "TEST-H", "TEST-I"]

[facets]
disease   = "testicular"
stage     = "I"
timepoint = ["primary-treatment", "adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["I without risk factors", "I with risk factors", "IS"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "cord_scrotal_invasion"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "embryonal_predominance"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "beta_hcg"
type = "text"
+++

# Source

- NCCN Testicular Cancer - Nonseminoma v2.2026, NSEM-2, p17
- Applies to nonseminoma clinical stage I without risk factors, stage I with risk factors, and stage IS
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, nonseminoma
- ___ (histology)
- Clinical stage ___ (clinical_stage)
- AFP ___ (afp)
- Beta-hCG ___ (beta_hcg)

# Risk factors for recurrence

- Lymphovascular invasion ___ (lvi)
- Invasion of spermatic cord or scrotum ___ (cord_scrotal_invasion)
- Predominance of embryonal carcinoma ___ (embryonal_predominance)
    - Considered by some centers as an additional risk factor for relapse

# Histology qualifiers before choosing primary treatment

- Stage I germ cell tumor with somatic type malignancy (previously referred to as transformed teratoma)
    - RPLND is preferred as primary treatment
- Stage I pure teratoma with normal markers
    - Should receive either surveillance or RPLND

# Stage I without risk factors, primary treatment

- Surveillance (preferred)
    - Then follow-up for nonseminoma, Table 7 (TEST-B 1 of 3)
- or Nerve-sparing RPLND
    - Recommended within 4 weeks of CT or MRI
    - Recommended within 2 weeks of confirmation of normal tumor markers
    - Referral to a high-volume center is recommended
    - Principles of Surgery for Germ Cell Tumors (TEST-H)
    - Then postsurgical management (NSEM-5)
- or Adjuvant chemotherapy: BEP for 1 cycle
    - BEP = bleomycin/etoposide/cisplatin
    - Recommend imaging within the 4 weeks prior to the initiation of chemotherapy to confirm staging, even if the scan was done previously (TEST-I)
    - Then follow-up for nonseminoma, Table 9 (TEST-B 2 of 3)

# Stage I with risk factors, primary treatment

- Surveillance
    - Then follow-up for nonseminoma, Table 8 (TEST-B 1 of 3)
- or Adjuvant chemotherapy: BEP for 1 cycle
    - BEP = bleomycin/etoposide/cisplatin
    - Recommend imaging within the 4 weeks prior to the initiation of chemotherapy to confirm staging, even if the scan was done previously (TEST-I)
    - Then follow-up for nonseminoma, Table 9 (TEST-B 2 of 3)
- or Nerve-sparing RPLND
    - Recommended within 4 weeks of CT or MRI
    - Recommended within 2 weeks of confirmation of normal tumor markers
    - Referral to a high-volume center is recommended
    - Principles of Surgery for Germ Cell Tumors (TEST-H)
    - Then postsurgical management (NSEM-5)

# Stage IS with highly elevated or persistently rising markers

- Confirm the markers are truly informative before treating
    - Mildly elevated, non-rising AFP levels may not indicate presence of germ cell tumor
    - Decisions to treat should not be based solely on AFP values <20 ng/mL
    - More highly elevated AFP levels generally indicate the presence of nonseminomatous tumor elements
    - Consider further workup before initiating treatment for mildly elevated beta-hCG (generally <20 IU/L), since other factors including hypogonadism and cannabis use can cause false-positive results
- Repeat scrotal ultrasound to rule out a contralateral testis mass, if one has not been conducted in the last 3 months
- Then primary treatment for stage IS (NSEM-6)

# Next

- Stage I on surveillance, go to follow-up for nonseminoma, Table 7 or Table 8 (TEST-B 1 of 3)
- Stage I after nerve-sparing RPLND, go to postsurgical management (NSEM-5)
- Stage I after adjuvant BEP for 1 cycle, go to follow-up for nonseminoma, Table 9 (TEST-B 2 of 3)
- Stage IS with highly elevated or persistently rising markers, go to primary treatment (NSEM-6)
