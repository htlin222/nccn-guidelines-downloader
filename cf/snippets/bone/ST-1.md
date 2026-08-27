+++
id           = "bone/ST-1"
gid          = "bone"
ref          = "ST-1"
page         = 41
title        = "AJCC TNM staging system for bone: T and N definitions by anatomic site"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["BONE-1", "OSTEO-1", "EW-1", "CHON-1", "CHOR-1"]

[facets]
disease   = "bone"
timepoint = "staging"

[[variables]]
name = "site"
type = "text"
[[variables]]
name = "site_group"
type = "enum"
options = ["appendicular", "trunk", "skull", "facial-bones", "spine", "pelvis"]
[[variables]]
name = "size_cm"
type = "number"
[[variables]]
name = "segments"
type = "text"
[[variables]]
name = "extraosseous"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "t"
type = "text"
[[variables]]
name = "n"
type = "text"
+++

# Source

- NCCN Bone Cancer v1.2027, ST-1, p41
- American Joint Committee on Cancer (AJCC) TNM staging system for bone, Table 1, definitions for T, N, M
- Source is the AJCC Cancer Staging Manual, Eighth Edition (2017), used with the permission of the American College of Surgeons
- Primary malignant lymphoma and multiple myeloma are not included
- The T definition to use depends on the anatomic site: appendicular skeleton, trunk, skull, and facial bones; spine; or pelvis
- Table 1 is continued on the next page

# Assessment

- Primary bone site ___ (site)
- Anatomic site group for the T definition ___ (site_group)
- Greatest dimension ___ (size_cm) cm
- Segments involved, vertebral or pelvic ___ (segments)
- Extraosseous extension ___ (extraosseous)
- T category ___ (t)
- N category ___ (n)

# T, appendicular skeleton, trunk, skull, and facial bones

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor ≤8 cm in greatest dimension
- T2, tumor >8 cm in greatest dimension
- T3, discontinuous tumors in the primary bone site

# T, spine

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor confined to one vertebral segment or two adjacent vertebral segments
- T2, tumor confined to three adjacent vertebral segments
- T3, tumor confined to four or more adjacent vertebral segments, or any nonadjacent vertebral segments
- T4, extension into the spinal canal or great vessels
    - T4a, extension into the spinal canal
    - T4b, evidence of gross vascular invasion or tumor thrombus in the great vessels

# T, pelvis

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- T1, tumor confined to one pelvic segment with no extraosseous extension
    - T1a, tumor ≤8 cm in greatest dimension
    - T1b, tumor >8 cm in greatest dimension
- T2, tumor confined to one pelvic segment with extraosseous extension, or two segments without extraosseous extension
    - T2a, tumor ≤8 cm in greatest dimension
    - T2b, tumor >8 cm in greatest dimension
- T3, tumor spanning two pelvic segments with extraosseous extension
    - T3a, tumor ≤8 cm in greatest dimension
    - T3b, tumor >8 cm in greatest dimension
- T4, tumor spanning three pelvic segments or crossing the sacroiliac joint
    - T4a, tumor involves sacroiliac joint and extends medial to the sacral neuroforamen
    - T4b, tumor encasement of external iliac vessels or presence of gross tumor thrombus in major pelvic vessels

# N, regional lymph nodes

- NX, regional lymph nodes cannot be assessed
    - Because of the rarity of lymph node involvement in bone sarcomas, the designation NX may not be appropriate
    - Consider such cases N0 unless clinical node involvement is clearly evident
- N0, no regional lymph node metastasis
- N1, regional lymph node metastasis
