+++
id           = "head-and-neck/GLOT-3"
gid          = "head-and-neck"
ref          = "GLOT-3"
page         = 46
title        = "Treatment of T3, N0-1 glottic larynx cancer requiring total laryngectomy, and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["GLOT-1", "GLOT-2", "GLOT-4", "GLOT-5", "ADV-3"]

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
options = ["concurrent systemic therapy/RT", "RT", "surgery", "induction chemotherapy", "clinical trial"]
[[variables]]
name = "ptnm"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, GLOT-3, p46
- Applies to cancer of the glottic larynx, T3, N0-1, requiring (amenable to) total laryngectomy
- Covers treatment of primary and neck, and adjuvant treatment after surgery
- RT per Principles of Radiation Therapy (GLOT-A)
- Surgery per Principles of Surgery (SURG-A)
- Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the glottic larynx
- ___ (ctnm), requiring (amenable to) total laryngectomy
- Candidate for systemic therapy/RT ___ (systemic_candidate)
- PD-L1 CPS ___ (pdl1_cps)
- Treatment selected ___ (treatment_selected)

# Treatment of primary and neck

- Concurrent systemic therapy/RT (GLOT-A, SYST-A)
    - The preferred agent when using concurrent systemic therapy/RT is cisplatin (category 1), see SYST-A
    - Then post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- or RT (GLOT-A), if patient not candidate for systemic therapy/RT
    - Then post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- or Surgery, including ipsilateral or bilateral neck dissection (SURG-A)
    - Consider thyroidectomy to clear central compartment nodes
    - If PD-L1 positive (CPS 1 or higher), neoadjuvant pembrolizumab (SYST-A)
    - Then adjuvant treatment on this page
- or Induction chemotherapy (SYST-A)
    - See Discussion on induction chemotherapy
    - CT (with contrast) or MRI (with and without contrast) of primary and neck
    - Then response assessment (GLOT-5)
- or Clinical trials

# Adjuvant treatment after surgery

- Review pathology for adverse pathologic features (Discussion)
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT4 primary
    - pN2 or pN3 nodal disease
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
    - Subglottic extension
- Pathologic stage ___ (ptnm)
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab, followed by adjuvant pembrolizumab (GLOT-A, SYST-A)
    - Add cisplatin if extranodal extension and/or positive margin
- pN0 and no adverse pathologic features
    - Follow-up (FOLL-A, 1 of 2)
- pN1 without other risk features
    - Consider RT (GLOT-A)
- Adverse pathologic features
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1), RT per GLOT-A, systemic therapy per SYST-A
    - Other risk features
        - RT (GLOT-A)
        - or Consider systemic therapy/RT (GLOT-A, SYST-A)

# Next

- After concurrent systemic therapy/RT or RT, post systemic therapy/RT or RT neck evaluation, go to FOLL-A (2 of 2)
- After induction chemotherapy, response assessment, go to GLOT-5
- After surgery and adjuvant treatment, follow-up, go to FOLL-A (1 of 2)
- Recurrent or persistent disease, go to ADV-3
