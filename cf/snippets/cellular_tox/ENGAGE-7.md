+++
id           = "cellular_tox/ENGAGE-7"
gid          = "cellular_tox"
ref          = "ENGAGE-7"
page         = 24
title        = "Considerations for re-challenge of T-cell-engaging bispecific antibody therapy after CRS"
nccn_version = "2.2026"
nccn_date    = "11/11/2025"
generated    = "2026-08-28"
see_also     = ["ENGAGE-3", "ENGAGE-5", "ENGAGE-6", "ENGAGE-8"]

[facets]
disease   = "cellular_tox"
timepoint = "supportive"

[[variables]]
name = "agent"
type = "text"
[[variables]]
name = "route"
type = "enum"
options = ["IV", "SQ", "continuous IV infusion"]
[[variables]]
name = "crs_grade"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "dose_completed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "occurrence"
type = "enum"
options = ["first", "recurrent"]
[[variables]]
name = "crs_duration"
type = "text"
[[variables]]
name = "time_since_resolution"
type = "text"
+++

# Source

- NCCN Management of Lymphocyte Engager-Related Toxicities v2.2026, ENGAGE-7, p24
- Applies to re-challenge of T-cell-engaging bispecific antibody therapy after CRS
- The risks associated with each agent vary significantly
    - Refer to the individual FDA-approved prescribing information for guidance on toxicity management after initiation of lymphocyte engagers (eg, T-cell-engaging bispecific antibodies)
    - Refer to the appropriate clinical trial protocols for the same
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Lymphocyte engager in use ___ (agent)
- Route ___ (route)
- Grade of this CRS event ___ (crs_grade)
- Administration of the current dose already completed ___ (dose_completed)
- First occurrence or recurrent CRS ___ (occurrence)
- Duration of this CRS event ___ (crs_duration)
- Time since CRS resolved ___ (time_since_resolution)

# Applies to every agent on this page

- All grade 4: permanently discontinue bispecific therapy

# Glofitamab-gxbm IV, mosunetuzumab-axgb IV

- Current dose
    - Grade 1 & 2: interrupt therapy
        - If symptoms resolve, resume at 50% of rate
    - Grade 3: hold
- Next dose
    - Grade 1 & 2: CRS resolved at least 72 hours before next dose
    - Grade 3: hospitalize for 24 hours for next dose

# Elranatamab-bcmm, linvoseltamab-gcpt IV, talquetamab-tgvs SQ, teclistamab-cqyv SQ

- Current dose
    - Hold dosing if not already completed administration
- Next dose
    - Grade 1 & 2: CRS resolved for 24 hours
    - Grade 3: hospitalize for 48 hours for next dose

# Epcoritamab-bysp SQ

- Current dose
    - Hold dosing if not already completed administration
- Next dose
    - Grade 1 & 2: CRS resolved for 24 hours
    - Grade 3: hospitalize for 24 hours for next dose

# Blinatumomab continuous IV infusion

- Current dose
    - Grade 1 & 2: continue therapy
    - Grade 3: interrupt
        - Resume at 9 mcg/day
        - Can be escalated to 28 mcg/day after 7 days
- Next dose
    - N/A

# Tarlatamab-dlle IV

- Current dose
    - Hold
        - If symptoms resolve, resume at next scheduled dose
- Next dose
    - Grade 1: CRS resolved for 24 hours
    - Grade 2 & 3: CRS resolved, and hospitalize for at minimum 22 hours for next dose

# Tebentafusp-tebn IV

- Current dose
    - Grade 1: continue therapy
    - Grade 2: hold if not already administered
    - Grade 3 (first occurrence): hold
    - Grade 3 (recurrent or >48 hours): discontinue
- Next dose
    - Grade 2 (recurrent or persistent): premedicate with oral dexamethasone 4 mg 30 minutes prior to the next dose
    - Grade 3 (first occurrence): premedicate with oral dexamethasone 4 mg 30 minutes before next dose
        - Resume at the same dose
        - Resume escalation once dose tolerated
    - Grade 3 (recurrent or >48 hours): permanently discontinue
