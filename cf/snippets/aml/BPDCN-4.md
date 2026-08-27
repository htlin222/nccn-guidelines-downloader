+++
id           = "aml/BPDCN-4"
gid          = "aml"
ref          = "BPDCN-4"
page         = 81
title        = "Surveillance after treatment, and treatment for relapsed or refractory BPDCN"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["BPDCN-1", "BPDCN-2", "BPDCN-3", "BPDCN-C", "BPDCN-5"]

[facets]
disease   = "aml"
timepoint = ["surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "time_since_treatment"
type = "text"
[[variables]]
name = "prior_regimen"
type = "text"
[[variables]]
name = "disease_status"
type = "enum"
options = ["surveillance", "relapsed", "refractory"]
[[variables]]
name = "cbc"
type = "text"
[[variables]]
name = "smear"
type = "text"
[[variables]]
name = "extramedullary_prior"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cns_status"
type = "text"
[[variables]]
name = "cd123"
type = "text"
[[variables]]
name = "sibling_donor"
type = "enum"
options = ["identified", "not-identified"]
+++

# Source

- NCCN Blastic Plasmacytoid Dendritic Cell Neoplasm (Age ≥18 years) v5.2026, BPDCN-4, p81
- Applies to surveillance after treatment, and to relapsed/refractory BPDCN
- References on BPDCN-5
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Time since completion of therapy ___ (time_since_treatment)
- Prior therapy ___ (prior_regimen)
- Disease status ___ (disease_status)
- CBC, platelets ___ (cbc)
- Peripheral smear ___ (smear)
- Prior evidence of extramedullary disease ___ (extramedullary_prior)
- CNS ___ (cns_status)
- CD123 expression ___ (cd123)
- Sibling donor ___ (sibling_donor)

# Surveillance

- CBC, platelets
    - Every 1–3 mo for 2 y
    - Then every 3–6 mo up to 5 y
- BM aspirate and biopsy
    - Only if peripheral smear is abnormal, or cytopenias develop
- Repeat FDG-PET/CT scan, for patients with prior evidence of extramedullary disease
- Consider re-biopsy for any suspicious skin or extramedullary lesions
- Evaluate CNS for disease/prophylaxis

# Treatment for relapsed/refractory disease, consider

- Clinical trial (preferred)
- Pivekimab sunirine-pvzy
    - For disease with absent CD123 expression, the benefit of CD123-targeted therapies is unknown
        - Alternative approaches, including chemotherapy-based regimens or clinical trial enrollment, may be considered based on patient-specific factors
    - Exclusion criteria: CNS involvement
    - Exclusion criteria: history of SOS
    - Exclusion criteria: history of grade 4 capillary leak syndrome
    - Exclusion criteria: non-cardiac grade 4 edema
    - Optimal sequencing of CD123-directed therapies remains unknown
- Tagraxofusp-erzs
    - For disease with absent CD123 expression, the benefit of CD123-targeted therapies is unknown
        - Alternative approaches, including chemotherapy-based regimens or clinical trial enrollment, may be considered based on patient-specific factors
    - Eligibility criteria: albumin ≥3.2 g/dL
    - Eligibility criteria: LVEF ≥ institutional lower limit of normal
    - Eligibility criteria: creatinine ≤1.5 mg/dL
    - Eligibility criteria: bilirubin ≤1.5 mg/dL
    - Eligibility criteria: AST/ALT ≤2.5 x ULN
    - Eligibility criteria: no clinically significant cardiovascular disease
    - Optimal sequencing of CD123-directed therapies remains unknown
- Chemotherapy, if not already used, see BPDCN-3
- Local RT to isolated lesions/areas
- Systemic steroids
- HMA (azacitidine or decitabine) + venetoclax, see BPDCN-3
- For management of adverse events, see Supportive Care (BPDCN-C)

# Donor search

- Donor search should be initiated at first relapse in appropriate patients
    - Concomitant with institution of other therapy
    - If no sibling donor has been identified

# Next

- Chemotherapy, if not already used, go to BPDCN-3
- HMA (azacitidine or decitabine) + venetoclax, go to BPDCN-3
- Management of adverse events, go to BPDCN-C
