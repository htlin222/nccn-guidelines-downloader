+++
id           = "bladder/BL-3"
gid          = "bladder"
ref          = "BL-3"
page         = 10
title        = "Initial management and follow-up of NMIBC by risk group"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-2", "BL-4", "BL-5", "BL-E", "BL-F"]

[facets]
disease   = "bladder"
timepoint = ["primary-treatment", "surveillance", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "turbt_date"
type = "text"
[[variables]]
name = "prior_bcg"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cystoscopy"
type = "text"
[[variables]]
name = "cytology"
type = "text"
[[variables]]
name = "imaging"
type = "text"
+++

# Source

- NCCN Non-Muscle-Invasive Bladder Cancer v2.2026, BL-3, p10
- Applies to NMIBC after the risk group has been assigned on BL-2
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- NMIBC risk group (BL-2): ___ (risk_group)
- TURBT date: ___ (turbt_date)
- Prior Bacillus Calmette-Guerin (BCG): ___ (prior_bcg)
- Cystoscopy: ___ (cystoscopy)
- Cytology: ___ (cytology)
- Imaging: ___ (imaging)

# Initial management

- Low risk
    - Surveillance
        - Should consider single perioperative instillation of intravesical chemotherapy at time of TURBT
- Intermediate risk
    - Intravesical therapy (preferred)
        - Principles of Instillation Therapy (BL-F)
        - Options for intravesical therapy for intermediate-risk disease include BCG and chemotherapy
        - Should consider BCG availability in decision-making
    - or Surveillance
- High risk
    - Go to BL-4

# Follow-up

- Follow-up (BL-E)
- If prior BCG, maintenance BCG (preferred)
    - Principles of Instillation Therapy (BL-F)
- Reverse thermal hydrogel-based formulation of mitomycin for intravesical solution can be considered
    - For patients with recurrent, low-grade, intermediate-risk NMIBC who prefer to avoid surgery

# Next

- Cytology positive, imaging negative, and cystoscopy negative, go to BL-5
- Cystoscopy positive, reclassify AUA risk group and manage accordingly
