+++
id           = "head-and-neck/ORPHPV-4"
gid          = "head-and-neck"
ref          = "ORPHPV-4"
page         = 24
title        = "p16 (HPV)-positive oropharynx T0-3,N3 or T4,N0-3: treatment of primary and neck, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ORPHPV-3", "SURG-A", "ORPH-A", "SYST-A", "FOLL-A", "ADV-3", "ST-7"]

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
name = "fixed_or_matted_nodes"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Cancer of the Oropharynx (p16 [HPV]-positive) v2.2026, ORPHPV-4, p24
- Applies to base of tongue / tonsil / posterior pharyngeal wall / soft palate
- Applies to p16 (HPV)-positive, clinical stage T0-3,N3 or T4,N0-3
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary subsite ___ (subsite), ___ (side)
- p16 (HPV) ___ (p16)
- Clinical stage ___ (ctnm)
- Clinical evidence of fixed or matted nodes, or obvious extranodal extension ___ (fixed_or_matted_nodes)
    - If present, resection is not recommended and concurrent systemic therapy/RT is preferred

# Treatment of primary and neck

- Concurrent systemic therapy/RT (preferred)
    - Principles of Radiation Therapy (ORPH-A)
    - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- or Resection of primary and ipsilateral or bilateral neck dissection
    - Principles of Surgery (SURG-A)
    - Consider bilateral neck treatment for tumors in the base of tongue, posterior pharyngeal wall, and soft palate
    - Consider bilateral neck treatment for tumors of the tonsil invading the tongue base
    - Not recommended if there is clinical evidence of fixed or matted nodes or obvious extranodal extension
- or Induction chemotherapy (category 3) followed by RT, or by systemic therapy/RT
    - See Discussion on induction chemotherapy
    - Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
    - Principles of Radiation Therapy (ORPH-A)
- or Clinical trials

# Adjuvant treatment after resection

- Assess pathologic features on the resection specimen
    - Pathologic staging criteria differ from clinical staging criteria in HPV-mediated oropharyngeal cancer
    - For pathologic stage following resection, see AJCC 8th edition for appropriate staging criteria (ST-7)
    - Adverse pathologic features are: extranodal extension, positive margins, close margins (<3 mm), pT3 or pT4 primary, one positive node >3 cm or multiple positive nodes, nodal disease in levels IV or V, perineural invasion, vascular invasion, and lymphatic invasion
    - The definition of an adverse pathologic feature in the context of HPV+ disease is an area of active research, including the presence and extent of extranodal extension, and the number of involved nodes
- No adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- Adverse pathologic features, extranodal extension and/or positive margin
    - Systemic therapy/RT (ORPH-A, SYST-A)
        - The recommendations for patients at high risk with extranodal extension + positive margins are based on randomized studies involving patients for whom the HPV status of their tumors was not specified
- Adverse pathologic features, other risk features
    - RT (ORPH-A)
    - or Consider systemic therapy/RT (ORPH-A, SYST-A)

# Next

- After concurrent systemic therapy/RT, or after induction chemotherapy followed by RT or systemic therapy/RT, go to Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- After resection with no adverse pathologic features, go to Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease, go to ADV-3
