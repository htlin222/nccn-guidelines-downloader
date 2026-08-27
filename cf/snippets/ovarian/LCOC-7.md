+++
id           = "ovarian/LCOC-7"
gid          = "ovarian"
ref          = "LCOC-7"
page         = 23
title        = "Adjuvant treatment of low-grade serous carcinoma of the ovary by stage, and the maintenance/follow-up exit"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-1", "LCOC-8", "OV-3"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III", "IV"]
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
name = "residual_disease"
type = "text"
[[variables]]
name = "biomarker_testing_done"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Ovarian Cancer v4.2026, Less Common Ovarian Cancers, LCOC-7, p23
- Applies to low-grade serous carcinoma of the ovary
- Pathologic diagnosis per WHO Histologic Classification (OV-F)
- Entered from LCOC-1
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Stage ___ (stage)
- Surgical staging and resection of residual disease done: ___ (surgical_staging_done)
- Residual disease: ___ (residual_disease)
- Germline and somatic biomarker testing done: ___ (biomarker_testing_done)

# Before adjuvant treatment

- If not previously done, consider surgical staging and resection of residual disease (OV-3)
- If not previously done, consider germline and somatic biomarker testing (OV-C)

# Adjuvant treatment, stage IA-IB

- Observe
    - If not previously done, consider surgical staging and resection of residual disease (OV-3)

# Adjuvant treatment, stage IC

- Observe (category 2B)
    - If not previously done, consider surgical staging and resection of residual disease (OV-3)
- or Systemic therapy (OV-D, 5 of 12)
    - Chemotherapy
    - or Hormonal therapy (category 2B)
    - See Principles of Systemic Therapy (OV-D)
    - See Management of Drug Reactions (OV-E)

# Adjuvant treatment, stage II-IV

- Systemic therapy (OV-D, 6 of 12)
    - Chemotherapy
    - or Hormonal therapy (category 2B)
    - See Principles of Systemic Therapy (OV-D)
    - See Management of Drug Reactions (OV-E)

# Monitoring/Follow-up after systemic therapy, stage IC

- Observe
- or Maintenance letrozole
- or Other hormonal therapy (category 2B)
    - Aromatase inhibitors (eg, anastrozole, exemestane)
    - Leuprolide acetate
    - Goserelin acetate

# Monitoring/Follow-up after systemic therapy, stage II-IV

- Maintenance letrozole
- or Other hormonal therapy (category 2B)
    - Aromatase inhibitors (eg, anastrozole, exemestane)
    - Leuprolide acetate
    - Goserelin acetate

# Next

- Monitoring/Follow-up for Recurrent Disease (LCOC-8)
