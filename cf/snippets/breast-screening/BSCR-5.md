+++
id           = "breast-screening/BSCR-5"
gid          = "breast-screening"
ref          = "BSCR-5"
page         = 13
title        = "Triage of presenting breast signs/symptoms found during a clinical encounter"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-1A", "BSCR-6", "BSCR-8", "BSCR-9", "BSCR-10", "BSCR-11", "BSCR-13", "BSCR-14"]

[facets]
disease    = "breast-screening"
timepoint  = ["screening", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "presenting_symptom"
type = "text"
[[variables]]
name = "cbe"
type = "text"
[[variables]]
name = "history"
type = "text"
[[variables]]
name = "breast_density"
type = "text"
[[variables]]
name = "implants"
type = "text"
[[variables]]
name = "time_since_implantation"
type = "text"
[[variables]]
name = "implant_surface"
type = "text"
[[variables]]
name = "amab_status"
type = "text"
[[variables]]
name = "prior_abnormal_screening"
type = "text"
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-5, p13
- Applies to presenting signs/symptoms during a clinical encounter
- For management of signs/symptoms in individuals assigned male at birth (AMAB), see BSCR-14
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Presenting sign/symptom ___ (presenting_symptom)
- Medical and family history ___ (history)
- Clinical breast examination (CBE) ___ (cbe)
- Known breast density from a prior mammogram ___ (breast_density)
- Breast implants ___ (implants)
    - Time since implantation ___ (time_since_implantation)
    - Implant surface, textured or smooth ___ (implant_surface)
- Assigned male at birth ___ (amab_status)
- Abnormal breast screening still awaiting diagnostic follow-up ___ (prior_abnormal_screening)

# What the clinical encounter must include

- At a minimum, a review of medical history
- At a minimum, a review of family history
- At a minimum, a CBE
- Subsequent visits should include risk assessment, by age 25 years
- Subsequent visits should include risk reduction counseling
- Factor known breast density into risk assessment, if available from a prior mammogram
- Attention to timely diagnostic follow-up after abnormal breast screening is recommended
    - Racial disparities have been observed in time to diagnostic imaging and/or biopsy following abnormal breast screening
    - See Discussion

# What counts as a palpable symptom

- Mass
- New-onset asymmetric thickening/nodularity
- Asymmetric breast enlargement
- Change in shape/contour
    - May be due to implant rupture
    - See https://www.fda.gov/media/131885/download
- See BSCR-6

# Individuals with breast implants

- Very small risk of breast implant-associated anaplastic large cell lymphoma (BIA-ALCL)
    - Average 7–9 years after implantation
    - Majority of cases have been seen in textured implants
    - Concerning findings: effusion, enlargement, mass
    - Also see NCCN Guidelines for T-Cell Lymphomas
- Very small risk of breast implant-associated squamous cell carcinoma (BIA-SCC)
    - Associated with either smooth or textured implants
    - Concerning finding: ulceration
- Breast-implant-related symptoms occurring >1 year post-implantation that are concerning for BIA-ALCL or BIA-SCC
    - Consultation with a multidisciplinary team with experience in managing these disorders is recommended

# Next

- Palpable symptom, go to BSCR-6
- Acquired/new-onset nipple inversion/retraction without palpable mass, go to BSCR-8
- Nipple discharge, no palpable symptom, go to BSCR-9
- Skin changes, go to BSCR-10
    - Peau d'orange
    - Edema/erythema
    - Nipple excoriation
    - Scaling, eczema
    - Skin ulcers
- Breast pain, go to BSCR-11
- Axillary mass(es), go to BSCR-13
- Signs/symptoms in individuals AMAB, go to BSCR-14
