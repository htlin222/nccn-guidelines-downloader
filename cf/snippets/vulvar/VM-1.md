+++
id           = "vulvar/VM-1"
gid          = "vulvar"
ref          = "VM-1"
page         = 36
title        = "Clinical presentation, workup, and primary treatment of cutaneous vulvar melanoma"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VM-2", "VM-3"]

[facets]
disease   = "vulvar"
stage     = ["0", "I", "II", "III"]
biomarker = ["braf", "kit"]
timepoint = ["workup", "staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lesion_site"
type = "enum"
options = ["outside-harts-line", "inside-harts-line"]
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "residual-disease"]
+++

# Source

- NCCN Vulvar and Vulvovaginal Melanoma v2.2026, VM-1, p36
- Applies to cutaneous vulvar melanoma
    - Cutaneous vulvar melanoma is defined as lesions that occur on the vulva vestibule outside Hart's line
    - Mucosal vulvovaginal melanoma is defined as lesions that occur on the vulva vestibule inside Hart's line
- Footnotes on VM-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Lesion on the vulva vestibule, ___ (lesion_site)
- Biopsy with pathologic review: ___ (pathology)
- Clinical stage: ___ (clinical_stage)
- Resectability: ___ (resectability)

# Workup

- H&P
- Biopsy, pathologic review
    - See Principles of Biopsy and Pathology (ME-B) in the NCCN Guidelines for Melanoma: Cutaneous
- Imaging
    - See Principles of Imaging (ME-D) in the NCCN Guidelines for Melanoma: Cutaneous
- EUA cystoscopy or proctoscopy as indicated
- Consider somatic mutational testing for vulvar melanoma and mucosal vulvovaginal melanoma as clinically indicated
    - ie, BRAF, KIT
    - See Principles of Molecular Testing (ME-C) in the NCCN Guidelines for Melanoma: Cutaneous
- Full skin assessment
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Clinical stage

- Vulvovaginal melanoma should be staged the same as cutaneous melanoma
- Clinical staging for cutaneous vulvar melanoma and vulvovaginal melanoma should be done using the AJCC staging system (TNM staging system)
    - See Staging (ST-1) in the NCCN Guidelines for Melanoma: Cutaneous

# Primary treatment

- Resectable
    - Stage 0 or stage IA: partial vulvectomy
    - Stage IB: partial vulvectomy ± SLNB
    - Stage II: partial vulvectomy + SLNB
    - Stage III: partial vulvectomy with clear margins
    - Partial vulvectomy
        - See Principles of Surgical Margins for Wide Excision of Primary Melanoma (ME-E) in the NCCN Guidelines for Melanoma: Cutaneous
        - Based on limited data, topical imiquimod may be helpful in selected cases of vulvar melanoma in situ (MIS) when histologic clearance is not possible surgically
    - SLNB
        - See Principles of Sentinel Lymph Node Biopsy (SLNB) (ME-F) in the NCCN Guidelines for Melanoma: Cutaneous
- Unresectable or residual disease
    - Consider Neoadjuvant Treatment (ME-6) in the NCCN Guidelines for Melanoma: Cutaneous
    - Systemic therapy ± RT
        - See Systemic Therapy for Metastatic or Unresectable Disease (MELSYS-1) in the NCCN Guidelines for Melanoma: Cutaneous
        - RT: Principles of Radiation Therapy (VM-A)

# Next

- Negative SLNB, see Adjuvant Treatment (ME-3) in the NCCN Guidelines for Melanoma: Cutaneous
- Positive SLNB, see Adjuvant Treatment (ME-5) in the NCCN Guidelines for Melanoma: Cutaneous
- Stage III after partial vulvectomy with clear margins, see Adjuvant Treatment (ME-6) in the NCCN Guidelines for Melanoma: Cutaneous
- Follow-up/surveillance, go to VM-3
