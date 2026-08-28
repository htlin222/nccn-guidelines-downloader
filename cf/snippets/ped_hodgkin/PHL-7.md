+++
id           = "ped_hodgkin/PHL-7"
gid          = "ped_hodgkin"
ref          = "PHL-7"
page         = 22
title        = "Primary and additional treatment of NLPHL by clinical presentation"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-8", "PHL-A", "PHL-B", "PHL-C", "PHL-E", "PHL-F"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV", "bulky"]
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IA", "IIA", "IA-IIA with bulk", "IB", "IIB", "III", "IV"]
[[variables]]
name = "resection"
type = "enum"
options = ["complete", "incomplete"]
[[variables]]
name = "bulk"
type = "enum"
options = ["non-bulky", "bulky"]
[[variables]]
name = "nodes"
type = "enum"
options = ["single node", "multiple nodes"]
[[variables]]
name = "hemoglobin"
type = "number"
[[variables]]
name = "splenic_involvement"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["adequate", "inadequate"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-7, p22
- Applies to nodular lymphocyte-predominant Hodgkin lymphoma (NLPHL), by clinical presentation
- Two presentations are handled on this page
    - IA or IIA, incomplete resection and non-bulky, multiple nodes
    - Stage IA-IIA with bulk, IB-IIB, III, IV
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- NLPHL
- Stage ___ (stage)
- Resection ___ (resection)
- Bulk ___ (bulk)
- Nodal extent ___ (nodes)
- Risk factors that may also inform decisions about primary treatment of NLPHL
    - Age is 45 years or older
    - Hemoglobin ___ (hemoglobin) g/dL, risk factor if <10.5 g/dL
    - Splenic involvement ___ (splenic_involvement)

# Primary treatment for IA or IIA, incomplete resection and non-bulky, multiple nodes

- Preferred
    - Ongoing clinical trial
    - Or AVPC x 3 cycles (category 1) (AHOD03P1)
    - Or CVbP with or without rituximab x 3 cycles
        - Data are limited on the use of rituximab for early-stage NLPHL
- Other recommended
    - OEPA x 2 cycles
- Regimen selected: ___ (regimen)
- Regimens are based off of studies with pediatric data
- See Principles of Systemic Therapy (PHL-E)
- AHOD03P1 only included completely resected single-node disease for observation
    - Additional retrospective data support observation after complete resection of stage I, multiple nodes
    - However, extensive node or repeat node dissection is discouraged

# Primary treatment for stage IA-IIA with bulk, IB-IIB, III, IV

- Confirm pathologic diagnosis
    - Advanced-stage NLPHL is rare in pediatric patients
    - Confirm pathologic diagnosis prior to treatment
    - See Principles of Pathology (PHL-B)
- Treat per NCCN Guidelines for Hodgkin Lymphoma (Adult)
- There are limited data on the treatment of intermediate/advanced NLPHL
    - It is commonly treated similar to CHL
    - Given rarity, consider referral to, or consultation with, a center of expertise

# Response assessment

- Result: ___ (response)
- FDG-PET/CT or FDG-PET/MRI
- And contrast-enhanced diagnostic CT or MRI of original sites of disease
    - Only if those sites are not included with the FDG-PET
    - And only if the treatment approach includes need for assessment of anatomic sites of disease for evaluation of response
- See Principles of Imaging (PHL-C)
- Decide on radiation per Principles of Criteria for Response-Adapted Radiation Therapy (PHL-A)

# Additional treatment

- After primary treatment of IA or IIA, incomplete resection and non-bulky, multiple nodes
    - Adequate response, go to Follow-up (PHL-8)
    - Inadequate response, ISRT, see Principles of Radiation Therapy (PHL-F)
- After treatment of stage IA-IIA with bulk, IB-IIB, III, IV
    - Adequate response, go to Follow-up (PHL-8)
    - Inadequate response
        - Consider additional adult regimens, including ISRT, if aged >18 y
        - Or consider referral to or consultation with a center of expertise for consideration of additional therapy

# Next

- Adequate response, see Follow-up (PHL-8)
- Inadequate response after ISRT, see Follow-up (PHL-8)
