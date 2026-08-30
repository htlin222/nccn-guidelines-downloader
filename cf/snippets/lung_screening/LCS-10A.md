+++
id           = "lung_screening/LCS-10A"
gid          = "lung_screening"
ref          = "LCS-10A"
page         = 23
title        = "Footnotes for the nonsolid nodule follow-up pathway: CT dose, thin-slice review, the 20 mm versus 30 mm nonsolid threshold, biopsy, and treatment"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-10", "LCS-9", "LCS-8A", "LCS-6", "LCS-1"]

[facets]
disease   = "lung_screening"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "nodule_type"
type = "enum"
options = ["solid", "part-solid", "nonsolid", "none"]
[[variables]]
name = "mean_diameter_mm"
type = "number"
[[variables]]
name = "solid_component_mm"
type = "number"
[[variables]]
name = "slice_thickness_mm"
type = "number"
[[variables]]
name = "ctdi_vol"
type = "number"
[[variables]]
name = "months_since_last_scan"
type = "number"
[[variables]]
name = "new_nodule"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biopsy_result"
type = "text"
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-10A, p23
- Footnotes for the nonsolid nodule follow-up pathway (LCS-10)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Interval since the initial or interval scan: ___ (months_since_last_scan) months
- CT dose index volume used on this scan: ___ (ctdi_vol) mGy
- Slice thickness the nonsolid lesion was reviewed at: ___ (slice_thickness_mm) mm
- Nodule on this LDCT: ___ (nodule_type)
- Mean diameter, rounded to the nearest whole number: ___ (mean_diameter_mm) mm
- Solid component: ___ (solid_component_mm) mm
- Nodule is new since the prior scan: ___ (new_nodule)
- Biopsy result, if already obtained: ___ (biopsy_result)

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

- A nodule is a 3D opacity, measuring up to 3 cm in diameter
    - Solid nodule: homogeneous soft-tissue attenuation
    - Nonsolid nodule (also known as a groundglass nodule): hazy increased attenuation that does not obliterate bronchial and vascular margins
    - Part-solid nodule: elements of both solid and nonsolid nodules
- Nodules should be evaluated and measured on the LDCT lung windows
    - The size of all nodules is underestimated when viewed on soft-tissue windows
    - Some nodules may not even be visible on soft-tissue windows, particularly nonsolid nodules and small nodules
    - Bankier AA, et al. Radiology 2017;285:584-600
- Report the average diameter rounded to the nearest whole number
    - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
    - For round nodules only a single diameter measurement is necessary
- Harmonized with Lung-RADS, with rounding of the mean measurement to the nearest whole number (mm)

# Nonsolid lesions specifically

- It is crucial that all nonsolid lesions be reviewed at thin (≤1.5 mm) slices to exclude any solid components
    - Any solid component in the nodule requires management of the lesion with the part-solid recommendations (LCS-9)
- Lung-RADS 1.1 has increased the size of a nonsolid nodule that can continue with annual screening to <30 mm, rather than <20 mm as recommended in the previous version
    - The NCCN Guidelines Panel has not harmonized this portion of the Lung-RADS update
    - Panel consensus is that baseline or new nonsolid nodules ≥20 mm should have an earlier evaluation at 6 months

# New nodule and rapid growth

- A new nodule is defined as ≥4 mm in mean diameter
- Rapid increase in size should raise suspicion of inflammatory etiology or malignancy other than non-small cell lung cancer (LCS-6)

# Screening interval and duration

- Ideally, the annual LDCT is performed 12 months from the initial or interval scan
- If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate

# Multidisciplinary evaluation

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
- Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis is required
    - Thoracic surgery
    - Pulmonology
    - Interventional radiology
    - To determine feasibility along with the safest and most efficient approach for biopsy
    - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted

# Biopsy and tissue

- Tissue samples need to be adequate for both histology and molecular testing
    - Travis WD, et al. In: WHO Classification of Thoracic Tumors, 5th Ed. Lyon: International Agency for Research on Cancer; 2021:29-36
- If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest one of the following
    - Repeat biopsy
    - Surgical excision
    - Short-interval LDCT follow-up (3 months)
- See the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Treatment

- SABR is also an appropriate option for individuals with high surgical risk
    - This should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - See Principles of Radiation Therapy in the NCCN Guidelines for Non-Small Cell Lung Cancer

# Shared decision-making

- Individual preferences should be taken into account when deciding between the following, in consultation with expert recommendations
    - Follow-up with LDCT in 6 months
    - Use of invasive procedures
