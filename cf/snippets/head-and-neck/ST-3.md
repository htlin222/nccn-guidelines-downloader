+++
id           = "head-and-neck/ST-3"
gid          = "head-and-neck"
ref          = "ST-3"
page         = 131
title        = "AJCC TNM staging system for the nasopharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["NASO-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "tumor_extent"
type = "text"
[[variables]]
name = "ebv_node_status"
type = "enum"
options = ["EBV-positive", "EBV-negative", "not tested"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "node_size"
type = "text"
[[variables]]
name = "node_laterality"
type = "enum"
options = ["unilateral", "bilateral", "none"]
[[variables]]
name = "node_level"
type = "enum"
options = ["above caudal border of cricoid", "extends below caudal border of cricoid"]
[[variables]]
name = "ene"
type = "enum"
options = ["no advanced extranodal extension", "advanced radiologic extranodal extension"]
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "stage_group"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-3, p131
- Table 2, American Joint Committee on Cancer (AJCC) TNM Staging System for the Nasopharynx, 9th ed., 2021
- Does not apply to mucosal melanoma
- Does not apply to lymphoma
- Does not apply to sarcoma of the soft tissue, bone and cartilage
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging System

# Assessment

- Extent of primary tumor: ___ (tumor_extent)
- Cervical node EBV status, when no primary tumor is identified: ___ (ebv_node_status)
- T category: ___ (t_category)
- Largest involved cervical node, greatest dimension: ___ (node_size)
- Cervical nodal laterality: ___ (node_laterality)
- Nodal level relative to the caudal border of the cricoid cartilage: ___ (node_level)
- Radiologic extranodal extension: ___ (ene)
- N category: ___ (n_category)
- M category: ___ (m_category)
- Anatomic stage group: ___ (stage_group)

# Primary tumor (T)

- TX, primary tumor cannot be assessed
- T0, no tumor identified, but EBV-positive cervical node(s) involvement
- Tis, carcinoma in situ
- T1, either of
    - Tumor confined to nasopharynx
    - Extension to oropharynx and/or nasal cavity without parapharyngeal involvement
- T2, either of
    - Tumor with extension to parapharyngeal space
    - And/or adjacent soft tissue involvement, meaning medial pterygoid, lateral pterygoid, or prevertebral muscles
- T3, tumor with unequivocal infiltration of any of
    - Bony structures at skull base
    - Cervical vertebra
    - Pterygoid structures
    - And/or paranasal sinuses
- T4, tumor with any of
    - Intracranial extension
    - Involvement of cranial nerves
    - Hypopharynx
    - Orbit
    - Parotid gland
    - And/or extensive soft tissue infiltration beyond the anterolateral surface of the lateral pterygoid muscle

# Regional lymph nodes (N)

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, either of the following, 6 cm or smaller in greatest dimension, above the caudal border of cricoid cartilage, without advanced extranodal extension
    - Unilateral metastasis in cervical lymph node(s)
    - And/or unilateral or bilateral metastasis in retropharyngeal lymph node(s)
- N2, bilateral metastasis in cervical lymph node(s), 6 cm or smaller in greatest dimension, above the caudal border of cricoid cartilage, without advanced extranodal extension
- N3, unilateral or bilateral metastasis in cervical lymph node(s), with any of
    - Larger than 6 cm in greatest dimension
    - And/or extension below the caudal border of cricoid cartilage
    - Advanced radiologic extranodal extension with involvement of adjacent muscles, skin, and/or neurovascular bundle

# Distant metastasis (M)

- M0, the cancer has not spread to distant parts of the body
- M1a, the cancer has spread to distant parts of the body, but there are no more than 3 areas of cancer spread
- M1b, the cancer has spread to distant parts of the body, and there are more than 3 areas of cancer spread

# Histologic grade (G)

- A grading system is not used for NPCs

# Anatomic stage and prognostic groups

- Stage 0, Tis N0 M0
- Stage IA, T1 to T2 N0 M0
- Stage IB, T0 to T2 N1 M0
- Stage II, either of
    - T0 to T2 N2 M0
    - T3 N0 to N2 M0
- Stage III, either of
    - T4 Any N M0
    - Any T N3 M0
- Stage IVA, Any T Any N M1a
- Stage IVB, Any T Any N M1b
