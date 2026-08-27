+++
id           = "mpn/MF-2"
gid          = "mpn"
ref          = "MF-2"
page         = 10
title        = "Treatment for higher-risk myelofibrosis"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["MPN-1", "MPN-2", "MF-1", "MF-3"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
timepoint = ["primary-treatment", "transplant"]

[[variables]]
name = "plt"
type = "text"
[[variables]]
name = "mpn_saf_tss"
type = "text"
[[variables]]
name = "transplant_candidate"
type = "enum"
options = ["candidate", "not a candidate", "transplant not currently feasible"]
[[variables]]
name = "splenomegaly"
type = "text"
[[variables]]
name = "constitutional_symptoms"
type = "text"
[[variables]]
name = "anemia"
type = "text"
[[variables]]
name = "prior_jak_inhibitor"
type = "text"
+++

# Source

- NCCN Myeloproliferative Neoplasms v2.2026, MF-2, p10
- Applies to higher-risk myelofibrosis
    - Prognostic significance of mutations in myelofibrosis, see MPN-D
    - Special considerations for allogeneic hematopoietic cell transplant (HCT), see MF-C
- Footnotes on MF-2A
- All recommendations category 2A unless stated otherwise

# Assessment

- Higher-risk myelofibrosis
- Platelet count ___ (plt)
- MPN-SAF TSS ___ (mpn_saf_tss)
- Transplant candidacy ___ (transplant_candidate)
- Symptomatic splenomegaly ___ (splenomegaly)
- Constitutional symptoms ___ (constitutional_symptoms)
- Anemia ___ (anemia)
- JAK inhibitor already used ___ (prior_jak_inhibitor)

# Before treatment

- Assess blood counts, if not done previously
- Assess symptom burden using MPN-SAF TSS (MPN-E 1 of 2), if not done previously

# Treatment when platelets are <50 x 10^9/L

- Transplant candidate: allogeneic HCT
    - Special considerations for allogeneic HCT (MF-C)
    - When counseling patients about transplant, the MTSS can be helpful in predicting post-transplant survival
    - Donor selection and conditioning should be evaluated on a case-by-case basis, see NCCN Guidelines for Hematopoietic Cell Transplantation
- Not a transplant candidate, or transplant not currently feasible
    - Special considerations for allogeneic HCT (MF-C)
    - Clinical trial
    - Preferred: pacritinib (category 1)
    - Other recommended: momelotinib (category 2B)

# Treatment when platelets are 50 x 10^9/L or higher

- Transplant candidate: allogeneic HCT
    - Special considerations for allogeneic HCT (MF-C)
    - When counseling patients about transplant, the MTSS can be helpful in predicting post-transplant survival
    - Donor selection and conditioning should be evaluated on a case-by-case basis, see NCCN Guidelines for Hematopoietic Cell Transplantation
- Not a transplant candidate, or transplant not currently feasible
    - Special considerations for allogeneic HCT (MF-C)
    - Anemia, see MF-3
    - Presence of symptomatic splenomegaly and/or constitutional symptoms
        - Supportive care for patients with MPN (MPN-F)
        - Clinical trial
        - Fedratinib (category 1)
        - Ruxolitinib (category 1)
        - Momelotinib
        - Pacritinib (category 2B)

# Monitoring on treatment

- Monitor for intolerance, response, and signs/symptoms of disease progression (MPN-E 1 of 2) as clinically indicated
- Prognostic significance of mutations in myelofibrosis (MPN-D)
- Bone marrow aspirate and biopsy with NGS and karyotyping should be performed at diagnosis and as clinically indicated, if supported by increased symptoms and signs of progression
    - Additional molecular testing using a multigene NGS panel should be considered, to evaluate for higher-risk mutations associated with disease progression in patients with MF
- Response criteria were developed mainly for use in clinical trials
    - Clinical benefit may not reach the threshold of the 2013 IWG-MRT and ELN Response Criteria for MF (MF-B)
    - Response assessment should be done based on the improvement of disease-related symptoms at the discretion of the clinician
    - RR6 may also be used to gauge response
    - For ruxolitinib, use RR6 model to assess
    - Continuation of JAK inhibitors is recommended based on the discretion of the clinician

# Next

- Response: continue treatment and monitor for disease progression (MPN-E 1 of 2)
    - Special considerations for the use of JAK inhibitors (MPN-G)
- Intolerance, or no response, or loss of response
    - Clinical trial
    - Alternate JAK inhibitor not used before (category 2B for pacritinib), and monitor for disease progression (MPN-E 1 of 2)
        - Special considerations for the use of JAK inhibitors (MPN-G)
    - For anemia, see MF-3
- Disease progression: accelerated/blast phase, go to MPN-AP/BP-1
