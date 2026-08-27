+++
id           = "kidney/KID-4"
gid          = "kidney"
ref          = "KID-4"
page         = 10
title        = "Treatment for stage IV or relapsed disease, and treatment at disease progression"
nccn_version = "1.2027"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["KID-3", "KID-B", "KID-C", "KID-D"]

[facets]
disease   = "kidney"
stage     = ["IV", "recurrent"]
timepoint = ["metastatic", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["clear cell", "non-clear cell"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["stage IV", "relapsed", "progression on prior therapy"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "oligometastatic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "months_since_nephrectomy"
type = "number"
+++

# Source

- NCCN Kidney Cancer v1.2027, KID-4, p10
- Applies to stage IV or relapsed disease, and to disease progression on treatment
- Pathway splits on clear cell versus non-clear cell histology
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histology ___ (histology)
- Disease status ___ (disease_status)
- Sites of disease ___ (met_sites)
- Oligometastatic disease ___ (oligometastatic)
- Prior systemic therapy ___ (prior_therapy)
- Months since nephrectomy ___ (months_since_nephrectomy)

# Stage IV or relapsed disease, clear cell histology

- Clinical trial
- First-Line Therapy (KID-D, 1 of 3) (category 1)
- Metastasectomy
- SBRT for oligometastatic disease
    - Principles of Radiation Therapy (KID-B)
- Percutaneous ablation for oligometastatic disease
- Metastasectomy with complete resection of disease, followed by adjuvant pembrolizumab within 1 year of nephrectomy
    - Pembrolizumab and berahyaluronidase alfa-pmph subcutaneous injection may be substituted for IV pembrolizumab
    - Pembrolizumab and berahyaluronidase alfa-pmph has different dosing and administration instructions compared to IV pembrolizumab
- Metastasectomy with complete resection of disease, followed by adjuvant belzutifan plus pembrolizumab
    - Pembrolizumab and berahyaluronidase alfa-pmph subcutaneous injection may be substituted for IV pembrolizumab
    - Pembrolizumab and berahyaluronidase alfa-pmph has different dosing and administration instructions compared to IV pembrolizumab

# Stage IV or relapsed disease, non-clear cell histology

- Clinical trial (preferred)
- Systemic Therapy (KID-D, 3 of 3) (category 1)
- Metastasectomy
- SBRT for oligometastatic disease
    - Principles of Radiation Therapy (KID-B)
- Percutaneous ablation for oligometastatic disease

# Best supportive care

- Given together with whichever option above is chosen, in both histologies and at progression
- Can include radiation therapy (RT), where SBRT is the preferred approach
- Can include bisphosphonates for bony metastases
- Can include receptor activator of nuclear factor-kappa B (RANK) ligand inhibitors for bony metastases
    - An FDA-approved biosimilar is an appropriate substitute for denosumab

# Disease progression, clear cell histology

- Follow-up (KID-C)
- Clinical trial
- Subsequent Therapy for Clear Cell Histology (KID-D, 2 of 3)
- Metastasectomy
- SBRT for oligometastatic disease
    - Principles of Radiation Therapy (KID-B)
- Percutaneous ablation for oligometastatic disease
- And best supportive care

# Disease progression, non-clear cell histology

- Follow-up (KID-C)
- Clinical trial
- Systemic Therapy for Non-Clear Cell Histology (KID-D, 3 of 3)
- Metastasectomy
- SBRT for oligometastatic disease
    - Principles of Radiation Therapy (KID-B)
- Percutaneous ablation for oligometastatic disease
- And best supportive care

# Next

- Clear cell, starting systemic therapy, go to KID-D, 1 of 3
- Clear cell, progression on prior systemic therapy, go to KID-D, 2 of 3
- Non-clear cell, starting or changing systemic therapy, go to KID-D, 3 of 3
- Radiation therapy planning for SBRT, go to KID-B
- Follow-up after treatment, go to KID-C
