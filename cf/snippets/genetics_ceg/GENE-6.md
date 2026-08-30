+++
id           = "genetics_ceg/GENE-6"
gid          = "genetics_ceg"
ref          = "GENE-6"
page         = 121
title        = "Cancer risk management for a germline CHEK2 or CTNNA1 pathogenic/likely pathogenic variant"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-3", "GENE-18", "GENE-19", "GENE-20", "HGAST-B"]

[facets]
disease   = "genetics_ceg"
biomarker = ["chek2", "ctnna1"]
timepoint = ["genetic-testing", "screening", "surveillance", "risk-reduction"]

[[variables]]
name = "gene"
type = "enum"
options = ["CHEK2", "CTNNA1"]
[[variables]]
name = "variant"
type = "text"
[[variables]]
name = "variant_type"
type = "enum"
options = ["truncating", "loss-of-function", "missense", "other"]
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "family_cancer_history"
type = "text"
[[variables]]
name = "polyp_count"
type = "number"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-6, p121
- Cancer risk management based on genetic test results, for CHEK2 and CTNNA1
- CTNNA1 rows apply to truncating variants only
- Footnotes on GENE-18
- References on GENE-19
- All recommendations category 2A unless otherwise indicated

# Assessment

- Gene ___ (gene)
- Variant ___ (variant)
- Variant type ___ (variant_type)
- Personal cancer history ___ (personal_cancer_history)
- Family cancer history, including first-degree relatives ___ (family_cancer_history)
- Cumulative polyp count ___ (polyp_count)
    - Polyposis is defined as 10 or more polyps

# CHEK2 - colon cancer and colorectal phenotype

- Estimated absolute risk: no increased risk
- Management
    - General population screening is appropriate for these individuals
    - For probands with a personal or first-degree family history of CRC or polyps, increased screening as per the relevant guidelines
        - NCCN Guidelines for Colon Cancer
        - NCCN Guidelines for Rectal Cancer
        - NCCN Guidelines for Colorectal Cancer Screening
- Strength of evidence: strong
- Colorectal phenotype: no polyposis

# CHEK2 - endometrial cancer

- No evidence of increased risk

# CHEK2 - gastric cancer

- No evidence of increased risk

# CHEK2 - other cancer risks

- Absolute risk: increased lifetime risk of breast and prostate cancer
- Management: NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- See GENE-20 for references

# CTNNA1 - colon cancer and colorectal phenotype

- No evidence of increased risk

# CTNNA1 - endometrial cancer

- No evidence of increased risk

# CTNNA1 - gastric cancer

- Absolute risk: elevated and uncertain
- Management: see HGAST-B
- Strength of evidence: limited
- Increased gastric cancer risk has only been associated with truncating/loss-of-function CTNNA1 variants
    - Pathogenic missense variants are associated with macular dystrophy and have not been shown to confer increased gastric cancer risk
- Data on gastric cancer risk in individuals with CTNNA1 P/LP variants are limited
    - One study suggests a cumulative 49% to 57% risk of diffuse gastric cancer by age 80 y in families with CTNNA1 PVs and a history of gastric cancer
    - Another suggests a 7-fold increase in gastric cancer risk
- Pending further evidence, manage gastric cancer risk for truncating/loss-of-function CTNNA1 carriers similar to a CDH1 P/LP variant (HGAST-B)
    - Endoscopic surveillance
    - Consideration of prophylactic total gastrectomy in select individuals
- Refer to institutions with expertise in managing risks for cancer associated with CTNNA1

# CTNNA1 - other cancer risks

- Possible increased lifetime risk of breast cancer in females
