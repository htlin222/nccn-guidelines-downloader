+++
id           = "head-and-neck/SUPRA-3"
gid          = "head-and-neck"
ref          = "SUPRA-3"
page         = 54
title        = "Treatment of T3, N0 supraglottic larynx cancer requiring total laryngectomy, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SUPRA-1", "SUPRA-2", "SUPRA-7", "SUPRA-8", "ADV-3"]

[facets]
disease   = "head-and-neck"
biomarker = "pd-l1"
timepoint = ["primary-treatment", "neoadjuvant", "induction", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "systemic_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pdl1_cps"
type = "text"
[[variables]]
name = "treatment_selected"
type = "enum"
options = ["concurrent systemic therapy/RT", "RT", "laryngectomy", "induction chemotherapy", "clinical trial"]
[[variables]]
name = "ptnm"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SUPRA-3, p54
- Applies to cancer of the supraglottic larynx, requiring (amenable to) total laryngectomy (T3,N0)
- Covers treatment of primary and neck, and adjuvant treatment after surgery
- RT per Principles of Radiation Therapy (SUPRA-A)
- Surgery per Principles of Surgery (SURG-A)
- Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the supraglottic larynx
- ___ (ctnm), requiring (amenable to) total laryngectomy
- Medical candidate for concurrent systemic therapy/RT ___ (systemic_candidate)
- PD-L1 CPS ___ (pdl1_cps)
- Treatment selected ___ (treatment_selected)

# Treatment of primary and neck

- Concurrent systemic therapy/RT (SUPRA-A, SYST-A)
    - The preferred agent when using concurrent systemic therapy/RT is cisplatin (category 1), see SYST-A
    - Then post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- or RT (SUPRA-A), if patient not medical candidate for concurrent systemic therapy/RT
    - Then post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- or Laryngectomy, thyroidectomy and with ipsilateral, central, or bilateral neck dissection (SURG-A)
    - If PD-L1 positive (CPS 1 or higher), neoadjuvant pembrolizumab (SYST-A)
    - Then adjuvant treatment on this page
- or Induction chemotherapy (SYST-A)
    - See Discussion on induction chemotherapy
    - CT (with contrast) or MRI (with and without contrast) of primary and neck
    - Then response assessment (SUPRA-7)
- or Clinical trials

# Adjuvant treatment after surgery

- Review pathology for adverse pathologic features (Discussion)
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT3 or pT4 primary
    - pN2 or pN3 nodal disease
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- Pathologic stage ___ (ptnm)
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab, followed by adjuvant pembrolizumab (SUPRA-A, SYST-A)
    - Add cisplatin if extranodal extension and/or positive margin
- pN0 with no adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- pN1 without other risk features
    - Consider RT
- Adverse pathologic features
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1), RT per SUPRA-A, systemic therapy per SYST-A
    - Other risk features
        - RT (SUPRA-A)
        - or Consider systemic therapy/RT (SUPRA-A, SYST-A)

# Next

- After concurrent systemic therapy/RT or RT, post systemic therapy/RT or RT neck evaluation, go to FOLL-A (2 of 2)
- After induction chemotherapy, response assessment, go to SUPRA-7
- After surgery and adjuvant treatment, follow-up, go to FOLL-A (1 of 2)
- Recurrent or persistent disease, go to ADV-3
