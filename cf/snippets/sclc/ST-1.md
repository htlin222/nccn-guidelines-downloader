+++
id           = "sclc/ST-1"
gid          = "sclc"
ref          = "ST-1"
page         = 37
title        = "Stage definitions for small cell lung cancer and AJCC T category"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-1", "SCL-2", "SCL-5"]

[facets]
disease   = "sclc"
histology = "small-cell"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "radiation_plan"
type = "enum"
options = ["encompassable in a tolerable radiation plan", "too extensive for a tolerable radiation plan"]
[[variables]]
name = "stage_group"
type = "enum"
options = ["limited stage", "extensive stage"]
+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, ST-1, p37
- Table 1, definition of the two stages of small cell lung cancer
- Table 2, American Joint Committee on Cancer (AJCC) Eighth ed., 2017 definitions of TNM, T primary tumor
- T definitions are used with permission of the American College of Surgeons; the original source is the AJCC Cancer Staging System
- TNM definitions are continued on the next page

# Assessment

- ___ (age) yo with small cell lung cancer
- Greatest dimension of primary tumor ___ (tumor_size) cm
- T ___ (t_category)
- N ___ (n_category)
- M ___ (m_category)
- Tumor/nodal volume is ___ (radiation_plan)
- Stage: ___ (stage_group)

# Table 1, stage definitions for small cell lung cancer

- Limited stage
    - Stage I-III (T any, N any, M0)
    - Can be safely treated with definitive radiation doses
    - Excludes T3-4 due to multiple lung nodules that are too extensive to be encompassed in a tolerable radiation plan
    - Excludes T3-4 with tumor/nodal volume that is too large to be encompassed in a tolerable radiation plan
- Extensive stage
    - Stage IV (T any, N any, M1a/b/c)
    - Or T3-4 due to multiple lung nodules that are too extensive to be encompassed in a tolerable radiation plan
    - Or T3-4 with tumor/nodal volume that is too large to be encompassed in a tolerable radiation plan

# Table 2, T primary tumor

- TX
    - Primary tumor cannot be assessed
    - Or tumor proven by the presence of malignant cells in sputum or bronchial washings but not visualized by imaging or bronchoscopy
- T0, no evidence of primary tumor
- Tis, carcinoma in situ
    - Squamous cell carcinoma in situ (SCIS)
    - Adenocarcinoma in situ (AIS), adenocarcinoma with pure lepidic pattern, 3 cm or less in greatest dimension
- T1
    - Tumor 3 cm or less in greatest dimension
    - Surrounded by lung or visceral pleura
    - Without bronchoscopic evidence of invasion more proximal than the lobar bronchus, that is, not in the main bronchus
- T1mi, minimally invasive adenocarcinoma
    - Adenocarcinoma 3 cm or less in greatest dimension
    - Predominantly lepidic pattern
    - 5 mm or less invasion in greatest dimension
- T1a
    - Tumor 1 cm or less in greatest dimension
    - A superficial, spreading tumor of any size whose invasive component is limited to the bronchial wall, and may extend proximal to the main bronchus, is also classified as T1a; these tumors are uncommon
- T1b, tumor more than 1 cm but 2 cm or less in greatest dimension
- T1c, tumor more than 2 cm but 3 cm or less in greatest dimension
- T2, tumor more than 3 cm but 5 cm or less in greatest dimension, or having any of the following features
    - Involves the main bronchus, regardless of distance to the carina, but without involvement of the carina
    - Invades visceral pleura (PL1 or PL2)
    - Associated with atelectasis or obstructive pneumonitis that extends to the hilar region, involving part or all of the lung
    - A T2 tumor with these features is classified as T2a if 4 cm or less or if the size cannot be determined, and T2b if more than 4 cm but 5 cm or less
- T2a, tumor more than 3 cm but 4 cm or less in greatest dimension
- T2b, tumor more than 4 cm but 5 cm or less in greatest dimension
- T3, tumor more than 5 cm but 7 cm or less in greatest dimension, or directly invading any of the following
    - Parietal pleura (PL3)
    - Chest wall, including superior sulcus tumors
    - Phrenic nerve
    - Parietal pericardium
    - Or separate tumor nodule(s) in the same lobe as the primary
- T4, tumor more than 7 cm, or tumor of any size invading one or more of the following
    - Diaphragm
    - Mediastinum
    - Heart
    - Great vessels
    - Trachea
    - Recurrent laryngeal nerve
    - Esophagus
    - Vertebral body
    - Carina
    - Or separate tumor nodule(s) in an ipsilateral lobe different from that of the primary
