+++
id           = "bladder/BL-9"
gid          = "bladder"
ref          = "BL-9"
page         = 16
title        = "Additional workup and primary/subsequent treatment for stage IVA bladder cancer"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-A", "BL-B", "BL-E", "BL-G", "BL-H", "BL-I", "BL-10", "BL-11"]

[facets]
disease   = "bladder"
stage     = "IV"
timepoint = ["workup", "primary-treatment", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "m_status"
type = "enum"
options = ["M0", "M1a"]
[[variables]]
name = "gfr"
type = "number"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Muscle-Invasive Bladder Cancer v2.2026, BL-9, p16
- Applies to stage IVA: cT4b, Any N, M0; or Any T, Any N, M1a
- Clinical staging: the modifier "c" refers to clinical staging based on bimanual EUA, endoscopic surgery (biopsy or TUR), and imaging studies
- The modifier "p" refers to pathologic staging based on cystectomy and lymph node dissection
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- M category ___ (m_status)
- Estimated GFR ___ (gfr)
- Previous RT ___ (prior_rt)

# Additional workup

- Principles of imaging for bladder/urothelial cancer (BL-A)
- Abdomen/pelvis CT or MRI, if not previously done
    - Consider FDG-PET/CT scan (skull base to mid-thigh) (category 2B)
- Chest imaging (CT chest)
- Bone scan or MRI, if clinical suspicion or symptoms of bone metastases
    - Consider FDG-PET/CT scan (skull base to mid-thigh) (category 2B)
- Molecular testing (BL-I)
- Estimate GFR to assess eligibility for cisplatin
    - For patients with borderline GFR, consider timed urine collection, which may more accurately determine eligibility for cisplatin

# Primary treatment

- M0 disease
    - Systemic therapy (BL-G 3 of 8)
- M1a disease
    - Systemic therapy (BL-G 3 of 8)

# Reassess tumor status

- Imaging with CT of chest/abdomen/pelvis with contrast
- If there is no evidence of distant disease on imaging reassessment, further cystoscopic assessment of tumor response in the bladder may be considered

# Subsequent treatment, M0 disease

- No tumor
    - Continue systemic therapy (BL-G 3 of 8)
    - or consolidation local therapy
        - RT (BL-H)
        - or cystectomy (BL-B)
- Tumor present
    - Systemic therapy (BL-G 3 of 8, and BL-G 4 of 8 and BL-G 5 of 8)
    - or chemoradiotherapy (BL-G 6 of 8, BL-H), only if no previous RT
    - and/or cystectomy (BL-B)

# Subsequent treatment, M1a disease

- Complete response or partial response
    - Consider consolidative local therapy in selected cases (BL-B, BL-G 6 of 8, BL-H)
- Stable disease or progression
    - Stable disease here means non-bulky disease and no significant clinical progression
    - Treat as metastatic disease (BL-10)

# Next

- Stable disease or progression on M1a disease, go to BL-10
- Follow-up, go to BL-E
- Recurrent or persistent disease, go to BL-11
