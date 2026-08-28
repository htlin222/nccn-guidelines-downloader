+++
id           = "thymic/ST-1"
gid          = "thymic"
ref          = "ST-1"
page         = 23
title        = "Modified Masaoka clinical staging of thymoma"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-28"
see_also     = ["THYM-1", "THYM-2"]

[facets]
disease   = "thymic"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_type"
type = "enum"
options = ["thymoma", "thymic carcinoma"]
[[variables]]
name = "encapsulation"
type = "text"
[[variables]]
name = "local_invasion"
type = "text"
[[variables]]
name = "organ_invasion"
type = "text"
[[variables]]
name = "dissemination"
type = "text"
[[variables]]
name = "masaoka_stage"
type = "enum"
options = ["I", "IIA", "IIB", "IIIA", "IIIB", "IVA", "IVB"]
+++

# Source

- NCCN Thymomas and Thymic Carcinomas v2.2026, ST-1, p23
- Staging, Table 1, modified Masaoka clinical staging of thymoma
- The Masaoka staging system is also used to stage thymic carcinomas
- Stage definitions reprinted from Wright CD. Management of thymomas. Crit Rev Oncol Hematol 2008
- For clarification and definition of terms, see Detterbeck FC, Nicholson AG, Kondo K, et al. The Masaoka-Koga stage classification for thymic malignancies. J Thorac Oncol 2011

# Assessment

- ___ (age) yo
- Tumor type ___ (tumor_type)
- Encapsulation, macroscopic and microscopic ___ (encapsulation)
- Transcapsular invasion, surrounding fatty tissue, mediastinal pleura, or pericardium ___ (local_invasion)
- Invasion of neighboring organs, including great vessels ___ (organ_invasion)
- Pleural or pericardial dissemination, or lymphogenous or hematogenous metastasis ___ (dissemination)
- Modified Masaoka stage ___ (masaoka_stage)

# Modified Masaoka clinical staging, diagnostic criteria

- Stage I
    - Macroscopically and microscopically completely encapsulated
- Stage II
    - (A) Microscopic transcapsular invasion
    - (B) Macroscopic invasion into surrounding fatty tissue, or grossly adherent to but not through mediastinal pleura or pericardium
- Stage III
    - Macroscopic invasion into neighboring organs (ie, pericardium, great vessels, lung)
    - (A) Without invasion of great vessels
    - (B) With invasion of great vessels
- Stage IV
    - (A) Pleural or pericardial dissemination
    - (B) Lymphogenous or hematogenous metastasis
