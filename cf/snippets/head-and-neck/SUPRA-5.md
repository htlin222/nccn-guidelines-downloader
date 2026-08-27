+++
id           = "head-and-neck/SUPRA-5"
gid          = "head-and-neck"
ref          = "SUPRA-5"
page         = 56
title        = "Treatment of primary and neck, and adjuvant treatment, for node-positive supraglottic larynx cancer amenable to larynx-preserving surgery"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SUPRA-4", "SUPRA-6", "SUPRA-7", "SUPRA-8", "SURG-A", "SYST-A", "FOLL-A", "ADV-3"]

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
name = "pdl1_cps"
type = "text"
[[variables]]
name = "fit_for_systemic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "path_features"
type = "text"
[[variables]]
name = "ene_margin"
type = "enum"
options = ["extranodal-extension", "positive-margin", "both", "neither"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SUPRA-5, p56
- Cancer of the Supraglottic Larynx
- Applies to node-positive disease amenable to larynx-preserving (conservation) surgery
    - T1-2,N+ and selected T3,N1, per Principles of Surgery (SURG-A)
- Covers treatment of the primary and neck, and adjuvant treatment
- Radiation therapy throughout this page: Principles of Radiation Therapy (SUPRA-A)
- Systemic therapy throughout this page: Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the supraglottic larynx
- Clinical stage ___ (ctnm), node-positive and amenable to larynx-preserving (conservation) surgery
- PD-L1 by IHC (CPS) ___ (pdl1_cps)
- Medically fit for systemic therapy ___ (fit_for_systemic)
- If resected, adverse pathologic features on the specimen ___ (path_features)
- Extranodal extension and/or positive margin ___ (ene_margin)

# Treatment of primary and neck

- Concurrent systemic therapy/RT (SUPRA-A, SYST-A)
    - When using concurrent systemic therapy/RT, the preferred agent is cisplatin (category 1) (SYST-A)
- or Definitive RT (SUPRA-A)
    - for low-volume disease (T1-2,N1)
    - or for patients medically unfit for systemic therapy
- or Endoscopic or open partial laryngectomy and neck dissection(s) (SURG-A)
    - If PD-L1 positive (CPS >= 1): Neoadjuvant pembrolizumab (SYST-A)
        - except for N3 disease
- or Induction chemotherapy (SYST-A)
    - See Discussion on induction chemotherapy
- or Clinical trials

# Imaging after treatment

- CT (with contrast) or MRI (with and without contrast) of primary and neck (IMG-A)

# Adjuvant treatment after surgery

- Adverse pathologic features are extranodal extension, positive margins, close margins, pT3 or pT4 primary, pN2 or pN3 nodal disease, perineural invasion, vascular invasion, and lymphatic invasion (Discussion)
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab (SUPRA-A, SYST-A), with cisplatin if extranodal extension and/or positive margin
    - followed by adjuvant pembrolizumab
- No adverse pathologic features
    - Consider RT (SUPRA-A)
- Adverse pathologic features
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1) (SUPRA-A, SYST-A)
        - In highly select patients, re-resection where it would potentially change the subsequent indication for chemotherapy
            - only if negative margins are feasible and can be achieved without total laryngectomy
    - Other risk features
        - RT (SUPRA-A)
        - or Consider systemic therapy/RT (SUPRA-A, SYST-A)

# Next

- After systemic therapy/RT or RT, Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- After induction chemotherapy, Response Assessment (SUPRA-7)
- After adjuvant treatment, Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease, go to ADV-3
