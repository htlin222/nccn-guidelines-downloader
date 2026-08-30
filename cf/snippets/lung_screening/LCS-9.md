+++
id           = "lung_screening/LCS-9"
gid          = "lung_screening"
ref          = "LCS-9"
page         = 20
title        = "Part-solid nodule on follow-up or annual LDCT: interval by nodule and solid component size, and when to move to FDG-PET/CT, biopsy or surgical excision"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-6", "LCS-7", "LCS-8", "LCS-A"]

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
name = "solid_component_size"
type = "number"
[[variables]]
name = "nodule_status"
type = "enum"
options = ["unchanged", "new", "growing"]
[[variables]]
name = "solid_growth_mm"
type = "number"
[[variables]]
name = "suspicion"
type = "enum"
options = ["lower", "higher"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-9, p20
- Applies to part-solid nodule(s) on follow-up or annual LDCT
- Footnotes on LCS-9A
- These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number (mm)
- Use of a tracking tool, in addition to a navigation process, is recommended
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible
- All nonsolid lesions must be reviewed at thin (1.5 mm or less) slices to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with these part-solid recommendations (LCS-9)
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- This scan is the ___ (scan_type) screening LDCT
- Nodule location: ___ (nodule_location)
- Nodule is part-solid: it has elements of both solid and nonsolid nodules
    - A nodule is a 3D opacity, measuring up to 3 cm in diameter
    - A solid nodule has a homogeneous soft-tissue attenuation
    - A nonsolid nodule, also known as a ground-glass nodule, has hazy increased attenuation that does not obliterate bronchial and vascular margins
- Total nodule mean diameter: ___ (nodule_size) mm
- Solid component size: ___ (solid_component_size) mm
- Nodule compared with the prior scan: ___ (nodule_status)
    - New nodule is defined as 4 mm or greater in mean diameter
    - Growing means an increase of more than 1.5 mm in the solid component
    - Interval growth of the solid component: ___ (solid_growth_mm) mm

# Measurement and scan technique to confirm

- Nodules measured on lung windows and reported as the average diameter rounded to the nearest whole number
    - For round nodules only a single diameter measurement is necessary
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
- Nodules evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- All screening and follow-up chest CT scans use a CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
    - There is a systematic process for appropriate follow-up

# Part-solid nodule unchanged on follow-up LDCT

- Nodule <6 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Nodule ≥6 mm with <6 mm solid component
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Nodule ≥6 mm with ≥6 mm to <8 mm solid component
    - LDCT in 6 mo, or FDG-PET/CT
    - Unchanged, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Lower suspicion of lung cancer, LDCT in 6 mo
    - Higher suspicion of lung cancer, biopsy or surgical excision

# Part-solid nodule unchanged on annual LDCT

- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)

# New part-solid nodule

- Nodule <6 mm
    - LDCT in 6 mo

# Part-solid nodule growing (>1.5 mm in solid component) or new nodule

- Nodule ≥6 mm with growing <4 mm solid component
    - LDCT in 3 mo
- Nodule with ≥4 mm solid component
    - Chest CT + contrast and/or FDG-PET/CT
    - Lower suspicion of lung cancer, LDCT in 3 mo
    - Higher suspicion of lung cancer, biopsy or surgical excision

# FDG-PET/CT caveats

- FDG-PET has a low sensitivity for nodules with <8 mm of solid component and for small nodules near the diaphragm
- FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
- In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher

# Determining suspicion of lung cancer

- Suspicion of lung cancer on multidisciplinary review: ___ (suspicion)
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
