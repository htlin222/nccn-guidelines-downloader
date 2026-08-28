+++
id           = "ped_all/PEDALL-11"
gid          = "ped_all"
ref          = "PEDALL-11"
page         = 25
title        = "Treatment of multiple relapse or refractory disease, and consolidation by response"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-C", "PEDALL-G", "PEDALL-J", "PEDALL-K"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
stage     = ["recurrent", "refractory"]
biomarker = ["mrd-positive", "mrd-negative"]
timepoint = ["relapsed-refractory", "transplant", "supportive"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lineage"
type = "enum"
options = ["b-all", "t-all"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["multiple relapse", "refractory"]
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "relapse_site"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["cr", "less than cr"]
[[variables]]
name = "marrow_mrd"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-11, p25
- Applies to multiple relapse or refractory disease
- Isolated extramedullary relapse, both CNS and testicular, requires systemic therapy to prevent relapse in marrow
- Supportive care throughout, see Principles of Supportive Care (PEDALL-C)
- Palliative care throughout, see NCCN Guidelines for Palliative Care
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (lineage)
- Disease status ___ (disease_status)
- Prior therapy ___ (prior_therapy)
- Site of relapse ___ (relapse_site)
    - If isolated extramedullary, systemic therapy is still required to prevent relapse in marrow
- Bone marrow MRD ___ (marrow_mrd)

# Treatment

- Clinical trial (preferred)
- Systemic therapy
    - See Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
- Blinatumomab, if B-ALL
    - See Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - See Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
- Tisagenlecleucel, if B-ALL
    - See Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - See Tisagenlecleucel in the Principles of Systemic Therapy (PEDALL-G, 10 of 13)
    - See Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - The role of allogeneic HCT following tisagenlecleucel is unclear
        - Persistence of tisagenlecleucel in peripheral blood and persistent B-cell aplasia have been associated with durable clinical responses without subsequent HCT
        - In the global registration trial, 3-year relapse-free survival was 52% and 48%, with and without censoring for subsequent therapy, with only 22% of patients proceeding to HCT
    - Bone marrow MRD positivity, with or without B-cell aplasia, is highly predictive of relapse following tisagenlecleucel
        - See Minimal Residual Disease (PEDALL-J)
- Inotuzumab ozogamicin, if B-ALL
    - See Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
    - See Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Associated with potentially fatal or life-threatening hepatic SOS
    - Associated with increased risk of post-HCT non-relapse mortality
    - For details, see the inotuzumab ozogamicin prescribing information (https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm)
    - Ursodiol prophylaxis can be considered for prevention of SOS with use of inotuzumab ozogamicin

# Response

- Response to treatment ___ (response)
- CR, proceed to consolidation therapy
- Less than CR, alternative therapy and/or best supportive care and palliative care

# Consolidation therapy for CR

- Allogeneic HCT
    - See Principles of Hematopoietic Cell Transplant (PEDALL-K)
    - The role of allogeneic HCT following tisagenlecleucel is unclear
    - MRD-positive second CR, additional 1-2 courses of therapy are recommended to achieve an MRD-negative result prior to allogeneic HCT
    - If MRD negativity cannot be achieved, proceeding to allogeneic HCT should still be considered

# Next

- CR, go to HCT, see Principles of Hematopoietic Cell Transplant (PEDALL-K)
- Less than CR, alternative therapy, see Principles of Systemic Therapy for Relapsed/Refractory ALL (PEDALL-G, 7 of 13)
- Less than CR, best supportive care and palliative care, see NCCN Guidelines for Palliative Care
