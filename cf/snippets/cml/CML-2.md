+++
id           = "cml/CML-2"
gid          = "cml"
ref          = "CML-2"
page         = 8
title        = "Primary treatment of chronic phase CML, chosen by risk score"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-1", "CML-A", "CML-C", "CML-E", "CML-3", "CML-F", "CML-G"]

[facets]
disease   = "cml"
histology = "myeloid"
biomarker = ["bcr-abl", "ph-positive"]
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_score"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "transcript_type"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "drug_interactions"
type = "text"
[[variables]]
name = "treatment_goal"
type = "text"
[[variables]]
name = "pregnancy_status"
type = "text"
[[variables]]
name = "selected_tki"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-2, p8
- Applies to chronic phase CML (CP-CML) at primary treatment
- Risk Calculation Table: CML-A
- Footnotes on CML-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, CP-CML
- Risk score per CML-A ___ (risk_score)
- BCR::ABL1 transcript type ___ (transcript_type)
- Comorbidities ___ (comorbidities)
- Possible drug interactions ___ (drug_interactions)
- Treatment goal ___ (treatment_goal)
- Pregnancy status ___ (pregnancy_status)
- TKI selected ___ (selected_tki)

# Treatment considerations independent of risk score

- BCR::ABL1 transcript type
    - Asciminib is contraindicated in patients with CML lacking ABL1 exon 2, as it has no clinical activity in these cases
        - eg, b2(e13)a3 isoform
        - eg, b3(e14)a3 isoform
- Age
- Comorbidities
- Toxicity profile of tyrosine kinase inhibitor (TKI), see CML-C
- TKI dosing schedule
- Possible drug interactions
- Treatment goal
- Medication cost
    - The cost of generic TKIs can be substantially less than that of brand name TKIs
    - The cost of treatment to both the patient and to society can be considered
- Patient preference

# Low-risk score, per CML-A

- Preferred, first-generation (1G) TKI
    - Imatinib (category 1)
- Preferred, second-generation (2G) TKI, alphabetical order
    - Bosutinib (category 1)
    - Dasatinib (category 1)
    - Nilotinib (category 1)
- Preferred, allosteric TKI
    - Asciminib (category 1)
    - Contraindicated if CML lacks ABL1 exon 2
- Preferred, clinical trial
- Then go to Response Milestones and Treatment Options (CML-3)

# Intermediate- or high-risk score, per CML-A

- Preferred, 2G TKI, alphabetical order
    - Bosutinib (category 1)
    - Dasatinib (category 1)
    - Nilotinib (category 1)
- Preferred, allosteric TKI
    - Asciminib (category 1)
    - Contraindicated if CML lacks ABL1 exon 2
- Other recommended, 1G TKI
    - Imatinib
    - Imatinib may be preferred for patients who are older with comorbidities such as cardiovascular disease
- Or clinical trial
- Then go to Response Milestones and Treatment Options (CML-3)
- Basis for preferring 2G and allosteric TKIs here is follow-up data from the BFORE, DASISION, ENESTnd, and ASC4FIRST trials
- 2G and allosteric TKIs should also be considered for specific subgroups, based on the assessment of treatment goals and benefit/risks
    - For example, younger patients who are interested in ultimately discontinuing treatment
    - Especially young patients assigned female at birth whose goal is to achieve a deep and rapid molecular response and eventual discontinuation of TKI therapy for family planning purposes

# Before writing the prescription

- If treatment is needed during pregnancy, it is preferable to initiate treatment with interferon
    - In the United States, peginterferon alfa-2a and ropeginterferon alfa-2b are available for clinical use
    - There are very limited data for the use of ropeginterferon alfa-2b in CML during pregnancy
    - TKI therapy, particularly during the first trimester, should be avoided because of teratogenic risk
    - See Management of CML During Pregnancy (CML-E)
- Starting dose and de-escalation
    - Limited available evidence from small cohort studies suggests that the following are appropriate strategies to reduce the risk of long-term toxicities
        - Initiation of first-line TKIs (bosutinib, dasatinib, or nilotinib) at lower doses, to minimize treatment-related adverse events
        - Dose reduction, with close monitoring, in patients who achieve optimal responses
    - The minimum effective dose or optimal de-escalation of TKI (bosutinib, dasatinib, or nilotinib) has not yet been established in prospective randomized clinical trials
    - See the Discussion section for Dose Modifications of TKI Therapy
- Formulation
    - TKIs are available in different formulations, dosage forms, and strengths that are subject to different administration instructions
    - These products are not interchangeable
    - Refer to package insert for full prescribing information for specific TKIs
- Generic substitution
    - FDA-approved generic drugs are appropriate substitutes for brand name drugs
    - Brand name and generic drugs approved by the regulatory authorities based on pharmacokinetic equivalence can be used interchangeably
    - Clinicians should be aware of the potential pharmacokinetic variability and monitor patients closely during transitions, particularly for drugs with narrow therapeutic windows such as nilotinib and bosutinib

# Next

- Any of the above options, go to Response Milestones and Treatment Options (CML-3)
- Criteria for Response and Relapse (CML-F)
- Monitoring Response to TKI Therapy and Mutational Analysis (CML-G)
