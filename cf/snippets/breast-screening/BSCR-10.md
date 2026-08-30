+++
id           = "breast-screening/BSCR-10"
gid          = "breast-screening"
ref          = "BSCR-10"
page         = 18
title        = "Diagnostic evaluation and follow-up of skin changes of the breast"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-5", "BSCR-18", "BSCR-C"]

[facets]
disease   = "breast-screening"
histology = ["inflammatory", "paget"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "skin_change"
type = "text"
[[variables]]
name = "ibc_signs"
type = "text"
[[variables]]
name = "paget_signs"
type = "text"
[[variables]]
name = "prior_rt"
type = "text"
[[variables]]
name = "infection_suspicion"
type = "text"
[[variables]]
name = "eczema_suspicion"
type = "text"
[[variables]]
name = "birads"
type = "text"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "biopsy_result"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-10, p18
- Applies to skin changes as the presenting sign/symptom
- Assessment category definitions: BSCR-C
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Skin change described ___ (skin_change)
- Signs suspicious for inflammatory breast cancer ___ (ibc_signs)
- Signs suspicious for Paget disease or other manifestations of breast cancer ___ (paget_signs)
- Prior history of RT ___ (prior_rt)
- Clinically low suspicion for breast cancer, or high suspicion for infection ___ (infection_suspicion)
- Clinically low suspicion for Paget disease, or high suspicion for eczema ___ (eczema_suspicion)
- Assessment category on diagnostic imaging ___ (birads)
- Breast MRI with and without contrast ___ (mri_findings)
- Biopsy result ___ (biopsy_result)

# What the skin change may represent

- Suspicion for possible inflammatory breast cancer, includes but is not limited to
    - Peau d'orange (pitted or dimpled appearance of skin)
    - Skin thickening
    - Edema
    - Erythema
    - If clinically low suspicion for breast cancer or high suspicion for infection, a short trial (eg, 7-10 days) of antibiotics for mastitis may be indicated
        - With short-term clinical follow-up after completion of antibiotics to assess for improvement/resolution
        - If not improved/resolved, continue with the workup recommended for skin changes
- Suspicion for possible Paget disease or other manifestations of breast cancer, includes but is not limited to
    - Nipple excoriation
    - Scaling
    - Skin ulceration
    - If clinically low suspicion for Paget disease or high suspicion for eczema, a short trial of topical steroids may be indicated
        - With clinical follow-up in 1-4 weeks to assess for improvement/resolution
        - If not improved/resolved, continue with the workup recommended for skin changes
- Suspicion for angiosarcoma, especially in patients with prior history of RT
    - Skin thickening
    - Skin discoloration

# Diagnostic evaluation

- Diagnostic mammogram with tomosynthesis
    - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
- With or without ultrasound
    - CEM may be considered if available when clinically suspicious
- Assign an assessment category (BSCR-C)

# BI-RADS category 1-3, negative, benign, or probably benign findings

- Consider referral to breast specialist
- Consider breast MRI with and without contrast
- Abnormal clinical findings
    - Biopsy of skin or nipple
        - Inflammatory breast cancer is a clinical diagnosis and is not dependent on a positive punch biopsy
- Abnormal MRI imaging findings
    - Core needle biopsy
- Normal clinical and MRI imaging findings
    - Follow-up per assessment category (BSCR-18)

# BI-RADS category 4-5, suspicious or highly suggestive of malignancy

- Core needle biopsy (preferred)

# Biopsy result

- Benign
    - A benign skin punch biopsy in a patient with a clinical suspicion of inflammatory breast cancer does not rule out malignancy, further evaluation is recommended
    - Consider surgical referral
    - Consider biopsy of skin or nipple, see the pathway above
    - Consider MRI with and without contrast
- Malignant
    - See NCCN Guidelines for Breast Cancer

# Next

- Normal clinical and MRI imaging findings, go to BSCR-18
- Benign biopsy, consider surgical referral, biopsy of skin or nipple, or MRI with and without contrast
- Malignant biopsy, see NCCN Guidelines for Breast Cancer
