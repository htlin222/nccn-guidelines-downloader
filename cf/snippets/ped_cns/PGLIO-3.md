+++
id           = "ped_cns/PGLIO-3"
gid          = "ped_cns"
ref          = "PGLIO-3"
page         = 10
title        = "Adjuvant treatment and follow-up of pediatric diffuse high-grade glioma, by tumor location"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PGLIO-4", "PGLIO-A", "PGLIO-B", "PGLIO-D", "PGLIO-E"]

[facets]
disease   = "ped_cns"
biomarker = ["idh1", "idh2"]
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "location"
type = "enum"
options = ["non-pontine", "pontine"]
[[variables]]
name = "h3_status"
type = "text"
[[variables]]
name = "idh_status"
type = "text"
[[variables]]
name = "rt_completed"
type = "text"
[[variables]]
name = "last_mri"
type = "text"
+++

# Source

- NCCN Pediatric Diffuse High-Grade Gliomas v1.2026, PGLIO-3, p10
- Adjuvant treatment and follow-up once pathology and location are established
- Pathology per Principles of Neuropathology (PGLIO-B)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pathology ___ (pathology), per Principles of Neuropathology (PGLIO-B)
- H3 status ___ (h3_status)
- IDH1/2 status ___ (idh_status)
- Tumor location ___ (location)
- RT completed ___ (rt_completed)
- Last brain MRI ___ (last_mri)

# Pathology this page covers

- Diffuse midline glioma, H3 K27-altered
- Pediatric diffuse high-grade glioma, H3-wild-type and IDH1/2 wild-type
- No pathology available, diagnosis by imaging features typical for DIPG

# Adjuvant treatment, non-pontine location

- Clinical trial (preferred)
- or Standard brain RT, per Principles of Radiation Therapy Management (PGLIO-D)
- or Standard brain RT (PGLIO-D) with systemic therapy per Principles of Systemic Therapy (PGLIO-E)
    - Concurrent temozolomide (PGLIO-E)
    - Adjuvant temozolomide (PGLIO-E)
    - With or without adjuvant lomustine (PGLIO-E)

# Adjuvant treatment, pontine location

- Clinical trial (preferred)
- or Standard brain RT, per Principles of Radiation Therapy Management (PGLIO-D)

# Follow-up

- Brain MRI, per Principles of Neuroimaging (PGLIO-A)
    - 2–6 weeks after RT
    - then every 2–3 months for 1 year
    - then every 3–6 months indefinitely

# Next

- Recurrence, go to PGLIO-4
