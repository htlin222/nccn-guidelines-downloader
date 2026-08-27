+++
id           = "cml/CML-6"
gid          = "cml"
ref          = "CML-6"
page         = 15
title        = "Additional therapy and monitoring after allogeneic hematopoietic cell transplantation"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-4", "CML-5", "CML-F"]

[facets]
disease   = "cml"
histology = "myeloid"
biomarker = "bcr-abl"
timepoint = ["transplant", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_phase"
type = "enum"
options = ["cp-cml", "ap-cml", "bp-cml"]
[[variables]]
name = "hct_indication"
type = "text"
[[variables]]
name = "donor_type"
type = "text"
[[variables]]
name = "pretransplant_disease_status"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "cytogenetic_response"
type = "enum"
options = ["ccyr", "less-than-ccyr", "relapse"]
[[variables]]
name = "qpcr"
type = "text"
[[variables]]
name = "mutation_profile"
type = "text"
[[variables]]
name = "prior_tki"
type = "text"
[[variables]]
name = "post_hct_morbidities"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-6, p15
- Applies to additional therapy around allogeneic hematopoietic cell transplantation (HCT)
- Criteria for Response and Relapse: CML-F
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Phase of CML before HCT ___ (prior_phase)
- Indication for allogeneic HCT ___ (hct_indication)
- Donor type ___ (donor_type)
- Pretransplant disease status ___ (pretransplant_disease_status)
- Comorbidities ___ (comorbidities)
- Cytogenetic response after HCT ___ (cytogenetic_response) (CML-F)
- BCR::ABL1 by qPCR, peripheral blood ___ (qpcr)
- BCR::ABL1 mutation profile ___ (mutation_profile)
- Prior TKI therapy ___ (prior_tki)
- Post-HCT morbidities ___ (post_hct_morbidities)

# Indications for allogeneic HCT

- CP-CML with resistance and/or intolerance to all available TKIs
- Disease progression to AP-CML during TKI therapy
- BP-CML in patients who achieve morphologic remission
- Outcomes of allogeneic HCT are dependent on
    - Age
    - Comorbidities
    - Donor type
    - Pretransplant disease status
    - Transplant center

# CCyR after allogeneic HCT

- Confirm CCyR against the Criteria for Response and Relapse (CML-F)
- Monitor with qPCR (peripheral blood)
    - Every 3 mo for 2 y
    - Then every 3–6 mo thereafter

# qPCR negative

- Consider TKI therapy for at least 1 y in patients with prior AP-CML or BP-CML
- TKI selection notes
    - TKIs are available in different formulations, dosage forms, and strengths that are subject to different administration instructions
    - These products are not interchangeable; refer to the package insert for full prescribing information for specific TKIs
    - FDA-approved generic drugs are appropriate substitutes for brand name drugs
    - Brand name and generic drugs approved by the regulatory authorities based on pharmacokinetic equivalence can be used interchangeably
    - Be aware of the potential pharmacokinetic variability and monitor patients closely during transitions, particularly for drugs with narrow therapeutic windows such as nilotinib and bosutinib
- Ponatinib is a treatment option for patients with a T315I mutation in any phase, preferred for AP-CML or BP-CML
    - Also a treatment option for CP-CML with resistance or intolerance to at least two prior TKIs
    - Also a treatment option for AP-CML or BP-CML for whom no other TKI is indicated
    - Compound mutations, defined as harboring 2 or more mutations in the same BCR::ABL allele, can cause resistance to ponatinib, but those are uncommon following treatment with bosutinib, dasatinib, or nilotinib
- Asciminib is a treatment option for patients with CP-CML and AP-CML having the T315I mutation, and/or previously treated CP-CML and AP-CML
    - Asciminib is contraindicated in patients with CML lacking ABL1 exon 2 (eg, b2(e13)a3, b3(e14)a3 isoforms)

# qPCR positive, or less than CCyR or in relapse

- Less than CCyR or in relapse is defined by the Criteria for Response and Relapse (CML-F)
- Discuss options with the transplant team
    - TKI ± donor lymphocyte infusion (DLI)
        - Selection of TKI is based on prior therapy
        - Selection of TKI is based on BCR::ABL1 mutation profile
        - Selection of TKI is based on post-HCT morbidities
        - Same TKI selection notes apply: products are not interchangeable, generics are appropriate substitutes, ponatinib for T315I in any phase, asciminib for CP-CML or AP-CML with T315I or previously treated
    - or Clinical trial

# Next

- CCyR and qPCR negative, consider TKI therapy for at least 1 y if prior AP-CML or BP-CML
- CCyR and qPCR positive, discuss options with transplant team: TKI ± DLI, or clinical trial
- Less than CCyR or in relapse, discuss options with transplant team: TKI ± DLI, or clinical trial
