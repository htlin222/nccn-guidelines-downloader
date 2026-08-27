+++
id           = "cervical/CERV-3"
gid          = "cervical"
ref          = "CERV-3"
page         = 13
title        = "Primary treatment of stage IA1 without LVSI and stage IA1 with LVSI, non-fertility sparing"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-3A", "CERV-6", "CERV-10", "CERV-B", "CERV-C", "CERV-D"]

[facets]
disease   = "cervical"
stage     = "I"
timepoint = "primary-treatment"
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "excision_method"
type = "enum"
options = ["ckc", "leep"]
[[variables]]
name = "lvsi"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "margins"
type = "enum"
options = ["negative", "positive for dysplasia", "positive for carcinoma"]
[[variables]]
name = "operable"
type = "enum"
options = ["medically operable", "medically inoperable"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-3, p13
- Applies to stage IA1 with no LVSI, and to stage IA1 with LVSI based on cone/LEEP
- Primary treatment, non-fertility sparing
- Clinical stage assigned per Principles of Imaging (CERV-B)
- Footnotes on CERV-3A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage IA1
- LVSI ___ (lvsi)
- Diagnostic excision performed ___ (excision_method)
    - CKC is the preferred method of diagnostic excision
    - LEEP is acceptable, provided adequate margins and proper orientation are obtained
    - ECC above the excision should be added, except in pregnancy
- Margins ___ (margins)
- ___ (operable)

# Stage IA1, no LVSI

- Cone biopsy first, then treat by biopsy results
    - CKC preferred, LEEP acceptable with adequate margins and proper orientation
    - Add ECC above the excision, except in pregnancy
- Negative margins and medically inoperable
    - Observe
- Negative margins and medically operable
    - Type A hysterectomy (CERV-C)
- Positive margins for carcinoma and medically inoperable
    - Repeat cone biopsy (preferred)
        - CKC preferred, LEEP acceptable with adequate margins and proper orientation
        - Add ECC above the excision, except in pregnancy
    - or Brachytherapy (CERV-D) with or without pelvic external beam radiation therapy (EBRT)
- Positive margins for dysplasia or carcinoma and medically operable
    - Consider repeat cone biopsy, to better evaluate depth of invasion and rule out stage IA2/IB1 disease
        - CKC preferred, LEEP acceptable with adequate margins and proper orientation
        - Add ECC above the excision, except in pregnancy
    - or Type A hysterectomy, if margins positive for dysplasia (CERV-C)
    - or Type B radical hysterectomy, if margins positive for carcinoma
        - Plus SLN mapping or pelvic lymphadenectomy (CERV-C)

# Stage IA1 with LVSI, based on cone/LEEP

- Negative margins
    - Type A hysterectomy plus SLN mapping or pelvic lymphadenectomy (CERV-C)
    - or EBRT plus brachytherapy (CERV-D)
        - Radiation can be an option for patients who are medically inoperable
- Positive margins for dysplasia or carcinoma
    - Consider repeat cone biopsy, to better evaluate depth of invasion and rule out stage IA2/IB1 disease
        - CKC preferred, LEEP acceptable with adequate margins and proper orientation
        - Add ECC above the excision, except in pregnancy
    - or Type A hysterectomy, if margins positive for dysplasia, plus SLN mapping or pelvic lymphadenectomy (CERV-C)
    - or Type B radical hysterectomy, if margins positive for carcinoma, plus SLN mapping or pelvic lymphadenectomy (CERV-C)
    - or Pelvic EBRT plus brachytherapy (CERV-D)
        - Radiation can be an option for patients who are medically inoperable

# Next

- Hysterectomy with SLN mapping or pelvic lymphadenectomy, go to Surgical Findings (CERV-6)
- Observation, Type A hysterectomy for negative margins and medically operable disease, repeat cone biopsy, or radiation therapy, go to Surveillance (CERV-10)
