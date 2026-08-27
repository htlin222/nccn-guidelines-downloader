+++
id           = "hodgkins/HODG-3"
gid          = "hodgkins"
ref          = "HODG-3"
page         = 11
title        = "Unfavorable risk factors for stage I-II Hodgkin lymphoma, and the IPS for advanced disease"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-2", "HODG-4", "HODG-5", "HODG-6", "HODG-7"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "IV"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex"
type = "enum"
options = ["male", "female"]
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "b_symptoms"
type = "enum"
options = ["A", "B"]
[[variables]]
name = "esr"
type = "number"
[[variables]]
name = "mmr"
type = "number"
[[variables]]
name = "mtr"
type = "number"
[[variables]]
name = "largest_mass"
type = "number"
[[variables]]
name = "nodal_regions"
type = "number"
[[variables]]
name = "e_lesion"
type = "text"
[[variables]]
name = "albumin"
type = "number"
[[variables]]
name = "hemoglobin"
type = "number"
[[variables]]
name = "wbc"
type = "number"
[[variables]]
name = "lymphocyte"
type = "number"
+++

# Source

- NCCN Hodgkin Lymphoma (Age ≥18 years) v2.2026, HODG-3, p11
- Unfavorable risk factors for stage I–II Hodgkin lymphoma, by GHSG, EORTC, and NCCN criteria
- International Prognostic Score (IPS), for advanced disease
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (sex)
- Stage ___ (stage)
- B symptoms ___ (b_symptoms)
- ESR ___ (esr) mm/hr
- Mediastinal mass ratio (MMR) ___ (mmr)
    - MMR = maximum width of mass / maximum intrathoracic diameter, as measured on chest radiograph (CXR)
- Mediastinal thoracic ratio (MTR) ___ (mtr)
    - MTR = maximum width of mediastinal mass / intrathoracic diameter at T5–6, as measured on CXR
- Largest mass or nodal conglomerate ___ (largest_mass) cm
- Number of involved nodal regions ___ (nodal_regions)
- E lesion ___ (e_lesion)
- Albumin ___ (albumin) g/dL
- Hemoglobin ___ (hemoglobin) g/dL
- White blood cell count ___ (wbc)
- Lymphocyte count ___ (lymphocyte)

# Unfavorable risk factors, stage I–II, GHSG

- ESR ≥50 mm/hr if A
- ESR ≥30 mm/hr if B
- MMR >0.33
- ≥3 nodal regions
    - GHSG includes the infraclavicular/subpectoral area with the cervical region
    - GHSG combines the mediastinum and bilateral hila as a single region
- E lesion, any

# Unfavorable risk factors, stage I–II, EORTC

- Age ≥50 years
- ESR ≥50 mm/hr if A
- ESR ≥30 mm/hr if B
- MTR >0.35
- ≥4 nodal regions
    - EORTC includes the infraclavicular/subpectoral area with the axilla
    - EORTC combines the mediastinum and bilateral hila as a single region

# Unfavorable risk factors, stage I–II, NCCN

- ESR ≥50 mm/hr, or any B symptoms
- MMR >0.33
- ≥4 nodal regions
- Bulky >10 cm
    - Mediastinal bulk is best assessed with a standard CXR, as practice-changing studies utilized this staging modality
    - If a staging CXR is not obtained, disease bulk can also be assessed with CT
        - On CT, a single mass or nodal conglomerate measuring, in any direction, >1/3 the maximum transverse diameter of the chest should be considered bulky
        - On CT, any tumor mass or nodal conglomerate >10 cm, also measured in any direction, should be considered bulky

# International Prognostic Score (IPS), advanced disease

- 1 point per factor
- Albumin <4 g/dL
- Hemoglobin <10.5 g/dL
- Male
- Age ≥45 years
- Stage IV disease
- Leukocytosis, white blood cell count ≥15,000/mm3
- Lymphocytopenia
    - Lymphocyte count <8% of white blood cell count, and/or
    - Lymphocyte count <600/mm3
