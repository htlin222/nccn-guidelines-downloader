+++
id           = "ovarian/LCOC-4"
gid          = "ovarian"
ref          = "LCOC-4"
page         = 18
title        = "Additional workup and adjuvant treatment of mucinous neoplasms of the ovary, by stage and invasion pattern"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-1", "OV-3", "OV-6", "OV-C", "OV-D", "OV-F"]

[facets]
disease   = "ovarian"
histology = "mucinous"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histologic_diagnosis"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "carcinoma_or_borderline"
type = "enum"
options = ["carcinoma", "borderline"]
[[variables]]
name = "invasion_pattern"
type = "enum"
options = ["expansile", "infiltrative"]
[[variables]]
name = "surgical_staging"
type = "text"
[[variables]]
name = "biomarker_testing"
type = "text"
[[variables]]
name = "gi_evaluation"
type = "text"
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "ca19_9"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, Mucinous Neoplasms of the Ovary, LCOC-4, p18
- Applies to mucinous neoplasms of the ovary
- Pathologic diagnosis per Principles of Pathology (OV-C)
- Histologic classification per WHO Histologic Classification (OV-F)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histologic diagnosis: ___ (histologic_diagnosis)
- Carcinoma or borderline: ___ (carcinoma_or_borderline)
- Stage: ___ (stage)
- Invasion pattern: ___ (invasion_pattern)
- Surgical staging and resection of residual disease done: ___ (surgical_staging)
- Germline and somatic biomarker testing done: ___ (biomarker_testing)

# Additional workup

- Consider surgical staging and resection of residual disease, if not previously done (OV-3)
- Consider germline and somatic biomarker testing, if not previously done (OV-C)
- If not previously done:
    - GI evaluation: ___ (gi_evaluation)
        - Consider additional testing, including but not limited to upper and lower endoscopic evaluation
        - Purpose is to aid in the identification of metastatic GI malignancies versus primary mucinous ovarian cancer
    - Carcinoembryonic antigen (CEA): ___ (cea)
    - CA 19-9: ___ (ca19_9)

# Adjuvant treatment

- Stage IA carcinoma
    - Expansile: Observe
    - Infiltrative: Observe, or Systemic therapy (OV-D, 5 of 12)
- Stage IB carcinoma
    - Expansile: Observe
    - Infiltrative: Systemic therapy (OV-D, 5 of 12)
- Stage IC carcinoma
    - Expansile: Observe, or Systemic therapy (OV-D, 5 of 12)
    - Infiltrative: Systemic therapy (OV-D, 5 of 12)
- Stage II–IV carcinoma
    - Systemic therapy (OV-D, 6 of 12)
- Borderline
    - Observe
- For any systemic therapy given here, see Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)

# Next

- Monitoring/Follow-up, including tumor biomarker testing, go to OV-6
- Recurrence therapy, go to OV-6
    - Data are limited on primary and maintenance therapy for recurrent/persistent LCOC
