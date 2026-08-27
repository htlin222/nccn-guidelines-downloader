+++
id           = "hodgkins/HODG-16"
gid          = "hodgkins"
ref          = "HODG-16"
page         = 34
title        = "Refractory or suspected relapse of NLPHL: reimaging, rebiopsy, and second-line direction"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-A", "HODG-12", "HODG-17"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["recurrent", "refractory"]
timepoint = "relapsed-refractory"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_status"
type = "enum"
options = ["refractory", "suspected relapse"]
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "symptoms"
type = "enum"
options = ["symptomatic", "asymptomatic"]
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["NLPHL", "aggressive B-cell lymphoma", "negative"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age >=18 years) v2.2026, HODG-16, p34
- Applies to NLPHL with refractory disease or suspected relapse
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, NLPHL
- Disease status ___ (disease_status)
- Prior therapy ___ (prior_therapy)
- Sites of disease ___ (sites)
- Symptom status ___ (symptoms)

# Restaging

- Repeat FDG-PET/CT or diagnostic CT
    - Per Principles of FDG-PET/CT (HODG-A)
- Result ___ (imaging)

# Biopsy

- Biopsy
    - At relapse, rebiopsy should be considered because of risk for transformation
    - Especially if intra-abdominal or splenic disease
- Result ___ (biopsy_result)

# Second-line therapy

- There are no data to support a superior outcome with any of the treatment modalities
- Individualized treatment is recommended
- Some patients with NLPHL have a chronic indolent course that may not require aggressive re-treatment
    - These asymptomatic patients may be observed

# Next

- Aggressive B-cell lymphoma, see NCCN Guidelines for B-Cell Lymphomas (Diffuse large B-cell lymphoma - Relapsed/Refractory Disease)
- Biopsy negative, observe with short-interval follow-up (HODG-12)
- NLPHL, go to HODG-17
