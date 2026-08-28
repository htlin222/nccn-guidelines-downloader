+++
id           = "neuroblastoma/NEUROB-5"
gid          = "neuroblastoma"
ref          = "NEUROB-5"
page         = 11
title        = "Intermediate-risk stage M: chemotherapy course by age and biology, and what the response assessment decides next"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-2", "NEUROB-D", "NEUROB-E", "NEUROB-F", "NEUROB-G"]

[facets]
disease   = "neuroblastoma"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age_days"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["FH", "UH", "not available"]
[[variables]]
name = "dna_index"
type = "text"
[[variables]]
name = "sca"
type = "enum"
options = ["present", "absent", "not available"]
[[variables]]
name = "met_sites"
type = "text"
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-5, p11
- Applies to intermediate-risk disease, stage M, per Risk Classification (NEUROB-2)
- Chemotherapy per Principles of Systemic Therapy (NEUROB-D)
- Surgery per Principles of Surgery (NEUROB-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Age at diagnosis ___ (age_days) days
- Histology ___ (histology)
- DNA index ___ (dna_index)
- Segmental chromosomal aberrations (SCA) ___ (sca)
- Non-liver and non-skin metastatic sites ___ (met_sites)
- Biology called favorable only if FH, DI >1, and no SCA
    - If SCA or histology status are not available, consider as unfavorable

# Primary treatment

- Under 365 days with all favorable biology
    - 4 cycles of chemotherapy (NEUROB-D)
- Under 365 days with at least 1 unfavorable biologic feature
    - 8 cycles of chemotherapy (NEUROB-D)
- 365 to under 547 days with FH, DI >1, no SCA
    - 8 cycles of chemotherapy (NEUROB-D)
- Obtain audiologic assessment at diagnosis and again at end of therapy
- Obtain echocardiogram at diagnosis and again at end of therapy
- Evaluate all prior sites of disease after 4 cycles if only 4 cycles of chemotherapy are planned
- If 8 cycles are planned, evaluate after cycles 4 and 8

# Response after 4 cycles

- Response for the primary tumor historically measured by volume (NEUROB-D 1 of 13, and Response Assessment NEUROB-G)
- At least PR for the primary tumor, and complete response (CR) in non-liver and non-skin metastatic sites
    - Go to surveillance
- Less than PR for the primary tumor, or less than CR in non-liver and non-skin metastatic sites
    - Go to multidisciplinary discussion of role for surgery versus additional chemotherapy

# Response after 8 cycles

- Response for the primary tumor historically measured by volume (NEUROB-D 1 of 13, and Response Assessment NEUROB-G)
- Total (or near total) reduction in primary tumor size, and CR of non-liver and non-skin metastatic sites
    - Go to surveillance
- Less than total (or near total) reduction in primary tumor size, or residual non-liver and non-skin metastatic sites
    - Go to multidisciplinary discussion of role for surgery versus additional chemotherapy

# Multidisciplinary discussion of role for surgery versus additional chemotherapy

- Undertake the multidisciplinary discussion on an iterative basis
- If additional chemotherapy is given, consider 2-4 additional cycles
    - Repeat primary tumor imaging after every 2 cycles
- Consider surgery if chemotherapy has led to SD or minimal improvement in tumor size
- Consider biopsy, as the tumor may have differentiated and additional treatment may not be required
- If 8 cycles of chemotherapy have been given and the tumor remains unresectable, consider treatment with second-line chemotherapy as per Twist CJ, et al. J Clin Oncol 2019;37:3243-3255
- Multidisciplinary discussion is important in decisions surrounding surgery and additional chemotherapy

# Next

- Surveillance, see Disease Surveillance/Follow-up (NEUROB-F)
    - Begin surveillance once the response or reduction in primary tumor size noted above is achieved, with chemotherapy and/or surgery
    - If the treatment endpoint has been achieved, obtain MIBG scan as part of the end of therapy evaluation
