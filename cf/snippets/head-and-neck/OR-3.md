+++
id           = "head-and-neck/OR-3"
gid          = "head-and-neck"
ref          = "OR-3"
page         = 14
title        = "Treatment of primary and neck, and adjuvant treatment, for T3,N0 / T1-3,N1-3 / T4a,N0-3 oral cavity cancer"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["OR-1", "OR-2", "SURG-A", "OR-A", "SYST-A", "FOLL-A", "ADV-1", "ADV-3"]

[facets]
disease   = "head-and-neck"
biomarker = "pd-l1"
timepoint = ["primary-treatment", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subsite"
type = "enum"
options = ["buccal mucosa", "floor of mouth", "oral tongue", "alveolar ridge", "retromolar trigone", "hard palate"]
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "pdl1_cps"
type = "text"
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, OR-3, p14
- Cancer of the Oral Cavity (Including Mucosal Lip)
- Applies to buccal mucosa, floor of mouth, oral tongue, alveolar ridge, retromolar trigone, hard palate
    - Cutaneous squamous cell carcinoma of the vermilion lip is not included in this guideline, see NCCN Guidelines for Squamous Cell Skin Cancer
- Clinical staging T3,N0; T1-3,N1-3; T4a,N0-3
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Primary subsite: ___ (subsite)
- Clinical stage: ___ (ctnm)
- PD-L1 combined positive score (CPS): ___ (pdl1_cps)
- Patient declines surgery
    - Selected patients who decline surgery, go to Very Advanced Head and Neck Cancer (ADV-1)

# Treatment of primary and neck

- Surgery, preferred (SURG-A)
    - If PD-L1 positive (CPS ≥ 1): neoadjuvant pembrolizumab, except for N3 disease (SYST-A)
- or Clinical trials
- N0, N1, N2a-b, N3 disease
    - Resection of primary, with or without ipsilateral neck dissection, or bilateral neck dissection (SURG-A)
    - Neck dissection is generally not indicated for T1-3,N0 mucosal lip
- N2c (bilateral) disease
    - Resection of primary and bilateral neck dissection (SURG-A)

# Adjuvant treatment

- Adverse pathologic features to look for on the pathology report
    - Extranodal extension
    - Positive margins
    - Close margins
    - pT3 or pT4 primary
    - pN2 or pN3 nodal disease
    - Nodal disease in levels IV or V
    - Perineural invasion
    - Vascular invasion
    - Lymphatic invasion
- Margin status: ___ (margin_status)
- Pathologic stage: ___ (ptnm)
- If neoadjuvant pembrolizumab received
    - RT + pembrolizumab, with cisplatin if extranodal extension and/or positive margin, followed by adjuvant pembrolizumab (OR-A, SYST-A)
- If no adverse pathologic features
    - Consider RT (OR-A)
- If adverse pathologic features present
    - Extranodal extension, with or without positive margin
        - Systemic therapy/RT (category 1) (OR-A, SYST-A)
    - Positive margin
        - Systemic therapy/RT (category 1) (OR-A, SYST-A)
        - or Re-resection, if feasible, and consider RT if negative margins (OR-A)
    - Other risk features
        - RT (OR-A)
        - or Consider systemic therapy/RT (OR-A, SYST-A)

# Next

- Follow-up (FOLL-A, 1 of 2)
- Recurrent or persistent disease, go to Very Advanced Head and Neck Cancer (ADV-3)
