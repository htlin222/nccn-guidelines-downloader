+++
id           = "all/ALL-6"
gid          = "all"
ref          = "ALL-6"
page         = 18
title        = "Induction and consolidation therapy for T-ALL in AYA and adult patients"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-7", "ALL-8"]

[facets]
disease   = "all"
histology = ["lymphoblastic", "t-cell"]
biomarker = ["mrd-positive", "mrd-negative"]
timepoint = ["induction", "consolidation", "transplant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "phase"
type = "enum"
options = ["induction", "consolidation"]
[[variables]]
name = "marrow_response"
type = "enum"
options = ["marrow CR", "less than marrow CR"]
[[variables]]
name = "mrd_status"
type = "enum"
options = ["MRD+", "MRD-"]
[[variables]]
name = "mrd_assay"
type = "text"
[[variables]]
name = "count_recovery"
type = "enum"
options = ["achieved", "not achieved"]
[[variables]]
name = "high_risk_features"
type = "text"
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-6, p18
- Applies to T-ALL, AYA and adult
- ALL treatment regimens include CNS prophylaxis, see Evaluation and Treatment of Extramedullary Involvement (ALL-B)
- Principles of Supportive Care (ALL-C) apply to induction and to consolidation
- Principles of Systemic Therapy (ALL-D)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, T-ALL
- Current phase ___ (phase)
- Response assessment (ALL-E) ___ (marrow_response)
- MRD (ALL-F) ___ (mrd_status)
- MRD assay used ___ (mrd_assay)
    - Preferred method is an FDA-approved NGS-based assay detecting fusion genes or clonal rearrangements in Ig and TCR loci, if available
    - Does not require patient-specific primers
- Count recovery per protocol ___ (count_recovery)
- High-risk features ___ (high_risk_features)
    - ETP-phenotype
    - RAS/PTEN and/or NOTCH1/FBXW7 wild-type classifier

# Treatment induction

- Clinical trial (preferred)
- or Systemic therapy (ALL-D)
- Regimen includes CNS prophylaxis (ALL-B)
- Supportive care (ALL-C)
- Then response assessment (ALL-E)

# Response assessment (ALL-E)

- Marrow CR
    - Adequate count recovery per protocol is recommended before transitioning to post-remission therapy, even in the presence of MRD negativity
    - If count recovery is not achieved, additional follow-up for MRD may be warranted
    - Assess MRD (ALL-F), then go to consolidation therapy
- Less than marrow CR
    - Consider NGS
    - Go to Relapsed/Refractory Disease (ALL-8)

# Consolidation therapy

- Regimen includes CNS prophylaxis (ALL-B), supportive care (ALL-C)
- The addition of nelarabine to selected consolidation regimens may be beneficial (ALL-D 20 of 29)
- MRD+ (ALL-F)
    - Continue multiagent therapy (ALL-D)
    - Given the complexity of MRD management, referral to or consultation with a center with expertise is recommended for patients with ALL with MRD positivity
- MRD- (ALL-F)
    - Continue multiagent therapy (ALL-D)
    - or Consider allogeneic HCT (ALL-G)
        - Favored for high-risk T-ALL and/or slow/incomplete MRD clearance
        - High-risk features include ETP-phenotype or RAS/PTEN and/or NOTCH1/FBXW7 wild-type classifier

# After consolidation therapy

- MRD- CR (ALL-F)
    - Adequate count recovery per protocol before transitioning to post-remission therapy, even in the presence of MRD negativity
    - Allogeneic HCT (ALL-G)
        - Favored for high-risk T-ALL and/or slow/incomplete MRD clearance
    - or POMP maintenance
        - May include other elements of maintenance therapy, such as IT therapy
- Persistent, progressive, or emergent MRD, or marrow progression/extramedullary disease
    - MRD quantified by the method above (ALL-F)

# Next

- MRD- CR treated with allogeneic HCT or POMP maintenance, go to Surveillance (ALL-7)
- Persistent, progressive, or emergent MRD, or marrow progression/extramedullary disease, go to Relapsed/Refractory Disease (ALL-8)
- Less than marrow CR, go to Relapsed/Refractory Disease (ALL-8)
