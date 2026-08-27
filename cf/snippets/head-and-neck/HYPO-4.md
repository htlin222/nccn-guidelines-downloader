+++
id           = "head-and-neck/HYPO-4"
gid          = "head-and-neck"
ref          = "HYPO-4"
page         = 31
title        = "Response assessment after induction chemotherapy for cancer of the hypopharynx, and adjuvant treatment after surgery"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["HYPO-1", "HYPO-3", "HYPO-A", "SURG-A", "SYST-A", "FOLL-A", "ADV-1", "ADV-3"]

[facets]
disease   = "head-and-neck"
timepoint = ["induction", "primary-treatment", "adjuvant"]

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
options = ["CR", "PR", "less than PR"]
[[variables]]
name = "neck_response"
type = "text"
[[variables]]
name = "resectable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, HYPO-4, p31
- Applies to response assessment after induction chemotherapy for T2-3, N0-3 or T1, N+
    - Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
    - In randomized clinical trials, assessment of response has been done after 2 or 3 cycles
- Also covers adjuvant treatment after surgery on this page
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the hypopharynx
- ___ (ctnm)
- Induction chemotherapy given, ___ (cycles) cycles
- Primary site response ___ (primary_response)
- Neck: stable or improved disease ___ (neck_response)
- Primary and nodal disease resectable ___ (resectable)

# Primary site complete response (CR), and stable or improved disease in neck

- Definitive RT (category 1)
    - RT per Principles of Radiation Therapy (HYPO-A)
- or Consider systemic therapy/RT (category 2B)
    - Systemic therapy per SYST-A, RT per HYPO-A

# Primary site partial response (PR), and stable or improved disease in neck

- Systemic therapy/RT (category 2B)
    - Systemic therapy per SYST-A, RT per HYPO-A
- or Surgery
    - Surgery per Principles of Surgery (SURG-A)
    - Followed by adjuvant treatment on this page

# Primary site less than partial response (< PR)

- Surgery
    - Surgery per SURG-A
    - Followed by adjuvant treatment on this page
- or Unresectable primary or nodal disease, go to ADV-1

# Adjuvant treatment after surgery

- Review pathology for adverse pathologic features
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT3 or pT4 primary
    - pN2 or pN3 nodal disease
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- No adverse pathologic features
    - RT (HYPO-A)
- Adverse pathologic features
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1), systemic therapy per SYST-A, RT per HYPO-A
    - Other risk features
        - RT (HYPO-A)
        - or Consider systemic therapy/RT, systemic therapy per SYST-A, RT per HYPO-A

# Next

- After definitive RT or systemic therapy/RT, post systemic therapy/RT or RT neck evaluation, go to FOLL-A (2 of 2)
- After surgery and adjuvant treatment, follow-up, go to FOLL-A (1 of 2)
- Recurrent or persistent disease, go to ADV-3
- Unresectable primary or nodal disease, go to ADV-1
