+++
id           = "sclc/SCL-6"
gid          = "sclc"
ref          = "SCL-6"
page         = 11
title        = "Response assessment following primary treatment, and the adjuvant therapy that follows"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-5", "SCL-7", "SCL-8", "ST-1"]

[facets]
disease   = "sclc"
histology = "small-cell"
stage     = ["I", "II", "III", "IV"]
timepoint = ["adjuvant", "maintenance", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage_group"
type = "enum"
options = ["limited", "extensive"]
[[variables]]
name = "ps"
type = "enum"
options = ["good", "poor"]
[[variables]]
name = "response"
type = "enum"
options = ["complete response", "partial response", "stable disease", "primary progressive disease"]
[[variables]]
name = "cbc"
type = "text"
[[variables]]
name = "chemistries"
type = "text"
[[variables]]
name = "started_on_chemoimmunotherapy"
type = "enum"
options = ["yes", "no"]

+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, SCL-6, p11
- Applies after primary treatment, for response assessment and adjuvant therapy
- All recommendations category 2A unless otherwise indicated
- Footnote definitions are not printed on this page; read them on the guideline Footnotes page

# Assessment

- ___ (age) yo
- Small cell lung cancer, ___ (stage_group) stage
- Performance status ___ (ps)
- Response to primary treatment ___ (response)
- CBC ___ (cbc)
- Electrolytes, LFTs, BUN, creatinine ___ (chemistries)
- Started on chemoimmunotherapy ___ (started_on_chemoimmunotherapy)

# Response assessment

- See Treatment Response Assessment in Principles of Imaging (SCL-G)
- CBC
- Chemistries
    - Electrolytes
    - LFTs
    - BUN
    - Creatinine

# Limited stage, complete response or partial response or stable disease

- Good PS
    - Durvalumab (category 1)
    - Prophylactic cranial irradiation (PCI)
        - Or consider MRI brain surveillance instead
- Poor PS
    - Durvalumab (category 1)
    - Consider MRI brain surveillance

# Extensive stage, complete response or partial response or stable disease

- Continue maintenance immunotherapy, if patient was started on chemoimmunotherapy
- MRI brain surveillance
    - Consider PCI in addition
- Consider thoracic RT

# Next

- Complete response or partial response or stable disease, go to Surveillance (SCL-7)
- Primary progressive disease, go to Subsequent Therapy/Palliative Therapy (SCL-8)
