+++
id           = "head-and-neck/ADV-3"
gid          = "head-and-neck"
ref          = "ADV-3"
page         = 72
title        = "Treatment of recurrent or persistent very advanced head and neck cancer, by prior RT and resectability"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-27"
see_also     = ["ADV-1", "ADV-4", "ORPH-2", "NASO-1"]

[facets]
disease   = "head-and-neck"
stage     = ["recurrent", "IV"]
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_status"
type = "enum"
options = ["locoregional recurrence", "second primary", "persistent disease", "distant metastases"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["no prior RT", "prior RT"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "path_features"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ADV-3, p72
- Applies to recurrent or persistent disease, and to distant metastases
- Branch point is prior RT to the site, then resectability
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Disease status ___ (disease_status)
- Prior RT to the site ___ (prior_rt)
- Resectability ___ (resectability)
- Consider MGPT for biomarker identification
- Adverse pathologic features on the resection specimen ___ (path_features)

# Locoregional recurrence or persistent disease without prior RT, resectable

- Surgery (SURG-A)
- No adverse pathologic features
    - Follow-up observation (FOLL-A, 1 of 2)
- Adverse pathologic features
    - Defined as extranodal extension, positive margins, close margins, pT3 or pT4 primary, pN2 or pN3 nodal disease, perineural invasion, vascular invasion, and lymphatic invasion (Discussion)
    - Extranodal extension and/or positive margin
        - Systemic therapy/RT (category 1) (SYST-A, ADV-A)
    - Other risk features
        - RT (ADV-A)
        - or Consider systemic therapy/RT (SYST-A, ADV-A)

# Locoregional recurrence or persistent disease without prior RT, unresectable

- Concurrent systemic therapy/RT (SYST-A, ADV-A)
    - When using concurrent systemic therapy/RT, the preferred agent is cisplatin (category 1) (SYST-A)
- or Combination systemic therapy (category 2B) followed by RT or systemic therapy/RT (SYST-A, ADV-A)
    - May be considered for cytoreduction or symptom control followed by local therapy as indicated
- Therapy for persistent disease as indicated, see Treatment of Very Advanced Head and Neck Cancer (ADV-1)

# Locoregional recurrence, second primary, or persistent disease with prior RT

- Resectable
    - Surgery (SURG-A)
        - With or without postoperative reirradiation (ADV-A)
        - or with systemic therapy/RT (SYST-A, ADV-A)
        - Clinical trial preferred
        - Reirradiation should be limited to a highly select subset of patients
- Unresectable
    - Reirradiation (ADV-A), with or without systemic therapy
        - Clinical trial preferred
        - Systemic therapy per SYST-A, or Systemic Therapy for Nasopharyngeal Cancers (NASO-B)
    - or ADV-4 for systemic therapy (SYST-A, or NASO-B)
    - or Best supportive care

# Distant metastases

- Go to ADV-4
- Consider palliative RT as clinically indicated (eg, bone metastases) (RAD-A)

# Next

- No adverse pathologic features after surgery, follow-up observation (FOLL-A, 1 of 2)
- Unresectable without prior RT, Treatment of Very Advanced Head and Neck Cancer (ADV-1)
- Systemic therapy for unresectable disease with prior RT, ADV-4
- Distant metastases, ADV-4
- Best supportive care
