+++
id           = "gastric/GAST-1"
gid          = "gastric"
ref          = "GAST-1"
page         = 9
title        = "Workup and additional evaluation at initial presentation, by clinical stage"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-2", "GAST-9", "ST-1"]

[facets]
disease   = "gastric"
histology = "any"
stage     = "any"
timepoint = ["workup", "staging", "diagnosis"]
intent    = ["curative", "palliative"]

[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "siewert"
type = "text"
[[variables]]
name = "msi_mmr"
type = "text"
[[variables]]
name = "pd_l1"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "cldn18_2"
type = "text"
[[variables]]
name = "h_pylori"
type = "enum"
options = ["positive", "negative", "not tested"]
[[variables]]
name = "surgical_status"
type = "enum"
options = ["medically fit", "nonsurgical candidate"]
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-1, p9
- Applies to workup and additional evaluation of newly diagnosed gastric cancer
- Tumor classification: see Staging (ST-1)
- Footnotes for this page are on GAST-1A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (ctnm)
- Siewert category ___ (siewert)
    - Principles of Surgery (GAST-C)
- MSI by PCR/NGS or MMR by IHC ___ (msi_mmr)
- PD-L1 ___ (pd_l1)
- HER2 (ERBB2) ___ (her2)
- CLDN18.2 ___ (cldn18_2)
- Helicobacter pylori ___ (h_pylori)
- Surgical status ___ (surgical_status)
    - Medically fit = medically able to tolerate major surgery
    - Nonsurgical candidate = medically unable to tolerate major surgery, or medically fit but declines surgery

# Workup

- History and physical (H&P)
- Esophagogastroduodenoscopy (EGD) and biopsy
    - Principles of Endoscopic Staging and Therapy (GAST-A)
- Chest/abdomen/pelvis CT with oral and IV contrast
- FDG-PET/CT evaluation (skull base to mid-thigh)
    - For locally advanced or metastatic disease, or if clinically indicated
    - May not be appropriate for T1
- CBC and comprehensive chemistry profile
- Endoscopic ultrasound (EUS)
    - Recommended if early-stage disease is suspected, or if early versus locally advanced disease needs to be determined (preferred)
- Endoscopic resection (ER)
    - Essential for the accurate staging of early-stage cancers (T1a or T1b)
    - Early-stage cancers can best be diagnosed by ER
    - ER may also be therapeutic for early-stage disease/lesions
- Biopsy of metastatic disease as clinically indicated
- Assess Siewert category
    - Principles of Surgery (GAST-C)
- Nutritional assessment and counseling
- Smoking cessation advice, counseling, and pharmacotherapy as indicated
    - NCCN Guidelines for Smoking Cessation
- Screen for family history
    - Principles of Genetic Risk Assessment for Gastric Cancer (GAST-D)
    - Also see NCCN Guidelines for Colorectal Cancer Screening, and Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Test for Helicobacter pylori infection
    - Eradicate in all patients with early gastric cancer if positive
    - Conduct genetic testing as needed
    - Recommend H. pylori testing of close family members
    - If H. pylori testing is positive, discuss recommendations with family members as appropriate
    - Principles of Surveillance (GAST-H)
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - NCCN Guidelines for Distress Management (DIS-A)

# Biomarker testing

- Universal testing for microsatellite instability (MSI) by polymerase chain reaction (PCR)/next-generation sequencing (NGS), or mismatch repair (MMR) by immunohistochemistry (IHC), is recommended in all newly diagnosed patients
- Universal testing for programmed death ligand 1 (PD-L1) is recommended in all newly diagnosed patients
- HER2 (ERBB2) testing if advanced/metastatic disease is documented/suspected
    - Tumor Epstein-Barr virus status is emerging as a potential biomarker for personalized treatment strategies for gastric cancer, but is not currently recommended for clinical care
    - EBV testing should be performed if the morphology of the tumor contains prominent lymphoid stroma
- CLDN18.2 testing if advanced/metastatic disease is documented/suspected
- NGS should be considered
- All of the above: Principles of Pathologic Review and Biomarker Testing (GAST-B)

# Additional evaluation by clinical stage

- cTis or cT1a
    - Medically fit
    - Nonsurgical candidate
- Locoregional (cM0, Any N)
    - Medically fit, potentially resectable
        - Recommend laparoscopy with cytology
    - Medically fit, surgically unresectable
        - Consider laparoscopy with cytology
    - Nonsurgical candidate
    - Multidisciplinary review preferred
        - Principles of Multidisciplinary Team Approach (GAST-E)
    - Principles of Surgery (GAST-C) for resectability assessment
- Stage IV (cM1)
- Laparoscopy with cytology
    - Performed to evaluate for peritoneal spread when considering local therapy
    - Not indicated if a palliative resection is planned
    - Indicated for clinical stage T1b or higher

# Next

- cTis or cT1a, go to GAST-2
- Locoregional (cM0, Any N), go to GAST-2
- Stage IV (cM1), palliative management, go to GAST-9
