+++
id           = "hodgkins/HODG-5B"
gid          = "hodgkins"
ref          = "HODG-5B"
page         = 16
title        = "Additional therapy for stage IA/IIA favorable CHL with Deauville 4-5 after 2 cycles of ABVD"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-2", "HODG-5", "HODG-12", "HODG-13"]

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
name = "risk_system"
type = "enum"
options = ["GHSG", "EORTC"]
[[variables]]
name = "interim_deauville"
type = "enum"
options = ["4", "5"]
[[variables]]
name = "sites"
type = "text"
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18-60 years) v2.2026, HODG-5B, p16
- Applies to classic Hodgkin lymphoma, stage IA/IIA favorable by GHSG or EORTC criteria
    - Staging/Risk Classification of CHL: HODG-2
- Entry point is Deauville 4-5 after 2 cycles of ABVD
- FDG-PET/CT performed per Principles of FDG-PET/CT (HODG-A)
- Deauville score read on the FDG-PET 5-Point Scale (HODG-A, 2 of 2)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma, stage ___ (stage)
- Favorable by ___ (risk_system) criteria (HODG-2)
- Sites of disease ___ (sites)
- ABVD x 2 cycles completed
- Interim FDG-PET/CT Deauville ___ (interim_deauville)

# Deauville 4 after 2 cycles of ABVD

- ABVD x 2 cycles (total 4)
    - Consider PFTs after 4 cycles of ABVD
    - The degree of abnormality of both Deauville 4 and 5 scores is quite variable, and clinical judgment is often necessary in such settings
    - If disease is responding well to chemotherapy but the interim FDG-PET/CT shows a Deauville 4 or 5 response, it may be appropriate to continue with the same chemotherapy regimen and repeat an FDG-PET/CT after 2 additional cycles
    - Use clinical judgement if a new lymph node can be explained by alternative etiology, eg, inflammation or infection
    - Use clinical judgement if residual FDG-uptake may be related to treatment, eg, immunotherapy
        - Repeating a short-interval FDG-PET/CT may be preferred in such scenarios
- Then restage with FDG-PET/CT (HODG-A)

# Deauville 5 after 2 cycles of ABVD

- Biopsy
    - At any point, if there is concern for refractory disease, a biopsy is appropriate to inform subsequent therapy
- Biopsy negative
    - ABVD x 2 cycles (total 4), consider PFTs after 4 cycles of ABVD
    - Then restage with FDG-PET/CT (HODG-A)
- Biopsy positive
    - Primary Refractory Disease (HODG-13)

# Restaging FDG-PET/CT after total of 4 cycles of ABVD

- Deauville 1-3
    - ISRT 30 Gy, adapted from RAPID and H10
    - Principles of Radiation Therapy: HODG-C
    - Then Follow-up (HODG-12)
- Deauville 4-5
    - Biopsy
    - If the post-chemotherapy FDG-PET/CT is only focally positive, consolidation RT may be appropriate, especially if a biopsy is not feasible (HODG-C, 2 of 16)
    - Biopsy negative
        - ISRT 30 Gy (HODG-C), then Follow-up (HODG-12)
    - Biopsy positive
        - Primary Refractory Disease (HODG-13)

# Next

- Deauville 1-3 after the total of 4 cycles, go to Follow-up (HODG-12)
- Biopsy negative after a Deauville 4-5 restaging scan, ISRT 30 Gy then Follow-up (HODG-12)
- Biopsy positive at any point, go to Primary Refractory Disease (HODG-13)
