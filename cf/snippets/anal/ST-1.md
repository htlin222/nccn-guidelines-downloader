+++
id           = "anal/ST-1"
gid          = "anal"
ref          = "ST-1"
page         = 25
title        = "AJCC TNM staging classification and stage groups for anal carcinoma"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["ANAL-1", "ANAL-2", "ANAL-3"]

[facets]
disease   = "anal"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "t"
type = "text"
[[variables]]
name = "n"
type = "text"
[[variables]]
name = "m"
type = "text"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Anal Carcinoma v2.2026, ST-1, p25
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Anal Carcinoma, 9th ed., 2022
- Table 1 defines T, N, M; Table 2 gives the anatomic stage / prognostic groups

# Assessment

- Greatest dimension of primary tumor ___ (tumor_size) cm
- Invasion of an adjacent organ, such as vagina, urethra, or bladder, assessed
- Regional lymph nodes assessed, by station
- Distant metastasis assessed, and whether microscopically confirmed
- T ___ (t) / N ___ (n) / M ___ (m)
- Stage group ___ (stage_group)

# T, primary tumor

- TX, primary tumor not assessed
- T0, no evidence of primary tumor
- T1, tumor less than or equal to 2 cm in greatest dimension
- T2, tumor greater than 2 cm but less than or equal to 5 cm in greatest dimension
- T3, tumor greater than 5 cm in greatest dimension
- T4, tumor of any size invades adjacent organ(s)
    - such as the vagina, urethra, or bladder

# N, regional lymph nodes

- NX, regional lymph nodes cannot be assessed
- N0, no tumor involvement of regional lymph node(s)
- N1, tumor involvement of regional lymph node(s)
    - N1a, tumor involvement of inguinal, mesorectal, superior rectal, internal iliac, or obturator lymph node(s)
    - N1b, tumor involvement of external iliac lymph node(s)
    - N1c, tumor involvement of N1b (external iliac) with any N1a node(s)

# M, distant metastasis

- cM0, no distant metastasis
- cM1, distant metastasis
- pM1, microscopic confirmation of distant metastasis

# Stage groups

- Stage I, T1 N0 M0
- Stage IIA, T2 N0 M0
- Stage IIB, T1-T2 N1 M0
- Stage IIIA, T3 N0-N1 M0
- Stage IIIB, T4 N0 M0
- Stage IIIC, T4 N1 M0
- Stage IV, any T, any N, M1
