+++
id           = "lung_screening/LCS-2"
gid          = "lung_screening"
ref          = "LCS-2"
page         = 8
title        = "Screening findings on LDCT: route the finding by nodule type and by whether this is the initial or a follow-up scan"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-3", "LCS-4", "LCS-5", "LCS-7", "LCS-8", "LCS-9", "LCS-10", "LCS-11"]

[facets]
disease   = "lung_screening"
timepoint = "screening"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "scan_type"
type = "enum"
options = ["initial", "follow-up", "annual"]
[[variables]]
name = "scan_date"
type = "text"
[[variables]]
name = "finding"
type = "enum"
options = ["nodule", "no-nodule", "benign-appearance", "other-abnormality"]
[[variables]]
name = "nodule_type"
type = "enum"
options = ["solid", "part-solid", "nonsolid", "multiple"]
[[variables]]
name = "nodule_size"
type = "text"
[[variables]]
name = "nodule_count"
type = "number"
[[variables]]
name = "infection_suspected"
type = "enum"
options = ["yes", "no"]

+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-2, p8
- Applies to evaluation of screening findings on LDCT
- Footnotes on LCS-2A
- These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number (mm)
- Use of a tracking tool, in addition to a navigation process, is recommended
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- Scan is the ___ (scan_type) screening LDCT
- Finding on this LDCT: ___ (finding)
- Nodule type: ___ (nodule_type)
- Nodule size (mean measurement rounded to the nearest whole number, mm): ___ (nodule_size)
- Number of nodules: ___ (nodule_count)
- Infection or inflammation suspected: ___ (infection_suspected)

# Scan technique to confirm

- CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
- A systematic process for appropriate follow-up is in place
- Nodules evaluated and measured on the LDCT lung windows
    - Size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules

# Nodule definitions

- A nodule is a three-dimensional (3D) opacity measuring up to 3 cm in diameter
- Solid nodule: homogeneous soft-tissue attenuation
- Nonsolid nodule (also known as ground-glass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
- Part-solid nodule: elements of both solid and nonsolid nodules

# Initial screening LDCT

- Solid nodule, go to LCS-3
- Part-solid nodule, go to LCS-4
- Nonsolid nodule, go to LCS-5
- Multiple nonsolid nodules, go to LCS-11
- Each of the above requires the nodule to be without a benign pattern of calcification, without fat in the nodule suggestive of hamartoma, and without features suggesting inflammatory etiology

# Follow-up or annual screening LDCT

- Ideally the annual LDCT is performed 12 months from the initial or interval scan
- Lung nodule(s) on LDCT, no suspected infection or inflammation
    - Solid nodule(s), go to LCS-7 and LCS-8
    - Part-solid nodule(s), go to LCS-9
    - Nonsolid nodule, go to LCS-10
    - Multiple nodules, go to LCS-11
    - Each of the above requires the nodule to be without a benign pattern of calcification, without fat in the nodule suggestive of hamartoma, and without features suggesting inflammatory etiology
- Lung nodule(s) on LDCT, suspected infection or inflammation
    - LDCT in 1 to 3 months
    - When multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, follow-up LDCT in 1 to 3 months is suggested
    - Persistent or enlarging, evaluate by nodule type
        - Solid nodule(s), go to LCS-7 and LCS-8
        - Part-solid nodule(s), go to LCS-9
        - Nonsolid nodule, go to LCS-10
        - Multiple nodules, go to LCS-11
    - Resolving, repeat LDCT in 3 to 6 months until resolution or stability
    - Resolved, return to annual screening LDCT
- No lung nodule(s) on LDCT, return to annual screening LDCT
- Benign appearance, return to annual screening LDCT
    - Examples: perifissural nodules, benign patterns of calcification, fat-containing nodules
- Other radiographic abnormality
    - Examples: other potential malignancy, emphysema, interstitial lung disease (ILD), moderate to severe coronary arterial calcification (CAC), aortic aneurysm

# Next

- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally performed 12 months from the initial or interval scan
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
