+++
id           = "hodgkins/HODG-6"
gid          = "hodgkins"
ref          = "HODG-6"
page         = 17
title        = "Primary and additional therapy for stage I/II unfavorable classic Hodgkin lymphoma with B symptoms, bulky mediastinal disease and/or >10 cm adenopathy, 4 or more nodal sites, and/or ESR 50 mm/hr or higher"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-2", "HODG-4", "HODG-5B", "HODG-12", "HODG-13"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "bulky"]
timepoint = ["primary-treatment", "consolidation"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II"]
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "esr"
type = "number"
[[variables]]
name = "interim_deauville"
type = "enum"
options = ["1-3", "4", "5"]
[[variables]]
name = "restage_deauville"
type = "enum"
options = ["1-3", "4", "5"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18-60 years) v2.2026, HODG-6, p17
- Applies to classic Hodgkin lymphoma, stage I/II unfavorable, defined by any of
    - B symptoms
    - Bulky mediastinal disease and/or >10 cm adenopathy
    - 4 or more nodal sites
    - And/or ESR 50 mm/hr or higher
- See Important Considerations on HODG-4
- Systemic therapy per Principles of Systemic Therapy (HODG-B 1 of 8)
- Restaging FDG-PET/CT per Principles of FDG-PET/CT (HODG-A)
- Deauville score read on the FDG-PET 5-Point Scale (HODG-A 2 of 2)
- Radiation per Principles of Radiation Therapy (HODG-C)
- References on HODG-8
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma, stage ___ (stage) unfavorable
- B symptoms
- Bulky mediastinal disease and/or >10 cm adenopathy
- 4 or more nodal sites
- ESR ___ (esr) mm/hr
- Sites of disease ___ (sites)
- Interim FDG-PET/CT after ABVD x 2 cycles: Deauville ___ (interim_deauville)
- Restaging FDG-PET/CT after the next 2 cycles: Deauville ___ (restage_deauville)

# Primary treatment

- ABVD x 2 cycles (HODG-B 1 of 8)
- Then restage with FDG-PET/CT (HODG-A)
- Other regimens: see the HODG-6A section below

# Interim Deauville 1-3 after ABVD x 2 cycles

- Combined modality therapy
    - ABVD x 2 cycles (total 4), adapted from H10U
        - Consider PFTs after 4 cycles of ABVD
    - Plus ISRT 30 Gy (HODG-C), adapted from H10U
- Chemotherapy alone
    - AVD x 4 cycles, adapted from RATHL and H10U
- Then Follow-up (HODG-12)

# Interim Deauville 4-5 after ABVD x 2 cycles

- The degree of abnormality of both Deauville 4 and 5 scores is quite variable, and clinical judgment is often necessary in such settings
- If disease is responding well to chemotherapy but an interim FDG-PET/CT shows a Deauville 4 or 5 response, it may be appropriate to continue with the same chemotherapy regimen and repeat an FDG-PET/CT after 2 additional cycles
- Use clinical judgement if a new lymph node can be explained by alternative etiology, eg, inflammation or infection
- Use clinical judgement if residual FDG-uptake may be related to treatment, eg, immunotherapy
    - Repeating a short-interval FDG-PET/CT may be preferred in such scenarios
- At any point, if there is concern for refractory disease, a biopsy is appropriate to inform subsequent therapy
- ABVD x 2 cycles (total 4), adapted from H10U
    - Consider PFTs after 4 cycles of ABVD
- Or BrECADD + granulocyte colony-stimulating factor (G-CSF) x 2 cycles (HODG-B 1 of 8)
    - While BrECADD + G-CSF has not been formally tested in this setting, its use as escalation therapy is reasonable given its improved safety profile compared to escalated BEACOPP in the frontline setting for advanced-stage CHL (Borchmann P, et al. Lancet 2024;404:341-352)
    - Ongoing clinical trials that utilize escBEACOPP with dacarbazine substituted for procarbazine may be appropriate
    - Utilize with caution in those with neuropathy
    - Pneumocystis jiroveci pneumonia (PJP) prophylaxis is recommended for all BV containing regimens
- Then restage with FDG-PET/CT (HODG-A)

# Restaging after the second 2 cycles, interim Deauville 4-5 pathway

- Deauville 1-3
    - BrECADD + G-CSF x 2 cycles, if BrECADD previously used
        - Utilize with caution in those with neuropathy
        - PJP prophylaxis is recommended for all BV containing regimens
    - Combined modality therapy: ISRT 30 Gy (HODG-C), adapted from H10U
    - Then Follow-up (HODG-12)
- Deauville 4
    - Combined modality therapy: ISRT 36-40 Gy (HODG-C), adapted from H10U
    - Then Follow-up (HODG-12)
- Deauville 5
    - Biopsy
    - If a post-chemotherapy FDG-PET/CT is only focally positive, consolidation RT may be appropriate, especially if a biopsy is not feasible (HODG-C 2 of 16)
    - Biopsy negative: Follow-up (HODG-12)
    - Biopsy positive: Primary Refractory Disease (HODG-13)

# Other regimens (HODG-6A)

- Primary treatment for the same stage I/II unfavorable presentation
    - Combined modality therapy: Nivolumab-AVD x 4 cycles (HODG-B 1 of 8), adapted from NIVAHL
    - Or BV-AVD + G-CSF x 4 cycles (HODG-B 1 of 8), adapted from BREACH
        - Utilize with caution in those with neuropathy
        - PJP prophylaxis is recommended for all BV containing regimens
    - BrECADD + G-CSF (HODG-B 1 of 8), for stage IIB with large mediastinal mass and/or extranodal disease, adapted from HD21
        - Utilize with caution in those with neuropathy
        - PJP prophylaxis is recommended for all BV containing regimens
- Then restage with FDG-PET/CT (HODG-A)
    - Deauville 1-4: ISRT (HODG-C), then Follow-up (HODG-12)
    - Deauville 5: Biopsy
        - Biopsy negative: ISRT (HODG-C), then Follow-up (HODG-12)
        - Biopsy positive: Primary Refractory Disease (HODG-13)

# Next

- Interim Deauville 1-3: finish combined modality therapy or chemotherapy alone, then Follow-up (HODG-12)
- Interim Deauville 4-5: give the next 2 cycles, restage, then follow the Deauville branch above
- Deauville 5 on restaging with a negative biopsy: Follow-up (HODG-12)
- Biopsy positive at any point: Primary Refractory Disease (HODG-13)
