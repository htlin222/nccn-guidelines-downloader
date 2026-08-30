+++
id           = "lung_screening/LCS-4"
gid          = "lung_screening"
ref          = "LCS-4"
page         = 12
title        = "Part-solid nodule on initial screening LDCT: choose the follow-up interval by nodule size and by the size of the solid component"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-3", "LCS-5", "LCS-9", "LCS-11"]

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
name = "nodule_size"
type = "text"
[[variables]]
name = "solid_component_size"
type = "text"
[[variables]]
name = "slice_thickness"
type = "text"
[[variables]]
name = "suspicion"
type = "enum"
options = ["lower", "higher"]

+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-4, p12
- Applies to a part-solid nodule on the initial screening LDCT
    - Part-solid nodule: elements of both solid and nonsolid nodules
    - A nodule is a three-dimensional (3D) opacity measuring up to 3 cm in diameter
    - Without benign pattern of calcification, without fat in nodule suggestive of hamartoma, and without features suggesting inflammatory etiology
    - When multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, follow-up LDCT in 1 to 3 months is suggested
- These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number (mm)
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
- All nonsolid lesions must be reviewed at thin slices (1.5 mm or less) to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- Footnotes on LCS-4A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Initial screening LDCT performed ___ (scan_date)
- Reviewed at thin slice thickness of ___ (slice_thickness)
- Part-solid nodule mean diameter, rounded to the nearest whole number (mm): ___ (nodule_size)
- Solid component size (mm): ___ (solid_component_size)
- Suspicion of lung cancer if solid component 8 mm or larger: ___ (suspicion)

# Measurement rules to confirm

- Nodules evaluated and measured on the LDCT lung windows
    - Size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- Reported as the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
- All part-solid nodules 6 mm or larger should be identified and solid areas should be measured
- Use of a tracking tool, in addition to a navigation process, is recommended
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# Follow-up by nodule size and solid component

- Part-solid nodule smaller than 6 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Part-solid nodule 6 mm or larger, with solid component smaller than 6 mm
    - LDCT in 6 months
- Part-solid nodule 6 mm or larger, with solid component 6 mm or larger to smaller than 8 mm
    - LDCT in 3 months
    - Or consider FDG-PET/CT
- Solid component 8 mm or larger
    - Chest CT with contrast and/or FDG-PET/CT
- All screening and follow-up chest CT scans use a CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
    - There should be a systematic process for appropriate follow-up
- FDG-PET has a low sensitivity for nodules with less than 8 mm of solid component and for small nodules near the diaphragm
    - FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
    - In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher

# Solid component 8 mm or larger, after chest CT with contrast and/or FDG-PET/CT

- Determine suspicion of lung cancer
    - Requires a multidisciplinary approach with expertise in lung nodule management (thoracic radiology, pulmonary medicine, and thoracic surgery)
    - May include use of a lung nodule risk calculator to assist with probability determination
    - Examples of lung nodule risk calculators: Mayo risk model, Brock University model, and the model by Herder
    - Use of risk calculators does not replace multidisciplinary nodule management
    - Geographic and other factors can substantially influence the accuracy of nodule calculators
- Lower suspicion of lung cancer
    - LDCT in 3 months
- Higher suspicion of lung cancer
    - Biopsy
        - Tissue samples need to be adequate for both histology and molecular testing
        - See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer
        - If biopsy is non-diagnostic and a strong suspicion for cancer persists, repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months) is suggested
    - Or surgical excision
        - See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer
        - Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis (thoracic surgery, pulmonology, and interventional radiology) is required
            - To determine feasibility along with the safest and most efficient approach for biopsy
            - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted
        - SABR is also an appropriate option for individuals with high surgical risk
            - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
            - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Next

- Interval LDCT done, go to evaluation of screening findings (LCS-9)
- Cancer confirmed, see NCCN Guidelines for Non-Small Cell Lung Cancer
- No cancer, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - If biopsy is non-diagnostic and a strong suspicion for cancer persists, repeat biopsy, surgical excision, or short-interval LDCT follow-up (3 months) is suggested
- Annual screening LDCT ideally performed 12 months from the initial or interval scan
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
