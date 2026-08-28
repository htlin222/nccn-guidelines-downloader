+++
id           = "vte/DVT-3"
gid          = "vte"
ref          = "DVT-3"
page         = 19
title        = "Catheter-related DVT: diagnosis and treatment"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["DVT-1", "DVT-2", "VTE-D", "VTE-E", "VTE-H"]

[facets]
disease   = "vte"
timepoint = ["diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "catheter"
type = "text"
[[variables]]
name = "limb"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "imaging"
type = "text"
[[variables]]
name = "imaging_result"
type = "enum"
options = ["dvt", "no-dvt"]
[[variables]]
name = "contraindication"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "catheter_status"
type = "text"
+++

# Source

- NCCN Acute Deep Vein Thrombosis v1.2026, DVT-3, p19
- Applies to catheter-related DVT, diagnosis and treatment
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Central venous access device (CVAD): ___ (catheter)
- Affected side: ___ (limb)
- Clinical suspicion of catheter-related DVT
    - Unilateral limb swelling
    - Pain in supraclavicular space or neck
    - Dysfunctional catheter
- Catheter status: ___ (catheter_status)
- Contraindication to anticoagulation: ___ (contraindication)
    - Contraindications to therapeutic anticoagulation (VTE-E)
    - Management of anticoagulation for VTE in patients with chemotherapy-induced thrombocytopenia (VTE-F)

# Workup / imaging

- Imaging performed: ___ (imaging)
- Venous US
- CTV with contrast
- MRV with contrast
- X-ray venogram with contrast
- Result: ___ (imaging_result)

# Treatment, DVT and no contraindication to anticoagulation

- Anticoagulation for at least 3 months, or as long as the central venous access device (CVAD) is in place
    - Therapeutic anticoagulation for VTE (VTE-D)
    - If extension of VTE or new VTE while on recommended anticoagulation therapy, see progression or new thrombosis on therapeutic anticoagulation (VTE-G)
    - Anticoagulation without catheter removal is the preferred option for initial treatment, even for patients with symptomatic DVT, provided that the catheter is necessary, functional, and free of infection
    - There is very little clinical evidence regarding the appropriate duration of anticoagulation
    - Recommended duration depends on tolerance of anticoagulation, response to anticoagulation, and catheter status
    - Consider longer duration in patients with catheters with poor flow, persistent symptoms, or unresolved thrombus
    - Consider shorter duration if clot or symptoms resolve in response to anticoagulation and/or catheter removal
- Consider catheter removal if
    - Symptoms persist
    - Catheter is infected
    - Catheter is dysfunctional
    - Catheter is no longer necessary
- Consider catheter-directed therapy in appropriate candidates
    - Pharmacomechanical thrombolysis
    - Mechanical thrombectomy
    - Choice of regimen should be made based on institutional expertise/preferences, in conjunction with interventional radiology or vascular surgery colleagues (VTE-H)
    - Appropriate candidates may include patients at risk of limb loss (eg, phlegmasia cerulea dolens)
    - Appropriate candidates may include patients with central thrombus propagation despite anticoagulation
    - Appropriate candidates may include those with moderate to severely symptomatic proximal DVT
    - Candidates with high bleeding risk or contraindication to fibrinolytic may be candidates for percutaneous mechanical thrombectomy
    - Contraindications to thrombolysis and indications for thrombolysis (VTE-I)
    - Providers can consult with interventional radiology or vascular surgery colleagues to determine the appropriate use of mechanical embolectomy, suction embolectomy, and US-facilitated catheter-directed thrombolysis devices at their institutions

# Treatment, DVT with contraindication to anticoagulation

- Remove catheter, or follow with serial imaging as clinically indicated
- Follow for change in contraindication
    - Contraindication resolved, anticoagulation for at least 3 months
        - Therapeutic anticoagulation for VTE (VTE-D)
        - If extension of VTE or new VTE while on recommended anticoagulation therapy, see progression or new thrombosis on therapeutic anticoagulation (VTE-G)
        - Duration depends on tolerance of anticoagulation, response to anticoagulation, and catheter status
    - Contraindication persists, re-evaluate for risk/benefit of anticoagulation
        - Elements for consideration in decision not to treat (VTE-J)

# No DVT on imaging

- Evaluate for other causes
- Consider further diagnostic imaging/testing if initial testing is unrevealing and clinical suspicion remains high

# Next

- DVT and no contraindication to anticoagulation, anticoagulate and decide on catheter removal or catheter-directed therapy
- DVT with contraindication to anticoagulation, remove catheter or follow with serial imaging, and follow for change in contraindication
- No DVT, evaluate for other causes
