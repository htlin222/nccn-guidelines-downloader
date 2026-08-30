+++
id           = "wilms_tumor/WILMS-4"
gid          = "wilms_tumor"
ref          = "WILMS-4"
page         = 13
title        = "Adjuvant chemotherapy and radiation for unilateral FHWT with metastases after primary nephrectomy, decided by week 6 biomarker and imaging results"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-3", "WILMS-F", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
biomarker = "gain1q"
timepoint = ["adjuvant", "metastatic"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "loh"
type = "text"
[[variables]]
name = "gain_1q"
type = "text"
[[variables]]
name = "week6_response"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-4, p13
- Applies to unilateral FHWT, primary nephrectomy, HRs (continued)
- Initial and Final Risk Assessment for FHWT: WILMS-F
- Principles of Chemotherapy: WILMS-G
- Principles of Radiation Therapy: WILMS-H
- COG Staging of Wilms Tumor: ST-1
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Unilateral FHWT, primary nephrectomy done
- Local stage of the primary tumor: ___ (local_stage)
    - Local stage III refers to staging of the primary tumor regardless of metastases
    - COG Staging of Wilms Tumor (ST-1)
- Site of metastases: ___ (met_sites)
    - Lung-only metastases, re-image at week 6
    - Extrapulmonary with or without lung metastases
- Combined LOH at 1p and 16q: ___ (loh)
- 1q gain: ___ (gain_1q)
- Response of lung metastases at week 6: ___ (week6_response)
    - Complete response (CR)
    - Slow incomplete response (SIR)
- Biomarker and imaging results are read at week 6
    - 1q gain and positive LNs plus LOH at either 1p or 16q are associated with poorer outcomes
    - Intensification of therapy in these subgroups is being studied in AREN2231

# Initial therapy

- Regimen DD4A for lung-only metastases, re-image at week 6
- Regimen DD4A for extrapulmonary with or without lung metastases
- Principles of Chemotherapy (WILMS-G)

# Lung-only metastases, adjuvant therapy by week 6 results

- No combined LOH at 1p and 16q, no 1q gain, and complete response (CR) of lung metastases at week 6
    - Continue Regimen DD4A
    - Flank or whole abdomen for local stage III (ST-1)
    - No whole lung
- No combined LOH at 1p and 16q, 1q gain positive, and CR of lung metastases at week 6
    - Continue Regimen DD4A
        - Intensification of chemotherapy for this group has not been studied, but can be considered
    - Flank or whole abdomen for local stage III (ST-1)
    - Whole lung
        - Patients with 1q gain, no combined LOH, and CR of lung metastases at week 6 should continue on Regimen DD4A but should have whole lung irradiation (WLI)
        - Omission of WLI for patients with CR of lung metastases at week 6 and 1q gain is not recommended because of lower event-free survival (EFS; 57%)
- Combined LOH at 1p and 16q, or slow incomplete response (SIR) of lung metastases at week 6
    - Preferred: switch to Regimen M
    - Other Recommended: continue Regimen DD4A
    - Flank or whole abdomen for local stage III (ST-1)
    - Whole lung

# Extrapulmonary with or without lung metastases, adjuvant therapy by week 6 results

- No combined LOH at 1p and 16q
    - Preferred: continue Regimen DD4A
        - Patients with extrapulmonary metastases were treated with Regimen M on AREN0533
        - Four-year EFS for Regimen M was 76% on AREN0533 compared to 65% for patients treated with DD4A on NWTS-5 (P = .26)
        - Four-year OS was 89% for Regimen M and 86.5% for DD4A (P = .86)
        - Outcomes with DD4A are suboptimal in this group, but a significant improvement in survival was not observed with intensification to Regimen M when compared to DD4A in a historical control group
    - Useful in Certain Circumstances: switch to Regimen M
- Combined LOH at 1p and 16q
    - Preferred: switch to Regimen M
    - Other Recommended: continue Regimen DD4A
- Radiation therapy for this group
    - Flank or whole abdomen for local stage III (ST-1)
    - Whole lung for lung metastases
    - Other extrapulmonary sites

# Radiation therapy planning

- Principles of Radiation Therapy (WILMS-H)
- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields at the time of initial abdominal RT planning, even if lung RT ultimately is not given
    - Concern for overlapping fields if the abdomen and lung are treated at different times
    - Planning this way minimizes the degree of overlapping fields
    - Some degree of overlap between the fields is expected in order to cover the target
