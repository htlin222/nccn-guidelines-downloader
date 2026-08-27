+++
id           = "bladder/PCU-1"
gid          = "bladder"
ref          = "PCU-1"
page         = 61
title        = "Workup and diagnosis of suspected primary carcinoma of the urethra"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["UCP-1", "BL-1"]

[facets]
disease   = "bladder"
timepoint = ["workup", "diagnosis", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex_at_birth"
type = "enum"
options = ["male", "female"]
[[variables]]
name = "urethral_site"
type = "enum"
options = ["prostatic urethra", "non-prostatic male urethra", "female urethra"]
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "inguinal_nodes"
type = "text"
+++

# Source

- NCCN Bladder Cancer v2.2026, PCU-1, p61
- Applies to suspicion of carcinoma of the urethra, from workup through diagnosis
- On this page, the terms male and female refer to sex assigned at birth
- NCCN recommendations have been developed to be inclusive of individuals of all sexual and gender identities to the greatest extent possible
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, suspicion of carcinoma of the urethra
- Sex assigned at birth ___ (sex_at_birth)
- Site of tumor ___ (urethral_site)
- ___ (clinical_stage)
- Palpable inguinal lymph nodes ___ (inguinal_nodes)

# Workup

- Referral to a specialized center is recommended
- Cystourethroscopy
- EUA
- TUR or transvaginal biopsy
- Chest x-ray or CT
- MRI of pelvis with and without contrast
    - Principles of Imaging for Bladder/Urothelial Cancer (BL-A)

# Next

- Urothelial carcinoma of prostate, go to UCP-1
- Primary carcinoma of non-prostatic male urethra or female urethra
    - CIS, go to PCU-2
    - Ta, T1, go to PCU-2
    - T2, go to PCU-3
    - T3, T4, go to PCU-3
    - Palpable inguinal lymph nodes, go to PCU-3
    - Distant metastasis, go to PCU-3
