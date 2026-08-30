+++
id           = "genetics_ceg/GENE-4"
gid          = "genetics_ceg"
ref          = "GENE-4"
page         = 119
title        = "Cancer risk management based on genetic test results for AXIN2, BLM heterozygotes, and BMPR1A"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-3", "GENE-5", "JPS-1", "JPS-2", "JPS-3"]

[facets]
disease   = "genetics_ceg"
biomarker = ["axin2", "bmpr1a"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "gene_pv"
type = "enum"
options = ["AXIN2", "BLM heterozygote", "BMPR1A"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "last_colonoscopy"
type = "text"
[[variables]]
name = "polyp_count"
type = "text"
[[variables]]
name = "polyp_histology"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-4, p119
- Cancer risk management based on genetic test results
- Applies to individuals with a P/LP variant in AXIN2 or BMPR1A, and to BLM heterozygotes
- Each gene is read across four risk columns: colon cancer and colorectal phenotype, endometrial cancer, gastric cancer, other risks
- Polyposis is defined as at least 10 polyps
- All recommendations category 2A unless otherwise indicated
- References on GENE-19

# Assessment

- ___ (age) yo
- P/LP variant identified: ___ (gene_pv)
- Personal and family cancer history: ___ (family_history)
- Last colonoscopy: ___ (last_colonoscopy)
- Cumulative polyp count: ___ (polyp_count)
- Polyp histology: ___ (polyp_histology)

# AXIN2

- Colon cancer
    - Estimated absolute risk: insufficient data to define
    - Management
        - Begin high-quality colonoscopy at age 25 to 30 y
        - Repeat every 2 to 3 y if negative
        - If polyps are found, colonoscopy every 1 to 2 y
            - With consideration of surgery if the polyp burden becomes unmanageable by colonoscopy
        - Surgical evaluation if appropriate
    - Strength of evidence: limited
- Colorectal phenotype
    - 0 to more than 100 polyps
    - Mainly adenomas
- Endometrial cancer: no evidence of increased risk
- Gastric cancer: no evidence of increased risk
- Other cancers: unknown or insufficient evidence
- Associated with oligodontia (absence of more than 6 adult non-wisdom teeth) and other features of ectodermal dysplasia
- Polymorphisms in AXIN2 have also been associated with CRC and other cancers, but the management above refers to individuals with P/LP variants in AXIN2

# BLM heterozygotes

- Colon cancer
    - Estimated absolute risk: 5% to 10%
    - Management
        - Evidence insufficient to provide specialized CRC screening recommendations
        - Manage based on family history
        - See NCCN Guidelines for Colorectal Cancer Screening
    - Strength of evidence: limited
- Colorectal phenotype: no polyposis
- Endometrial cancer: no evidence of increased risk
- Gastric cancer: no evidence of increased risk
- Other cancers: unknown or insufficient evidence
- Counsel for risk of the autosomal recessive condition Bloom syndrome in offspring
    - Cunniff C, et al. Am J Med Genet A 2018

# BMPR1A

- Colon cancer
    - Absolute risk: 40% to 50%
    - Management: juvenile polyposis syndrome (JPS-2)
    - Strength of evidence: strong
- Colorectal phenotype
    - At least 5 polyps
    - Hamartomatous polyps, sometimes referred to as juvenile polyps or juvenile type hamartomas
- Endometrial cancer: no evidence of increased risk
- Gastric cancer
    - Absolute risk: stomach cancer, see comment below
    - Management: juvenile polyposis syndrome (JPS-2)
    - Strength of evidence: strong
    - In a meta-analysis of 204 patients with BMPR1A, only one patient with gastric cancer was identified (Singh A, et al. Gastrointest Endosc 2023)
- Other cancers: unknown or insufficient evidence
- Not associated with features of HHT

# Next

- AXIN2: begin high-quality colonoscopy at age 25 to 30 y, then repeat on the interval set by whether polyps are found
- BLM heterozygote: manage based on family history, see NCCN Guidelines for Colorectal Cancer Screening
- BMPR1A: manage as juvenile polyposis syndrome (JPS-2)
- BMPR1A: for management, see JPS-3
