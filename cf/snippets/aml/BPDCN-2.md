+++
id           = "aml/BPDCN-2"
gid          = "aml"
ref          = "BPDCN-2"
page         = 78
title        = "Treatment induction for confirmed BPDCN, and management after induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["BPDCN-1", "BPDCN-3", "BPDCN-4", "BPDCN-B", "BPDCN-C", "BPDCN-5"]

[facets]
disease   = "aml"
timepoint = ["induction", "primary-treatment", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cd123"
type = "text"
[[variables]]
name = "cns_disease"
type = "enum"
options = ["documented", "not-documented"]
[[variables]]
name = "albumin"
type = "text"
[[variables]]
name = "lvef"
type = "text"
[[variables]]
name = "creatinine"
type = "text"
[[variables]]
name = "bilirubin"
type = "text"
[[variables]]
name = "ast_alt"
type = "text"
[[variables]]
name = "cardiovascular_disease"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pivekimab_exclusions"
type = "text"
[[variables]]
name = "induction_response"
type = "enum"
options = ["cr", "lack-of-response"]
[[variables]]
name = "skin_status"
type = "text"
+++

# Source

- NCCN Blastic Plasmacytoid Dendritic Cell Neoplasm (Age ≥18 years) v5.2026, BPDCN-2, p78
- Applies to patients age ≥18 years with BPDCN confirmed (BPDCN-1), at treatment induction
- Footnotes on BPDCN-3A
- References on BPDCN-5
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, BPDCN confirmed
- CD123 expression ___ (cd123)
- Documented CNS disease at diagnosis ___ (cns_disease)
- Albumin ___ (albumin)
- LVEF ___ (lvef)
- Creatinine ___ (creatinine)
- Bilirubin ___ (bilirubin)
- AST/ALT ___ (ast_alt)
- Clinically significant cardiovascular disease ___ (cardiovascular_disease)
- CNS involvement, history of SOS, history of grade 4 capillary leak syndrome, or non-cardiac grade 4 edema ___ (pivekimab_exclusions)
- Response to induction ___ (induction_response)
- Skin lesions ___ (skin_status)

# Treatment of BPDCN

- For management of adverse events, see Supportive Care (BPDCN-C)
- Principles of Supportive Care for BPDCN (BPDCN-C)
- CD123-directed therapy
    - For disease with absent CD123 expression, the benefit of CD123-targeted therapies is unknown
        - Alternative approaches, including chemotherapy-based regimens or clinical trial enrollment, may be considered based on patient-specific factors
    - Tagraxofusp-erzs 12 mcg/kg IV over 15 minutes once daily on days 1–5 of a 21-day cycle
        - Eligibility criteria: albumin ≥3.2 g/dL
        - Eligibility criteria: LVEF ≥ institutional lower limit of normal
        - Eligibility criteria: creatinine ≤1.5 mg/dL
        - Eligibility criteria: bilirubin ≤1.5 mg/dL
        - Eligibility criteria: AST/ALT ≤2.5 x ULN
        - Eligibility criteria: no clinically significant cardiovascular disease
    - Pivekimab sunirine-pvzy 0.045 mg/kg IV over 30 minutes on day 1 of a 21-day cycle
        - Exclusion criteria: CNS involvement
        - Exclusion criteria: history of SOS
        - Exclusion criteria: history of grade 4 capillary leak syndrome
        - Exclusion criteria: non-cardiac grade 4 edema
- Chemotherapy (BPDCN-3)
- IT chemotherapy (methotrexate, cytarabine) (BPDCN-B)
    - In patients with documented CNS disease at diagnosis
    - As prophylaxis for patients without documented CNS disease

# Assessing response to induction

- CR in BPDCN has the same hematologic criteria as AML (AML-I)
- Also document resolution of any extramedullary sites, including CNS and skin lesions
- If the skin still shows microscopic disease, consider continuing additional cycles (at least 4) of therapy before managing as relapsed/refractory disease
- For appropriate studies to assess CR, see references on BPDCN-5

# CR

- Preferred: allogeneic HCT
- Other recommended: autologous HCT
- Other recommended: CD123-directed therapy utilized during induction until progression or unacceptable toxicity

# Next

- Chemotherapy, go to BPDCN-3
- CR, after post-remission therapy, go to surveillance (BPDCN-4)
- Lack of response to induction, go to treatment for relapsed/refractory disease (BPDCN-4)
