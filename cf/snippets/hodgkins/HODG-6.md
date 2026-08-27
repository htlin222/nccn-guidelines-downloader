+++
id           = "hodgkins/HODG-6"
gid          = "hodgkins"
ref          = "HODG-6"
page         = 17
title        = "Response-adapted primary treatment of stage I/II unfavorable classic Hodgkin lymphoma with B symptoms, bulky mediastinal disease and/or >10 cm adenopathy, at least 4 nodal sites, and/or ESR 50 mm/hr or higher"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-4", "HODG-6A", "HODG-12", "HODG-13"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "bulky"]
timepoint = ["primary-treatment", "consolidation"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II"]
[[variables]]
name = "nodal_sites"
type = "number"
[[variables]]
name = "esr"
type = "number"
[[variables]]
name = "deauville"
type = "enum"
options = ["1", "2", "3", "4", "5"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18–60 years) v2.2026, HODG-6, p17
- Applies to classic Hodgkin lymphoma, stage I/II unfavorable, with any of the unfavorable features below
- Important considerations for primary treatment: HODG-4
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, classic Hodgkin lymphoma
- Stage ___ (stage), unfavorable
- Unfavorable features present
    - B symptoms
    - Bulky mediastinal disease and/or >10 cm adenopathy
    - Nodal sites ___ (nodal_sites), unfavorable if 4 or more
    - ESR ___ (esr) mm/hr, unfavorable if 50 or higher
- Interim FDG-PET/CT Deauville score ___ (deauville)
    - Deauville scoring by the FDG-PET 5-point scale (HODG-A 2 of 2)

# Primary treatment

- ABVD x2 cycles
    - Principles of Systemic Therapy (HODG-B 1 of 8)
- Restage with FDG-PET/CT
    - Principles of FDG-PET/CT (HODG-A)

# Additional therapy, Deauville 1–3 after ABVD x2

- Combined modality therapy
    - ABVD x 2 cycles (total 4) + ISRT 30 Gy (adapted from H10U)
        - Consider PFTs after 4 cycles of ABVD
        - Principles of Radiation Therapy (HODG-C)
- Chemotherapy alone
    - AVD x 4 cycles (adapted from RATHL, H10U)
    - ABVD x 2 cycles (total 4) (adapted from H10U)
        - Consider PFTs after 4 cycles of ABVD

# Additional therapy, Deauville 4–5 after ABVD x2

- BrECADD + granulocyte colony-stimulating factor (G-CSF) x 2 cycles
    - Principles of Systemic Therapy (HODG-B 1 of 8)
    - Not formally tested in this setting, but reasonable as escalation therapy given its improved safety profile compared to escalated BEACOPP in the frontline setting for advanced-stage CHL (Borchmann P, et al. Lancet 2024;404:341-352)
    - Ongoing clinical trials that utilize escBEACOPP with dacarbazine substituted for procarbazine may be appropriate
    - Utilize with caution in those with neuropathy
    - Pneumocystis jiroveci pneumonia (PJP) prophylaxis is recommended for all BV containing regimens
- Other regimens, see HODG-6A
- Before escalating, weigh the special considerations for a Deauville 4–5 response
    - The degree of abnormality of both Deauville 4 and 5 scores is quite variable, and clinical judgment is often necessary in such settings
    - If disease is responding well to chemotherapy but an interim FDG-PET/CT shows a Deauville 4 or 5 response, it may be appropriate to continue with the same chemotherapy regimen and repeat an FDG-PET/CT after 2 additional cycles
    - If a post-chemotherapy FDG-PET/CT is only focally positive, consolidation RT may be appropriate, especially if a biopsy is not feasible, see Principles of Radiation Therapy (HODG-C 2 of 16)
    - Use clinical judgement if a new lymph node can be explained by alternative etiology, eg, inflammation or infection
    - Use clinical judgement if residual FDG uptake may be related to treatment, eg, immunotherapy
    - Repeating a short-interval FDG-PET/CT may be preferred in such scenarios
    - At any point, if there is concern for refractory disease, a biopsy is appropriate to inform subsequent therapy

# Restage after BrECADD

- Restage with FDG-PET/CT
    - Principles of FDG-PET/CT (HODG-A)
- Deauville 1–3
    - BrECADD + G-CSF x 2 cycles, if BrECADD previously used
        - Utilize with caution in those with neuropathy
        - PJP prophylaxis is recommended for all BV containing regimens
    - Combined modality therapy, ISRT 30 Gy (adapted from H10U)
        - Principles of Radiation Therapy (HODG-C)
- Deauville 4
    - Combined modality therapy, ISRT 36–40 Gy (adapted from H10U)
        - Principles of Radiation Therapy (HODG-C)
- Deauville 5
    - Biopsy

# Next

- Completion of additional therapy, go to Follow-up (HODG-12)
- Deauville 5 biopsy negative, go to Follow-up (HODG-12)
- Deauville 5 biopsy positive, go to Primary Refractory Disease (HODG-13)
- References on HODG-8
