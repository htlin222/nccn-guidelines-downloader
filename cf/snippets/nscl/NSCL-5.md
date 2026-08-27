+++
id           = "nscl/NSCL-5"
gid          = "nscl"
ref          = "NSCL-5"
page         = 31
title        = "Pretreatment evaluation and clinical evaluation branch for stage IIB (T3 invasion, N0) and stage IIIA (T3 invasion, N1; T4 invasion, size N0-1)"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-6", "NSCL-7", "NSCL-8", "NSCL-13", "NSCL-14", "NSCL-15", "NSCL-18"]

[facets]
disease   = "nscl"
stage     = ["II", "III"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "invaded_structure"
type = "text"
[[variables]]
name = "superior_sulcus"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mediastinal_nodes"
type = "text"
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-5, p31
- Applies to stage IIB (T3 invasion, N0)
- Applies to stage IIIA (T3 invasion, N1; T4 invasion, size N0-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- Structure invaded ___ (invaded_structure)
- Superior sulcus lesion ___ (superior_sulcus)
- Mediastinal node status ___ (mediastinal_nodes)

# Pretreatment evaluation

- Evaluate for perioperative therapy
    - Principles of Perioperative Systemic Therapy (NSCL-E)
- Biomarker testing including EGFR, ALK, RET, and PD-L1
- PFTs, if not previously done
- Bronchoscopy
- Pathologic lymph node evaluation
    - Methods for evaluation include mediastinoscopy, mediastinotomy, EBUS, EUS, and CT-guided biopsy
    - An EBUS-TBNA negative for malignancy in a clinically (FDG-PET/CT and/or CT) positive mediastinum should undergo subsequent mediastinoscopy prior to surgical resection
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast
- MRI with contrast of spine + thoracic inlet, for superior sulcus lesions abutting the spine, subclavian vessels, or brachial plexus
- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive FDG-PET/CT scan findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If FDG-PET/CT scan is positive in the mediastinum, lymph node status needs pathologic confirmation

# Next

- Superior sulcus tumor, go to treatment (NSCL-6)
- Chest wall, trachea/carina, mediastinum, or diaphragm, go to treatment (NSCL-7)
- Stage IIIA (T4, N0-1), go to treatment (NSCL-7)
- Positive mediastinal nodes (N2)
    - Stage IIB (T1, N2a); stage IIIA (T1, N2b; T2-T3, N2a); stage IIIB (T2-T3, N2b), go to NSCL-8
    - Stage IIIB (T4, N2), go to NSCL-14
- Positive mediastinal nodes (N3)
    - Stage IIIC (T3, N3), go to NSCL-13
    - Stage IIIC (T4, N3), go to NSCL-14
- Metastatic disease
    - Treatment for metastasis limited sites (NSCL-15)
    - Distant disease (NSCL-18)
