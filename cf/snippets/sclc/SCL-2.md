+++
id           = "sclc/SCL-2"
gid          = "sclc"
ref          = "SCL-2"
page         = 7
title        = "Limited-stage SCLC: additional workup and pathologic lymph node staging before primary treatment"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-1", "SCL-3", "SCL-4", "SCL-5", "ST-1"]

[facets]
disease   = "sclc"
histology = "small-cell"
stage     = ["I", "II", "III"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "pleural_effusion"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "pet"
type = "text"
[[variables]]
name = "smear_counts"
type = "text"
+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, SCL-2, p7
- Applies to limited stage, see ST-1 for TNM classification
- Workup of SCLC should be expedited, with studies done in parallel whenever possible
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Small cell lung cancer, ___ (ctnm)
- Limited stage
- Pleural effusion ___ (pleural_effusion)
- FDG-PET/CT ___ (pet)
- Peripheral blood smear and counts ___ (smear_counts)

# Additional workup

- Pleural effusion, if present
    - Thoracentesis is recommended
    - If thoracentesis inconclusive, consider thoracoscopy
    - Exclude the effusion as a staging element only if multiple cytopathologic examinations of pleural fluid are negative for tumor, the fluid is non-bloody and not an exudate, and clinical judgment dictates the effusion is not related to the tumor
    - Pericardial effusion is classified using the same criteria
- Pulmonary function tests (PFTs)
    - During evaluation for surgery or definitive radiation therapy (RT)
- Multidisciplinary evaluation is recommended before surgery
- Bone imaging (radiographs or MRI) as appropriate, if FDG-PET/CT equivocal
    - Consider biopsy if bone imaging is equivocal
- Unilateral marrow aspiration/biopsy in select patients
    - Selection criteria: nucleated red blood cells (RBCs) on peripheral blood smear
    - Selection criteria: neutropenia suggestive of bone marrow infiltration
    - Selection criteria: thrombocytopenia suggestive of bone marrow infiltration
    - Perform bone marrow biopsy only if it changes clinical management

# Pathologic lymph node staging

- Clinical stage I–IIA (T1–2,N0,M0): pathologic lymph node staging
- Limited stage IIB–IIIC (T3–4,N0,M0; T1–4,N1–3,M0): consider pathologic lymph node staging, especially for cN0, if it would help determine RT fields
- Principles of Surgical Resection (SCL-C)
- Lymph node staging procedures
    - Endobronchial ultrasound-guided biopsy, preferred if expertise exists
    - Mediastinoscopy
    - Mediastinotomy
    - Esophageal ultrasound-guided biopsy
    - Video-assisted thoracoscopy
    - If nodal involvement is established by one modality of mediastinal staging, additional modalities are not necessary
    - Staging biopsies of visible nodes in all accessible nodal stations is encouraged to inform radiotherapy targeting

# Next

- Clinical stage I–IIA (T1–2,N0,M0), after pathologic lymph node staging, go to Primary Treatment (SCL-3)
- Limited stage IIB–IIIC (T3–4,N0,M0; T1–4,N1–3,M0), go to Primary Treatment (SCL-4)
- Bone marrow biopsy, thoracentesis, or any compelling evidence of distant disease consistent with malignancy, go to Extensive-stage Disease (SCL-5)
