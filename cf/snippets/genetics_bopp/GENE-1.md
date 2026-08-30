+++
id           = "genetics_bopp/GENE-1"
gid          = "genetics_bopp"
ref          = "GENE-1"
page         = 38
title        = "Follow-up once testing criteria are met: counseling, which test to send by family status, and the screening recommendation each outcome leads to"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-8A", "GENE-A", "EVAL-A"]

[facets]
disease   = "genetics_bopp"
timepoint = ["genetic-testing", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "familial_variant"
type = "text"
[[variables]]
name = "ancestry"
type = "text"
[[variables]]
name = "affected_relative_available"
type = "text"
[[variables]]
name = "test_outcome"
type = "text"
+++

# Source

- NCCN Gene Summary: Risks and Management v3.2026, GENE-1, p38
- Applies once hereditary cancer testing criteria are met
- Covers the follow-up path: risk assessment and counseling, family status, genetic testing, test outcome, screening recommendation
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal cancer history: ___ (personal_cancer_history)
- Family history: ___ (family_history)
- Known familial P/LP variant: ___ (familial_variant)
- Ancestry: ___ (ancestry)
- Affected family member available to test: ___ (affected_relative_available)
- Test outcome: ___ (test_outcome)

# Risk assessment and counseling

- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- Psychosocial assessment and support
- Risk counseling
- Education
- Discussion of genetic testing
- Informed consent

# Family status: familial P/LP variant known

- Genetic testing for the specific familial P/LP variant
    - If of Ashkenazi Jewish ancestry, in addition to the specific familial P/LP variant, test for all three founder P/LP variants
    - Additional testing may be indicated based on patient age, family history, and other hereditary cancer(s) on either side of the family without the known P/LP variant
- Test outcome and screening recommendation
    - Positive for familial P/LP variant, see GENE-A for appropriate gene
    - Testing not performed, consider screening as if positive
    - Negative for familial P/LP variant, cancer screening as per NCCN Screening Guidelines

# Family status: no known familial P/LP variant

- Germline multigene panel testing
    - While testing an affected family member is most informative, it is also appropriate to test unaffected family members who meet testing criteria
- Test outcome and screening recommendation
    - P/LP variant found, see GENE-A for appropriate gene
    - Not tested
    - VUS found (uninformative)
    - No P/LP variant found
    - For not tested, VUS found, or no P/LP variant found, offer research and individualized recommendations according to personal and family history
        - Patients meeting CS/PHTS clinical diagnostic criteria (CRIT-8A) should be cared for as P/LP variant carriers
        - If no P/LP variant is found, consider testing another family member with next highest likelihood of having a P/LP variant

# Next

- Positive for familial P/LP variant, or P/LP variant found on panel, see GENE-A for appropriate gene
- Negative for familial P/LP variant, cancer screening as per NCCN Screening Guidelines
- Testing not performed, consider screening as if positive
- Meets CS/PHTS clinical diagnostic criteria, care for as a P/LP variant carrier (CRIT-8A)
