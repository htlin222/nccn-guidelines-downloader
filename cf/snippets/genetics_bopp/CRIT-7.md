+++
id           = "genetics_bopp/CRIT-7"
gid          = "genetics_bopp"
ref          = "CRIT-7"
page         = 34
title        = "Testing criteria for Li-Fraumeni syndrome"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-5", "CRIT-6", "CRIT-7A"]

[facets]
disease   = "genetics_bopp"
biomarker = "tp53"
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_history"
type = "text"
[[variables]]
name = "age_at_diagnosis"
type = "number"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "known_tp53_in_family"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "tumor_only_tp53"
type = "enum"
options = ["yes", "no", "not-done"]
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-7, p34
- Testing criteria for Li-Fraumeni syndrome (TP53)
- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- When TP53 is included as part of a multigene panel, an individual does not need to meet these testing criteria if testing criteria on other testing criteria pages are met
- Footnotes for this page are on CRIT-7A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal cancer history: ___ (cancer_history)
- Age at first cancer diagnosis: ___ (age_at_diagnosis)
- Family history: ___ (family_history)
- Known TP53 P/LP variant in the family: ___ (known_tp53_in_family)
- P/LP TP53 variant on tumor-only genomic testing: ___ (tumor_only_tp53)

# Testing is clinically indicated in the following scenarios

- See General Testing Criteria on CRIT-1
- Individual from a family with a known TP53 P/LP variant
- Classic LFS criteria, all of:
    - An individual diagnosed at age <45 years with a sarcoma
        - In contrast to other types of sarcoma, germline TP53 P/LP variants are rare in those with Ewing sarcoma, gastrointestinal stromal tumor (GIST), desmoid tumor, or angiosarcoma
    - AND a first-degree relative diagnosed at age <45 years with cancer
    - AND an additional first- or second-degree relative in the same lineage with cancer diagnosed at age <45 years, or a sarcoma at any age
- Chompret criteria, any of:
    - Individual with a tumor from LFS tumor spectrum, diagnosed <46 years of age, AND at least one first- or second-degree relative diagnosed with any of the aforementioned cancers at age <56 years or with multiple primaries at any age
        - LFS tumor spectrum, eg, soft tissue sarcoma, osteosarcoma, central nervous system (CNS) tumor, breast cancer, adrenocortical carcinoma (ACC)
        - The relative's cancer must be other than breast cancer if the proband has breast cancer
    - Individual with multiple tumors (except multiple breast tumors), two of which belong to LFS tumor spectrum, with the initial cancer occurring at age <46 years
    - Individual with ACC, or choroid plexus carcinoma, or rhabdomyosarcoma of embryonal anaplastic subtype, at any age of onset, regardless of family history
    - Breast cancer diagnosed at age <31 years
- Personal or family history of pediatric hypodiploid acute lymphoblastic leukemia
- In individuals with cancer with a P/LP TP53 variant identified on tumor-only genomic testing, germline testing should be considered for any of:
    - Those meeting one or more of the other LFS testing criteria above, after reevaluation of personal and family history
    - Those diagnosed at age <30 years with any cancer
    - Those with clinical scenario not meeting these criteria but warranting germline evaluation per clinician discretion
    - A P/LP TP53 variant on tumor-only testing should prompt a careful evaluation of personal and family history of the individual to determine the yield of germline sequencing
        - Somatic TP53 P/LP variants are common in many tumor types in absence of a germline P/LP variant
    - For testing in the pediatric setting, see Frebourg T, et al. Eur J Hum Genet 2020;28:1379-1386

# Family history criteria

- Applies to an individual who is unaffected, or affected but does not meet the criteria above
    - Individual with a first-degree or second-degree untested, deceased blood relative meeting any of the criteria listed above
- Individualized recommendations according to personal and family history

# Other cancers associated with LFS but not in the testing criteria

- Melanoma
- Colorectal
- Gastric
- Malignant phyllodes
- Prostate

# Next

- LFS testing criteria met, go to GENE-1
- If LFS testing criteria not met, consider testing criteria for other hereditary syndromes, if appropriate
