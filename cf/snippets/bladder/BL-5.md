+++
id           = "bladder/BL-5"
gid          = "bladder"
ref          = "BL-5"
page         = 12
title        = "Management of positive urine cytology with negative imaging and negative cystoscopy"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-3", "BL-B", "BL-E", "BL-F", "UCP-1", "UTT-1"]

[facets]
disease   = "bladder"
stage     = "recurrent"
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cytology_date"
type = "text"
[[variables]]
name = "imaging_modality"
type = "text"
[[variables]]
name = "cystoscopy_date"
type = "text"
[[variables]]
name = "prior_bcg"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Bladder Cancer v2.2026, BL-5, p12
- Applies to recurrent or persistent disease at follow-up
- Follow-up results are cytology positive, imaging negative, cystoscopy negative
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Urine cytology positive, on ___ (cytology_date)
- Imaging negative, modality ___ (imaging_modality)
- Cystoscopy negative, on ___ (cystoscopy_date)
- Prior BCG ___ (prior_bcg)

# Evaluation to consider

- Repeat cytology within 3 months
- Selected mapping biopsies, including transurethral biopsy of the prostate
    - Principles of Surgical Management (BL-B)
- Cytology of upper tract
- Ureteroscopy
- Enhanced cystoscopy, if available
    - Principles of Surgical Management (BL-B)
    - If enhanced cystoscopy is not readily available, proceed to cystoscopy with bladder biopsies with or without uroscopy
- Non-urinary tract source (eg, vagina, cervix, rectum)
    - Referral to gynecology or other specialist, as appropriate

# Next

- Bladder, prostate, and upper tract negative
    - Follow-up at 3 mo, then at longer intervals (BL-E)
    - Or, if prior BCG, maintenance BCG (optional), Principles of Instillation Therapy (BL-F)
- Bladder positive, reclassify AUA Risk Group and manage accordingly (BL-3)
- Prostate positive, go to Urothelial Carcinoma of the Prostate (UCP-1)
- Upper tract positive, go to Upper GU Tract Tumors (UTT-1)
