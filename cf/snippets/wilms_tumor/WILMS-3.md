+++
id           = "wilms_tumor/WILMS-3"
gid          = "wilms_tumor"
ref          = "WILMS-3"
page         = 12
title        = "Initial therapy, biomarker-directed adjuvant chemotherapy, and radiation therapy for unilateral FHWT after primary nephrectomy"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-2", "WILMS-4", "WILMS-F", "WILMS-G", "WILMS-H", "ST-1"]

[facets]
disease   = "wilms_tumor"
biomarker = ["gain1q", "any"]
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "initial_risk_group"
type = "enum"
options = ["VLR", "LR", "SR", "HR"]
[[variables]]
name = "local_stage"
type = "text"
[[variables]]
name = "loh_11p15"
type = "text"
[[variables]]
name = "loh_1p"
type = "text"
[[variables]]
name = "loh_16q"
type = "text"
[[variables]]
name = "gain_1q"
type = "text"
[[variables]]
name = "ln_status"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-3, p12
- Applies to unilateral FHWT treated with primary nephrectomy
- Initial and Final Risk Assessment for FHWT: WILMS-F
- Principles of Chemotherapy: WILMS-G
- Principles of Radiation Therapy: WILMS-H
- COG Staging of Wilms Tumor: ST-1
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Unilateral FHWT, primary nephrectomy done
- Initial risk group: ___ (initial_risk_group)
    - Very low risk (VLR), low risk (LR), standard risk (SR), or higher risk (HR)
    - Assigned per Initial and Final Risk Assessment for FHWT (WILMS-F)
- Local stage of the primary tumor: ___ (local_stage)
    - Local stage refers to staging of the primary tumor regardless of metastases
    - COG Staging of Wilms Tumor (ST-1)
- 11p15 loss of heterozygosity (LOH) or loss of imprinting (LOI): ___ (loh_11p15)
- LOH at 1p: ___ (loh_1p)
- LOH at 16q: ___ (loh_16q)
- 1q gain: ___ (gain_1q)
- Regional lymph nodes: ___ (ln_status)
- Biomarker context for the results above
    - 1q gain, and positive LNs plus LOH at either 1p or 16q, are associated with poorer outcomes
    - Intensification of therapy in these subgroups is being studied in AREN2231

# Initial therapy

- Given per Principles of Chemotherapy (WILMS-G)
- Very low risk (VLR): observation or Regimen EE4A
- Low risk (LR): Regimen EE4A
- Standard risk (SR): Regimen DD4A
- Higher risk (HR): unilateral FHWT, primary nephrectomy, HR (WILMS-4)

# Adjuvant chemotherapy by biomarkers

- Given per Principles of Chemotherapy (WILMS-G)
- Very low risk, after observation or Regimen EE4A
    - No unfavorable biomarkers: observation
    - 11p15 LOH or LOI, or combined LOH at 1p and 16q: Regimen EE4A
        - A retrospective analysis of the biology suggests patients with VLR FHWT and 11p15 LOH or LOI may not be suitable for reduction of therapy, that is observation without adjuvant chemotherapy
        - Deintensification strategy may not be suitable for patients with any adverse biomarker, including 1q gain or combined LOH at 1p and 16q
- Low risk, after Regimen EE4A
    - No combined LOH at 1p and 16q: continue Regimen EE4A
    - Combined LOH at 1p and 16q
        - Preferred: switch to Regimen DD4A
        - Other Recommended: continue Regimen EE4A
- Standard risk, after Regimen DD4A
    - No combined LOH at 1p and 16q: continue Regimen DD4A
    - Combined LOH at 1p and 16q
        - Preferred: switch to Regimen M
        - Other Recommended: continue Regimen DD4A

# Radiation therapy

- Given per Principles of Radiation Therapy (WILMS-H)
- Options on this page
    - None
    - Flank or whole abdomen for local stage III
        - Local stage III refers to staging of the primary tumor regardless of metastases
        - COG Staging of Wilms Tumor (ST-1)
- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given, to minimize the degree of overlapping fields
    - Concern for overlapping fields applies if the abdomen and lung are treated at different times
    - Some degree of overlap between the fields is expected in order to cover the target

# Next

- Higher risk (HR) unilateral FHWT after primary nephrectomy, go to WILMS-4
