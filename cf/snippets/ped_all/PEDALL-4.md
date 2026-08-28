+++
id           = "ped_all/PEDALL-4"
gid          = "ped_all"
ref          = "PEDALL-4"
page         = 17
title        = "Consolidation therapy, response assessment, and maintenance therapy"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-I", "PEDALL-G", "PEDALL-J", "PEDALL-K", "PEDALL-8", "PEDALL-11"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["mrd-positive", "mrd-negative"]
timepoint = ["consolidation", "maintenance", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mrd_post_induction"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "protocol"
type = "text"
[[variables]]
name = "mrd_assay"
type = "text"
[[variables]]
name = "bcr_abl1_like"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "mrd_after_consolidation"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "response_after_consolidation"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-4, p17
- Consolidation therapy, then response assessment, then maintenance therapy
- Consolidation branch is chosen by post-induction MRD status
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Post-induction MRD ___ (mrd_post_induction)
    - The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)
    - Protocol ___ (protocol)
    - Assay ___ (mrd_assay)
- Post-induction risk stratification, see PEDALL-F, 2 of 3
- BCR::ABL1-like ALL ___ (bcr_abl1_like)
- MRD at response assessment after consolidation ___ (mrd_after_consolidation) (PEDALL-I)
- Response after consolidation ___ (response_after_consolidation)

# Consolidation therapy, MRD+ post-induction

- Clinical trial (preferred)
- Intensified consolidation chemotherapy + blinatumomab
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)
    - Risk Stratification Definitions for Post-Induction Therapy (PEDALL-F, 2 of 3)
    - Blinatumomab is incorporated into frontline therapy as a postremission approach based on data from AALL1731 as well as the ECOG1910 study in adults
    - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities
        - Experience in the use of the drug, as well as resources to monitor the patient closely, are essential
        - Follow the instructions for blinatumomab product preparation (including admixing) and administration strictly, to minimize medication errors including underdosing and overdosing
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)

# Consolidation therapy, MRD- post-induction

- Continue chemotherapy + blinatumomab
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)
    - Blinatumomab is incorporated into frontline therapy as a postremission approach based on data from AALL1731 as well as the ECOG1910 study in adults
    - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities; experience with the drug and resources for close monitoring are essential, and preparation and administration instructions must be followed strictly
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)

# Response assessment after consolidation (PEDALL-I), MRD+

- The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)
- Clinical trial (preferred)
- Chemotherapy
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)
- Blinatumomab
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Tisagenlecleucel (category 2B)
    - Use in this setting is strongly recommended in the context of a clinical trial (PEDALL-G, 10 of 13)
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - The role of allogeneic HCT following tisagenlecleucel is unclear (PEDALL-K)
        - Persistence of tisagenlecleucel in peripheral blood and persistent B-cell aplasia have been associated with durable clinical responses without subsequent HCT
        - In the global registration trial, 3-year relapse-free survival was 52% and 48% with and without censoring for subsequent therapy, with only 22% of patients proceeding to HCT
    - Bone marrow MRD positivity, with or without B-cell aplasia, has been shown to be highly predictive of relapse following tisagenlecleucel (PEDALL-J)

# Maintenance therapy

- Maintenance chemotherapy
    - Principles of Systemic Therapy (PEDALL-G)
    - For patients with BCR::ABL1-like ALL, TKIs may be considered (PEDALL-G)
- Consider hematopoietic cell transplant (HCT)
    - Principles of Hematopoietic Cell Transplant (PEDALL-K)
    - HCT should be more strongly considered in the setting of MRD positivity
    - The role of allogeneic HCT following tisagenlecleucel is unclear
- Confirm adherence to oral chemotherapy during maintenance therapy
    - Take a detailed history
    - Perform pill counts
    - Measure metabolites

# Next

- After maintenance therapy, go to Surveillance (PEDALL-8)
- If less than CR after consolidation, see Refractory Disease (PEDALL-11)
