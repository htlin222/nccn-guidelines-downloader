+++
id           = "lung_screening/LCS-7"
gid          = "lung_screening"
ref          = "LCS-7"
page         = 16
title        = "Solid nodule unchanged on follow-up or annual LDCT: interval by nodule size, and when to move to FDG-PET/CT, biopsy or surgical excision"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-6", "LCS-8", "LCS-A"]

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
name = "nodule_size"
type = "text"
[[variables]]
name = "prior_nodule_size"
type = "text"
[[variables]]
name = "nodule_status"
type = "enum"
options = ["unchanged", "changed"]
[[variables]]
name = "suspicion"
type = "enum"
options = ["lower", "higher"]

+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-7, p16
- Applies to solid nodule(s) on a follow-up or annual screening LDCT
- Footnotes on LCS-7A
- These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number (mm)
- Use of a tracking tool, in addition to a navigation process, is recommended
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- This scan is the ___ (scan_type) screening LDCT
- Nodule is solid: homogeneous soft-tissue attenuation
    - A nodule is a 3D opacity measuring up to 3 cm in diameter
- Nodule size on lung windows, average diameter rounded to the nearest whole number: ___ (nodule_size)
- Size on the prior scan: ___ (prior_nodule_size)
- Nodule compared with the prior scan: ___ (nodule_status)
- Suspicion of lung cancer on multidisciplinary review: ___ (suspicion)

# Measurement rules

- Nodules should be measured on lung windows and reported as the average diameter rounded to the nearest whole number
- For round nodules only a single diameter measurement is necessary
- Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules

# Scan technique for every screening and follow-up chest CT

- CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
- Parameters adjusted for individuals of smaller or larger size
- A systematic process for appropriate follow-up is in place

# Solid nodule unchanged on follow-up LDCT

- Nodule <8 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Nodule ≥8 mm to <15 mm
    - LDCT in 6 mo
    - Unchanged, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Nodule ≥15 mm
    - LDCT in 6 mo, or FDG-PET/CT
        - FDG-PET has a low sensitivity for nodules with <8 mm of solid component and for small nodules near the diaphragm
        - FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
        - In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher
    - After FDG-PET/CT, lower suspicion of lung cancer, LDCT in 6 mo
    - After FDG-PET/CT, higher suspicion of lung cancer, biopsy or surgical excision

# Solid nodule unchanged on annual LDCT

- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Ideally the annual LDCT is performed 12 months from the initial or interval scan

# Determining suspicion of lung cancer

- Requires a multidisciplinary approach with expertise in lung nodule management
    - Thoracic radiology
    - Pulmonary medicine
    - Thoracic surgery
- May include use of a lung nodule risk calculator to assist with probability determination
    - Examples: Mayo risk model, Brock university model, and the model by Herder
    - The use of risk calculators does not replace multidisciplinary nodule management
    - Geographic and other factors can substantially influence the accuracy of nodule calculators

# Biopsy or surgical excision

- Tissue samples need to be adequate for both histology and molecular testing
- If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months)
- See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer
- Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis is required
    - Thoracic surgery, pulmonology, and interventional radiology
    - To determine feasibility along with the safest and most efficient approach for biopsy
    - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted
- SABR is also an appropriate option for individuals with high surgical risk
    - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Next

- Cancer confirmed, see the NCCN Guidelines for Non-Small Cell Lung Cancer
- No cancer, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months)
- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally performed 12 months from the initial or interval scan
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
