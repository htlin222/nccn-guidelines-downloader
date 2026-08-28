+++
id           = "ped_hodgkin/PHL-1"
gid          = "ped_hodgkin"
ref          = "PHL-1"
page         = 10
title        = "Diagnostic workup of pediatric Hodgkin lymphoma, and which subtype page it sends you to"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-2", "PHL-6", "PHL-F"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy"
type = "enum"
options = ["excisional", "incisional", "none"]
[[variables]]
name = "b_symptoms"
type = "text"
[[variables]]
name = "nodal_regions"
type = "text"
[[variables]]
name = "spleen"
type = "text"
[[variables]]
name = "subtype"
type = "enum"
options = ["chl", "nlphl", "pending"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-1, p10
- Applies to diagnostic workup and clinical presentation of pediatric Hodgkin lymphoma
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biopsy done: ___ (biopsy)
- B symptoms: ___ (b_symptoms)
    - Unexplained recurrent fever >38 C within the last month
    - Drenching night sweats
    - Weight loss >10% of body weight within 6 months of diagnosis
- Lymphoid regions involved: ___ (nodal_regions)
- Spleen: ___ (spleen)
- Histology: ___ (subtype)

# Diagnostic workup

- Excisional or incisional biopsy
- Immunohistochemistry evaluation

# Additional workup, essential

- History and physical (H&P) including:
    - B symptoms
        - Unexplained recurrent fever >38 C within the last month
        - Drenching night sweats
        - Weight loss >10% of body weight within 6 months of diagnosis
    - Examination of lymphoid regions, spleen
    - Screening for personal history of autoimmune disorder(s)
- Complete blood count (CBC) with differential
- Erythrocyte sedimentation rate (ESR), with or without C-reactive protein (CRP)
- Comprehensive metabolic panel (CMP)
- Echocardiogram (ECHO)
    - Especially if anthracycline-based chemotherapy is indicated
- Chest x-ray posteroanterior (PA) and lateral views
    - Only if cross-sectional imaging is not available, or necessitated to determine bulk of disease for a clinical trial
- CT neck/chest/abdomen/pelvis with (IV with or without oral) contrast, or CT chest and MRI neck/abdomen/pelvis
- FDG-PET/CT or FDG-PET/MRI (whole-body)
- Pregnancy test for patients of childbearing potential
- Counseling on infertility risk, see NCCN Guidelines for AYA Oncology
- Psychosocial assessment, for AYA see NCCN Guidelines for AYA Oncology
- Counseling on cessation of smoking, drugs/illicit substances, vaping, and alcohol, see NCCN Guidelines for Smoking Cessation

# Useful in selected cases

- Pulmonary function tests (PFTs)
    - Including diffusing capacity (DLCO) if bleomycin indicated
- Electrocardiogram (ECG)
- HIV and hepatitis B/C testing (encouraged)
- Consider immunodeficiency workup, if any of:
    - Young age (<5 years)
    - Recurrent infections
    - Atypical presentation
    - Personal or family history of immunodeficiency
- Bilateral bone marrow biopsy, only consider if there are cytopenias and negative FDG-PET
- If spleen irradiation is warranted, vaccines should be given prior to or after RT
    - Pneumococcal
    - Haemophilus influenzae type b
    - Meningococcal
    - See Principles of Radiation Therapy (PHL-F)
- Assess social determinants of health

# Next

- Classic Hodgkin lymphoma (CHL), go to Summary of Clinical Trial Risk Groups (PHL-2)
- Nodular lymphocyte-predominant Hodgkin lymphoma (NLPHL), go to PHL-6
