+++
id           = "hodgkins/HODG-7"
gid          = "hodgkins"
ref          = "HODG-7"
page         = 20
title        = "Primary treatment of stage III-IV classic Hodgkin lymphoma and response-adapted management by Deauville score"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-4", "HODG-12", "HODG-13"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["III", "IV"]
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["III", "IV"]
[[variables]]
name = "neuropathy"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "deauville"
type = "text"
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18-60 years) v2.2026, HODG-7, p20
- Applies to classic Hodgkin lymphoma, stage III-IV, primary treatment
- See Important Considerations on HODG-4
- Regimen details: Principles of Systemic Therapy (HODG-B 1 of 8)
- FDG-PET/CT details: Principles of FDG-PET/CT (HODG-A)
- Deauville scoring: FDG-PET 5-Point Scale (Deauville Criteria) (HODG-A 2 of 2)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma, stage ___ (stage)
- Baseline neuropathy ___ (neuropathy)
- Regimen selected ___ (regimen)
- Restaging FDG-PET/CT Deauville score ___ (deauville)

# Primary treatment options

- Preferred: Nivolumab-AVD (category 1), see pathway on HODG-7A
- Preferred: BrECADD + G-CSF (category 1), see pathway on HODG-7B
- Useful in certain circumstances: BV-AVD + G-CSF (category 1), see pathway on HODG-7C
- Useful in certain circumstances: ABVD (category 1), see pathway on HODG-7D
- All four regimens per Principles of Systemic Therapy (HODG-B 1 of 8)

# Nivolumab-AVD pathway (HODG-7A)

- Nivolumab-AVD x 6 cycles (category 1), adapted from SWOG S1826
    - Neutropenia is not a factor for delay of treatment or reduction of dose intensity with nivolumab-AVD
    - In the SWOG S1826 trial, growth factor support was optional (N Engl J Med 2024;391:1379-1389)
- Restage with FDG-PET/CT (HODG-A)
    - Deauville 1-3, go to Follow-up (HODG-12)
    - Deauville 4-5, biopsy
        - Biopsy positive, go to Primary Refractory Disease (HODG-13)
        - Biopsy negative, repeat FDG-PET/CT at 12 weeks
            - Deauville 1-3, go to Follow-up (HODG-12)
            - Deauville 4-5, biopsy
                - Biopsy negative, go to Follow-up (HODG-12)
                - Biopsy positive, go to Primary Refractory Disease (HODG-13)
    - For Deauville 4-5, note that some patients received ISRT 30 Gy on SWOG S1826
        - Criteria for RT included Deauville 4-5 with only 1-2 lesions
        - Criteria for RT included at least 30% reduction in transverse diameter
        - Criteria for RT included residual nodal mass at least 2.5 cm in axial diameter
        - Criteria for RT included residual extranodal lesion >1 cm in axial diameter
        - Patients with 3 or more Deauville 4-5 lesions were considered to have refractory disease
        - Patients with a lesion that did not achieve at least 30% reduction in transverse diameter were considered to have refractory disease
        - Patients with a Deauville 5 score due to new PET avid lesions were also considered to have refractory disease

# BrECADD + G-CSF pathway (HODG-7B)

- BrECADD + G-CSF x 2 cycles (category 1), adapted from HD21
    - Utilize with caution in those with neuropathy
    - PJP prophylaxis is recommended for all BV containing regimens
- Restage with FDG-PET/CT (HODG-A)
    - Deauville 1-3, BrECADD + G-CSF x 2 cycles (total 4)
    - Deauville 4-5, BrECADD + G-CSF x 4 cycles (total 6)
    - Same cautions apply to the continued cycles: neuropathy, PJP prophylaxis
