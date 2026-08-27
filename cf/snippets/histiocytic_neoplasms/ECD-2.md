+++
id           = "histiocytic_neoplasms/ECD-2"
gid          = "histiocytic_neoplasms"
ref          = "ECD-2"
page         = 23
title        = "Treatment, follow-up, and relapsed/refractory management of confirmed Erdheim-Chester disease"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["ECD-1", "ECD-1A"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = ["primary-treatment", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["symptomatic", "asymptomatic"]
[[variables]]
name = "critical_organs"
type = "text"
[[variables]]
name = "targeted_therapy"
type = "enum"
options = ["BRAF inhibitor", "MEK inhibitor", "neither"]
[[variables]]
name = "response_duration"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Erdheim-Chester Disease, ECD-2, p23
- Applies to confirmed ECD
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Confirmed ECD
- ___ (symptom_status)
- Critical organ involvement (eg, cardiovascular, CNS, liver) ___ (critical_organs)
- Current targeted therapy ___ (targeted_therapy)

# Treatment

- Asymptomatic disease and no critical organ involvement
    - Consider observation
    - Critical organ means eg cardiovascular, CNS, liver
- Symptomatic disease
    - Systemic therapy (HIST-D)

# Follow-up

- Principles of Supportive Care (HIST-E)
- FDG-PET/CT scan
    - No more than every 6 months after starting therapy until stabilization of the disease
    - As clinically indicated after 2 years
- Organ-specific imaging, contrast-enhanced CT or MRI
    - No more than every 6 months until disease stabilization
    - Then every 6-12 months
- Patients treated with BRAF inhibitors, see Principles of Targeted Therapy (HIST-F)
    - Regular skin examination
    - Echocardiogram
- Patients treated with MEK inhibitors, see Principles of Targeted Therapy (HIST-F)
    - Regular skin examination
    - Retinal examination
    - Echocardiogram
- Bone marrow evaluation in the presence of unexplained CBC abnormality
    - To rule out hemophagocytic lymphohistiocytosis
    - To rule out ECD
    - To rule out associated myeloid neoplasm
- Monitor every 1-2 years for hypothalamic pituitary axis abnormalities
    - Hormone testing as indicated

# Relapsed/refractory disease

- Duration of response ___ (response_duration)
- Systemic therapy (HIST-D)
    - If duration of response is more than 1 year, consider same regimen
    - Otherwise use a regimen not used for first-line therapy
- Palliative RT, see Principles of Radiation Therapy (HIST-G)
