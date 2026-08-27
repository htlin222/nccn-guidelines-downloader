+++
id           = "kidney/KID-1"
gid          = "kidney"
ref          = "KID-1"
page         = 7
title        = "Initial workup of a suspicious renal mass, and primary treatment of stage I disease"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["KID-2", "KID-3", "KID-4", "GENE-1", "ST-1"]

[facets]
disease   = "kidney"
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "staging", "primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "mass_count"
type = "enum"
options = ["single", "multiple"]
[[variables]]
name = "cstage"
type = "text"
[[variables]]
name = "family_history"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["optimal", "non-optimal"]
+++

# Source

- NCCN Kidney Cancer v1.2027, KID-1, p7
- Applies to a suspicious renal mass at initial workup, and to primary treatment of stage I disease
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) suspicious renal mass
- Renal masses: ___ (mass_count)
- Clinical stage ___ (cstage)
- Family history of kidney cancer: ___ (family_history)
- Candidate for surgery: ___ (surgical_candidate)

# Initial workup

- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health, see NCCN Guidelines for Distress Management (DIS-A)
- History and physical (H&P)
- Complete blood count (CBC) with differential
- Comprehensive metabolic panel
- Urinalysis
- Abdomen ± pelvis CT or MRI
    - Imaging with and without contrast is strongly preferred, such as a renal protocol for abdomen
- CT chest (preferred) or chest x-ray
    - Imaging with and without contrast is strongly preferred
- If clinically indicated
    - Bone scan
    - Brain MRI
- Consider core needle biopsy
    - Fine-needle aspiration (FNA) is not adequate
    - Biopsy of small lesions may be considered to obtain or confirm a diagnosis of malignancy, and to guide decisions on surveillance, percutaneous ablation, SBRT, and/or surgery
- If urothelial carcinoma suspected (eg, central mass), consider
    - Urine cytology
    - Ureteroscopy
    - Percutaneous biopsy
- Consider genetic evaluation if any of the following
    - Multiple renal masses
    - Age ≤46 y
    - Family history
    - See Hereditary Renal Cell Carcinomas (HERED-RCC-1)

# Primary treatment

- See General Principles of Management for Renal Cell Carcinoma (KID-A)
- Stage I (T1a), options
    - Partial nephrectomy (preferred)
    - Percutaneous ablation
    - Stereotactic body radiation therapy (SBRT)
        - An option for patients considered non-optimal for either surgery or percutaneous ablation for clinical stage T1a kidney cancer (category 2A)
    - Active surveillance
    - Radical nephrectomy (in select patients)
- Stage I (T1b), options
    - Partial nephrectomy
    - Radical nephrectomy
    - Active surveillance (in select patients)
    - Percutaneous ablation (category 2B) (in select patients)
    - SBRT (in select patients)
        - An option for non-optimal surgical candidates for clinical stage T1b kidney cancer (category 2A)
- SBRT may be considered for non-optimal surgical candidates with stage II (category 2B) or stage III (category 3) kidney cancer
- See Principles of Radiation Therapy (KID-B)

# Follow-up

- Follow-up recommendations on this page are category 2B
- Surveillance after primary treatment, see Follow-up (KID-C)
- No single follow-up plan is appropriate for all patients
- Follow-up frequency should be individualized based on patient requirements, and may be extended beyond 5 years (KID-C, 5 of 5)
- Further study is required to define optimal follow-up duration

# Next

- Stage II, go to KID-2
- Stage III, go to KID-2
- Stage IV, go to KID-3
- Relapse or progression, go to KID-4
