+++
id           = "gastric/GAST-2"
gid          = "gastric"
ref          = "GAST-2"
page         = 11
title        = "Conclusions of multidisciplinary review: primary treatment by final stage"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-1", "GAST-3", "GAST-4", "GAST-6", "GAST-9", "ST-1"]

[facets]
disease   = "gastric"
histology = "any"
stage     = "any"
biomarker = ["msi-h", "dmmr"]
timepoint = ["staging", "primary-treatment", "neoadjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "t1b_depth"
type = "enum"
options = ["superficial", "deep", "not applicable"]
[[variables]]
name = "msi_mmr"
type = "text"
[[variables]]
name = "surgical_status"
type = "enum"
options = ["medically fit", "nonsurgical candidate"]
[[variables]]
name = "resectability"
type = "enum"
options = ["potentially resectable", "surgically unresectable"]
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-2, p11
- Applies after multidisciplinary review, once a final stage has been assigned
- Tumor classification: see Staging (ST-1)
- Footnotes for this page are on GAST-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Final stage ___ (ctnm)
- cT1b depth of submucosal invasion ___ (t1b_depth)
    - EUS is not reliable for predicting superficial or deep submucosal invasion, so endoscopic resection is recommended to provide accurate staging
    - Superficial pT1b = 500 μm or less invasion of submucosa
    - Deep pT1b = more than 500 μm invasion of submucosa
- MSI/MMR status ___ (msi_mmr)
- Surgical status ___ (surgical_status)
    - Medically fit = medically able to tolerate major surgery
    - Nonsurgical candidate = medically unable to tolerate major surgery, or medically fit but declines surgery
- Resectability ___ (resectability)
    - Principles of Surgery (GAST-C)

# Locoregional disease (cM0, Any N): cTis or cT1a, or superficial cT1b

- Nonsurgical candidate
    - Endoscopic resection (ER)
        - Principles of Endoscopic Staging and Therapy (GAST-A)
- Medically fit
    - Endoscopic resection (ER)
        - Principles of Endoscopic Staging and Therapy (GAST-A)
    - or Surgery
        - Principles of Surgery (GAST-C)

# Locoregional disease (cM0, Any N): deep cT1b

- Surgery
    - Surgery as primary therapy is appropriate for T1b or higher cancer, or actively bleeding cancer, or when postoperative therapy is preferred
    - Principles of Pathologic Review and Biomarker Testing (GAST-B)
    - Principles of Surgery (GAST-C)

# Locoregional disease (cM0, Any N): cT2 or higher, Any N

- Medically fit, potentially resectable
    - Surgery
        - Surgery as primary therapy is appropriate for T1b or higher cancer, or actively bleeding cancer, or when postoperative therapy is preferred
        - Principles of Pathologic Review and Biomarker Testing (GAST-B)
        - Principles of Surgery (GAST-C)
    - or Perioperative systemic therapy (category 1)
        - Principles of Systemic Therapy (GAST-F)
    - or Consider neoadjuvant or perioperative immune checkpoint inhibitor(s) (ICI) if tumor is MSI-H/dMMR
        - Perioperative immunotherapy should be considered in consultation with a multidisciplinary team
        - Radiologic and endoscopic complete responses may occur after neoadjuvant ICI therapy
        - Current imaging and endoscopic assessment methods do not reliably predict pathologic complete response
        - Gastrectomy with appropriate lymphadenectomy remains the standard approach outside of prospective organ-preservation clinical trials
        - Multidisciplinary evaluation is recommended when considering non-operative management
        - If undergoing non-operative management, give immunotherapy for at least 1 year, counting perioperative and adjuvant settings
        - If undergoing non-operative management, surveillance is chest/abdomen/pelvis CT, plus PET/CT if clinically indicated, and EGD with biopsy, with EUS as clinically indicated, every 12 weeks for 2 years and then every 6 months until year 5
        - Principles of Systemic Therapy (GAST-F)
- Medically fit, surgically unresectable
    - Chemoradiation
        - Principles of Systemic Therapy (GAST-F)
        - Principles of Radiation Therapy (GAST-G)
    - or Systemic therapy
        - Principles of Systemic Therapy (GAST-F)
- Nonsurgical candidate
    - Palliative management (GAST-9)
    - Principles of Surgery (GAST-C)

# Metastatic disease (cM1)

- Palliative management (GAST-9)

# Next

- After endoscopic resection, endoscopic surveillance
    - Principles of Endoscopic Staging and Therapy (GAST-A)
    - For medically fit patients, if unfavorable histology, consider surgery (GAST-A 3 of 4)
- After surgery with no systemic therapy given, surgical outcomes for patients who have not received systemic therapy, go to GAST-4
- After perioperative systemic therapy, or neoadjuvant or perioperative ICI, response assessment, go to GAST-3
- After chemoradiation or systemic therapy for surgically unresectable disease, post-treatment assessment/additional management, go to GAST-6
- Nonsurgical candidate, or metastatic disease (cM1), palliative management, go to GAST-9
