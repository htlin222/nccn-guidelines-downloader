+++
id           = "mpn/MF-1"
gid          = "mpn"
ref          = "MF-1"
page         = 9
title        = "Treatment for lower-risk myelofibrosis, and monitoring of the response to it"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["MF-2", "MF-3", "MF-B", "MPN-D", "MPN-E", "MPN-F", "MPN-G"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "mpn_saf_tss"
type = "number"
[[variables]]
name = "anemia"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "platelets"
type = "number"
[[variables]]
name = "karyotype"
type = "text"
[[variables]]
name = "mutations"
type = "text"
+++

# Source

- NCCN Myelofibrosis v2.2026, MF-1, p9
- Applies to lower-risk myelofibrosis
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, myelofibrosis, lower risk
- Assess blood counts and symptom burden using MPN-SAF TSS (MPN-E 1 of 2), if not done previously
    - MPN-SAF TSS ___ (mpn_saf_tss)
- ___ (symptom_status)
- Anemia ___ (anemia)
- Platelets ___ (platelets) x 10^9/L
- Karyotype ___ (karyotype)
- Higher-risk mutations ___ (mutations)
- Bone marrow aspirate and biopsy with NGS and karyotyping, performed at diagnosis and as clinically indicated
    - As clinically indicated means supported by increased symptoms and signs of progression
    - Consider additional molecular testing using a multigene NGS panel, to evaluate for higher-risk mutations associated with disease progression
    - Prognostic significance of mutations in myelofibrosis (MPN-D)
- Evaluation for allogeneic HCT is recommended for patients with low platelet counts or complex cytogenetics
    - Identification of higher-risk mutations may be helpful in the decision-making regarding allogeneic HCT
    - When counseling about transplant, the Myelofibrosis Transplant Scoring System (MTSS) can be helpful in predicting post-transplant survival

# Asymptomatic

- Clinical trial
- or Observation
- Monitor for signs and symptoms of disease progression (MPN-E 1 of 2) every 3–6 months

# Symptomatic

- Symptomatic disease should be managed as noted below
- Supportive care for patients with MPN (MPN-F)
- For anemia, see MF-3
- Clinical trial
- or Hydroxyurea, useful in certain circumstances, if cytoreduction would be symptomatically beneficial
- or Pacritinib, if platelets <50 x 10^9/L
- or Peginterferon alfa-2a
    - If peginterferon alfa-2a is unavailable, use of other available pegylated interferons (eg, ropeginterferon alfa-2b-njft) is appropriate (MPN-G 2 of 2)
- or Ruxolitinib
- or Momelotinib (category 2B)

# Monitoring on treatment

- Monitor for intolerance, response, and signs/symptoms of disease progression (MPN-E 1 of 2) as clinically indicated
- Judging response
    - Response criteria were developed mainly for use in clinical trials
    - Clinical benefit may not reach the threshold of the 2013 IWG-MRT and ELN Response Criteria for MF (MF-B)
    - Assess response based on the improvement of disease-related symptoms, at the discretion of the clinician
    - RR6 may also be used to gauge response
        - For ruxolitinib, use the RR6 model to assess
    - Continuation of JAK inhibitors is recommended based on the discretion of the clinician

# Next

- Response: continue treatment and monitor for disease progression (MPN-E 1 of 2)
    - Special considerations for the use of JAK inhibitors (MPN-G)
- Intolerance, or no response, or loss of response: alternate option not used for initial treatment (category 2B for momelotinib), and monitor for disease progression (MPN-E 1 of 2)
    - Special considerations for the use of JAK inhibitors (MPN-G)
    - or for anemia, see MF-3
- Disease progression, higher-risk, go to MF-2
- Disease progression, accelerated/blast phase MPN, go to MPN-AP/BP-1
