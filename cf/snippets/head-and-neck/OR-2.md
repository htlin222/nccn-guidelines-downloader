+++
id           = "head-and-neck/OR-2"
gid          = "head-and-neck"
ref          = "OR-2"
page         = 13
title        = "Treatment of primary and neck, and adjuvant treatment, for T1-2,N0 oral cavity cancer"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["OR-1", "OR-3", "SURG-A", "OR-A", "SYST-A", "FOLL-A", "ADV-3"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "adjuvant", "surveillance"]
intent    = "curative"

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
name = "depth_of_invasion"
type = "text"
[[variables]]
name = "ptnm"
type = "text"
[[variables]]
name = "margin_status"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, OR-2, p13
- Cancer of the Oral Cavity (Including Mucosal Lip)
- Applies to buccal mucosa, floor of mouth, oral tongue, alveolar ridge, retromolar trigone, hard palate
    - Cutaneous squamous cell carcinoma of the vermilion lip is not included in this guideline, see NCCN Guidelines for Squamous Cell Skin Cancer
- Clinical staging T1-2,N0
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Primary subsite: ___ (subsite)
- Clinical stage: ___ (ctnm)
- Depth of invasion: ___ (depth_of_invasion)

# Treatment of primary and neck

- Surgery, preferred (SURG-A)
    - Resection of primary, with or without neck dissection (SURG-A)
        - Guided by tumor location, depth of invasion, and imaging
        - Neck dissection is generally not indicated for T1-3,N0 mucosal lip
    - or Resection of primary + sentinel lymph node (SLN) biopsy (SURG-A)
        - Data are limited on the efficacy of SLN biopsy for oral cavity cancers
        - See Sentinel Lymph Node Biopsy in Principles of Surgery (SURG-A, 7 of 9)
        - If SLN pN0, proceed to adjuvant treatment assessment
        - Neck dissection if SLN pN+, or if SLN identification is unsuccessful (SURG-A)
- or Definitive RT (OR-A)

# Adverse pathologic features to look for on the pathology report

- Extranodal extension
- Positive margins
- Close margins
- pT3 or pT4 primary
- pN2 or pN3 nodal disease
- Nodal disease in levels IV or V
- Perineural invasion
- Vascular invasion
- Lymphatic invasion

# Adjuvant treatment after surgery

- Pathologic stage: ___ (ptnm)
- Margin status: ___ (margin_status)
- No positive nodes, and no adverse pathologic features
    - Go to follow-up (FOLL-A, 1 of 2)
- One positive node, without adverse pathologic features
    - Consider RT (OR-A)
- Adverse pathologic features present
    - Extranodal extension, with or without positive margin
        - Systemic therapy/RT (category 1) (OR-A, SYST-A)
    - Positive margin
        - Re-resection if feasible, and consider RT if negative margins (OR-A)
        - or Consider systemic therapy/RT (OR-A, SYST-A)
    - Other risk features
        - RT (OR-A)
        - or Consider systemic therapy/RT (OR-A, SYST-A)

# Next

- After surgery, with or without adjuvant treatment, go to Follow-up (FOLL-A, 1 of 2)
- After definitive RT, or after systemic therapy/RT, go to Post Systemic Therapy/RT or RT Neck Evaluation (FOLL-A, 2 of 2)
- Recurrent or persistent disease, go to Very Advanced Head and Neck Cancer (ADV-3)
