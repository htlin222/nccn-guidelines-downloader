+++
id           = "Myeloma/MYEL-3"
gid          = "Myeloma"
ref          = "MYEL-3"
page         = 11
title        = "Smoldering myeloma (asymptomatic): primary treatment by risk group, and follow-up/surveillance"
nccn_version = "5.2026"
nccn_date    = "01/09/26"
generated    = "2026-08-27"
see_also     = ["MYEL-2", "MYEL-4", "MYEL-A", "MYEL-C"]

[facets]
disease   = "Myeloma"
histology = "plasma-cell"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk"
type = "enum"
options = ["low", "high"]
[[variables]]
name = "rising_parameters"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "dx_imaging"
type = "text"
+++

# Source

- NCCN Multiple Myeloma v5.2026, MYEL-3, p11
- Applies to smoldering myeloma (asymptomatic)
- Definitions of myeloma and related plasma-cell disorders: MYEL-A
- For risk criteria, refer to Lakshman A, et al. Blood Cancer J 2018;8:59 and Mateos MV, et al. Blood Cancer J 2020;10:102
- The NCCN Panel strongly recommends enrolling eligible patients with smoldering myeloma in clinical trials
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, smoldering myeloma (asymptomatic)
- Diagnosis checked against the definitions of myeloma and related plasma-cell disorders (MYEL-A)
- Risk group ___ (risk)
- Rising parameters since last visit ___ (rising_parameters)
    - Patients with rising parameters are considered high risk and should be closely monitored
- Imaging technique used at diagnosis ___ (dx_imaging)

# Primary treatment, low risk

- Clinical trial
- or Observe at 3- to 6-month intervals (category 1)
    - Patients with rising parameters are considered high risk and should be closely monitored

# Primary treatment, high risk

- Clinical trial (preferred)
- or Observe at 3-month intervals as clinically indicated
    - Patients with rising parameters are considered high risk and should be closely monitored
- or Select patients
    - Daratumumab (category 1)
    - Lenalidomide (category 2B)
        - Consider collection of hematopoietic stem cells for future use

# Follow-up/surveillance

- Every 3–6 months
    - CBC, differential, platelet count
    - Creatinine, corrected calcium
    - Serum quantitative immunoglobulins, SPEP, SIFE
    - Serum FLC assay
    - 24-hour urine for total protein, UPEP, and UIFE as clinically indicated
- Bone marrow aspirate and biopsy, as clinically indicated
    - with FISH
    - or NGS
    - or multi-parameter flow cytometry
- Imaging annually or as needed, ideally with the same technique used at diagnosis (MYEL-C)
    - Whole-body MRI without contrast
    - Low-dose CT
    - FDG-PET/CT
- See NCCN Guidelines for Survivorship

# Next

- Progression to symptomatic myeloma, go to multiple myeloma (symptomatic) (MYEL-4)
