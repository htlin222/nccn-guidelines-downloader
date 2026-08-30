+++
id           = "lung_screening/LCS-7A"
gid          = "lung_screening"
ref          = "LCS-7A"
page         = 17
title        = "Footnotes governing nodule evaluation, biopsy and treatment decisions for a screen-detected nodule"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-7", "LCS-6", "LCS-2A", "LCS-1", "LCS-A"]

[facets]
disease   = "lung_screening"
timepoint = ["screening", "diagnosis", "primary-treatment"]

[[variables]]
name = "mean_diameter_mm"
type = "number"
[[variables]]
name = "solid_component_mm"
type = "number"
[[variables]]
name = "risk_model"
type = "enum"
options = ["mayo", "brock", "herder", "none"]
[[variables]]
name = "mdt_review"
type = "enum"
options = ["done", "pending"]
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["diagnostic", "non-diagnostic", "not-done"]
[[variables]]
name = "surgical_risk"
type = "enum"
options = ["standard", "high"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-7A, p17
- Footnotes o, p, q, r, t, u, v, w, x, y, z, aa, bb, dd, ee and ii for the screen-detected nodule pathway
- All recommendations category 2A unless stated otherwise

# Assessment

- Mean diameter on lung windows, rounded to the nearest whole number: ___ (mean_diameter_mm) mm
- Solid component of the nodule: ___ (solid_component_mm) mm
- Lung nodule risk calculator used: ___ (risk_model)
- Multidisciplinary nodule management review: ___ (mdt_review)
- Biopsy result: ___ (biopsy_result)
- Surgical risk: ___ (surgical_risk)

# CT technique and dose

- All screening and follow-up chest CT scans should use a CT dose index volume (CTDIvol) threshold of ≤3 mGy for an individual of average size
    - Parameters should be adjusted for individuals of smaller or larger size
    - Exception: when evaluating mediastinal abnormalities or lymph nodes, standard-dose CT with IV contrast might be appropriate (LCS-A)
- There should be a systematic process for appropriate follow-up
- See ACR-STR Practice Parameter for the Performance and Reporting of Lung Cancer Screening Thoracic Computed Tomography (CT)
    - Christensen J, et al. Chest 2024;165:738-753

# Program process

- Use of a tracking tool, in addition to a navigation process, is recommended
    - To systematically ensure that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - To systematically ensure that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# Nodule definition and measurement

- A nodule is a 3D opacity, measuring up to 3 cm in diameter
    - Solid nodule: homogeneous soft-tissue attenuation
    - Nonsolid nodule (also known as a ground-glass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
    - Part-solid nodule: elements of both solid and nonsolid nodules
- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
    - Bankier AA, et al. Radiology 2017;285:584-600
- Report the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
- These guidelines are harmonized with Lung-RADS, with rounding of the mean measurement to the nearest whole number (mm)

# Screening interval and duration

- Ideally, the annual LDCT is performed 12 months from the initial or interval scan
- If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate

# Interpreting FDG-PET/CT

- FDG-PET has a low sensitivity for nodules with <8 mm of solid component
- FDG-PET has a low sensitivity for small nodules near the diaphragm
- FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
- In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher

# Evaluating the suspicion of lung cancer

- Requires a multidisciplinary approach with expertise in lung nodule management
    - Thoracic radiology
    - Pulmonary medicine
    - Thoracic surgery
- May include use of a lung nodule risk calculator to assist with probability determination
    - Mayo risk model
    - Brock university model
    - Model by Herder GJ, et al. Chest 2005;128:2490-2496
    - The use of risk calculators does not replace multidisciplinary nodule management
    - Geographic and other factors can substantially influence the accuracy of nodule calculators
- Rapid increase in size should raise suspicion of inflammatory etiology, or of malignancy other than non-small cell lung cancer (LCS-6)
- See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Biopsy and tissue

- Tissue samples need to be adequate for both histology and molecular testing
    - Travis WD, et al. In: WHO Classification of Thoracic Tumors, 5th Ed. Lyon: International Agency for Research on Cancer; 2021:29-36
- If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest one of
    - Repeat biopsy
    - Surgical excision
    - Short-interval LDCT follow-up (3 months)

# Before treatment

- Multidisciplinary evaluation is required prior to treatment
    - Must include the treating physicians
    - Must include specialists in obtaining tissue diagnosis: thoracic surgery, pulmonology, and interventional radiology
- The multidisciplinary evaluation determines feasibility along with the safest and most efficient approach for biopsy
- Alternatively it provides consensus that
    - A biopsy is too risky or difficult
    - A clinical diagnosis of lung cancer is appropriate
    - Treatment is warranted
- SABR is also an appropriate option for individuals with high surgical risk
    - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer
