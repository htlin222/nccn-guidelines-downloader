+++
id           = "genetics_ceg/HRS-3"
gid          = "genetics_ceg"
ref          = "HRS-3"
page         = 31
title        = "Which testing strategy to use for Lynch syndrome in an individual who meets testing criteria, and what each result leads to"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HRS-1", "HRS-2", "GENE-1", "GENE-6"]

[facets]
disease   = "genetics_ceg"
biomarker = "lynch"
timepoint = ["genetic-testing", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_status"
type = "enum"
options = ["ls-pv-known-in-family", "no-known-ls-pv-in-family"]
[[variables]]
name = "familial_pv"
type = "text"
[[variables]]
name = "family_history"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, Lynch Syndrome, HRS-3, p31
- Applies to an individual who meets testing criteria for Lynch syndrome (LS)
- The strategy is chosen by risk status: LS PV known in family, or no known LS PV in family
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Meets testing criteria for LS
- Risk status ___ (risk_status)
- If an LS PV is known in the family, the familial PV is ___ (familial_pv)
- Personal and family medical history ___ (family_history)

# Before testing

- An individual with expertise in genetics should be involved in the testing process
- Minimum pretest counseling materials, in person or through written or video, with pros and cons of testing, should be provided
- See Principles of Cancer Risk Assessment and Counseling (EVAL-A)
- For germline multigene panel testing (HRS-A), when there is no known LS PV in the family
    - Limitations of interpreting test results should be discussed
    - If there is more than one affected family member, first consider testing the family member with
        - Youngest age at diagnosis
        - Multiple primaries
        - CRC or EC
    - Testing of unaffected family members, when no affected member is available, should be considered

# Risk status: LS PV known in family

- Genetic testing for the familial PV
    - Additional testing may be indicated based on personal and family medical history
    - Positive for familial LS PV
        - See Gene-Specific LS Cancer Risks and Surveillance/Prevention Strategies
        - Genetic testing for family members at risk
    - Negative for familial LS PV
        - See NCCN Guidelines for Colorectal Cancer Screening, for adults at average risk
- Genetic testing not done (category 2B)
    - See Gene-Specific LS Cancer Risks and Surveillance/Prevention Strategies
    - Genetic testing for family members at risk
    - The recommendation to provide care using LS management recommendations for a patient in whom genetic testing was not done is category 2B

# Risk status: no known LS PV in family

- Germline multigene panel testing (MGPT), see HRS-A
    - Positive PV found
        - See Gene-Specific LS Cancer Risks and Surveillance/Prevention Strategies
        - Or see Table 4 on GENE-6 for other variants
        - Genetic testing for family members at risk
    - Negative for PV
        - Tailored surveillance based on individual and family risk assessment
    - VUS found
        - Tailored surveillance based on individual and family risk assessment
- Genetic testing not done
    - Tailored surveillance based on individual and family risk assessment

# When testing family members at risk

- An individual with expertise in genetics should be involved in the testing process, with the same minimum pretest counseling
- If a first-degree relative is unavailable or unwilling to be tested, more distant relatives should be offered testing for the known PV in the family

# Next

- Positive for familial LS PV, or genetic testing not done with an LS PV known in the family (category 2B), go to Gene-Specific LS Cancer Risks and Surveillance/Prevention Strategies
- Negative for familial LS PV, see NCCN Guidelines for Colorectal Cancer Screening for adults at average risk
- Positive PV found on germline MGPT, go to Gene-Specific LS Cancer Risks and Surveillance/Prevention Strategies, or Table 4 on GENE-6 for other variants
- Negative for PV, VUS found, or genetic testing not done, tailored surveillance based on individual and family risk assessment
- Germline multigene panel testing: HRS-A
