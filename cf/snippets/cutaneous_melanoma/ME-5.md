+++
id           = "cutaneous_melanoma/ME-5"
gid          = "cutaneous_melanoma"
ref          = "ME-5"
page         = 27
title        = "Stage III sentinel node positive: workup, nodal management, and adjuvant options"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-6", "ME-11", "ME-C", "ME-D", "ME-G"]

[facets]
disease   = "cutaneous_melanoma"
stage     = "III"
biomarker = "braf"
timepoint = ["workup", "staging", "primary-treatment", "adjuvant", "surveillance"]

[[variables]]
name = "stage"
type = "enum"
options = ["IIIA", "IIIB", "IIIC", "IIID"]
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "positive_nodes"
type = "number"
[[variables]]
name = "sln_deposit_mm"
type = "number"
[[variables]]
name = "microsatellites"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "braf"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-5, p27
- Applies to stage III with a positive sentinel lymph node biopsy (SLNB)
- Clinically positive node(s) are a different pathway, go to ME-6
- Additional footnotes on ME-5A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Pathologic stage ___ (stage), sentinel node positive
- Primary tumor site ___ (primary_site)
- Number of positive sentinel nodes ___ (positive_nodes)
- SLN tumor deposit, maximum dimension ___ (sln_deposit_mm) mm
- Microsatellites in the initial biopsy of the primary tumor or in the wide excision specimen ___ (microsatellites)
    - Presence upstages the melanoma to at least IIIC
    - Acknowledge the increased risk of recurrence in any discussion about adjuvant therapy, independent of the SLN tumor burden
    - Follow-up should be more frequent, commensurate with the increased risk of recurrence
- BRAF ___ (braf)

# Workup, stage IIIA (sentinel node positive)

- Consider imaging for baseline staging (ME-D)
- Imaging to evaluate specific signs or symptoms (ME-D)
- Consider BRAF testing (ME-C)
    - Recommended for patients with stage III melanoma for whom future BRAF-directed therapy may be an option
    - Consider MGPT if the test results might guide further treatment decisions or eligibility for participation in a clinical trial

# Workup, stage IIIB/C/D (sentinel node positive)

- Imaging for baseline staging and to evaluate specific signs or symptoms (ME-D)
- BRAF testing (ME-C)
    - Recommended for patients with stage III melanoma for whom future BRAF-directed therapy may be an option
    - Consider MGPT if the test results might guide further treatment decisions or eligibility for participation in a clinical trial

# Primary treatment

- Active nodal basin ultrasound (US) or other radiographic surveillance without completion lymph node dissection (CLND), preferred
    - Active nodal basin surveillance with imaging and clinical exam is recommended over CLND
    - Nodal US surveillance is preferred if institutional expertise is available
    - Alternative imaging modalities are acceptable: CT, MRI, FDG-PET/CT
    - Surveillance frequency consistent with MSLT-II and DeCOG (ME-D)
        - Every 4 months during the first 2 years
        - Then every 6 months during years 3 through 5
        - Synchronizing frequency of nodal US with cross-sectional imaging may also be acceptable
- or CLND, only in select patients (ME-G)
    - Very select clinical scenarios only, eg, inability to adhere to clinical and imaging surveillance
    - Or when primary tumor characteristics and SLN tumor burden predict a high likelihood of additional positive nodes
    - Purpose is regional disease control
    - Two prospective randomized phase III studies showed no improvement in MSS or OS with CLND compared with nodal basin US surveillance; only MSLT-II included primary melanomas on the head and neck
    - CLND did provide additional prognostic information and improvement in regional control/recurrence
    - At the expense of increased morbidity, including wound complications and long-term lymphedema
    - Factors that predict non-SLN positivity
        - Mitotic rate
        - Lymphovascular invasion
        - Head/neck location
        - Sentinel node tumor burden
        - Number of positive nodes
        - Thickness/ulceration of the primary tumor

# Adjuvant treatment

- Weigh the patient's risk of melanoma recurrence against the risk of treatment toxicity (ADJSYS-2 of 2)
- Systemic therapy based on risk of recurrence (ADJSYS-1 of 2)
    - Patients with T1b–T2a/N1a or N2a pathologic stage IIIA and SLN tumor deposits 0.3 mm or greater in maximum dimension are at higher risk of disease progression and may benefit
- Observation, preferred for most IIIA tumors
    - In very low tumor volume stage IIIA disease (T1a/b–T2a/N1a or N2a), the toxicity of adjuvant therapy may outweigh the benefit
    - Stage IIIA with SLN deposits under 0.3 mm in maximum dimension have 5-year MSS similar to pathologic stage IB (T2aN0), with consideration for less intensive radiologic surveillance and follow-up

# Next

- Adjuvant treatment and follow-up, go to ME-11
- Clinically positive node(s) at presentation, go to ME-6
