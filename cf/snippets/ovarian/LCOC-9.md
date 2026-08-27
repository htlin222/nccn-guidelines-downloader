+++
id           = "ovarian/LCOC-9"
gid          = "ovarian"
ref          = "LCOC-9"
page         = 25
title        = "Adjuvant treatment of ovarian serous borderline epithelial tumors (LMP), by completeness of prior resection and presence of low-grade serous carcinoma"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-7", "OV-B", "OV-C", "OV-F"]

[facets]
disease   = "ovarian"
timepoint = ["diagnosis", "adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histologic_diagnosis"
type = "text"
[[variables]]
name = "resection_status"
type = "enum"
options = ["complete", "incomplete"]
[[variables]]
name = "lgsc_status"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "implants"
type = "text"
[[variables]]
name = "stage"
type = "text"
+++

# Source

- NCCN Ovarian Cancer v4.2026, Ovarian Serous Borderline Epithelial Tumors (Low Malignant Potential), LCOC-9, p25
- Applies to ovarian serous borderline epithelial tumors (LMP)
- Histologic classification per WHO Histologic Classification (OV-F)
- Surgery per Principles of Surgery (OV-B)
- Pathology per Principles of Pathology (OV-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pathologic diagnosis: ___ (histologic_diagnosis)
- Prior surgical resection complete or incomplete: ___ (resection_status)
- Low-grade serous carcinoma on pathology: ___ (lgsc_status)
- Noninvasive implants: ___ (implants)
- Stage: ___ (stage)

# Pathologic diagnosis

- Ovarian serous borderline epithelial tumors (LMP)
    - Classify per WHO Histologic Classification (OV-F)
- Establish whether the prior surgical resection was complete or incomplete
    - Assess against Principles of Surgery (OV-B)
    - Assess against Principles of Pathology (OV-C)

# Adjuvant treatment

- Standard recommendation includes a patient evaluation by a gynecologic oncologist
- Prior complete surgical resection
    - No low-grade serous carcinoma
        - Observe
        - Those with noninvasive implants (stage II–IV) are at risk for progression to low-grade serous carcinoma
    - Low-grade serous carcinoma
        - See LCOC-10
        - Chemotherapy (IV or IP) has not been shown to be beneficial in ovarian borderline epithelial tumors (LMP)
- Prior incomplete surgical resection
    - See adjuvant options (LCOC-7)

# Next

- Prior complete surgical resection, no low-grade serous carcinoma, observed: Monitoring/Follow-up (LCOC-11)
- Prior complete surgical resection, low-grade serous carcinoma: go to LCOC-10
- Prior incomplete surgical resection: see adjuvant options (LCOC-7)
