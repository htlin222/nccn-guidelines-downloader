+++
id           = "head-and-neck/SUPRA-4"
gid          = "head-and-neck"
ref          = "SUPRA-4"
page         = 55
title        = "Clinical staging of node-positive cancer of the supraglottic larynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["SUPRA-1", "SUPRA-5", "SUPRA-6", "SUPRA-8", "ADV-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "conservation_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "nodal_resectability"
type = "enum"
options = ["resectable", "unresectable"]
[[variables]]
name = "fit_for_surgery"
type = "enum"
options = ["fit", "unfit"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, SUPRA-4, p55
- Applies to cancer of the supraglottic larynx with node-positive disease
- Clinical staging page: sorts node-positive disease to a treatment pathway
- Arrived here from Clinical Staging (SUPRA-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer of the supraglottic larynx
- Node-positive disease
- Clinical stage ___ (ctnm)
- Amenable to larynx-preserving (conservation) surgery: ___ (conservation_candidate)
- Nodal disease: ___ (nodal_resectability)
- Fitness for surgery: ___ (fit_for_surgery)

# Clinical staging categories

- Amenable to larynx-preserving (conservation) surgery
    - T1-2, N+
    - Selected T3, N1
- Requiring (amenable to) total laryngectomy
    - Most T3, N1-3
- T4a, N1-N3
- T4b, N1-3
- Unresectable nodal disease
- Unfit for surgery

# Next

- Amenable to larynx-preserving (conservation) surgery (T1-2,N+ and selected T3,N1), go to Treatment of Primary and Neck (SUPRA-5)
- Requiring (amenable to) total laryngectomy (most T3,N1-3), go to Treatment of Primary and Neck (SUPRA-6)
- T4a,N1-N3, go to Treatment of Primary and Neck (SUPRA-8)
- T4b,N1-3, or unresectable nodal disease, or unfit for surgery, go to Treatment of Head and Neck Cancer (ADV-1)
