+++
id           = "breast-screening/BSCR-18"
gid          = "breast-screening"
ref          = "BSCR-18"
page         = 26
title        = "Assessment category and follow-up after mammographic and/or ultrasound evaluation"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-1", "BSCR-15", "BSCR-C"]

[facets]
disease   = "breast-screening"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "imaging_performed"
type = "enum"
options = ["mammogram", "ultrasound", "mammogram-and-ultrasound"]
[[variables]]
name = "finding_location"
type = "text"
[[variables]]
name = "prior_comparison"
type = "enum"
options = ["prior-mammograms-available", "no-priors-available"]
[[variables]]
name = "birads"
type = "text"
[[variables]]
name = "interval_change"
type = "enum"
options = ["stable", "resolving", "now-definitively-benign", "increased-suspicion"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-18, p26
- Applies to follow-up after mammographic and/or ultrasound evaluation
- Assessment category definitions are on BSCR-C
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Imaging performed ___ (imaging_performed)
- Finding location ___ (finding_location)
- Prior mammograms for comparison ___ (prior_comparison)
- BI-RADS assessment category ___ (birads)
- If probably benign, change on follow-up imaging ___ (interval_change)

# BI-RADS category 0 (Need additional imaging evaluation)

- Diagnostic workup
    - Comparison to prior mammograms
    - Diagnostic mammogram with tomosynthesis
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - And/or ultrasound as indicated
    - Attention to timely diagnostic follow-up after abnormal breast screening is recommended, as racial disparities have been observed in time to diagnostic imaging and/or biopsy following abnormal breast screening
- Then see the appropriate final assessment category (BSCR-C)

# BI-RADS category 1 (Negative)

- Screening (BSCR-1)

# BI-RADS category 2 (Benign finding)

- Screening (BSCR-1)

# BI-RADS category 3 (Probably benign finding)

- Imaging to assess for changes
    - Ultrasound or diagnostic mammogram with tomosynthesis
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - Imaging modality would depend on original imaging
    - Probably benign findings are typically monitored at 6, 12, and 24 months
    - If a return visit is uncertain or there is strong patient preference, may include biopsy
- Stable, or resolving, or now definitively benign imaging characteristics
    - Screening (BSCR-1)
- Increased suspicion
    - After complete imaging evaluation, tissue sampling by image-guided core needle biopsy
    - Follow-up after core needle biopsy (BSCR-15)

# BI-RADS category 4 (Suspicious abnormality)

- Core needle biopsy
- Follow-up after core needle biopsy (BSCR-15)

# BI-RADS category 5 (Highly suggestive of malignancy)

- Core needle biopsy
- Follow-up after core needle biopsy (BSCR-15)

# BI-RADS category 6 (Known biopsy-proven malignancy)

- See NCCN Guidelines for Breast Cancer

# Next

- BI-RADS category 0, complete the diagnostic workup, then see the appropriate final assessment category (BSCR-C)
- BI-RADS category 1, go to screening (BSCR-1)
- BI-RADS category 2, go to screening (BSCR-1)
- BI-RADS category 3 that is stable or resolving or now definitively benign, go to screening (BSCR-1)
- BI-RADS category 3 with increased suspicion, image-guided core needle biopsy, go to BSCR-15
- BI-RADS category 4, core needle biopsy, go to BSCR-15
- BI-RADS category 5, core needle biopsy, go to BSCR-15
- BI-RADS category 6, see NCCN Guidelines for Breast Cancer
