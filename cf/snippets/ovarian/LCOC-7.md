+++
id           = "ovarian/LCOC-7"
gid          = "ovarian"
ref          = "LCOC-7"
page         = 23
title        = "Adjuvant treatment and monitoring of low-grade serous carcinoma of the ovary, by stage"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["LCOC-8", "OV-3", "OV-C", "OV-D", "OV-E", "OV-F"]

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
name = "surgical_staging"
type = "enum"
options = ["done", "not done"]
[[variables]]
name = "residual_disease"
type = "text"
[[variables]]
name = "biomarker_testing"
type = "enum"
options = ["done", "not done"]
+++

# Source

- NCCN Ovarian Cancer v4.2026, Less Common Ovarian Cancers, LCOC-7, p23
- Applies to a pathologic diagnosis of low-grade serous carcinoma
- Adjuvant treatment branches on stage: IA-IB, IC, II-IV
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Low-grade serous carcinoma
- Stage ___ (stage)
- Surgical staging and resection of residual disease: ___ (surgical_staging)
- Residual disease: ___ (residual_disease)
- Germline and somatic biomarker testing: ___ (biomarker_testing)

# Pathologic diagnosis

- Low-grade serous carcinoma, classified by WHO Histologic Classification (OV-F)
- If not previously done, consider surgical staging and resection of residual disease (OV-3)
- If not previously done, consider germline and somatic biomarker testing (OV-C)

# Adjuvant treatment, stage IA-IB

- Observe
    - If not previously done, consider surgical staging and resection of residual disease (OV-3)

# Adjuvant treatment, stage IC

- Observe (category 2B)
    - If not previously done, consider surgical staging and resection of residual disease (OV-3)
- or Systemic therapy (OV-D, 5 of 12)
    - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
    - Chemotherapy
    - or Hormonal therapy (category 2B)

# Adjuvant treatment, stage II-IV

- Systemic therapy (OV-D, 6 of 12)
    - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
    - Chemotherapy
    - or Hormonal therapy (category 2B)

# Monitoring/follow-up after systemic therapy, stage IC

- Observe
- or Maintenance letrozole
- or Other hormonal therapy (category 2B)
    - Aromatase inhibitors (eg, anastrozole, exemestane)
    - Leuprolide acetate
    - Goserelin acetate

# Monitoring/follow-up after systemic therapy, stage II-IV

- Maintenance letrozole
- or Other hormonal therapy (category 2B)
    - Aromatase inhibitors (eg, anastrozole, exemestane)
    - Leuprolide acetate
    - Goserelin acetate

# Next

- Monitoring/Follow-up for Recurrent Disease (LCOC-8)
