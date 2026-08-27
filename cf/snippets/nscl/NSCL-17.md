+++
id           = "nscl/NSCL-17"
gid          = "nscl"
ref          = "NSCL-17"
page         = 43
title        = "Surveillance after completion of definitive therapy, and what to do at recurrence"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-8", "NSCL-13", "NSCL-15", "NSCL-18", "NSCL-G"]

[facets]
disease   = "nscl"
stage     = ["I", "II", "III", "IV"]
biomarker = ["egfr", "alk"]
timepoint = ["surveillance", "recurrence"]
intent    = "curative"

[[variables]]
name = "stage_at_diagnosis"
type = "text"
[[variables]]
name = "primary_treatment"
type = "enum"
options = ["surgery", "surgery-plus-systemic-therapy", "rt", "chemoradiation", "definitive-treatment-of-all-oligometastatic-sites"]
[[variables]]
name = "definitive_therapy_completed"
type = "text"
[[variables]]
name = "time_since_definitive_therapy"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "last_chest_ct"
type = "text"
[[variables]]
name = "residual_abnormality"
type = "text"
[[variables]]
name = "smoking_status"
type = "text"
[[variables]]
name = "egfr"
type = "text"
[[variables]]
name = "alk"
type = "text"
[[variables]]
name = "node_status"
type = "text"
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-17, p43
- Applies after completion of definitive therapy, with no evidence of clinical or radiographic disease
- The surveillance schedule depends on which primary treatment was given, so establish that first
- All recommendations category 2A unless otherwise indicated

# Assessment

- Stage at diagnosis ___ (stage_at_diagnosis)
- Primary treatment included ___ (primary_treatment)
- Definitive therapy completed ___ (definitive_therapy_completed)
- Time since completion of definitive therapy ___ (time_since_definitive_therapy)
- Symptoms ___ (symptoms)
- Last chest CT ___ (last_chest_ct)
- Residual or new radiographic abnormality ___ (residual_abnormality)
- Smoking status ___ (smoking_status)
- EGFR ___ (egfr)
- ALK ___ (alk)
- Node status at diagnosis ___ (node_status)

# Surveillance if stage I-II and primary treatment included surgery, with or without systemic therapy

- H&P and chest CT with or without contrast every 6 months for 2-3 years
    - Timing of CT scans within Guidelines parameters is a clinical decision
- Then H&P and a low-dose non-contrast-enhanced chest CT annually

# Surveillance if stage I-II and primary treatment included RT, or stage III, or stage IV oligometastatic with all sites treated with definitive intent

- H&P and chest CT with or without contrast every 3-6 months for 3 years
    - Timing of CT scans within Guidelines parameters is a clinical decision
- Then H&P and chest CT with or without contrast every 6 months for 2 years
- Then H&P and a low-dose non-contrast-enhanced chest CT annually
- Residual or new radiographic abnormalities may require more frequent imaging

# Surveillance for every patient on this page

- Smoking cessation advice, counseling, and pharmacotherapy
- FDG-PET/CT is not routinely indicated
    - It is currently not warranted in the routine surveillance and follow-up of patients with NSCLC
    - However, many benign conditions such as atelectasis, consolidation, and radiation fibrosis are difficult to differentiate from neoplasm on standard CT imaging, and FDG-PET/CT can be used to differentiate true malignancy in these settings
    - If FDG-PET/CT is used as a problem-solving tool after RT, histopathologic confirmation of recurrent disease is needed when possible, because persistent inflammatory hypermetabolism is common after prior RT
    - Increasing intensity and/or size of focal hypermetabolism over time is the most specific indicator of recurrence that warrants confirmation
- Brain MRI with and without contrast as clinically indicated based on risk assessment
    - Examples of high-risk factors include, but are not limited to, EGFR mutations, ALK gene fusions, and node-positive disease
- Cancer Survivorship Care (NSCL-G)

# Workup if recurrence is found

- FDG-PET/CT
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast

# Next

- No evidence of clinical or radiographic disease, continue the surveillance schedule above
- Locoregional recurrence, go to Therapy for Recurrence and Metastasis (NSCL-18)
- Distant metastases, go to Therapy for Recurrence and Metastasis (NSCL-18)
