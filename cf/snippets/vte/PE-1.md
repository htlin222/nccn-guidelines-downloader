+++
id           = "vte/PE-1"
gid          = "vte"
ref          = "PE-1"
page         = 20
title        = "Diagnosis of acute pulmonary embolism in patients with cancer"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["PE-2", "DVT-1", "VTE-1"]

[facets]
disease   = "vte"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_dx"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["suspected", "incidental"]
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
name = "nt_probnp"
type = "text"
[[variables]]
name = "troponin"
type = "text"
[[variables]]
name = "cxr"
type = "text"
[[variables]]
name = "ecg"
type = "text"
[[variables]]
name = "imaging_result"
type = "enum"
options = ["positive", "non-diagnostic", "negative"]
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, PE-1, p20
- Diagnosis of acute pulmonary embolism (PE)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer diagnosis ___ (cancer_dx)
- Presentation: ___ (presentation)
- Clinical suspicion of acute PE
    - Current DVT, or recent history of DVT
    - Unexplained shortness of breath
    - Unexplained chest pain
    - Unexplained tachycardia
    - Unexplained apprehension
    - Unexplained tachypnea
    - Syncope
    - Hypoxemia
- Incidental acute PE, including subsegmental PE

# Evaluation

- Comprehensive medical history and physical (H&P)
- CBC with platelet count: ___ (platelets)
- Prothrombin time (PT): ___ (pt)
- Activated partial thromboplastin time (aPTT): ___ (aptt)
- Liver and kidney function tests: ___ (liver_kidney)
- N-terminal prohormone B-type natriuretic peptide (NT-proBNP): ___ (nt_probnp)
- Troponin: ___ (troponin)
- Chest x-ray: ___ (cxr)
    - May not be necessary if CTA is planned
- Electrocardiogram (ECG): ___ (ecg)
- D-dimer has limited utility in patients with cancer

# Imaging

- In cases with high suspicion of PE and no contraindications, consider initiating early anticoagulation while waiting for imaging results
- CT angiography (CTA) with contrast
- X-ray pulmonary angiography with contrast
    - Rarely used, unless combined with clot extraction or thrombolytic therapy
- Magnetic resonance angiography (MRA) with contrast
- Ventilation/perfusion (VQ) scan (lung scan), if CTA is contraindicated
    - eg, renal insufficiency
    - eg, allergy refractory to anaphylaxis prophylaxis
- Echocardiogram for right ventricular overload
- Imaging result: ___ (imaging_result)

# Incidental acute PE

- Repeat imaging and diagnostic studies are not routinely needed in patients with incidental PE
- Consider outpatient care for these patients
- If not already performed
    - Comprehensive medical H&P
    - CBC with platelet count
    - PT
    - aPTT
    - Liver and kidney function tests
    - ECG

# Next

- Positive, PE treatment, go to PE-2
- Non-diagnostic, alternative diagnostic imaging, then treat per clinical judgment (DVT-1)
- Negative, evaluate for other causes
- Incidental acute PE, PE treatment, go to PE-2
