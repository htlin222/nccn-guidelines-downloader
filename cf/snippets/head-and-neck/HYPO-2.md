+++
id           = "head-and-neck/HYPO-2"
gid          = "head-and-neck"
ref          = "HYPO-2"
page         = 29
title        = "Treatment of primary and neck, and adjuvant treatment, for hypopharyngeal cancer amenable to larynx-preserving surgery"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["HYPO-1", "HYPO-3", "SURG-A", "SYST-A", "FOLL-A", "ADV-3"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "close", "positive"]
[[variables]]
name = "ene"
type = "enum"
options = ["present", "absent", "not assessed"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, HYPO-2, p29
- Applies to cancer of the hypopharynx amenable to larynx-preserving (conservation) surgery, most T1,N0 and selected T2,N0
- Covers treatment of primary and neck, and adjuvant treatment after surgery
- Radiation therapy per Principles of Radiation Therapy (HYPO-A)
- Surgery per Principles of Surgery (SURG-A)
- Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the hypopharynx
- ___ (ctnm)
- Amenable to larynx-preserving (conservation) surgery
- ___ (ptnm), if resected
- Margin status ___ (margin_status)
- Extranodal extension ___ (ene)

# Treatment of primary and neck

- Definitive RT (HYPO-A)
- Partial laryngopharyngectomy, open or endoscopic (SURG-A)
    - With ipsilateral or bilateral neck dissection
    - With or without thyroidectomy
    - With or without pretracheal and ipsilateral paratracheal lymph node dissection
- Clinical trials

# Adverse pathologic features

- Extranodal extension
- Positive margins
- Close margins
- pT3 or pT4 primary
- pN2 or pN3 nodal disease
- Perineural invasion
- Vascular invasion
- Lymphatic invasion

# Adjuvant treatment after surgery

- pN0 and no adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- pN1 without other adverse pathologic features
    - Consider RT (HYPO-A)
- Adverse pathologic features present, treat by feature
    - Extranodal extension, with or without positive margin
        - Systemic therapy/RT (category 1) (HYPO-A) (SYST-A)
    - Positive margin
        - Re-resection, if feasible
        - RT (HYPO-A)
        - Consider systemic therapy/RT (HYPO-A) (SYST-A), for T2 only
    - Other risk features
        - RT (HYPO-A)
        - Consider systemic therapy/RT (HYPO-A) (SYST-A)

# Next

- After definitive RT
    - Post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
    - Recurrent or persistent disease, go to ADV-3
- After surgery, with or without adjuvant treatment
    - Follow-up (FOLL-A, 1 of 2)
    - Recurrent or persistent disease, go to ADV-3
