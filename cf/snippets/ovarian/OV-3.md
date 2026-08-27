+++
id           = "ovarian/OV-3"
gid          = "ovarian"
ref          = "OV-3"
page         = 9
title        = "Workup, findings, and primary treatment after a recent surgical procedure for newly diagnosed ovarian cancer"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-2", "OV-4", "OV-A", "OV-B", "OV-C", "LCOC-1"]

[facets]
disease   = "ovarian"
histology = "any"
stage     = ["I", "II", "III", "IV"]
biomarker = ["brca", "any"]
timepoint = ["diagnosis", "workup", "staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_procedure"
type = "text"
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "residual"
type = "enum"
options = ["none-suspect-stage-I", "none-suspect-stage-II-IV", "resectable", "unresectable"]
+++

# Source

- NCCN Epithelial Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer v4.2026, OV-3, p9
- Applies to a patient referred with newly diagnosed ovarian cancer, including less common ovarian cancers (LCOCs), after a recent surgical procedure
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Recent surgical procedure: ___ (prior_procedure)
- Pathology: ___ (pathology)
- Family history: ___ (family_history)
- CA-125: ___ (ca125)
- Findings on workup: ___ (residual)

# Workup

- Evaluation by gynecologic oncologist
    - Recommended for all patients with suspected ovarian malignancies; published data demonstrate that primary assessment and debulking by a gynecologic oncologist results in a survival advantage
    - Recommended for patients being evaluated for neoadjuvant therapy prior to being considered a poor surgical candidate
    - Recommended for management of occult STICs
    - Recommended for consideration of laparoscopic evaluation to determine feasibility of debulking surgery in select patients
    - Endometrial biopsy as clinically indicated
- Obtain family history
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- Genetic risk evaluation and germline and somatic biomarker testing, if not previously done
    - Germline and somatic BRCA1/2 status informs maintenance therapy
    - In the absence of a BRCA1/2 mutation, HRD status may provide information on the magnitude of benefit of PARPi therapy
    - For PARPi therapy in advanced stage disease, include measure of HR (OV-C)
- Review prior imaging studies, operative notes, and pathology
    - Principles of Pathology (OV-C)
- Imaging studies as clinically indicated, see Principles of Imaging (OV-A)
- CBC
- Chemistry profile with LFTs
- CA-125 or other tumor markers as clinically indicated
    - Other tumor markers may include inhibin, beta-hCG, alpha-fetoprotein, LDH, CEA, CA 19-9, and HE4
    - See Discussion for usefulness of diagnostic tests
- REI as clinically indicated

# Findings and primary treatment

- No evidence of residual disease on workup, suspect stage I
    - Consider surgical staging if not previously done, if considering observation or to inform systemic therapy decisions
        - Principles of Surgery (OV-B)
        - Principles of Pathology (OV-C)
        - Comprehensive surgical staging has not been shown to improve survival in patients with no evidence of residual disease, but it can be important for determining the most appropriate postoperative management options, including selection of adjuvant and maintenance therapy
- No evidence of residual disease on workup, suspect stage II to IV
    - Consider surgical staging if not previously done, to inform systemic therapy decisions
        - Principles of Surgery (OV-B)
        - Principles of Pathology (OV-C)
        - Comprehensive surgical staging has not been shown to improve survival in patients with no evidence of residual disease, but it can be important for determining the most appropriate postoperative management options, including selection of adjuvant and maintenance therapy
- Evidence of residual disease on workup, suspect resectable residual disease
    - Tumor cytoreductive surgery
        - Principles of Surgery (OV-B)
        - Principles of Pathology (OV-C)
- Evidence of residual disease on workup, suspect unresectable residual disease
    - Neoadjuvant therapy does not apply to LMP and other noninvasive cancers (LCOC-1)

# Next

- After surgical staging or tumor cytoreductive surgery, go to Adjuvant Therapy (OV-4)
- Suspect unresectable residual disease, go to Neoadjuvant Therapy (OV-2)
- LMP and other noninvasive cancers, see LCOC-1
