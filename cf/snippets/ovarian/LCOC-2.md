+++
id           = "ovarian/LCOC-2"
gid          = "ovarian"
ref          = "LCOC-2"
page         = 16
title        = "Adjuvant treatment and follow-up of ovarian carcinosarcoma (malignant mixed Mullerian tumor)"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["OV-3", "OV-5", "OV-6", "OV-C", "OV-D", "OV-E", "OV-F"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III", "IV"]
biomarker = ["brca", "any"]
timepoint = ["adjuvant", "maintenance", "surveillance"]

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
name = "biomarker_testing_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "germline_brca"
type = "text"
[[variables]]
name = "somatic_brca"
type = "text"
[[variables]]
name = "hrd_status"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, LCOC-2, p16
- Applies to carcinosarcoma (malignant mixed Mullerian tumors, MMMTs) of the ovary
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Carcinosarcoma (MMMTs) of the ovary confirmed on pathologic diagnosis
- Stage ___ (stage)
- Surgical staging and resection of residual disease previously done: ___ (surgical_staging_done)
- Germline and somatic biomarker testing previously done: ___ (biomarker_testing_done)
- Germline BRCA1/2 ___ (germline_brca)
- Somatic BRCA1/2 ___ (somatic_brca)
- HRD status ___ (hrd_status)

# Pathologic diagnosis

- Carcinosarcoma (malignant mixed Mullerian tumors, MMMTs) of the ovary
    - Classify by WHO Histologic Classification (OV-F)
- If not previously done, consider surgical staging and resection of residual disease (OV-3)
- If not previously done, consider germline and somatic biomarker testing (OV-C)
- Germline and somatic BRCA1/2 status informs maintenance therapy
    - In the absence of a BRCA1/2 mutation, HRD status may provide information on the magnitude of benefit of PARPi therapy
    - For PARPi therapy in advanced stage disease, include measure of HR (OV-C)

# Adjuvant treatment

- IV carboplatin/paclitaxel every 3 weeks (preferred)
- Other systemic therapy
    - Stage I (OV-D, 5 of 12)
    - Stage II-IV (OV-D, 6 of 12)
- See Principles of Systemic Therapy (OV-D)
- See Management of Drug Reactions (OV-E)

# Next

- Stage I
    - If known BRCA1/2 mutation, consider maintenance therapy (post-primary therapy) (OV-5)
- Stage II-IV
    - Monitoring/follow-up (including tumor biomarker testing) and recurrence therapy (OV-6)
    - Data are limited on primary and maintenance therapy for recurrent/persistent LCOC
