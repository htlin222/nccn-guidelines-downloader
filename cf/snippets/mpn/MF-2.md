+++
id           = "mpn/MF-2"
gid          = "mpn"
ref          = "MF-2"
page         = 10
title        = "Treatment for higher-risk myelofibrosis, by platelet count and transplant candidacy"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["MF-1", "MF-3", "MF-B", "MF-C", "MPN-D", "MPN-E", "MPN-F", "MPN-G"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
timepoint = ["primary-treatment", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "platelets"
type = "number"
[[variables]]
name = "mpn_saf_tss"
type = "number"
[[variables]]
name = "transplant_candidate"
type = "enum"
options = ["candidate", "not a candidate", "transplant not currently feasible"]
[[variables]]
name = "splenomegaly"
type = "enum"
options = ["none", "asymptomatic", "symptomatic"]
[[variables]]
name = "constitutional_symptoms"
type = "text"
[[variables]]
name = "anemia"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_jak_inhibitor"
type = "text"
+++

# Source

- NCCN Myelofibrosis v2.2026, MF-2, p10
- Applies to higher-risk myelofibrosis
- Footnotes on MF-2A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, myelofibrosis, higher risk
    - Prognostic significance of mutations in myelofibrosis (MPN-D)
    - Special considerations for allogeneic hematopoietic cell transplant (MF-C)
- Assess blood counts and symptom burden using MPN-SAF TSS (MPN-E 1 of 2), if not done previously
    - Platelets ___ (platelets) x 10^9/L
    - MPN-SAF TSS ___ (mpn_saf_tss)
- Transplant candidacy ___ (transplant_candidate)
    - Special considerations for allogeneic hematopoietic cell transplant (MF-C)
- Symptomatic splenomegaly ___ (splenomegaly)
- Constitutional symptoms ___ (constitutional_symptoms)
- Anemia ___ (anemia)
- JAK inhibitor used before ___ (prior_jak_inhibitor)

# Transplant candidate

- Allogeneic HCT
    - Special considerations for allogeneic hematopoietic cell transplant (MF-C)
    - When counseling patients about transplant, the MTSS can be helpful in predicting post-transplant survival
    - Donor selection and conditioning should be evaluated on a case-by-case basis, see NCCN Guidelines for Hematopoietic Cell Transplantation

# Platelets under 50 x 10^9/L, not a transplant candidate or transplant not currently feasible

- Special considerations for allogeneic hematopoietic cell transplant (MF-C)
- Clinical trial
- or Preferred: pacritinib (category 1)
- or Other Recommended: momelotinib (category 2B)

# Platelets 50 x 10^9/L or higher, not a transplant candidate or transplant not currently feasible

- Special considerations for allogeneic hematopoietic cell transplant (MF-C)
- Anemia, see MF-3
- Presence of symptomatic splenomegaly and/or constitutional symptoms
    - Supportive care for patients with MPN (MPN-F)
    - Clinical trial
    - or Fedratinib (category 1)
    - or Ruxolitinib (category 1)
    - or Momelotinib
    - or Pacritinib (category 2B)

# Monitoring on treatment

- Monitor for intolerance, response, and signs/symptoms of disease progression (MPN-E 1 of 2) as clinically indicated
- Prognostic significance of mutations in myelofibrosis (MPN-D)
- Bone marrow aspirate and biopsy with NGS and karyotyping should be performed at diagnosis and as clinically indicated
    - As clinically indicated means supported by increased symptoms and signs of progression
    - Additional molecular testing using a multigene NGS panel should be considered, to evaluate for higher-risk mutations associated with disease progression in patients with MF
- Response assessment
    - Response criteria were developed mainly for use in clinical trials
    - Clinical benefit may not reach the threshold of the 2013 IWG-MRT and ELN Response Criteria for MF (MF-B)
    - Response assessment should be done based on the improvement of disease-related symptoms at the discretion of the clinician
    - RR6 may also be used to gauge response
    - For ruxolitinib, use the RR6 model to assess
    - Continuation of JAK inhibitors is recommended based on the discretion of the clinician

# Next

- Response: continue treatment and monitor for disease progression (MPN-E 1 of 2)
    - Special considerations for the use of JAK inhibitors (MPN-G)
- Intolerance, or no response, or loss of response
    - Prognostic significance of mutations in myelofibrosis (MPN-D)
    - Clinical trial
    - or Alternate JAK inhibitor not used before (category 2B for pacritinib), and monitor for disease progression (MPN-E 1 of 2)
        - Special considerations for the use of JAK inhibitors (MPN-G)
    - or For anemia, see MF-3
- Disease progression to accelerated/blast phase MPN, go to MPN-AP/BP-1
