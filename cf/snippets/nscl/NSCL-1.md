+++
id           = "nscl/NSCL-1"
gid          = "nscl"
ref          = "NSCL-1"
page         = 26
title        = "Initial evaluation of pathologically diagnosed NSCLC, and where each clinical stage goes next"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["PREV-1", "NSCL-2", "NSCL-3", "NSCL-5", "NSCL-8", "NSCL-13", "NSCL-14", "NSCL-15", "NSCL-19"]

[facets]
disease   = "nscl"
histology = "any"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "staging"]

[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "weight_loss"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "location"
type = "enum"
options = ["peripheral", "central"]
[[variables]]
name = "smoking_status"
type = "enum"
options = ["smokes", "formerly smoked", "does not smoke"]
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-1, p26
- Applies once there is a pathologic diagnosis of NSCLC
- Modification to cancer treatment should not be made solely based on HIV status, see NCCN Guidelines for Cancer in People with HIV
- All recommendations category 2A unless otherwise indicated

# Assessment

- Pathologic diagnosis ___ (pathology)
- Performance status ___ (performance_status)
- Weight loss ___ (weight_loss)
- Clinical stage ___ (ctnm)
- Location based on the CT of the chest ___ (location)
    - Peripheral = outer third of lung
    - Central = inner two thirds of lung
- Smoking status ___ (smoking_status)

# Initial evaluation

- Pathology review, see Principles of Pathologic Review (NSCL-A)
- H&P
    - Include performance status
    - Include weight loss
    - Enhanced frailty or geriatric assessments may predict complications better following treatment modalities, particularly surgery
    - A preferred frailty assessment system has not been established
- CT chest and upper abdomen with contrast, including adrenals
- CBC, platelets
- Chemistry profile
- Smoking cessation advice, counseling, and pharmacotherapy
    - Use the 5 A's Framework
        - Ask
        - Advise
        - Assess
        - Assist
        - Arrange
- Integrate palliative care, see NCCN Guidelines for Palliative Care
    - Temel JS, et al. N Engl J Med 2010;363:733-742
- For tools to aid in the optimal assessment and management of NSCLC in older adults, see the NCCN Guidelines for Older Adult Oncology

# Next

- For patients where more than one treatment modality (surgery, radiation therapy [RT], or systemic therapy) is usually considered, a multidisciplinary evaluation should be performed
- Stage IA, peripheral (T1, N0), go to Pretreatment Evaluation (NSCL-2)
- Stage IB, peripheral (T2a, N0); Stage I, central (T1–T2a, N0); Stage II (T1–T2ab, N1; T2b, N0); Stage IIB (T1, N2a; T3, N0); Stage IIIA (T3, N1), go to Pretreatment Evaluation (NSCL-3)
    - T3, N0 here is related to size or satellite nodules
- Stage IIB (T3 invasion, N0); Stage IIIA (T3 invasion, N1; T4 invasion, size N0–1), go to Pretreatment Evaluation (NSCL-5)
- Stage IIB (T1, N2a); Stage IIIA (T1, N2b; T2–T3, N2a); Stage IIIB (T2–T3, N2b), go to Pretreatment Evaluation (NSCL-8)
- Separate pulmonary nodule(s) (stage IIB, IIIA, IV)
    - Stage IIIA ipsilateral non-primary lobe (T4, N0–1); Stage IV (contralateral lung), go to Pretreatment Evaluation (NSCL-8)
- Multiple lung cancers, go to Treatment (NSCL-11)
- Stage IIIB (T1–2, N3); Stage IIIC (T3, N3), go to Pretreatment Evaluation (NSCL-13)
- Stage IIIB (T4, N2); Stage IIIC (T4, N3), go to Pretreatment Evaluation (NSCL-14)
- Stage IVA (M1a) (pleural or pericardial effusion), go to Pretreatment Evaluation (NSCL-14)
- Stage IVA, M1b and stage IVB, M1c, go to Pretreatment Evaluation (NSCL-15)
- Pleural metastases or disseminated metastases, go to Advanced/metastatic disease (NSCL-19)
