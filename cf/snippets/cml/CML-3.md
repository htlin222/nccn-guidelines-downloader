+++
id           = "cml/CML-3"
gid          = "cml"
ref          = "CML-3"
page         = 10
title        = "Early treatment response milestones, and the action each color concern calls for"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-2", "CML-5", "CML-C", "CML-G", "CML-H"]

[facets]
disease   = "cml"
histology = "myeloid"
biomarker = "bcr-abl"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "current_tki"
type = "text"
[[variables]]
name = "milestone"
type = "enum"
options = ["3 months", "6 months", "12 months"]
[[variables]]
name = "bcr_abl_is"
type = "text"
[[variables]]
name = "treatment_goal"
type = "enum"
options = ["long-term survival", "treatment-free remission"]
[[variables]]
name = "adherence"
type = "text"
[[variables]]
name = "drug_interactions"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-3, p10
- Applies to a patient on TKI therapy reaching an early response milestone
- Footnotes on CML-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, on ___ (current_tki)
- Milestone reached ___ (milestone)
- BCR::ABL1 (IS) ___ (bcr_abl_is)
- Treatment goal ___ (treatment_goal)
- Adherence reviewed ___ (adherence)
- Drug interactions reviewed ___ (drug_interactions)

# Milestone: BCR::ABL1 (IS) to color concern

- BCR::ABL1 (IS) >10%
    - 3 months: YELLOW
    - 6 months: RED
    - 12 months: RED
    - Achievement of response milestones must be interpreted within the clinical context
    - Patients only slightly >10% at 3 months and/or with a steep decline from baseline may achieve <10% at 6 months and have generally favorable outcomes
    - Interpret the value at 3 months in this context before making drastic changes to the treatment strategy
    - The same dose of TKI can be continued for another 3 months, but imatinib is associated with slower molecular responses
- BCR::ABL1 (IS) >1%-10%
    - 3 months: GREEN
    - 6 months: ORANGE
    - 12 months: ORANGE
    - Achievement of response milestones must be interpreted within the clinical context
    - Patients achieving MCyR (BCR::ABL1 IS ≤10%) at 12 months have good long-term survival
    - Patients with more than 50% reduction compared to baseline, or minimally above the 10% cutoff, can continue the same dose of TKI for another 3 months
    - Consider switching to an alternate 2G TKI, 3G TKI, or allosteric TKI in the absence of continuing decline in BCR::ABL1 transcript levels
- BCR::ABL1 (IS) >0.1%-1%
    - 3 months: GREEN
    - 6 months: GREEN
    - 12 months: LIGHT GREEN
- BCR::ABL1 (IS) ≤0.1%
    - 3 months: GREEN
    - 6 months: GREEN
    - 12 months: GREEN
    - ≤0.1% at 12 months is associated with a very low probability of subsequent loss of response, and a high likelihood of achieving a subsequent deep molecular response (DMR MR4.0; BCR::ABL1 IS ≤0.01%), which is a prerequisite for a trial of treatment-free remission (TFR)

# RED: TKI-resistant disease

- Consider referral to a specialized CML center and/or enrollment in a clinical trial
- Evaluate patient adherence and drug interactions
- Consider BCR::ABL1 kinase domain mutational analysis
    - Consider a myeloid mutation panel to identify BCR::ABL1-independent resistance mutations in patients with no BCR::ABL1 kinase domain mutations
- Consider bone marrow cytogenetic analysis to assess additional chromosomal abnormalities (ACAs)
- Switch to alternate TKI (CML-5), other than imatinib, and evaluate for allogeneic HCT

# YELLOW: possible TKI resistance

- Consider referral to a specialized CML center and/or enrollment in a clinical trial
- Evaluate patient adherence and drug interactions
- Consider BCR::ABL1 kinase domain mutational analysis
    - Consider a myeloid mutation panel to identify BCR::ABL1-independent resistance mutations in patients with no BCR::ABL1 kinase domain mutations
- Switch to alternate TKI (CML-5), or continue same TKI
    - If continuing, the same dose can be continued for another 3 months, but imatinib is associated with slower molecular responses

# ORANGE: possible TKI resistance

- Consider referral to a specialized CML center and/or enrollment in a clinical trial
- Evaluate patient adherence and drug interactions
- Consider BCR::ABL1 kinase domain mutational analysis
    - Consider a myeloid mutation panel to identify BCR::ABL1-independent resistance mutations in patients with no BCR::ABL1 kinase domain mutations
- Consider bone marrow cytogenetic analysis to assess for complete cytogenetic response (CCyR) at 12 mo
- Consider switch to alternate TKI (CML-5), or continue the same TKI if CCyR is achieved
    - Patients with more than 50% reduction compared to baseline, or minimally above the 10% cutoff, can continue the same dose of TKI for another 3 months
    - Consider switching to an alternate 2G TKI, 3G TKI, or allosteric TKI in the absence of continuing decline in BCR::ABL1 transcript levels

# LIGHT GREEN: TKI-sensitive disease

- Evaluate patient adherence and drug interactions
- Decide whether this response is optimal for the stated treatment goal
    - If the treatment goal is long-term survival: ≤1% is optimal
    - If the treatment goal is treatment-free remission: ≤0.1% is optimal
- If optimal: continue same TKI
- If not optimal: shared decision-making with the patient
    - Consider referral to a specialized CML center and/or enrollment in a clinical trial
    - Switching from imatinib to a 2G TKI or allosteric TKI may improve response
    - The side effect profile of alternative TKIs may differ

# GREEN: TKI-sensitive disease

- Evaluate patient adherence and drug interactions
- Continue same TKI
    - Discontinuation of TKI with careful monitoring is feasible in selected patients (CML-H)
- Monitor response (CML-G)

# Applies to every recommendation on this page

- Asciminib is contraindicated in patients with CML lacking ABL1 exon 2 (eg, b2(e13)a3, b3(e14)a3 isoforms), as it has no clinical activity in these cases
- TKIs are available in different formulations, dosage forms, and strengths that are subject to different administration instructions
    - These products are not interchangeable
    - Refer to the package insert for full prescribing information for specific TKIs
- FDA-approved generic drugs are appropriate substitutes for brand name drugs
    - Brand name and generic drugs approved by the regulatory authorities based on pharmacokinetic equivalence can be used interchangeably
    - Be aware of the potential pharmacokinetic variability and monitor patients closely during transitions, particularly for drugs with narrow therapeutic windows such as nilotinib and bosutinib
- Switching to an alternate TKI for intolerance is appropriate for patients with disease responding to TKI therapy (CML-C)

# Next

- Switching TKI, go to CML-5
- Continuing the same TKI, monitor response per CML-G
- Considering treatment-free remission, see CML-H
- Switching for intolerance, see Special Considerations for the use of TKI Therapy (CML-C)
