+++
id           = "histiocytic_neoplasms/MHN-2"
gid          = "histiocytic_neoplasms"
ref          = "MHN-2"
page         = 29
title        = "Treatment of primary MHN by resectability and mutation status, and entry point for secondary MHN"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["MHN-1", "MHN-1A", "MHN-3", "MHN-4"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mhn_type"
type = "enum"
options = ["primary", "secondary"]
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "extent"
type = "enum"
options = ["localized-resectable", "localized-unresectable", "regional-spread"]
[[variables]]
name = "mutation_status"
type = "enum"
options = ["targetable", "no-targetable-mutation", "unknown"]
[[variables]]
name = "chemo_response"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Malignant Histiocytic Neoplasms, MHN-2, p29
- Applies to primary MHN, localized resectable, or localized unresectable or regional spread
- Secondary MHN enters here and is sent on to MHN-3
- Limited data exists to determine the best therapy, so use best clinical judgment in selecting an option
- Equivalent options are listed in alphabetical order (HIST-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary or secondary MHN ___ (mhn_type)
- Sites of involvement ___ (sites)
- Presentation ___ (extent)
- Mutation status ___ (mutation_status)
- Response after systemic chemotherapy use ___ (chemo_response)

# Primary MHN, localized resectable

- Surgical resection
- Radiation therapy, with or without, after resection
    - Adjuvant radiation is encouraged as clinically indicated
    - Especially in scenarios of incomplete resection or positive margins
    - Higher doses will need to be given than with LCH
    - See Principles of Radiation Therapy (HIST-G)
- Then Follow-up (MHN-4)

# Primary MHN, localized unresectable or regional spread

- No targetable mutation, or mutation status unknown
    - Checkpoint inhibitor (HIST-D)
    - Combination chemotherapy (HIST-D)
- Targetable mutation
    - Targeted therapy, preferred (HIST-D)
    - Checkpoint inhibitor (HIST-D)
    - Combination chemotherapy (HIST-D)
    - Single agent chemotherapy, with or without MEK inhibitor (HIST-D)
- Surgical resection, if partial response
- Role of autologous or allogeneic HSCT is uncertain
    - Consider consultation for HSCT in selected patients if a response was observed after systemic chemotherapy use
- Then Follow-up (MHN-4)

# Secondary MHN

- Treatment is on its own page, go to MHN-3

# Next

- Localized resectable, after surgical resection with or without RT, go to Follow-up (MHN-4)
- Localized unresectable or regional spread, after systemic therapy with or without surgical resection, go to Follow-up (MHN-4)
- Secondary MHN, go to MHN-3
