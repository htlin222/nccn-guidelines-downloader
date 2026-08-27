+++
id           = "growthfactors/ICAHT-1"
gid          = "growthfactors"
ref          = "ICAHT-1"
page         = 28
title        = "Pre-treatment risk assessment for ICAHT and indications for prophylactic G-CSF before immune effector cell therapy"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"
see_also     = ["ICAHT-2", "TGF-1", "MGF-B"]

[facets]
disease   = "growthfactors"
timepoint = ["prevention", "supportive"]

[[variables]]
name = "iec_therapy"
type = "text"
[[variables]]
name = "marrow_involvement"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "tumor_burden"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cytopenias"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "inflammatory_state"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "active_infection"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_hct"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "bridging_therapy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "car_hematotox"
type = "number"
[[variables]]
name = "risk_factor_count"
type = "number"
+++

# Source

- NCCN Hematopoietic Growth Factors v3.2026, ICAHT-1, p28
- Applies to risk evaluation for immune effector cell-associated hematologic toxicity (ICAHT) prior to immune effector cell (IEC) therapies
- All recommendations category 2A unless stated otherwise

# Assessment

- Planned IEC therapy ___ (iec_therapy)
- CAR-HEMATOTOX score ___ (car_hematotox)
- Number of ICAHT risk factors present ___ (risk_factor_count)

# Risk factors for ICAHT

- Bone marrow involvement by tumor ___ (marrow_involvement)
- High tumor burden ___ (tumor_burden)
    - Represented by elevated serum lactate dehydrogenase (LDH), or bulky disease by disease-specific staging criteria
- Preexisting cytopenias ___ (cytopenias)
- Preexisting inflammatory state ___ (inflammatory_state)
    - Represented by elevated C-reactive protein (CRP) or ferritin
- Active infection ___ (active_infection)
- Prior hematopoietic cell transplant ___ (prior_hct)
- Receipt of bridging therapy ___ (bridging_therapy)
    - Defined as cancer-directed therapy received between leukapheresis and lymphodepletion chemotherapy
- CAR-HEMATOTOX score ≥2

# Overall ICAHT risk

- Low, 0 risk factors
- High, ≥1 risk factors

# Low risk, prophylactic use of G-CSFs for febrile neutropenia

- G-CSFs may be considered for patients who develop ICAHT (see MGF-B)
    - Severe neutropenia (<500/uL) for ≥7 days within the first 30 days postinfusion
    - Recurrent neutropenia (<1000/uL) not explained by another etiology beyond 30 days postinfusion

# High risk, prophylactic use of G-CSFs for febrile neutropenia

- Initiate G-CSFs at ≥2 days postinfusion (see MGF-B)
- If no response after ≥5 days of G-CSF support and ≥14 days postinfusion, evaluate for alternate etiologies of neutropenia
- Consider hematopoietic cell boost
    - Only if cryopreserved autologous stem cells are available

# Next

- ICAHT develops, or high risk, G-CSF support, go to MGF-B
- No response to G-CSF support, evaluate for alternate etiologies of neutropenia, go to TGF-1 and ICAHT-2
