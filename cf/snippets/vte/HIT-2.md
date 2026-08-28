+++
id           = "vte/HIT-2"
gid          = "vte"
ref          = "HIT-2"
page         = 55
title        = "Treatment for suspected or confirmed heparin-induced thrombocytopenia"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["HIT-1", "HIT-B", "VTE-D"]

[facets]
disease   = "vte"
timepoint = "supportive"

[[variables]]
name = "hit_status"
type = "enum"
options = ["suspected", "confirmed"]
[[variables]]
name = "bleeding_clotting"
type = "text"
[[variables]]
name = "thrombosis"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "clinical_stability"
type = "enum"
options = ["stable", "unstable"]
[[variables]]
name = "planned_procedures"
type = "text"
[[variables]]
name = "renal_hepatic"
type = "text"
[[variables]]
name = "anticoagulant"
type = "text"
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, HIT-2, p55
- Treatment for HIT, initial treatment for patients with suspected or confirmed HIT, and additional recommendations for patients with confirmed HIT
- Therapeutic Options for HIT: HIT-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- HIT status: ___ (hit_status)
- Global assessment of bleeding and clotting, performed prior to treatment: ___ (bleeding_clotting)
- Thrombosis: ___ (thrombosis)
- Clinically stable, without hemodynamically unstable PE and without limb-threatening thrombosis: ___ (clinical_stability)
- Planned invasive procedures: ___ (planned_procedures)
- Renal and hepatic function: ___ (renal_hepatic)
- Current anticoagulant: ___ (anticoagulant)

# Initial treatment for suspected or confirmed HIT

- Start/continue alternative non-heparin anticoagulant
    - There are no data from randomized controlled trials comparing different non-heparin anticoagulants to inform anticoagulant selection for treatment of HIT, with or without thrombosis
    - IV direct thrombin inhibitor (DTI) preferred for initial treatment of hospitalized patients with suspected HIT, ie, patients awaiting test results, or confirmed HIT
        - Many of these patients are critically ill and have contraindications to fondaparinux or DOACs
        - Opinions vary among Panel members regarding the quality of data supporting treatment options for the management of HIT in patients with cancer
    - DOACs or fondaparinux are reasonable options for initial treatment of patients who are clinically stable, without hemodynamically unstable PE or limb-threatening thrombosis or planned invasive procedures, and who do not have contraindications to the use of these agents as listed on VTE-D
        - Among the DOAC options listed for the management of HIT, rivaroxaban is supported by the most data, but there is no evidence to suggest that other DOAC options are not equally effective
        - Due to the lack of data, caution is recommended when using DOACs for management of HIT in patients with cancer
    - Full-dose anticoagulation is generally preferred, depending on assessment of bleed and clot risks
    - For agent selection and dosing, see Therapeutic Options for HIT (HIT-B)

# Additional recommendations for confirmed HIT

- Lower-extremity US to identify asymptomatic DVT
- Consider upper-extremity US based on clinical situation
- For patients who are stabilized on initial HIT treatment and have no procedures planned, consider transitioning to an alternative agent
    - DOACs (preferred), for patients with adequate renal and hepatic function and no other contraindications as listed on VTE-D
    - Fondaparinux
    - Warfarin
    - For agent selection and administration, see Therapeutic Options for HIT (HIT-B)
- Intravenous immunoglobulin
    - Shown to be effective in patients with refractory HIT as well as autoimmune HIT
    - Also a useful treatment for patients at high risk of bleeding who have HIT

# Duration of therapy

- HIT without thrombosis, at least 4 weeks, in the absence of serious bleeding risk
- HIT with thrombosis, at least 3 months as indicated for the thrombotic event
