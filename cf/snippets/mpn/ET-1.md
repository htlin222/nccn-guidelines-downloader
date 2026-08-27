+++
id           = "mpn/ET-1"
gid          = "mpn"
ref          = "ET-1"
page         = 24
title        = "Treatment for very-low-risk, low-risk, or intermediate-risk essential thrombocythemia"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ET-2", "MPN-1", "MPN-2"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
biomarker = "jak2"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "jak2"
type = "enum"
options = ["mutated", "not detected"]
[[variables]]
name = "prior_thrombosis"
type = "text"
[[variables]]
name = "risk_category"
type = "enum"
options = ["very-low-risk", "low-risk", "intermediate-risk"]
[[variables]]
name = "plt"
type = "text"
[[variables]]
name = "wbc"
type = "text"
[[variables]]
name = "spleen"
type = "text"
[[variables]]
name = "vasomotor"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "acquired_vws"
type = "enum"
options = ["absent", "present", "not assessed"]
+++

# Source

- NCCN Myeloproliferative Neoplasms v2.2026, ET-1, p24
- Applies to essential thrombocythemia (ET) that is very-low-risk, low-risk, or intermediate-risk
- Special Considerations in the Treatment of MPN (MPN-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- JAK2 mutation ___ (jak2)
- Prior history of thrombosis ___ (prior_thrombosis)
- Risk category ___ (risk_category)
- Platelet count ___ (plt) / WBC ___ (wbc)
- Spleen ___ (spleen)
- Vasomotor/microvascular disturbances ___ (vasomotor)
- Acquired VWS ___ (acquired_vws)
- Disease-related symptoms ___ (symptoms)

# Risk category

- Very-low-risk
    - Age 60 years or younger
    - No JAK2 mutation
    - No prior history of thrombosis
- Low-risk
    - Age 60 years or younger
    - JAK2 mutation
    - No prior history of thrombosis
- Intermediate-risk
    - Age older than 60 years
    - No JAK2 mutation
    - No prior history of thrombosis
- High-risk ET is treated on ET-2

# Treatment of very-low-risk ET

- Manage cardiovascular risk factors (MPN-H)
- Aspirin (81-100 mg/day), only for patients with vasomotor/microvascular disturbances
    - Use with caution in patients with acquired VWS
    - Higher-dose aspirin may be appropriate in selected patients as clinically indicated
    - Weigh the risks and benefits of higher-dose aspirin (more than 100 mg) based on the presence of vasomotor symptoms versus the risk of bleeding
    - Aspirin twice daily may be considered for patients with refractory symptoms or cardiovascular risk factors

# Treatment of low-risk or intermediate-risk ET

- Manage cardiovascular risk factors (MPN-H)
- Aspirin (81-100 mg/day)
    - Use with caution in patients with acquired VWS
    - Higher-dose aspirin may be appropriate in selected patients as clinically indicated
    - Weigh the risks and benefits of higher-dose aspirin (more than 100 mg) based on the presence of vasomotor symptoms versus the risk of bleeding
    - Aspirin twice daily may be considered for patients with refractory symptoms or cardiovascular risk factors

# Asymptomatic with no indications for cytoreductive therapy

- Monitor for new thrombosis
- Monitor for acquired VWS
- Monitor for disease-related major bleeding
- Evaluate for indications for cytoreductive therapy, as clinically indicated
- Monitor signs/symptoms of disease progression (MPN-E 1 of 2), as clinically indicated
    - Supportive Care for Patients with MPN (MPN-F)

# Symptomatic with potential indications for cytoreductive therapy

- Disease progression
    - New thrombosis, acquired VWS, and/or disease-related major bleeding
    - Splenomegaly
    - Progressive thrombocytosis and/or leukocytosis
    - Disease-related symptoms (eg, pruritus, night sweats, fatigue)
    - Vasomotor/microvascular disturbances not responsive to aspirin (eg, headaches/chest pain, erythromelalgia)
- Initiate cytoreductive therapy
    - Perform bone marrow aspirate and biopsy to rule out disease progression to MF, prior to the initiation of cytoreductive therapy
    - Normalization of blood counts after initiation of treatment is usually a goal in clinical practice, but it is not associated with long-term clinical benefit
    - There are no evidence-based data to recommend a target WBC or platelet count for patients receiving cytoreductive therapy
    - In selected patients with a severe thrombotic event or other disease-related symptoms, normalization of blood counts might be a goal of treatment

# Next

- Initiate cytoreductive therapy, see High-risk ET (ET-2)
- Post-ET MF, see MPN-2
    - WHO and ICC Diagnostic Criteria for Post-ET MF (MPN-C)
- Accelerated/blast phase MPN, see MPN-AP/BP-1
