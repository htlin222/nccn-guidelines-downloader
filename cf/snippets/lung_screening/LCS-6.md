+++
id           = "lung_screening/LCS-6"
gid          = "lung_screening"
ref          = "LCS-6"
page         = 15
title        = "New nodule on follow-up or annual LDCT: route by whether infection or inflammation is suspected, then by nodule type"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-7", "LCS-8", "LCS-9", "LCS-10", "LCS-11"]

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
name = "nodule_type"
type = "enum"
options = ["solid", "part-solid", "nonsolid", "multiple-nonsolid"]
[[variables]]
name = "nodule_count"
type = "number"
[[variables]]
name = "infection_suspected"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-6, p15
- Applies to a new nodule found on a follow-up or annual screening LDCT
- A new nodule is defined as 4 mm or greater in mean diameter
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- LDCT performed ___ (scan_date)
- This scan is the ___ (scan_type) screening LDCT
- New nodule mean diameter: ___ (nodule_size)
    - Confirm it is 4 mm or greater in mean diameter before calling it a new nodule
- Nodule type: ___ (nodule_type)
    - A nodule is a three-dimensional (3D) opacity measuring up to 3 cm in diameter
    - Solid nodule: homogeneous soft-tissue attenuation
    - Nonsolid nodule (also known as ground-glass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
    - Part-solid nodule: elements of both solid and nonsolid nodules
- Number of new nodules: ___ (nodule_count)
- Infection or inflammation suspected: ___ (infection_suspected)

# Scan technique and process to confirm

- Nodule evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- All screening and follow-up chest CT scans use a CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters adjusted for individuals of smaller or larger size
- There is a systematic process for appropriate follow-up
- A tracking tool, in addition to a navigation process, is in use
    - So that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - So that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# Suspected infection or inflammation

- LDCT in 1 to 3 months
- Resolving on that LDCT
    - Repeat LDCT in 3 to 6 months to resolution or stability
- Resolved
    - Return to annual screening LDCT
- Persistent or enlarging
    - Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer
    - Evaluate by nodule type, as below

# No suspected infection or inflammation

- Evaluate by nodule type
    - Solid nodule(s), go to LCS-7 and LCS-8
    - Part-solid nodule(s), go to LCS-9
    - Nonsolid nodule, go to LCS-10
    - Multiple nonsolid nodules, go to LCS-11

# Next

- Solid nodule(s), Evaluation of Screening Findings (LCS-7 and LCS-8)
- Part-solid nodule(s), Evaluation of Screening Findings (LCS-9)
- Nonsolid nodule, Evaluation of Screening Findings (LCS-10)
- Multiple nonsolid nodules, Evaluation of Screening Findings (LCS-11)
- Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally the annual LDCT is performed 12 months from the initial or interval scan
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
