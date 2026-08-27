+++
id           = "histiocytic_neoplasms/MHN-3"
gid          = "histiocytic_neoplasms"
ref          = "MHN-3"
page         = 30
title        = "Treatment of secondary MHN or MHN with a concomitant hematologic neoplasm"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["MHN-2", "MHN-4"]

[facets]
disease   = "histiocytic_neoplasms"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_neoplasm"
type = "text"
[[variables]]
name = "primary_status"
type = "enum"
options = ["active", "inactive"]
[[variables]]
name = "mhn_sites"
type = "text"
[[variables]]
name = "prior_chemo_response"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Malignant Histiocytic Neoplasms, MHN-3, p30
- Applies to secondary MHN, or MHN with a concomitant hematologic neoplasm
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary or concomitant hematologic neoplasm ___ (primary_neoplasm)
- Primary neoplasm status ___ (primary_status)
- Sites of MHN involvement ___ (mhn_sites)
- Response observed after prior systemic chemotherapy ___ (prior_chemo_response)

# Active primary or concomitant neoplasm

- Treat primary neoplasm concurrently with MHN
    - Use overlapping regimens, or
    - Use disparate regimens
- Limited data exists to determine the best therapy
    - Use best clinical judgment in selecting an option
- Role of autologous or allogeneic hematopoietic cell transplant (HCT) is uncertain
    - Consider consultation for HCT in selected patients if a response was observed after systemic chemotherapy use

# Inactive primary neoplasm

- Go to MHN-2

# Next

- Active primary or concomitant neoplasm, treated concurrently, go to Follow-up (MHN-4)
- Inactive primary neoplasm, go to MHN-2
