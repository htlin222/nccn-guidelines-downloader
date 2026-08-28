+++
id           = "ped_hodgkin/PHL-6"
gid          = "ped_hodgkin"
ref          = "PHL-6"
page         = 21
title        = "Primary treatment of nodular lymphocyte-predominant Hodgkin lymphoma at clinical presentation"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-7", "PHL-8", "PHL-E", "PHL-F"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV", "bulky"]
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["complete", "incomplete"]
[[variables]]
name = "nodes"
type = "enum"
options = ["single", "multiple"]
[[variables]]
name = "bulk"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "treatment"
type = "enum"
options = ["clinical trial", "observe", "CVbP", "ISRT"]
[[variables]]
name = "biopsy"
type = "enum"
options = ["positive", "negative"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-6, p21
- Applies to nodular lymphocyte-predominant Hodgkin lymphoma (NLPHL) at clinical presentation
- Regimens are based off of studies with pediatric data
- See Principles of Systemic Therapy (PHL-E)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- NLPHL
- Stage ___ (stage)
- Resection: ___ (resection)
- Involved nodes: ___ (nodes)
- Bulk present: ___ (bulk)
- Stage IA confirmed by FDG-PET/CT
- Risk factors that may also inform decisions about primary treatment of NLPHL
    - Age 45 years or older
    - Hemoglobin below 10.5 g/dL
    - Splenic involvement

# Stage IA, complete resection, single node, confirmed by FDG-PET/CT

- Treatment selected: ___ (treatment)
- Preferred
    - Ongoing clinical trial
    - Or observe
        - AHOD03P1 only included completely resected single-node disease for observation
        - Additional retrospective data support observation after complete resection of stage I, multiple nodes
        - However, extensive node or repeat node dissection is discouraged
- Other recommended
    - CVbP x 3 cycles
    - Or consider additional options, including ISRT, if aged over 18 y
        - See Principles of Radiation Therapy (PHL-F)
        - See NCCN Guidelines for Hodgkin Lymphoma (Adult)

# Observation schedule

- Clinical exam, with or without ultrasound of primary site, every 3-4 mo for the first 2 y
- Additional imaging as indicated if concern for relapse
- Biopsy must be performed if concern for relapse
    - Biopsy result: ___ (biopsy)
    - Biopsy positive, restage and see Primary Treatment for stage I-IV NLPHL
    - Biopsy negative, continue to observe

# Other clinical presentations

- Stage IA or IIA, incomplete resection and nonbulky, multiple nodes, go to PHL-7
- Stage IA-IIA with bulk, IB-IIB, III, or IV, go to PHL-7

# Next

- Observed with no concern for relapse, or biopsy negative and continuing observation, see Follow-up (PHL-8)
- Biopsy positive, restage and see Primary Treatment for stage I-IV NLPHL
- Aged over 18 y and considering additional options including ISRT, see NCCN Guidelines for Hodgkin Lymphoma (Adult)
- All other clinical presentations, see PHL-7
