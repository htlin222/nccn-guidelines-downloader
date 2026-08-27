+++
id           = "cns/SPINE-1"
gid          = "cns"
ref          = "SPINE-1"
page         = 84
title        = "Metastatic spine tumors: presentation, workup, and initial treatment"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["SPINE-2", "BRAIN-A", "BRAIN-C"]

[facets]
disease   = "cns"
timepoint = ["diagnosis", "workup", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_cancer"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "spine_level"
type = "text"
[[variables]]
name = "mri_findings"
type = "text"
+++

# Source

- NCCN Metastatic Spine Tumors v2.2026, SPINE-1, p84
- Applies to a patient diagnosed with cancer, or a patient with a newly discovered abnormality suspicious for spine metastasis
- Imaging: Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Radiation: Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Known cancer diagnosis, or newly discovered abnormality suspicious for spine metastasis: ___ (primary_cancer)
    - Remote history of cancer, which makes biopsy indicated
- Suspected level: ___ (spine_level)
- Presentation: ___ (presentation)
    - Asymptomatic (incidental finding)
    - Symptomatic
        - Severe, new, or progressive pain, or
        - Neurologic symptoms, or
        - Myelopathy
- Current symptoms: ___ (symptoms)

# Workup, asymptomatic (incidental finding)

- Systemic imaging for metastatic workup
    - Contrast-enhanced chest/abdomen/pelvis CT, or
    - Whole body FDG-PET/CT
    - Bone scan as indicated
- Biopsy if it alters management
    - Biopsy if remote history of cancer

# Treatment, asymptomatic (incidental finding)

- Observation
- Spine MRI in 6–8 weeks, then every 2–3 months until the nature of the lesion is established
    - Per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Surgery, focal RT, or systemic therapy are options for patients with asymptomatic epidural disease
    - Focal RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Systemic therapy: use regimen for disease-specific site

# Workup, symptomatic

- Spinal MRI, urgent in the event of neurologic symptoms
    - Per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
    - If the patient is unable to have an MRI, a CT myelogram is recommended, which may also be useful for RT planning
    - 15%–20% of patients have additional lesions, so complete spine imaging is highly recommended
- MRI result: ___ (mri_findings)

# Next

- Spinal cord compression, including cauda equina syndrome, go to SPINE-2
- No spinal cord compression, imaging per BRAIN-A
- No tumor
