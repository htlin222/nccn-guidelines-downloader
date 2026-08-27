+++
id           = "ovarian/LCOC-3"
gid          = "ovarian"
ref          = "LCOC-3"
page         = 17
title        = "Adjuvant treatment of clear cell carcinoma of the ovary, by stage"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-1", "OV-3", "OV-5", "OV-6", "OV-C", "OV-D"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III", "IV"]
biomarker = ["brca"]
timepoint = ["adjuvant", "maintenance", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "surgical_staging"
type = "text"
[[variables]]
name = "biomarker_testing"
type = "text"
[[variables]]
name = "brca_status"
type = "text"
[[variables]]
name = "hrd_status"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, Less Common Ovarian Cancers, LCOC-3, p17
- Applies to clear cell carcinoma of the ovary, after pathologic diagnosis
- Pathologic diagnosis per WHO Histologic Classification (OV-F)
- Adjuvant treatment per Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clear cell carcinoma of the ovary
- Stage ___ (stage)
- Surgical staging and resection of residual disease already done: ___ (surgical_staging)
- Germline and somatic biomarker testing already done: ___ (biomarker_testing)
- BRCA1/2 status: ___ (brca_status)
- HRD status: ___ (hrd_status)

# Confirm before adjuvant treatment

- If not previously done, consider surgical staging and resection of residual disease (OV-3)
- If not previously done, consider germline and somatic biomarker testing (OV-C)
- Germline and somatic BRCA1/2 status informs maintenance therapy
    - In the absence of a BRCA1/2 mutation, HRD status may provide information on the magnitude of benefit of PARPi therapy
    - For PARPi therapy in advanced stage disease, include measure of HR (OV-C)

# Adjuvant treatment by stage

- Stage IA, IB, IC1
    - IV platinum-based therapy, see primary regimens for stage I disease (OV-D, 5 of 12)
    - or Observe
        - If not previously done, consider surgical staging and resection of residual disease (OV-3)
- Stage IC2–IC3
    - IV platinum-based therapy, see primary regimens for stage I disease (OV-D, 5 of 12)
- Stage II–IV
    - Systemic therapy (OV-D, 6 of 12)

# Next

- Monitoring/follow-up, including tumor biomarker testing, and recurrence therapy, go to OV-6
    - Data are limited on primary and maintenance therapy for recurrent/persistent LCOC
- If known BRCA1/2 mutation, consider maintenance therapy (post-primary therapy), go to OV-5
