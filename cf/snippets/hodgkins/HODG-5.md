+++
id           = "hodgkins/HODG-5"
gid          = "hodgkins"
ref          = "HODG-5"
page         = 14
title        = "Primary treatment and interim response-adapted therapy for stage IA/IIA favorable CHL by GHSG criteria"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-4", "HODG-A", "HODG-B", "HODG-C", "HODG-5B", "HODG-12"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II"]
timepoint = ["primary-treatment", "consolidation"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IA", "IIA"]
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "interim_deauville"
type = "enum"
options = ["1", "2", "3", "4", "5"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18-60 years) v2.2026, HODG-5, p14
- Applies to classic Hodgkin lymphoma, stage IA/IIA favorable disease by GHSG criteria
- Important Considerations for primary treatment: HODG-4
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma, stage ___ (stage)
- Favorable disease by GHSG criteria
- Sites of disease ___ (sites)
- Interim FDG-PET/CT Deauville ___ (interim_deauville)

# Primary treatment

- ABVD x 2 cycles (category 1)
    - Principles of Systemic Therapy: HODG-B, 1 of 8
- Then restage with FDG-PET/CT
    - Principles of FDG-PET/CT: HODG-A
    - Score on the FDG-PET 5-Point Scale (Deauville Criteria), HODG-A, 2 of 2

# Additional therapy for Deauville 1-3

- Preferred: combined modality therapy
    - ISRT 20 Gy, adapted from GHSG HD16
    - Principles of Radiation Therapy: HODG-C
- Useful in certain circumstances: chemotherapy alone
    - See Important Considerations on HODG-4
    - ABVD x 2 cycles (total 4), adapted from H10F and CALGB
        - Consider PFTs after 4 cycles of ABVD
    - AVD x 4 cycles, adapted from CALGB and RATHL
        - Only for Deauville 3
        - Outcomes for patients with Deauville 3 imaging participating in the CALGB 50604 trial were suboptimal
- Then Follow-up (HODG-12)

# Additional therapy for Deauville 4-5

- Go to HODG-5B
    - Score on the FDG-PET 5-Point Scale (Deauville Criteria), HODG-A, 2 of 2

# Next

- Deauville 1-3 after ABVD x 2 cycles, give additional therapy above, then Follow-up (HODG-12)
- Deauville 4-5 after ABVD x 2 cycles, go to HODG-5B
