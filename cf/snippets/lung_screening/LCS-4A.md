+++
id           = "lung_screening/LCS-4A"
gid          = "lung_screening"
ref          = "LCS-4A"
page         = 13
title        = "Footnotes governing nodule measurement, FDG-PET, multidisciplinary evaluation, biopsy, and nonsolid/part-solid review"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-4", "LCS-2A", "LCS-3", "LCS-9", "LCS-11"]

[facets]
disease   = "lung_screening"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "nodule_type"
type = "enum"
options = ["solid", "part-solid", "nonsolid", "none"]
[[variables]]
name = "mean_diameter_mm"
type = "number"
[[variables]]
name = "solid_component_mm"
type = "number"
[[variables]]
name = "slice_thickness_mm"
type = "number"
[[variables]]
name = "ctdi_vol"
type = "number"
[[variables]]
name = "months_since_last_scan"
type = "number"
[[variables]]
name = "biopsy_result"
type = "text"
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-4A, p13
- Footnotes o through gg for the screen-detected nodule pathway
- All recommendations category 2A unless stated otherwise

# Assessment

- Interval since the initial or interval scan: ___ (months_since_last_scan) months
- CT dose index volume used on this scan: ___ (ctdi_vol) mGy
- Nodule on this LDCT: ___ (nodule_type)
- Mean diameter, rounded to the nearest whole number: ___ (mean_diameter_mm) mm
- Solid component: ___ (solid_component_mm) mm
- Slice thickness used to review nonsolid lesions: ___ (slice_thickness_mm) mm
- Biopsy result, if already obtained: ___ (biopsy_result)

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
    - Nonsolid nodule (also known as a groundglass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
    - Part-solid nodule: elements of both solid and nonsolid nodules
- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
    - Bankier AA, et al. Radiology 2017;285:584-600
- Report the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
- Harmonized with Lung-RADS, with rounding of the mean measurement to the nearest whole number (mm)

# Review of nonsolid and part-solid lesions

- It is crucial that all nonsolid lesions be reviewed at thin (≤1.5 mm) slices to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- All part-solid nodules ≥6 mm should be identified and solid areas should be measured

# Before treating a nodule as a screen-detected nodule

- Confirm the nodule is without a benign pattern of calcification
- Confirm the nodule is without fat suggestive of hamartoma
- Confirm the nodule is without features suggesting an inflammatory etiology
- When multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, suggest follow-up LDCT in 1–3 months

# Screening interval and duration

- Ideally, the annual LDCT is performed 12 months from the initial or interval scan
- If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate

# FDG-PET/CT

- FDG-PET has a low sensitivity for nodules with <8 mm of solid component
- FDG-PET has a low sensitivity for small nodules near the diaphragm
- FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
- In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher

# Multidisciplinary evaluation

- The evaluation for the suspicion of lung cancer requires a multidisciplinary approach with expertise in lung nodule management
    - Thoracic radiology
    - Pulmonary medicine
    - Thoracic surgery
- May include use of a lung nodule risk calculator to assist with probability determination
    - Mayo risk model
    - Brock university model
    - Model by Herder GJ, et al. Chest 2005;128:2490-2496
    - The use of risk calculators does not replace multidisciplinary nodule management
    - Geographic and other factors can substantially influence the accuracy of nodule calculators
- Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis is required
    - Thoracic surgery
    - Pulmonology
    - Interventional radiology
    - To determine feasibility along with the safest and most efficient approach for biopsy
    - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted

# Biopsy and tissue

- Tissue samples need to be adequate for both histology and molecular testing
    - Travis WD, et al. In: WHO Classification of Thoracic Tumors, 5th Ed. Lyon: International Agency for Research on Cancer; 2021:29-36
- If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest one of the following
    - Repeat biopsy
    - Surgical excision
    - Short-interval LDCT follow-up (3 months)
- See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Treatment

- SABR is also an appropriate option for individuals with high surgical risk
    - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer
