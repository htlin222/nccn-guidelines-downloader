+++
id           = "genetics_ceg/GENE-9"
gid          = "genetics_ceg"
ref          = "GENE-9"
page         = 124
title        = "Cancer risk management for a germline MLH1, MSH2/EPCAM, or MSH6 pathogenic/likely pathogenic variant"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-8", "GENE-10", "GENE-19"]

[facets]
disease   = "genetics_ceg"
biomarker = ["mlh1", "msh2", "epcam", "msh6", "lynch"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene"
type = "enum"
options = ["MLH1", "MSH2", "EPCAM", "MSH6"]
[[variables]]
name = "variant"
type = "text"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "family_cancer_history"
type = "text"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "partner_mmr_status"
type = "enum"
options = ["not tested", "no PV", "PV in the same MMR gene", "PV in a different MMR gene"]
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-9, p124
- Cancer risk management based on genetic test results, for MLH1, MSH2 and EPCAM, and MSH6
- EPCAM row applies to a 3' deletion with MSH2 involvement
- References on GENE-19
- All recommendations category 2A unless otherwise indicated

# Assessment

- Gene ___ (gene)
- Variant ___ (variant)
- Personal cancer history ___ (personal_cancer_history)
- Family cancer history ___ (family_cancer_history)
- Cumulative polyp count ___ (polyp_count)
    - Polyposis is defined as ≥10 polyps
- Partner MMR testing ___ (partner_mmr_status)

# MLH1 - Lynch syndrome

- Colon cancer and colorectal phenotype
    - Absolute risk: 46%–61%
    - Management: Lynch syndrome (LS-B)
    - Strength of evidence: very strong
    - Colorectal phenotype: no polyposis
        - Polyp spectrum can include adenomas and sessile serrated lesions
- Endometrial cancer
    - Absolute risk: 34%–54%
    - Management: Lynch syndrome (LS-B)
    - Strength of evidence: very strong
- Gastric cancer
    - Absolute risk: 5%–7%
    - Management: Lynch syndrome (LS-B)
    - Strength of evidence: very strong
- Other cancers
    - Lynch syndrome (LS-B)
- Counsel for risk of rare autosomal recessive condition, CMMRD syndrome, in offspring
    - CMMRD can occur if both parents are a carrier of a PV in the same MMR gene

# MSH2, and EPCAM 3' deletion with MSH2 involvement - Lynch syndrome

- Colon cancer and colorectal phenotype
    - Absolute risk: 33%–52%
    - Management: Lynch syndrome (LS-C)
    - Strength of evidence: very strong
    - Colorectal phenotype: no polyposis
        - Polyp spectrum can include adenomas and sessile serrated lesions
- Endometrial cancer
    - Absolute risk: 21%–57%
    - Management: Lynch syndrome (LS-C)
    - Strength of evidence: very strong
- Gastric cancer
    - Absolute risk: 0.2%–9.0%
    - Management: Lynch syndrome (LS-C)
    - Strength of evidence: very strong
- Other cancers
    - Lynch syndrome (LS-C)
- Counsel for risk of rare autosomal recessive condition, CMMRD syndrome, in offspring
    - CMMRD can occur if both parents are a carrier of a PV in the same MMR gene

# MSH6 - Lynch syndrome

- Colon cancer and colorectal phenotype
    - Absolute risk: 10%–44%
    - Management: Lynch syndrome (LS-D)
    - Strength of evidence: very strong
    - Colorectal phenotype: no polyposis
        - Polyp spectrum can include adenomas and sessile serrated lesions
- Endometrial cancer
    - Absolute risk: 16%–49%
    - Management: Lynch syndrome (LS-D)
    - Strength of evidence: very strong
- Gastric cancer
    - Absolute risk: ≤1% to 7.9%
    - Management: Lynch syndrome (LS-D)
    - Strength of evidence: very strong
- Other cancers
    - Lynch syndrome (LS-D)
- Counsel for risk of rare autosomal recessive condition, CMMRD syndrome, in offspring
    - CMMRD can occur if both parents are a carrier of a PV in the same MMR gene

# Next

- MLH1 pathogenic/likely pathogenic variant, manage per LS-B
- MSH2, or EPCAM 3' deletion with MSH2 involvement, manage per LS-C
- MSH6 pathogenic/likely pathogenic variant, manage per LS-D
