+++
id           = "vte/PMA-1"
gid          = "vte"
ref          = "PMA-1"
page         = 47
title        = "Perioperative management of anticoagulation for a patient with cancer requiring surgery"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["PMA-A", "PMA-B", "PMA-C", "VTE-K"]

[facets]
disease   = "vte"
timepoint = ["primary-treatment", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_dx"
type = "text"
[[variables]]
name = "anticoagulant"
type = "text"
[[variables]]
name = "surgery"
type = "text"
[[variables]]
name = "urgency"
type = "enum"
options = ["emergent", "non-emergent"]
[[variables]]
name = "bleeding_risk"
type = "enum"
options = ["very low", "low", "moderate", "high"]
[[variables]]
name = "thromboembolism_risk"
type = "enum"
options = ["low", "moderate", "high"]
[[variables]]
name = "recent_vte"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, PMA-1, p47
- Perioperative management of anticoagulation and antithrombotic therapy
- Population at risk: patients with cancer on anticoagulants requiring surgery
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo with ___ (cancer_dx)
- Current anticoagulant: ___ (anticoagulant)
- Planned surgery: ___ (surgery)
- Surgery is ___ (urgency)
- VTE (eg, lower-extremity DVT ± PE) occurred within 1 month of surgery: ___ (recent_vte)

# Emergent surgery

- Reversal of anticoagulation
    - Reversal of Anticoagulation (VTE-K 1)
- Surgery
- Postoperative anticoagulation (PMA-C 2) based on bleeding risk (PMA-A) and thromboembolism risk (PMA-B)
- Consider IVC filter (retrievable filter preferred) if VTE (eg, lower-extremity DVT ± PE) occurred within 1 month of surgery
    - Patient should be assessed periodically for filter retrieval once anticoagulation is safely resumed

# Non-emergent surgery

- Assess bleeding risk (PMA-A): ___ (bleeding_risk)
- Very low bleeding risk
    - Continue anticoagulation
- Low, moderate, and high bleeding risk
    - Assess thromboembolism risk (PMA-B): ___ (thromboembolism_risk)
        - Consider IVC filter (retrievable filter preferred) if VTE (eg, lower-extremity DVT ± PE) occurred within 1 month of surgery
        - Patient should be assessed periodically for filter retrieval once anticoagulation is safely resumed
    - Low thromboembolism risk
        - Stop anticoagulation without bridging therapy (PMA-C 1)
        - Surgery
    - Moderate or high thromboembolism risk
        - Stop anticoagulation, consider bridging therapy (PMA-C 1)
        - Surgery
- Postoperative anticoagulation (PMA-C 3) based on bleeding risk (PMA-A) and thromboembolism risk (PMA-B)

# Next

- Bleeding risk assessment, go to PMA-A
- Thromboembolism risk assessment, go to PMA-B
- Perioperative and postoperative anticoagulation, go to PMA-C
- Reversal of anticoagulation, go to VTE-K 1
