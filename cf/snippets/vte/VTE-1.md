+++
id           = "vte/VTE-1"
gid          = "vte"
ref          = "VTE-1"
page         = 6
title        = "Inpatient VTE prophylaxis for hospitalized patients with cancer"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["VTE-2", "VTE-A", "VTE-B"]

[facets]
disease   = "vte"
timepoint = ["prevention", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "admission_type"
type = "enum"
options = ["medical", "surgical"]
[[variables]]
name = "cancer_dx"
type = "text"
[[variables]]
name = "anticoag_contraindication"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "platelets"
type = "number"
[[variables]]
name = "pt"
type = "number"
[[variables]]
name = "aptt"
type = "number"
[[variables]]
name = "liver_kidney"
type = "text"
[[variables]]
name = "vte_risk"
type = "text"
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, VTE-1, p6
- Inpatient venous thromboembolism prophylaxis
- Population at risk: adults admitted for medical or surgical hospitalizations, with a diagnosis of cancer or clinical suspicion of cancer
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, admitted for ___ (admission_type) hospitalization
- Diagnosis of cancer, or clinical suspicion of cancer: ___ (cancer_dx)
    - VTE prophylaxis is recommended for all patients hospitalized with cancer, excluding those with basal cell or squamous cell skin cancer
- Assess VTE risk factors, and the risks and benefits of VTE prophylaxis
- Stress the importance of adherence to prevention programs
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health (DIS-A)
- Contraindication to anticoagulation: ___ (anticoag_contraindication)
    - Contraindications to VTE Prophylaxis (VTE-A)

# Initial workup

- History and physical (H&P)
- Complete blood count (CBC) with platelet count: ___ (platelets)
- Prothrombin time (PT): ___ (pt)
- Activated partial thromboplastin time (aPTT): ___ (aptt)
- Liver and kidney function tests: ___ (liver_kidney)
- VTE risk assessment: ___ (vte_risk)
    - Multiple risk assessment models (RAMs) have been developed for patients hospitalized for medical or surgical care, but none have been validated in prospective management studies conducted in patients hospitalized with cancer

# Initial prophylaxis

- Institutions are strongly encouraged to implement best practice programs to monitor provider and patient adherence to VTE prophylaxis
- No contraindication to anticoagulation, give pharmacologic prophylaxis
    - Prophylactic anticoagulation therapy (category 1); see VTE Prophylaxis Options (VTE-B)
    - Consider preoperative dosing with unfractionated heparin (UFH) or low-molecular-weight heparin (LMWH) for high-risk surgery, eg, abdominal or pelvic surgery
        - With or without intermittent pneumatic compression (IPC) devices
        - Adding mechanical prophylaxis to pharmacologic prophylaxis in patients who are critically ill may not reduce the incidence of DVT
- Contraindication to anticoagulation, give mechanical prophylaxis
    - IPC
        - In contrast to graduated compression stockings (GCS), IPC significantly reduced deep vein thrombosis (DVT) and was associated with a lower risk of skin complications
        - Most data come from patients admitted for surgery or stroke; this is an extrapolation to the medical population
        - See Contraindications to VTE Prophylaxis (VTE-A)

# Next

- VTE Prophylaxis Following Discharge and for At-Risk Ambulatory Patients with Cancer, go to VTE-2
