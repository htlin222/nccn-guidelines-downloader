+++
id           = "cervical/CERV-11"
gid          = "cervical"
ref          = "CERV-11"
page         = 22
title        = "Therapy for relapse: locoregional recurrence, by prior radiation and central versus noncentral disease"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-10", "CERV-12"]

[facets]
disease   = "cervical"
stage     = "recurrent"
timepoint = "recurrence"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["no prior RT", "prior RT"]
[[variables]]
name = "rt_field"
type = "enum"
options = ["outside previous RT field", "within previous RT field"]
[[variables]]
name = "disease_location"
type = "enum"
options = ["central", "noncentral"]
[[variables]]
name = "resection_feasible"
type = "enum"
options = ["feasible", "not feasible"]
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-11, p22
- Therapy for relapse, locoregional recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Locoregional recurrence
- Prior radiation therapy (RT): ___ (prior_rt)
- Recurrence relative to previous RT field: ___ (rt_field)
- Disease location: ___ (disease_location)
- Surgical resection: ___ (resection_feasible)
- Cisplatin ___ (cisplatin_tolerance)

# No prior RT, or recurrence outside of previous RT field

- Consider surgical resection, if feasible
- Individualized EBRT + concurrent platinum-containing chemotherapy, with or without brachytherapy
    - EBRT and brachytherapy per Principles of Radiation Therapy (CERV-D)
    - Concurrent platinum-containing chemotherapy with EBRT uses cisplatin as a single agent
        - Carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)

# Prior RT, central disease

- Pelvic exenteration, with or without intraoperative RT (IORT)
    - Pelvic exenteration per Principles of Evaluation and Surgical Staging (CERV-C)
    - IORT per Principles of Radiation Therapy (CERV-D)
- or, in carefully selected patients
    - Radical hysterectomy
        - Per Principles of Evaluation and Surgical Staging (CERV-C)
    - or Brachytherapy
        - Per Principles of Radiation Therapy (CERV-D)
    - or Individualized EBRT, with or without concurrent platinum-containing chemotherapy
        - EBRT per Principles of Radiation Therapy (CERV-D)
        - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)

# Prior RT, noncentral disease

- Individualized EBRT, with or without concurrent platinum-containing chemotherapy
    - EBRT per Principles of Radiation Therapy (CERV-D)
    - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
- or Resection, with or without IORT
    - IORT per Principles of Radiation Therapy (CERV-D)
- or Systemic therapy
    - See Systemic Therapy for Cervical Cancer (CERV-F)
- or Best supportive care
    - See NCCN Guidelines for Palliative Care

# Next

- Recurrence after therapy for the locoregional recurrence
    - Systemic therapy, see Systemic Therapy for Cervical Cancer (CERV-F)
    - or Best supportive care, see NCCN Guidelines for Palliative Care
