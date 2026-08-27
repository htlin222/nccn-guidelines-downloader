+++
id           = "gtn/GTN-5"
gid          = "gtn"
ref          = "GTN-5"
page         = 14
title        = "Primary treatment of PSTT and ETT, and monitoring after treatment"
nccn_version = "2.2026"
nccn_date    = "11/21/25"
generated    = "2026-08-28"
see_also     = ["GTN-1", "GTN-A", "GTN-B", "GTN-C", "GTN-D", "GTN-E"]

[facets]
disease   = "gtn"
stage     = ["I", "II", "III", "IV", "recurrent"]
timepoint = ["primary-treatment", "surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_type"
type = "enum"
options = ["PSTT", "ETT"]
[[variables]]
name = "figo_stage"
type = "text"
[[variables]]
name = "hcg"
type = "text"
[[variables]]
name = "interval_from_gestation"
type = "text"
[[variables]]
name = "hcg_reliable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Gestational Trophoblastic Neoplasia v2.2026, GTN-5, p14
- Applies to confirmed intermediate trophoblastic tumor: PSTT or ETT
- Confirmation of the diagnosis, see Principles of Pathology (GTN-A)
- Consider consultation with a clinician or center with expertise in management of gestational trophoblastic diseases
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Intermediate trophoblastic tumor confirmed, type ___ (tumor_type)
- FIGO stage ___ (figo_stage)
- hCG ___ (hcg)
- Interval from causative gestation ___ (interval_from_gestation)
- hCG is a reliable tumor marker in this patient ___ (hcg_reliable)

# Primary treatment, non-metastatic (Stage I)

- Hysterectomy with salpingectomy
    - See Principles of Surgical Management (GTN-C)
- Consider pelvic lymph node biopsy at the time of hysterectomy with salpingectomy
    - Incidence of pelvic lymph node metastasis in PSTT/ETT is estimated to be between 5% and 15% in clinical stage I tumors
    - Especially with large, deeply invasive tumors

# Primary treatment, Stage II-IV

- Check the interval from causative gestation
    - Yes, patient has >=4 years interval from causative gestation
        - Consider systemic therapy as per metastatic disease pathway
        - See Systemic Therapy for GTN (GTN-D) for specific recommendations
    - No, interval is shorter
        - Hysterectomy with salpingectomy
            - See Principles of Surgical Management (GTN-C)
        - Excision of metastatic disease if feasible
            - See Principles of Surgical Management (GTN-C)
        - and Chemotherapy with a platinum-based regimen
            - EMA-EP
            - EP-EMA
            - If not tolerated, switch to other regimens such as TP-TE, BEP, VIP, or ICE
            - See Systemic Therapy for GTN (GTN-D) for specific recommendations

# Monitoring and surveillance

- Applies after either treatment arm
- hCG monitoring
- or Surveillance with imaging, if hCG is not a reliable marker
    - Post-treatment imaging is indicated for follow-up after treatment of PSTT and ETT, where hCG is a less reliable tumor marker
    - See Principles of Imaging (GTN-B)
- See Principles of Gynecologic Survivorship (GTN-E)

# Next

- If recurrence or progression after treatment of non-metastatic (Stage I) disease
    - Systemic therapy, see Systemic Therapy for GTN (GTN-D)
    - Additional agents/regimens shown to have some activity in treating multiagent chemotherapy-resistant GTN (GTN-D)
- If recurrence or progression after treatment of Stage II-IV disease
    - Systemic therapy, see Systemic Therapy for GTN (GTN-D)
    - Additional agents/regimens shown to have some activity in treating multiagent chemotherapy-resistant GTN (GTN-D)
    - or Best supportive care, see NCCN Guidelines for Palliative Care
