+++
id           = "breast/BINV-19"
gid          = "breast"
ref          = "BINV-19"
page         = 32
title        = "Treatment of local recurrence in the breast or chest wall, by prior surgery and prior RT"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-20", "BINV-3", "BINV-I", "BINV-K", "BINV-28"]

[facets]
disease   = "breast"
stage     = "recurrent"
timepoint = "recurrence"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "recurrence_site"
type = "enum"
options = ["in-breast", "chest wall"]
[[variables]]
name = "prior_surgery"
type = "enum"
options = ["BCS", "mastectomy"]
[[variables]]
name = "prior_axillary_surgery"
type = "enum"
options = ["none", "SLNB", "ALND"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Breast Cancer v6.2026, BINV-19, p32
- Treatment of local recurrence: in-breast or chest wall recurrence
- Applies without clinically overt axillary recurrence
- For regional with or without local recurrence, see BINV-20
- Multidisciplinary approach is especially important in the management of breast cancer recurrence, to consider all potential treatment options for optimal outcomes
- Radiation therapy per Principles of Radiation Therapy (BINV-I)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Site of current recurrence: ___ (recurrence_site)
- No clinically overt axillary recurrence
- Initial surgery: ___ (prior_surgery)
- Prior axillary surgery: ___ (prior_axillary_surgery)
- Prior RT to the area: ___ (prior_rt)

# Prior BCS, no prior RT

- Consider appropriate systemic therapy to best response if indicated
- Then repeat BCS or mastectomy
- Consider surgical axillary staging
    - If prior SLNB, a repeat SLNB may be considered, although the accuracy of repeat SLNB is unproven
    - If prior ALND, repeat SLNB with lymphoscintigraphy may be considered rather than ALND
- RT after BCS, and if indicated after mastectomy (BINV-3)

# Prior BCS, prior RT

- Consider appropriate systemic therapy to best response if indicated
- Then total mastectomy
    - Repeat BCS with or without adjuvant APBI/PBI may be considered in selected patients who decline mastectomy and otherwise meet consensus criteria for radiotherapy omission or APBI/PBI
    - There are limited data for a repeat BCS in this setting
- Consider surgical axillary staging
- Repeat RT if feasible and indicated
    - Factor in any prior radiation to the area
    - Factor in the risk of late normal tissue toxicity from the sum of the prior and planned radiation courses

# Prior mastectomy, no prior RT

- Consider appropriate systemic therapy to best response if indicated (BINV-K, BINV-M, BINV-P, BINV-Q)
- Then surgical resection if feasible
- Consider surgical axillary staging
    - After mastectomy, a repeat SLNB may be considered, although there are limited data in this setting
    - If prior ALND or mastectomy, repeat SLNB with lymphoscintigraphy may be considered rather than ALND
- PMRT (BINV-3)

# Prior mastectomy, prior RT

- Consider appropriate systemic therapy to best response if indicated (BINV-K, BINV-M, BINV-P, BINV-Q)
- Then surgical resection if feasible
- Consider surgical axillary staging
    - After mastectomy, a repeat SLNB may be considered, although there are limited data in this setting
    - If prior ALND or mastectomy, repeat SLNB with lymphoscintigraphy may be considered rather than ALND
- Repeat RT if feasible and indicated
    - Factor in any prior radiation to the area
    - Factor in the risk of late normal tissue toxicity from the sum of the prior and planned radiation courses

# Next

- Consider appropriate adjuvant systemic therapy as clinically indicated (BINV-K, BINV-M, BINV-P, BINV-Q)
- Supportive care, see NCCN Guidelines for Palliative Care and NCCN Guidelines for Supportive Care
- See Principles of Survivorship, BINV-28
- Regional with or without local recurrence, go to BINV-20
