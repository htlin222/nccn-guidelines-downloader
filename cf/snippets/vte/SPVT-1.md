+++
id           = "vte/SPVT-1"
gid          = "vte"
ref          = "SPVT-1"
page         = 22
title        = "Diagnosis of splanchnic vein thrombosis in a patient with cancer"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["SPVT-2", "VTE-1"]

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
name = "symptoms"
type = "text"
[[variables]]
name = "risk_factors"
type = "text"
[[variables]]
name = "cbc"
type = "text"
[[variables]]
name = "pt"
type = "number"
[[variables]]
name = "aptt"
type = "number"
[[variables]]
name = "bmp"
type = "text"
[[variables]]
name = "hepatic"
type = "text"
[[variables]]
name = "lactate"
type = "number"
[[variables]]
name = "imaging_result"
type = "enum"
options = ["positive", "negative", "indeterminate", "incidental"]
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, SPVT-1, p22
- Splanchnic vein thrombosis (SPVT): diagnosis
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, cancer diagnosis ___ (cancer_dx)
- Clinical suspicion of SPVT: ___ (symptoms)
    - Abdominal or mid-abdominal colicky pain
    - Abdominal distention
    - Rebound tenderness
    - Guarding
    - Fever
    - Anorexia
    - Nausea, vomiting
    - Diarrhea
    - Gastrointestinal (GI) bleeding
    - Hepatomegaly
    - Ascites
- Risk factors relevant to the cancer population for SPVT: ___ (risk_factors)
    - Recent abdominal surgery, eg, splenectomy
    - Abdominal mass/cancer, ie, hepatobiliary, luminal GI, or pancreatic cancers
    - Pancreatitis
    - Cirrhosis
    - Exogenous estrogens
    - Paroxysmal nocturnal hemoglobinuria (PNH)
    - Myeloproliferative neoplasms (MPNs) associated with the JAK2 V617F mutation, most common
    - MPNs associated with the CALR mutation, rare

# History and physical

- History and physical
    - Based on H&P, consider further diagnostic testing

# Laboratory testing

- CBC with platelet count and differential: ___ (cbc)
- PT: ___ (pt)
- aPTT: ___ (aptt)
- Basic metabolic profile: ___ (bmp)
- Hepatic profile: ___ (hepatic)
- Serum lactate: ___ (lactate)

# Imaging

- Consider local consultation with radiology to optimize imaging techniques/modality
- Abdominal duplex US
- CT abdomen/pelvis with contrast
- Abdominal MRI with contrast
- Result: ___ (imaging_result)

# Next

- Imaging positive, go to Treatment (SPVT-2)
- Incidental SPVT, go to Treatment (SPVT-2)
    - Weigh the risks and benefits of anticoagulation therapy on an individual basis
- Imaging negative or indeterminate
    - Continued suspicion of SPVT, repeat imaging
        - Consider local consultation with radiology to optimize imaging techniques/modality
    - No continued suspicion, investigate other causes
