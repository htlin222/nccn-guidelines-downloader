+++
id           = "lung_screening/LCS-8"
gid          = "lung_screening"
ref          = "LCS-8"
page         = 18
title        = "New or growing solid nodule on follow-up or annual LDCT: follow-up interval by size, and when to move to chest CT or FDG-PET/CT"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-6", "LCS-7"]

[facets]
disease   = "lung_screening"
timepoint = "screening"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "scan_date"
type = "text"
[[variables]]
name = "scan_type"
type = "enum"
options = ["follow-up", "annual"]
[[variables]]
name = "nodule_location"
type = "text"
[[variables]]
name = "nodule_size"
type = "number"
[[variables]]
name = "change"
type = "enum"
options = ["new", "growing"]
[[variables]]
name = "growth_mm"
type = "number"
[[variables]]
name = "suspicion"
type = "enum"
options = ["lower", "higher"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-8, p18
- Applies to solid nodule(s) on follow-up or annual LDCT
- Covers the new and the growing branches only
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- This scan is the ___ (scan_type) screening LDCT
- Nodule location: ___ (nodule_location)
- Solid nodule: homogeneous soft-tissue attenuation
    - A nodule is a 3D opacity, measuring up to 3 cm in diameter
- Nodule mean diameter: ___ (nodule_size) mm
- This nodule is ___ (change)
    - New nodule is defined as 4 mm or greater in mean diameter
    - Growing means an increase of more than 1.5 mm
    - Interval growth: ___ (growth_mm) mm
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)

# Measurement and process to confirm

- Nodule measured on lung windows
- Reported as the average diameter rounded to the nearest whole number
    - For round nodules only a single diameter measurement is necessary
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
- Nodules evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- These guidelines are harmonized with Lung-RADS with rounding of mean measurement to the nearest whole number (mm)
- All screening and follow-up chest CT scans use a CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
    - There is a systematic process for appropriate follow-up
- A tracking tool, in addition to a navigation process, is in use
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# New nodule

- Less than 4 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- 4 mm to less than 6 mm
    - LDCT in 6 months
- 6 mm to less than 8 mm
    - LDCT in 3 months
- 8 mm or greater
    - Chest CT with contrast and/or FDG-PET/CT

# Growing nodule (more than 1.5 mm)

- Less than 8 mm
    - LDCT in 3 months
- 8 mm or greater
    - Chest CT with contrast and/or FDG-PET/CT

# After chest CT with contrast and/or FDG-PET/CT

- FDG-PET has a low sensitivity for nodules with less than 8 mm of solid component and for small nodules near the diaphragm
- FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
- In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher
- Suspicion of lung cancer: ___ (suspicion)
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
- Lower suspicion of lung cancer
    - LDCT in 3 months
- Higher suspicion of lung cancer
    - Biopsy, or surgical excision

# Biopsy or surgical excision

- See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer
- Biopsy
    - Tissue samples need to be adequate for both histology and molecular testing
    - If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months)
- Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis is required
    - Thoracic surgery
    - Pulmonology
    - Interventional radiology
    - To determine feasibility along with the safest and most efficient approach for biopsy
    - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted
- Surgical excision
    - SABR is also an appropriate option for individuals with high surgical risk
    - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Next

- Cancer confirmed, see NCCN Guidelines for Non-Small Cell Lung Cancer
- No cancer, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally the annual LDCT is performed 12 months from the initial or interval scan
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
