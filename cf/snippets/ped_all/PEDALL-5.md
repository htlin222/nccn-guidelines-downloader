+++
id           = "ped_all/PEDALL-5"
gid          = "ped_all"
ref          = "PEDALL-5"
page         = 18
title        = "Induction, consolidation, and maintenance therapy for BCR::ABL1-positive B-ALL"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-I", "PEDALL-F", "PEDALL-G", "PEDALL-C", "PEDALL-J", "PEDALL-K", "PEDALL-E", "PEDALL-8", "PEDALL-11"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = "bcr-abl"
timepoint = ["induction", "consolidation", "maintenance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "down_syndrome"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "tki"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "less than CR"]
[[variables]]
name = "mrd"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["standard risk", "high risk"]
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-5, p18
- Applies to BCR::ABL1-positive B-ALL, from induction through maintenance therapy
- For patients with Down syndrome, see Special Considerations for Patients with Down Syndrome and Infants (PEDALL-E)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- B-ALL, BCR::ABL1-positive
- Down syndrome ___ (down_syndrome)
    - If yes, see PEDALL-E
- AYA patient, 15–21 years of age
    - Several retrospective studies have shown that AYA patients treated on a pediatric protocol have substantially improved EFS compared to same-aged patients treated on adult ALL regimens
- TKI ___ (tki)
- Morphologic response ___ (response)
- MRD ___ (mrd)
- Post-induction risk group ___ (risk_group)
    - Risk Stratification Definitions for Post-Induction Therapy (PEDALL-F, 2 of 3)

# Induction therapy

- Principles of Supportive Care apply throughout (PEDALL-C)
- Clinical trial + tyrosine kinase inhibitor (TKI), preferred
- or Chemotherapy + TKI
    - Principles of Systemic Therapy (PEDALL-G)

# Response assessment (PEDALL-I)

- Standard risk
    - Low MRD
- High risk
    - Less than CR
    - MRD positive at end consolidation
- The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)

# Consolidation therapy, standard risk

- Chemotherapy + blinatumomab + TKI
    - Principles of Systemic Therapy (PEDALL-G)
    - Risk Stratification Definitions for Post-Induction Therapy (PEDALL-F, 2 of 3)
    - Blinatumomab is incorporated into frontline therapy as a postremission approach based on data from AALL1731 as well as the ECOG1910 study in adults
    - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities
    - Experience in the use of the drug, and resources to monitor the patient closely, are essential
    - Follow the instructions for blinatumomab product preparation, including admixing, and administration strictly, to minimize medication errors including underdosing and overdosing
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)

# Consolidation therapy, high risk

- Clinical trial, preferred
- Chemotherapy + blinatumomab + TKI
    - Principles of Systemic Therapy (PEDALL-G)
    - Risk Stratification Definitions for Post-Induction Therapy (PEDALL-F, 2 of 3)
    - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Blinatumomab + TKI
    - Can be utilized as consolidation therapy in high risk BCR::ABL1-positive B-ALL in circumstances where chemotherapy is not feasible or recommended
    - Such as if concern for toxicity with multiagent chemotherapy is too high
    - Or if the patient is awaiting a donor for HCT
    - Principles of Systemic Therapy (PEDALL-G)
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Tisagenlecleucel (category 2B)
    - Use in this setting is strongly recommended in the context of a clinical trial (PEDALL-G, 10 of 13)
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - The role of allogeneic HCT following tisagenlecleucel is unclear
    - Persistence of tisagenlecleucel in peripheral blood and persistent B-cell aplasia have been associated with durable clinical responses without subsequent HCT
    - In the global registration trial, 3-year relapse-free survival was 52% and 48% with and without censoring for subsequent therapy, with only 22% of patients proceeding to HCT
    - Bone marrow MRD positivity, with or without B-cell aplasia, has been shown to be highly predictive of relapse following tisagenlecleucel (PEDALL-J)

# Maintenance therapy

- Standard risk
    - Maintenance therapy + TKI (PEDALL-G)
    - Consider HCT (PEDALL-K)
- High risk
    - Consider HCT (PEDALL-K)
    - Consider post-HCT TKI
- To confirm adherence to oral chemotherapy during maintenance therapy
    - Take a detailed history
    - Perform pill counts
    - And/or measure metabolites

# Next

- Surveillance (PEDALL-8)
- If less than CR after consolidation, see Refractory Disease (PEDALL-11)
