+++
id           = "genetics_bopp/CRIT-4"
gid          = "genetics_bopp"
ref          = "CRIT-4"
page         = 30
title        = "Whether germline testing for ovarian cancer susceptibility genes is indicated"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2", "CRIT-5", "CRIT-6"]

[facets]
disease   = "genetics_bopp"
biomarker = ["brca1", "brca2", "atm", "brip1", "palb2", "rad51c", "rad51d", "mlh1", "msh2", "msh6", "epcam", "lynch", "dicer1", "smarca4"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ovarian_cancer_history"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "relative_degree"
type = "text"
[[variables]]
name = "model_probability"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-4, p30
- Testing criteria for ovarian cancer susceptibility genes
- Genes such as ATM, BRCA1, BRCA2, BRIP1, LS genes (MLH1, MSH2, MSH6, EPCAM), PALB2, RAD51C, and RAD51D, see GENE-A
    - The listed genes differ in their levels of risk, see GENE-A for specific risks
- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal history of ovarian cancer: ___ (ovarian_cancer_history)
- Histology: ___ (histology)
- Family history of ovarian, fallopian tube or peritoneal cancer: ___ (family_history)
- Degree of relationship of the affected relative: ___ (relative_degree)
- Probability of a BRCA1/2 P/LP variant by prior probability model: ___ (model_probability)

# Testing is clinically indicated in the following scenarios

- See General Testing Criteria on CRIT-1
- Personal history of epithelial ovarian cancer at any age
    - Includes fallopian tube cancer or peritoneal cancer
    - BRCA-related ovarian cancers are associated with epithelial, non-mucinous histology
    - LS can be associated with both non-mucinous and mucinous epithelial tumors
    - Be attentive for clinical evidence of LS, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- Personal history of non-epithelial ovarian cancer at any age
    - Sex-cord tumors with annular tubules (SCTAT)
    - Small cell carcinoma of the ovary (hypercalcemic type) (SCCOHT)
    - Specific types of non-epithelial ovarian cancers and tumors can also be associated with other rare syndromes
        - Sex-cord tumors with annular tubules and PJS
        - Sertoli-Leydig tumors and DICER1-related disorders
        - SCCOHT with SMARCA4
    - The Panel acknowledges that testing for DICER1 and SMARCA4 is appropriate
    - Management guidelines are evolving, and consultation with an expert gynecologic oncologist is recommended
- Family history of cancer only
    - An individual unaffected with ovarian cancer with a first- or second-degree blood relative with epithelial ovarian cancer at any age
        - Includes fallopian tube cancer or peritoneal cancer
        - May be extended to an affected third-degree relative if related through two male relatives, eg, paternal grandfather's mother or sister
        - If the affected first-degree relative underwent genetic testing and is negative for detectable P/LP variants, and there is no other family history of cancer, there is a low probability that any finding will have documented clinical utility
    - An individual unaffected with ovarian cancer who otherwise does not meet the criteria above but has a probability >5% of a BRCA1/2 P/LP variant based on prior probability models
        - Models such as Tyrer-Cuzick, BRCAPro, CanRisk
        - The approximate 5% threshold is used because of the availability of prior probability models
        - Current model estimates vary substantially, and different thresholds may be appropriate if other genes are included in the model used
        - If genes other than BRCA1 and BRCA2 are included in the model, the penetrance, clinical actionability, and phenotypic features of cancers associated with P/LP variants in those genes should be considered
        - These models are only validated for BRCA1/2

# Testing may be considered in the following scenarios

- Requires appropriate pre-test education and access to post-test management
- Personal history of serous tubal intraepithelial carcinoma (STIC) at any age
    - There is evolving evidence that suggests STIC could be associated with higher rates of BRCA1/2 P/LP variants

# Next

- Criteria met, go to GENE-1
- If testing criteria not met, consider testing criteria for other hereditary syndromes
- If criteria for other hereditary syndromes not met, then cancer screening as per NCCN Screening Guidelines
- For personal or family history of breast cancer, see CRIT-2
- For personal or family history of pancreatic cancer, see CRIT-5
- For personal or family history of prostate cancer, see CRIT-6
