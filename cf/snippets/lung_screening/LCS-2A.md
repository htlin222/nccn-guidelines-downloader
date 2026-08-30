+++
id           = "lung_screening/LCS-2A"
gid          = "lung_screening"
ref          = "LCS-2A"
page         = 9
title        = "Footnotes governing screening findings: CT dose, nodule definition and measurement, screening interval"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-1A", "LCS-3", "LCS-11"]

[facets]
disease   = "lung_screening"
timepoint = "screening"

[[variables]]
name = "nodule_type"
type = "enum"
options = ["solid", "part-solid", "nonsolid", "none"]
[[variables]]
name = "mean_measurement_mm"
type = "number"
[[variables]]
name = "ctdi_vol"
type = "number"
[[variables]]
name = "months_since_last_scan"
type = "number"
[[variables]]
name = "still_eligible"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-2A, p9
- Footnotes o through v for the screening findings pathway
- All recommendations category 2A unless stated otherwise

# Assessment

- Interval since the initial or interval scan: ___ (months_since_last_scan) months
- Nodule on this LDCT: ___ (nodule_type)
- Mean measurement, rounded to the nearest whole number: ___ (mean_measurement_mm) mm
- CT dose index volume used on this scan: ___ (ctdi_vol) mGy
- Still eligible for continued annual screening: ___ (still_eligible)

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

- A nodule is a three-dimensional (3D) opacity, measuring up to 3 cm in diameter
    - Solid nodule: homogeneous soft-tissue attenuation
    - Nonsolid nodule (also known as a ground-glass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
    - Part-solid nodule: elements of both solid and nonsolid nodules
- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
    - Bankier AA, et al. Radiology 2017;285:584-600
- Harmonized with Lung-RADS, with rounding of the mean measurement to the nearest whole number (mm)

# Before treating a nodule as a screen-detected nodule

- Confirm the nodule is without a benign pattern of calcification
- Confirm the nodule is without fat suggestive of hamartoma
- Confirm the nodule is without features suggesting an inflammatory etiology
- When multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, suggest follow-up LDCT in 1–3 months

# Screening interval and duration

- Ideally, the annual LDCT is performed 12 months from the initial or interval scan
- If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
