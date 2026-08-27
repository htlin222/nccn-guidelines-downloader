+++
id           = "kidney/KID-2"
gid          = "kidney"
ref          = "KID-2"
page         = 8
title        = "Primary treatment, adjuvant treatment, and follow-up for stage II and stage III kidney cancer"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["KID-1", "KID-3", "KID-4"]

[facets]
disease   = "kidney"
stage     = ["II", "III"]
timepoint = ["primary-treatment", "neoadjuvant", "adjuvant", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "stage"
type = "enum"
options = ["II", "III"]
[[variables]]
name = "histology"
type = "enum"
options = ["clear cell", "non-clear cell"]
[[variables]]
name = "grade"
type = "text"
+++

# Source

- NCCN Kidney Cancer v1.2027, KID-2, p8
- Applies to stage II and stage III kidney cancer
- General Principles of Management for Renal Cell Carcinoma (KID-A)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) kidney
- Stage ___ (stage)
- Histology ___ (histology)
- Tumor grade ___ (grade)

# Consider before surgery

- Presurgical neoadjuvant therapy may be considered, only following confirmation of clear cell histology, for either of:
    - Clinical T2, T3, or T4 tumors without evidence of metastatic disease in whom complete resection is not feasible up front
        - Goal is cytoreduction, which may enable complete resection
    - Clinical T2, T3, or T4 tumors without evidence of metastatic disease with an imperative indication for nephron preservation in which a partial nephrectomy is not feasible
        - Imperative indications include solitary kidney, chronic kidney disease, bilateral tumors
        - Goal is cytoreduction, which may facilitate a partial nephrectomy

# Primary treatment

- Stage II, one of:
    - Partial nephrectomy
    - Radical nephrectomy
    - SBRT, in select patients (category 2B)
        - SBRT may be considered for non-optimal surgical candidates with stage II kidney cancer (category 2B)
        - SBRT is an option for patients considered non-optimal for either surgery or percutaneous ablation for clinical stage T1a kidney cancer (category 2A)
        - SBRT is an option for non-optimal surgical candidates for clinical stage T1b kidney cancer (category 2A)
        - See Principles of Radiation Therapy (KID-B)
- Stage III, one of:
    - Radical nephrectomy
    - Partial nephrectomy, if clinically indicated
    - SBRT, in select patients (category 3)
        - SBRT may be considered for non-optimal surgical candidates with stage III kidney cancer (category 3)
        - See Principles of Radiation Therapy (KID-B)

# Adjuvant treatment

- Stage II, clear cell histology, one of:
    - Surveillance
    - Adjuvant pembrolizumab (category 1), for grade 4 tumors with clear cell histology with or without sarcomatoid features
    - Adjuvant belzutifan + pembrolizumab, for grade 4 tumors with clear cell histology with or without sarcomatoid features
- Stage II, non-clear cell histology
    - Surveillance
- Stage III, clear cell histology, one of:
    - Adjuvant pembrolizumab (category 1)
    - Adjuvant belzutifan + pembrolizumab
    - Surveillance
- Stage III, non-clear cell histology, one of:
    - Surveillance
    - Clinical trial
- If pembrolizumab is given, IV or subcutaneous:
    - Pembrolizumab and berahyaluronidase alfa-pmph subcutaneous injection may be substituted for IV pembrolizumab
    - Pembrolizumab and berahyaluronidase alfa-pmph has different dosing and administration instructions compared to IV pembrolizumab
- After adjuvant treatment, follow-up (KID-C)

# Follow-up

- Follow-up is category 2B
- No single follow-up plan is appropriate for all patients
- Follow-up frequency should be individualized based on patient requirements
- Follow-up may be extended beyond 5 years (KID-C, 5 of 5)
- Further study is required to define optimal follow-up duration

# Next

- No relapse or progression, follow-up per KID-C
- Relapse or progression, go to KID-4
