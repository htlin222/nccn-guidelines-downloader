+++
id           = "pain/PAIN-6"
gid          = "pain"
ref          = "PAIN-6"
page         = 15
title        = "Management of pain crisis: initial opioid dose, reassessment interval, and titration"
nccn_version = "2.2026"
nccn_date    = "07/13/26"
generated    = "2026-08-28"
see_also     = ["PAIN-A", "PAIN-G", "PAIN-H", "PAIN-3", "PAIN-5", "PAIN-7"]

[facets]
disease   = "pain"
timepoint = "supportive"

[[variables]]
name = "pain_score"
type = "text"
[[variables]]
name = "opioid_status"
type = "enum"
options = ["opioid-naive", "opioid-tolerant"]
[[variables]]
name = "opioid_24h"
type = "text"
[[variables]]
name = "route"
type = "enum"
options = ["PO", "IV", "SC", "PCA"]
+++

# Source

- NCCN Adult Cancer Pain v2.2026, PAIN-6, p15
- Applies to severe pain / pain crisis by pain intensity rating (PAIN-A)
- Also applies as indicated for uncontrolled pain, patient goals not met
- All recommendations category 2A unless otherwise indicated

# Assessment

- Pain intensity rating ___ (pain_score) (PAIN-A)
- Patient goals for pain control not met
- Opioid status ___ (opioid_status)
    - Opioid-naive: not chronically receiving opioid analgesic on a daily basis, and therefore has not developed significant tolerance
    - Opioid-tolerant: chronically receiving opioid analgesic on a daily basis
    - FDA identifies tolerance as any of the following for a week or longer
        - At least 25 mcg/h fentanyl patch
        - At least 60 mg of morphine daily
        - At least 30 mg of PO oxycodone daily
        - At least 8 mg of PO hydromorphone daily
        - An equianalgesic dose of another opioid
- Total opioid taken in the previous 24 h ___ (opioid_24h)
- Route of delivery ___ (route)
    - Preference of PO or IV/SC route of delivery may differ based on the location of care

# Route options

- PO analgesics, immediate release, peak effect 60 min
- Intravenous (IV) bolus, peak effect 15 min
- Patient-controlled analgesia (PCA)
- Subcutaneous (SC) bolus, peak effect 30 min, can be substituted for IV

# Initial dose (PAIN-G)

- PO route
    - Opioid-naive: dose 5–15 mg PO short-acting morphine sulfate or equivalent
    - Opioid-tolerant: administer PO opioid dose equivalent to 10%–20% of total opioid taken in the previous 24 h
- IV route
    - Opioid-naive: dose 2–5 mg IV morphine sulfate or equivalent
    - Opioid-tolerant: administer IV opioid dose equivalent to 10%–20% of the total opioid taken in the previous 24 h
- Dose and titrate with caution in patients with risk factors
    - Decreased renal function
    - Decreased hepatic function
    - Chronic lung disease
    - Upper airway compromise
    - Sleep apnea
    - Poor performance status

# Reassessment

- PO route: reassess efficacy and adverse effects at 60 min
- IV route: reassess efficacy and adverse effects at 15 min

# Subsequent dose

- Pain unchanged or increased: increase dose by 50%–100%
- Pain decreased but inadequately controlled: repeat same dose or increase dose by 25%
- Pain improved and adequately controlled: continue at current effective dose as needed over initial 24 h
- Dose and titrate with caution in patients with the risk factors listed above
- See General Principles on PAIN-3 for additional management strategies

# Monitoring

- Monitor for acute and chronic adverse effects
- See Management of Opioid Adverse Effects (PAIN-H)

# Next

- Pain improved and adequately controlled, go to Ongoing Care (PAIN-7)
- PO route, after 2–3 cycles, see PAIN-5 and Ongoing Care (PAIN-7)
- IV route, after 2–3 cycles, consider IV titration and/or see PAIN-5 and Ongoing Care (PAIN-7)
