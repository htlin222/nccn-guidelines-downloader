+++
id           = "nscl/NSCL-2"
gid          = "nscl"
ref          = "NSCL-2"
page         = 27
title        = "Pretreatment evaluation and initial treatment of stage IA (peripheral T1, N0)"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-1", "NSCL-3", "NSCL-4", "NSCL-8", "NSCL-13", "NSCL-17"]

[facets]
disease   = "nscl"
stage     = "I"
timepoint = ["workup", "staging", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_site"
type = "text"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "tumor_location"
type = "enum"
options = ["peripheral", "central"]
[[variables]]
name = "mediastinal_nodes"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "operability"
type = "enum"
options = ["operable", "medically inoperable / high surgical risk", "declines surgery"]
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-2, p27
- Applies to clinical assessment stage IA (peripheral T1, N0)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Stage IA, peripheral T1, N0
- Tumor site ___ (tumor_site)
- Tumor size ___ (tumor_size) cm
- Tumor location ___ (tumor_location)
- Mediastinal nodes on CT and FDG-PET/CT ___ (mediastinal_nodes)
- Operability as determined by thoracic surgeon ___ (operability)

# Pretreatment evaluation

- Testing is not listed in order of priority, and is dependent on clinical circumstances, institutional processes, and judicious use of resources
- Pulmonary function tests (PFTs), if not previously done
- Bronchoscopy, intraoperative preferred
- Consider pathologic lymph node evaluation
    - Methods for evaluation include mediastinoscopy, mediastinotomy, EBUS, EUS, and CT-guided biopsy
    - An EBUS-TBNA negative for malignancy in a clinically (FDG-PET/CT and/or CT) positive mediastinum should undergo subsequent mediastinoscopy prior to surgical resection
    - There is low likelihood of positive mediastinal lymph nodes when these nodes are CT and FDG-PET/CT negative in peripheral tumors (outer third of lung) 3 cm or smaller
        - Pretreatment pathologic evaluation is optional in these settings
    - Invasive mediastinal staging is recommended for central tumors
    - In patients who are medically inoperable, while mediastinal biopsy is generally preferred, the risks in selected patients may outweigh the benefits
- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive FDG-PET/CT scan findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If FDG-PET/CT scan is positive in the mediastinum, lymph node status needs pathologic confirmation

# Initial treatment, negative mediastinal nodes

- Operable
    - Surgical resection is considered the first option for operable patients with cancer with negative nodes
    - Patients may also be informed about SABR as an alternative option through shared decision-making
    - Surgical resection + lymph node dissection or systematic lymph node sampling
        - Principles of Surgical Therapy (NSCL-B)
- Medically inoperable, high surgical risk as determined by thoracic surgeon, and those who decline surgery after thoracic surgical consultation
    - Principles of Surgical Therapy (NSCL-B)
    - Definitive radiation therapy (RT), preferably SABR
        - Principles of Radiation Therapy (NSCL-C)
        - Image-guided thermal ablation (IGTA) therapy (eg, cryotherapy, microwave, radiofrequency) may be an option for select patients, Principles of Image-Guided Thermal Ablation Therapy (NSCL-D)
        - Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis (thoracic surgery, interventional pulmonology, and interventional radiology) is required
            - To determine the safest and most efficient approach for biopsy
            - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted

# Next

- Negative mediastinal nodes, after surgical resection, go to Findings at Surgery (NSCL-4)
- Negative mediastinal nodes, after definitive RT, go to Surveillance (NSCL-17)
- Positive mediastinal nodes, go to Stage IIB/IIIA/IIIB (NSCL-8)
- Positive mediastinal nodes, go to Stage IIIB/IIIC (NSCL-13)
