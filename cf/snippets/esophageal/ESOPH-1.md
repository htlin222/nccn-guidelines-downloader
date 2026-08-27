+++
id           = "esophageal/ESOPH-1"
gid          = "esophageal"
ref          = "ESOPH-1"
page         = 10
title        = "Workup at initial presentation, and the split into histology and clinical stage"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-2", "ESOPH-10", "ESOPH-11", "ESOPH-21"]

[facets]
disease   = "esophageal"
histology = ["squamous", "adenocarcinoma"]
stage     = ["I", "II", "III", "IV"]
biomarker = ["any", "msi-h", "pd-l1", "erbb2"]
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "carina"
type = "enum"
options = ["at or above carina", "below carina"]
[[variables]]
name = "siewert"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "m1"
type = "enum"
options = ["no evidence of M1", "M1 present"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-1, p10
- Applies at initial presentation, before histologic classification and clinical staging
- All recommendations are category 2A unless otherwise indicated
- Footnotes for this page are on ESOPH-1A

# Assessment

- ___ (age) yo
- ___ (histology)
- Tumor position relative to the carina: ___ (carina)
- Siewert category ___ (siewert)
- Clinical stage ___ (clinical_stage)
- ___ (m1)

# Workup

- History and physical (H&P)
- Esophagogastroduodenoscopy (EGD) and biopsy
- Endoscopic resection (ER)
    - Recommended for the accurate staging of early-stage cancers (Tis, T1a or T1b)
    - Early-stage cancers can best be diagnosed by ER
- Endoscopic ultrasound (EUS), if no evidence of M1 unresectable disease
- Chest/abdomen CT with oral and IV contrast
- Pelvis CT with contrast, as clinically indicated
- FDG-PET/CT evaluation, skull base to mid-thigh, if no evidence of M1 disease
- Bronchoscopy, if tumor is at or above the carina with no evidence of M1 disease
- Complete blood count (CBC) and comprehensive chemistry profile
- Biopsy of metastatic disease, as clinically indicated
- Assign Siewert category

# Biomarker testing

- Universal testing for microsatellite instability (MSI) by polymerase chain reaction (PCR)/next-generation sequencing (NGS), or mismatch repair (MMR) by immunohistochemistry (IHC)
    - Recommended in all newly diagnosed patients
- Universal testing for programmed death ligand 1 (PD-L1)
    - Recommended in all newly diagnosed patients
- HER2 (ERBB2) testing, if advanced/metastatic adenocarcinoma is documented/suspected
- CLDN18.2 testing, if advanced/metastatic adenocarcinoma is documented/suspected
- NGS should be considered

# Supportive care at workup

- Nutritional assessment and counseling
- Smoking cessation advice, counseling, and pharmacotherapy as indicated
- Screen for family history
- Assess for distress

# Next

- Clinical stage I–IVA, locoregional disease, except T4b or unresectable N3
    - Squamous cell carcinoma (SCC), go to ESOPH-2
    - Adenocarcinoma, go to ESOPH-11
- Clinical stage IVA, includes T4b or unresectable N3 only, and IVB, metastatic disease
    - Squamous cell carcinoma (SCC), go to ESOPH-10
    - Adenocarcinoma, go to ESOPH-21
