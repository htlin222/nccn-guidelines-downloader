+++
id           = "thymic/THYM-3"
gid          = "thymic"
ref          = "THYM-3"
page         = 8
title        = "Postoperative treatment after thymectomy, by resection status, and the surveillance schedule that follows"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["THYM-2", "THYM-4", "THYM-B", "THYM-C"]

[facets]
disease   = "thymic"
stage     = ["I", "II", "III", "IV"]
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "histology"
type = "enum"
options = ["thymoma", "thymic carcinoma"]
[[variables]]
name = "capsular_invasion"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "masaoka_koga_stage"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["R0", "R1", "R2"]
+++

# Source

- NCCN Thymomas and Thymic Carcinomas v2.2026, THYM-3, p8
- Applies after resection of a thymoma or thymic carcinoma, at postoperative evaluation
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Pathology evaluation done
- ___ (histology)
- Capsular invasion ___ (capsular_invasion)
- Masaoka-Koga stage ___ (masaoka_koga_stage)
- Resection ___ (resection)
    - R0 = no residual tumor
    - R1 = microscopic residual tumor
    - R2 = macroscopic residual tumor

# Postoperative treatment after R0 resection

- Thymoma or thymic carcinoma, no capsular invasion, Masaoka-Koga stage I
    - Surveillance
- Thymoma or thymic carcinoma, capsular invasion present, Masaoka-Koga stages II–IV
    - Consider postoperative RT, see Principles of Radiation Therapy (THYM-B)
    - Decisions about adjuvant radiation therapy (RT) in this setting should be based on multidisciplinary evaluation

# Postoperative treatment after R1 resection

- Thymoma
    - Postoperative RT, see Principles of Radiation Therapy (THYM-B)
- Thymic carcinoma
    - Postoperative RT, see Principles of Radiation Therapy (THYM-B)
    - ± chemotherapy, see Principles of Systemic Therapy (THYM-C)
        - There is a diversity of opinion on treatment approach

# Treatment after R2 resection

- Thymoma
    - Definitive RT, see Principles of Radiation Therapy (THYM-B)
    - ± chemotherapy, see Principles of Systemic Therapy (THYM-C)
        - There is a diversity of opinion on treatment approach
- Thymic carcinoma
    - Definitive RT, see Principles of Radiation Therapy (THYM-B)
    - + chemotherapy, see Principles of Systemic Therapy (THYM-C)
        - There is a diversity of opinion on treatment approach

# Surveillance

- For thymoma, evaluate clinically for signs of myasthenia gravis and other paraneoplastic syndromes, with appropriate workup and treatment
- Imaging is chest CT with contrast
    - MRI is an appropriate alternative to CT in certain clinical situations
- After R0 resection
    - Thymic carcinoma, every 6–12 months for 2 years, then annually until year 5
    - Thymoma, every 6–12 months for 2 years, then annually until year 10
- After R1 or R2 resection
    - Thymic carcinoma, every 3–6 months for 2 years, then annually until year 5
    - Thymoma, every 6 months for 2 years, then annually until year 10
- The duration for surveillance has not been established

# Next

- Recurrence found on surveillance, go to Recurrent Disease (THYM-4)
