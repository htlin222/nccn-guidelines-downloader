+++
id           = "wilms_tumor/WILMS-8"
gid          = "wilms_tumor"
ref          = "WILMS-8"
page         = 21
title        = "Localized bilateral renal tumors: neoadjuvant VAD, resectability at 6 weeks, and adjuvant chemotherapy and radiation by histology result"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-8A", "WILMS-C", "WILMS-D", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
stage     = ["I", "II", "III"]
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "biopsied"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "resectable_wk6"
type = "enum"
options = ["resectable by bilateral partial nephrectomy", "not resectable by partial nephrectomy"]
[[variables]]
name = "histology_result"
type = "enum"
options = ["FHWT", "WT with anaplasia"]
[[variables]]
name = "blastemal"
type = "enum"
options = ["blastemal predominant", "not blastemal predominant"]
[[variables]]
name = "necrosis"
type = "enum"
options = ["complete necrosis", "no complete necrosis"]
[[variables]]
name = "local_stage"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-8, p21
- Applies to localized bilateral renal tumors, with or without predisposing condition
- Upfront biopsy or resection is discouraged
- Principles of Pathology (WILMS-C)
- Principles of Surgery (WILMS-D)
- COG Staging of Wilms Tumor (ST-1)
- Principles of Chemotherapy (WILMS-G)
- Principles of Radiation Therapy (WILMS-H)
- Molecular biomarkers were not used to direct therapy in the AREN0534 trial
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, localized bilateral renal tumors
- Predisposing condition ___ (predisposing_condition)
- Tumor biopsied ___ (biopsied)
    - If biopsied, the tumor is considered to be stage III for determination of chemotherapy regimen
    - Biopsy alone does not upstage a tumor to stage III for determining whether to give radiation
- Resectability at 6 weeks ___ (resectable_wk6)
    - Small nodules that are presumed to be nephrogenic rest on imaging can be observed without resection or biopsy (Sandberg JK, et al. AJR AM J Roentgenol 2020;214:987-994)
- Histology after surgery ___ (histology_result)
- Blastemal predominance ___ (blastemal)
- Complete necrosis ___ (necrosis)
- COG local stage of the primary tumor ___ (local_stage)
    - COG Staging of Wilms Tumor (ST-1)
    - Neoadjuvant chemotherapy is not a criterion for upstaging to stage III in this population

# Neoadjuvant therapy

- Regimen VAD
    - Principles of Chemotherapy (WILMS-G)
- Re-image at week 6
- Resectable by bilateral partial nephrectomy at 6 weeks, go to surgery below
- Not resectable by partial nephrectomy at 6 weeks, go to WILMS-8A

# Surgery

- Partial nephrectomy (one or both sides) when feasible
- Total nephrectomy (after 12 weeks)
    - Total nephrectomy is indicated in patients with bilateral WT if partial nephrectomy is not feasible after 12 weeks of chemotherapy
- Regional LN sampling
- Pathology is WT
    - Principles of Pathology (WILMS-C)
    - Principles of Surgery (WILMS-D)

# Adjuvant chemotherapy and radiation by histology result

- FHWT stage I and not blastemal predominant, or stage I to II with complete necrosis (ST-1)
    - Switch to Regimen EE4A
    - No radiation therapy
- FHWT stage II and III and not blastemal predominant (ST-1)
    - Switch to Regimen DD4A
    - Flank or whole abdomen for local stage III (ST-1)
        - Stage III that is upstaged because of biopsy alone will not receive RT
- FHWT stage I and blastemal predominant (ST-1)
    - Switch to Regimen DD4A
    - No radiation therapy
- FHWT stage II and III and blastemal predominant (ST-1)
    - Switch to Regimen I
    - Flank or whole abdomen for local stage III (ST-1)
        - Stage III that is upstaged because of biopsy alone will not receive RT
- WT with anaplasia
- Principles of Chemotherapy (WILMS-G)

# Radiation therapy planning

- Principles of Radiation Therapy (WILMS-H)
- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given, to minimize the degree of overlapping fields
    - The concern is overlapping fields if the abdomen and lung are treated at different times
    - Some degree of overlap between the fields is expected in order to cover the target
- Local stage III refers to staging of the primary tumor regardless of metastases

# Next

- Not resectable by partial nephrectomy at 6 weeks, go to WILMS-8A
