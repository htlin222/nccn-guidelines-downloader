+++
id           = "ped_b-cell/PBCL-5"
gid          = "ped_b-cell"
ref          = "PBCL-5"
page         = 10
title        = "Risk group definitions that assign induction therapy"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-4", "PBCL-6", "PBCL-7", "PBCL-8", "PBCL-9"]

[facets]
disease   = "ped_b-cell"
stage     = ["I", "II", "III", "IV"]
timepoint = ["staging", "induction"]

[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "resection"
type = "enum"
options = ["complete", "incomplete", "not resected"]
[[variables]]
name = "primary_site"
type = "enum"
options = ["abdominal", "nonabdominal"]
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "ldh_uln"
type = "text"
[[variables]]
name = "cns"
type = "enum"
options = ["involved", "negative"]
[[variables]]
name = "marrow_pct"
type = "number"
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-5, p10
- Risk group definitions, used to pick induction therapy / initial treatment
- See PBCL-4 for staging
- All recommendations category 2A unless otherwise indicated

# Assessment

- Stage ___ (stage)
- Resection ___ (resection)
- Primary site ___ (primary_site)
- LDH ___ (ldh), upper limit of normal ___ (ldh_uln)
- CNS ___ (cns)
- Bone marrow lymphoma cells ___ (marrow_pct) %

# Group classification

- Group A
    - Completely resected stage I
    - or completely resected abdominal stage II
- Group B (low risk)
    - Unresected stage I and nonabdominal stage II
    - or stage III with low LDH (≤2 X the upper limit of normal [ULN])
    - Group B risk split per Minard-Colin V, et al, N Engl J Med 2020
- Group B (high risk)
    - Stage III with high LDH (>2 X ULN)
    - or all CNS-negative stage IV with bone marrow involvement (<25% lymphoma cells)
    - Group B risk split per Minard-Colin V, et al, N Engl J Med 2020
- Group C
    - Any CNS involvement
        - The CNS is considered involved if one or more of the following applies
        - Any lymphoma cells by cytology in CSF
        - Any CNS tumor mass by imaging
        - Cranial nerve palsy, if not explained by extracranial tumor
        - Clinical spinal cord compression
        - Parameningeal extension: cranial and/or spinal
    - and/or bone marrow involvement (≥25% lymphoma cells)
    - Group C per Cairo MS, et al, Blood 2007

# Next

- Group A, induction therapy / initial treatment, go to PBCL-6
- Group B (low risk), induction therapy / initial treatment, go to PBCL-7
- Group B (high risk), induction therapy / initial treatment, go to PBCL-8
- Group C, induction therapy / initial treatment, go to PBCL-9
