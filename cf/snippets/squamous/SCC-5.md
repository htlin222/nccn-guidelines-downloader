+++
id           = "squamous/SCC-5"
gid          = "squamous"
ref          = "SCC-5"
page         = 12
title        = "Treatment planning for high-risk/very-high-risk CSCC where surgery or RT has a high likelihood of cure"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-2", "SCC-6", "SCC-7", "SCC-11"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["high-risk", "very-high-risk"]
[[variables]]
name = "recurrent"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "risk_features"
type = "text"
[[variables]]
name = "nodal_basin_exam"
type = "enum"
options = ["normal", "abnormal"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "margins"
type = "enum"
options = ["positive", "negative", "pending"]
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-5, p12
- Applies to high-risk/very-high-risk CSCC where surgery or RT has a high likelihood of cure
- Risk factors for local recurrence, metastases, or death (SCC-2)
- Identification and management of patients at high risk for multiple primary CSCCs (SCC-B)
- Principles of Pathology (SCC-A)
- Principles of Treatment (SCC-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, lesion at ___ (site)
- Risk group ___ (risk_group)
- Recurrent tumor ___ (recurrent)
- High-risk features present ___ (risk_features)
- Exam of draining nodal basin ___ (nodal_basin_exam)
- Candidate for surgery ___ (surgical_candidate)
- Margin status ___ (margins)

# Before primary treatment

- Multidisciplinary consultation at a center with specialized expertise to discuss options
- Consider sentinel lymph node biopsy (SLNB) in cases that are recurrent or with multiple high-risk features
    - Discuss and consider SLNB prior to or at time of PDEMA, for very-high-risk CSCC that is recurrent or has multiple risk factors placing it in the very-high-risk group, and with normal exam of the draining nodal basin (category 2B)
    - For tumors being considered for SLNB, delay reconstruction if not able to close primarily with minimal undermining
    - For a positive SLNB, obtain radiologic staging of the neck, chest, abdomen, and pelvis if not yet completed, then hold multidisciplinary discussion
    - For a positive SLNB, in the absence of metastatic disease consider completion lymphadenectomy of the affected nodal basin
    - For a positive SLNB, if surgery is not an option due to patient preference or poor performance status, consider radiation therapy
    - Following neck dissection, refer to SCC-6 for additional recommendations
- In patients with very-high-risk CSCC and normal exam of nodal basin, discuss and consider radiologic imaging of the nodal basin

# Primary treatment

- Mohs or other forms of PDEMA, preferred for very high risk
    - Mohs surgery should be performed by dermatologic surgeons who have specialized training and experience in this procedure
    - As per other appropriate use guidelines
    - When Mohs is being performed, if the preoperative biopsy is considered insufficient for providing all the staging information required to properly treat the tumor, submit the central specimen for vertical paraffin-embedded permanent sections, or document the staging parameters in the Mohs report
    - PDEMA with permanent section analysis or intraoperative frozen section analysis is an alternative to Mohs (SCC-F)
    - If invasion to parotid fascia, superficial parotidectomy may be indicated
    - For tumors being considered for SLNB, delay reconstruction if not able to close primarily with minimal undermining
- or Standard excision with wider surgical margins and postoperative margin assessment
    - Appropriate margins should be determined case by case based on tumor-specific and patient-specific factors
    - Repair by second intention healing, linear repair, or skin graft
    - For tumors being considered for SLNB, delay reconstruction if not able to close primarily with minimal undermining
- or For nonsurgical candidates, consider definitive RT
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist

# Additional treatment, positive margins

- Re-resect, if feasible
- or RT
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist
- If surgery and/or RT are not curative, go to laCSCC disease (SCC-7)

# Additional treatment, negative margins

- If extensive perineural, large or named nerve involvement, or other poor prognostic features, consider adjuvant RT
    - Large nerve involvement is defined by the AJCC Cancer Staging Manual, 8th Edition for CSCC of the head and neck as nerve of at least 0.1 mm, or nerve involvement deeper than the dermis
    - Most nerves deep to the dermis are larger than 0.1 mm
    - Poor prognostic features per Principles of Pathology (SCC-A)
    - Adjuvant RT can be considered for gross clinical radiologic perineural invasion (PNI), multifocal histologic nerve invasion, tumor diameter of at least 6 cm, recurrent tumors, high risk for regional or distant metastasis, close surgical margins where further surgery cannot be performed, and desmoplastic or infiltrative tumors in patients who are chronically immunosuppressed
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist

# Next

- Follow-up (SCC-11)
- If surgery and/or RT are not curative, laCSCC disease (SCC-7)
- Following neck dissection for a positive SLNB, SCC-6
