+++
id           = "head-and-neck/SUPRA-8"
gid          = "head-and-neck"
ref          = "SUPRA-8"
page         = 59
title        = "Treatment of primary and neck, and adjuvant treatment, for T4a,N0-N3 cancer of the supraglottic larynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SUPRA-7", "SURG-A", "SYST-A", "IMG-A", "FOLL-A", "ADV-3"]

[facets]
disease   = "head-and-neck"
biomarker = "pd-l1"
timepoint = ["primary-treatment", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "pdl1"
type = "text"
[[variables]]
name = "surgery_decision"
type = "enum"
options = ["accepts-surgery", "declines-surgery"]
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin"
type = "text"
[[variables]]
name = "nodal"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SUPRA-8, p59
- Cancer of the supraglottic larynx
- Applies to clinical staging T4a,N0-N3, treatment of primary and neck, and adjuvant treatment
- Surgery on this page: Principles of Surgery (SURG-A)
- Radiation therapy on this page: Principles of Radiation Therapy (SUPRA-A)
- Systemic therapy on this page: Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- Imaging on this page: Principles of Imaging (IMG-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the supraglottic larynx
- Clinical stage ___ (ctnm), within T4a,N0-N3
- PD-L1 CPS ___ (pdl1)
- Patient accepts or declines surgery ___ (surgery_decision)
- If resected, pathologic stage ___ (ptnm)
- Margin status ___ (margin)
- Nodal findings, including extranodal extension ___ (nodal)

# Treatment of primary and neck

- Endoscopic or open partial laryngectomy (SURG-A)
- Neck dissection(s) (SURG-A)
- If PD-L1 positive, CPS >= 1: neoadjuvant pembrolizumab (SYST-A)
    - Except for N3 disease

# Patients with T4a,N0-N3 disease who decline surgery

- Consider concurrent systemic therapy/RT (SUPRA-A, SYST-A)
- or Clinical trial
- or Induction chemotherapy (SYST-A)
    - See Discussion on induction chemotherapy
    - Then CT (with contrast) or MRI (with and without contrast) of primary and neck (IMG-A)
    - Then Response Assessment (SUPRA-7)

# Adjuvant treatment after surgery

- Adverse pathologic features (Discussion)
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT3 or pT4 primary
    - pN2 or pN3 nodal disease
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- If neoadjuvant pembrolizumab received
    - RT (SUPRA-A) + pembrolizumab (SYST-A)
        - With cisplatin if extranodal extension and/or positive margin
    - Followed by adjuvant pembrolizumab
- Extranodal extension and/or positive margin
    - Systemic therapy/RT (category 1) (SUPRA-A, SYST-A)
- Other risk features
    - RT (SUPRA-A)
    - or Consider systemic therapy/RT (SUPRA-A, SYST-A)

# Next

- After systemic therapy/RT or RT, Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- Follow-up, go to FOLL-A (1 of 2)
- Response assessment after induction chemotherapy, go to SUPRA-7
- Recurrent or persistent disease, go to ADV-3
