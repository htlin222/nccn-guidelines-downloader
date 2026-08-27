+++
id           = "cns/MENI-1"
gid          = "cns"
ref          = "MENI-1"
page         = 64
title        = "Meningioma: radiographic presentation, initial treatment choice, and postoperative management by grade"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["MENI-2", "BRAIN-A", "BRAIN-C"]

[facets]
disease   = "cns"
timepoint = ["diagnosis", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "location"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "performance_score"
type = "text"
[[variables]]
name = "resection_extent"
type = "enum"
options = ["complete resection", "incomplete resection", "not resected"]
[[variables]]
name = "who_grade"
type = "enum"
options = ["1", "2", "3"]
+++

# Source

- NCCN CNS Cancers v2.2026, MENI-1, p64
- Applies to a dural-based mass diagnosed as meningioma by radiographic criteria, or possible meningioma
- Multidisciplinary input for treatment planning if feasible
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Brain MRI: ___ (mri_findings)
- Tumor size ___ (tumor_size) cm
- Location, including proximity to critical structures: ___ (location)
- Presence and severity of symptoms: ___ (symptoms)
- Performance score ___ (performance_score)
- Extent of resection: ___ (resection_extent)
- WHO grade ___ (who_grade), if resected

# Radiographic diagnosis by brain MRI

- Dural-based mass
- Homogeneously contrast-enhancing
- Dural tail
- CSF cleft

# Factors that drive treatment selection

- Patient features
    - Age
    - Performance score
    - Comorbidities
    - Treatment preferences
- Tumor features
    - Size
    - Grade
    - Growth rate
    - Location, proximity to critical structures
    - Potential for causing neurologic consequences if untreated
    - Presence and severity of symptoms
- Treatment-related factors
    - Potential for neurologic consequences from surgery or RT
    - Likelihood of complete resection and/or complete irradiation with SRS
    - Treatability of tumor if it progresses
    - Available surgical or radiation oncology expertise and resources
- Multidisciplinary input for treatment planning is recommended

# Treatment

- Consider resection
- Consider octreotide scan or DOTATATE PET/CT or PET/MRI scan, if diagnostic doubt exists
- Observe
    - Preferred for small asymptomatic tumors
    - Not generally recommended for symptomatic tumors
    - For asymptomatic meningiomas, observation is preferred for small tumors, with a suggested cutoff of 3 cm or less
    - Active treatment with surgery and/or RT is recommended in patients with one or more tumor- and/or treatment-related risk factors, such as proximity to the optic nerve
- Consider clinical trial, for cases that are not surgically accessible but for which treatment with RT and/or systemic therapy is considered
- or Surgery, if accessible
    - Postoperative brain MRI within 48 hours after surgery
    - Principles of Brain and Spine Tumor Imaging (BRAIN-A)
    - Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- or RT
    - Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)

# Adjuvant treatment

- Consider RT, depending on the treatment selection factors above
    - The decision to administer RT after surgery also depends on the extent of resection achieved
    - Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- In general, postoperative management depends on grade, extent of resection, and symptoms
    - WHO grade 1 = benign meningioma, WHO grade 2 = atypical meningioma, WHO grade 3 = malignant (anaplastic) meningioma
    - Grade 1: observation, or consider RT for symptomatic patients
    - Grade 2 with complete resection: consider RT
    - Grade 2 with incomplete resection: RT, or observation in select cases (eg, low PS)
    - Grade 3: RT

# Next

- Follow-up, go to MENI-2
