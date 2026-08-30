+++
id           = "genetics_bopp/CRIT-2"
gid          = "genetics_bopp"
ref          = "CRIT-2"
page         = 27
title        = "Who meets testing criteria for high-penetrance breast cancer susceptibility genes"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2A", "CRIT-3", "CRIT-4", "GENE-1"]

[facets]
disease   = "genetics_bopp"
histology = ["any", "dcis", "invasive-lobular"]
biomarker = ["brca1", "brca2", "cdh1", "palb2", "pten", "stk11", "tp53", "tnbc", "her2-negative"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex"
type = "enum"
options = ["female", "male"]
[[variables]]
name = "dx_age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "er"
type = "text"
[[variables]]
name = "pr"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "primary_count"
type = "number"
[[variables]]
name = "ancestry"
type = "enum"
options = ["ashkenazi-jewish", "other", "unknown"]
[[variables]]
name = "family_side"
type = "enum"
options = ["maternal", "paternal", "both", "unknown"]
[[variables]]
name = "family_cancers"
type = "text"
[[variables]]
name = "model_probability"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-2, p27
- Testing criteria for high-penetrance breast cancer susceptibility genes, such as BRCA1, BRCA2, CDH1, PALB2, PTEN, STK11, and TP53 (GENE-A)
- See General Testing Criteria on CRIT-1
- Invasive and ductal carcinoma in situ breast cancers are both included for these criteria
- Meeting one or more of these criteria warrants further personalized risk assessment, genetic counseling, and often genetic testing and management
- For the nuances of genetic counseling and testing, see EVAL-A
- For personal or family history of ovarian cancer see CRIT-4, for pancreatic cancer see CRIT-5, for prostate cancer see CRIT-6
- Footnotes on CRIT-2A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (sex)
- Breast cancer diagnosed at age ___ (dx_age)
- Histology ___ (histology)
- ER ___ (er) / PR ___ (pr) / HER2 ___ (her2)
- Number of primary breast cancers, synchronous or metachronous ___ (primary_count)
- Ancestry ___ (ancestry)
- Side of the family carrying the cancer history ___ (family_side)
- Cancers in close blood relatives ___ (family_cancers)
- Probability of a BRCA1/2 P/LP variant by prior probability model ___ (model_probability)

# Personal history of breast cancer, age at diagnosis

- Breast cancer at age 50 y or younger

# Personal history of breast cancer, any age, treatment indications

- To aid in systemic treatment decisions using PARP inhibitors for breast cancer in the metastatic setting (See NCCN Guidelines for Breast Cancer)
    - Testing is recommended for all triple-negative breast cancers; this indication is specifically for PARP inhibitor eligibility
- To aid in adjuvant treatment decisions with olaparib for high-risk, HER2-negative breast cancer
    - High-risk is the definition used in the phase III OlympiA trial, which compared adjuvant olaparib to placebo among BRCA1/BRCA2 carriers with high-risk disease
    - Triple-negative breast cancer treated with adjuvant chemotherapy, with axillary node-positive disease or an invasive primary tumor 2 cm or larger on pathology analysis
    - Triple-negative breast cancer treated with neoadjuvant chemotherapy, with residual invasive breast cancer in the breast or resected lymph nodes
    - Hormone receptor-positive disease treated with adjuvant chemotherapy, with 4 or more positive pathologically confirmed lymph nodes
    - Hormone receptor-positive disease treated with neoadjuvant chemotherapy that did not have a complete pathologic response, with a CPS + EG score of 3 or more
    - The CPS + EG scoring system is based on a combination of clinical and pathologic stage, estrogen receptor status, and histologic grade; see the Neoadjuvant Therapy Outcomes Calculator
    - See NCCN Guidelines for Breast Cancer for further details

# Personal history of breast cancer, any age, pathology or histology

- Triple-negative breast cancer
- Multiple primary breast cancers, synchronous or metachronous
- Lobular breast cancer with personal or family history of diffuse gastric cancer (See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric)

# Personal history of breast cancer, any age, family history

- Consider the limitations of unknown or limited family structure in those aged 51 years or older (EVAL-A)
- 1 or more close blood relatives with ANY of the following
    - A close blood relative is a first-, second-, or third-degree relative on the same side of the family (EVAL-B)
    - Breast cancer at age 50 y or younger
    - Male breast cancer
    - Ovarian cancer
    - Pancreatic cancer
    - Prostate cancer that is metastatic, or in a high- or very-high-risk group (Initial Risk Stratification and Staging Workup in NCCN Guidelines for Prostate Cancer)
        - Metastatic prostate cancer is biopsy-proven and/or has radiographic evidence, and includes distant metastasis and regional bed or nodes
        - Biochemical recurrence only does not count as metastatic
        - Prostate cancer-specific mortality should be a surrogate for metastatic disease for family history purposes
- 3 or more diagnoses of breast and/or prostate cancer, any grade, on the same side of the family, including the patient with breast cancer

# Personal history of breast cancer, any age, other features

- Male breast cancer
- Ancestry: Ashkenazi Jewish

# Family history criteria, for the unaffected, or affected but not meeting the above

- Individual with a first- or second-degree blood relative meeting any of the criteria listed above
    - Except unaffected individuals whose relatives meet criteria only for systemic therapy decision-making
    - May be extended to an affected third-degree relative if related through two male relatives, eg, paternal grandfather's mother or sister
    - If the affected first-degree relative underwent genetic testing and is negative for detectable P/LP variants, and there is no other family history of cancer, there is a low probability that any finding will have documented clinical utility
- Individual who has a probability greater than 5% of a BRCA1/2 P/LP variant based on prior probability models, eg, Tyrer-Cuzick, BRCAPro, CanRisk
    - The approximate 5% threshold is used because of the availability of prior probability models; current model estimates vary substantially and different thresholds may be appropriate if other genes are included in the model
    - If genes other than BRCA1 and BRCA2 are included in the model, consider the penetrance, clinical actionability, and phenotypic features of cancers associated with P/LP variants in those genes
    - These models are only validated for BRCA1/2

# Pre-test education and panel selection

- Testing for PVs in other genes should take into consideration patient preferences, turnaround time, and insurance restrictions to particular labs, and thus to particular panels
- The prevalence of VUS increases with testing of additional genes
- Pre-test education on the challenges in managing PVs in genes associated with specific syndromes, eg, CDH1 and TP53 given their expanding clinical phenotypes, in the absence of a family history typical of such syndromes
    - Does not apply for de novo PVs
- Pre-test education regarding the uncertain clinical utility of identifying certain PVs, eg, monoallelic MUTYH

# Next

- Criteria met, go to GENE-1
- If testing criteria not met, consider testing criteria for other hereditary syndromes
- If criteria for other hereditary syndromes not met, then cancer screening as per NCCN Screening Guidelines
- Criteria continued on CRIT-3
