+++
id           = "genetics_ceg/HGAST-3"
gid          = "genetics_ceg"
ref          = "HGAST-3"
page         = 74
title        = "Which testing strategy to use for APC promoter 1B, by whether a pathogenic variant is known in the family, and what each result leads to"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HGAST-1", "HGAST-2", "HRS-1"]

[facets]
disease   = "genetics_ceg"
biomarker = "apc"
timepoint = ["genetic-testing", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_status"
type = "enum"
options = ["apc-promoter-1b-pv-known-in-family", "no-known-apc-promoter-1b-pv-in-family"]
[[variables]]
name = "familial_pv"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "relative_to_test"
type = "text"
+++

# Source

- NCCN Hereditary Gastric Cancer v1.2026, HGAST-3, p74
- The testing strategy is chosen by risk status
    - Pathogenic APC promoter 1B variant known in family
    - No known pathogenic APC promoter 1B variant in family
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk status ___ (risk_status)
- If a pathogenic APC promoter 1B variant is known in the family, the familial PV is ___ (familial_pv)
- Personal and family medical history ___ (family_history)
- Affected family member being considered for testing ___ (relative_to_test)

# Before testing

- An individual with expertise in genetics should be involved in the testing process
- Minimum pretest counseling materials, in person or through written or video, with pros and cons of testing, should be provided
- See Principles of Cancer Risk Assessment and Counseling (EVAL-A)

# Risk status: pathogenic APC promoter 1B variant known in family

- Genetic testing for familial APC promoter 1B PV
    - Additional testing may be indicated based on personal and family medical history
    - Positive for familial APC promoter 1B PV
        - See GENE-2
        - Genetic evaluation of other family members
        - If a first-degree relative is unavailable or unwilling to be tested, testing their children can help identify the mutation status if any of them test positive for the familial mutation (obligate carrier)
    - Negative for familial APC promoter 1B PV
        - No further testing
        - Additional testing may be indicated based on personal and family medical history
        - Tailored surveillance based on individual and family risk assessment
        - Comprehensive care of individuals who have negative genetic testing should be individualized based on personal and family history of cancer
- Genetic testing not done
    - Tailored surveillance based on individual and family risk assessment
    - Comprehensive care of individuals who do not have confirmatory genetic testing should be individualized based on personal and family history of cancer

# Risk status: no known pathogenic APC promoter 1B variant in family

- Germline MGPT, including APC promoter 1B, see HRS-A
    - If there is more than one affected family member, first consider testing the family member with
        - Youngest age at diagnosis
        - Multiple primaries
    - Testing of unaffected family members, when no affected member is available, should be considered
    - Limitations of interpreting test results should be discussed
    - Positive for APC promoter 1B PV
        - See GENE-2
        - Genetic evaluation of first-degree relatives and other family members
        - If a first-degree relative is unavailable or unwilling to be tested, testing their children can help identify the mutation status if any of them test positive for the familial mutation (obligate carrier)
    - Negative for PV
        - Tailored surveillance based on individual and family risk assessment
    - VUS found
        - Tailored surveillance based on individual and family risk assessment
- Genetic testing not done
    - Tailored surveillance based on individual and family risk assessment
    - Comprehensive care of individuals who do not have confirmatory genetic testing should be individualized based on personal and family history of cancer

# Next

- Positive for familial APC promoter 1B PV, or positive for APC promoter 1B PV on germline MGPT, go to GENE-2
- Positive for familial APC promoter 1B PV, arrange genetic evaluation of other family members
- Positive for APC promoter 1B PV on germline MGPT, arrange genetic evaluation of first-degree relatives and other family members
- Negative for familial APC promoter 1B PV, no further testing, and tailored surveillance based on individual and family risk assessment
- Genetic testing not done, negative for PV, or VUS found, tailored surveillance based on individual and family risk assessment
- Germline multigene panel testing: HRS-A
