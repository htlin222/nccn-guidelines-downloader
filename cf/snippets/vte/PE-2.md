+++
id           = "vte/PE-2"
gid          = "vte"
ref          = "PE-2"
page         = 21
title        = "Treatment of acute pulmonary embolism, including when anticoagulation is contraindicated"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["PE-1", "VTE-D", "VTE-E", "VTE-F", "VTE-G", "VTE-H", "VTE-I", "VTE-J"]

[facets]
disease   = "vte"
timepoint = ["primary-treatment", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_status"
type = "text"
[[variables]]
name = "hemodynamics"
type = "enum"
options = ["stable", "unstable"]
[[variables]]
name = "sbp"
type = "number"
[[variables]]
name = "hr"
type = "number"
[[variables]]
name = "contraindication"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "rv_overload"
type = "text"
[[variables]]
name = "nt_probnp"
type = "text"
[[variables]]
name = "troponin"
type = "text"
[[variables]]
name = "lactate"
type = "text"
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, PE-2, p21
- PE: treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer status ___ (cancer_status)
- Hemodynamic status: ___ (hemodynamics)
- Systolic blood pressure ___ (sbp) mmHg
- Heart rate ___ (hr) bpm
- Contraindication to anticoagulation: ___ (contraindication)
    - Contraindications to therapeutic anticoagulation (VTE-E)
    - Management of anticoagulation for VTE in patients with chemotherapy-induced thrombocytopenia (VTE-F)
- Signs of decompensation or life-threatening PE
    - Hypoxemia
    - Hypotension
    - Dyspnea
    - Tachycardia
    - Tachypnea

# No contraindication to anticoagulation

- Acute management using anticoagulation
    - Therapeutic anticoagulation for VTE (VTE-D)
    - See progression or new thrombosis on therapeutic anticoagulation (VTE-G), if extension of VTE or new VTE while on recommended anticoagulation therapy
- Continue anticoagulation (VTE-D)
- Consider outpatient care
    - Patients at lower risk as identified by clinical, laboratory, and imaging assessment can be considered for outpatient care
    - Consider echocardiography or CTA to assess right ventricular overload: ___ (rv_overload)
    - NT-proBNP: ___ (nt_probnp)
    - Troponin: ___ (troponin)
    - Lactate: ___ (lactate)
    - Clinical judgment is recommended for assessing risk in patients with PE based on a variety of clinical parameters
- Assess cancer status

# Contraindication to anticoagulation

- Consider IVC filter (retrievable filter preferred)
    - Consider filter placement if unable to treat with anticoagulation within 1 month of onset of symptomatic PE
- With or without embolectomy
    - Consider embolectomy for treatment of massive PE (category 2B)
- Follow frequently for change in clinical status
- Contraindication resolved
    - Recommend IVC filter removal, if tolerating anticoagulation therapy
    - Acute management using anticoagulation (VTE-D)
- Contraindication persists
    - Continue to follow frequently for change in clinical status

# Hemodynamically unstable PE

- Systemic or catheter-directed thrombolysis for hemodynamically unstable PE
    - Elements for consideration in decision not to treat (VTE-J)
    - Thrombolytic agents (VTE-H)
    - Contraindications to thrombolysis and indications for thrombolysis (VTE-I)
- Embolectomy for hemodynamically unstable PE
    - Consider embolectomy for treatment of massive PE (category 2B)
    - Recommend IVC filter removal, if tolerating anticoagulation therapy
- Hemodynamically unstable PE is defined as
    - Acute PE with sustained hypotension, systolic blood pressure <90 mmHg for at least 15 minutes or requiring inotropic support, not due to a cause other than PE, such as arrhythmia, hypovolemia, sepsis, or left ventricular (LV) dysfunction
    - Pulselessness
    - Persistent profound bradycardia, heart rate <40 bpm with signs or symptoms of shock
- In randomized controlled trials, systemic or catheter-directed thrombolysis/thrombectomy has not been associated with a favorable risk-versus-benefit profile in patients with hemodynamically stable or submassive PE
- Rescue thrombolysis/thrombectomy can be considered in patients with hemodynamically stable PE who deteriorate despite anticoagulation
    - Providers can consult with interventional radiology or vascular surgery colleagues to determine the appropriate use of mechanical embolectomy, suction embolectomy, and US-facilitated catheter-directed thrombolysis devices at their institutions
- For hemodynamic compromise, consider venoarterial extracorporeal membrane oxygenation (VA-ECMO)

# Next

- Contraindications to therapeutic anticoagulation, go to VTE-E
- Anticoagulation for VTE with chemotherapy-induced thrombocytopenia, go to VTE-F
- Therapeutic anticoagulation for VTE, go to VTE-D
- Extension of VTE or new VTE on anticoagulation, go to VTE-G
- Elements for consideration in decision not to treat, go to VTE-J
- Thrombolytic agents, go to VTE-H
- Contraindications and indications for thrombolysis, go to VTE-I
