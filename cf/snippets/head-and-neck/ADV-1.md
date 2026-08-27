+++
id           = "head-and-neck/ADV-1"
gid          = "head-and-neck"
ref          = "ADV-1"
page         = 70
title        = "Treatment of newly diagnosed very advanced head and neck cancer, by performance status"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-27"
see_also     = ["ADV-2", "ADV-3", "ADV-A", "SYST-A", "FOLL-A"]

[facets]
disease   = "head-and-neck"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "ps"
type = "enum"
options = ["0", "1", "2", "3", "4"]
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "fit_for_surgery"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ADV-1, p70
- Applies to very advanced head and neck cancer, newly diagnosed
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, very advanced head and neck cancer
- ___ (primary_site)
- ___ (ctnm)
- Performance status (PS) ___ (ps)
- Prior RT ___ (prior_rt)
- Fit for surgery ___ (fit_for_surgery)

# Presentation this page covers

- Newly diagnosed (M0), any one of
    - T4b, N0-3
    - Unresectable primary or nodal disease
        - Counts here only if no prior RT
    - Unfit for surgery
- M1 disease at initial presentation, go to ADV-2

# All patients

- Clinical trial preferred

# Treatment, PS 0-1

- Concurrent systemic therapy/RT
    - Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
    - RT per Principles of Radiation Therapy (ADV-A)
    - When using concurrent systemic therapy/RT, the preferred agent is cisplatin (category 1), see SYST-A
- or Induction systemic therapy (SYST-A), followed by
    - RT (ADV-A)
    - or systemic therapy/RT (SYST-A, ADV-A)

# Treatment, PS 2

- Concurrent systemic therapy/RT (preferred)
    - Systemic therapy per SYST-A, RT per ADV-A
    - Preference supported by Patil VM, Noronha V, Menon N, et al. Results of phase III randomized trial for use of docetaxel as a radiosensitizer in patients with head and neck cancer, unsuitable for cisplatin-based chemoradiation. J Clin Oncol 2023;41:2350-2361
- or RT (ADV-A)

# Treatment, PS 3-4

- Palliative RT (ADV-A)
- or Single-agent systemic therapy, for PS 3 only (SYST-A)
- or Best supportive care

# Next

- Post systemic therapy/RT, or post RT, neck evaluation, go to FOLL-A (2 of 2)
- Recurrent or persistent disease, go to ADV-3
- M1 disease at initial presentation, go to ADV-2
