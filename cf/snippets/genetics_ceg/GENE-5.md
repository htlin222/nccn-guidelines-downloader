+++
id           = "genetics_ceg/GENE-5"
gid          = "genetics_ceg"
ref          = "GENE-5"
page         = 120
title        = "Cancer risk management based on genetic test results for BRCA1/2 and CDH1"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-4", "GENE-6", "HGAST-A", "HGAST-B", "GENE-19"]

[facets]
disease   = "genetics_ceg"
biomarker = ["brca1", "brca2", "cdh1"]
timepoint = ["genetic-testing", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex"
type = "enum"
options = ["female", "male"]
[[variables]]
name = "gene_result"
type = "text"
[[variables]]
name = "gastric_risk_factors"
type = "text"
[[variables]]
name = "h_pylori_status"
type = "enum"
options = ["positive", "negative", "not tested"]
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-5, p120
- Cancer risk management based on genetic test results
- Covers the BRCA1/2 and CDH1 rows of the table, by pathogenic/likely pathogenic (P/LP) variant
- All recommendations category 2A unless otherwise indicated
- References on GENE-19

# Assessment

- ___ (age) yo, ___ (sex)
- Germline result, gene and variant classification: ___ (gene_result)
- Overall gastric cancer risk factors: ___ (gastric_risk_factors)
- H. pylori status: ___ (h_pylori_status)

# BRCA1/2

- Colon cancer and colorectal phenotype
    - No evidence of increased risk
- Endometrial cancer
    - No evidence of increased risk
- Gastric cancer
    - Absolute risk: 3.5%
    - Management: insufficient evidence to recommend routine surveillance
- Other risks
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate

# BRCA1/2 gastric cancer comment

- Observational studies have suggested elevated relative risk of gastric cancer in individuals with BRCA1/2 P/LP variants
- There are no interventional studies of screening or surveillance for gastric cancer in individuals with BRCA1/2 P/LP variants
- The cumulative absolute risks through age 50 to 60 y are under 1%
- Evidence is insufficient to specify surveillance
    - Clinicians should be aware of, and educate patients on, the signs and symptoms of disease
    - Manage in context of their overall gastric cancer risk
- Increased risk of gastric cancer associated with H. pylori in patients with a BRCA1/2 P/LP variant is recognized by the Panel (Usui Y, et al. N Engl J Med 2023;388:1181-1190)
    - Data are lacking regarding changes in risk of gastric cancer following treatment of infection
    - Consider testing and treatment for H. pylori on a case-by-case basis based on various risk factors

# CDH1

- Colon cancer and colorectal phenotype
    - Evidence of increased risk: no established association
- Endometrial cancer
    - No evidence of increased risk
- Gastric cancer
    - Absolute risk: 25%–33% for females, 37%–42% for males
    - Advanced cancer risk: 10% males / 7% females
    - Management: hereditary diffuse gastric cancer (HGAST-B)
    - Strength of evidence: strong
- Other cancers
    - Absolute risk: increased lifetime risk of breast cancer (HGAST-A)
    - Management: see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Strength of evidence: strong

# Next

- CDH1 P/LP variant, gastric cancer management, go to HGAST-B
- CDH1 P/LP variant, breast cancer risk, go to HGAST-A
- BRCA1/2 P/LP variant, other risks, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- References on GENE-19
