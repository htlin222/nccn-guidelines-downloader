+++
id           = "esophageal/ESOPH-1"
gid          = "esophageal"
ref          = "ESOPH-1"
page         = 10
title        = "Workup and histologic classification of newly diagnosed esophageal and esophagogastric junction cancer"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-2", "ESOPH-10", "ESOPH-11", "ESOPH-21", "ST-1"]

[facets]
disease   = "esophageal"
histology = ["squamous", "adenocarcinoma"]
stage     = ["I", "II", "III", "IV"]
timepoint = ["diagnosis", "workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["squamous cell carcinoma", "adenocarcinoma"]
[[variables]]
name = "tumor_location"
type = "text"
[[variables]]
name = "siewert"
type = "enum"
options = ["I", "II", "III", "not applicable"]
[[variables]]
name = "clinical_stage"
type = "text"
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-1, p10
- Applies to the initial workup of newly diagnosed esophageal and esophagogastric junction (EGJ) cancer
- Footnotes on ESOPH-1A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Tumor location ___ (tumor_location)
- Siewert category ___ (siewert)
- Clinical stage ___ (clinical_stage)

# Workup

- History and physical (H&P)
- Esophagogastroduodenoscopy (EGD) and biopsy
    - Principles of Endoscopic Staging and Therapy (ESOPH-A)
- Chest/abdomen CT with oral and IV contrast
- Pelvis CT with contrast, as clinically indicated
- FDG-PET/CT evaluation (skull base to mid-thigh), if no evidence of M1 disease
- Complete blood count (CBC) and comprehensive chemistry profile
- Endoscopic ultrasound (EUS), if no evidence of M1 unresectable disease
- Endoscopic resection (ER) for the accurate staging of early-stage cancers (Tis, T1a or T1b)
    - Early-stage cancers can best be diagnosed by ER
    - ER may also be therapeutic for early-stage cancers
    - Principles of Endoscopic Staging and Therapy (ESOPH-A)
- Biopsy of metastatic disease, as clinically indicated
- Bronchoscopy, if tumor is at or above the carina with no evidence of M1 disease
- Assign Siewert category
    - Principles of Surgery (ESOPH-C)
- Nutritional assessment and counseling
- Smoking cessation advice, counseling, and pharmacotherapy as indicated
    - NCCN Guidelines for Smoking Cessation
- Screen for family history
    - Principles of Genetic Risk Assessment for Esophageal and Esophagogastric Junction (EGJ) Cancers (ESOPH-D)
    - Also see NCCN Guidelines for Colorectal Cancer Screening, Genetic/Familial High-Risk Assessment: Colorectal, Endometrial and Gastric, and Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic and Prostate
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - NCCN Guidelines for Distress Management (DIS-A)

# Biomarker testing

- Principles of Pathologic Review and Biomarker Testing (ESOPH-B) applies to every item in this block
- Universal testing for microsatellite instability (MSI) by polymerase chain reaction (PCR)/next-generation sequencing (NGS), or mismatch repair (MMR) by immunohistochemistry (IHC), is recommended in all newly diagnosed patients
- Universal testing for programmed death ligand 1 (PD-L1) is recommended in all newly diagnosed patients
- HER2 (ERBB2) testing, if advanced/metastatic adenocarcinoma is documented/suspected
- CLDN18.2 testing, if advanced/metastatic adenocarcinoma is documented/suspected
- NGS should be considered

# Next

- Assign clinical stage, see Staging (ST-1) for tumor classification
- Assign histologic classification, see Principles of Pathologic Review and Biomarker Testing (ESOPH-B)
- Stage I–IVA locoregional disease, except T4b or unresectable N3
    - Celiac nodal involvement in cancers of the esophagogastric junction (EGJ)/distal esophagus should be considered for combined modality therapy
    - Squamous cell carcinoma (SCC), go to ESOPH-2
    - Adenocarcinoma, go to ESOPH-11
- Stage IVA, including T4b or unresectable N3 only, and stage IVB metastatic disease
    - Squamous cell carcinoma (SCC), go to ESOPH-10
    - Adenocarcinoma, go to ESOPH-21
