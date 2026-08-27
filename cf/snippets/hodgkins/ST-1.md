+++
id           = "hodgkins/ST-1"
gid          = "hodgkins"
ref          = "ST-1"
page         = 62
title        = "Assigning stage and A/B designation in Hodgkin lymphoma"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-1", "HODG-2"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "nodal_regions"
type = "text"
[[variables]]
name = "diaphragm_sides"
type = "enum"
options = ["above", "below", "both"]
[[variables]]
name = "extralymphatic"
type = "text"
[[variables]]
name = "spleen"
type = "enum"
options = ["involved", "not involved"]
[[variables]]
name = "systemic_symptoms"
type = "enum"
options = ["A", "B"]
[[variables]]
name = "assigned_stage"
type = "text"
+++

# Source

- NCCN Hodgkin Lymphoma v2.2026, ST-1, p62
- Table 1, Definitions of Stages in Hodgkin Lymphoma
- Adapted from Carbone PP, Kaplan HS, Musshoff K, et al. Report of the Committee on Hodgkin's Disease Staging Classification. Cancer Res 1971;31:1860-1861
- For additional information regarding staging, refer to Cheson BD, Fisher RI, Barrington SF, et al. Recommendations for initial evaluation, staging, and response assessment of Hodgkin and non-Hodgkin lymphoma: the Lugano Classification. J Clin Oncol 2014;32:3059-3068

# Assessment

- Lymph node regions involved: ___ (nodal_regions)
- Side(s) of the diaphragm involved: ___ (diaphragm_sides)
- Extralymphatic organ or site involvement: ___ (extralymphatic)
- Spleen: ___ (spleen)
- Systemic symptoms designation: ___ (systemic_symptoms)
- Assigned stage: ___ (assigned_stage)

# Stage definitions

- Stage I
    - Involvement of a single lymph node region (I)
    - Or localized involvement of a single extralymphatic organ or site (IE)
- Stage II
    - Involvement of two or more lymph node regions on the same side of the diaphragm (II)
    - Or localized involvement of a single associated extralymphatic organ or site and its regional lymph node(s), with or without involvement of other lymph node regions on the same side of the diaphragm (IIE)
    - The number of lymph node regions involved may be indicated by a subscript (eg, II3)
- Stage III
    - Involvement of lymph node regions on both sides of the diaphragm (III)
    - May also be accompanied by localized involvement of an associated extralymphatic organ or site (IIIE)
    - Or by involvement of the spleen (IIIS)
    - Or by both (IIIE+S)
- Stage IV
    - Disseminated (multifocal) involvement of one or more extralymphatic organs, with or without associated lymph node involvement
    - Or isolated extralymphatic organ involvement with distant (nonregional) nodal involvement

# A and B designation

- A, no systemic symptoms present
- B, any of the following
    - Unexplained fevers >38°C
    - Drenching night sweats
    - Weight loss >10% of body weight, within 6 months prior to diagnosis

# FDG-PET caveats for staging

- FDG-PET scans are useful for upstaging in stage I–II disease
- If there is FDG-PET positivity outside of disease already identified, further clinical investigation is recommended to confirm or refute the observation
- FDG-PET scans may demonstrate increased avidity in lymphoid tissue unrelated to lymphoma
    - In persons with HIV, particularly if HIV is not well-controlled
        - Acute/subacute HIV infection
        - Advanced immunosuppression and/or viremia
    - In the presence of opportunistic infections
