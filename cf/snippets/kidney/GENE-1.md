+++
id           = "kidney/GENE-1"
gid          = "kidney"
ref          = "GENE-1"
page         = 28
title        = "Germline testing of at-risk individuals for hereditary RCC syndromes, and the screening that follows each test outcome"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HERED-RCC-1", "HERED-RCC-2", "HERED-RCC-B"]

[facets]
disease   = "kidney"
timepoint = ["screening", "prevention"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "personal_history"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "familial_variant"
type = "enum"
options = ["known", "no-known-variant"]
[[variables]]
name = "syndrome_features"
type = "text"
[[variables]]
name = "test_outcome"
type = "enum"
options = ["positive", "negative", "p-lp-variant-found", "no-p-lp-variant-found", "vus", "not-tested", "testing-not-performed"]
+++

# Source

- NCCN Hereditary Renal Cell Carcinoma v1.2027, GENE-1, p28
- Follow-up of family status, genetic testing, test outcome, and screening recommendation
- Applies to individuals with syndrome features (HERED-RCC-2), or in whom criteria in HERED-RCC-1 are met
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal history: ___ (personal_history)
- Family history: ___ (family_history)
- Syndrome features (HERED-RCC-2), or criteria in HERED-RCC-1 met: ___ (syndrome_features)
- Family status: ___ (familial_variant)
    - Familial pathogenic/likely pathogenic (P/LP) variant known
    - No known familial P/LP variant
- Test outcome: ___ (test_outcome)

# Risk assessment and counseling

- Psychosocial assessment and support
- Risk counseling
- Education
- Discussion of germline testing
- Informed consent
- In individuals who meet diagnostic criteria, but in whom no germline P/LP variants are identified, consider workup for mosaicism

# Genetic testing

- Familial P/LP variant known
    - Recommend germline testing for the specific familial P/LP variant
- No known familial P/LP variant
    - Consider kidney cancer-specific multigene germline panel testing (MGPT), or clinically directed targeted gene testing
    - In individuals who meet diagnostic criteria, but in whom no germline P/LP variants are identified, consider workup for mosaicism

# Test outcome and screening recommendation, familial P/LP variant known

- Positive for familial P/LP variant
    - See screening for the appropriate gene/syndrome (HERED-RCC-B)
- Testing not performed
    - Consider screening as if positive
- Negative for familial P/LP variant
    - Cancer screening as per NCCN Guidelines for Detection, Prevention, and Risk Reduction

# Test outcome and screening recommendation, no known familial P/LP variant

- P/LP variant found
    - See screening for the appropriate gene/syndrome (HERED-RCC-B)
- Not tested
    - Offer research and individualized recommendations according to personal and family history
- Variant of uncertain significance (VUS) found (uninformative)
    - Offer research and individualized recommendations according to personal and family history
- No P/LP variant found
    - Offer research and individualized recommendations according to personal and family history
    - Consider workup for mosaicism if the individual meets diagnostic criteria

# Next

- P/LP variant identified, go to screening for the appropriate gene/syndrome (HERED-RCC-B)
- Testing not performed in a family with a known familial P/LP variant, consider screening as if positive
- Negative for the familial P/LP variant, cancer screening as per NCCN Guidelines for Detection, Prevention, and Risk Reduction
- Not tested, VUS, or no P/LP variant found, offer research and individualized recommendations according to personal and family history
