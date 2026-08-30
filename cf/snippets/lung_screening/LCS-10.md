+++
id           = "lung_screening/LCS-10"
gid          = "lung_screening"
ref          = "LCS-10"
page         = 22
title        = "New nonsolid nodule on follow-up or annual LDCT: follow-up interval by size and by stability, and when to consider biopsy or surgical excision"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-6", "LCS-9"]

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
name = "status"
type = "enum"
options = ["new", "stable", "growing"]
[[variables]]
name = "growth_mm"
type = "number"
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-10, p22
- Applies to a new nonsolid nodule on follow-up or annual LDCT
    - New nodule is defined as 4 mm or greater in mean diameter
- Footnotes on LCS-10A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- This scan is the ___ (scan_type) screening LDCT
- Nodule location: ___ (nodule_location)
- Nonsolid nodule confirmed
    - A nodule is a 3D opacity, measuring up to 3 cm in diameter
    - A nonsolid nodule, also known as a ground-glass nodule, has hazy increased attenuation that does not obliterate bronchial and vascular margins
    - A solid nodule has homogeneous soft-tissue attenuation
    - A part-solid nodule has elements of both solid and nonsolid nodules
- All nonsolid lesions reviewed at thin slices, 1.5 mm or less, to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- Nodule mean diameter: ___ (nodule_size) mm
- This nodule is ___ (status)
    - Growing means an increase of more than 1.5 mm
    - Interval growth: ___ (growth_mm) mm
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)

# Measurement and process to confirm

- Nodules evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- Reported as the average diameter rounded to the nearest whole number
    - For round nodules only a single diameter measurement is necessary
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
- These guidelines are harmonized with Lung-RADS with rounding of mean measurement to the nearest whole number (mm)
    - Lung-RADS 1.1 has increased the size of a nonsolid nodule that can continue with annual screening to less than 30 mm, rather than less than 20 mm
    - The NCCN Guidelines Panel has not harmonized this portion of the Lung-RADS update
    - The Panel consensus is that baseline or new nonsolid nodules 20 mm or greater should have an earlier evaluation at 6 months
- All screening and follow-up chest CT scans use a CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
    - There is a systematic process for appropriate follow-up
- A tracking tool, in addition to a navigation process, is in use
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# New nonsolid nodule

- Less than 20 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- 20 mm or greater
    - LDCT in 6 months

# On the 6-month LDCT

- Stable, less than 20 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Stable, 20 mm or greater
    - LDCT in 6 months
- Growing (more than 1.5 mm), less than 20 mm
    - LDCT in 6 months
- Growing (more than 1.5 mm), 20 mm or greater
    - LDCT in 6 months
    - or Consider biopsy
    - or Surgical excision
    - Individual preferences should be taken into account when deciding whether to follow-up with LDCT in 6 months or use invasive procedures in consultation with expert recommendations
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
    - If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months)
- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally the annual LDCT is performed 12 months from the initial or interval scan
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
