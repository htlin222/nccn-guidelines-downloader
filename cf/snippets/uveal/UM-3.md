+++
id           = "uveal/UM-3"
gid          = "uveal"
ref          = "UM-3"
page         = 10
title        = "Additional primary treatment after enucleation, by extraocular extension"
nccn_version = "2.2026"
nccn_date    = "03/18/26"
generated    = "2026-08-28"
see_also     = ["UM-2", "UM-4", "UM-B"]

[facets]
disease   = "uveal"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "extraocular_extension"
type = "enum"
options = ["none", "microscopic-margin", "visible-tumor"]
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "residual_orbit"
type = "text"
+++

# Source

- NCCN Melanoma: Uveal v2.2026, UM-3, p10
- Additional primary treatment, decided at the time of enucleation
- Extraocular extension at the time of enucleation is a relatively rare occurrence, and data are limited for these recommendations
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) eye
- Enucleation performed
- Extraocular extension at the time of enucleation ___ (extraocular_extension)
- Margins after enucleation ___ (margin_status)
- Clinical, intraoperative, or radiographic evidence of gross residual disease in the orbit ___ (residual_orbit)

# Extraocular extension at the time of enucleation

- Microscopically positive or close margins after enucleation
    - No clinical evidence of gross residual disease in the orbit
    - No intraoperative evidence of gross residual disease in the orbit
    - No radiographic evidence of gross residual disease in the orbit
    - Consider orbital biopsy if clinically appropriate
    - Then one of
        - Observe
        - Consider RT to orbit, see Principles of Radiation Therapy (UM-B)
- Visible extraocular tumor
    - Biopsy extraocular tissue if possible
    - Consider one or more of the following for local control
        - Observation
        - Local excision
        - RT to orbit, see Principles of Radiation Therapy (UM-B)
        - Orbital exenteration

# Next

- All others, go to Follow-up (UM-4)
- After treatment for extraocular extension, go to Follow-up (UM-4)
