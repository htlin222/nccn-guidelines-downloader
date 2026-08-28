+++
id           = "testicular/SEM-3"
gid          = "testicular"
ref          = "SEM-3"
page         = 10
title        = "Primary treatment of stage IIA and IIB pure seminoma"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["SEM-2", "SEM-4", "TEST-A", "TEST-C", "TEST-E", "TEST-H"]

[facets]
disease    = "testicular"
stage      = "II"
timepoint  = ["primary-treatment", "adjuvant", "surveillance", "recurrence"]
intent     = "curative"
population = ["male", "fertility"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "clinical_stage"
type = "enum"
options = ["IIA", "IIB"]
[[variables]]
name = "node_size"
type = "number"
[[variables]]
name = "markers"
type = "text"
[[variables]]
name = "imaging_date"
type = "text"
+++

# Source

- NCCN Testicular Cancer v2.2026, SEM-3, p10
- Applies to pure seminoma, clinical stage IIA/IIB
- BEP = Bleomycin/Etoposide/Cisplatin
- EP = Etoposide/Cisplatin
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, pure seminoma
- Clinical stage ___ (clinical_stage)
- Largest retroperitoneal lymph node ___ (node_size) cm in transaxial long axis
    - Nonbulky IIB is defined as <3 cm in transaxial long axis
- Tumor markers ___ (markers)
    - Do not treat based upon an elevated LDH alone
- Most recent CT or MRI ___ (imaging_date)
    - For select cases of clinical stage IIA with borderline retroperitoneal lymph nodes, waiting 4–8 weeks and repeating imaging (CT or MRI) to confirm staging before initiating treatment can be considered

# Before starting treatment

- Shared decision-making for stage IIA/IIB seminoma
    - Inform the patient of the recurrence rates with each treatment option
    - Inform the patient of the potential for dual therapy with each treatment option
- Discuss sperm banking prior to chemotherapy or radiation treatment
- All locoregional treatment is recommended within 4 weeks of CT or MRI
- All locoregional treatment is recommended within 2 weeks of confirmation of normal tumor markers

# Primary treatment, nodes <3 cm

- Nerve-sparing RPLND (category 2B for 2–3 cm)
    - Principles of Surgery for Germ Cell Tumors (TEST-H)
    - Recommend referral to a high-volume center
- or RT to include para-aortic and ipsilateral iliac lymph nodes
    - 30 Gy for 1–2 cm nodes
    - 36 Gy for 2–3 cm nodes
    - Principles of Radiotherapy for Pure Testicular Seminoma (TEST-C)
- or First-line chemotherapy (TEST-E)
    - BEP for 3 cycles, or
    - EP for 4 cycles
    - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced glomerular filtration rate (GFR) or older age
- or Carboplatin + RT (category 2B)
    - Late toxicities should be considered, as current studies only extend out to 3 years
    - Papachristofilou A, et al. Lancet Oncol 2022;23:1441-1450

# After nerve-sparing RPLND

- pN0
    - Surveillance
- pN1
    - Surveillance (preferred), or
    - Adjuvant chemotherapy (category 2B)
- pN2
    - Surveillance, or
    - Adjuvant chemotherapy
- pN3
    - Surveillance (category 2B), or
    - Adjuvant chemotherapy (preferred)
- Adjuvant chemotherapy here is based on data from nonseminoma and includes EP for 2 cycles
    - This is an evolving field and data are still needed to provide a definitive option

# Primary treatment, nodes 3–5 cm

- First-line chemotherapy (TEST-E)
    - BEP for 3 cycles, or
    - EP for 4 cycles
    - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced glomerular filtration rate (GFR) or older age

# Recurrence

- For recurrence, treat according to extent of disease at relapse
    - Patients should not be treated based upon an elevated LDH alone

# Next

- After nerve-sparing RPLND with pN0 or pN1, see Follow-up for Seminoma, Table 3 (TEST-A 2 of 3)
- After nerve-sparing RPLND with pN2 or pN3, see Follow-up for Seminoma, Table 4 (TEST-A 2 of 3) or Table 5 (TEST-A 3 of 3)
- After RT, first-line chemotherapy, or carboplatin + RT, the page points to Follow-up for Seminoma, Table 3 (TEST-A 2 of 2) and Table 6 (TEST-A 3 of 3); confirm which table applies on TEST-A
