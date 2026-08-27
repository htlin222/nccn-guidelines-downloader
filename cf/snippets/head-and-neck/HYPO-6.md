+++
id           = "head-and-neck/HYPO-6"
gid          = "head-and-neck"
ref          = "HYPO-6"
page         = 33
title        = "Response assessment after induction chemotherapy for T4a hypopharynx, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["HYPO-5", "SURG-A", "SYST-A", "FOLL-A", "ADV-1", "ADV-3"]

[facets]
disease   = "head-and-neck"
timepoint = ["induction", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "cycles"
type = "number"
[[variables]]
name = "primary_response"
type = "enum"
options = ["CR", "PR", "less-than-PR"]
[[variables]]
name = "neck_status"
type = "text"
[[variables]]
name = "unresectable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, HYPO-6, p33
- Applies to cancer of the hypopharynx, T4a, N0-3, after induction chemotherapy
    - Induction chemotherapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
    - See Discussion on induction chemotherapy
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the hypopharynx
- ___ (ctnm)
- Induction chemotherapy cycles completed ___ (cycles)
    - In randomized clinical trials, assessment of response has been done after 2 or 3 cycles
- Primary site response ___ (primary_response)
- Neck disease ___ (neck_status)
- Unresectable primary or nodal disease ___ (unresectable)

# Response: CR at primary site, and stable or improved disease in neck

- RT, per Principles of Radiation Therapy (HYPO-A)
- or Consider systemic therapy/RT (HYPO-A, SYST-A)

# Response: PR at primary site, and stable or improved disease in neck

- Systemic therapy/RT (HYPO-A, SYST-A)
- or Surgery, per Principles of Surgery (SURG-A)
    - Then adjuvant treatment, below

# Response: less than PR at primary site

- Surgery, per Principles of Surgery (SURG-A)
    - Then adjuvant treatment, below

# Adjuvant treatment after surgery

- No adverse pathologic features
    - RT (HYPO-A)
- Adverse pathologic features, defined as extranodal extension, positive margins, close margins, pT3 or pT4 primary, pN2 or pN3 nodal disease, perineural invasion, vascular invasion, and lymphatic invasion (Discussion)
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (HYPO-A, SYST-A) (category 1)
    - Other risk features
        - RT (HYPO-A)
        - or Consider systemic therapy/RT (HYPO-A, SYST-A)

# Next

- Unresectable primary or nodal disease, treatment of very advanced head and neck cancer, go to ADV-1
- Post systemic therapy/RT or RT neck evaluation, go to FOLL-A (2 of 2)
- Follow-up, go to FOLL-A (1 of 2)
- Recurrent or persistent disease, go to ADV-3