- Restage with FDG-PET/CT after completing therapy (HODG-A)
    - Deauville 1-3, go to Follow-up (HODG-12)
    - Deauville 4, ISRT per Principles of Radiation Therapy (HODG-C)
        - Repeat FDG-PET/CT at 12 weeks
            - Deauville 1-3, go to Follow-up (HODG-12)
            - Deauville 4-5, biopsy
                - Biopsy negative, go to Follow-up (HODG-12)
                - Biopsy positive, go to Primary Refractory Disease (HODG-13)
    - Deauville 5, biopsy
        - Biopsy negative, ISRT per Principles of Radiation Therapy (HODG-C), then Follow-up (HODG-12)
        - Biopsy positive, go to Primary Refractory Disease (HODG-13)

# BV-AVD + G-CSF pathway (HODG-7C)

- BV-AVD + G-CSF x 6 cycles (category 1), adapted from ECHELON-1
    - Utilize with caution in those with neuropathy
    - PJP prophylaxis is recommended for all BV containing regimens
    - An interim FDG-PET/CT after 2 cycles may be helpful in further defining therapy
        - If performing an interim FDG-PET/CT before completion of 6 cycles and FDG-PET is positive (Deauville 5), conduct a biopsy
        - If that biopsy is positive, change therapy
- Restage with FDG-PET/CT (HODG-A)
    - Deauville 1-3, go to Follow-up (HODG-12)
    - Deauville 4-5, biopsy
        - Biopsy negative, go to Follow-up (HODG-12)
        - Biopsy positive, go to Primary Refractory Disease (HODG-13)
    - At either Deauville result, consider ISRT to initially bulky or remaining FDG-PET-positive sites at the end of therapy (HODG-C)

# ABVD pathway (HODG-7D)

- ABVD x 2 cycles (category 1)
- Restage with FDG-PET/CT (HODG-A)
    - The value of interim FDG-PET imaging is unclear for many clinical scenarios
    - All measures of response should be considered in the context of management decisions
    - Deauville 1-3, AVD x 4 cycles, adapted from RATHL
        - Consider ISRT to initially bulky or remaining FDG-PET-positive sites at the end of therapy (HODG-C)
    - Deauville 4-5, BrECADD + G-CSF x 3 cycles
        - BrECADD + G-CSF has not been formally tested in this setting, but its use as escalation therapy is reasonable given its improved safety profile compared to escalated BEACOPP in the frontline setting for advanced-stage CHL (Borchmann P, et al. Lancet 2024;404:341-352)
        - Utilize with caution in those with neuropathy
        - PJP prophylaxis is recommended for all BV containing regimens
        - Restage with FDG-PET/CT (HODG-A)
            - Deauville 1-3, BrECADD + G-CSF x 1 cycle, with or without ISRT
                - PJP prophylaxis is recommended for all BV containing regimens
                - Utilize with caution in those with neuropathy
                - Consider ISRT to initially bulky or remaining FDG-PET-positive sites at the end of therapy (HODG-C)
            - Deauville 4-5, biopsy
                - Biopsy negative, go to Follow-up (HODG-12)
                - Biopsy positive, go to Primary Refractory Disease (HODG-13)

# Special considerations for Deauville 4-5 treatment responses

- The degree of abnormality of both Deauville 4 and 5 scores is quite variable, and clinical judgment is often necessary in such settings
- Disease responding well to chemotherapy but interim FDG-PET/CT shows a Deauville 4 or 5 response
    - It may be appropriate to continue with the same chemotherapy regimen
    - Repeat an FDG-PET/CT after 2 additional cycles
- Post-chemotherapy FDG-PET/CT only focally positive
    - Consolidation RT may be appropriate, especially if a biopsy is not feasible
    - See Principles of Radiation Therapy (HODG-C 2 of 16)
- New lymph node that can be explained by an alternative etiology (eg, inflammation or infection)
    - Use clinical judgement
    - Repeating a short-interval FDG-PET/CT may be preferred
- Residual FDG-uptake that may be related to treatment (eg, immunotherapy)
    - Use clinical judgement
    - Repeating a short-interval FDG-PET/CT may be preferred
- At any point, if there is concern for refractory disease, a biopsy is appropriate to inform subsequent therapy

# Next

- Deauville 1-3, or biopsy negative, go to Follow-up (HODG-12)
- Biopsy positive, go to Primary Refractory Disease (HODG-13)
- References for this page are on HODG-8
