+++
id           = "breast-screening/BSCR-8"
gid          = "breast-screening"
ref          = "BSCR-8"
page         = 16
title        = "Management of nipple inversion/retraction without palpable mass"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-1", "BSCR-6", "BSCR-9", "BSCR-10", "BSCR-15", "BSCR-16", "BSCR-18"]

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
name = "onset"
type = "enum"
options = ["acquired-new-onset", "congenital-lifelong"]
[[variables]]
name = "duration"
type = "text"
[[variables]]
name = "recent_changes"
type = "enum"
options = ["recent-changes", "no-recent-changes"]
[[variables]]
name = "discharge"
type = "text"
[[variables]]
name = "discharge_color"
type = "text"
[[variables]]
name = "inflammation"
type = "text"
[[variables]]
name = "clinical_suspicion"
type = "enum"
options = ["low", "suspicious"]
[[variables]]
name = "birads"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-8, p16
- Presenting sign/symptom: nipple inversion/retraction without palpable mass
- For palpable mass, see BSCR-6 instead
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) nipple
- Nipple inversion/retraction, no palpable mass
- Onset ___ (onset)
    - Acquired/new onset of nipple retraction
    - Congenital/life-long nipple inversion
- Duration ___ (duration)
- If congenital/life-long: recent changes ___ (recent_changes)
- Nipple discharge ___ (discharge), color ___ (discharge_color)
- Evidence of inflammation ___ (inflammation)
- Clinical suspicion ___ (clinical_suspicion)
- BI-RADS category assessed ___ (birads)

# Diagnostic evaluation

- Perform CBE with attention to:
    - Presence of nipple discharge and color
        - If nipple discharge is present, see also BSCR-9
    - Evidence of inflammation
        - Erythema
        - Fistula on areola or nipple
        - Purulent discharge
        - Tenderness
        - For evidence of inflammation, see also BSCR-10
- Breast imaging
    - Age <30 y: breast ultrasound
        - If high suspicion for malignancy by ultrasound, obtain diagnostic mammogram
    - Age >=30 y: diagnostic mammogram with tomosynthesis and breast ultrasound
        - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
- Congenital/life-long nipple inversion, no recent changes
    - Reassurance
    - Screening (BSCR-1)
    - Continue regular screening with age-appropriate imaging modality
    - Patients should be instructed to monitor for and report any changes
- Congenital/life-long nipple inversion with recent changes: proceed with the diagnostic evaluation above
- Acquired/new onset of nipple retraction: proceed with the diagnostic evaluation above

# Follow-up by imaging finding

- BI-RADS category 1 (negative) or BI-RADS category 2 (benign)
    - Low clinical suspicion
        - Screening (BSCR-1)
        - Continue regular screening with age-appropriate imaging modality
        - Patients should be instructed to monitor for and report any changes
    - Clinically suspicious
        - Consider referral to breast specialist
        - Consider breast MRI with and without contrast
        - Abnormal clinical and/or MRI imaging findings: core needle biopsy (BSCR-15)
        - Normal clinical and MRI imaging findings, low clinical suspicion
            - Physical examination at 6 mo
            - Plus or minus diagnostic mammogram with tomosynthesis
            - Plus or minus ultrasound for 1-2 y
            - Imaging modality would depend on original imaging
            - Probably benign findings are typically monitored at 6, 12, and 24 months
            - Patients should be instructed to monitor for and report any changes
            - Consider referral to breast specialist
        - Normal clinical and MRI imaging findings, clinically suspicious: core needle biopsy (BSCR-15)
- BI-RADS category 3 (probably benign)
    - Mammographic and/or ultrasound evaluation if BI-RADS category 3 assessed (BSCR-18)
- BI-RADS 4 (suspicious) or BI-RADS 5 (highly suggestive of malignancy)
    - Core needle biopsy (BSCR-15)
    - Surgical excision if not amenable to core needle biopsy (BSCR-16)

# Next

- No recent changes in congenital/life-long nipple inversion, or BI-RADS 1/2 with low clinical suspicion, go to BSCR-1
- BI-RADS category 3 assessed, go to BSCR-18
- Biopsy indicated, go to BSCR-15
- Not amenable to core needle biopsy, go to BSCR-16
- Nipple discharge present, see also BSCR-9
- Evidence of inflammation, see also BSCR-10
- Palpable mass present, see BSCR-6
