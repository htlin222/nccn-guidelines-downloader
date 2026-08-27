+++
id           = "cutaneous_melanoma/ME-4"
gid          = "cutaneous_melanoma"
ref          = "ME-4"
page         = 25
title        = "Workup and primary treatment for microscopic satellites (at least stage IIIB)"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-1", "ME-2", "ME-3", "ME-5", "ME-11"]

[facets]
disease   = "cutaneous_melanoma"
stage     = "III"
biomarker = "braf"
timepoint = ["workup", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "satellite_specimen"
type = "enum"
options = ["biopsy specimen from primary lesion", "wide excision specimen"]
[[variables]]
name = "sln_status"
type = "enum"
options = ["negative", "positive", "not performed"]
[[variables]]
name = "braf_status"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-4, p25
- Applies to microscopic satellites in the biopsy specimen from the primary lesion (post pathology report on ME-1)
- Applies to microscopic satellites in the wide excision specimen (post wide excision and SLNB on ME-2 or ME-3, or post wide excision on ME-2 or ME-3)
- Microsatellitosis, when present in the initial biopsy or wide excision specimen, defines at least N1c and at least stage IIIB disease
- Microsatellitosis represents microscopically identified lymphatic metastasis and confers an increased risk of recurrence
    - Microsatellites are found discontinuous from the primary tumor (adjacent or deep)
    - The AJCC Cancer Staging Manual, Eighth Edition (2017) does not define microsatellitosis according to tumor nest dimension or distance from the primary tumor
    - It classifies cases with microsatellites, clinical satellites, or in-transit metastases as N1c, N2c, or N3c based on the number of tumor-involved regional lymph nodes (0, 1, or ≥2, respectively)
- At times it may be difficult to distinguish whether invasive melanoma is present within a lymphatic channel or represents a microsatellite
    - IHC using a specific lymphatic marker such as D2-40 may assist in distinction
- Additional footnotes on ME-4A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Microscopic satellites identified in ___ (satellite_specimen)
- Sentinel node status ___ (sln_status)
- BRAF ___ (braf_status)
- At least N1c, at least stage IIIB disease

# Workup

- For microscopic satellites in the biopsy specimen from the primary lesion, and for microscopic satellites in the wide excision specimen with sentinel node negative or SLNB not performed
- H&P
- Routine lab tests not recommended
- Imaging for baseline staging, or to evaluate specific signs or symptoms
    - Principles of Imaging–Workup (ME-D)
    - Nodal basin US is not a substitute for SLNB
    - Consider nodal basin US prior to SLNB for patients with melanoma with an equivocal regional lymph node physical exam
    - Abnormal or suspicious findings on nodal basin US should be confirmed histologically, whenever possible
    - Negative nodal basin US is not a substitute for biopsy of clinically suspicious lymph nodes
- BRAF testing if considering adjuvant therapy or clinical trial
    - Patients who were microsatellite-positive but SLN-negative were not studied in adjuvant therapy trials, so the results of those trials may not be applicable to this subgroup

# Primary treatment — microscopic satellites in biopsy specimen from primary lesion

- Wide excision (category 1)
    - Principles of Surgical and Non-Surgical Management of Primary Melanoma (ME-E)
- Discuss and offer SLNB
    - Decision not to perform SLNB may be based on significant patient comorbidities, patient preference, or other factors (such as advanced patient age and/or poor functional status)
    - SLNB should be considered in patients with microsatellitosis, especially if it will alter disease management decisions
    - Although less well-studied than other stage III patient populations, SLN status does have prognostic significance in patients with microsatellitosis, with a positive SLN upstaging a patient to at least N2c, stage IIIC
- Wide excision (category 1) with SLNB
    - SLNs should be evaluated with serial sectioning and IHC
    - Principles of Sentinel Lymph Node Biopsy (SLNB) (ME-F)

# Primary treatment — microscopic satellites in wide excision specimen, sentinel node negative or SLNB not performed

- Consider SLNB if not previously performed
    - Decision not to perform SLNB may be based on significant patient comorbidities, patient preference, or other factors (such as advanced patient age and/or poor functional status)
    - SLNs should be evaluated with serial sectioning and IHC
    - Principles of Sentinel Lymph Node Biopsy (SLNB) (ME-F)
    - SLNB should be considered in patients with microsatellitosis, especially if it will alter disease management decisions

# Adjuvant treatment — sentinel node negative, or SLNB not performed

- The choice of adjuvant systemic treatment versus observation should take into consideration the patient's risk of melanoma recurrence and the risk of treatment toxicity (ADJSYS-2)
- Clinical trial
- or Observation
- or Systemic therapy
    - Principles of Adjuvant Systemic Therapy (ADJSYS-1)
    - Patients with stage IIIB melanoma based on microsatellites alone (without satellite, in-transit, or nodal disease) demonstrate more favorable survival compared with those with a positive SLNB
    - Because patients who were microsatellite-positive, but SLN-negative were not studied in adjuvant therapy trials, the results of these trials may not be applicable to this subgroup
- BRAF testing if considering adjuvant therapy or clinical trial

# Next

- Sentinel node positive after wide excision with SLNB, go to Stage IIIB/C/D (sentinel node positive) Workup and Primary Treatment (ME-5)
- Microscopic satellites in wide excision specimen and sentinel lymph node (SLN) positive (post wide excision and SLNB on ME-2 or ME-3), go to ME-5
- Sentinel node negative, or SLNB not performed, after adjuvant treatment, go to Follow-up for Stage III Disease (ME-11)
