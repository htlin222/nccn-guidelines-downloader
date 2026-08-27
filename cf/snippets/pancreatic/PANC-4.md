+++
id           = "pancreatic/PANC-4"
gid          = "pancreatic"
ref          = "PANC-4"
page         = 15
title        = "Restaging workup and response assessment after neoadjuvant therapy"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-5", "PANC-8", "PANC-9", "PANC-11"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["neoadjuvant", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "neoadjuvant_regimen"
type = "text"
[[variables]]
name = "neoadjuvant_duration"
type = "text"
[[variables]]
name = "ca199_post"
type = "text"
[[variables]]
name = "restaging_imaging"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["significant", "minimal", "progression not precluding surgery", "progression precluding surgery"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-4, p15
- Applies to the patient who has had neoadjuvant therapy and is now being restaged
- Chemoradiation and radiation details: PANC-G and PANC-H
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, pancreatic adenocarcinoma
- Neoadjuvant therapy given: ___ (neoadjuvant_regimen)
- Duration completed: ___ (neoadjuvant_duration)
- Post-treatment CA 19-9: ___ (ca199_post)
- Restaging imaging: ___ (restaging_imaging)
- Response at restaging: ___ (response)

# Restaging workup

- Pancreatic protocol CT or MRI (abdomen)
- Chest/pelvis CT
- Consider PET
- Post-treatment CA 19-9
- Consider staging laparoscopy, as clinically indicated

# Response and treatment

- Significant response
    - Surgical resection
        - Adjuvant treatment and Surveillance (PANC-5)
        - Unresectable disease at surgery, go to PANC-8
- Minimal response
    - Surgical resection
        - Adjuvant treatment and Surveillance (PANC-5)
- Disease progression not precluding surgery
    - Consider alternate neoadjuvant chemotherapy
    - Consider chemoradiation, if not previously used, or radiation (PANC-G and PANC-H)
    - Reassess response
        - Significant response, see the top pathway
        - No progression, surgical resection
- Disease progression precluding surgery
    - Consider alternate neoadjuvant chemotherapy
    - Consider chemoradiation, if not previously used, or radiation if no metastatic disease (PANC-G and PANC-H)
    - Reassess response

# Next

- Resected, go to Adjuvant treatment and Surveillance (PANC-5)
- Unresectable disease found at surgery, go to PANC-8
- After reassessment of disease progression precluding surgery, go to Locally advanced disease (PANC-9)
- After reassessment of disease progression precluding surgery, go to Metastatic disease (PANC-11)
