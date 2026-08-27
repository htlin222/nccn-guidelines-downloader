+++
id           = "cervical/CERV-12"
gid          = "cervical"
ref          = "CERV-12"
page         = 23
title        = "Treatment of stage IVB or recurrence with distant metastases"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-10", "CERV-11"]

[facets]
disease   = "cervical"
stage     = ["IV", "recurrent"]
timepoint = ["metastatic", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_status"
type = "enum"
options = ["stage IVB", "recurrence with distant metastases"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "local_amenable"
type = "enum"
options = ["amenable to local treatment", "not amenable to local treatment"]
[[variables]]
name = "molecular_profile"
type = "text"
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-12, p23
- Applies to stage IVB, or recurrence with distant metastases
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (disease_status)
- Distant metastatic sites ___ (met_sites)
- ___ (local_amenable)
- Consider comprehensive molecular profiling ___ (molecular_profile)
    - As determined by an FDA-approved assay, or a validated test performed in a CLIA-certified laboratory
- Cisplatin ___ (cisplatin_tolerance)

# Amenable to local treatment

- Selection of patients amenable to local treatment per Perkins V, et al. Gynecol Oncol 2020;156:100-106
- Local treatment, one of
    - Resection, with or without individualized EBRT
        - Per Principles of Radiation Therapy (CERV-D)
    - or Local ablative therapies, with or without individualized EBRT
        - Per Principles of Radiation Therapy (CERV-D)
    - or Individualized EBRT, with or without concurrent platinum-containing chemotherapy
        - Per Principles of Radiation Therapy (CERV-D)
        - Concurrent platinum-containing chemotherapy with EBRT uses cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
- Consider adjuvant systemic therapy
    - See Systemic Therapy for Cervical Cancer (CERV-F)

# Not amenable to local treatment

- Systemic therapy
    - See Systemic Therapy for Cervical Cancer (CERV-F)
- and/or Best supportive care
    - See NCCN Guidelines for Palliative Care

# Next

- After local treatment, go to Surveillance (CERV-10)
