+++
id           = "ampullary/AMP-5"
gid          = "ampullary"
ref          = "AMP-5"
page         = 11
title        = "Postoperative adjuvant treatment of resected ampullary cancer, by stage, and the surveillance that follows"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-A", "AMP-E", "AMP-F", "AMP-7"]

[facets]
disease   = "ampullary"
histology = "adenocarcinoma"
stage     = ["I", "II", "III"]
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II", "III"]
[[variables]]
name = "surgery_date"
type = "text"
[[variables]]
name = "weeks_since_surgery"
type = "number"
[[variables]]
name = "neoadjuvant_therapy"
type = "text"
[[variables]]
name = "medically_fit"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-5, p11
- Applies to resected ampullary cancer, postoperative adjuvant treatment
- Principles of Systemic Therapy: AMP-E
- Principles of Radiation Therapy: AMP-F
- Principles of Diagnosis, Imaging, and Staging: AMP-A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Resected ampullary cancer
- Stage: ___ (stage)
- Date of surgery: ___ (surgery_date)
- Weeks since surgery: ___ (weeks_since_surgery)
- Neoadjuvant therapy received: ___ (neoadjuvant_therapy)
- Medically fit for adjuvant systemic therapy: ___ (medically_fit)

# Adjuvant treatment by stage

- Stage I
    - Systemic therapy, per Principles of Systemic Therapy (AMP-E)
    - Or consider observation
- Stage II
    - Systemic therapy (AMP-E), with or without subsequent chemoradiation (AMP-E, AMP-F)
    - Or consider observation
- Stage III
    - Systemic therapy (AMP-E), with or without subsequent chemoradiation (AMP-E, AMP-F)

# Timing and duration of adjuvant systemic therapy

- Initiate adjuvant systemic therapy within 12 weeks of surgery, if the patient is medically fit
- Total duration of systemic therapy is typically 6 months
- Patient who received neoadjuvant chemoradiation or chemotherapy may be a candidate for additional chemotherapy following surgery
    - Or chemoradiation, if none was delivered neoadjuvantly
    - After multidisciplinary review
- Adjuvant therapy options depend on the response to neoadjuvant therapy and other clinical considerations

# Surveillance

- Every 3–6 months for 2 years, then every 6–12 months for up to 5 years, as clinically indicated
    - History and physical (H&P) examination
    - Chest CT
    - CT or MRI of abdomen and pelvis with contrast, per Principles of Diagnosis, Imaging, and Staging (AMP-A)
    - CEA and/or CA 19-9

# Next

- Disease progression, go to AMP-7
