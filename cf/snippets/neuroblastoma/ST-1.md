+++
id           = "neuroblastoma/ST-1"
gid          = "neuroblastoma"
ref          = "ST-1"
page         = 59
title        = "Assigning the INRG tumor stage: L1, L2, M, or MS"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-1", "NEUROB-2A"]

[facets]
disease   = "neuroblastoma"
timepoint = "staging"

[[variables]]
name = "inrg_stage"
type = "enum"
options = ["L1", "L2", "M", "MS"]
[[variables]]
name = "idrfs"
type = "text"
[[variables]]
name = "compartments"
type = "text"
[[variables]]
name = "vital_structures"
type = "text"
[[variables]]
name = "distant_disease"
type = "text"
[[variables]]
name = "age_months"
type = "number"
[[variables]]
name = "metastatic_sites"
type = "text"
[[variables]]
name = "marrow_involvement"
type = "text"
+++

# Source

- NCCN Neuroblastoma v2.2026, ST-1, p59
- International Neuroblastoma Risk Group (INRG) staging, descriptions of INRG tumor stages
- Stage descriptions follow the INRG Project consensus report on imaging and staging of neuroblastic tumors (Brisse HJ, McCarville MB, Granata C, et al. Radiology 2011;261:243-257)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Tumor stage assigned: ___ (inrg_stage)
- IDRFs present: ___ (idrfs)
- Involvement of vital structures: ___ (vital_structures)
- Body compartments involved: ___ (compartments)
- Distant metastatic disease: ___ (distant_disease)
- Age ___ (age_months) months
- Sites of metastases: ___ (metastatic_sites)
- Bone marrow involvement: ___ (marrow_involvement)

# Stage L1

- Localized tumor
- Not involving vital structures, as defined by the list of IDRFs
- Confined to one body compartment

# Stage L2

- Local-regional tumor
- Presence of one or more IDRFs

# Stage M

- Distant metastatic disease
- Excludes stage MS tumor

# Stage MS

- Metastatic disease in children younger than 18 months
- Metastases confined to skin, liver, and/or bone marrow
- Bone marrow involvement less than 10%
