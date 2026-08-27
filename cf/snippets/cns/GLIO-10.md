+++
id           = "cns/GLIO-10"
gid          = "cns"
ref          = "GLIO-10"
page         = 24
title        = "Glioblastoma: adjuvant treatment by MGMT promoter status and performance status"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["GLIO-11", "GLIO-12", "GLIO-13", "GLIO-A", "BRAIN-A", "BRAIN-C", "BRAIN-E"]

[facets]
disease   = "cns"
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "kps"
type = "number"
[[variables]]
name = "mgmt"
type = "enum"
options = ["methylated", "unmethylated", "indeterminate"]
[[variables]]
name = "tumor_location"
type = "enum"
options = ["supratentorial", "infratentorial"]
+++

# Source

- NCCN Adult Glioma v2.2026, GLIO-10, p24
- Applies to glioblastoma; this pathway also includes gliosarcoma
- For H3-mutated glioma recommendations, see GLIO-12
- For recommended biomarker testing, see Principles of Brain Tumor Pathology (BRAIN-E)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pathology confirms glioblastoma or gliosarcoma
- KPS ___ (kps)
    - Good PS = KPS 60 or higher
    - Poor PS = KPS below 60
- MGMT promoter status ___ (mgmt)
    - Consider pyrosequencing if not done
- Tumor location ___ (tumor_location)
    - Alternating electric field therapy is only an option for patients with supratentorial disease

# Adjuvant treatment: good PS (KPS 60 or higher), MGMT promoter methylated or indeterminate

- Consider clinical trial (preferred for eligible patients)
- or RT + concurrent temozolomide and adjuvant temozolomide + alternating electric field therapy (preferred) (category 1)
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Temozolomide per Systemic Therapy Options (GLIO-A)
    - Combination of modalities may lead to increased toxicity or radiographic changes
    - No clear data that treatment with temozolomide beyond 6 months is beneficial, even in patients with MGMT-promoter methylated disease
    - Alternating electric field therapy only if disease is supratentorial
- or RT + concurrent temozolomide and adjuvant temozolomide (category 1)
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Temozolomide per Systemic Therapy Options (GLIO-A)
    - Combination of modalities may lead to increased toxicity or radiographic changes
    - No clear data that treatment with temozolomide beyond 6 months is beneficial, even in patients with MGMT-promoter methylated disease

# Adjuvant treatment: good PS (KPS 60 or higher), MGMT promoter unmethylated

- Clinical benefit from temozolomide is likely to be lower in patients whose tumors lack MGMT promoter methylation
- Consider clinical trial (preferred for eligible patients)
- or RT + concurrent temozolomide + adjuvant temozolomide + alternating electric field therapy (preferred) (category 1)
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Temozolomide per Systemic Therapy Options (GLIO-A)
    - Combination of modalities may lead to increased toxicity or radiographic changes
    - No clear data that treatment with temozolomide beyond 6 months is beneficial
    - Alternating electric field therapy only if disease is supratentorial
- or RT + concurrent temozolomide and adjuvant temozolomide (category 1)
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Temozolomide per Systemic Therapy Options (GLIO-A)
    - Combination of modalities may lead to increased toxicity or radiographic changes
    - No clear data that treatment with temozolomide beyond 6 months is beneficial
- or RT alone
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)

# Adjuvant treatment: poor PS (KPS below 60), age 70 y or younger

- Hypofractionated RT (preferred), with or without concurrent or adjuvant temozolomide
    - RT per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
    - Temozolomide per Systemic Therapy Options (GLIO-A)
- or Temozolomide
    - Temozolomide per Systemic Therapy Options (GLIO-A)
- or Palliative/best supportive care

# Next

- Poor PS (KPS below 60) and age above 70 y, go to GLIO-11
- Follow-up per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
    - Within the first 3 months after completion of RT and concomitant temozolomide, diagnosis of recurrence can be indistinguishable from pseudoprogression on neuroimaging
- Recurrence, go to GLIO-13
