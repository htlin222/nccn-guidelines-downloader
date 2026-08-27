+++
id           = "cml/CML-4"
gid          = "cml"
ref          = "CML-4"
page         = 12
title        = "Treatment of advanced phase CML, accelerated phase and blast phase"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-2", "CML-3", "CML-6", "CML-C"]

[facets]
disease   = "cml"
histology = ["myeloid", "lymphoid"]
biomarker = "bcr-abl"
timepoint = ["primary-treatment", "induction", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "phase"
type = "enum"
options = ["accelerated", "blast"]
[[variables]]
name = "lineage"
type = "enum"
options = ["lymphoid", "myeloid"]
[[variables]]
name = "transcript_type"
type = "text"
[[variables]]
name = "mutation_profile"
type = "text"
[[variables]]
name = "prior_tki"
type = "text"
[[variables]]
name = "hct_candidate"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-4, p12
- Clinical presentation: advanced phase CML
- Covers accelerated phase CML (AP-CML) and blast phase CML (BP-CML)
- Footnotes g, h, i, j, m, n, z, aa, bb, cc, dd for this page are printed on CML-4A and are not reproduced here
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, advanced phase CML
- Phase ___ (phase)
- If blast phase, lineage ___ (lineage)
- BCR::ABL1 transcript type ___ (transcript_type)
- BCR::ABL1 mutation profile ___ (mutation_profile)
- Prior TKI therapy ___ (prior_tki)
- Candidate for allogeneic HCT ___ (hct_candidate)

# Treatment considerations

- BCR::ABL1 transcript type
- Disease progression to advanced phase while on TKI therapy has worse prognosis than de novo advanced phase CML
    - Selection of TKI is based on prior therapy and/or BCR::ABL1 mutation profile
- Toxicity profile of TKI (CML-C)
- Possible drug interactions
- Medication cost
- Evaluation for allogeneic HCT as indicated
- Central nervous system (CNS) involvement has been described in BP-CML
    - Lumbar puncture and CNS prophylaxis is recommended for lymphoid BP-CML

# Accelerated phase CML (AP-CML), treatment

- Clinical trial
- or Preferred
    - Second-generation (2G) TKI, alphabetical order
        - Bosutinib
        - Dasatinib
        - Nilotinib
    - or Third-generation (3G) TKI
        - Ponatinib
- or Useful in certain circumstances
    - First-generation (1G) TKI
        - Imatinib, if 2G or 3G TKI is contraindicated
    - Allosteric TKI
        - Asciminib

# Blast phase CML (BP-CML), lymphoid, treatment

- Clinical trial
- or Preferred
    - ALL-type induction chemotherapy (See NCCN Guidelines for ALL) plus TKI
- or Useful in certain circumstances
    - TKI plus steroids, if not a candidate for induction chemotherapy

# Blast phase CML (BP-CML), myeloid, treatment

- Clinical trial
- or Preferred
    - AML-type induction chemotherapy (See NCCN Guidelines for AML) plus TKI
- or Useful in certain circumstances
    - TKI, if not a candidate for induction chemotherapy

# Next

- AP-CML, meeting response milestones (CML-3)
    - Continue the same TKI
- AP-CML, lack of response or disease progression
    - Allogeneic HCT (CML-6)
    - or Alternate TKI
- BP-CML, patients in remission
    - Allogeneic HCT (CML-6)
    - or Consolidation chemotherapy (ALL or AML) and TKI maintenance, for noncandidates for allogeneic HCT
- BP-CML, lack of chemotherapy response (ALL or AML) or disease progression
    - Alternate TKI, with or without steroids
    - or Best supportive care
