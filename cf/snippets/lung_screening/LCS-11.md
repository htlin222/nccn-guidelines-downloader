+++
id           = "lung_screening/LCS-11"
gid          = "lung_screening"
ref          = "LCS-11"
page         = 24
title        = "Multiple nonsolid nodules on screening LDCT: which nodule drives management"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-4", "LCS-5", "LCS-6", "LCS-9", "LCS-10"]

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
name = "nodule_count"
type = "number"
[[variables]]
name = "largest_nodule_location"
type = "text"
[[variables]]
name = "largest_nodule_size"
type = "number"
[[variables]]
name = "nodule_pattern"
type = "enum"
options = ["pure-nonsolid", "dominant-part-solid"]
[[variables]]
name = "scan_type"
type = "enum"
options = ["initial", "follow-up-or-annual"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-11, p24
- Evaluation of screening findings for multiple nonsolid nodules
- A nodule is a 3D opacity, measuring up to 3 cm in diameter
- A nonsolid nodule (also known as a ground-glass nodule) has hazy increased attenuation that does not obliterate bronchial and vascular margins
- A solid nodule has a homogeneous soft-tissue attenuation
- A part-solid nodule has elements of both solid and nonsolid nodules
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, LDCT on ___ (scan_date)
- Scan is ___ (scan_type)
- Multiple nonsolid nodules, ___ (nodule_count) in number
- Largest nodule ___ (largest_nodule_location)
- Largest nodule mean diameter ___ (largest_nodule_size) mm
- Pattern ___ (nodule_pattern)
- New nodule is defined as ≥4 mm in mean diameter

# Imaging review before deciding

- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
- Nodules should be measured on lung windows and reported as the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
- Review all nonsolid lesions at thin (≤1.5 mm) slices to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- Identify all part-solid nodules ≥6 mm and measure the solid areas
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)

# Management by pattern

- Pure nonsolid nodules
    - Measure the largest nodule and manage based on LCS-5 or LCS-10
    - Measure on lung windows, average diameter rounded to the nearest whole number
- Dominant nodule(s) with part-solid component
    - Measure the largest nodule and manage based on LCS-4 or LCS-9
    - Measure on lung windows, average diameter rounded to the nearest whole number
    - All part-solid nodules ≥6 mm should be identified and solid areas should be measured

# Process

- Use of a tracking tool, in addition to a navigation process, is recommended
    - To systematically ensure that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - And that individuals without significant screen detected abnormalities continue annual screening if they remain eligible

# Next

- Pure nonsolid nodules, manage the largest nodule per LCS-5 or LCS-10
- Dominant nodule(s) with part-solid component, manage the largest nodule per LCS-4 or LCS-9
- Any solid component found on thin slices, manage with the part-solid recommendations (LCS-9)
- See NCCN Guidelines for Non-Small Cell Lung Cancer
