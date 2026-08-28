+++
id           = "ped_all/PEDALL-9"
gid          = "ped_all"
ref          = "PEDALL-9"
page         = 22
title        = "B-ALL first relapse disease: treatment, response, and consolidation therapy"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-C", "PEDALL-G", "PEDALL-J", "PEDALL-K", "PEDALL-11"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
stage     = "recurrent"
biomarker = ["bcr-abl", "mrd-positive", "mrd-negative"]
timepoint = ["relapsed-refractory", "consolidation", "maintenance", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "time_from_diagnosis"
type = "text"
[[variables]]
name = "relapse_site"
type = "enum"
options = ["isolated-bone-marrow", "combined-bone-marrow", "isolated-cns", "isolated-testicular"]
[[variables]]
name = "relapse_timing"
type = "enum"
options = ["early", "late"]
[[variables]]
name = "prior_hct"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "bcr_abl1"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "mrd_status"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "response"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-9, p22
- Relapsed disease: B-ALL first relapse, either early or late, or first relapse post-HCT
- Footnotes on PEDALL-9A
- Isolated extramedullary relapse, both CNS and testicular, requires systemic therapy to prevent relapse in marrow
- NCCN Guidelines for Palliative Care apply throughout
- Principles of Supportive Care (PEDALL-C)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, B-ALL first relapse disease
- Time from initial diagnosis to this relapse ___ (time_from_diagnosis)
- Site of relapse ___ (relapse_site)
- Relapse timing ___ (relapse_timing)
    - Early relapse is <36 months from initial diagnosis for isolated or combined bone marrow relapse
    - Early relapse is <18 months from initial diagnosis for isolated extramedullary relapse
    - Late relapse is 36 months or more from initial diagnosis for isolated or combined bone marrow relapse
    - Late relapse is 18 months or more from initial diagnosis for isolated extramedullary relapse
- Prior HCT ___ (prior_hct)
    - If yes, this is first relapse post-HCT and takes the post-HCT treatment arm
- BCR::ABL1 status ___ (bcr_abl1)
    - If BCR::ABL1+, ABL1 kinase domain mutation testing
    - If BCR::ABL1+, add TKI to the treatment; Regimens for Relapsed/Refractory BCR::ABL1-positive ALL (PEDALL-G, 8 of 13)
- MRD ___ (mrd_status)
    - The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)
- Response ___ (response)

# Treatment, early or late first relapse

- Clinical trial (preferred)
- or Systemic therapy
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - If relapse is >3 months from initial diagnosis, consider treatment with the same induction regimen
    - For BCR::ABL1-negative, BCR::ABL1-like and BCR::ABL1-positive B-ALL, see PEDALL-G (1 of 13)
    - For T-ALL, see PEDALL-G (2 of 13)
- For BCR::ABL1+ ALL add TKI to the treatment (PEDALL-G, 8 of 13)
- Principles of Supportive Care (PEDALL-C)

# Treatment, first relapse post-HCT

- Clinical trial (preferred)
- Systemic therapy
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - If relapse is >3 months from initial diagnosis, consider treatment with the same induction regimen
    - For BCR::ABL1-negative, BCR::ABL1-like and BCR::ABL1-positive B-ALL, see PEDALL-G (1 of 13)
    - For T-ALL, see PEDALL-G (2 of 13)
- Blinatumomab
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Tisagenlecleucel
    - See Tisagenlecleucel in the Principles of Systemic Therapy (PEDALL-G, 10 of 13)
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - The role of allogeneic HCT following tisagenlecleucel is unclear (PEDALL-K)
        - Persistence of tisagenlecleucel in peripheral blood and persistent B-cell aplasia have been associated with durable clinical responses without subsequent HCT
        - In the global registration trial, 3-year relapse-free survival was 52% and 48% with and without censoring for subsequent therapy, with only 22% of patients proceeding to HCT
        - Bone marrow MRD positivity, with or without B-cell aplasia, has been shown to be highly predictive of relapse following tisagenlecleucel (PEDALL-J)
- Inotuzumab ozogamicin
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Associated with potentially fatal or life-threatening hepatic sinusoidal obstructive syndrome (SOS) and increased risk of post-HCT nonrelapse mortality
    - See inotuzumab ozogamicin prescribing information
    - Ursodiol prophylaxis can be considered for prevention of SOS
- For BCR::ABL1+ ALL add TKI to the treatment (PEDALL-G, 8 of 13)

# Response assessment

- MRD and morphologic marrow response should be assessed after induction (PEDALL-J)
    - If not MRD negative, repeat assessment after consolidation therapy
    - Assess MRD at additional time points based on chemotherapy regimen and response as indicated
- CR, MRD-negative
- CR, MRD-positive
    - The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used (PEDALL-J)
- Less than CR

# Consolidation therapy, CR and MRD-negative

- Clinical trial (preferred)
- Blinatumomab
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - This recommendation pertains only to patients with bone marrow relapse with or without extramedullary involvement
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Chemotherapy
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
- For BCR::ABL1+ ALL add TKI to the treatment (PEDALL-G, 8 of 13)
- Then, by relapse timing
    - Early first relapse, go to HCT (PEDALL-K)
    - Late first relapse, maintenance chemotherapy (PEDALL-G)
    - Late first relapse, consider HCT (PEDALL-K)
        - For patients with MRD-positive second CR, it is recommended to receive an additional 1-2 courses of therapy to achieve an MRD-negative result prior to allogeneic HCT
        - Some patients may not be able to achieve MRD negativity, and proceeding to allogeneic HCT should be considered

# Consolidation therapy, CR and MRD-positive

- Clinical trial (preferred)
- Blinatumomab
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - This recommendation pertains only to patients with bone marrow relapse with or without extramedullary involvement
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Chemotherapy
    - Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
- Tisagenlecleucel
    - See Tisagenlecleucel in the Principles of Systemic Therapy (PEDALL-G, 10 of 13)
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - The role of allogeneic HCT following tisagenlecleucel is unclear (PEDALL-K)
    - Bone marrow MRD positivity, with or without B-cell aplasia, has been shown to be highly predictive of relapse following tisagenlecleucel (PEDALL-J)
- Inotuzumab ozogamicin
    - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Associated with potentially fatal or life-threatening hepatic sinusoidal obstructive syndrome (SOS) and increased risk of post-HCT nonrelapse mortality
    - Ursodiol prophylaxis can be considered for prevention of SOS
- For BCR::ABL1+ ALL add TKI to the treatment (PEDALL-G, 8 of 13)
- Then HCT (PEDALL-K)
    - The role of allogeneic HCT following tisagenlecleucel is unclear
    - For patients with MRD-positive second CR, it is recommended to receive an additional 1-2 courses of therapy to achieve an MRD-negative result prior to allogeneic HCT
    - Some patients may not be able to achieve MRD negativity, and proceeding to allogeneic HCT should be considered

# Next

- CR and MRD-negative, early first relapse, go to HCT
- CR and MRD-negative, late first relapse, maintenance chemotherapy and consider HCT
- CR and MRD-positive, complete consolidation therapy, then HCT
- Less than CR, go to Multiple Relapsed/Refractory Disease (PEDALL-11)
- First relapse post-HCT with CR, consider second HCT
- First relapse post-HCT with less than CR, go to Multiple Relapsed/Refractory Disease (PEDALL-11)
