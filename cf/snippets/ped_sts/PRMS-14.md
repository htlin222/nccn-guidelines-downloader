+++
id           = "ped_sts/PRMS-14"
gid          = "ped_sts"
ref          = "PRMS-14"
page         = 17
title        = "Treatment of recurrent or progressive RMS by goals of care"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-D", "PRMS-F", "PRMS-G"]

[facets]
disease   = "ped_sts"
stage     = "recurrent"
timepoint = ["recurrence", "supportive"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy_result"
type = "text"
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "recurrence_extent"
type = "enum"
options = ["local", "regional", "other"]
[[variables]]
name = "initial_risk_group"
type = "text"
[[variables]]
name = "rt_in_initial_therapy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "goals_of_care"
type = "enum"
options = ["curative intent", "palliative intent"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-14, p17
- Applies to recurrent or progressive RMS
- Treatment on this page follows Principles of Imaging
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biopsy to confirm recurrence, strongly recommended: ___ (biopsy_result)
- Site of recurrence or progression: ___ (recurrence_site)
- Extent of recurrence: ___ (recurrence_extent)
- Risk group of the initial disease: ___ (initial_risk_group)
- RT given as part of initial therapy: ___ (rt_in_initial_therapy)
- Prognosis and goals of care decided: ___ (goals_of_care)

# Evaluate prognosis and goals of care

- Curative intent
    - Consider for the minority of patients with local/regional recurrence
    - Especially those with initially low-risk disease
    - Especially those treated without RT in initial therapy
- Palliative intent

# Treatment, curative intent

- Clinical trial preferred
- Or systemic therapy (PRMS-G) together with local control
    - Local control by surgery (PRMS-D) and/or RT (PRMS-F)
    - If giving chemotherapy, consider 2–3 neoadjuvant cycles to assess response prior to local control

# Treatment, palliative intent

- Clinical trial preferred
- Or any of the following, alone or in combination
    - Systemic therapy (PRMS-G)
    - Surgery for symptomatic disease (PRMS-D)
        - If giving chemotherapy, consider 2–3 neoadjuvant cycles to assess response prior to local control
    - RT (PRMS-F)
        - If giving chemotherapy, consider 2–3 neoadjuvant cycles to assess response prior to local control
    - Best supportive/palliative care
        - Follow-up, including imaging, should be tailored to the patient's clinical status

# Next

- Systemic therapy (PRMS-G)
- Surgery (PRMS-D)
- RT (PRMS-F)
