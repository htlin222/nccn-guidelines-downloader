+++
id           = "ped_sts/PRMS-13"
gid          = "ped_sts"
ref          = "PRMS-13"
page         = 16
title        = "Treatment of high-risk RMS"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-G", "PRMS-F", "PRMS-14", "PRMS-15"]

[facets]
disease   = "ped_sts"
timepoint = ["primary-treatment", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "high_risk_confirmed"
type = "text"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "metastatic_sites"
type = "text"
[[variables]]
name = "imaging_status"
type = "text"
[[variables]]
name = "treatment_choice"
type = "enum"
options = ["clinical trial", "systemic therapy", "best supportive/palliative care"]
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-13, p16
- Applies to high-risk RMS
- Treatment on this page follows Principles of Imaging
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- High-risk RMS confirmed: ___ (high_risk_confirmed)
- Primary site: ___ (primary_site)
- Metastatic sites, and which of them are feasible for RT: ___ (metastatic_sites)
- Imaging per Principles of Imaging current: ___ (imaging_status)
- Treatment option chosen: ___ (treatment_choice)

# Treatment

- Clinical trial preferred
- Or systemic therapy (PRMS-G)
- Or best supportive/palliative care
    - If receiving best supportive/palliative care, follow-up (including imaging) should be tailored to the patient's clinical status

# Radiation therapy

- RT (PRMS-F)
    - For primary site
    - For feasible metastatic sites

# Next

- Surveillance (PRMS-15)
- Recurrent or progressive RMS (PRMS-14)
