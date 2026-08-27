+++
id           = "kidney/KID-3"
gid          = "kidney"
ref          = "KID-3"
page         = 9
title        = "Primary treatment and follow-up for stage IV kidney cancer"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["KID-2", "KID-4", "KID-A", "KID-C"]

[facets]
disease   = "kidney"
stage     = "IV"
timepoint = ["primary-treatment", "adjuvant", "surveillance", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "histology"
type = "enum"
options = ["clear cell", "non-clear cell"]
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "potentially resectable", "unresectable"]
[[variables]]
name = "met_sites"
type = "text"
+++

# Source

- NCCN Kidney Cancer v1.2027, KID-3, p9
- Primary treatment for stage IV disease, and follow-up after it
- General principles of management for renal cell carcinoma: KID-A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (side) kidney
- Histology ___ (histology)
- ___ (ctnm)
- Primary tumor ___ (resectability)
- Sites of metastatic disease ___ (met_sites)

# Resectable T4, M0

- Nephrectomy
    - Presurgical neoadjuvant therapy may be considered for clinical T2, T3, or T4 tumors without evidence of metastatic disease in whom complete resection is not feasible up front, to achieve cytoreduction which may enable complete resection
    - Presurgical neoadjuvant therapy may also be considered for clinical T2, T3, or T4 tumors without evidence of metastatic disease which have an imperative indication for nephron preservation (eg, solitary kidney, chronic kidney disease, bilateral tumors) and in which a partial nephrectomy is not feasible, to facilitate a partial nephrectomy
    - Consider presurgical neoadjuvant therapy only following confirmation of clear cell histology
- And, for clear cell histology, one of
    - Adjuvant pembrolizumab
        - Pembrolizumab and berahyaluronidase alfa-pmph subcutaneous injection may be substituted for IV pembrolizumab
        - Pembrolizumab and berahyaluronidase alfa-pmph has different dosing and administration instructions compared to IV pembrolizumab
        - Follow-up (KID-C)
    - Adjuvant belzutifan + pembrolizumab
        - Pembrolizumab and berahyaluronidase alfa-pmph subcutaneous injection may be substituted for IV pembrolizumab
        - Pembrolizumab and berahyaluronidase alfa-pmph has different dosing and administration instructions compared to IV pembrolizumab
        - Follow-up (KID-C)
    - Surveillance
        - Follow-up (KID-C)
- And, for non-clear cell histology, one of
    - Surveillance
        - Follow-up (KID-C)
    - Clinical trial

# Unresectable stage IV

- Tissue sampling (KID-4)

# M1, potentially surgically resectable primary

- Individualize treatment based on symptoms and extent of metastatic disease
- One of
    - Cytoreductive nephrectomy in select patients
    - Consider tissue sampling (KID-4)
    - Systemic therapy (category 1) (KID-4)
    - Clinical trial (category 2B)

# M1, surgically unresectable

- Individualize treatment based on symptoms and extent of metastatic disease
- Tissue sampling (KID-4)

# Follow-up after nephrectomy for resectable T4, M0

- Follow-up column on this page is category 2B
- Follow-up (KID-C)
- No single follow-up plan is appropriate for all patients
- Follow-up frequency should be individualized based on patient requirements
- May be extended beyond 5 years (KID-C, 5 of 5)
- Further study is required to define optimal follow-up duration

# Next

- Relapse or progression, go to KID-4
- Unresectable stage IV, go to KID-4
- M1 disease, potentially resectable or surgically unresectable, go to KID-4
