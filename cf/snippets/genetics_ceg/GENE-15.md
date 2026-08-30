+++
id           = "genetics_ceg/GENE-15"
gid          = "genetics_ceg"
ref          = "GENE-15"
page         = 130
title        = "Cancer risk management for PMS2, PTEN, or RNF43 pathogenic variants"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-14", "GENE-16", "GENE-19", "SPS-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["pms2", "lynch", "pten", "serrated-polyposis"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene"
type = "enum"
options = ["PMS2", "PTEN", "RNF43"]
[[variables]]
name = "variant"
type = "text"
[[variables]]
name = "age"
type = "number"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "polyp_histology"
type = "text"
[[variables]]
name = "last_colonoscopy"
type = "text"
[[variables]]
name = "family_cancer_history"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-15, p130
- Cancer risk management based on genetic test results
- Covers three gene/syndrome rows
    - PMS2, Lynch syndrome
    - PTEN, PTEN hamartoma tumor syndrome
    - RNF43, serrated polyposis syndrome
- References on GENE-19
- All recommendations category 2A unless otherwise indicated

# Assessment

- Gene ___ (gene)
- Pathogenic variant ___ (variant)
- Age ___ (age)
- Cumulative polyp count ___ (polyp_count)
    - Polyposis is defined as 10 or more polyps
- Polyp histology ___ (polyp_histology)
- Last colonoscopy ___ (last_colonoscopy)
- Family cancer history ___ (family_cancer_history)

# PMS2 - colon cancer and colorectal phenotype

- Absolute risk: 8.7%-20%
- Management: Lynch syndrome (LS-E)
- Strength of evidence: strong
- Colorectal phenotype
    - No polyposis
    - Polyp spectrum can include adenomas and sessile serrated lesions

# PMS2 - endometrial cancer

- Absolute risk: 13%-26%
- Management: Lynch syndrome (LS-E)
- Strength of evidence: strong

# PMS2 - gastric cancer

- No evidence of increased risk

# PMS2 - other cancers and other risks

- Other cancers: Lynch syndrome (LS-E)
- Counsel for risk of the rare autosomal recessive condition CMMRD syndrome in offspring
    - CMMRD can occur if both parents are a carrier of a pathogenic variant in the same DNA MMR gene

# PTEN - colon cancer and colorectal phenotype

- Estimated absolute risk: 9%-20%
- Management: NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Strength of evidence: strong
- Colorectal phenotype
    - 0 to more than 100 polyps
    - Mixed polyposis: hamartomas, hyperplastic, adenomas, inflammatory, ganglioneuromas

# PTEN - endometrial cancer

- Estimated absolute risk: 28%
- Management: NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate

# PTEN - gastric cancer

- No evidence of increased risk

# PTEN - other cancers and other risks

- Strong evidence for increased lifetime risk of
    - Breast, 40%-60% by historical cohort data, more than 60% by projected estimates
    - Thyroid, 35%
    - Kidney, 34%
    - Melanoma, 6%
- Management: NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Multiple non-cancer features, which are included in the major/minor criteria (COWD-A 1 of 2)

# RNF43 - colon cancer and colorectal phenotype

- Absolute risk: insufficient data to define
- Management: serrated polyposis syndrome (SPS-1), if features of SPS are present
- Strength of evidence: limited
- Colorectal phenotype
    - 5 to more than 100 polyps
    - Any histologic subtype of serrated lesions/polyps
        - Hyperplastic polyp
        - Sessile serrated lesion without or with dysplasia
        - Traditional serrated adenoma
        - Unclassified serrated adenoma

# RNF43 - endometrial cancer

- No evidence of increased risk

# RNF43 - gastric cancer

- No evidence of increased risk

# RNF43 - other cancers and other risks

- Unknown or insufficient evidence
- Pathogenic variants in RNF43 have been identified as a rare cause of SPS
