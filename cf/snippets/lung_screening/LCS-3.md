+++
id           = "lung_screening/LCS-3"
gid          = "lung_screening"
ref          = "LCS-3"
page         = 10
title        = "Follow-up of a solid nodule found on initial screening LDCT"
nccn_version = "1.2026"
nccn_date    = "09/16/2025"
generated    = "2026-08-30"
see_also     = ["LCS-1", "LCS-2", "LCS-4", "LCS-7", "LCS-8"]

[facets]
disease   = "lung_screening"
timepoint = ["screening", "diagnosis"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "nodule_mm"
type = "number"
[[variables]]
name = "nodule_location"
type = "text"
[[variables]]
name = "suspicion"
type = "enum"
options = ["lower", "higher"]
+++

# Source

- NCCN Lung Cancer Screening v1.2026, LCS-3, p10
- Applies to a solid nodule seen on an initial screening LDCT
- Footnotes on LCS-3A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, initial screening LDCT
- Solid nodule, mean diameter ___ (nodule_mm) mm
    - A nodule is a 3D opacity, measuring up to 3 cm in diameter
    - A solid nodule has homogeneous soft-tissue attenuation
    - Evaluate and measure on the LDCT lung windows
        - Size is underestimated on soft-tissue windows, and some nodules may not even be visible there
    - Report as the average diameter rounded to the nearest whole number
        - Mean diameter is the mean of the longest diameter of the nodule and its perpendicular diameter
        - For round nodules only a single diameter measurement is necessary
    - These guidelines are harmonized with Lung-RADS, with rounding of mean measurement to the nearest whole number
- Location: ___ (nodule_location)
- No benign pattern of calcification
- No fat in nodule suggestive of hamartoma
- No features suggesting inflammatory etiology
    - If multiple nodules or other findings are present that suggest occult infection or inflammation is a possibility, suggest follow-up LDCT in 1-3 months
- Tracking tool in use, in addition to a navigation process
    - To systematically ensure that individuals with screen-detected lung nodules complete guideline-concordant nodule management
    - And that individuals without significant screen-detected abnormalities continue annual screening if they remain eligible

# CT technique, applies to all screening and follow-up chest CT

- CT dose index volume (CTDIvol) threshold of 3 mGy or less for an individual of average size
    - Unless evaluating mediastinal abnormalities or lymph nodes, where standard-dose CT with IV contrast might be appropriate (LCS-A)
    - Adjust parameters for individuals of smaller or larger size
- There should be a systematic process for appropriate follow-up
- Annual LDCT is ideally performed 12 months from the initial or interval scan
- If intervening CT scans are done, they may be used to reset the time schedule of ongoing lung cancer screening follow-up
- There is uncertainty about the appropriate duration of screening and the age at which screening is no longer appropriate

# Follow-up by nodule size

- Nodule under 6 mm
    - Annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
- Nodule 6 mm or more and under 8 mm
    - LDCT in 6 mo
- Nodule 8 mm or more and under 15 mm
    - LDCT in 3 mo, or
    - Consider fluorodeoxyglucose (FDG)-PET/CT
- Nodule 15 mm or more
    - Chest CT with contrast, and/or
    - FDG-PET/CT, and/or
    - Tissue sampling
- Solid endobronchial nodule
    - LDCT within 1 mo, immediately after vigorous coughing
    - If no resolution, bronchoscopy

# If FDG-PET/CT is used

- FDG-PET has a low sensitivity for nodules with under 8 mm of solid component, and for small nodules near the diaphragm
- FDG-PET/CT is only one consideration of multiple criteria for determining whether a nodule has a high risk of being lung cancer
- In areas endemic for fungal disease, the false-positive rate for FDG-PET/CT is higher

# Determining suspicion of lung cancer

- Suspicion: ___ (suspicion)
- Requires a multidisciplinary approach with expertise in lung nodule management
    - Thoracic radiology, pulmonary medicine, and thoracic surgery
- May include use of a lung nodule risk calculator to assist with probability determination
    - Examples: Mayo risk model, Brock university model, model by Herder GJ, et al
    - Use of risk calculators does not replace multidisciplinary nodule management
    - Geographic and other factors can substantially influence the accuracy of nodule calculators
- Lower suspicion of lung cancer
    - LDCT in 3 mo
- Higher suspicion of lung cancer
    - Biopsy
        - Tissue samples need to be adequate for both histology and molecular testing
        - If biopsy is non-diagnostic and a strong suspicion for cancer persists, suggest repeat biopsy, surgical excision, or short-interval LDCT follow-up at 3 months
    - or Surgical excision
        - Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis (thoracic surgery, pulmonology, and interventional radiology) is required
            - To determine feasibility along with the safest and most efficient approach for biopsy
            - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted
        - SABR is also an appropriate option for individuals with high surgical risk
            - Should include a multidisciplinary evaluation, including at least thoracic surgery and radiation oncology
    - For either arm, see the diagnostic evaluation of a lung nodule (DIAG-1 through DIAG-A) in the NCCN Guidelines for Non-Small Cell Lung Cancer
    - A biopsy before surgery is not required for individuals with a strong probability of peripheral stage I lung cancer, based on risk factors and radiologic appearance
        - A biopsy adds time, cost, and procedural risk and may not be needed for treatment decisions
        - A preoperative biopsy may be appropriate for a central nodule or mass, or if a non-lung cancer diagnosis is strongly suspected and can be diagnosed by bronchoscopy, core biopsy, or fine-needle aspiration (FNA), or if an intraoperative diagnosis appears difficult or very risky
        - When a preoperative tissue diagnosis has not been obtained, an intraoperative diagnosis (wedge resection or needle biopsy) is necessary before lobectomy, bilobectomy, or pneumonectomy

# Next

- Any follow-up LDCT performed, go to Evaluation of Screening Findings (LCS-7 and LCS-8)
- Cancer confirmed, see NCCN Guidelines for Non-Small Cell Lung Cancer
- No cancer, annual screening LDCT until the individual is no longer a candidate for curative-intent treatment (LCS-1)
