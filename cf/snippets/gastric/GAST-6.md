+++
id           = "gastric/GAST-6"
gid          = "gastric"
ref          = "GAST-6"
page         = 17
title        = "Post-treatment assessment and additional management after primary treatment of unresectable disease or a nonsurgical candidate"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-7", "GAST-9", "GAST-B", "GAST-C"]

[facets]
disease   = "gastric"
timepoint = ["staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "baseline_status"
type = "enum"
options = ["unresectable disease", "nonsurgical candidate"]
[[variables]]
name = "primary_treatment"
type = "text"
[[variables]]
name = "ct_findings"
type = "text"
[[variables]]
name = "cbc"
type = "text"
[[variables]]
name = "chemistry"
type = "text"
[[variables]]
name = "contrast_limitation"
type = "enum"
options = ["none", "renal insufficiency", "allergy to CT contrast"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "metastatic disease"]
[[variables]]
name = "operability"
type = "enum"
options = ["medically operable", "medically inoperable"]
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-6, p17
- Applies to unresectable disease, or a nonsurgical candidate, following primary treatment
- Nonsurgical candidate means a patient medically unable to tolerate major surgery, or a patient who is medically fit but declines surgery
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Status before primary treatment ___ (baseline_status)
- Primary treatment received ___ (primary_treatment)
- Restaging CT ___ (ct_findings)
- CBC ___ (cbc)
- Comprehensive chemistry profile ___ (chemistry)
- Contrast limitation ___ (contrast_limitation)
- Resectability on restaging ___ (resectability)
- Medical operability ___ (operability)

# Restaging

- Chest/abdomen/pelvis CT
    - With oral contrast
    - With IV contrast
- Complete blood count (CBC)
- Comprehensive chemistry profile
- FDG-PET/CT as clinically indicated
    - In cases of renal insufficiency or allergy to CT contrast

# Outcome

- Resectable and medically operable
- Unresectable, or medically inoperable, and/or metastatic disease

# Next

- Resectable and medically operable
    - Surgery (preferred), if appropriate
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
    - or Follow-up (GAST-7)
- Unresectable, or medically inoperable, and/or metastatic disease
    - Palliative Management (GAST-9)
