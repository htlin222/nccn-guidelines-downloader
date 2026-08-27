+++
id           = "hodgkins/HODG-5"
gid          = "hodgkins"
ref          = "HODG-5"
page         = 14
title        = "Primary treatment and PET-adapted additional therapy for stage IA/IIA favorable classic Hodgkin lymphoma by GHSG criteria"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-4", "HODG-5B", "HODG-12"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II"]
timepoint = ["primary-treatment", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "text"
[[variables]]
name = "deauville"
type = "enum"
options = ["1", "2", "3", "4", "5"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18-60 years) v2.2026, HODG-5, p14
- Applies to classic Hodgkin lymphoma, stage IA/IIA favorable disease by GHSG criteria
- Important Considerations for primary treatment: HODG-4
- All recommendations are category 2A unless otherwise indicated
- References on HODG-8

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma
- ___ (presentation)
- Stage IA/IIA favorable disease by GHSG criteria

# Primary treatment

- ABVD x 2 cycles (category 1)
    - Principles of Systemic Therapy (HODG-B 1 of 8)
- See Important Considerations on HODG-4

# Restaging

- Restage with FDG-PET/CT
    - Principles of FDG-PET/CT (HODG-A)
- Score it on the FDG-PET 5-Point Scale (Deauville Criteria) (HODG-A 2 of 2)
    - Deauville ___ (deauville)

# Additional therapy, Deauville 1-3

- Preferred: combined modality therapy
    - ISRT 20 Gy (adapted from GHSG HD16)
    - Principles of Radiation Therapy (HODG-C)
- Useful in Certain Circumstances: chemotherapy alone
    - See Important Considerations on HODG-4
    - ABVD x 2 cycles (total 4) (adapted from H10F, CALGB)
        - Consider PFTs after 4 cycles of ABVD
    - AVD x 4 cycles (adapted from CALGB, RATHL)
        - Only for Deauville 3
        - Outcomes for patients with Deauville 3 imaging participating in the CALGB 50604 trial were suboptimal

# Next

- Deauville 1-3, after additional therapy, follow-up (HODG-12)
- Deauville 4-5, go to HODG-5B
