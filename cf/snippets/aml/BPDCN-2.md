+++
id           = "aml/BPDCN-2"
gid          = "aml"
ref          = "BPDCN-2"
page         = 78
title        = "Induction treatment of confirmed BPDCN, and therapy after complete remission"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["BPDCN-1", "BPDCN-3", "BPDCN-4", "BPDCN-B", "BPDCN-C"]

[facets]
disease   = "aml"
timepoint = ["induction", "primary-treatment", "transplant", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "dx_date"
type = "text"
[[variables]]
name = "cns_disease"
type = "enum"
options = ["documented", "not-documented"]
[[variables]]
name = "induction_regimen"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["cr", "lack-of-response"]
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Blastic Plasmacytoid Dendritic Cell Neoplasm (Age >=18 years) v5.2026, BPDCN-2, p78
- Applies to treatment of BPDCN once BPDCN is confirmed
- Induction categories on this page: CD123-directed therapy, and chemotherapy
- Footnotes for this page are on BPDCN-3A; references are on BPDCN-5
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- BPDCN confirmed, date ___ (dx_date)
- CNS disease at diagnosis ___ (cns_disease)
- Induction regimen given ___ (induction_regimen)
- Response to induction ___ (response)
- Candidate for HCT ___ (hct_candidate)

# Induction

- Tagraxofusp-erzs
    - 12 mcg/kg IV over 15 minutes
    - Once daily on days 1 to 5 of a 21-day cycle
    - For management of adverse events, see Supportive Care (BPDCN-C)
- Pivekimab sunirine-pvzyg
    - 0.045 mg/kg IV over 30 minutes
    - On day 1 of a 21-day cycle

# CNS-directed intrathecal chemotherapy

- IT chemotherapy (BPDCN-B)
    - In patients with documented CNS disease at diagnosis
    - As prophylaxis in patients without documented CNS disease
    - Agents: methotrexate, cytarabine

# After complete remission (CR)

- Preferred
    - Allogeneic HCT
- Other Recommended
    - Autologous HCT
    - CD123-directed therapy utilized during induction, until progression or unacceptable toxicity

# Next

- CR, go to Surveillance (BPDCN-4)
- CR, go to Treatment for Relapsed/Refractory Disease (BPDCN-4)
- Lack of response to induction, go to BPDCN-3
