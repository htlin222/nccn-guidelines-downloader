+++
id           = "cervical/CERV-14"
gid          = "cervical"
ref          = "CERV-14"
page         = 25
title        = "Primary and adjuvant treatment of locally advanced small cell NECC (IIA-IVA)"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-13", "CERV-10", "CERV-12"]

[facets]
disease   = "cervical"
histology = ["small-cell", "neuroendocrine"]
stage     = ["II", "III", "IV", "recurrent"]
timepoint = ["primary-treatment", "neoadjuvant", "adjuvant", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
[[variables]]
name = "primary_regimen"
type = "enum"
options = ["chemoradiation + brachytherapy", "neoadjuvant chemotherapy followed by chemoradiation + brachytherapy"]
[[variables]]
name = "treatment_response"
type = "text"
[[variables]]
name = "recurrence_site"
type = "enum"
options = ["local disease", "distant metastatic disease"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-14, p25
- Applies to small cell neuroendocrine carcinoma of the cervix (NECC)
- Locally advanced disease (IIA–IVA)
- Diagnosis per Principles of Pathology (CERV-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Small cell neuroendocrine carcinoma of the cervix (NECC), per Principles of Pathology (CERV-A)
- Locally advanced disease, stage ___ (stage)
- Cisplatin ___ (cisplatin_tolerance)
- Planned primary treatment ___ (primary_regimen)

# Primary treatment

- Chemoradiation + brachytherapy, with or without chemotherapy (preferred)
    - Chemotherapy is Cisplatin/Etoposide or Carboplatin/Etoposide
    - Chemoradiation per Principles of Radiation Therapy (CERV-D)
    - Brachytherapy per Principles of Radiation Therapy (CERV-D)
    - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin, or carboplatin if cisplatin intolerant, plus etoposide
    - The first two cycles of chemotherapy can be given concurrently with RT, on Days 1 and 22
    - The subsequent two cycles are given after RT
    - Chemotherapy per Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
- or Neoadjuvant chemotherapy, followed by chemoradiation + brachytherapy
    - Neoadjuvant chemotherapy is Cisplatin/Etoposide or Carboplatin/Etoposide
    - Chemoradiation per Principles of Radiation Therapy (CERV-D)
    - Brachytherapy per Principles of Radiation Therapy (CERV-D)
    - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin, or carboplatin if cisplatin intolerant, plus etoposide
    - The first two cycles of chemotherapy can be given concurrently with RT, on Days 1 and 22
    - The subsequent two cycles are given after RT

# Adjuvant treatment

- Assess treatment response ___ (treatment_response)
    - Per Principles of Imaging (CERV-B)

# Persistent or recurrent disease

- Site of persistent or recurrent disease ___ (recurrence_site)
- Local disease, one of
    - Systemic therapy, per Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
    - or Best supportive care, see NCCN Guidelines for Palliative Care
    - or Consider pelvic exenteration
        - Per Principles of Evaluation and Surgical Staging (CERV-C)
- Distant metastatic disease, one of
    - Systemic therapy (preferred), per Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
    - or Best supportive care, see NCCN Guidelines for Palliative Care

# Next

- Response to treatment, go to Surveillance (CERV-10)
    - Surveillance per Principles of Imaging (CERV-B)
- Persistent or recurrent disease, treat by site as above
