+++
id           = "testicular/NSEM-3"
gid          = "testicular"
ref          = "NSEM-3"
page         = 18
title        = "Primary treatment of clinical stage IIA and IIB nonseminoma"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-2", "NSEM-4", "NSEM-5", "NSEM-6", "TEST-E", "TEST-H"]

[facets]
disease    = "testicular"
stage      = "II"
timepoint  = "primary-treatment"
intent     = "curative"
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["IIA", "IIB"]
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "hcg"
type = "text"
[[variables]]
name = "node_sites"
type = "text"
[[variables]]
name = "imaging_date"
type = "text"
+++

# Source

- NCCN Testicular Cancer v2.2026, NSEM-3, p18
- Applies to nonseminoma, clinical stage IIA and IIB
- BEP = Bleomycin/Etoposide/Cisplatin
- EP = Etoposide/Cisplatin
- First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma
- Clinical stage ___ (clinical_stage)
- AFP ___ (afp)
    - Mildly elevated, non-rising AFP levels may not indicate presence of germ cell tumor
    - Decisions to treat should not be based solely on AFP values <20 ng/mL
    - More highly elevated AFP levels generally indicate the presence of nonseminomatous tumor elements
- Beta-hCG ___ (hcg)
    - Further workup should be considered before initiating treatment for mildly elevated beta-hCG (generally <20 IU/L)
    - Other factors, including hypogonadism and cannabis use, can cause false-positive results
- Markers negative, or persistent marker elevation
- Distribution of lymph node metastases ___ (node_sites)
    - Within lymphatic drainage sites
    - Multifocal, symptomatic, or with aberrant lymphatic drainage
- Most recent CT or MRI ___ (imaging_date)
- Somatic type malignancy present, previously referred to as transformed teratoma
- Teratoma predominance with normal markers

# Before starting locoregional treatment

- All locoregional treatment is recommended within 4 weeks of CT or MRI
- All locoregional treatment is recommended within 2 weeks of confirmation of normal tumor markers
- Referral to a high-volume center is recommended
- Principles of Surgery for Germ Cell Tumors (TEST-H)
- For select cases of clinical stage IIA disease with borderline retroperitoneal lymph nodes, waiting 4–8 weeks and repeat imaging (CT or MRI) to confirm staging before initiating treatment can be considered

# Stage IIA, markers negative

- Nerve-sparing RPLND
    - Locoregional timing and high-volume referral as above (TEST-H)
    - RPLND is preferred as primary treatment for stage II germ cell tumors with somatic type malignancy
    - Then Postsurgical Management (NSEM-5)
- or First-line chemotherapy (TEST-E)
    - BEP for 3 cycles, or
    - EP for 4 cycles
    - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced GFR or older age
    - Then Post First-Line Chemotherapy Management (NSEM-4)

# Stage IIB, markers negative, lymph node metastases within lymphatic drainage sites

- First-line chemotherapy (TEST-E)
    - BEP for 3 cycles, or
    - EP for 4 cycles
    - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced GFR or older age
    - Then Post First-Line Chemotherapy Management (NSEM-4)
- or Nerve-sparing RPLND in highly selected cases
    - RPLND should be considered for stage II tumors with teratoma predominance in patients with normal markers
    - RPLND is preferred as primary treatment for stage II germ cell tumors with somatic type malignancy
    - Locoregional timing and high-volume referral as above (TEST-H)
    - Then Postsurgical Management (NSEM-5)

# Stage IIB, markers negative, multifocal, symptomatic, or aberrant lymphatic drainage

- First-line chemotherapy (TEST-E)
    - BEP for 3 cycles, or
    - EP for 4 cycles
    - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced GFR or older age
    - Then Post First-Line Chemotherapy Management (NSEM-4)

# Persistent marker elevation

- Stage IIA or stage IIB with persistent marker elevation is not treated on this pathway
    - Read the AFP and beta-hCG caveats above before calling markers persistently elevated
    - Go to Primary Treatment (NSEM-6)

# Next

- After nerve-sparing RPLND, go to Postsurgical Management (NSEM-5)
- After first-line chemotherapy, go to Post First-Line Chemotherapy Management (NSEM-4)
- Persistent marker elevation, go to Primary Treatment (NSEM-6)
