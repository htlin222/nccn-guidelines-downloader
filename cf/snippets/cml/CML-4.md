+++
id           = "cml/CML-4"
gid          = "cml"
ref          = "CML-4"
page         = 12
title        = "Treatment of advanced phase CML, accelerated phase and blast phase"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-3", "CML-5", "CML-6"]

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
options = ["AP-CML", "BP-CML"]
[[variables]]
name = "blast_lineage"
type = "enum"
options = ["lymphoid", "myeloid", "not applicable"]
[[variables]]
name = "course"
type = "enum"
options = ["de novo advanced phase", "progression while on TKI therapy"]
[[variables]]
name = "transcript"
type = "text"
[[variables]]
name = "mutation"
type = "text"
[[variables]]
name = "prior_tki"
type = "text"
[[variables]]
name = "aca"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-4, p12
- Applies to advanced phase CML, accelerated phase (AP-CML) and blast phase (BP-CML)
- Definitions of advanced phase CML: CML-B
- Footnotes on CML-4A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (phase)
- Blast phase lineage ___ (blast_lineage)
- De novo advanced phase, or progression while on TKI therapy ___ (course)
- BCR::ABL1 transcript type ___ (transcript)
- BCR::ABL1 mutation profile ___ (mutation)
- Prior TKI therapy ___ (prior_tki)
- Major route ACAs in Ph-positive cells ___ (aca)

# Treatment considerations

- BCR::ABL1 transcript type
    - Asciminib is contraindicated in patients with CML lacking ABL1 exon 2, as it has no clinical activity in these cases
        - eg, b2(e13)a3 isoform
        - eg, b3(e14)a3 isoform
- Disease progression to advanced phase while on TKI therapy has worse prognosis than de novo advanced phase CML
    - Selection of TKI is based on prior therapy and/or BCR::ABL1 mutation profile
- Toxicity profile of TKI (CML-C)
- Possible drug interactions
- Medication cost
    - The cost of generic TKIs can be substantially less than that of brand name TKIs
    - The cost of treatment to both the patient and to society can be considered
- Evaluation for allogeneic HCT as indicated
- Central nervous system (CNS) involvement has been described in BP-CML
    - Lumbar puncture and CNS prophylaxis is recommended for lymphoid BP-CML

# TKI prescribing cautions

- TKI dose for advanced phase CML may differ from CP-CML
- TKIs are available in different formulations, dosage forms, and strengths that are subject to different administration instructions
    - These products are not interchangeable
    - Refer to package insert for full prescribing information for specific TKIs
- FDA-approved generic drugs are appropriate substitutes for brand name drugs
    - Brand name and generic drugs approved by the regulatory authorities based on pharmacokinetic equivalence can be used interchangeably
    - Be aware of the potential pharmacokinetic variability, and monitor patients closely during transitions, particularly for drugs with narrow therapeutic windows such as nilotinib and bosutinib
- If treatment is needed during pregnancy, it is preferable to initiate treatment with interferon
    - In the United States, peginterferon alfa-2a and ropeginterferon alfa-2b are available for clinical use
    - There are very limited data for the use of ropeginterferon alfa-2b in CML during pregnancy
    - TKI therapy, particularly during the first trimester, should be avoided because of teratogenic risk
    - See Management of CML During Pregnancy (CML-E)

# Accelerated phase CML (AP-CML)

- Patients who present with accelerated phase at diagnosis
    - Treat with a TKI at the FDA-approved dose for accelerated phase
    - Follow with evaluation for allogeneic HCT, based on response to therapy
    - Consider evaluation for allogeneic HCT if response milestones are not achieved at 3, 6, and 12 months, as outlined on CML-3
- The presence of major route ACAs in Ph-positive cells may have a negative prognostic impact on survival
    - Trisomy 8
    - Isochromosome 17q
    - Second Ph
    - Trisomy 19
    - Chromosome 3 abnormalities
- Clinical trial
- Preferred
    - 2G TKI, alphabetical order: bosutinib or dasatinib or nilotinib
    - or third-generation (3G) TKI: ponatinib
- Useful in certain circumstances
    - 1G TKI (imatinib), if 2G or 3G TKI is contraindicated
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
    - Allosteric TKI (asciminib)
        - Contraindicated in patients with CML lacking ABL1 exon 2

# Blast phase CML (BP-CML)

- Interphase FISH for the detection of BCR::ABL1 transcript on blood granulocytes is recommended
    - Differentiates between de novo BP-CML and de novo Ph-positive ALL
- TKI, alone or in combination with minimal chemotherapy or steroids, is less effective in BP-CML compared to Ph-positive ALL
- Lymphoid blast phase
    - Clinical trial
    - Preferred: ALL-type induction chemotherapy (See NCCN Guidelines for ALL) + TKI
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
        - 2G or 3G TKI is preferred; consider imatinib for patients with contraindications to 2G or 3G TKI
    - Useful in certain circumstances: TKI + steroids, if not a candidate for induction chemotherapy
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
        - 2G or 3G TKI is preferred; consider imatinib for patients with contraindications to 2G or 3G TKI
    - Lumbar puncture and CNS prophylaxis is recommended
- Myeloid blast phase
    - Clinical trial
    - Preferred: AML-type induction chemotherapy (See NCCN Guidelines for AML) + TKI
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
        - 2G or 3G TKI is preferred; consider imatinib for patients with contraindications to 2G or 3G TKI
    - Useful in certain circumstances: TKI, if not a candidate for induction chemotherapy
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
        - 2G or 3G TKI is preferred; consider imatinib for patients with contraindications to 2G or 3G TKI

# Next

- AP-CML meeting response milestones (CML-3), continue the same TKI
- AP-CML with lack of response, or disease progression
    - Allogeneic HCT (CML-6)
    - or alternate TKI
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
        - Asciminib is contraindicated in patients with CML lacking ABL1 exon 2
- BP-CML, for patients in remission
    - Allogeneic HCT (CML-6)
    - Consolidation chemotherapy (ALL or AML) and TKI maintenance, for noncandidates for allogeneic HCT
        - 2G or 3G TKI is preferred; consider imatinib for patients with contraindications to 2G or 3G TKI
- BP-CML with lack of chemotherapy response (ALL or AML), or disease progression
    - Alternate TKI, with or without steroids
        - Imatinib is not recommended for patients with disease progression on prior TKI therapy
    - or Best supportive care
