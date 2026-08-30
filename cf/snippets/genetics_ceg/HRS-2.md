+++
id           = "genetics_ceg/HRS-2"
gid          = "genetics_ceg"
ref          = "HRS-2"
page         = 29
title        = "Whether this individual meets criteria for Lynch syndrome testing, and which testing strategy to start with"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HRS-1", "HRS-3", "HRS-A", "LS-A"]

[facets]
disease   = "genetics_ceg"
biomarker = ["lynch", "dmmr", "mutyh", "pole", "pold1", "nthl1"]
timepoint = ["genetic-testing", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "personal_cancer"
type = "text"
[[variables]]
name = "age_at_diagnosis"
type = "number"
[[variables]]
name = "synchronous_metachronous"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "known_family_pv"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "mmr_tumor_status"
type = "text"
[[variables]]
name = "somatic_plp_variant"
type = "text"
[[variables]]
name = "premm5"
type = "number"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, HRS-2, p29
- Criteria for testing for Lynch syndrome (LS)
- Assumes criteria for evaluation for a polyposis syndrome on hereditary risk assessment has not been met
- LS-related cancers, used throughout this page, are colorectal, endometrial, gastric, ovarian, pancreatic, urothelial, brain (usually glioblastoma), biliary tract, and small intestine, as well as sebaceous adenomas, sebaceous carcinomas, and keratoacanthomas as seen in Muir-Torre syndrome
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Known LS PV in the family ___ (known_family_pv)
- Personal history of cancer ___ (personal_cancer)
- Age at diagnosis ___ (age_at_diagnosis)
- Synchronous or metachronous LS-related cancer ___ (synchronous_metachronous)
- Family history, first-degree and second-degree relatives, on the same side of the family ___ (family_history)
- MMR status of the tumor, by PCR, NGS, or IHC ___ (mmr_tumor_status)
- P/LP variant on tumor somatic testing ___ (somatic_plp_variant)
- PREMM5 score ___ (premm5) %

# Testing is clinically indicated, known familial variant

- Known LS PV in the family

# Testing is clinically indicated, personal history

- Personal history of CRC, EC, or gastric adenocarcinoma (GC), or any LS-related cancer
    - Diagnosed <50 y
    - EC ≥50 y
    - CRC ≥50 y (category 2B)
    - GC ≥50 y (category 2B)
- LS-related cancer and any of the following
    - A synchronous or metachronous LS-related cancer regardless of age
    - 1 first-degree or second-degree relative with an LS-related cancer diagnosed <50 y
    - ≥2 first-degree or second-degree relatives with an LS-related cancer regardless of age

# Testing is clinically indicated, family history

- Family history, on the same side of the family, of any of the following
    - ≥1 first-degree relatives with a CRC, EC, or GC diagnosed <50 y
    - ≥1 first-degree or second-degree relatives with a synchronous or metachronous LS-related cancer regardless of age
    - ≥2 first-degree or second-degree relatives with LS-related cancers including ≥1 diagnosed <50 y
    - ≥3 first-degree or second-degree relatives with LS-related cancers regardless of age
- Before testing on family history alone, note that the risk to unaffected individuals with a first-degree or second-degree relative with CRC, EC, GC, or another LS-related cancer may not be high enough to warrant testing without other criteria

# Testing is clinically indicated, increased model-predicted risk

- An individual with a ≥5% risk of having an MMR gene PV based on predictive models (ie, PREMM5)
    - For individuals without a personal history of CRC and/or EC, some data have suggested using a PREMM5 score threshold of ≥2.5% rather than ≥5% to select individuals for MMR genetic testing
    - Based on these data, it is reasonable for testing to be done based on the ≥2.5% score result and clinical judgment
    - With the lower threshold, there is an increase in sensitivity, but a decrease in specificity

# Testing is clinically indicated, tumor findings

- Personal history of CRC, EC, or any tumor with MMR deficiency determined by polymerase chain reaction (PCR), next-generation sequencing (NGS), or IHC, diagnosed at any age
    - Details on tumor screening for LS are on LS-A
    - Tumor mutational burden (TMB) can be used as a surrogate to some degree for MSI, but there are causes of increased TMB other than dMMR
    - A person with an LS-related cancer but without a known MMR deficiency may still warrant additional genetic evaluation based on personal and family history
- Personal history of a P/LP variant identified on tumor somatic testing that has clinical implications if also identified in the germline
    - This should prompt a careful evaluation of personal and family history of the individual to determine the yield of germline sequencing

# Next

- Criteria met, choose one of the two entry strategies, both go to Strategies for Testing for LS (HRS-3)
    - Additional tumor-based testing (LS-A)
    - OR germline MGPT for LS and other hereditary cancer syndromes
        - MUTYH should be included in MGPT at a minimum, because biallelic MUTYH mutations have been shown to lead to dMMR tumors
        - Consider also base-excision repair genes (NTHL1) and DNA polymerase genes (POLE and POLD1), which have the potential to also lead to biallelic somatic MMR gene inactivation
- See Rationale, Pros, and Cons of Multigene Panel Testing for Lynch Syndrome and Other Cancer Risk Genes (HRS-A)
