+++
id           = "ovarian/LCOC-2"
gid          = "ovarian"
ref          = "LCOC-2"
page         = 16
title        = "Adjuvant treatment of ovarian carcinosarcoma (MMMT), and the exit to maintenance or follow-up"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-1", "OV-3", "OV-5", "OV-6"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III", "IV"]
biomarker = ["brca", "any"]
timepoint = ["adjuvant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "surgical_staging_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "residual_disease"
type = "text"
[[variables]]
name = "biomarker_testing_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "brca_status"
type = "text"
[[variables]]
name = "hr_status"
type = "enum"
options = ["deficient", "proficient", "unknown"]
+++

# Source

- NCCN Ovarian Cancer v4.2026, Less Common Ovarian Cancers, LCOC-2, p16
- Applies to carcinosarcoma (malignant mixed Mullerian tumors, MMMTs) of the ovary
- Pathologic diagnosis per WHO Histologic Classification (OV-F)
- Entered from LCOC-1
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Stage ___ (stage)
- Surgical staging done: ___ (surgical_staging_done)
- Residual disease: ___ (residual_disease)
- Germline and somatic biomarker testing done: ___ (biomarker_testing_done)
- BRCA1/2 status: ___ (brca_status)
- HR status: ___ (hr_status)

# Before starting adjuvant treatment

- If not previously done, consider surgical staging and resection of residual disease (OV-3)
- If not previously done, consider germline and somatic biomarker testing (OV-C)
- Germline and somatic BRCA1/2 status informs maintenance therapy
    - In the absence of a BRCA1/2 mutation, HRD status may provide information on the magnitude of benefit of PARPi therapy
    - For PARPi therapy in advanced stage disease, include measure of HR (OV-C)

# Adjuvant treatment

- IV carboplatin/paclitaxel every 3 weeks (preferred)
    - See Principles of Systemic Therapy (OV-D)
    - See Management of Drug Reactions (OV-E)
- or Other systemic therapy
    - Stage I (OV-D, 5 of 12)
    - Stage II-IV (OV-D, 6 of 12)
    - See Management of Drug Reactions (OV-E)

# Next

- Stage I
    - Monitoring/Follow-up (including tumor biomarker testing) and Recurrence therapy (OV-6)
- Stage II-IV
    - If known BRCA1/2 mutation, consider maintenance therapy (post-primary therapy) (OV-5)
    - Monitoring/Follow-up (including tumor biomarker testing) and Recurrence therapy (OV-6)
- Data are limited on primary and maintenance therapy for recurrent/persistent LCOC
