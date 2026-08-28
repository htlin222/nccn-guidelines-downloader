+++
id           = "ped_all/PEDALL-6"
gid          = "ped_all"
ref          = "PEDALL-6"
page         = 19
title        = "T-ALL induction, consolidation, and continuation therapy by post-induction risk group"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-2", "PEDALL-C", "PEDALL-E", "PEDALL-G", "PEDALL-I", "PEDALL-J", "PEDALL-K", "PEDALL-8", "PEDALL-10"]

[facets]
disease   = "ped_all"
histology = ["lymphoblastic", "t-cell"]
biomarker = ["mrd-positive", "mrd-negative"]
timepoint = ["induction", "consolidation", "transplant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "down_syndrome"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mrd_day29"
type = "text"
[[variables]]
name = "cns_status"
type = "text"
[[variables]]
name = "testicular"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "steroid_pretreatment"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mrd_end_consolidation"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["standard", "high", "very-high"]
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-6, p19
- Applies to T-cell ALL (T-ALL): induction, consolidation, and continuation therapy
- For patients with Down syndrome, see Special Considerations for Patients with Down Syndrome and Infants (PEDALL-E)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, T-ALL
- Down syndrome ___ (down_syndrome)
- Day 29 MRD ___ (mrd_day29)
- CNS status ___ (cns_status)
- Testicular disease ___ (testicular)
- Steroid pretreatment ___ (steroid_pretreatment)
    - The specific definition of steroid pretreatment differs by protocol; refer to the regimen-specific definition of steroid pretreatment
- End consolidation MRD ___ (mrd_end_consolidation)
- Post-induction risk group ___ (risk_group)

# Induction therapy

- Clinical trial (preferred)
- or Chemotherapy
    - See regimens for T-ALL on Principles of Systemic Therapy (PEDALL-G, 2 of 13)
- The Panel believes it is reasonable to use bortezomib with Berlin-Frankfurt-Munster (BFM) backbone chemotherapy in patients with pediatric T-cell LL (T-LL)
    - It was shown to improve EFS/overall survival (OS) in T-LL but not leukemia
- Principles of Supportive Care (PEDALL-C)
- Several retrospective studies have shown that AYA patients (15-21 years of age) treated on a pediatric protocol have substantially improved EFS compared to same-aged patients treated on adult ALL regimens

# Response assessment

- MRD and morphologic marrow response should be assessed after induction
- If not MRD negative, repeat assessment after consolidation therapy
- Assess MRD at additional time points based on chemotherapy regimen and response as indicated
- See Minimal Residual Disease (PEDALL-J)
- Response Assessment (PEDALL-I)

# Post-induction risk group definitions

- Standard
    - Day 29 MRD <0.01%
    - and CNS-1
    - and absence of testicular disease
    - and no steroid pretreatment
- High
    - Absence of standard- and very-high-risk features
- Very High
    - End consolidation MRD >0.1%
- The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)

# Consolidation therapy

- Standard or High risk
    - Continue chemotherapy
        - See regimens for T-ALL on Principles of Systemic Therapy (PEDALL-G, 2 of 13)
- Very high risk
    - Clinical trial (preferred)
    - or Continue chemotherapy (PEDALL-G, 2 of 13)
    - or Alternative therapy
        - See regimens for T-ALL on Principles of Systemic Therapy (PEDALL-G, 9 of 13)

# Continuation therapy

- Continue chemotherapy (PEDALL-G, 2 of 13)
- Consider HCT
    - Principles of Hematopoietic Cell Transplant (PEDALL-K)

# Next

- Surveillance (PEDALL-8)
- If less than CR after consolidation, see T-ALL Relapsed/Refractory Disease (PEDALL-10)
