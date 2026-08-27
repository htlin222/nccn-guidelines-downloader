+++
id           = "bone/EW-3"
gid          = "bone"
ref          = "EW-3"
page         = 16
title        = "Local control and metastases treatment for metastatic Ewing sarcoma"
nccn_version = "1.2027"
nccn_date    = "07/21/2026"
generated    = "2026-08-27"
see_also     = ["EW-1", "EW-2", "BONE-A", "BONE-B", "BONE-C"]

[facets]
disease   = "bone"
stage     = "IV"
timepoint = ["primary-treatment", "metastatic", "adjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "met_pattern"
type = "enum"
options = ["oligometastatic", "lung-only", "widely-metastatic"]
[[variables]]
name = "margin_status"
type = "enum"
options = ["positive", "negative", "close"]
[[variables]]
name = "lung_response"
type = "enum"
options = ["partial-response", "complete-response"]
+++

# Source

- NCCN Bone Cancer v1.2027, EW-3, p16
- Applies to metastatic Ewing sarcoma
- Covers local control therapy to the primary site, adjuvant/additional therapy, and metastases treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, Ewing sarcoma, metastatic
- Primary site ___ (primary_site)
- Sites of metastases ___ (met_sites)
- Pattern of metastatic disease ___ (met_pattern)
    - Oligometastatic disease
    - Lung only
    - Widely metastatic, meaning local control cannot be delivered to all areas of disease
- Consider MGPT with a validated and/or FDA-approved assay, to determine targeted therapy opportunities

# Local control therapy to primary site

- Wide excision (BONE-A)
    - Consider preoperative RT for marginally resectable lesions
    - Margin status ___ (margin_status)
    - Negative margins
        - RT may be considered for close margins
- or Definitive RT (BONE-C) and chemotherapy (BONE-B)

# Adjuvant treatment / additional therapy after wide excision

- Positive margins
    - Continue chemotherapy (category 1) followed by RT
    - or RT and chemotherapy (category 1, for chemotherapy)
- Negative margins
    - Chemotherapy (category 1)
- Chemotherapy agents: BONE-B
- RT: BONE-C
- There is category 1 evidence for between 28 and 49 weeks of chemotherapy, depending on the chemotherapy and dosing schedule used

# Metastases treatment

- Oligometastatic disease
    - Excision of metastases
    - or RT
- Lung only, response to therapy ___ (lung_response)
    - Lung only, partial response
        - Excision, with or without whole lung irradiation (WLI)
    - Lung only, complete response
        - Consider whole lung irradiation (WLI)
- Widely metastatic, local control cannot be delivered to all areas of disease
    - Continuing chemotherapy only, with palliative surgery
    - or Palliative RT to symptomatic areas
    - or Other techniques for multiple metastases
    - Consider testing for TMB (category 2B) and MMR/MSI as determined by a validated and/or FDA-approved assay, to inform treatment options
