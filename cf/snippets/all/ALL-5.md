+++
id           = "all/ALL-5"
gid          = "all"
ref          = "ALL-5"
page         = 17
title        = "Induction and consolidation therapy for Ph-negative B-ALL in AYA and adult patients"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-2", "ALL-3", "ALL-7", "ALL-8"]

[facets]
disease   = "all"
histology = "lymphoblastic"
biomarker = ["ph-negative", "mrd-positive", "mrd-negative"]
timepoint = ["induction", "consolidation", "maintenance", "transplant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "text"
[[variables]]
name = "induction_regimen"
type = "text"
[[variables]]
name = "marrow_response"
type = "enum"
options = ["marrow CR", "less than marrow CR"]
[[variables]]
name = "count_recovery"
type = "enum"
options = ["adequate", "not achieved"]
[[variables]]
name = "mrd_result"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "mrd_assay"
type = "text"
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-5, p17
- Applies to Ph- B-ALL, AYA and adult
- Risk stratification: Cytogenetic and Molecular Prognostic Risk Stratification for B-ALL (ALL-2)
- Systemic therapy: Principles of Systemic Therapy (ALL-D)
- Supportive care: Principles of Supportive Care (ALL-C)
- Response assessment: Response Assessment (ALL-E)
- MRD assessment: MRD (ALL-F)
- Transplant: Principles of Allogeneic Hematopoietic Cell Transplant (ALL-G)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, Ph- B-ALL
- Cytogenetic and molecular prognostic risk group ___ (risk_group) (ALL-2)
- Induction given ___ (induction_regimen)
- Marrow response ___ (marrow_response) (ALL-E)
- Count recovery ___ (count_recovery)
- MRD ___ (mrd_result) (ALL-F)
- MRD method ___ (mrd_assay)

# Treatment induction

- Clinical trial (preferred)
- or Systemic therapy (ALL-D)
- The regimen must include CNS prophylaxis
    - See Evaluation and Treatment of Extramedullary Involvement (ALL-B)
- Supportive care per ALL-C
- Then Response Assessment (ALL-E)

# MRD assessment before post-remission therapy

- Confirm adequate count recovery per protocol before transitioning to post-remission therapy, even in the presence of MRD negativity
    - If count recovery is not achieved, additional follow-up for MRD may be warranted
- Quantify MRD (ALL-F)
    - Preferred method is an FDA-approved NGS-based assay to detect fusion genes or clonal rearrangements in Ig and TCR loci
    - That assay does not require patient-specific primers
    - Use it if available
- If MRD positive, refer to or consult with a center with expertise, given the complexity of MRD management

# Consolidation therapy after marrow CR

- MRD+ (ALL-F)
    - Blinatumomab (preferred) + continued multiagent therapy (ALL-D)
        - Blinatumomab should be incorporated into therapy as a post-remission approach based on data from ECOG1910
        - Toxicity management per Principles of Supportive Care (ALL-C 2 of 6)
    - or Blinatumomab, if multiagent therapy is contraindicated
- MRD- (ALL-F)
    - Blinatumomab (preferred) + continued multiagent therapy (ALL-D)
        - Blinatumomab should be incorporated into therapy as a post-remission approach based on data from ECOG1910
        - Toxicity management per Principles of Supportive Care (ALL-C 2 of 6)
    - or Blinatumomab, if multiagent therapy is contraindicated
    - or Consider allogeneic HCT, especially if high-risk features (ALL-2, ALL-G)

# After consolidation

- Reassess MRD (ALL-F)
- MRD- CR
    - Confirm adequate count recovery per protocol before transitioning to post-remission therapy, even in the presence of MRD negativity
    - Allogeneic HCT (ALL-G)
        - Favored for poor risk B-ALL (ALL-2) and/or slow/incomplete MRD clearance
    - or POMP maintenance
        - May include other elements of maintenance therapy, such as blinatumomab and IT therapy
- Persistent, progressive, or emergent MRD, or marrow progression / extramedullary disease
    - Consider NGS

# Next

- Less than marrow CR after induction, go to Relapsed/Refractory Disease (ALL-8)
- Persistent, progressive, or emergent MRD, or marrow progression / extramedullary disease, go to Relapsed/Refractory Disease (ALL-8)
- MRD- CR on allogeneic HCT or POMP maintenance, go to Surveillance (ALL-7)
