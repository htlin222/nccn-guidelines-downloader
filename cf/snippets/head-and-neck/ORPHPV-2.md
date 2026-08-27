+++
id           = "head-and-neck/ORPHPV-2"
gid          = "head-and-neck"
ref          = "ORPHPV-2"
page         = 22
title        = "p16 (HPV)-positive oropharynx T0-2, N1 (single node 3 cm or less): treatment of primary and neck, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ORPHPV-1", "SURG-A", "ORPH-A", "SYST-A", "FOLL-A", "ADV-3", "ST-7", "ST-4"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subsite"
type = "enum"
options = ["base of tongue", "tonsil", "posterior pharyngeal wall", "soft palate"]
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "midline"]
[[variables]]
name = "p16"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "node"
type = "text"
+++

# Source

- NCCN Cancer of the Oropharynx (p16 [HPV]-positive) v2.2026, ORPHPV-2, p22
- Applies to base of tongue / tonsil / posterior pharyngeal wall / soft palate
- Applies to p16 (HPV)-positive, clinical stage T0-2, N1 (single node ≤3 cm)
- Clinical staging definitions are based on the AJCC 8th edition for oropharynx cancer, see ST-4 for p16-negative and ST-7 for p16-positive
    - Definitions for nodal staging criteria previously used in clinical trials (AJCC 7th edition) are included
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary subsite ___ (subsite), ___ (side)
- p16 (HPV) ___ (p16)
- Clinical stage ___ (ctnm)
- Single node, largest dimension ___ (node)

# Treatment of primary and neck

- Resection of primary and ipsilateral or bilateral neck dissection
    - Principles of Surgery (SURG-A)
    - Tumors in the base of tongue, posterior pharyngeal wall, and soft palate require consideration of bilateral neck treatment
    - Tumors of the tonsil invading the tongue base also require consideration of bilateral neck treatment
- or Definitive RT
    - Principles of Radiation Therapy (ORPH-A)
- or Concurrent systemic therapy/RT (category 2B)
    - Principles of Radiation Therapy (ORPH-A)
    - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- or Clinical trials

# Pathology review after resection

- Pathologic staging criteria differ from clinical staging criteria in HPV-mediated oropharyngeal cancer
    - For pathologic stage following resection, see AJCC 8th edition for appropriate staging criteria (ST-7)
- Adverse pathologic features are
    - Extranodal extension
    - Positive margins
    - Close margins (<3 mm)
    - pT3 or pT4 primary
    - One positive node >3 cm, or multiple positive nodes
    - Nodal disease in levels IV or V
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- The definition of an adverse pathologic feature in the context of HPV-positive disease is an area of active research
    - This includes the presence and extent of extranodal extension, and the number of involved nodes

# Adjuvant treatment

- No adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- Extranodal extension, with or without positive margin
    - Systemic therapy/RT (ORPH-A, SYST-A)
        - The recommendations for patients at high risk with extranodal extension + positive margins are based on randomized studies involving patients for whom the HPV status of their tumors was not specified
    - or RT (category 2B) (ORPH-A)
- Positive margin
    - Re-resection, if feasible
    - or Systemic therapy/RT (ORPH-A, SYST-A)
    - or RT (category 2B) (ORPH-A)
- Other risk features
    - RT (ORPH-A)
        - De-escalation to 50 Gy may be considered in p16 (HPV)-positive oropharynx cancer with ≤4 positive ipsilateral lymph nodes, largest ≤6 cm, T1-T2 resected to negative or close margins (<3 mm) with ≤1 mm extranodal extension (category 2B)
        - Based on ECOG 3311 Intermediate Risk criteria (Ferris RL, et al. J Clin Oncol 2022)
    - or Systemic therapy/RT (category 2B) (ORPH-A, SYST-A)

# Next

- After resection with no adverse pathologic features, follow-up (FOLL-A, 1 of 2)
- After systemic therapy/RT or RT, post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- Recurrent or persistent disease (ADV-3)
