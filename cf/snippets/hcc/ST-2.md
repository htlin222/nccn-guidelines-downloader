+++
id           = "hcc/ST-2"
gid          = "hcc"
ref          = "ST-2"
page         = 31
title        = "Assigning a BCLC prognostic group from tumor burden, liver function, and performance status"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "HCC-1", "HCC-2"]

[facets]
disease   = "hcc"
timepoint = "staging"

[[variables]]
name = "nodules"
type = "text"
[[variables]]
name = "largest_nodule"
type = "text"
[[variables]]
name = "portal_invasion"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "extrahepatic_spread"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "liver_function"
type = "enum"
options = ["preserved", "end stage"]
[[variables]]
name = "transplant_burden"
type = "enum"
options = ["acceptable", "not acceptable"]
[[variables]]
name = "ps"
type = "enum"
options = ["0", "1", "2", "3", "4"]
[[variables]]
name = "bclc_stage"
type = "enum"
options = ["0", "A", "B", "C", "D"]
+++

# Source

- NCCN Hepatocellular Carcinoma v1.2026, ST-2, p31
- Barcelona Clinic Liver Cancer (BCLC) Staging System (2022), Table 1, definitions for prognostic groups
- Adapted with permission from Reig M, Forner A, Rimola J, et al. BCLC strategy for prognosis prediction and treatment recommendation: The 2022 update. J Hepatol 2022;76:681-693

# Assessment

- Number of nodules ___ (nodules)
- Largest nodule ___ (largest_nodule)
- Portal invasion ___ (portal_invasion)
- Extrahepatic spread ___ (extrahepatic_spread)
- Liver function ___ (liver_function)
- Tumor burden acceptable for transplant ___ (transplant_burden)
- Performance status (PS) ___ (ps)
- BCLC stage ___ (bclc_stage)

# Definitions for prognostic groups

- Very early stage (0)
    - Single ≤2 cm
    - Preserved liver function
        - Except for those with tumor burden acceptable for transplant
    - PS 0
- Early stage (A)
    - Single, or ≤3 nodules each ≤3 cm
    - Preserved liver function
        - Except for those with tumor burden acceptable for transplant
    - PS 0
- Intermediate stage (B)
    - Multinodular
    - Preserved liver function
        - Except for those with tumor burden acceptable for transplant
    - PS 0
- Advanced stage (C)
    - Portal invasion and/or extrahepatic spread
    - Preserved liver function
    - PS 1-2
- Terminal stage (D)
    - Any tumor burden
    - End stage liver function
    - PS 3-4
