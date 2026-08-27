+++
id           = "meso_pleural/PM-2"
gid          = "meso_pleural"
ref          = "PM-2"
page         = 6
title        = "Pretreatment evaluation and clinical assessment of confirmed pleural mesothelioma"
nccn_version = "3.2026"
nccn_date    = "07/08/26"
generated    = "2026-08-27"
see_also     = ["PM-1", "PM-3", "PM-A", "PM-B", "PM-C", "PM-D"]

[facets]
disease   = "meso_pleural"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "histology"
type = "enum"
options = ["epithelioid", "sarcomatoid", "biphasic"]
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "ps"
type = "number"
[[variables]]
name = "operability"
type = "enum"
options = ["medically operable", "medically inoperable"]
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Mesothelioma: Pleural v3.2026, PM-2, p6
- Applies to pleural mesothelioma confirmed at initial evaluation (PM-1)
- Pathologic diagnosis per Principles of Pathologic Review (PM-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) pleural mesothelioma
- Histology ___ (histology)
- Clinical stage ___ (clinical_stage)
- Performance status (PS) ___ (ps)
- ___ (operability)
- Symptoms and burden of disease ___ (symptoms)

# Pretreatment evaluation

- Chest/abdomen CT with contrast

# Clinical assessment, assign to one group

- Clinical stage I and epithelioid histology
- Clinical stage II–IV and epithelioid histology
- Sarcomatoid or biphasic histology, any stage
- Medically inoperable
- For either group, best supportive care is recommended for patients presenting with performance status (PS) 3–4 (PM-B)

# Treatment, clinical stage I and epithelioid histology

- Systemic therapy and consider pleural IMRT (preferred)
    - Systemic therapy per Principles of Systemic Therapy (PM-C)
    - Pleural intensity-modulated radiation therapy (IMRT) should only be performed in carefully selected patients at centers with experience in this technique
    - Principles of Radiation Therapy (PM-D)
- Or observation
    - May be considered for patients who are asymptomatic with minimal burden of disease
    - Only if systemic therapy is planned at the time of symptomatic or radiographic progression

# Treatment, clinical stage II–IV and epithelioid histology, sarcomatoid or biphasic histology (any stage), or medically inoperable

- Surgical evaluation
    - The benefit of surgical resection in pleural mesothelioma is unclear
    - There is no evidence that patient survival is improved with surgery when combined with systemic therapy versus systemic therapy alone
- Or systemic therapy (PM-C)
- Or observation
    - May be considered for patients who are asymptomatic with minimal burden of disease
    - Only if systemic therapy is planned at the time of symptomatic or radiographic progression

# Next

- Surgical evaluation, go to PM-3
- Progression on or after initial treatment, systemic therapy (PM-C)
    - Principles of Supportive Care and Survivorship (PM-B)
- Performance status (PS) 3–4, best supportive care (PM-B)
