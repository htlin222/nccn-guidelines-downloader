+++
id           = "ped_hodgkin/PHL-3"
gid          = "ped_hodgkin"
ref          = "PHL-3"
page         = 14
title        = "Primary treatment and response-adapted radiation for stage I-II CHL without risk factors"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-2", "PHL-8", "PHL-9", "PHL-A", "PHL-C", "PHL-E", "PHL-F", "PHL-G"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II"]
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II"]
[[variables]]
name = "regimen"
type = "enum"
options = ["clinical trial", "OEPA", "ABVD", "AVPC"]
[[variables]]
name = "response"
type = "enum"
options = ["adequate", "inadequate"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-3, p14
- Applies to classic Hodgkin lymphoma (CHL), stage I–II, without risk factors
    - See PHL-2 for risk factors as defined by EuroNET-PHL and COG
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- CHL, ___ (histology)
- Stage ___ (stage)
- No risk factors by EuroNET-PHL and COG definitions (PHL-2)

# Primary treatment

- Preferred
    - Ongoing clinical trial
    - Or OEPA x 2 cycles (category 1) (GPOH-2002; EuroNet-PHL-C1)
- Other recommended
    - ABVD, see NCCN Guidelines for Hodgkin Lymphoma (Adult)
- Useful in certain circumstances
    - AVPC x 3 cycles, for mixed cellularity only (AHOD0431)
- Regimen selected: ___ (regimen)
- Regimens are based off of studies with pediatric data
- See Principles of Systemic Therapy (PHL-E)
- For growth factor recommendations, see Select Principles of Supportive Care (PHL-G)

# Response assessment after chemotherapy

- Result: ___ (response)
- See Principles of Criteria for Response-Adapted Radiation Therapy (PHL-A)
- Imaging for the assessment
    - FDG-PET/CT or FDG-PET/MRI
    - And contrast-enhanced diagnostic CT or MRI of original sites of disease, if not included with FDG-PET and the treatment approach includes need for assessment of anatomic sites of disease for evaluation of response
    - See Principles of Imaging (PHL-C)
- Adequate response
    - Go to Follow-up (PHL-8)
    - Omission of ISRT should be more strongly considered for patients who meet the GPOH-2002 response criteria
- Inadequate response
    - Involved-site RT (ISRT) to all sites
    - Boost to sites of inadequate response at end of chemotherapy
    - See Principles of Radiation Therapy (PHL-F)
    - Then end of therapy assessment, imaging as above

# Next

- Adequate response, see Follow-up (PHL-8)
- Inadequate response, after ISRT and end of therapy assessment
    - See Follow-up (PHL-8)
    - Or if concern for persistent disease, see Therapy for relapsed or refractory disease (PHL-9)
