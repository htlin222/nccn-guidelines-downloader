+++
id           = "genetics_ceg/HGAST-2"
gid          = "genetics_ceg"
ref          = "HGAST-2"
page         = 73
title        = "Testing strategy by CDH1 risk status, and what each result leads to"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HGAST-1", "HGAST-3", "HRS-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["cdh1", "ctnna1", "apc", "atm", "bmpr1a", "brca1", "brca2", "palb2", "smad4", "stk11", "tp53", "mlh1", "msh2", "msh6", "epcam", "lynch", "kit"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "family_cdh1_status"
type = "enum"
options = ["known-familial-cdh1-pv", "no-known-familial-cdh1-pv"]
[[variables]]
name = "familial_variant"
type = "text"
[[variables]]
name = "personal_family_history"
type = "text"
[[variables]]
name = "affected_relatives"
type = "text"
[[variables]]
name = "youngest_age_at_dx"
type = "number"
[[variables]]
name = "pretest_counseling"
type = "text"
[[variables]]
name = "testing_strategy"
type = "enum"
options = ["familial-variant-testing", "germline-mgpt", "testing-not-done"]
[[variables]]
name = "test_result"
type = "text"
+++

# Source

- NCCN Hereditary Gastric Cancer v1.2026, HGAST-2, p73
- Risk status and the testing strategy that follows from it
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- CDH1 risk status in the family: ___ (family_cdh1_status)
- Familial pathogenic CDH1 variant, if known: ___ (familial_variant)
- Personal and family medical history: ___ (personal_family_history)
- Affected family members available for testing: ___ (affected_relatives)
- Youngest age at diagnosis among affected relatives: ___ (youngest_age_at_dx)
- Pretest counseling provided: ___ (pretest_counseling)
- Testing strategy chosen: ___ (testing_strategy)
- Result: ___ (test_result)

# Before any testing is ordered

- An individual with expertise in genetics should be involved in the testing process
- Minimum pretest counseling materials with pros and cons of testing should be provided
    - In person, or through written or video materials
    - See Principles of Cancer Risk Assessment and Counseling (EVAL-A)

# Risk status: pathogenic CDH1 variant known in the family

- Genetic testing for the familial CDH1 PV
    - Additional testing may be indicated based on personal and family medical history
- Positive for familial CDH1 PV
    - See CDH1 Cancer Risks (HGAST-A)
    - See Management of Gastric Cancer Risk in CDH1 Pathogenic Variant Carriers (HGAST-B)
    - Genetic evaluation of other family members
        - If a first-degree relative is unavailable or unwilling to be tested, testing their children can help identify the mutation status if any of them test positive for the familial mutation (obligate carrier)
- Negative for familial CDH1 PV
    - No further testing
    - Additional testing may be indicated based on personal and family medical history
    - Comprehensive care of individuals who do not have confirmatory genetic testing or negative genetic testing should be individualized based on personal and family history of cancer
- Genetic testing not done
    - Tailored surveillance based on individual and family risk assessment
    - Comprehensive care of individuals who do not have confirmatory genetic testing or negative genetic testing should be individualized based on personal and family history of cancer

# Risk status: no known pathogenic CDH1 variant in the family

- Germline MGPT, including CDH1 (HRS-A)
    - The Panel recommends that germline testing include at minimum APC (including APC promoter 1B), ATM, BMPR1A, BRCA1, BRCA2, CDH1, CTNNA1, Lynch syndrome genes (MLH1, MSH2, EPCAM, MSH6), PALB2, SMAD4, STK11, and TP53
    - The Panel recognizes that not all of these genes have been definitively linked to an increased risk of DGC
    - Testing for KIT may also be considered in families where there is a clinical concern for GIST
    - If there is more than one affected family member, first consider testing the family member with youngest age at diagnosis or multiple primaries
    - Testing of unaffected family members when no affected member is available should be considered
    - Limitations of interpreting test results should be discussed
- Positive for CDH1 PV
    - See CDH1 Cancer Risks (HGAST-A)
    - See Management of Gastric Cancer Risk in CDH1 Pathogenic Variant Carriers (HGAST-B)
    - Genetic evaluation of first-degree relatives and other family members
        - If a first-degree relative is unavailable or unwilling to be tested, testing their children can help identify the mutation status if any of them test positive for the familial mutation (obligate carrier)
- Genetic testing not done, or negative for PV, or VUS found
    - Tailored surveillance based on individual and family risk assessment
    - Others have offered recommendations for individuals meeting this clinical scenario (Blair VR, et al. Lancet Oncol 2020;21:e386-e397)

# Next

- Positive for a pathogenic CDH1 variant, go to CDH1 Cancer Risks (HGAST-A)
- Positive for a pathogenic CDH1 variant, go to Management of Gastric Cancer Risk in CDH1 Pathogenic Variant Carriers (HGAST-B)
- Negative for the familial CDH1 PV, no further testing
- No testing done, negative for PV, or VUS found, tailored surveillance based on individual and family risk assessment
