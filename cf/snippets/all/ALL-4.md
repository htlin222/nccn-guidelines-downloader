+++
id           = "all/ALL-4"
gid          = "all"
ref          = "ALL-4"
page         = 15
title        = "Induction and consolidation for Ph+ B-ALL in AYA and adults, branched on marrow response and MRD"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-E", "ALL-F", "ALL-7", "ALL-8"]

[facets]
disease   = "all"
histology = "lymphoblastic"
biomarker = ["ph-positive", "mrd-positive", "mrd-negative"]
timepoint = ["induction", "consolidation", "maintenance", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "phase"
type = "enum"
options = ["induction", "consolidation", "maintenance"]
[[variables]]
name = "tki"
type = "text"
[[variables]]
name = "marrow_response"
type = "enum"
options = ["marrow CR", "less than marrow CR"]
[[variables]]
name = "mrd_status"
type = "enum"
options = ["MRD+", "MRD-"]
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-4, p15
- Applies to Ph+ B-ALL, AYA and adult
- Risk stratification for this page: Ph+ B-ALL
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Ph+ B-ALL
- Current phase of therapy: ___ (phase)
- TKI in use: ___ (tki)
- Marrow response: ___ (marrow_response)
- MRD status (ALL-F): ___ (mrd_status)

# Treatment induction

- Clinical trial (preferred)
- or Systemic therapy + tyrosine kinase inhibitor (TKI)

# Response assessment (ALL-E)

- Marrow complete remission (CR)
    - Assess MRD (ALL-F)
- Less than marrow CR
    - ABL1 kinase domain molecular testing
    - Go to Relapsed/Refractory Disease (ALL-8)

# Consolidation therapy, marrow CR with MRD+ (ALL-F)

- Blinatumomab + TKI (preferred)
- or Multiagent therapy + TKI
- or TKI

# Consolidation therapy, marrow CR with MRD- (ALL-F)

- Blinatumomab + TKI
- or Continue multiagent therapy + TKI
- or TKI
- or Allogeneic hematopoietic cell transplant (HCT) in appropriate candidates

# Response after consolidation

- MRD- CR (ALL-F)
    - Consider allogeneic HCT + post-HCT TKI maintenance when feasible
    - or TKI maintenance
- Persistent, progressive, or emergent MRD
    - ABL1 kinase domain molecular testing
- Marrow progression or extramedullary disease
    - ABL1 kinase domain molecular testing

# Next

- MRD- CR on post-HCT TKI maintenance or on TKI maintenance, go to Surveillance (ALL-7)
- Less than marrow CR after induction, go to Relapsed/Refractory Disease (ALL-8)
- Persistent, progressive, or emergent MRD, go to Relapsed/Refractory Disease (ALL-8)
- Marrow progression or extramedullary disease, go to Relapsed/Refractory Disease (ALL-8)
