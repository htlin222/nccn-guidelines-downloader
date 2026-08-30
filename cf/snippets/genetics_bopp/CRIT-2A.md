+++
id           = "genetics_bopp/CRIT-2A"
gid          = "genetics_bopp"
ref          = "CRIT-2A"
page         = 28
title        = "Footnotes qualifying the testing criteria for high-penetrance breast cancer susceptibility genes"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2", "CRIT-4", "CRIT-5", "CRIT-6"]

[facets]
disease   = "genetics_bopp"
histology = ["any", "dcis"]
biomarker = ["brca1", "brca2", "tnbc", "hr-positive"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "receptor_status"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "positive_nodes"
type = "text"
[[variables]]
name = "chemo_setting"
type = "enum"
options = ["adjuvant", "neoadjuvant"]
[[variables]]
name = "residual_disease"
type = "text"
[[variables]]
name = "cps_eg_score"
type = "number"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "brca_probability"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-2A, p28
- Footnotes to the testing criteria for high-penetrance breast cancer susceptibility genes (CRIT-2)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Breast cancer histology: ___ (histology)
    - Invasive and ductal carcinoma in situ breast cancers are both included for the purposes of these guidelines
- Receptor status: ___ (receptor_status)
- Invasive primary tumor size on pathology analysis: ___ (tumor_size)
- Pathologically confirmed positive axillary lymph nodes: ___ (positive_nodes)
- Chemotherapy setting: ___ (chemo_setting)
- Residual invasive disease after neoadjuvant chemotherapy: ___ (residual_disease)
- CPS + EG score: ___ (cps_eg_score)
- Close blood relatives affected, and their degree of relationship: ___ (family_history)
- Estimated probability of carrying a BRCA1/2 PV: ___ (brca_probability)

# What meeting a criterion means

- Meeting one or more of these criteria warrants further personalized risk assessment, genetic counseling, and often genetic testing and management

# Pre-test education and choice of panel

- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- Testing for PVs in other genes should take into consideration
    - Patient preferences
    - Turnaround time
    - Insurance restrictions to particular labs, and thus to particular panels
- The prevalence of VUS increases with testing of additional genes
- Pre-test education on the challenges in managing PVs in genes associated with specific syndromes, in the absence of a family history typical of such syndromes
    - Eg, CDH1 and TP53, given their expanding clinical phenotypes
    - Does not apply for de novo PVs
- Pre-test education regarding the uncertain clinical utility of identifying certain PVs
    - Eg, monoallelic MUTYH

# How family history is counted

- Close blood relatives include first-, second-, and third-degree relatives on the same side of the family (EVAL-B)
- Consideration of the limitations of unknown or limited family structure is indicated in those aged ≥51 years, see EVAL-A
- The criterion may be extended to an affected third-degree relative if related through two male relatives
    - Eg, paternal grandfather's mother or sister
- If the affected first-degree relative underwent genetic testing and is negative for detectable P/LP variants, and there is no other family history of cancer, there is a low probability that any finding will have documented clinical utility
- Metastatic prostate cancer, for the purposes of family history
    - Is biopsy-proven and/or has radiographic evidence
    - Includes distant metastasis, and regional bed or nodes
    - Is not a biochemical recurrence only
    - Prostate cancer-specific mortality should be a surrogate for metastatic disease

# Testing driven by PARP inhibitor eligibility

- Testing is recommended for all triple-negative breast cancers
- These indications are specifically for PARP inhibitor eligibility
- High-risk disease uses the definition of the phase III OlympiA trial, which compared adjuvant olaparib to placebo among BRCA1/BRCA2 carriers with high-risk disease
    - Triple-negative breast cancer treated with either
        - Adjuvant chemotherapy with axillary node-positive disease or an invasive primary tumor ≥2 cm on pathology analysis, or
        - Neoadjuvant chemotherapy with residual invasive breast cancer in the breast or resected lymph nodes
    - Hormone receptor-positive disease treated with either
        - Adjuvant chemotherapy with ≥4 positive pathologically confirmed lymph nodes, or
        - Neoadjuvant chemotherapy that did not have a complete pathologic response, with a CPS + EG score of ≥3
    - The CPS + EG scoring system is based on a combination of clinical and pathologic stage, estrogen receptor status, and histologic grade
        - See Neoadjuvant Therapy Outcomes Calculator
        - See NCCN Guidelines for Breast Cancer for further details

# Probability models and the threshold for testing

- The approximate 5% threshold for probability of carrying BRCA1/2 PVs is utilized because of availability of prior probability models
- It is recognized that current model estimates vary substantially, and that different thresholds may be appropriate if other genes are included in the model utilized
- If genes other than BRCA1 and BRCA2 are to be included in models evaluating the threshold for testing, the penetrance, clinical actionability, and phenotypic features of cancers associated with P/LP variants in these genes should be considered
- These models are only validated for BRCA1/2
- The Panel encourages the development of validated models that include these parameters to determine eligibility and appropriateness for gene panel testing for inherited cancer risk

# References cited by these footnotes

- Robson M, et al. N Engl J Med 2017;377:523-533
- Litton JK, et al. N Engl J Med 2018;379:753-763
- Tutt ANJ, et al. Engl J Med 2021;384:2394-2405, the OlympiA trial
- Jeruss JS, et al. J Clin Oncol 2008;26:246-252, and Mittendorf EA, et al. J Clin Oncol 2011;29:1956-1962, for the CPS + EG scoring system
- Weitzel JN, et al. Breast Cancer Res Treat 2021;188:759-768

# Next

- Personal or family history of ovarian cancer, go to CRIT-4
- Personal or family history of pancreatic cancer, go to CRIT-5
- Personal or family history of prostate cancer, go to CRIT-6
