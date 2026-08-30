+++
id           = "genetics_bopp/CRIT-6"
gid          = "genetics_bopp"
ref          = "CRIT-6"
page         = 32
title        = "Testing criteria for prostate cancer susceptibility genes"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2", "CRIT-4", "CRIT-5", "CRIT-6A"]

[facets]
disease   = "genetics_bopp"
biomarker = ["atm", "brca1", "brca2", "chek2", "hoxb13", "palb2", "tp53"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prostate_stage"
type = "text"
[[variables]]
name = "risk_group"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "ancestry"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "biochemical_recurrence"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-6, p32
- Testing criteria for prostate cancer susceptibility genes, such as ATM, BRCA1, BRCA2, CHEK2, HOXB13, PALB2, and TP53 (GENE-A)
    - HOXB13, see NCCN Guidelines for Prostate Cancer
    - Level of risk for prostate cancer varies by gene
    - There is emerging evidence for potential risk and/or therapeutic relevance for prostate cancer for additional genes
- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- For personal or family history of breast cancer, see CRIT-2; for ovarian cancer, see CRIT-4; for pancreatic cancer, see CRIT-5
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Prostate cancer stage: ___ (prostate_stage)
- Risk group at diagnosis: ___ (risk_group)
- Histology: ___ (histology)
- Ancestry: ___ (ancestry)
- Family history: ___ (family_history)
- Biochemical recurrence: ___ (biochemical_recurrence)

# Testing is clinically indicated in the following scenarios

- See General Tumor Criteria on CRIT-1
- Personal history of prostate cancer at any age with metastatic (Stage IVB) or node-positive (Stage IVA) prostate cancer
    - Metastatic prostate cancer is biopsy-proven and/or with radiographic evidence and includes distant metastasis and regional bed or nodes
    - It is not a biochemical recurrence only
- Personal history of prostate cancer at any age with very high-risk or high-risk disease
    - See Initial Risk Stratification and Staging Workup (PROS-2), NCCN Guidelines for Prostate Cancer
- Personal history of prostate cancer at any age with Ashkenazi Jewish ancestry
- Personal history of prostate cancer at any age with family history
    - Consideration of the limitations of unknown or limited family structure is indicated, see EVAL-A
    - Close blood relatives include first-, second-, and third-degree relatives on the same side of the family (EVAL-B)
    - 1 or more close blood relatives with ANY of:
        - breast cancer at age 50 y or younger
        - male breast cancer
        - ovarian cancer
        - pancreatic cancer
        - metastatic, node positive, or very high-risk or high-risk prostate cancer
            - Prostate cancer-specific mortality should be a surrogate for metastatic disease for family history purposes
    - 3 or more close blood relatives with prostate cancer (any grade) and/or breast cancer on the same side of the family including the patient with prostate cancer
    - For additional family history considerations, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- Family history criteria, for an individual who is unaffected, or affected but does not meet the criteria above
    - Individual with a first-degree or second-degree blood relative meeting any of the criteria listed above
        - Except unaffected individuals whose relatives meet criteria only for systemic therapy decision-making
        - This may be extended to an affected third-degree relative if related through two male relatives, eg, paternal grandfather's mother or sister
        - If the affected first-degree relative underwent genetic testing and is negative for detectable P/LP variants and there is no other family history of cancer, there is a low probability that any finding will have documented clinical utility

# Testing may be considered in the following scenarios

- Personal history of prostate cancer at age 55 y or younger not meeting any of the above criteria
    - Referring to data regarding early onset prostate cancer
- Personal history of prostate cancer with intermediate-risk prostate cancer with intraductal/cribriform histology at any age
    - See Initial Risk Stratification and Staging Workup in NCCN Guidelines for Prostate Cancer

# Refer for genetic testing in the following scenario

- Biochemical recurrence
    - For this heterogeneous disease state, refer for genetic testing if any of:
        - Very high-risk or high-risk disease at diagnosis
        - Family history of cancer criteria met
        - At the time of progression to metastatic disease

# Next

- Criteria met, go to GENE-1
- If testing criteria not met, consider testing criteria for other hereditary syndromes
- If criteria for other hereditary syndromes not met, then cancer screening as per NCCN Screening Guidelines
- Footnotes for this page are on CRIT-6A
