+++
id           = "thyroid/PAP-9"
gid          = "thyroid"
ref          = "PAP-9"
page         = 23
title        = "Management of recurrent structural disease in papillary carcinoma, locoregional or metastatic"
nccn_version = "2.2026"
nccn_date    = "06/02/2026"
generated    = "2026-08-27"
see_also     = ["PAP-8", "PAP-10", "THYR-C"]

[facets]
disease   = "thyroid"
stage     = "recurrent"
timepoint = ["recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "disease_pattern"
type = "enum"
options = ["locoregional", "metastatic", "both"]
[[variables]]
name = "resectable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "central_neck"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "rai_avid"
type = "enum"
options = ["avid", "non-avid", "unknown"]
[[variables]]
name = "progression"
type = "enum"
options = ["progressive", "non-progressive"]
+++

# Source

- NCCN Thyroid Carcinoma v2.2026, PAP-9, p23
- Applies to papillary carcinoma with recurrent structural disease
- Principles of Radiation and RAI Therapy: THYR-C
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Site of recurrent structural disease: ___ (recurrence_site)
- Pattern: ___ (disease_pattern)
- Resectable: ___ (resectable)
- Central neck recurrence: ___ (central_neck)
- Updated whole body scan, radioiodine avidity: ___ (rai_avid)
- Disease course: ___ (progression)

# Locoregional recurrence

- Surgery (preferred) if resectable
    - Preoperative vocal cord assessment, if central neck recurrence
    - and consider RAI therapy, if updated whole body scan shows disease that is radioiodine avid
        - The administered activity of RAI therapy should be adjusted for pediatric patients (THYR-C)
- or disease monitoring, for non-progressive disease that is stable and distant from critical structures
- or for select patients with unresectable, RAI-refractory, and progressive disease, consider:
    - RT (THYR-C)
    - and/or systemic therapies, see Treatment (PAP-10)
- or for select patients with limited burden nodal disease, consider local therapies when available
    - Ethanol ablation
    - Radiofrequency ablation (RFA)

# Metastatic disease

- RAI therapy for iodine-avid disease (THYR-C)
- and/or local therapies when available
    - Ethanol ablation
    - Cryoablation
    - RFA
- and/or if RAI-refractory, see Treatment (PAP-10)

# Next

- Unresectable, RAI-refractory, and progressive disease, go to PAP-10
- RAI-refractory metastatic disease, go to PAP-10
