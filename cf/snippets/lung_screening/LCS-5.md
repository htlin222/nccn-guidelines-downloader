+++
id           = "lung_screening/LCS-5"
gid          = "lung_screening"
ref          = "LCS-5"
page         = 14
title        = "Nonsolid nodule on initial screening LDCT: follow-up interval by nodule size"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-9", "LCS-10"]

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
name = "nodule_location"
type = "text"
[[variables]]
name = "nodule_size"
type = "number"
[[variables]]
name = "solid_component"
type = "enum"
options = ["none", "present"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-5, p14
- Applies to a nonsolid nodule on initial screening LDCT
- A nodule is a 3D opacity, measuring up to 3 cm in diameter
- A nonsolid nodule (also known as a groundglass nodule) has hazy increased attenuation that does not obliterate bronchial and vascular margins
- Applies only without benign pattern of calcification, without fat in nodule suggestive of hamartoma, and without features suggesting inflammatory etiology
- These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number (mm)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, initial screening LDCT on ___ (scan_date)
- Nonsolid nodule, ___ (nodule_location)
- Mean diameter ___ (nodule_size) mm
    - Nodules should be evaluated and measured on the LDCT lung windows
    - Reported as the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
    - The size of all nodules is underestimated when viewed on soft-tissue windows, and some nodules may not even be visible, particularly nonsolid nodules and small nodules
- Solid component ___ (solid_component)
    - All nonsolid lesions must be reviewed at thin (≤1.5 mm) slices to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- No benign pattern of calcification
- No fat in nodule suggestive of hamartoma
- No features suggesting inflammatory etiology
    - When multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, suggest follow-up LDCT in 1–3 months

# Follow-up by nodule size

- Nonsolid nodule <20 mm
    - Annual screening LDCT until individual is no longer a candidate for curative-intent treatment (LCS-1)
    - Ideally, the annual LDCT is performed 12 months from the initial or interval scan
    - If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
    - There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate
- Nonsolid nodule ≥20 mm
    - LDCT in 6 mo
    - Lung-RADS 1.1 has increased the size of a nonsolid nodule that can continue with annual screening to <30 mm, rather than <20 mm as recommended in the previous version
    - The NCCN Guidelines Panel has not harmonized this portion of the Lung-RADS update; the consensus among Panel members is that baseline or new nonsolid nodules ≥20 mm should have an earlier evaluation at 6 months

# LDCT technique and process

- All screening and follow-up chest CT scans should use a CT dose index volume threshold of ≤3 mGy for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Parameters should be adjusted for individuals of smaller or larger size
- There should be a systematic process for appropriate follow-up
- Use of a tracking tool, in addition to a navigation process, is recommended
    - To systematically ensure that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - And that individuals without significant screen detected abnormalities continue annual screening if they remain eligible

# Next

- Nonsolid nodule <20 mm, go to annual screening LDCT (LCS-1)
- Nonsolid nodule ≥20 mm, LDCT in 6 mo, then Evaluation of Screening Findings (LCS-10)
- Any solid component present, manage with the part-solid recommendations (LCS-9)
