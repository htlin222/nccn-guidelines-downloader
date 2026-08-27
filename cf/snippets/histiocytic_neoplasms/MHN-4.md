+++
id           = "histiocytic_neoplasms/MHN-4"
gid          = "histiocytic_neoplasms"
ref          = "MHN-4"
page         = 31
title        = "Follow-up on treatment, surveillance after treatment, and treatment for relapsed/refractory malignant histiocytic neoplasms"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["MHN-2", "MHN-3"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = ["surveillance", "relapsed-refractory", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "treatment_status"
type = "enum"
options = ["currently on treatment", "completed treatment"]
[[variables]]
name = "current_regimen"
type = "text"
[[variables]]
name = "weeks_on_treatment"
type = "number"
[[variables]]
name = "clinical_course"
type = "enum"
options = ["response", "stable", "worsening clinical features"]
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "last_imaging"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Malignant Histiocytic Neoplasms, MHN-4, p31
- Covers follow-up, surveillance after treatment, and treatment for relapsed/refractory disease
- Follow-up follows Principles of Supportive Care (HIST-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (treatment_status)
- Current regimen ___ (current_regimen)
- ___ (weeks_on_treatment) weeks since initiating treatment
- ___ (clinical_course)
- Sites of disease ___ (sites)
- Last imaging ___ (last_imaging)

# Treatment assessment, for those currently on treatment

- Imaging after 6-8 weeks of initiating treatment
    - Also image if worsening clinical features
    - FDG-PET/CT, or
    - MRI of specific sites such as the brain
- If response
    - Subsequent imaging can be done in 3 months
    - Followed by every 3-6 months until 2 years

# Surveillance after treatment

- Imaging for up to 2 years
    - Whole-body FDG-PET/CT every 3-6 months
        - FDG-PET/MRI if available
    - Organ-specific imaging every 3-6 months
        - Contrast-enhanced CT, or
        - MRI
- Observe for second malignancies
- Supportive care, pain or other symptom management, see NCCN Guidelines for Supportive Care
    - Adult Cancer Pain
    - Palliative Care
    - Cancer-Related Fatigue
    - Distress Management
    - Survivorship
- If recurrence, re-biopsy and NGS is recommended

# Next

- Treatment for relapsed/refractory disease
    - Alternative regimen type not previously used, see Systemic therapy (HIST-D), or
    - Palliative RT, see Principles of Radiation Therapy (HIST-G)
