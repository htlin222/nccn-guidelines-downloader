+++
id           = "nscl/NSCL-3"
gid          = "nscl"
ref          = "NSCL-3"
page         = 28
title        = "Pretreatment evaluation and initial treatment of stage IB-IIIA NSCLC, by operability and nodal status"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-2", "NSCL-4", "NSCL-8", "NSCL-13", "NSCL-17"]

[facets]
disease   = "nscl"
stage     = ["I", "II", "III"]
biomarker = ["egfr", "alk", "ret", "pd-l1"]
timepoint = ["workup", "staging", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "stage_group"
type = "enum"
options = ["IB peripheral T2a N0", "I central T1-T2a N0", "II T1-T2ab N1", "II T2b N0", "IIB T1 N2a", "IIB T3 N0", "IIIA T3 N1"]
[[variables]]
name = "operability"
type = "enum"
options = ["operable", "medically inoperable", "high surgical risk", "declines surgery"]
[[variables]]
name = "nodal_status"
type = "enum"
options = ["N0", "N1", "N2", "N3"]
[[variables]]
name = "egfr"
type = "text"
[[variables]]
name = "alk"
type = "text"
[[variables]]
name = "ret"
type = "text"
[[variables]]
name = "pdl1"
type = "text"
[[variables]]
name = "pfts"
type = "text"
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-3, p28
- Applies to stage IB (peripheral T2a, N0)
- Applies to stage I (central T1-T2a, N0)
- Applies to stage II (T1-T2ab, N1; T2b, N0)
- Applies to stage IIB (T1, N2a; T3, N0), for T3, N0 related to size or satellite nodules
- Applies to stage IIIA (T3, N1), for T3, N0 related to size or satellite nodules
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- Stage group ___ (stage_group)
- Operability ___ (operability)
    - Operable
        - Surgical resection is considered the first option for operable patients with cancer with negative nodes
        - Patients may also be informed about SABR as an alternative option through shared decision-making
    - Medically inoperable, or high surgical risk as determined by thoracic surgeon (NSCL-B)
    - Declines surgery after thoracic surgical consultation
- EGFR ___ (egfr) / ALK ___ (alk) / RET ___ (ret) / PD-L1 ___ (pdl1)
- PFTs ___ (pfts)
- Lymph node status ___ (nodal_status)

# Pretreatment evaluation

- Testing is not listed in order of priority, and is dependent on clinical circumstances, institutional processes, and judicious use of resources
- Evaluate for perioperative therapy (NSCL-E)
- Biomarker testing including EGFR, ALK, RET, and PD-L1
- PFTs, if not previously done
- Bronchoscopy
- Pathologic lymph node evaluation
    - Methods for evaluation include mediastinoscopy, mediastinotomy, EBUS, EUS, and CT-guided biopsy
    - An EBUS-TBNA negative for malignancy in a clinically (FDG-PET/CT and/or CT) positive mediastinum should undergo subsequent mediastinoscopy prior to surgical resection
- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive FDG-PET/CT scan findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If FDG-PET/CT scan is positive in the mediastinum, lymph node status needs pathologic confirmation
- Brain MRI with and without contrast (stage II, IIIA)
    - Stage IB, optional
    - If MRI is not possible, CT of head with contrast

# Initial treatment if operable

- N0 or N1
    - Surgical resection + lymph node dissection, or systematic lymph node sampling (NSCL-B)
    - Performed after preoperative systemic therapy, if planned (NSCL-E)
- N2 or N3
    - Go to Stage IIB/IIIA/IIIB (NSCL-8) or Stage IIIB/IIIC (NSCL-13)

# Initial treatment if medically inoperable, high surgical risk, or declines surgery

- N0
    - Definitive RT, preferably SABR (NSCL-C)
    - Prior to treatment, multidisciplinary evaluation that includes treating physicians and specialists in obtaining tissue diagnosis (thoracic surgery, interventional pulmonology, and interventional radiology) is required
        - To determine the safest and most efficient approach for biopsy
        - Or to provide consensus that a biopsy is too risky or difficult, that a clinical diagnosis of lung cancer is appropriate, and that treatment is warranted
    - If SABR is not feasible, definitive RT or concurrent chemoradiation could be considered (NSCL-F)
- Consider adjuvant systemic therapy for high-risk stage II (especially T2b-3)

# Next

- Operable, N0 or N1, after surgical resection, go to Findings at Surgery (NSCL-4)
- Operable, N2 or N3, go to Stage IIB/IIIA/IIIB (NSCL-8) or Stage IIIB/IIIC (NSCL-13)
- Medically inoperable, N0, go to Surveillance (NSCL-17)
- Medically inoperable, N1, go to NSCL-10
