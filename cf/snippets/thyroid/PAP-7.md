+++
id           = "thyroid/PAP-7"
gid          = "thyroid"
ref          = "PAP-7"
page         = 21
title        = "Disease monitoring after treatment of papillary carcinoma, and management of abnormal findings"
nccn_version = "2.2026"
nccn_date    = "06/02/2026"
generated    = "2026-08-27"
see_also     = ["PAP-2", "PAP-8", "PAP-9", "PAP-10"]

[facets]
disease   = "thyroid"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "surgery"
type = "enum"
options = ["lobectomy", "total thyroidectomy without RAI", "total thyroidectomy with RAI"]
[[variables]]
name = "interval_since_treatment"
type = "text"
[[variables]]
name = "exam"
type = "text"
[[variables]]
name = "tsh"
type = "text"
[[variables]]
name = "tg"
type = "text"
[[variables]]
name = "tgab"
type = "text"
[[variables]]
name = "neck_us"
type = "text"
+++

# Source

- NCCN Thyroid Carcinoma v2.2026, PAP-7, p21
- Papillary carcinoma, disease monitoring after treatment
- Monitoring column depends on which treatment was given: lobectomy, total thyroidectomy without RAI, or total thyroidectomy with RAI (PAP-8)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Papillary carcinoma, treated with ___ (surgery)
- ___ (interval_since_treatment) since treatment
- Physical examination ___ (exam)
- TSH ___ (tsh)
- Tg ___ (tg) / TgAb ___ (tgab)
- Neck ultrasound ___ (neck_us)

# Monitoring after lobectomy

- Physical examination
- TSH
- Neck ultrasound at 6-12 months
- Consider a one-time Tg and TgAb measurement
    - Data are currently lacking for a specific cutoff
    - If very elevated in the absence of other causes, consider further imaging
        - Other causes include bilateral nodules
        - Other causes include renal insufficiency
- Trending Tg is not currently recommended after lobectomy, due to its limited utility

# Monitoring after total thyroidectomy without RAI

- Physical examination
- TSH
- Tg and TgAb measurement at 6-12 weeks
- Neck ultrasound at 6-12 months

# Monitoring after total thyroidectomy with RAI

- See PAP-8 for the treatment itself
- Physical examination
- TSH, goal based on risk stratification
- Tg and TgAb measurement annually if stable
- Neck ultrasound as clinically indicated

# Findings and management

- Contralateral nodule meeting FNA criteria, or abnormal lymph node
    - FNA criteria by TI-RADS or ATA
    - Biopsy of suspicious areas
        - If lymph node, consider Tg washout
- Rising Tg or new TgAb
    - Consider additional imaging
        - Neck CT or MRI with contrast
        - Chest or abdomen CT
        - FDG-PET
        - RAI imaging
    - Abnormal imaging and/or rising Tg
        - Biopsy of suspicious areas on imaging
            - Consider Tg washout
- No evidence of disease (NED)
    - Physical examination
    - Neck ultrasound as clinically indicated
    - See NCCN Guidelines for Survivorship
    - After 10-15 years of no recurrence for patients at low risk, no further monitoring for thyroid cancer is indicated

# Next

- Contralateral nodule on biopsy, go to Clinical Presentation (PAP-2)
- Recurrent disease, go to PAP-9
- Metastatic disease, go to PAP-10
- No evidence of disease, continue monitoring as above
