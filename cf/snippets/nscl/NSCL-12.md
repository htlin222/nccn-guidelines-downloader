+++
id           = "nscl/NSCL-12"
gid          = "nscl"
ref          = "NSCL-12"
page         = 38
title        = "Initial treatment of multiple lung cancers (N0-1), by whether the disease is stable or has a growing dominant nodule"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-17", "NSCL-18", "NSCL-19", "NSCL-B", "NSCL-C", "NSCL-D"]

[facets]
disease   = "nscl"
timepoint = "primary-treatment"
intent    = ["curative", "palliative"]

[[variables]]
name = "lesion_count"
type = "text"
[[variables]]
name = "lesion_distribution"
type = "text"
[[variables]]
name = "nodal_status"
type = "enum"
options = ["N0", "N1"]
[[variables]]
name = "dominant_nodule"
type = "text"
[[variables]]
name = "growth"
type = "text"
[[variables]]
name = "solid_component"
type = "text"
[[variables]]
name = "fdg_uptake"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-12, p38
- Applies to multiple lung cancers, suspected or confirmed, N0-1
- For lung nodules detected by lung cancer screening, see NCCN Guidelines for Lung Cancer Screening (LCS-11)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Multiple lung cancers, suspected or confirmed: ___ (lesion_count)
- Distribution of the lesions ___ (lesion_distribution)
- Nodal status ___ (nodal_status)
- Dominant nodule ___ (dominant_nodule)
- Growth compared with previous imaging ___ (growth)
- Solid component ___ (solid_component)
- FDG uptake ___ (fdg_uptake)
- Symptoms ___ (symptoms)

# Multidisciplinary evaluation

- Multidisciplinary evaluation, including
    - Thoracic radiology
    - Pulmonary medicine
    - Thoracic surgery
    - Medical oncology
    - Radiation oncology

# Which presentation is this

- Stable or very slow-growing disease
    - Lesions at low risk of becoming symptomatic can be observed
    - eg, small subsolid nodules with slow growth
- Dominant nodule with evidence of growth
    - Treatment should be considered if the lesion(s) show accelerating growth, even while small
    - Treatment should be considered if the lesion(s) show increasing solid component, even while small
    - Treatment should be considered if the lesion(s) show increasing FDG uptake, even while small
- If there is a dominant nodule with growth, decide whether definitive local therapy is possible

# Initial treatment: stable or very slow-growing disease

- Observation

# Initial treatment: dominant nodule with growth, definitive local therapy possible

- Parenchymal sparing resection (preferred), Principles of Surgical Therapy (NSCL-B)
    - Lung-sparing resection is preferred, but tumor distribution and institutional expertise should guide individual treatment planning
    - Evaluate the patient in a multidisciplinary setting, ie, surgery, radiation oncology, medical oncology
        - Interventional pulmonology and/or interventional radiology as needed
- or Radiation, Principles of Radiation Therapy (NSCL-C)
- or Image-guided thermal ablation (IGTA), Principles of Image-Guided Thermal Ablation Therapy (NSCL-D)
    - IGTA therapy (eg, cryotherapy, microwave, radiofrequency) may be an option for select patients

# Initial treatment: dominant nodule with growth, definitive local therapy not possible

- Palliative systemic therapy, with or without local palliative therapy
- or Observe

# Next

- Stable or very slow-growing disease, after observation, go to surveillance (NSCL-17)
- After parenchymal sparing resection, radiation, or IGTA, go to surveillance (NSCL-17)
- Definitive local therapy not possible, go to therapy for recurrence and metastasis (NSCL-18)
- Definitive local therapy not possible, go to advanced/metastatic disease (NSCL-19)
