+++
id           = "sclc/SCL-1"
gid          = "sclc"
ref          = "SCL-1"
page         = 6
title        = "Initial evaluation and staging after a diagnosis of small cell lung cancer"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-28"
see_also     = ["SCL-2", "SCL-5", "ST-1"]

[facets]
disease   = "sclc"
histology = "small-cell"
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "enum"
options = ["SCLC", "combined SCLC/NSCLC"]
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "smoking_history"
type = "text"
[[variables]]
name = "stage_group"
type = "enum"
options = ["limited stage", "extensive stage"]
+++

# Source

- NCCN Small Cell Lung Cancer v1.2027, SCL-1, p6
- Applies to small cell lung cancer (SCLC), or combined SCLC/non-small cell lung cancer (NSCLC), on biopsy or cytology of a primary or metastatic site
- Workup of SCLC should be expedited, with studies done in parallel whenever possible
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (diagnosis) on biopsy or cytology
- Site sampled: ___ (biopsy_site)
- Smoking history: ___ (smoking_history)
- Stage: ___ (stage_group)

# Initial evaluation

- History and physical (H&P)
    - Signs and Symptoms of Small Cell Lung Cancer (SCL-A)
- Pathology review
    - Principles of Pathologic Review (SCL-B)
- Complete blood count (CBC)
- Electrolytes, liver function tests (LFTs), blood urea nitrogen (BUN), creatinine
- Imaging studies based on Principles of Imaging (SCL-G)
    - Brain MRI is more sensitive than CT for identifying brain metastases and is preferred over CT
    - If FDG-PET/CT is not available, bone scan may be used to identify bone metastases
        - Pathologic confirmation is recommended for isolated or equivocal lesions if their involvement would change clinical management
    - If extensive stage is established, further staging evaluation is optional and dependent on the clinical situation
        - Brain imaging is still recommended: MRI (preferred) or CT with contrast
- Smoking cessation counseling and intervention, see NCCN Guidelines for Smoking Cessation
- Consider biomarker testing
    - Via blood, tissue, or both
    - Can be considered in rare cases, if not previously done, because this may change management
    - Particularly for extensive-stage or relapsed SCLC in patients who do not smoke tobacco, lightly smoke, or have a remote smoking history
    - Also for a diagnostic or therapeutic dilemma, or at time of relapse
- Integrate palliative care, see NCCN Guidelines for Palliative Care

# Next

- Limited stage (see ST-1 for TNM Classification), go to Additional Workup (SCL-2)
- Extensive stage (see ST-1 for TNM Classification), go to Primary Treatment (SCL-5)
