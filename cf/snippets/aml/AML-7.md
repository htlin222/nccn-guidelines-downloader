+++
id           = "aml/AML-7"
gid          = "aml"
ref          = "AML-7"
page         = 41
title        = "Maintenance therapy choice after chemotherapy or after allogeneic HCT"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-A", "AML-E", "AML-6", "AML-8"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "any"]
timepoint = ["maintenance", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cbf_status"
type = "enum"
options = ["cbf-aml", "non-cbf-aml"]
[[variables]]
name = "remission"
type = "enum"
options = ["in-remission", "not-in-remission"]
[[variables]]
name = "consolidation"
type = "enum"
options = ["none", "some", "completed-recommended-course"]
[[variables]]
name = "hct"
type = "enum"
options = ["no-allogeneic-hct-planned", "allogeneic-hct-planned", "post-allogeneic-hct"]
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "prior_flt3_inhibitor"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "high_risk_features"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-7, p41
- Applies to patients being considered for maintenance therapy, post chemotherapy or post allogeneic HCT
- Principles of Systemic Therapy for AML: AML-E
- High-risk features defined by ELN Risk Stratification by Biological Disease Factors for Patients with Non-APL AML Treated with Intensive Induction Chemotherapy: AML-A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (cbf_status)
- Disease status ___ (remission)
- Consolidation received ___ (consolidation)
- Transplant status ___ (hct)
- FLT3 ___ (flt3)
- Previously received FLT3 inhibitor ___ (prior_flt3_inhibitor)
- History of AML with high-risk features per AML-A ___ (high_risk_features)

# Post chemotherapy, patient with non-CBF-AML

- Criteria, all of the following
    - Received prior intensive chemotherapy and disease is now in remission
    - Completed no consolidation or some consolidation
    - No allogeneic HCT is planned
- Consider oral azacitidine until progression or unacceptable toxicity (category 1 for age ≥55 y)
    - This is not intended to replace consolidation chemotherapy
    - Patients who are fit may benefit from HCT in first CR, and there are no data to suggest that maintenance therapy with oral azacitidine can replace HCT
    - The trial did not include patients <55 years of age or those with CBF-AML
    - It was restricted to patients ≥55 years of age with AML with intermediate or adverse cytogenetics who were not felt to be candidates for HCT
    - Most patients received at least 1 cycle of consolidation prior to starting oral azacitidine
    - There are certain circumstances where oral azacitidine may be of benefit for those who have completed a recommended course of consolidation
- Useful in Certain Circumstances
    - Azacitidine or decitabine for a maximum of 12 cycles, for those unable to receive oral azacitidine

# Post chemotherapy, patient with history of FLT3 mutation

- Criteria, all of the following
    - Previously received FLT3 inhibitor
    - No allogeneic HCT is planned
- Quizartinib, for FLT3-ITD only (preferred for FLT3-ITD)
- Midostaurin, for FLT3-ITD or TKD

# Post allogeneic HCT, in remission, and history of FLT3 mutation

- Gilteritinib, for FLT3-ITD or TKD
    - Preferred for FLT3-ITD in CR1 without MRD negativity by ultrasensitive assay pre-transplant
- Sorafenib, for FLT3-ITD only
- Midostaurin, for FLT3-ITD or TKD
- Quizartinib, for FLT3-ITD only

# Post allogeneic HCT, in remission, with history of AML with high-risk features

- High-risk features per AML-A
- Low-dose decitabine + G-CSF (category 2B)

# Next

- Surveillance, go to AML-8
