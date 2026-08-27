+++
id           = "nscl/NSCL-18"
gid          = "nscl"
ref          = "NSCL-18"
page         = 44
title        = "Therapy for recurrence and metastasis: local therapy for locoregional recurrence or symptomatic local disease, and control of symptoms in distant metastases"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-15", "NSCL-17", "NSCL-19", "NSCL-B", "NSCL-C", "NSCL-D", "NSCL-F"]

[facets]
disease   = "nscl"
stage     = ["IV", "recurrent"]
timepoint = ["recurrence", "metastatic", "supportive"]
intent    = ["curative", "palliative"]

[[variables]]
name = "site"
type = "text"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["no-prior-rt", "prior-rt"]
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "chest_ct"
type = "text"
[[variables]]
name = "brain_mri"
type = "text"
[[variables]]
name = "pet_findings"
type = "text"
[[variables]]
name = "met_extent"
type = "enum"
options = ["limited-metastasis", "pleural-metastases", "disseminated-metastases"]
[[variables]]
name = "fracture_risk"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-18, p44
- Therapy for recurrence and metastasis, local therapy and control of symptoms
- Two entry points on this page: locoregional recurrence or symptomatic local disease, and distant metastases
- All recommendations category 2A unless otherwise indicated

# Assessment

- Site of recurrence or metastasis ___ (site)
- Prior RT to this site ___ (prior_rt)
- Symptoms ___ (symptoms)
- Chest CT with contrast ___ (chest_ct)
- Brain MRI with and without contrast ___ (brain_mri)
- FDG-PET/CT ___ (pet_findings)
- Extent of metastatic disease ___ (met_extent)
- Risk of fracture at a bone metastasis ___ (fracture_risk)

# Locoregional recurrence or symptomatic local disease

- Endobronchial obstruction, any combination of the following:
    - Laser/stent/other surgery, see Principles of Surgical Therapy (NSCL-B)
    - External-beam RT or brachytherapy, see Principles of Radiation Therapy (NSCL-C)
    - Photodynamic therapy
- Resectable recurrence
    - Reresection (preferred), see Principles of Surgical Therapy (NSCL-B)
    - External-beam RT or SABR, see Principles of Radiation Therapy (NSCL-C)
        - IGTA therapy (eg, cryotherapy, microwave, radiofrequency) may be an option for select patients, see Principles of Image-Guided Thermal Ablation Therapy (NSCL-D)
- Mediastinal lymph node recurrence
    - No prior RT, concurrent chemoradiation, see Principles of Radiation Therapy (NSCL-C) and Concurrent Chemoradiation Regimens (NSCL-F)
    - Prior RT, advanced/metastatic disease (NSCL-19)
- Superior vena cava (SVC) obstruction
    - Concurrent chemoradiation, if not previously given, with or without SVC stent, see Principles of Radiation Therapy (NSCL-C) and Concurrent Chemoradiation Regimens (NSCL-F)
    - External-beam RT with or without SVC stent, see Principles of Radiation Therapy (NSCL-C)
    - SVC stent
- Severe hemoptysis, any combination of the following:
    - External-beam RT or brachytherapy, see Principles of Radiation Therapy (NSCL-C)
    - Laser or photodynamic therapy or embolization
    - Surgery

# Distant metastases, no evidence of disseminated disease

- Chest CT with contrast
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast
- FDG-PET/CT
- Then classify the extent of disease
    - Limited metastasis
    - Pleural metastases or disseminated metastases

# Distant metastases, evidence of disseminated disease

- Localized symptoms
    - Palliative external-beam RT, see Principles of Radiation Therapy (NSCL-C)
- Diffuse brain metastases
    - Palliative external-beam RT, see Principles of Radiation Therapy (NSCL-C)
    - See NCCN Guidelines for Central Nervous System Cancers
- Bone metastasis
    - If risk of fracture, orthopedic stabilization plus palliative external-beam RT, see Principles of Radiation Therapy (NSCL-C)
    - Consider bisphosphonate therapy or denosumab
        - An FDA-approved biosimilar is an appropriate substitute

# Next

- Observation or advanced/metastatic disease (NSCL-19) (category 2B), after local therapy on this page
- Advanced/metastatic disease (NSCL-19), after local therapy or palliation on this page
- Limited metastasis, stage IVA, M1b and stage IVB, M1c, go to NSCL-15
- Pleural metastases or disseminated metastases, go to advanced/metastatic disease (NSCL-19)
