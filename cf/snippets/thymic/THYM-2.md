+++
id           = "thymic/THYM-2"
gid          = "thymic"
ref          = "THYM-2"
page         = 7
title        = "Initial management of a likely thymic tumor: resect, or biopsy first"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["THYM-3", "THYM-4", "THYM-A", "THYM-C"]

[facets]
disease   = "thymic"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mass"
type = "text"
[[variables]]
name = "tumor_markers"
type = "text"
[[variables]]
name = "adenopathy"
type = "text"
[[variables]]
name = "thyroid_continuity"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "uncertain", "locally advanced", "metastatic"]
+++

# Source

- NCCN Thymomas and Thymic Carcinomas v2.2026, THYM-2, p7
- Applies to a patient in whom a thymic tumor is likely, at initial management
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Anterior mediastinal mass ___ (mass)
- Tumor markers ___ (tumor_markers)
- Other adenopathy ___ (adenopathy)
- Continuity with the thyroid ___ (thyroid_continuity)
- Resectability ___ (resectability)

# Thymic tumor likely

- Well-defined anterior mediastinal mass in the thymic bed
- Tumor markers negative
- Absence of other adenopathy
- Absence of continuity with the thyroid

# Multidisciplinary care

- All patients should be treated by a multidisciplinary team with experience in the management of thymomas and thymic carcinomas
- Determination of resectability should be made by a thoracic surgeon
    - Primary focus on thoracic oncology
    - Multidisciplinary consultation as needed
    - Resectability is defined as complete (R0) resection

# Surgically resectable

- Surgical resection, see Principles of Surgical Resection (THYM-A)
    - Total thymectomy
    - Complete excision of tumor
- If R0 resection is considered uncertain, preoperative systemic therapy should be considered, see Principles of Systemic Therapy (THYM-C)

# Locally advanced or metastatic

- Tissue diagnosis with core needle biopsy, see Principles of Surgical Resection (THYM-A)
- Open biopsy, if core biopsy is not feasible or not diagnostic
    - Avoid transpleural approach

# Next

- Surgically resectable and resected, go to Postoperative Management (THYM-3)
- Locally advanced or metastatic, go to Treatment (THYM-4)
