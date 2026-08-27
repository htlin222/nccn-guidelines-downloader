+++
id           = "mpn/MPN-2"
gid          = "mpn"
ref          = "MPN-2"
page         = 7
title        = "Diagnosis and prognostic risk stratification of MF, PV, and ET"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["MPN-1", "MF-1", "MF-2", "PV-1", "PV-2", "ET-1", "ET-2"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
biomarker = "jak2"
timepoint = ["diagnosis", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mpn_diagnosis"
type = "enum"
options = ["PMF", "post-PV MF", "post-ET MF", "PV", "ET", "accelerated/blast phase MPN"]
[[variables]]
name = "jak2"
type = "text"
[[variables]]
name = "thrombosis_history"
type = "enum"
options = ["none", "prior thrombosis"]
[[variables]]
name = "karyotype"
type = "text"
[[variables]]
name = "molecular_testing"
type = "text"
[[variables]]
name = "risk_model"
type = "text"
[[variables]]
name = "risk_score"
type = "text"
+++

# Source

- NCCN Myeloproliferative Neoplasms v2.2026, MPN-2, p7
- Applies once workup is complete and an MPN diagnosis is being assigned (MPN-1)
- Diagnosis of MPN is based on the 2022 WHO criteria and ICC criteria
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Diagnosis ___ (mpn_diagnosis)
- JAK2 mutation ___ (jak2)
- Prior history of thrombosis ___ (thrombosis_history)
- Recent karyotyping available ___ (karyotype)
- Molecular testing available ___ (molecular_testing)
- Risk model applied ___ (risk_model)
- Risk score ___ (risk_score)

# Diagnosis

- Myelofibrosis (MF)
    - Primary myelofibrosis (PMF)
        - Confirm against the WHO and ICC Diagnostic Criteria for PMF (MPN-A)
    - Post-PV MF
        - Confirm against the WHO and ICC Diagnostic Criteria for PV and Post-PV MF (MPN-B)
    - Post-ET MF
        - Confirm against the WHO and ICC Diagnostic Criteria for ET and Post-ET MF (MPN-C)
- Polycythemia vera (PV)
    - Confirm against the WHO and ICC Diagnostic Criteria for PV and Post-PV MF (MPN-B)
- Essential thrombocythemia (ET)
    - Confirm against the WHO and ICC Diagnostic Criteria for ET and Post-ET MF (MPN-C)
- Accelerated/blast phase MPN
- Referral to specialized centers with expertise in the management of MPN is strongly recommended for all patients diagnosed with MF, PV, or ET

# Prognostic risk model

- Primary myelofibrosis (PMF)
    - Preferred: MIPSS-70 or MIPSS-70+ Version 2.0
    - DIPSS, if recent karyotyping is not available
    - DIPSS-Plus, if molecular testing is not available
- Post-PV or Post-ET MF
    - Preferred: MIPSS-70+ Version 2.0
    - DIPSS-Plus
    - MYSEC-PM
- Polycythemia vera (PV)
    - Conventional risk model
        - Marchioli R, et al. J Clin Oncol 2005;23:2224-2232
- Essential thrombocythemia (ET)
    - IPSET-thrombosis (revised)
        - The revised International Prognostic Score of Thrombosis for Essential Thrombocythemia is preferred for the risk stratification of ET
        - Haider M, et al. Am J Hematol 2016;91:390-394; Barbui T, et al. Blood Cancer J 2015;5:e369

# Risk stratification, myelofibrosis

- Lower-risk (MF-1)
    - MIPSS-70: ≤3
    - MIPSS-70+ Version 2.0: ≤3
    - DIPSS-Plus: ≤1
    - DIPSS: ≤2
    - MYSEC-PM: <14
- Higher-risk (MF-2)
    - MIPSS-70: ≥4
    - MIPSS-70+ Version 2.0: ≥4
    - DIPSS-Plus: >1
    - DIPSS: >2
    - MYSEC-PM: ≥14

# Risk stratification, polycythemia vera

- Low-risk (PV-1)
    - Age <60 years
    - No prior history of thrombosis
- High-risk (PV-2)
    - Age ≥60 years and/or prior history of thrombosis

# Risk stratification, essential thrombocythemia

- Very-low-risk (ET-1)
    - Age ≤60 years
    - No JAK2 mutation
    - No prior history of thrombosis
- Low-risk (ET-1)
    - Age ≤60 years
    - With JAK2 mutation
    - No prior history of thrombosis
- Intermediate-risk (ET-1)
    - Age >60 years
    - No JAK2 mutation
    - No prior history of thrombosis
- High-risk (ET-2)
    - History of thrombosis at any age
    - Or age >60 years with JAK2 mutation

# Next

- Lower-risk MF, go to MF-1
- Higher-risk MF, go to MF-2
- Low-risk PV, go to PV-1
- High-risk PV, go to PV-2
- Very-low-risk, low-risk, or intermediate-risk ET, go to ET-1
- High-risk ET, go to ET-2
- Accelerated/blast phase MPN, go to MPN-AP/BP-1
