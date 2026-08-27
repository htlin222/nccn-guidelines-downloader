+++
id           = "gist/GIST-3"
gid          = "gist"
ref          = "GIST-3"
page         = 8
title        = "Postoperative outcomes, adjuvant treatment, and follow-up after resection of GIST"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-2", "GIST-4", "GIST-A", "GIST-B", "GIST-C", "GIST-E", "GIST-F"]

[facets]
disease   = "gist"
histology = "gist"
biomarker = ["kit", "pdgfra"]
timepoint = ["adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "resection"
type = "enum"
options = ["R0", "R1", "R2"]
[[variables]]
name = "neoadjuvant"
type = "enum"
options = ["none", "imatinib", "other-agent"]
[[variables]]
name = "rupture"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "risk"
type = "enum"
options = ["low", "moderate", "high"]
[[variables]]
name = "mutation"
type = "text"
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, GIST-3, p8
- Applies after resection of GIST, to decide adjuvant treatment and follow-up
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Resection status ___ (resection)
    - Completely resected means R0/R1 (GIST-C)
    - Gross residual disease means R2 resection
- Neoadjuvant therapy received ___ (neoadjuvant)
- Preoperative or intraoperative tumor rupture ___ (rupture)
    - Some stratification schemes have included tumor rupture, which has been associated with a much higher risk of recurrence
- Risk of recurrence ___ (risk)
- Mutational analysis ___ (mutation)
    - Mutational analysis may predict response to therapy with TKIs (GIST-B)

# Adjuvant treatment

- Completely resected (R0/R1), no neoadjuvant therapy
    - Observe, for low-risk disease or non-imatinib-sensitive tumors
    - or Adjuvant imatinib (category 1), preferred for patients with significant risk of recurrence (GIST-A)
        - Moderate or high risk, if the patient has an imatinib-sensitive mutation
        - Tumors with SDH deficiency or NF1 mutations that lack mutations in KIT/PDGFRA may be considered for observation, as most, but not all, have more indolent behavior
        - The optimal duration of adjuvant imatinib is unknown
        - Available data support adjuvant imatinib for high-risk disease for at least 3 years, based on overall survival benefit
        - Or for at least 6 years, based on disease-free survival benefit
        - The PERSIST study has shown the feasibility of 5-year adjuvant imatinib with no evidence of recurrence in patients with imatinib-sensitive GIST
- Completely resected (R0/R1) after neoadjuvant imatinib
    - Consider continuation of adjuvant imatinib, preferred, for patients with significant risk of recurrence (GIST-A)
        - Moderate or high risk
- Completely resected (R0/R1) after neoadjuvant therapy with an agent other than imatinib
    - Observe
- Gross residual disease (R2 resection), or preoperative/intraoperative tumor rupture
    - Should be considered as metastatic disease

# Follow-up

- History and physical (H&P) and imaging every 3–6 mo for 5 y
    - Every 3 mo if high risk
    - Imaging as in Principles of Imaging (GIST-F)
- Then annually
    - After 10 y, individualize surveillance
    - Less frequent surveillance may be acceptable for very small tumors (<2 cm), unless they are associated with high mitotic rate

# Next

- Recurrence, see (GIST-4)
- Considered as metastatic disease, see (GIST-4)
- For systemic therapy, see (GIST-E)
