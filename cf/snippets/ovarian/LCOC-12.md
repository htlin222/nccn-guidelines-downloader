+++
id           = "ovarian/LCOC-12"
gid          = "ovarian"
ref          = "LCOC-12"
page         = 28
title        = "Surgery, adjuvant treatment by risk group, and recurrence therapy for malignant sex cord-stromal tumors"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-A", "LCOC-B", "OV-B", "OV-C", "OV-D", "OV-F"]

[facets]
disease    = "ovarian"
stage      = ["I", "II", "III", "IV", "recurrent"]
timepoint  = ["primary-treatment", "adjuvant", "surveillance", "recurrence"]
population = "fertility"

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
name = "risk_group"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "confined_to_ovary"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "fertility_desired"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "staging_done"
type = "text"
[[variables]]
name = "inhibin"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, Malignant Sex Cord-Stromal Tumors, LCOC-12, p28
- Applies to malignant sex cord-stromal tumors
- Histologic classification per WHO Histologic Classification (OV-F)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histologic diagnosis: ___ (histologic_diagnosis)
- Stage: ___ (stage)
- Disease clinically confined to ovary: ___ (confined_to_ovary)
- Fertility desired: ___ (fertility_desired)
- Staging surgery done: ___ (staging_done)
- Risk group: ___ (risk_group)
    - Stage I low risk
    - Stage I high risk, eg, ruptured stage IC or poorly differentiated stage I
    - Stage I intermediate risk, eg, heterologous elements
    - Stage II-IV

# Primary surgery

- Disease clinically confined to ovary and fertility desired
    - Fertility-sparing surgery with complete staging
- All others
    - Complete staging
- For either option
    - See Principles of Surgery (OV-B)
    - See Principles of Pathology (OV-C)
    - Lymphadenectomy may be omitted

# Adjuvant treatment

- Stage I, low risk
    - Observe
        - Inhibin levels can be followed for granulosa cell tumors: ___ (inhibin)
- Stage I, high risk, or intermediate risk
    - Observe (category 2B)
        - Inhibin levels can be followed for granulosa cell tumors
    - or Consider platinum-based chemotherapy (category 2B)
- Stage II-IV
    - Platinum-based chemotherapy
    - or RT for limited disease (category 2B)
- For any platinum-based chemotherapy given here
    - Acceptable options include
        - Carboplatin/paclitaxel (preferred)
        - EP (etoposide/cisplatin)
        - BEP (bleomycin/etoposide/cisplatin) (category 2B)
    - See Principles of Systemic Therapy (OV-D)
    - See Systemic Therapy Regimens for Malignant Germ Cell/Sex Cord-Stromal Tumors (LCOC-A)

# Next

- After adjuvant treatment, all risk groups
    - Surveillance (LCOC-B)
- If clinical relapse
    - Consider secondary cytoreductive surgery
    - or Recurrence therapy
        - See Principles of Systemic Therapy (OV-D)
        - See Systemic Therapy Regimens for Malignant Germ Cell/Sex Cord-Stromal Tumors (LCOC-A)
        - Localized RT can be considered to palliate symptoms and/or for oligometastatic disease
