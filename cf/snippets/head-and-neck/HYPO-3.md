+++
id           = "head-and-neck/HYPO-3"
gid          = "head-and-neck"
ref          = "HYPO-3"
page         = 30
title        = "Treatment of primary and neck, and adjuvant treatment, for T2-3,N0-3 or T1,N+ cancer of the hypopharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["HYPO-1", "HYPO-2", "HYPO-4", "HYPO-5", "SURG-A", "SYST-A", "IMG-A", "FOLL-A", "ADV-3"]

[facets]
disease   = "head-and-neck"
biomarker = "pd-l1"
timepoint = ["primary-treatment", "neoadjuvant", "induction", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "cps"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin_status"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, HYPO-3, p30
- Cancer of the Hypopharynx
- Clinical staging T2-3,N0-3 if requiring (amenable to) pharyngectomy with partial or total laryngectomy
- Also T1,N+
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the hypopharynx
- Clinical stage ___ (ctnm)
- PD-L1 CPS ___ (cps)
- Requiring (amenable to) pharyngectomy with partial or total laryngectomy

# Treatment of primary and neck

- Concurrent systemic therapy/RT (HYPO-A, SYST-A)
    - When using concurrent systemic therapy/RT, the preferred agent is cisplatin (category 1) (SYST-A)
- or Partial or total laryngopharyngectomy (SURG-A)
    - Ipsilateral or bilateral neck dissection
    - With or without thyroidectomy
    - With or without pretracheal and ipsilateral paratracheal lymph node dissection
    - If PD-L1 positive (CPS ≥ 1): neoadjuvant pembrolizumab (SYST-A)
        - Except for T2,N0 disease
        - Except for T1-3,N3 disease
- or Induction chemotherapy (SYST-A)
    - In randomized clinical trials, assessment of response has been done after 2 or 3 cycles
    - CT (with contrast) or MRI (with and without contrast) of primary and neck (IMG-A)
    - Response after induction chemotherapy, go to HYPO-4
- or Clinical trials

# Adjuvant treatment after surgery

- Pathologic stage ___ (ptnm)
- Margin status ___ (margin_status)
- Adverse pathologic features to look for on the pathology report
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT3 or pT4 primary
    - pN2 or pN3 nodal disease
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab, followed by adjuvant pembrolizumab (HYPO-A, SYST-A)
    - With cisplatin if extranodal extension and/or positive margin
- pN0 and no adverse pathologic features
    - Go to Follow-up (FOLL-A, 1 of 2)
- pN1 without other adverse pathologic features
    - Consider RT (HYPO-A)
- Adverse pathologic features present
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1) (HYPO-A, SYST-A)
    - Other risk features
        - RT (HYPO-A)
        - or Consider systemic therapy/RT (HYPO-A, SYST-A)

# Next

- After concurrent systemic therapy/RT, go to Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- After induction chemotherapy, go to Response after induction chemotherapy (HYPO-4)
- After surgery with adjuvant systemic therapy/RT or RT, go to Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- After surgery without adjuvant treatment, go to Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease, go to ADV-3
