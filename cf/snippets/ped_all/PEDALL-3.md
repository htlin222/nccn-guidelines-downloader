+++
id           = "ped_all/PEDALL-3"
gid          = "ped_all"
ref          = "PEDALL-3"
page         = 15
title        = "Induction and consolidation therapy for BCR::ABL1-negative or BCR::ABL1-like B-ALL, by risk group and post-induction response"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-3A", "PEDALL-4", "PEDALL-8", "PEDALL-11", "PEDALL-C", "PEDALL-E", "PEDALL-F", "PEDALL-G", "PEDALL-I", "PEDALL-J"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["ph-negative", "mrd-positive", "mrd-negative"]
timepoint = ["induction", "consolidation", "maintenance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["standard", "high"]
[[variables]]
name = "response"
type = "enum"
options = ["cr", "less-than-cr"]
[[variables]]
name = "mrd"
type = "enum"
options = ["positive", "negative"]
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-3, p15
- Applies to BCR::ABL1-negative or BCR::ABL1-like B-ALL
- Footnotes on PEDALL-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- B-ALL, BCR::ABL1-negative or BCR::ABL1-like
- Down syndrome
    - If present, see Special Considerations for Patients with Down Syndrome and Infants (PEDALL-E)
- Risk group ___ (risk_group)
    - See Risk Stratification Definitions (PEDALL-F)
- Post-induction response ___ (response)
    - CR (complete remission), or less than CR
    - Response Assessment (PEDALL-I)
- MRD ___ (mrd)
    - The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used
    - See Minimal Residual Disease (PEDALL-J)

# Induction therapy

- Same options for standard risk and for high risk
- Clinical trial (preferred)
- or Chemotherapy
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, tyrosine kinase inhibitors (TKIs) may be considered; see Principles of Systemic Therapy (PEDALL-G)
- Principles of Supportive Care (PEDALL-C)
- Several retrospective studies have shown that AYA patients 15-21 years of age treated on a pediatric protocol have substantially improved event-free survival (EFS) compared to same-aged patients treated on adult ALL regimens

# Consolidation therapy, CR with MRD-negative

- Continue risk-stratified therapy + blinatumomab
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)
    - Risk Stratification Definitions for Post-Induction Therapy (PEDALL-F, 2 of 3)
    - Blinatumomab is incorporated into frontline therapy as a postremission approach based on data from AALL1731 as well as the ECOG1910 study in adults
    - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including cytokine release syndrome (CRS) and neurologic toxicities
    - Experience in the use of the drug as well as resources to monitor the patient closely are essential
    - Follow the instructions for blinatumomab product preparation (including admixing) and administration strictly, to minimize medication errors, including underdosing and overdosing; see blinatumomab prescribing information
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Standard risk only: for patients with an expected very favorable outcome, the benefit of blinatumomab should be weighed with potential toxicities, including increased infection risk
- Then Maintenance therapy
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)

# Next

- CR with MRD-negative, after maintenance therapy, go to Surveillance (PEDALL-8)
- CR with MRD-positive, go to PEDALL-4
- Less than CR, go to Refractory Disease (PEDALL-11)
