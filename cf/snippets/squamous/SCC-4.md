+++
id           = "squamous/SCC-4"
gid          = "squamous"
ref          = "SCC-4"
page         = 11
title        = "Primary and additional treatment for low-risk cutaneous squamous cell carcinoma"
nccn_version = "2.2026"
nccn_date    = "03/17/2026"
generated    = "2026-08-27"
see_also     = ["SCC-2", "SCC-5", "SCC-11"]

[facets]
disease   = "squamous"
histology = "squamous"
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "beyond_dermis"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "margin_status"
type = "enum"
options = ["positive", "negative"]
+++

# Source

- NCCN Squamous Cell Skin Cancer v2.2026, SCC-4, p11
- Applies to low-risk CSCC
- Principles of Pathology (SCC-A)
- Risk Factors for Local Recurrence, Metastases, or Death (SCC-2)
- Identification and Management of Patients at High Risk for Multiple Primary CSCCs (SCC-B)
- Principles of Treatment (SCC-C), applies to both primary and additional treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- CSCC, pathology per Principles of Pathology (SCC-A)
- Stratified as low-risk against Risk Factors for Local Recurrence, Metastases, or Death (SCC-2)
- Checked against Identification and Management of Patients at High Risk for Multiple Primary CSCCs (SCC-B)
- Tumor appears to extend beyond the dermis: ___ (beyond_dermis)
- Surgical candidate: ___ (surgical_candidate)

# Primary treatment options

- C&E
    - C&E may have a lower cure rate than excision
    - If tumor appears to extend beyond the dermis, surgical excision should generally be performed rather than C&E or shave removal
- Shave removal
    - Shaving of epidermal or dermal lesion, a sharp removal by transverse bowl-shaped slicing to remove epidermal and dermal lesions, without including fat
    - Does not require suture closure
    - If tumor appears to extend beyond the dermis, surgical excision should generally be performed rather than C&E or shave removal
- Standard excision with 4- to 6-mm clinical margins and postoperative margin assessment
    - Tissue rearrangement (eg, flap reconstruction, extensive undermining) should not be undertaken until clear margins are identified
    - Second intention healing, linear repair, or skin graft are acceptable
    - Margin result: ___ (margin_status)
- Mohs, or other forms of peripheral and deep en face margin assessment (PDEMA)
    - If the preoperative biopsy is considered insufficient for providing all the staging information required to properly treat the tumor, submit the central specimen for vertical paraffin-embedded permanent sections, or document staging parameters in the Mohs report
    - As per other appropriate use guidelines
    - Mohs surgery should be performed by dermatologic surgeons who have specialized training and experience in this procedure
    - PDEMA with permanent section analysis or intraoperative frozen section analysis is an alternative to Mohs, see Principles of PDEMA Technique (SCC-F)
- Consultation with radiation oncologist for nonsurgical candidates

# Additional treatment after standard excision with positive margins

- Mohs, or other forms of PDEMA
    - Same Mohs and PDEMA conditions as above (SCC-F)
- Re-excision if clinically feasible
- RT for nonsurgical candidates
    - Principles of Radiation Therapy (SCC-D)
    - Determination of the appropriateness of RT should be performed together with a radiation oncologist

# Next

- Standard excision with negative margins, go to Follow-up (SCC-11)
- Standard excision with positive margins, additional treatment above
