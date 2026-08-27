+++
id           = "cns/MU-1"
gid          = "cns"
ref          = "MU-1"
page         = 71
title        = "Extensive brain metastases: workup and primary treatment"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["LTD-1", "MU-2", "BRAIN-A", "BRAIN-B", "BRAIN-C", "BRAIN-D"]

[facets]
disease   = "cns"
timepoint = ["workup", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_history"
type = "enum"
options = ["known", "none"]
[[variables]]
name = "imaging"
type = "enum"
options = ["CT", "MRI"]
[[variables]]
name = "ps"
type = "enum"
options = ["good", "poor"]
[[variables]]
name = "kps"
type = "number"
[[variables]]
name = "mass_effect"
type = "text"
[[variables]]
name = "hippocampal_mets"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "leptomeningeal_disease"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "accessible_tumor"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "systemic_disease"
type = "text"
+++

# Source

- NCCN Guidelines Version 2.2026, Extensive Brain Metastases, MU-1, p71
- Applies to extensive brain metastases on CT or MRI
- Extensive brain metastases includes all cases that do not fit the definition of limited brain metastases on LTD-1
- Clinical presentation is assessed with Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Treatment planning is based on multidisciplinary review once pathology is available, see Principles of Brain and Spine Tumor Management (BRAIN-D)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- History of cancer ___ (cancer_history)
- Extensive brain metastases on ___ (imaging)
- Performance status ___ (ps), KPS ___ (kps)
- Mass effect or symptoms ___ (mass_effect)
- Brain metastases within 5 mm of the hippocampi ___ (hippocampal_mets)
- Leptomeningeal disease ___ (leptomeningeal_disease)
- Life expectancy ___ (life_expectancy)
- Other readily accessible tumor for biopsy outside the CNS ___ (accessible_tumor)
- Disseminated systemic disease with poor systemic treatment options ___ (systemic_disease)

# Workup, no known history of cancer

- Contrast-enhanced CT chest/abdomen/pelvis
- Consider whole body FDG-PET/CT
- Other tests as indicated
- Tumor found outside the CNS
    - Biopsy or resect tumor found outside CNS to confirm cancer diagnosis
- No other readily accessible tumor for biopsy
    - Good PS
        - Surgery to confirm diagnosis of CNS metastases, see Principles of Surgery (BRAIN-B)
            - Resection for management of mass effect or symptoms
            - Biopsy if resection not planned
    - Poor PS

# Workup, known history of cancer

- Consider surgery for brain metastases, see Principles of Surgery (BRAIN-B)
    - Resection for management of mass effect or symptoms
    - Biopsy if concern exists about diagnosis of CNS lesions and resection is not planned

# Primary treatment

- Radiation therapy per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- HA-WBRT + memantine
    - Brain metastases not within 5 mm of the hippocampi
    - KPS at least 70
    - Life expectancy of at least 4 months
    - No leptomeningeal disease
    - In patients without brain metastases within 5 mm of the hippocampi, HA-WBRT + memantine was superior to WBRT + memantine in terms of cognitive preservation and patient-reported QOL
- or WBRT without HA, with or without memantine
- or SRS
    - Can be considered for patients with good performance and low overall tumor volume and/or radioresistant tumors such as melanoma
    - SRS plus TTF in patients with NSCLC without targetable alterations mutations (ALK, EGFR, ROS1, and BRAF)
- or Systemic therapy, see Brain Metastases: Systemic Therapy (BRAIN METS-A)
    - If an active agent exists (eg, cytotoxic, targeted, immune modulating), trial of systemic therapy with good CNS penetration may be considered in select patients
    - Select patients, eg, small asymptomatic brain metastases from melanoma, ALK gene fusion-positive NSCLC, or EGFR-mutated NSCLC
    - It is reasonable to hold on treating with radiation to see if systemic therapy can control the brain metastases
    - Consultation with a radiation oncologist and close MRI surveillance is strongly recommended
    - There are no data from prospective clinical trials comparing the two strategies to assess the impact of delayed radiation on survival or on delay of neurologic deficit development

# Primary treatment, disseminated systemic disease with poor systemic treatment options and poor PS

- Palliative/best supportive care
- or Short-course WBRT without HA (eg, 20 Gy in 5 fractions) if symptomatic

# Next

- After primary treatment, go to Follow-up (MU-2)
