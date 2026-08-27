+++
id           = "cellular_tox/ENGAGE-8"
gid          = "cellular_tox"
ref          = "ENGAGE-8"
page         = 25
title        = "Considerations for re-challenge of T-cell-engaging bispecific antibody therapy after ICANS"
nccn_version = "2.2026"
nccn_date    = "11/11/2025"
generated    = "2026-08-28"
see_also     = ["ENGAGE-5", "CART-6"]

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
name = "icans_grade"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "recurrent_grade3"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "resolution"
type = "text"
[[variables]]
name = "time_since_resolution"
type = "text"
[[variables]]
name = "current_dose"
type = "text"
+++

# Source

- NCCN Management of Lymphocyte Engager-Related Toxicities v2.2026, ENGAGE-8, p25
- Applies to re-challenge of T-cell-engaging bispecific antibody therapy after ICANS
- The risks associated with each agent vary significantly
    - Refer to the individual FDA-approved prescribing information for guidance on toxicity management after initiation of lymphocyte engagers
    - Refer to the appropriate clinical trial protocols for the same
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (agent), given ___ (route)
- ICANS grade ___ (icans_grade)
- Recurrent grade 3 ICANS ___ (recurrent_grade3)
- Symptoms resolved to grade 1 or baseline ___ (resolution)
- Time since symptoms resolved to grade 1 or baseline ___ (time_since_resolution)
- Current dose ___ (current_dose)

# Applies to every agent on this page

- All grade 4: permanently discontinue bispecific therapy

# Re-challenge by agent

- Mosunetuzumab-axgb IV
    - Grade 1: continue therapy
    - Grade 2 and 3: hold therapy
        - Resume if symptoms resolve to grade 1 or baseline for at least 72 hours
    - Grade 3 recurrent: permanently discontinue
- Glofitamab-gxbm IV
    - Grade 1: continue therapy
    - Grade 2: hold therapy until symptoms improve to grade 1 or baseline
    - Grade 3: hold therapy
        - Resume if symptoms resolve to grade 1 or baseline for at least 7 days
- Elranatamab-bcmm SQ, linvoseltamab-gcpt IV, talquetamab-tgvs SQ, teclistamab-cqyv SQ, epcoritamab-bysp SQ
    - Hold therapy
    - Grade 2 and 3: resume if symptoms resolved to grade 1 or baseline
    - Grade 3 recurrent: permanently discontinue
- Blinatumomab continuous IV infusion
    - Grade 1 and 2: continue therapy
    - Grade 3: hold therapy until grade 1 for at least 3 days
        - Resume at 9 mcg/day
        - Can be escalated to 28 mcg/day after 7 days
    - Grade 3: permanently discontinue if the toxicity occurred at 9 mcg/day
    - Grade 3: permanently discontinue if there is no improvement to grade 1 within 7 days
- Tarlatamab-dlle IV
    - Hold therapy
        - If symptoms resolve, resume at next scheduled dose
    - Grade 3: permanently discontinue if no improvement to grade 1 within 7 days
    - Grade 3 recurrent: permanently discontinue
- Tebentafusp-tebn IV
    - Hold until grade 1 or baseline
    - Resume at same dose
        - Do not escalate if grade 3
    - Hold therapy during initial dose
        - Resume escalation once dosing tolerated
