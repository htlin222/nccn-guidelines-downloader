+++
id           = "wilms_tumor/WILMS-5B"
gid          = "wilms_tumor"
ref          = "WILMS-5B"
page         = 16
title        = "Footnotes for the unilateral FHWT initially unresectable pathway: biomarkers, regimen switch, resection timing, and RT fields"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-30"
see_also     = ["WILMS-5", "WILMS-5A", "ST-1"]

[facets]
disease   = "wilms_tumor"
timepoint = ["neoadjuvant", "primary-treatment", "adjuvant"]
biomarker = "gain1q"

[[variables]]
name = "combined_loh"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "gain_1q"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "ln_status"
type = "text"
[[variables]]
name = "met_sites"
type = "enum"
options = ["none", "lung-only", "extrapulmonary"]
[[variables]]
name = "lung_response_wk6"
type = "enum"
options = ["CR", "SIR"]
[[variables]]
name = "chemo_week"
type = "number"
[[variables]]
name = "surgery_date"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-5B, p16
- This page is the footnote set for the unilateral FHWT initially unresectable pathway
- Each item below is the condition attached to a step of that pathway
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Combined LOH at 1p and 16q ___ (combined_loh)
- 1q gain ___ (gain_1q)
- Regional lymph nodes ___ (ln_status)
- Metastatic sites ___ (met_sites)
- Response of lung metastases at week 6 ___ (lung_response_wk6)
- Current week of chemotherapy ___ (chemo_week)
- Date of planned or completed nephrectomy ___ (surgery_date)

# Principles referenced by this pathway

- Pathology, see Principles of Pathology (WILMS-C)
- Surgery, see Principles of Surgery (WILMS-D)
- Staging, see COG Staging of Wilms Tumor (ST-1)
- Chemotherapy, see Principles of Chemotherapy (WILMS-G)
- Radiation therapy, see Principles of Radiation Therapy (WILMS-H)

# Biomarker interpretation

- 1q gain and positive LNs plus LOH at either 1p or 16q are associated with poorer outcomes
    - Intensification of therapy in these subgroups is being studied in AREN2231

# Regimen switch at week 7

- Switch to Regimen M (preferred) at week 7 if either of the following holds
    - The tumor expresses combined LOH at 1p and 16q
    - There is an incomplete response of lung nodules at week 6 in patients with lung-only metastases
- These patients with combined LOH OR SIR of lung nodules could also continue DD4A as the other recommended regimen

# 1q gain with CR of lung metastases at week 6

- Patients with 1q gain, no combined LOH, and CR of lung metastases at week 6 should continue on Regimen DD4A but should have WLI
    - Omission of WLI for patients with CR of lung metastases at week 6 and 1q gain is not recommended because of lower EFS (57%)
- Intensification of chemotherapy for this group has not been studied, but can be considered

# Extrapulmonary metastases

- Patients with extrapulmonary metastases were treated with Regimen M on AREN0533
    - 4-year EFS was 76% for Regimen M on AREN0533, compared with 65% for patients treated with DD4A on NWTS-5 (P = .26)
    - 4-year OS was 89% for Regimen M and 86.5% for DD4A (P = .86)
    - Outcomes with DD4A are suboptimal in this group, but a significant improvement in survival was not observed with intensification to Regimen M when compared to DD4A in a historical control group

# Surgery

- Upfront biopsy with delayed nephrectomy should be limited to specific circumstances where upfront nephrectomy is contraindicated, see Principles of Surgery (WILMS-D)
- Tumors should be resected by 12 weeks at the latest (total nephrectomy)
    - Continued significant tumor shrinkage was not seen after this point in treatment
- Repeat imaging of lungs before general anesthesia

# Re-imaging findings

- If imaging shows tumor progression (increase in size), nephrectomy OR rebiopsy should be performed
    - Rebiopsy is to evaluate for anaplasia or rhabdomyomatous changes
- In patients who only have metastases in the lungs, assess response of lung metastases at 6 weeks of chemotherapy to determine need for WLI

# Radiation therapy timing and fields

- RT to the primary site is often given 10 to 14 days after surgery
- Plan for possible abdominal and lung fields with initial abdominal RT planning, even if lung RT ultimately is not given, to minimize the degree of overlapping fields
    - The concern is overlapping fields if the abdomen and lung are treated at different times
    - Some degree of overlap between the fields is expected in order to cover the target
- Local stage III refers to staging of the primary tumor regardless of metastases
