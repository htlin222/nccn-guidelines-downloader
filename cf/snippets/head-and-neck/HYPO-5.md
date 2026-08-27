+++
id           = "head-and-neck/HYPO-5"
gid          = "head-and-neck"
ref          = "HYPO-5"
page         = 32
title        = "Treatment of primary and neck, and adjuvant treatment, for T4a,N0-3 hypopharyngeal cancer"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["HYPO-1", "HYPO-3", "HYPO-6", "SURG-A", "SYST-A", "FOLL-A", "ADV-3"]

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
name = "pdl1_cps"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin_status"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, HYPO-5, p32
- Cancer of the Hypopharynx
- Clinical staging T4a,N0-3
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the hypopharynx
- Clinical stage: ___ (ctnm)
- PD-L1 CPS: ___ (pdl1_cps)

# Treatment of primary and neck

- Total laryngopharyngectomy (SURG-A)
    - With ipsilateral or bilateral neck dissection
    - With or without thyroidectomy, after ipsilateral or bilateral paratracheal lymph node dissection
    - If PD-L1 positive (CPS 1 or higher), neoadjuvant pembrolizumab (SYST-A)
        - Except for N3 disease
- or Concurrent systemic therapy/RT (category 3) (HYPO-A, SYST-A)
    - When using concurrent systemic therapy/RT, the preferred agent is cisplatin (category 1) (SYST-A)
- or Induction chemotherapy (category 3) (SYST-A)
    - In randomized clinical trials, assessment of response has been done after 2 or 3 cycles
    - See Discussion on induction chemotherapy
- or Clinical trial

# Adverse pathologic features to look for on the pathology report

- Extranodal extension
- Positive margins
- Close margins
- pT3 or pT4 primary
- pN2 or pN3 nodal disease
- Perineural invasion
- Vascular invasion
- Lymphatic invasion

# Adjuvant treatment after total laryngopharyngectomy

- Pathologic stage: ___ (ptnm)
- Margin status: ___ (margin_status)
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab, followed by adjuvant pembrolizumab (HYPO-A, SYST-A)
    - With cisplatin if extranodal extension and/or positive margin
- Extranodal extension and/or positive margin
    - Systemic therapy/RT (category 1) (HYPO-A, SYST-A)
- Other risk features
    - RT (HYPO-A)
    - or Consider systemic therapy/RT (HYPO-A, SYST-A)

# Next

- After total laryngopharyngectomy, with or without adjuvant treatment, go to Follow-up (FOLL-A, 1 of 2)
- After concurrent systemic therapy/RT, CT (with contrast) or MRI (with and without contrast) of primary and neck (IMG-A), then go to Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- After induction chemotherapy, go to Response Assessment (HYPO-6)
- Recurrent or persistent disease, go to Very Advanced Head and Neck Cancer (ADV-3)
