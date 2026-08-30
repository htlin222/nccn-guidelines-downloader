+++
id           = "breast-screening/BSCR-6"
gid          = "breast-screening"
ref          = "BSCR-6"
page         = 14
title        = "Diagnostic evaluation of a palpable breast symptom, by age and imaging category"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-5", "BSCR-7", "BSCR-15", "BSCR-1"]

[facets]
disease   = "breast-screening"
timepoint = ["diagnosis", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "symptom"
type = "text"
[[variables]]
name = "clock_quadrant"
type = "text"
[[variables]]
name = "nipple_distance"
type = "text"
[[variables]]
name = "cbe_suspicion"
type = "enum"
options = ["clinically suspicious", "low suspicion"]
[[variables]]
name = "birads"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-6, p14
- Applies to a patient presenting with a palpable symptom
- Path is presenting signs/symptoms, then diagnostic evaluation, then imaging findings, then follow-up
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Palpable symptom ___ (symptom)
- Location of the physical finding, clock/quadrant ___ (clock_quadrant)
- Distance from nipple ___ (nipple_distance)
- Clinical breast examination (CBE) impression ___ (cbe_suspicion)

# What counts as a palpable symptom

- Mass
- New-onset asymmetric thickening/nodularity
- Asymmetric breast enlargement
- Change in shape/contour, which may be due to implant rupture
    - See https://www.fda.gov/media/131885/download
- Document the location of physical findings from CBE
    - It is critical that this be documented
    - Record as clock/quadrant location and distance from nipple
    - Purpose is to facilitate geographic correlation with imaging findings

# Diagnostic evaluation, age 30 y or older

- Diagnostic mammogram with tomosynthesis
    - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
- Plus ultrasound
    - Ultrasound may not be necessary for a palpable finding with a definitively benign finding (eg, calcified fat necrosis) on mammogram
    - CEM in combination with ultrasound may be used as an alternative if available

# Diagnostic evaluation, age under 30 y

- If clinically suspicious, ultrasound preferred
    - If high suspicion for malignancy by ultrasound, obtain diagnostic mammogram
- If low suspicion on clinical breast examination (CBE), consider observing for 1–2 menstrual cycles
    - Symptom persists, proceed to diagnostic evaluation
    - Symptom resolves, return to screening (BSCR-1)

# Imaging findings

- Act on the highest imaging category by mammogram and/or ultrasound ___ (birads)
- BI-RADS category 1 (negative)
- BI-RADS category 2 (benign)
- BI-RADS category 3 (probably benign)
- BI-RADS category 4 (suspicious)
- BI-RADS category 5 (highly suggestive of malignancy)

# Next

- BI-RADS category 1, 2, or 3, go to BSCR-7
- BI-RADS category 4 or 5, core needle biopsy (BSCR-15)
    - Confirm geographic correlation between clinical and imaging findings
- Symptom resolves during observation, return to screening (BSCR-1)
