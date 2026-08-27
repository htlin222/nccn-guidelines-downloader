+++
id           = "uterine/UN-1"
gid          = "uterine"
ref          = "UN-1"
page         = 10
title        = "Initial evaluation of known or suspected uterine malignancy, and triage by initial clinical findings"
nccn_version = "3.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "ENDO-1", "ENDO-2", "ENDO-3", "ENDO-11", "ENDO-12", "ENDO-13", "ENDO-14", "UTSARC-1"]

[facets]
disease    = "uterine"
histology  = "any"
timepoint  = ["workup", "staging"]
population = "older-adult"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "disease_extent"
type = "enum"
options = ["disease limited to uterus", "suspected or gross cervical involvement", "suspected extrauterine disease"]
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "molecular"
type = "text"
[[variables]]
name = "germline"
type = "text"
[[variables]]
name = "distress"
type = "text"
+++

# Source

- NCCN Uterine Neoplasms v3.2026, UN-1, p10
- Applies to initial preoperative evaluation for known or suspected malignancy
- All staging in guideline is based on 2009 FIGO staging (ST-1, ST-2, ST-3, and ST-4)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Histology ___ (histology)
- Disease extent ___ (disease_extent)
- CA-125 ___ (ca125)
- Molecular evaluation of tumor ___ (molecular)
- Germline and/or multigene panel testing ___ (germline)
- Distress ___ (distress)

# Initial evaluation

- History and physical (H&P)
- Complete blood count (CBC)
- Liver function test [LFT]
- Renal function tests
- Chemistry profile
- Consider CA-125
- Expert pathology review, with additional endometrial biopsy as clinically indicated
    - Preoperative imaging and biopsy may help to identify uterine sarcomas, although biopsy sensitivity is less than for endometrial cancer
    - If there is suspicion of malignancy, fragmentation/morcellation should be avoided
    - See Principles of Pathology for Endometrial Carcinoma (ENDO-A)
    - See Principles of Pathology and Molecular Analysis for Uterine Sarcoma (UTSARC-A)
- Imaging
    - See Principles of Imaging for Endometrial Carcinoma (ENDO-B)
    - See Principles of Imaging for Uterine Sarcoma (UTSARC-B)
- Recommend molecular evaluation of tumor and evaluation for inherited cancer risk (ENDO-A and UTSARC-A)
- Germline and/or multigene panel testing
- For patients who are older with uterine cancer, also see the NCCN Guidelines for Older Adult Oncology
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Initial clinical findings

- Classify on expert pathology review
    - See Principles of Pathology for Endometrial Carcinoma (ENDO-A)
    - See Principles of Pathology and Molecular Analysis for Uterine Sarcoma (UTSARC-A)
- Malignant epithelial (carcinoma)
    - Pure endometrioid carcinoma
        - Disease limited to uterus
        - Suspected or gross cervical involvement
        - Suspected extrauterine disease
    - High-risk endometrial carcinoma histology
        - Serous carcinoma
        - Clear cell carcinoma
        - Undifferentiated/dedifferentiated carcinoma
        - Carcinosarcoma
            - Should be treated as a high-grade endometrial cancer
            - Also known as malignant mixed mesodermal tumor or malignant mixed Müllerian tumor, and including those with either homologous or heterologous stromal elements
- Malignant mesenchymal (sarcoma)
    - Consider referral to a center of expertise that specializes in the treatment of malignant mesenchymal tumors (sarcoma)
    - Low-grade endometrial stromal sarcoma (ESS) or adenosarcoma
    - High-grade ESS
    - Undifferentiated uterine sarcoma (UUS)
    - Leiomyosarcoma (LMS)
    - Other sarcomas (eg, perivascular epithelioid cell tumor [PEComa])

# Next

- Pure endometrioid carcinoma, disease limited to uterus, go to Primary Treatment (ENDO-1)
- Pure endometrioid carcinoma, suspected or gross cervical involvement, go to Primary Treatment (ENDO-2)
- Pure endometrioid carcinoma, suspected extrauterine disease, go to Primary Treatment (ENDO-3)
- Serous carcinoma, go to Primary Treatment (ENDO-11)
- Clear cell carcinoma, go to Primary Treatment (ENDO-12)
- Undifferentiated/dedifferentiated carcinoma, go to Primary Treatment (ENDO-13)
- Carcinosarcoma, go to Primary Treatment (ENDO-14)
- Malignant mesenchymal (sarcoma), go to Primary Treatment (UTSARC-1)
