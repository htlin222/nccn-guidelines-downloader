+++
id           = "head-and-neck/SALI-4"
gid          = "head-and-neck"
ref          = "SALI-4"
page         = 85
title        = "Treatment for recurrent salivary gland tumors, by prior RT, resectability, and distant metastases"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SALI-3", "SALI-B", "SURG-A", "FOLL-A"]

[facets]
disease   = "head-and-neck"
stage     = ["recurrent", "IV"]
biomarker = ["ntrk", "braf", "ret", "msi-h", "dmmr", "tmb-high", "pd-l1"]
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_pattern"
type = "enum"
options = ["locoregional recurrence", "second primary", "distant metastases"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["no prior RT", "prior RT"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "ps"
type = "text"
[[variables]]
name = "adverse_features"
type = "text"
[[variables]]
name = "biomarker_results"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SALI-4, p85
- Applies to salivary gland tumors, recurrence, and treatment for recurrence
- Three entry branches: locoregional recurrence without prior RT, locoregional recurrence or second primary with prior RT, and distant metastases
- Radiation therapy throughout this page: Principles of Radiation Therapy (SALI-A)
- Surgery throughout this page: Principles of Surgery (SURG-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, salivary gland tumor, recurrence
- Pattern ___ (recurrence_pattern)
- Prior RT to the recurrent site ___ (prior_rt)
- Resectability ___ (resectability)
- Performance status ___ (ps)
- If resected, adverse pathologic features ___ (adverse_features)
- Biomarker testing results ___ (biomarker_results)

# Locoregional recurrence without prior RT, resectable

- Completely resected
    - RT (SALI-A)
    - then Follow-up (FOLL-A, 1 of 2)
- Adverse pathologic features, any of
    - Intermediate or high grade
    - Close or positive margins
    - Neural/perineural invasion
    - Lymph node metastases
    - Lymphatic/vascular invasion
- If adverse pathologic features
    - Adjuvant RT (SALI-A)
    - or Consider systemic therapy/RT (category 2B)

# Locoregional recurrence without prior RT, unresectable

- RT (SALI-A)
- or Systemic therapy/RT (category 2B)

# Locoregional recurrence or second primary with prior RT

- Resectable
    - Surgery (preferred), see Principles of Surgery (SURG-A)
    - or Reirradiation ± systemic therapy, clinical trial preferred
- Unresectable
    - Reirradiation ± systemic therapy, clinical trial preferred
    - or Systemic therapy, following the distant metastases pathway on this page

# Distant metastases

- Before treatment, use MGPT and other appropriate biomarker testing to check status of at least the following (category 2B)
    - Androgen receptor (AR)
    - HER2
    - NTRK1/2/3
    - FGFR
    - BRAF
    - RET
    - Microsatellite instability (MSI)
    - Mismatch repair deficiency (dMMR)
    - TMB
    - Programmed death ligand 1 (PD-L1)
- Clinical trial preferred
- PS 0–3
    - Systemic therapy (SALI-B)
    - or Expectant management, with slow-growing disease
    - or Selected metastasectomy (category 3)
    - or Best supportive care

# Next

- After RT for a completely resected locoregional recurrence, go to FOLL-A, 1 of 2
- Systemic therapy regimens, see SALI-B
- Radiation therapy details, see SALI-A
- Surgery details, see SURG-A
