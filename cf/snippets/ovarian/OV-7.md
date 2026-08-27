+++
id           = "ovarian/OV-7"
gid          = "ovarian"
ref          = "OV-7"
page         = 13
title        = "Disease status after primary therapy, and therapy for persistent disease or recurrence"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-6", "OV-8"]

[facets]
disease   = "ovarian"
stage     = "recurrent"
timepoint = ["recurrence", "supportive"]
intent    = "palliative"

[[variables]]
name = "primary_regimen"
type = "text"
[[variables]]
name = "chemo_completed"
type = "text"
[[variables]]
name = "relapse_interval"
type = "number"
[[variables]]
name = "on_maintenance"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "current_status"
type = "enum"
options = ["progression", "stable", "persistent", "complete remission then relapse"]
[[variables]]
name = "regimens_without_benefit"
type = "number"
[[variables]]
name = "biomarkers_done"
type = "text"
+++

# Source

- NCCN Epithelial Ovarian Cancer / Fallopian Tube Cancer / Primary Peritoneal Cancer v4.2026, OV-7, p13
- Applies to disease status assessment and therapy for persistent disease or recurrence
- All recommendations category 2A unless otherwise indicated

# Assessment

- Prior chemotherapy: ___ (primary_regimen)
- Chemotherapy completed: ___ (chemo_completed)
- Interval from completing prior chemotherapy to relapse: ___ (relapse_interval) mo
- Currently on maintenance therapy: ___ (on_maintenance)
- Current disease status: ___ (current_status)
- Consecutive regimens with progression and no clinical benefit: ___ (regimens_without_benefit)
- Tumor biomarker testing already done: ___ (biomarkers_done)

# Disease status

- Platinum-resistant disease, any one of
    - Progression on primary, maintenance or recurrence therapy
    - Stable or persistent disease, if not on maintenance therapy
    - Complete remission and relapse <6 mo after completing chemotherapy
- Platinum-sensitive disease
    - Complete remission and relapse >=6 mo after completing prior chemotherapy
- Definitions of platinum-sensitive and platinum-resistant disease represent a spectrum of disease
    - Use clinical judgment and flexibility in determining treatment options

# Biomarker testing before therapy for persistent or recurrent disease

- Perform tumor biomarker testing prior to initiation of therapy for persistent/recurrent disease, if not previously done
- Use validated biomarker testing, performed in a CLIA-approved facility, using the most recent available tumor tissue
- Include tests to identify potential benefit from targeted therapeutics with tumor-specific or tumor-agnostic benefit, if prior testing did not include these markers
    - HER2 status (by IHC)
    - PD-L1 (IHC, CPS)
    - BRCA1/2
    - HRD status
    - MSI
    - MMR
    - TMB
    - BRAF
    - KRAS
    - FRa (FOLR1)
    - RET
    - NTRK1/2/3
- MGPT may be particularly important in LCOC with limited approved therapeutic options (OV-C)
- See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Therapy for platinum-resistant disease

- Best supportive care, see NCCN Guidelines for Palliative Care
- And/or recurrence therapy (OV-D, 9 of 12)
    - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
    - Patients who do not respond and progress on two consecutive regimens without evidence of clinical benefits have diminished likelihood of benefitting from additional therapy
    - Decisions to offer clinical trials, supportive care, or additional therapy should be made on an individual basis
    - Localized radiation therapy (RT) can be considered to palliate symptoms and/or for oligometastatic disease
- Ancillary Palliative Surgical Procedures (OV-B 5 of 5)
- Data are limited on primary and maintenance therapy for recurrent/persistent LCOC

# Monitoring during and after treatment for recurrence

- Evaluate as indicated with tumor markers
- Repeat imaging, with modalities previously used
- Purpose is to document response and/or disease status

# Next

- Platinum-resistant disease, best supportive care and/or recurrence therapy (OV-D, 9 of 12)
- Platinum-sensitive disease, go to OV-8
