+++
id           = "uterine/ENDO-10"
gid          = "uterine"
ref          = "ENDO-10"
page         = 21
title        = "Therapy for locoregional recurrence of endometrial carcinoma, by prior radiation to the site"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ENDO-9", "ENDO-B", "ENDO-D", "UN-A"]

[facets]
disease   = "uterine"
stage     = "recurrent"
timepoint = "recurrence"
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "recurrence_site"
type = "text"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["none", "vaginal-brachytherapy-only", "ebrt-to-site"]
+++

# Source

- NCCN Endometrial Carcinoma v3.2026, ENDO-10, p21
- Applies to locoregional recurrence with no distant metastases
- Principles of Imaging (ENDO-B)
- Principles of Radiation Therapy for Uterine Neoplasms (UN-A)
- Systemic Therapy for Endometrial Carcinoma (ENDO-D)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Locoregional recurrence at ___ (recurrence_site)
    - May include isolated common iliac or para-aortic lymph node recurrence
- Negative for distant metastases on radiologic imaging (ENDO-B)
- Prior RT to the site of recurrence ___ (prior_rt)
    - No prior RT to site of recurrence, or previous vaginal brachytherapy only
    - Prior EBRT to site of recurrence

# Therapy if no prior RT to site of recurrence, or previous vaginal brachytherapy only

- EBRT (UN-A) ± brachytherapy (UN-A) ± systemic therapy (ENDO-D) (category 2B for systemic therapy)
    - Then surveillance (ENDO-9)
- or Surgical exploration + resection ± intraoperative RT (IORT)
    - Consider preoperative EBRT in select patients
    - Additional therapy set by what the exploration finds, see next block

# Additional therapy after surgical exploration and resection

- Disease confined to vagina or paravaginal soft tissue
    - EBRT (UN-A) ± brachytherapy (UN-A) ± systemic therapy (ENDO-D) (category 2B for systemic therapy)
    - Post-resection consolidation EBRT can be considered in patients who were not previously irradiated, or who are deemed to have additional tolerance for radiation
- Disease not confined to vagina or paravaginal soft tissue
    - Consider brachytherapy for locoregional disease with a vaginal component
    - Pelvic or para-aortic lymph node(s)
        - EBRT (UN-A) ± systemic therapy (ENDO-D)
        - Post-resection consolidation EBRT can be considered in patients who were not previously irradiated, or who are deemed to have additional tolerance for radiation
    - Upper abdominal/peritoneal, microscopic residual disease
        - Systemic therapy (ENDO-D) ± EBRT (UN-A)
        - Post-resection consolidation EBRT can be considered in patients who were not previously irradiated, or who are deemed to have additional tolerance for radiation
    - Upper abdominal/peritoneal, gross upper abdominal residual disease
        - Therapy for relapse [disseminated metastases] (ENDO-9)

# Therapy if prior EBRT to site of recurrence

- Surgical exploration + resection ± IORT
    - and/or Systemic therapy (ENDO-D) ± palliative EBRT (UN-A)
- or Brachytherapy (UN-A) ± systemic therapy (ENDO-D)
    - Recommended for small-volume vaginal and/or paravaginal disease
- Then surveillance (ENDO-9)

# Next

- Surveillance (ENDO-9)
- Gross upper abdominal residual disease, go to therapy for relapse [disseminated metastases] (ENDO-9)
