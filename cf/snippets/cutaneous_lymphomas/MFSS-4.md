+++
id           = "cutaneous_lymphomas/MFSS-4"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-4"
page         = 23
title        = "Assigning the clinical stage of MF and SSz from the TNMB categories, and the guidelines page each stage leads to"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-3", "MFSS-6", "MFSS-7", "MFSS-8", "MFSS-10", "MFSS-11", "MFSS-12"]

[facets]
disease   = "cutaneous_lymphomas"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "t_stage"
type = "text"
[[variables]]
name = "bsa"
type = "text"
[[variables]]
name = "n_stage"
type = "text"
[[variables]]
name = "m_stage"
type = "text"
[[variables]]
name = "b_stage"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "folliculotropism"
type = "enum"
options = ["present", "absent", "not assessed"]
[[variables]]
name = "lct"
type = "enum"
options = ["present", "absent", "not assessed"]
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-4, p23
- Clinical staging of MF and SSz
- TNMB classification is on MFSS-3
- Olsen EA, et al. Blood 2022;140:419-437
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- T (skin) ___ (t_stage)
    - Body surface area involved ___ (bsa)
- N (node) ___ (n_stage)
- M (visceral) ___ (m_stage)
- B (blood involvement) ___ (b_stage)
- Clinical stage ___ (clinical_stage)
- Folliculotropism ___ (folliculotropism)
    - Histologic feature that can occur irrespective of stage
    - Histologic evidence of FMF is associated with higher risk of disease progression
    - In selected cases or inadequate response, consider primary treatment for stage IIB (tumor stage disease)
- Large-cell transformation, LCT ___ (lct)
    - Histologic feature that can occur irrespective of clinical stage
    - LCT often but not always corresponds to a more aggressive growth rate requiring systemic therapies

# T categories used on this page

- T1, patches, papules, and/or plaques covering <10% body surface area, BSA
- T2, patches, papules, and/or plaques covering ≥10% BSA
- T3, one or more tumors, ≥1 cm in diameter
- T4, confluence of erythema ≥80% BSA

# Clinical stage of MF and SSz

- Stage IA, limited skin involvement
    - T1
    - N0
    - M0
    - B0 or B1
- Stage IB, skin-only disease
    - T2
    - N0
    - M0
    - B0 or B1
- Stage IIA
    - T1–2
    - N1–2
    - M0
    - B0 or B1
- Stage IIB, tumor stage disease
    - T3
    - N0–2
    - M0
    - B0 or B1
- Stage IIIA, erythrodermic disease
    - T4
    - N0–2
    - M0
    - B0
- Stage IIIB, erythrodermic disease
    - T4
    - N0–2
    - M0
    - B1
- Stage IVA1, Sézary syndrome
    - T1–4
    - N0–2
    - M0
    - B2
- Stage IVA2, Sézary syndrome or Non-Sézary
    - T1–4
    - N3
    - M0
    - B0 or B1 or B2
- Stage IVB, visceral disease
    - T1–4
    - N0–3
    - M1A or M1B
    - B0 or B1 or B2

# Next

- Stage IA, go to MFSS-6
- Stage IB, go to MFSS-7
- Stage IIA, go to MFSS-7
- Stage IIB, go to MFSS-8
- Stage IIIA, go to MFSS-10
- Stage IIIB, go to MFSS-10
- Stage IVA1, go to MFSS-11
- Stage IVA2, go to MFSS-11
- Stage IVB, go to MFSS-11
- Large-cell transformation, LCT, go to MFSS-12
