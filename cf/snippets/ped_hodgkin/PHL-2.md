+++
id           = "ped_hodgkin/PHL-2"
gid          = "ped_hodgkin"
ref          = "PHL-2"
page         = 12
title        = "Assigning a clinical trial risk group by stage, symptoms, and risk factors"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-1", "PHL-3", "PHL-4", "PHL-5"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ann_arbor_stage"
type = "enum"
options = ["I", "II", "III", "IV"]
[[variables]]
name = "ab_symptoms"
type = "enum"
options = ["A", "B"]
[[variables]]
name = "esr"
type = "text"
[[variables]]
name = "mmr"
type = "text"
[[variables]]
name = "nodal_size"
type = "text"
[[variables]]
name = "e_lesions"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "intermediate", "high"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-2, p12
- Summary of clinical trial risk groups for classic Hodgkin lymphoma (CHL)
- Covers early stage (Ann Arbor stage I, II) and advanced stage (Ann Arbor stage III, IV)
- Risk group depends on Ann Arbor stage, A or B symptoms, and risk factors (Table 1, on this page)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma (CHL)
- Ann Arbor stage ___ (ann_arbor_stage)
- Symptoms ___ (ab_symptoms)
- ESR ___ (esr)
- Mediastinal mass ratio (MMR) ___ (mmr)
- Largest extra-mediastinal nodal conglomerate ___ (nodal_size)
- E lesions ___ (e_lesions)
- Historical risk stratification ___ (risk_group)

# Risk factors (Table 1)

- Defined separately for EuroNet-PHL-C1, COG AHOD0031, and AHOD1331
- ESR and B symptoms
    - ESR >30 mm/h, for EuroNet-PHL-C1
    - B symptoms, any, for COG AHOD0031 and AHOD1331
- Mediastinal mass
    - Bulky, for EuroNet-PHL-C1
    - MMR >0.33, for COG AHOD0031 and AHOD1331
- E lesions
    - Contiguous tumor volume >200 mL, for EuroNet-PHL-C1
    - >6 cm extra-mediastinal nodal conglomerate, for COG AHOD0031 and AHOD1331

# Historical risk stratification

- L, low risk
- I, intermediate risk
- H, high risk

# Clinical trials and regimens

- EuroNet-PHL-C1
    - OEPA ± ISRT, Treatment Group [TG] 1
    - OEPA/COPDAC ± ISRT, TG 2
    - OEPA/COPDAC ± ISRT, TG 3
- COG AHOD0031
    - ABVE-PC ± ISRT
- AHOD1331
    - Bv-AVE-PC ± ISRT
- HLHR13
    - AEPA/CAPDAC ± RNRT
- S1826
    - Nivolumab-AVD ± RSRT

# Next

- Stage I–II CHL without risk factors, go to PHL-3
- Stage I–II CHL with risk factors, go to PHL-4
- Stage III–IV CHL, go to PHL-5
